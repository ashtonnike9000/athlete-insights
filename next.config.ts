import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/athlete-insights",
  images: { unoptimized: true },
};

export default nextConfig;
