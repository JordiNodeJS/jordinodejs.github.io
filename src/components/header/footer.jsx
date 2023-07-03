import { GithubIcon, LinkedinIcon } from '../Icons/Icons'

export default function FooterHeader() {
  return (
    <div className="mt-auto max-[700px]:mt-4">
      <div className="flex max-[700px]:flex-col items-center max-[700px]:items-start">
        <div className="flex items-center gap-3">
          <a
            className="text-slate-700 w-8"
            href="https://github.com/JordiNodeJS"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            className="text-slate-700 w-8"
            href="https://www.linkedin.com/in/jorge-frontend/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
