import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['encrypted-tbn0.gstatic.com'], // ✅ 여기 추가
  },
};

export default nextConfig;
