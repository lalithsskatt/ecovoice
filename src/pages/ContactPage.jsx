import { useState } from 'react'
import FAQAccordion from '../components/shared/FAQAccordion'
import useFormValidation from '../hooks/useFormValidation'

const faqItems = [
  {
    question: 'How can I join a volunteer campaign?',
    answer:
      'Sign up through the community page, choose an event, and submit your details to receive updates and instructions.',
  },
  {
    question: 'Can I report an environmental concern anonymously?',
    answer:
      'Yes. Our report form allows you to submit issues without sharing personal details, though contact information helps us follow up.',
  },
  {
    question: 'How do I partner with EcoVoice?',
    answer:
      'Reach out through the support channels below, and our partnerships team will guide you through opportunities and collaboration options.',
  },
]

const offices = [
  {
    name: 'Headquarters',
    address: '123 Greenway Ave, Cityville, CA 90001',
  },
  {
    name: 'East Coast Hub',
    address: '45 Harbor St, Bayview, NY 10012',
  },
  {
    name: 'Community Center',
    address: '78 Meadow Lane, Austin, TX 78701',
  },
]

function ContactPage() {
  const [formValues, formErrors, handleChange, handleSubmit] =
    useFormValidation(
      {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      {
        name: { required: true },
        email: { required: true, email: true },
        subject: { required: true },
        message: { required: true, minLength: 20 },
      }
    )

  const [feedback, setFeedback] = useState('')

  const onSubmit = () => {
    // Submit to API
  }

  return (
    <div className="space-y-12 pb-16">

      {/* Heading */}

      <section className="mx-auto max-w-6xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
          Contact
        </p>

        <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
          Get in touch with EcoVoice
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Whether you need support, want to partner, or have feedback, our
          team is ready to help. Fill out the form and we'll get back to you
          as soon as possible.
        </p>

      </section>

      {/* Contact Layout */}

      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

        {/* LEFT COLUMN */}

        <div className="space-y-8">

          {/* Support Card */}

          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-md dark:border-slate-800 dark:bg-slate-900">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Support
            </p>

            <div className="mt-8 space-y-6">

              <div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Email
                </h3>

                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  hello@ecovoice.org
                </p>

              </div>

              <div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Phone
                </h3>

                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  +1 (555) 123-4567
                </p>

              </div>

              <div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Live Chat
                </h3>

                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  Monday – Friday
                  <br />
                  9:00 AM – 6:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Office Card */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-800 dark:bg-slate-900">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Office Locations
            </p>

            <div className="mt-8 space-y-6">

              {offices.map((office) => (

                <div key={office.name}>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {office.name}
                  </h3>

                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    {office.address}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="rounded-3xl border border-emerald-100 bg-slate-50 p-8 shadow-md dark:border-slate-800 dark:bg-slate-950">

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Get in touch
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Fill in the form below and our team will contact you shortly.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-6"
          >
            {/* Name */}

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
    Name
  </label>

  <input
    name="name"
    value={formValues.name}
    onChange={handleChange}
    placeholder="Your name"
    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
  />

  {formErrors.name && (
    <p className="mt-2 text-sm text-red-600">
      {formErrors.name}
    </p>
  )}
</div>

{/* Email */}

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
    Email Address
  </label>

  <input
    type="email"
    name="email"
    value={formValues.email}
    onChange={handleChange}
    placeholder="you@example.com"
    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
  />

  {formErrors.email && (
    <p className="mt-2 text-sm text-red-600">
      {formErrors.email}
    </p>
  )}
</div>

{/* Subject */}

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
    Subject
  </label>

  <input
    name="subject"
    value={formValues.subject}
    onChange={handleChange}
    placeholder="Tell us how we can help"
    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
  />

  {formErrors.subject && (
    <p className="mt-2 text-sm text-red-600">
      {formErrors.subject}
    </p>
  )}
</div>

{/* Message */}

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
    Message
  </label>

  <textarea
    name="message"
    value={formValues.message}
    onChange={handleChange}
    placeholder="Describe your request..."
    rows={6}
    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
  />

  {formErrors.message && (
    <p className="mt-2 text-sm text-red-600">
      {formErrors.message}
    </p>
  )}
</div>

<button
  type="submit"
  className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
>
  Send Message
</button>

</form>

</div>

</section>            
      {/* FAQ & Feedback Section */}

      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

        {/* FAQ */}

        <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-md dark:border-slate-800 dark:bg-slate-900">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            Have Questions?
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Find answers to the most common questions about EcoVoice,
            volunteering, reporting issues, and partnerships.
          </p>

          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>

        </div>

        {/* Feedback */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-800 dark:bg-slate-900">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Feedback
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            We'd love to hear from you
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Your ideas and suggestions help us improve EcoVoice for everyone.
          </p>

          <textarea
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            placeholder="Share your suggestions, ideas or feedback..."
            rows={8}
            className="mt-8 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <button
            type="button"
            onClick={() => {
              alert('Thank you for your feedback!')
              setFeedback('')
            }}
            className="mt-6 w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
          >
            Submit Feedback
          </button>

        </div>

      </section>

    </div>
  )
}

export default ContactPage