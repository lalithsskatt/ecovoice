import { useState } from 'react'

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={item.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</span>
            <span className="text-2xl text-emerald-600">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && <p className="mt-4 text-slate-600 dark:text-slate-300">{item.answer}</p>}
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion
