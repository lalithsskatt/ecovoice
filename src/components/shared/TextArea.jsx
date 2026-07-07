function TextArea({ label, name, value, onChange, placeholder, error, className = '', rows = 5, ...props }) {
  return (
    <div className={`space-y-2 ${className}`.trim()}>
      {label && <label htmlFor={name} className="block text-sm font-medium text-slate-700 dark:text-slate-200">{label}</label>}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}

export default TextArea
