function Modal({ show, onClose, title, children, footer, className = '' }) {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
      <div className={`w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-2xl dark:bg-slate-950 ${className}`.trim()}>
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h2>
          </div>
          <button type="button" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="px-6 py-6">{children}</div>
        {footer && <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-800">{footer}</div>}
      </div>
    </div>
  )
}

export default Modal
