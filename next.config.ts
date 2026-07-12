import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: '/Detailer', destination: '/archive/detailer/', permanent: true },
      { source: '/Detailer/', destination: '/archive/detailer/', permanent: true },
      { source: '/Satori', destination: '/archive/satori/', permanent: true },
      { source: '/Satori/', destination: '/archive/satori/', permanent: true },
      { source: '/satori-prod-demo', destination: '/archive/satori-prod-demo/', permanent: true },
      { source: '/satori-prod-demo/', destination: '/archive/satori-prod-demo/', permanent: true },
    ]
  },
  async rewrites() {
    return [
      { source: '/archive/detailer', destination: '/archive/detailer/index.html' },
      { source: '/archive/detailer/', destination: '/archive/detailer/index.html' },
      { source: '/archive/v1.0', destination: '/archive/v1.0/index.html' },
      { source: '/archive/v1.0/', destination: '/archive/v1.0/index.html' },
      { source: '/archive/v2.0', destination: '/archive/v2.0/index.html' },
      { source: '/archive/v2.0/', destination: '/archive/v2.0/index.html' },
      { source: '/archive/satori', destination: '/archive/satori/index.html' },
      { source: '/archive/satori/', destination: '/archive/satori/index.html' },
      // Satori product demo — a multi-route static export. The entry serves the
      // root shell; every sub-route (/sources, /modules, /modules/[id], ...) is
      // its own pre-rendered index.html, so deep-links and hard refreshes must
      // resolve to that route's file. These rewrites run afterFiles, so real
      // assets (_next/*, module-render/*.html) are served before the catch-all.
      { source: '/archive/satori-prod-demo', destination: '/archive/satori-prod-demo/index.html' },
      { source: '/archive/satori-prod-demo/', destination: '/archive/satori-prod-demo/index.html' },
      { source: '/archive/satori-prod-demo/:path+', destination: '/archive/satori-prod-demo/:path+/index.html' },
      { source: '/archive/satori-prod-demo/:path+/', destination: '/archive/satori-prod-demo/:path+/index.html' },
      { source: '/recommendation', destination: '/files/recommendation.pdf' },
    ]
  },
}

export default nextConfig
