import { useEffect, useState } from 'react'
import Logo from './Logo'
import Button from './Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-royal-deep/95 py-3 shadow-nav backdrop-blur' : 'py-6'
      }`}
    >
      <div className="wrap flex items-center justify-between">
        <Logo className="h-9 sm:h-[42px]" />
        <div className="flex items-center gap-5 sm:gap-8">
          <a
            href="#pricing"
            className="text-sm font-semibold text-[#F5F7FE] transition-opacity hover:opacity-80"
          >
            Sign In
          </a>
          <Button variant="nav">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}
