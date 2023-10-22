/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/huangrao121/blogs/master/images/**',
      },
    ],
  },
}

module.exports = nextConfig
