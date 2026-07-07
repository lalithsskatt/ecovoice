function Pagination({ currentPage, totalPages, onPageChange, className = '' }) {
  const pages = []
  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i)
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`.trim()}>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${page === currentPage ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'}`.trim()}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination
