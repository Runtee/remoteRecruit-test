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
    <span className="absolute left-8 top-2.5 inline-flex items-center gap-2 rounded-[22px] bg-pill px-2 py-2 pr-4">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white">
        <img src="/premium-icon.svg" alt="" className="h-5 w-auto" aria-hidden />
      </span>
      <span className="text-sm font-semibold text-royal-deep">{text}</span>
    </span>
  )
}

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`relative overflow-hidden rounded-3xl bg-white p-8 shadow-card sm:p-10 ${
        plan.featured ? 'ring-2 ring-royal-deep/5' : 'border border-royal-deep/5'
      }`}
    >
      {plan.badge ? <PremiumTag text={plan.badge} /> : null}

      <div className={`mb-6 ${plan.badge ? 'mt-12' : ''}`}>
        <h3 className="text-[34px] font-semibold text-royal-deep">{plan.name}</h3>
        <p className="mt-1 text-lg font-medium text-navy sm:text-[20px]">
          {plan.subtitle}
          {plan.period ? ` • ${plan.period}` : ''}
        </p>
      </div>

      <ul className="flex flex-col gap-4">
        {plan.features.map((f) => (
          <li
            key={f.label}
            className={`flex items-center gap-3 text-sm font-medium sm:text-base ${
              f.included ? 'text-ink-dark' : 'text-ink-muted'
            }`}
          >
            <CheckIcon included={f.included} />
            {f.label}
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Button className="w-full" variant={plan.featured ? 'gradient' : 'outline'}>
          Get Started
        </Button>
      </div>
    </article>
  )
}
