import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  // Set explicitly by the npm scripts so the directory never changes while
  // Next.js is booting or restarting its development server.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
};

export default nextConfig;
