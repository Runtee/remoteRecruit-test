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
    <section className="relative z-10 bg-signup-gradient lg:h-[610px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[380px] w-[380px] translate-x-1/3 -translate-y-1/4 rounded-full bg-white/50" />
        <div className="absolute left-[10%] top-6 h-12 w-12 rounded-full bg-amber-gradient sm:left-[16%] lg:left-[18%] lg:top-[31px]" />
        <div className="absolute bottom-10 right-[8%] h-7 w-7 rounded-full bg-check-gradient lg:bottom-[78px] lg:right-[22%]" />
      </div>

      <Reveal className="px-5 pt-16 sm:px-8 sm:pt-24 lg:absolute lg:left-0 lg:top-[100px] lg:-ml-3 lg:w-[48%] lg:max-w-[700px] lg:p-0">
        <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[40px] bg-white p-2.5 shadow-card lg:mx-0 lg:h-[589px] lg:max-w-none">
          <LazyImage
            src="/mockup-jobboard.webp"
            alt="RemoteRecruit dashboard preview — find work quickly"
            className="w-full rounded-[32px]"
          />
        </div>
      </Reveal>

      <div className="relative mx-auto h-full max-w-[1440px] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-0 lg:pb-0">
        <Reveal
          delay={120}
          className="mt-10 lg:absolute lg:left-[53%] lg:top-1/2 lg:mt-0 lg:max-w-[440px] lg:-translate-y-1/2"
        >
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
