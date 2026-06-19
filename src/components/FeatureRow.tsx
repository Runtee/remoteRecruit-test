import type { Feature } from '../data/content'
import FeatureMockup from './FeatureMockup'
import Reveal from './Reveal'

export default function FeatureRow({ feature }: { feature: Feature }) {
  const imageLeft = feature.imageSide === 'left'

  return (
    <div className="wrap grid items-center gap-10 py-8 sm:py-12 lg:grid-cols-2 lg:gap-16">
      <Reveal
        variant="fade-up"
        className={imageLeft ? 'lg:order-1' : 'lg:order-2'}
        delay={imageLeft ? 0 : 120}
      >
        <FeatureMockup variant={feature.variant} />
      </Reveal>

      <Reveal
        variant="fade-up"
        className={imageLeft ? 'lg:order-2' : 'lg:order-1'}
        delay={imageLeft ? 120 : 0}
      >
        <span className="tag-pill">{feature.tag}</span>
        <h2 className="mt-7 max-w-[500px] text-[28px] font-medium leading-[1.2] text-navy sm:text-h2">
          {feature.title}
        </h2>
        <p className="mt-6 max-w-[500px] text-base font-normal leading-relaxed text-navy sm:text-body">
          {feature.body}
        </p>
      </Reveal>
    </div>
  )
}
