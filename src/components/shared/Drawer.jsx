function Drawer({ open, onClose, side = 'right', title, children, className = '' }) {
  if (!open) return null

  const sideClasses = side === 'left' ? 'left-0 rounded-r-[2rem]' : 'right-0 rounded-l-[2rem]'

  return (
    <div className="fixed inset-0 z-50 flex bg-slate-950/40">
      <div className="flex-1" onClick={onClose} />
      <div className={`relative w-full max-w-md bg-white shadow-2xl dark:bg-slate-950 ${sideClasses} ${className}`.trim()}>
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h2>
          <button type="button" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export default Drawer
