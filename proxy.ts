import { NextRequest, NextResponse } from 'next/server'

// The Satori prod demo under public/archive/ is a static Next.js export with
// its own client-side router. Its navigations fetch pre-rendered payload files
// (__next.*.txt) with RSC request headers set; on Vercel those headers make the
// platform treat the request as a data request for THIS app — skipping the
// public/ file match and 404ing, which forces the demo into a full-page
// navigation that resets its walkthrough. Stripping the headers lets the
// files resolve from public/ like any other static asset.
export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers)
  headers.delete('rsc')
  headers.delete('next-router-state-tree')
  headers.delete('next-router-prefetch')
  headers.delete('next-router-segment-prefetch')
  headers.delete('next-url')
  const response = NextResponse.rewrite(request.nextUrl, { request: { headers } })
  response.headers.set('x-archive-proxy', 'hit')
  return response
}

export const config = {
  matcher: '/archive/satori-prod-demo/:path*',
}
