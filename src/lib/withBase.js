// Central helper for GitHub Pages subpath (e.g. /myportofolio).
// Local dev (NODE_ENV=development) -> '' so /showcase/... works.
// Production build for Pages (NODE_ENV=production) -> '/myportofolio'.
// External URLs (http, https, data:, blob:) are returned unchanged.

const envBase =
  typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_BASE_PATH : undefined;

export const BASE_PATH =
  envBase !== undefined && envBase !== null
    ? envBase
    : process.env.NODE_ENV === 'production'
      ? '/myportofolio'
      : '';

export function withBase(path) {
  if (!path || typeof path !== 'string') return path;
  // Leave external URLs untouched
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  // Only prefix root-absolute paths
  if (!path.startsWith('/')) return path;
  if (!BASE_PATH) return path;
  // Avoid double-prefixing
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
