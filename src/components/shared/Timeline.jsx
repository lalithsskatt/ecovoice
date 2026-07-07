function Timeline({ items, className = '' }) {
  return (
    <div className={`space-y-8 ${className}`.trim()}>
      {items.map((item) => (
        <div key={item.key || item.title} className="flex gap-4">
          <div className="mt-1 h-3 w-3 rounded-full bg-emerald-600" />
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-600">{item.date}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
