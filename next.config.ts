import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://7gqxz60aa5shpy47.public.blob.vercel-storage.com/**"),
    ],
  },
};

export default nextConfig;
