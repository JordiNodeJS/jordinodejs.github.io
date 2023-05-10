import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mnqwpnko')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <form className="form-control w-full" onSubmit={handleSubmit}>
      <label className="label" htmlFor="email">
        <span className="label-text-alt">Email</span>
      </label>
      <input
        className="input input-bordered"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label className="label" htmlFor="asunto">
        <span className="label-text-alt">Subject</span>
      </label>
      <input
        className="input input-bordered mb-8"
        id="asunto"
        type="text"
        name="asunto"
      />
      <ValidationError prefix="Asunto" field="asunto" errors={state.errors} />

      <textarea
        className="textarea textarea-bordered mb-8"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="btn btn-primary"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  )
}
