const petitions = [
  { title: 'Protect the Riverfront Wetlands', signatures: '4,820', goal: '8,000', category: 'Water' },
  { title: 'Expand Urban Tree Canopy', signatures: '3,150', goal: '5,000', category: 'Forests' },
  { title: 'Ban Single-Use Plastics in Parks', signatures: '2,980', goal: '4,000', category: 'Waste' },
]

function PetitionsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Petitions</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Drive community action with visible momentum</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Create petitions, gather support, and share progress with your neighbors and local leaders.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {petitions.map((petition) => (
          <article key={petition.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">{petition.category}</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{petition.title}</h2>
            <div className="mt-5 h-2 rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-2 rounded-full bg-emerald-600" style={{ width: `${Math.min(100, (Number(petition.signatures.replace(/,/g, '')) / Number(petition.goal.replace(/,/g, ''))) * 100)}%` }} />
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{petition.signatures} of {petition.goal} signatures</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default PetitionsPage
