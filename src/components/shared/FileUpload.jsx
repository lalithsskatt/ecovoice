function FileUpload({ label, accept, value, onChange, helperText, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`.trim()}>
      {label && <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">{label}</label>}
      <input type="file" accept={accept} onChange={onChange} className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-white file:transition hover:file:bg-emerald-700 dark:text-slate-100" />
      {value && <p className="text-sm text-slate-600 dark:text-slate-300">Selected file: {value}</p>}
      {helperText && <p className="text-sm text-slate-500 dark:text-slate-400">{helperText}</p>}
    </div>
  )
}

export default FileUpload
