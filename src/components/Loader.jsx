function Loader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-emerald-100 bg-white px-6 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Loading EcoVoice...</span>
      </div>
    </div>
  )
}

export default Loader
