function ChartCard({ title, subtitle, children, className = '' }) {
  return (
    <section className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`.trim()}>
      {title && <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>}
      {subtitle && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}

export default ChartCard
