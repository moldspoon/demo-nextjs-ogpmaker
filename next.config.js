/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = {
  env: {
    TZ: 'Asia/Tokyo',
  },
  fonts: {
    loader: 'default',
    google: {
      families: ['Noto+Sans+JP', 'Zen+Maru+Gothic'],
    },
  },
}

module.exports = nextConfig
