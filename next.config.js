/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.orra.dev'
      }
    ]
  },
  output: 'standalone',
}

module.exports = nextConfig
