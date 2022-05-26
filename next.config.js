/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  img-src 'self' data:;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
`
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
]
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
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
