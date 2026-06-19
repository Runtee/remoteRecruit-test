import { useEffect, useState } from 'react'
import Logo from './Logo'
import Button from './Button'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'F.A.Q', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-royal-deep/95 py-3 shadow-nav backdrop-blur' : 'py-6'
      }`}
    >
      <div className="wrap flex items-center justify-between">
        <a href="#top" aria-label="RemoteRecruit home">
          <Logo className="h-9 sm:h-[42px]" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-base font-medium text-white transition-opacity hover:opacity-80"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 sm:gap-8 lg:flex">
          <a
            href="#pricing"
            className="text-sm font-semibold tracking-wide text-[#F5F7FE] transition-opacity hover:opacity-80"
          >
            Sign In
          </a>
          <Button variant="nav">Sign Up</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          className="wrap mt-3 flex flex-col gap-1 border-t border-white/10 pt-3 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-4">
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="px-2 py-2 text-sm font-semibold tracking-wide text-[#F5F7FE]"
            >
              Sign In
            </a>
            <Button variant="nav" onClick={() => setOpen(false)}>
              Sign Up
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
