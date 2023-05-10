import { useParams } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import Container from '../layouts/Container'

export default function Contact() {
  const { contactId } = useParams()

  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <div className="w-4/5 sm:max-w-sm">
          <h1 className="mt-5 text-4xl text-slate-200 font-bold">
            Contact {contactId}
          </h1>

          <ContactForm />
        </div>
      </div>
    </Container>
  )
}
