import LazyImage from './LazyImage'
import Reveal from './Reveal'

function GetStarted() {
  return (
    <a
      href="#pricing"
      className="mt-9 inline-flex items-center gap-3 rounded-full bg-cyan py-2.5 pl-2.5 pr-7 text-base font-medium text-royal-deep shadow-float transition-transform duration-200 hover:-translate-y-0.5"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-white/25">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M5 12h13M13 6l6 6-6 6"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      Get Started
    </a>
  )
}

export default function SignUpAd() {
  return (
    <section className="relative overflow-hidden bg-signup-gradient">

      <div className="pointer-events-none absolute right-0 top-0 h-[380px] w-[380px] translate-x-1/3 -translate-y-1/4 rounded-full bg-white/50" />
      <div className="pointer-events-none absolute left-[12%] top-8 h-12 w-12 rounded-full bg-amber-gradient sm:top-10" />
      <div className="pointer-events-none absolute bottom-20 right-[28%] h-7 w-7 rounded-full bg-check-gradient" />

      <div className="mx-auto grid max-w-[1440px] items-center gap-8 py-16 sm:py-24 lg:grid-cols-2 lg:gap-4 lg:py-0 lg:min-h-[610px]">

        <Reveal className="relative px-5 sm:px-8 lg:px-0">
          <div className="mx-auto w-full max-w-[480px] overflow-hidden rounded-[40px] bg-white p-3 shadow-card lg:mx-0 lg:ml-[-12%] lg:max-w-[580px]">
            <LazyImage
              src="/mockup-jobboard.webp"
              alt="RemoteRecruit dashboard preview — find work quickly"
              className="w-full rounded-[32px]"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="px-5 sm:px-8 lg:pl-6 lg:pr-12">
          <p className="text-base font-semibold text-royal-deep">Are you ready?</p>
          <h2 className="mt-3 max-w-[420px] text-[32px] font-semibold leading-[1.15] text-navy sm:text-h2lg">
            Help is only a few clicks away!
          </h2>
          <p className="mt-5 max-w-[360px] text-base font-normal text-ink-soft sm:text-bodysm">
            Click Below to get set up super quickly and find help now!
          </p>
          <GetStarted />
        </Reveal>
      </div>
    </section>
  )
}
