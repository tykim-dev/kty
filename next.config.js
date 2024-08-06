/** @type {import('next').NextConfig} */
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")

const nextConfig = {
  reactStrictMode: false,
  images: {
    // domains: ['http://k.kakaocdn.net', 'http://k.kakaocdn.net'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/300/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig
