function CampaignCard({ title, description, progress, ctaLabel, image }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {image && <img src={image} alt={title} className="h-44 w-full object-cover" />}
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">{progress}%</span>
        </div>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{description}</p>
        <div className="mt-6 rounded-full bg-slate-100 p-1 dark:bg-slate-800">
          <div className="h-3 rounded-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }} />
        </div>
        <button className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
          {ctaLabel}
        </button>
      </div>
    </article>
  )
}

export default CampaignCard
