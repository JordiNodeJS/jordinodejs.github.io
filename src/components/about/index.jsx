import CustomLink from '../custom-link'

export default function AboutSection() {
  return (
    <section id="about" className="pt-24 max-lg:pt-0">
      <h3 className="text-2xl max-lg:block hidden font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80">
        About
      </h3>
      <div className="dark:text-emerald-700/80 text-slate-700">
        <p className="mb-4 leading-6 text-base">
          Since 2019, I have immersed myself in modern design using
          <CustomLink href="https://www.invisionapp.com/">
            Invision Studio
          </CustomLink>{' '}
          and thoroughly explored coding and web development. Collaborated with
          several local companies, creating online sales web applications. I
          highlight my contribution in
          <CustomLink href="https://univercel.com.pe/">Univercel</CustomLink>
          , an intuitive, modern, minimalist and elegant web application with
          all the necessary functionalities for a sales software. Currently, I
          dedicate significant time and effort to this project.
          <br />
          <br />
          In addition to my background in web design and development, I am also
          a passionate electronic music producer. My verified{' '}
          <CustomLink href="https://www.youtube.com/@daustinnmusic">
            Youtube channel
          </CustomLink>{' '}
          with over 800,000 views is proof of my dedication in this field.
        </p>
      </div>
    </section>
  )
}