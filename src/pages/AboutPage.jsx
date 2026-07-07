import PartnerLogos from '../components/shared/PartnerLogos'

const stats = [
  { label: 'Trees planted', value: '120,000+' },
  { label: 'Volunteers', value: '8,600+' },
  { label: 'Projects launched', value: '320+' },
]

const team = [
  { name: 'Ariana Chen', role: 'Founder & CEO', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80', socials: ['Twitter', 'LinkedIn'] },
  { name: 'Jose Ramirez', role: 'Programs Director', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80', socials: ['LinkedIn'] },
  { name: 'Priya Singh', role: 'Community Lead', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=400&q=80', socials: ['Instagram', 'LinkedIn'] },
]

const timeline = [
  { year: '2018', event: 'EcoVoice launched with the first tree planting campaign.' },
  { year: '2019', event: 'Expanded programs to coastal cleanup and solar workshops.' },
  { year: '2022', event: 'Reached 100,000 volunteer hours and 200 active campaigns.' },
  { year: '2025', event: 'Launched community complaint and sustainability tracking tools.' },
]

const goals = [
  { name: 'Clean communities', description: 'Reduce plastic and pollution through regular volunteer-led cleanups.' },
  { name: 'Healthy ecosystems', description: 'Restore habitat with native planting and water protection efforts.' },
  { name: 'Inclusive education', description: 'Provide sustainability learning for all ages via workshops and resources.' },
]

function AboutPage() {
  return (
    <div className="space-y-16 pb-10">
      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">About</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">EcoVoice unites people and planet through collaborative action.</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">We build accessible programs for communities to protect ecosystems, reduce waste, and empower climate leadership across cities and rural regions.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <p className="text-4xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Mission</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Empower communities to protect their local environment.</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">We design collaborative projects, learning experiences, and tools that enable residents and organizations to restore nature and build long-term resilience.</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">Vision</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">A world where every neighborhood is healthy, thriving, and climate-ready.</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">We believe that local action adds up to global impact when people are connected by purpose, transparency, and shared stewardship.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Our team</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <img src={member.photo} alt={member.name} className="mx-auto h-28 w-28 rounded-full object-cover" />
              <p className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{member.name}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{member.role}</p>
              <div className="mt-4 flex justify-center gap-3 text-sm text-emerald-600">
                {member.socials.map((social) => (
                  <span key={social}>{social}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Partners</p>
        <div className="mt-8">
          <PartnerLogos />
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Journey</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Milestones in our growth</h2>
        <div className="mt-8 space-y-6">
          {timeline.map((item) => (
            <div key={item.year} className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{item.year}</p>
              <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Sustainability goals</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">What we aim to achieve</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {goals.map((goal) => (
            <div key={goal.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{goal.name}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{goal.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
