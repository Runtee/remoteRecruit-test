import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[600px] items-center overflow-hidden sm:min-h-[704px]"
    >
      {/* Exact hero background exported from Figma (gradient + ellipses + wave). */}
      <img
        src="/hero-bg.svg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />

      <div className="wrap relative -mt-12 text-center sm:-mt-16">
        <Reveal>
          <h1 className="mx-auto max-w-[1040px] text-[34px] font-bold leading-[1.15] text-white sm:text-display">
            RemoteRecruit’s Difference
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-[800px] text-base font-medium leading-relaxed text-white sm:text-lead">
            RemoteRecruit is connecting the world with an easy-to-use platform that lets
            full-time, part-time, and freelance workers showcase their talents to
            businesses that need them. With no paywalls, no fees, and no barriers, there’s
            nothing but you, your talents, and the next step in your career.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
