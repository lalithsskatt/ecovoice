import { useState } from 'react'

function Accordion({ items, allowMultiple = false, className = '' }) {
  const [openIndices, setOpenIndices] = useState([])

  const toggleIndex = (index) => {
    if (allowMultiple) {
      setOpenIndices((current) =>
        current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
      )
    } else {
      setOpenIndices((current) => (current.includes(index) ? [] : [index]))
    }
  }

  const isOpen = (index) => openIndices.includes(index)

  return (
    <div className={`space-y-4 ${className}`.trim()}>
      {items.map((item, index) => (
        <div key={item.key || item.title || index} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left"
            onClick={() => toggleIndex(index)}
          >
            <span className="text-lg font-semibold text-slate-900 dark:text-white">{item.title || item.question}</span>
            <span className="text-2xl text-emerald-600">{isOpen(index) ? '−' : '+'}</span>
          </button>
          {isOpen(index) && <div className="mt-4 text-slate-600 dark:text-slate-300">{item.content || item.answer}</div>}
        </div>
      ))}
    </div>
  )
}

export default Accordion
