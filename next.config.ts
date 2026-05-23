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
    ]
  },
}

export default nextConfig
