/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest:'public'
})
const runTimeCaching = require('next-pwa/cache')
module.exports = withPWA({
  // pwa:{
  //   dest:'public',
  //   register:true,
  //   mode:'production',
  //   disable:false,
  //   runTimeCaching,
  //   buildExcludes:[/middleware-manifest\.json$/]

  // },
  // reactStrictMode: true,
  // swcMinify: true,
})
