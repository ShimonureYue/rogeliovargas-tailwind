/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();
 
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = withNextIntl(nextConfig);
