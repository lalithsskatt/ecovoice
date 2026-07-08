import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
 
const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/global-community', label: 'Global Community' },
  { to: '/interactive-map', label: 'Interactive Map' },
  { to: '/carbon-calculator', label: 'Carbon Calculator' },
  { to: '/petitions', label: 'Petitions' },
  { to: '/complaints', label: 'Eco Complaints' },
  { to: '/ai-assistant', label: 'AI Assistant' },
]
 
function Sidebar({ active: activeProp, onSelect }) {
  const { user, logout } = useAuth()
  const [internalActive, setInternalActive] = useState(activeProp || '/dashboard')
 
  const active = activeProp ?? internalActive
 
  function handleSelect(link) {
    if (onSelect) onSelect(link.to)
    else setInternalActive(link.to)
  }
 
  return (
    <aside className="sticky top-24 self-start hidden w-56 flex-shrink-0 flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900 lg:flex">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
        Workspace
      </p>
 
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <button
            key={link.to}
            onClick={() => handleSelect(link)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition text-left ${
              active === link.to
                ? 'bg-emerald-100 text-emerald-700 dark:bg-slate-800 dark:text-emerald-300'
                : 'text-slate-700 hover:bg-emerald-100 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-300'
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>
 
      <button
        onClick={() => logout && logout()}
        className="rounded-full border border-red-200 px-4 py-2 text-center text-sm text-red-600 transition hover:bg-red-200 dark:border-red-700 dark:hover:bg-slate-800"
      >
        Sign Out
      </button>
    </aside>
  )
}
 
export default Sidebar