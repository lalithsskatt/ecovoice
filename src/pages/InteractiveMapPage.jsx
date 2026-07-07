const mapMarkers = [
  { name: 'Riverbank Rewilding', status: 'Active', location: 'North District' },
  { name: 'Urban Garden Network', status: 'Planned', location: 'West Loop' },
  { name: 'Coastal Cleanup Trail', status: 'Live', location: 'Harbor Point' },
]
 
function InteractiveMapPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Interactive Map</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Track climate projects in motion</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Explore live project zones, volunteer routes, and neighborhood impact hotspots from a single view.</p>
      </section>
 
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="aspect-[4/3] rounded-3xl border border-dashed border-emerald-300 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_40%),linear-gradient(135deg,_rgba(255,255,255,0.9),_rgba(236,253,245,0.95))] p-6 dark:border-emerald-700 dark:bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.25),_transparent_45%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.9))]">
            <div className="flex h-full items-end justify-between rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur-sm dark:border-slate-700/70 dark:bg-slate-900/60">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Map overlay</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Climate action clusters</p>
              </div>
              <div className="rounded-full bg-emerald-600 px-3 py-1 text-sm font-semibold text-white">Live</div>
            </div>
          </div>
        </div>
 
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Locations</p>
          <div className="mt-5 space-y-3">
            {mapMarkers.map((marker) => (
              <div key={marker.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{marker.name}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{marker.location}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    {marker.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
 
export default InteractiveMapPage