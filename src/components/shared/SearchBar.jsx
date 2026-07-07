function SearchBar({ placeholder = 'Search campaigns, news, or events' }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <label className="sr-only" htmlFor="site-search">Search</label>
      <div className="flex items-center gap-3">
        <input
          id="site-search"
          type="search"
          placeholder={placeholder}
          className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        />
        <button type="button" className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
