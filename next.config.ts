import type { NextConfig } from "next";

const nextConfig: NextConfig = { images: { remotePatterns: [{ protocol: "https", hostname: "static.blinkist.com" }] } };

export default nextConfig;
