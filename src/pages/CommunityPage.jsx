const programs = [
  {
    title: 'Neighborhood Tree Planting',
    description: 'Collaborative volunteer days that restore urban canopy, support wildlife, and cool communities.',
  },
  {
    title: 'Coastal Cleanup Teams',
    description: 'Local paddlers, families, and businesses removing trash from beaches and riversides every month.',
  },
  {
    title: 'Youth Sustainability Workshops',
    description: 'Hands-on educational sessions that teach climate solutions for home, school, and community action.',
  },
]

function CommunityPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Community</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Join the movement for greener neighborhoods</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">We bring people together to plant trees, clean waterways, and build lasting local resilience through community-led environmental programs.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <article key={program.title} className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{program.title}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{program.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Volunteer with us</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Our volunteer network powers community restoration, habitat care, and local sustainability education. Choose a team that matches your passion and skill set.</p>
          </div>
          <div className="space-y-4 rounded-3xl bg-emerald-50 p-6 dark:bg-slate-950">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Impact</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">120k+</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Trees planted with neighborhood partners</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Reach</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">86%</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Volunteer satisfaction and return rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommunityPage
