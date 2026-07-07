const presets = [
  { label: 'Personal footprint', value: '2.8 tCO₂/yr' },
  { label: 'School campus', value: '184 tCO₂/yr' },
  { label: 'Small business', value: '46 tCO₂/yr' },
]

function CarbonCalculatorPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Carbon calculator</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Measure and reduce your climate impact</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Estimate emissions across travel, home energy, and lifestyle choices and get practical recommendations.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-4 md:grid-cols-3">
            {presets.map((item) => (
              <div key={item.label} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.label}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Suggested actions</p>
          <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
            <li>• Switch to efficient appliances and LED lighting.</li>
            <li>• Reduce high-emission travel with shared transport.</li>
            <li>• Plant trees and support local restoration projects.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default CarbonCalculatorPage
