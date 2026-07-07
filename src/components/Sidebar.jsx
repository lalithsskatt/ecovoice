import { NavLink } from 'react-router-dom'
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
 
function Sidebar() {
  const [open, setOpen] = useState(false)
 
  return (
    <aside className="flex h-fit w-full flex-col rounded-xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:w-56">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg px-2 py-1 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 dark:hover:bg-slate-800"
      >
        <span>Workspace</span>
       
        {/* 3-line burger icon container */}
        <div className="flex h-3 w-4 flex-col justify-between">
          <span className="h-0.5 w-full rounded-full bg-emerald-600"></span>
          <span className="h-0.5 w-full rounded-full bg-emerald-600"></span>
          <span className="h-0.5 w-full rounded-full bg-emerald-600"></span>
        </div>
      </button>
 
      {open && (
        <nav className="mt-1 space-y-0.5">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-2 py-1 text-sm transition ${
                  isActive
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-slate-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </aside>
  )
}
 
export default Sidebar
 