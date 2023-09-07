/** @type {import('next').NextConfig} */
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")

const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['http://k.kakaocdn.net', 'http://k.kakaocdn.net'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
        port: '',
        pathname: '/**/*',
      },
    ],
  }
}

module.exports = nextConfig
