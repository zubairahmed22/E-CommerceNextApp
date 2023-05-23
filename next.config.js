/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://e-commerce-next-ap-5vp198yct-zubairahmed22.vercel.app/:path*'
      }
    ]
  }
}