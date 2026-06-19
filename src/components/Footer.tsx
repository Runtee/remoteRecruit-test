import { socials } from '../data/content'
import SocialIcon from './SocialIcons'

export default function Footer() {
  return (
    <footer className="relative z-0 -mt-28 text-white sm:-mt-40">
      {/* Exact footer background exported from Figma (gradient + ellipses + top wave). */}
      <img
        src="/footer-bg.svg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />

      <div className="wrap relative pt-48 sm:pt-64">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          <img src="/logo.svg" alt="RemoteRecruit" className="h-14 w-auto sm:h-16" />

          <ul className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <SocialIcon name={s.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mt-14 flex flex-col items-center border-t border-[#8BA3CC]/40 pb-4 pt-4">
        <img src="/badge-rr.svg" alt="RemoteRecruit" className="h-8 w-8" />
      </div>
    </footer>
  )
}
