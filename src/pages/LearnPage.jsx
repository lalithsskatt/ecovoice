const resources = [
  {
    title: 'Home energy savings',
    description: 'Simple steps to reduce energy use, lower bills, and adopt efficient appliances.',
  },
  {
    title: 'Plastic-free living',
    description: 'Practical tips for cutting single-use waste and choosing reusable alternatives.',
  },
  {
    title: 'Nature-friendly gardening',
    description: 'Create pollinator habitat and healthy soil with native plants and low-impact landscaping.',
  },
]

function LearnPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Learn</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Grow your environmental knowledge</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Find practical guides, downloadable tools, and inspiring stories that make sustainable living easier for everyone.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {resources.map((item) => (
          <article key={item.title} className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Featured guides</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Guide</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">Zero-waste starter checklist</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Start small with everyday swaps that reduce waste and support circular living.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Guide</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">Urban gardening basics</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Grow fresh food and pollinator habitat even in a small balcony or yard.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Guide</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">Climate-smart travel tips</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Plan lower-impact trips that support local ecosystems and communities.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LearnPage
