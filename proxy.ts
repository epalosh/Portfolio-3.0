import { NextRequest, NextResponse } from 'next/server'

// The Satori prod demo under public/archive/ is a static Next.js export with
// its own client-side router. Its navigations fetch pre-rendered payload files
// (__next.*.txt) with RSC request headers set; Vercel's routing treats any
// RSC-flagged request as a data request for THIS app — skipping the public/
// file match and 404ing, which forces the demo into a full-page navigation
// that resets its walkthrough. The routing decision is made from the original
// request headers, so stripping them here doesn't help. Instead, re-issue the
// request without the RSC headers: the fresh request matches the static file
// in public/ and its response is returned as this request's response.
export async function proxy(request: NextRequest) {
  if (!request.headers.has('rsc') || request.headers.has('x-archive-refetch')) {
    return NextResponse.next()
  }
  const headers = new Headers(request.headers)
  headers.delete('rsc')
  headers.delete('next-router-state-tree')
  headers.delete('next-router-prefetch')
  headers.delete('next-router-segment-prefetch')
  headers.delete('next-url')
  headers.set('x-archive-refetch', '1')
  const url = request.nextUrl.toString()
  const upstream = await fetch(url, { headers, redirect: 'manual' })
  const outHeaders = new Headers(upstream.headers)
  outHeaders.set('x-archive-proxy', 'refetch')
  outHeaders.set('x-dbg-fetched-url', url)
  outHeaders.set('x-dbg-upstream-status', String(upstream.status))
  outHeaders.set('x-dbg-upstream-matched', upstream.headers.get('x-matched-path') ?? 'none')
  outHeaders.delete('content-encoding')
  outHeaders.delete('content-length')
  return new NextResponse(upstream.body, { status: upstream.status, headers: outHeaders })
}

export const config = {
  matcher: '/archive/satori-prod-demo/:path*',
}
