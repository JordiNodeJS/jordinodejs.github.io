export default function Footer() {
  return (
    <footer className="py-9 w-full border-t dark:border-t-neutral-900 border-t-neutral-300">
      <div className="flex items-center justify-center h-full mx-auto w-[600px] max-w-full">
        <div className="flex flex-col gap-2">
          <h4 className="text-left font-extrabold text-2xl tracking-tighter dark:text-white">
            <div className="flex gap-2 font-medium dark:text-neutral-400 text-neutral-800 text-xs tracking-[0.6em]">
              from
            </div>
            <a
              href="https://es.wikipedia.org/wiki/Per%C3%BA"
              target="_blank"
              referrerPolicy="no-referrer"
              className="hover:underline tracking-[0.8rem]" rel="noreferrer"
            >
              Barcelona
            </a>
          </h4>
          <p className="mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50">
            Designed and coded with{' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href="https://code.visualstudio.com/"
              target="_blank" rel="noreferrer"
            >
              Visual Studio Code
            </a>. Build with {' '}
            <a
              className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
              href="https://tailwindcss.com/"
              target="_blank" rel="noreferrer"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
