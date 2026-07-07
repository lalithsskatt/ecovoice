import { useState } from 'react'
 
const communities = [
  {
    name: 'River Guardians',
    location: 'Lagos, Nigeria',
    members: '2.4k',
    focus: 'Cleanup drives and wetland restoration',
  },
  {
    name: 'Solar Neighbors',
    location: 'Bangalore, India',
    members: '1.8k',
    focus: 'Shared rooftop solar education',
  },
  {
    name: 'Food Loop Collective',
    location: 'Toronto, Canada',
    members: '1.2k',
    focus: 'Community compost and local gardens',
  },
]
 
function GlobalCommunityPage() {
  const [selectedCommunity, setSelectedCommunity] = useState(communities[0])
 
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Global Community</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Join climate action circles across the world</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Connect with local groups, exchange ideas, and coordinate volunteer efforts in real time.</p>
      </section>
 
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Community hubs</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Trending networks</h2>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-emerald-700 shadow-sm dark:bg-slate-900 dark:text-emerald-300">
              24 active groups
            </span>
          </div>
 
          <div className="mt-6 space-y-3">
            {communities.map((community) => (
              <button
                key={community.name}
                type="button"
                onClick={() => setSelectedCommunity(community)}
                className={`w-full rounded-2xl border p-4 text-left transition ${selectedCommunity.name === community.name ? 'border-emerald-500 bg-white shadow-sm dark:border-emerald-500 dark:bg-slate-900' : 'border-transparent bg-white/70 hover:border-emerald-200 dark:bg-slate-900/70'}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{community.name}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{community.location}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    {community.members} members
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
 
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Spotlight</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{selectedCommunity.name}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{selectedCommunity.focus}</p>
 
          <div className="mt-6 rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Next event</p>
            <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Community planting drive this Saturday</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Volunteer coordinators are preparing tools, seedlings, and local education kits for the neighborhood event.</p>
          </div>
 
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Open to new members</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">Weekly updates</span>
          </div>
        </div>
      </section>
    </div>
  )
}
 
export default GlobalCommunityPage