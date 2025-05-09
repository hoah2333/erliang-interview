import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.blinkist.com" },
      { protocol: "https", hostname: "images.blinkist.io" },
    ],
  },
};

export default nextConfig;
