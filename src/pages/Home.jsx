import { Link } from 'react-router-dom'
import db from '../../src/db/db.json'
import Container from '../layouts/Container'
export default function Home() {
  const {
    presentation: { name, title, description }
  } = db
  //  max-w-sm md:max-w-md lg:max-w-2xl
  return (
    <Container>
      <div className='-z-10 opacity-20 -left-10 w-80 h-80 background-svg-react' />
      <div className="flex flex-col justify-center items-center">
        <div className='max-w-sm md:max-w-md lg:max-w-2xl'>
          <h2 className="mt-36 mb-5 text-accent font-bold">{title}</h2>
          <h1 className="my-14 text-5xl text-white font-bold">{name}</h1>
          <p className="mb-5 text-left text-slate-300-300">{description}</p>
          <button className="btn btn-secondary hover:bg-opacity-70">
            <Link to="/projects">View my projects</Link>
          </button>
        </div>
      </div>
    </Container>
  )
}
