import { useState } from 'react'
import FAQAccordion from '../components/shared/FAQAccordion'
import useFormValidation from '../hooks/useFormValidation'
 
const faqItems = [
  {
    question: 'How can I join a volunteer campaign?',
    answer: 'Sign up through the community page, choose an event, and submit your details to receive updates and instructions.',
  },
  {
    question: 'Can I report an environmental concern anonymously?',
    answer: 'Yes. Our report form allows you to submit issues without sharing personal details, though contact information helps us follow up.',
  },
  {
    question: 'How do I partner with EcoVoice?',
    answer: 'Reach out through the support channels below, and our partnerships team will guide you through opportunities and collaboration options.',
  },
]
 
const offices = [
  { name: 'Headquarters', address: '123 Greenway Ave, Cityville, CA 90001' },
  { name: 'East Coast Hub', address: '45 Harbor St, Bayview, NY 10012' },
  { name: 'Community Center', address: '78 Meadow Lane, Austin, TX 78701' },
]
 
function ContactPage() {
  const [formValues, formErrors, handleChange, handleSubmit] = useFormValidation(
    { name: '', email: '', subject: '', message: '' },
    { name: { required: true }, email: { required: true, email: true }, subject: { required: true }, message: { required: true, minLength: 20 } }
  )
  const [feedback, setFeedback] = useState('')
 
  const onSubmit = () => {
    // submit form data to API or CMS
  }
 
  return (
    <div className="space-y-10 pb-10">
      <section className="mx-auto max-w-6xl rounded-3xl border border-emerald-800 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Get in touch with EcoVoice</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Whether you need support, want to partner, or have feedback, our team is ready to help. Use the form below to connect.</p>
        </div>
 
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-8 max-w-3xl rounded-3xl border border-emerald-100 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
              <input
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                placeholder="Your name"
              />
              {formErrors.name && <p className="mt-2 text-sm text-red-600">{formErrors.name}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                placeholder="you@example.com"
              />
              {formErrors.email && <p className="mt-2 text-sm text-red-600">{formErrors.email}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Subject</label>
              <input
                name="subject"
                value={formValues.subject}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                placeholder="Tell us how we can help"
              />
              {formErrors.subject && <p className="mt-2 text-sm text-red-600">{formErrors.subject}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleChange}
                className="mt-2 w-full min-h-[140px] rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                placeholder="Describe your request or question"
              />
              {formErrors.message && <p className="mt-2 text-sm text-red-600">{formErrors.message}</p>}
            </div>
            <div className="flex justify-center">
              <button type="submit" className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">Send message</button>
            </div>
          </div>
        </form>
      </section>
 
      <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Support</p>
          <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-200">
            <div>
              <p className="font-semibold">Email</p>
              <p>hello@ecovoice.org</p>
            </div>
            <div>
              <p className="font-semibold">Chat</p>
              <p>Live support available Monday–Friday, 9am–6pm.</p>
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
        </div>
 
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Office locations</p>
          <div className="mt-6 space-y-4">
            {offices.map((office) => (
              <div key={office.name}>
                <p className="font-semibold text-slate-900 dark:text-white">{office.name}</p>
                <p className="text-slate-600 dark:text-slate-300">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
 
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Map</p>
          <div className="mt-6 h-72 rounded-3xl bg-slate-200 dark:bg-slate-800" />
        </div>
      </section>
 
      <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">FAQ</p>
          <div className="mt-6">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
 
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Feedback widget</p>
          <textarea
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            placeholder="Share a quick suggestion or idea"
            className="mt-4 w-full min-h-[140px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          />
          <button
            type="button"
            onClick={() => setFeedback('')}
            className="mt-4 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Submit feedback
          </button>
        </div>
      </section>
    </div>
  )
}
 
export default ContactPage
 