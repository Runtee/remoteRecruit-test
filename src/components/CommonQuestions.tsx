import { faqs } from '../data/content'
import Button from './Button'
import Reveal from './Reveal'

export default function CommonQuestions() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="wrap">
        <Reveal>
          <h2 className="h2">Common Questions</h2>
        </Reveal>

        <dl className="mt-10 space-y-9">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 80}>
              <dt className="text-lg font-medium text-navy sm:text-body">{faq.question}</dt>
              <dd className="mt-2 max-w-[1040px] text-base font-normal leading-relaxed text-ink-body sm:text-body">
                {faq.answer}
              </dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={120}>
          <Button variant="outline" className="mt-12">
            More Questions
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
