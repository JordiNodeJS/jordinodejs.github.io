import { useIsMobile } from '../../hooks/useIsMobile'
import Accordion from '../ui/Accordion'

export default function AboutSection() {
  const isMobile = useIsMobile()

  const content = (
    <div className="text-emerald-800/80 dark:text-emerald-400/60">
      <p className="mb-4">
        Experience in HTML, CSS, SASS, JavaScript, TypeScript, React, Redux,
        Node, npm, Git, GitHub, MySQL, API REST, Firebase. Working under agile
        methodologies such as SCRUM, sprints. Project where I work:
        Academy_directory, a platform for managing the learning process of
        students; and Ita-Game, a gamified learning environment.
      </p>

      <ol className="list-decimal pt-4 space-y-2">
        <li>
          Constant and independent who is always eager to improve my skills.
          Strong digital skills and a commitment to deliver high-quality work.
        </li>
        <li>
          Developed critical thinking, resilience, flexibility and teamwork
          skills through working on various projects using SCRUM: Agile
          Methodology and Springs, experience gained on IT
          Academy_directory&apos;s project from Barcelona Activa.
        </li>
        <li>
          Passionate about creating user-friendly and engaging web experiences
          that meet the needs and expectations of the clients and users (see my
          projects in github).
        </li>
        <li>
          I would love to join your company and contribute to your goals and
          vision with my skills and enthusiasm.
        </li>
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
