/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
};

export default nextConfig;
