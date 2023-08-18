/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/naver/:path*/',
        destination: 'https://ja.dict.naver.com/:path*/',
      },
    ]
  },
}

module.exports = nextConfig
