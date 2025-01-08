/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  reactStrictMode: false,
  trailingSlash: true, // Optional: adds trailing slash to URLs like `/about/` instead of `/about`
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  // Add headers for Unity WebGL support
  async headers() {
    return [
      {
        source: '/unity-build/:all*', // Adjust this path if your Unity build is in a different folder
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' }, // Allow access from any origin
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' }, // Required for WebAssembly
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },    // Required for WebAssembly
          { key: 'Content-Type', value: 'application/wasm' },            // For .wasm files
        ],
      },
    ];
  },
};

export default nextConfig;
