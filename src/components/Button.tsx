import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'gradient' | 'outline' | 'nav'

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  href?: string
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const base =
  'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  // Pricing "Get Started" (premium) — cyan→navy gradient.
  gradient:
    'bg-cta-gradient text-white rounded-3xl px-9 py-4 shadow-float hover:-translate-y-0.5 active:translate-y-0',
  // Outlined buttons — "Get Started" (free) and "More Questions".
  outline:
    'border-2 border-royal-deep/30 text-royal-deep rounded-2xl px-7 py-3.5 hover:bg-royal-deep/5 hover:-translate-y-0.5',
  // Navbar "Sign Up".
  nav: 'bg-[#4DA8CC] text-[#F5F7FE] rounded-2xl px-6 py-2.5 text-sm hover:bg-[#3f9bc0] hover:-translate-y-0.5',
}

export default function Button({
  children,
  variant = 'gradient',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
