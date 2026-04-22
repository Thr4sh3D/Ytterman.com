const commitSha = import.meta.env.VITE_GIT_COMMIT_SHA;
const buildTime = import.meta.env.VITE_BUILD_TIME;

export const shortCommitSha = commitSha
  ? commitSha.length >= 7
    ? commitSha.slice(0, 7)
    : commitSha
  : null;
export const buildTimeIso = buildTime ?? null;
const buildTimeForCacheBusting = buildTimeIso ? buildTimeIso.replace(/[^0-9TZ-]/g, '') : null;
export const cacheBusterToken = shortCommitSha ?? buildTimeForCacheBusting ?? 'dev';
