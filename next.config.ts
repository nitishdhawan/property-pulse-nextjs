import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Any other Next.js config options can go here

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname), // '@' -> root of the project
    };
    return config;
  },
};

export default nextConfig;
