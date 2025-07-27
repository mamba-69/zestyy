import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iili.io',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
