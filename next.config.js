/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '9199',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/har-var-det-slackt.appspot.com/o/**'
      },
      {
        protocol: 'https',
        hostname: 'strapi.chunky.dev',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
