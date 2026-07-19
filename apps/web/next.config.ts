import type { NextConfig } from "next";

const isE2E = process.env.PAPER_ATLAS_E2E === "1";

const nextConfig: NextConfig = {
  ...(isE2E ? {} : { output: "export" }),
  basePath: process.env.PAGES_BASE_PATH,
  reactStrictMode: true,
};

export default nextConfig;
