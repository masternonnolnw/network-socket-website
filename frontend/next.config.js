/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exports: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
