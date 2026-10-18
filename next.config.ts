import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Keep tracing scoped to this app rather than a parent folder's lockfile.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
