import { plans } from '../data/content'
import PricingCard from './PricingCard'
import Reveal from './Reveal'

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white pt-16 sm:pt-24">
      <div className="wrap">
        <Reveal>

          <h2 className="text-center text-[26px] font-semibold leading-tight text-navy sm:text-h2">
            Help Is One Click Away
          </h2>
        </Reveal>

        <div className="relative z-20 mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120}>
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
