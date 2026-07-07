const mapHighlights = [
  {
    label: 'Tree planting zones',
    value: '42 active sites',
  },
  {
    label: 'Cleanup campaigns',
    value: '18 scheduled events',
  },
  {
    label: 'Restoration corridors',
    value: '27 miles protected',
  },
]

function ClimateMapPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Climate Map</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Explore our regional impact map</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">See where Ecosphere projects are active, which habitats are being restored, and how local communities are contributing to a healthier environment.</p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.75fr_0.9fr]">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="space-y-6">
            {mapHighlights.map((item) => (
              <div key={item.label} className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="aspect-[4/3] rounded-3xl bg-slate-200 dark:bg-slate-800"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-300">This placeholder stands in for the interactive map view. Replace it with map coordinates, embedded GIS content, or a map component for live location tracking.</p>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Why mapping matters</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-emerald-50 p-6 dark:bg-slate-950">
            <p className="text-xl font-semibold text-slate-900 dark:text-white">Visibility</p>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Local residents can find nearby projects and volunteer opportunities more easily.</p>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6 dark:bg-slate-950">
            <p className="text-xl font-semibold text-slate-900 dark:text-white">Coordination</p>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Partners align restoration work across neighborhoods, parks, and waterways.</p>
          </div>
          <div className="rounded-3xl bg-emerald-50 p-6 dark:bg-slate-950">
            <p className="text-xl font-semibold text-slate-900 dark:text-white">Impact</p>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Map data supports better planning, reporting, and long-term climate resilience.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClimateMapPage
