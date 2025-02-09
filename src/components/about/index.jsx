import { useIsMobile } from '../../hooks/useIsMobile'
import Accordion from '../ui/Accordion'
import aboutData from '../../db/about.json'

export default function About() {
  const isMobile = useIsMobile()

  const content = (
    <div className="text-emerald-800/80 dark:text-emerald-400/60">
      <p className="mb-4">{aboutData.description}</p>

      <ol className="list-decimal pt-4 space-y-2">
        {aboutData.highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  )

  if (isMobile) {
    return (
      <section id="about" className="pt-0">
        <Accordion
          title="About"
          defaultOpen={false}
          titleClassName="text-2xl font-semibold tracking-widest text-emerald-800/80 dark:text-emerald-400/60"
        >
          {content}
        </Accordion>
      </section>
    )
  }

  return (
    <section id="about" className="pt-0 lg:pt-28">
      <h3 className="text-2xl lg:block font-semibold tracking-widest mb-3 pb-4 text-emerald-800/80 dark:text-emerald-400/60">
        About
      </h3>
      {content}
    </section>
  )
}
