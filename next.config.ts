import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev','192.168.0.190','192.168.1.116'],
};

export default nextConfig;
