/** @type {import('next').NextConfig} */

// Handle GitHub Pages basePath:
// If deployed on GitHub Actions and repository is not username.github.io,
// use /repo-name as basePath.
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const parts = process.env.GITHUB_REPOSITORY.split('/');
  if (parts.length > 1 && !parts[1].endsWith('.github.io')) {
    repo = `/${parts[1]}`;
  }
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : repo;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  // Expose the computed basePath to client code (withBase helper).
  // On GitHub Actions this is '/repo-name', locally it is ''.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
