function StatusBadge({ status }) {
  const classes = {
    open: 'bg-emerald-100 text-emerald-700',
    inProgress: 'bg-sky-100 text-sky-700',
    closed: 'bg-slate-100 text-slate-700',
    urgent: 'bg-red-100 text-red-700',
  }

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${classes[status] ?? 'bg-slate-100 text-slate-700'}`}>{status.replace(/([A-Z])/g, ' $1').trim()}</span>
}

export default StatusBadge
