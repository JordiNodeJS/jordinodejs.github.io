import Container from '../layouts/Container'
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  EffectCoverflow
} from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import db from '../../src/db/db.json'
import Article from '../components/Article'
const { projects } = db

export default function Projects() {
  return (
    <Container>
      <h1 className="mt-8 mb-5 text-4xl font-bold">Projects</h1>
      <Swiper
        effect={'coverflow'}
        slidesPerView={'auto'}
        centeredSlides={true}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true
        }}
        scrollbar={false}
        navigation={false}
        pagination={{
          clickable: true
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, EffectCoverflow]}
      >
        <section className="text-left">
          {projects.map((project, index) => (
            <SwiperSlide key={project.id} tabIndex={index} className="p-4 px-4 md:px-16 lg:px-16 xl:px-[20rem]">
              <Article
                className="transition-all border-pink-400 border border-opacity-60 ease-linear hover:brightness-110"
                project={project}
              />
            </SwiperSlide>
          ))}
        </section>
      </Swiper>
    </Container>
  )
}
