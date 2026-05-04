/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  env: {
    CUSTOM_KEY: 'AMODZ_PROPERTIES',
  },
  trailingSlash: true,
}

module.exports = nextConfig
