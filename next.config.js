/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['a.cdn-hotels.com','cdn.britannica.com','www.airtransat.com'],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
