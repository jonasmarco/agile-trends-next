// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  images: {
    domains: ['source.unsplash.com', 'picsum.photos', 'localhost'],
    formats: ['image/webp']
  },
  pwa: {
    dest: 'public',
    disable: !isProd,
    register: true
  },
  swcMinify: true
})
