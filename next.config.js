/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true
    },
    i18n: {
      locales: ['uz', 'ru'],
      defaultLocale: 'uz'
    }
  }
  
  module.exports = nextConfig;
  