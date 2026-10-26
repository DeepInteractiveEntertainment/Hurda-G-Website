/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  // Host-agnostic: works on any static host / node host without an image loader.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
