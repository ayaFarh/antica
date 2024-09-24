/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'placeimg.com',
      },
      {
        protocol: 'https',
        hostname: 'api.lorem.space',
      },
      {
        protocol: 'https',
        hostname: 'api.escuelajs.co',
      },
      {
        protocol: 'https',
        hostname: 'images.app.goo.gl',
      },
      {
        protocol: 'https',
        hostname: 'vue-ecom.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'prium.github.io',
      },
    ],
  },};


export default nextConfig;
