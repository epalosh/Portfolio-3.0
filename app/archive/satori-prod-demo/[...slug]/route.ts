import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const ARCHIVE_ROOT = path.join(process.cwd(), 'public/archive/satori-prod-demo')

// The Satori prod demo under public/archive/ is a static Next.js export with
// its own client-side router, which fetches pre-rendered payload files
// (__next.*.txt, index.txt) with RSC request headers set. On Vercel, any
// RSC-flagged request skips the public/ file match and gets routed into this
// app instead, where the archive's afterFiles rewrites mangle it into a 404.
// That breaks the demo's client-side navigation: every tour step and sidebar
// click hard-reloads and resets the walkthrough. Requests for real files are
// still served straight from public/ — only the mis-routed RSC fetches land
// here, and this handler serves the payload file they were after. The
// rewrites may have appended /index.html segments; strip them.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params
  const segments = slug.filter(
    (s) => s !== 'index.html' && s !== '..' && s !== '.' && s.length > 0
  )
  const relPath = segments.join('/')
  if (!relPath.endsWith('.txt')) {
    return new NextResponse(null, { status: 404 })
  }
  const filePath = path.join(ARCHIVE_ROOT, relPath)
  if (!filePath.startsWith(ARCHIVE_ROOT + path.sep)) {
    return new NextResponse(null, { status: 404 })
  }
  try {
    const data = await fs.readFile(filePath)
    return new NextResponse(new Uint8Array(data), {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    })
  } catch {
    return new NextResponse(null, { status: 404 })
  }
}
