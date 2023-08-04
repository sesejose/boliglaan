/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.sesejose.com"],
  },

  // The default values
  // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

  // Example
  imageSizes: [],
  deviceSizes: [400, 500, 640, 750, 828, 1080],
  // the 2 arrays will be concatinated anyway,
  // and deviceSizes enables that we can use vw
};

module.exports = nextConfig;
