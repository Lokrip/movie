import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_ACCESS_KEY: process.env.API_ACCESS_KEY,
  },

  images: {
    domains: ["image.tmdb.org"],
  },
};

export default nextConfig;
