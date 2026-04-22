const commitSha = import.meta.env.VITE_GIT_COMMIT_SHA;
const buildTime = import.meta.env.VITE_BUILD_TIME;

export const shortCommitSha = commitSha ? commitSha.slice(0, 7) : null;
export const buildTimeIso = buildTime ?? null;
export const buildStamp = shortCommitSha ?? buildTimeIso ?? 'dev';
