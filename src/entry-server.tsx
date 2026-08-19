import { PassThrough } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';

interface HelmetContext {
  helmet?: HelmetServerState;
}

export interface RenderedRoute {
  appHtml: string;
  headHtml: string;
  htmlAttributes: string;
  bodyAttributes: string;
}

const renderHelmetHead = (helmet: HelmetServerState) => [
  helmet.title.toString(),
  helmet.priority.toString(),
  helmet.meta.toString(),
  helmet.link.toString(),
  helmet.style.toString(),
  helmet.script.toString(),
  helmet.noscript.toString(),
].filter(Boolean).join('\n    ');

export const render = (url: string): Promise<RenderedRoute> => {
  const helmetContext: HelmetContext = {};

  return new Promise((resolve, reject) => {
    let renderError: unknown;
    let settled = false;
    const renderState: { timeout?: ReturnType<typeof setTimeout> } = {};

    const finishWithError = (error: unknown) => {
      if (settled) {
        return;
      }

      settled = true;
      if (renderState.timeout) {
        clearTimeout(renderState.timeout);
      }
      reject(error instanceof Error ? error : new Error(String(error)));
    };

    const { pipe, abort } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          if (renderError) {
            finishWithError(renderError);
            return;
          }

          const output = new PassThrough();
          const chunks: Buffer[] = [];

          output.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
          output.on('error', finishWithError);
          output.on('end', () => {
            if (settled) {
              return;
            }

            const helmet = helmetContext.helmet;
            if (!helmet) {
              finishWithError(new Error(`Helmet-data saknas för ${url}`));
              return;
            }

            settled = true;
            if (renderState.timeout) {
              clearTimeout(renderState.timeout);
            }
            resolve({
              appHtml: Buffer.concat(chunks).toString('utf8'),
              headHtml: renderHelmetHead(helmet),
              htmlAttributes: helmet.htmlAttributes.toString(),
              bodyAttributes: helmet.bodyAttributes.toString(),
            });
          });

          pipe(output);
        },
        onShellError: finishWithError,
        onError(error) {
          renderError ??= error;
        },
      },
    );

    renderState.timeout = setTimeout(() => {
      abort();
      finishWithError(new Error(`För-renderingen av ${url} tog för lång tid`));
    }, 15_000);
  });
};
