import type { NextConfig } from "next";

const rootDir = __dirname;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: rootDir
  }
};

export default nextConfig;
