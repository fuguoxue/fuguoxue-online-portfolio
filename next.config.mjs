/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  trailingSlash: true, // Optional: adds trailing slash to URLs like `/about/` instead of `/about`
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
