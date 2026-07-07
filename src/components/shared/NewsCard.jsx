function NewsCard({ title, excerpt, date, tag, image }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {image && <img src={image} alt={title} className="h-44 w-full object-cover" />}
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-emerald-600">{tag}</div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{excerpt}</p>
        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">{date}</p>
      </div>
    </article>
  )
}

export default NewsCard
