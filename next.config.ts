import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config images: {options here */
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'pub-bf77108a148e4ef38fbdf999770fe530.r2.dev',
      port: '',
      pathname: '/**',
      search: '',
    },
  ],
  }
}

export default nextConfig;
