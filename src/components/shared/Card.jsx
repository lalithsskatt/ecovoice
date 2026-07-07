function Card({ title, subtitle, footer, children, className = '' }) {
  return (
    <section className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`.trim()}>
      {(title || subtitle) && (
        <div className="mb-4 space-y-2">
          {title && <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>}
          {subtitle && <p className="text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>}
        </div>
      )}
      <div>{children}</div>
      {footer && <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">{footer}</div>}
    </section>
  )
}

export default Card
