function ComplaintsPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Eco Complaints</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">Eco threat registry</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Log local environmental hazards, verify threats with AI, and assign cases for cleanup, enforcement, and community response.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">Water quality</p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">Chemical runoff in Green Valley Creek</h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Noticeable oily sheen and foam appearing near the industrial discharge pipe. The local wildlife has been affected.</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">AI verified</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>Green Valley Creek, Sector 4</span>
              <span className="text-red-500 font-semibold">Critical</span>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">Deforestation</p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">Unlawful logging in Oakwood Preserve</h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Heavy clearing machinery operating during non-permitted hours in the protected woodland.</p>
              </div>
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold uppercase text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">High</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>Oakwood Preserve Boundary</span>
              <span className="text-emerald-600 font-semibold">Assigned to gov</span>
            </div>
          </article>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Incident details</p>
          <div className="mt-6 space-y-6">
            <div className="rounded-3xl bg-slate-900/80 p-6 text-slate-100">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Claim status</p>
              <p className="mt-3 text-2xl font-semibold">Open review</p>
              <p className="mt-2 text-sm text-slate-300">Pending community validation and agency assignment.</p>
            </div>
            <div className="rounded-3xl bg-slate-800/80 p-6 text-slate-100">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Next action</p>
              <p className="mt-3 text-base font-medium">Upload evidence, assign response, and notify local partners.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComplaintsPage
