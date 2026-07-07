function ReportIssuePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-red-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Report Issue</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Tell us about a local environmental problem</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Your report helps our teams respond to pollution, illegal dumping, damaged habitat, and urgent safety concerns in neighborhoods and natural areas.</p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_0.75fr]">
        <form className="rounded-3xl border border-red-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Your name</label>
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-400 dark:border-slate-700 dark:bg-slate-800" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-400 dark:border-slate-700 dark:bg-slate-800" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Location</label>
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-400 dark:border-slate-700 dark:bg-slate-800" placeholder="City, park, or street" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Type of issue</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-400 dark:border-slate-700 dark:bg-slate-800">
                <option>Pollution / dumping</option>
                <option>Habitat damage</option>
                <option>Water contamination</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Details</label>
              <textarea className="mt-2 w-full min-h-[140px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-400 dark:border-slate-700 dark:bg-slate-800" placeholder="Describe what you saw and why it matters." />
            </div>
            <button type="button" className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700">Submit report</button>
          </div>
        </form>

        <aside className="space-y-6 rounded-3xl border border-red-100 bg-rose-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">How it works</p>
            <p className="mt-3 text-slate-700 dark:text-slate-200">Every report is reviewed by our response team, verified for urgency, and forwarded to local partners for cleanup or enforcement.</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Response time</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">24-48 hrs</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Typical time to follow up on urgent hazard reports.</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Privacy</p>
            <p className="mt-2 text-slate-700 dark:text-slate-200">Your contact information is used only for follow-up and is never shared without consent.</p>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default ReportIssuePage
