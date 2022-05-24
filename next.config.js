/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blog/1',
        permanent: true,
      },
    ]
  },
}
