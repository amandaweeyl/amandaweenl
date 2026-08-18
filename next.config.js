/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'type.cargo.site',
      },
    ],
  },
};

module.exports = nextConfig;
