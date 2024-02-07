/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/products/delete_forever",
        destination: "/products",
        permanent: true
      },
      {
        source: "/products/delete_temp",
        destination: "/products",
        permanent: false
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/ellie',
        destination: '/about/me/ellie'
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug'
      }
    ]
  }
};

export default nextConfig;
