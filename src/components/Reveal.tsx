import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Animation variant for the reveal. */
  variant?: 'fade-up' | 'fade-in'
  /** Stagger delay in milliseconds. */
  delay?: number
  className?: string
}

/**
 * Reveals its children with a fade/slide animation the first time they scroll
 * into view, using IntersectionObserver. Respects prefers-reduced-motion by
 * relying on the global motion-reduce overrides in index.css.
 */
export default function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
      className={`${visible ? `animate-${variant}` : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
