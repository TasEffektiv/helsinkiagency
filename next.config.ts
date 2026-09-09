import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.helsinkiagency.com",
      },
      {
        protocol: "https",
        hostname: "helsinkiagency.com",
      },
    ],
    loader: "custom",
    loaderFile: "./netlify-image-loader.ts",
  },
};

export default nextConfig;
