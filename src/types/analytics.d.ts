export {};

type GtagFunction = (...args: unknown[]) => void;
type DataLayerEntry = unknown[] | Record<string, unknown>;

declare global {
  interface Window {
    gtag?: GtagFunction;
    fbq?: (...args: unknown[]) => void;
    dataLayer: DataLayerEntry[];
  }
}
