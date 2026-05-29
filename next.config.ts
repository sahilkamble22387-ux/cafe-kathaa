import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cafe-kathaa",
  assetPrefix: "/cafe-kathaa",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
