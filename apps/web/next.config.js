/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  pageExtensions: ['page.tsx', 'handler.ts'],
  swcMinify: true,
  reactStrictMode: true,
  output: 'standalone',
};
