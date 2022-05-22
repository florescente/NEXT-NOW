/** @type {import('next').NextConfig} */
module.exports = {
  //reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [{ key: 'Content-Security-Policy', value: 'off' }],
      },
    ]
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}
