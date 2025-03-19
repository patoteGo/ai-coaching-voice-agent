import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["http://localhost", "http://127.0.0.1", "http://127.0.0.1:62981"],
};

export default nextConfig;
