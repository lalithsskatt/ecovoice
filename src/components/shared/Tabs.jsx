function Tabs({ tabs, activeKey, onChange, className = '' }) {
  return (
    <div className={`space-y-4 ${className}`.trim()}>
      <div className="flex flex-wrap gap-2 rounded-full bg-slate-100 p-1 dark:bg-slate-800">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${activeKey === tab.key ? 'bg-emerald-600 text-white' : 'text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-700'}`.trim()}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((tab) => tab.key === activeKey)?.content}</div>
    </div>
  )
}

export default Tabs
