import type { Plan } from '../data/content'
import Button from './Button'

function CheckIcon({ included }: { included: boolean }) {
  return (
    <span
      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
        included ? 'bg-check-gradient' : 'bg-check-muted'
      }`}
    >
      {included ? (
        <svg viewBox="0 0 10 8" className="h-2.5 w-3" fill="none" aria-hidden>
          <path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" fill="none" aria-hidden>
          <path d="M1 1l8 8M9 1l-8 8" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )}
    </span>
  )
}

function PremiumTag({ text }: { text: string }) {
  return (
    <span className="absolute -top-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-[22px] bg-pill px-2 py-2 pr-4">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white">
        <img src="/premium-tag.png" alt="" className="h-5 w-auto" aria-hidden loading="lazy" decoding="async" />
      </span>
      <span className="text-sm font-semibold text-royal-deep">{text}</span>
    </span>
  )
}

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`relative rounded-[28px] bg-white p-6 shadow-card sm:p-8 ${
        plan.featured ? 'ring-1 ring-royal-deep/5' : 'border border-royal-deep/5'
      }`}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-7">
        <div className="relative flex w-full flex-col items-center justify-center rounded-[18px] bg-[#ECF2FF] px-4 py-10 text-center sm:w-[44%] sm:max-w-[180px]">
          {plan.badge ? <PremiumTag text={plan.badge} /> : null}
          <p
            className={`text-[32px] font-semibold leading-[1.4] ${
              plan.featured ? 'bg-check-gradient bg-clip-text text-transparent' : 'text-cyan'
            }`}
          >
            {plan.name}
          </p>
          <p className="mt-1 text-[20px] font-medium leading-tight text-ink-muted">
            {plan.subtitle}
            {plan.period ? <span className="block">{plan.period}</span> : null}
          </p>
        </div>

        <ul className="flex flex-1 flex-col justify-center gap-4">
          {plan.features.map((f) => (
            <li
              key={f.label}
              className={`flex items-center gap-3 text-base font-medium ${
                f.included ? 'text-ink-dark' : 'text-ink-muted'
              }`}
            >
              <CheckIcon included={f.included} />
              {f.label}
            </li>
          ))}
        </ul>
      </div>

      <Button className="mt-7 w-full text-[20px]" variant={plan.featured ? 'gradient' : 'outline'}>
        Get Started
      </Button>
    </article>
  )
}
