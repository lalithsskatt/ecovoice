import { Link, useLocation } from 'react-router-dom'

const labels = {
  '/': 'Home',
  '/community': 'Community',
  '/report-issue': 'Report issue',
  '/climate-map': 'Climate map',
  '/learn': 'Learn',
  '/about': 'About',
  '/contact': 'Contact',
  '/dashboard': 'Dashboard',
  '/login': 'Login',
  '/signup': 'Sign up',
  '/forgot-password': 'Forgot password',
  '/otp-verification': 'OTP verification',
  '/reset-password': 'Reset password',
  '/petitions': 'Petitions',
  '/carbon-calculator': 'Carbon calculator',
  '/ai-assistant': 'AI assistant',
}

function Breadcrumb() {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)
  const crumbs = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`
    return {
      label: labels[path] || segment.replace('-', ' '),
      path,
    }
  })

  return (
    <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
      <Link to="/" className="font-medium text-emerald-600">Home</Link>
      {crumbs.map((crumb, index) => (
        <span key={crumb.path} className="flex items-center gap-2">
          <span>/</span>
          {index === crumbs.length - 1 ? (
            <span className="capitalize">{crumb.label}</span>
          ) : (
            <Link to={crumb.path} className="capitalize hover:text-emerald-600">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
