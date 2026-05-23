'use client'
import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    )
    document.querySelectorAll<Element>('.reveal').forEach((el) => {
      // Already in or above the viewport (e.g. back-button restore) — reveal immediately
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.classList.add('in')
      } else {
        io.observe(el)
      }
    })
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => el.classList.add('in'))
    }, 900)
    return () => {
      io.disconnect()
      clearTimeout(timer)
    }
  }, [])
  return null
}
