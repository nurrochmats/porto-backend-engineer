import { useEffect, useRef, useState } from 'react'

export function useInView(ref: React.RefObject<Element | null>, threshold = 0.15) {
  const [inView, setInView] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!ref.current) return
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observerRef.current?.disconnect()
        }
      },
      { threshold }
    )
    observerRef.current.observe(ref.current)
    return () => observerRef.current?.disconnect()
  }, [ref, threshold])

  return inView
}
