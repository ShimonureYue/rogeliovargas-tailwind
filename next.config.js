/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();
 
const nextConfig = {
  output: 'export',
}

module.exports = withNextIntl(nextConfig);
