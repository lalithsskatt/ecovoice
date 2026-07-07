import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 
function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
 
  const isStrongPassword = (password) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password)
  }
 
  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')
 
    if (!isStrongPassword(form.password)) {
      setError('Password must be at least 8 characters and include one uppercase letter, one lowercase letter, one digit, and one special symbol.')
      return
    }
 
    navigate('/dashboard')
  }
 
  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }
 
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center py-16">
      <section className="w-full max-w-md space-y-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Sign Up</p>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Create your account</h1>
          <p className="text-slate-600 dark:text-slate-300">Join Ecosphere to manage your volunteer activities and follow project progress.</p>
        </div>
 
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Full name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800"
              placeholder="Create a strong password"
            />
            <p className="mt-2 text-xs text-emerald-600">Use 8+ chars, one uppercase, one lowercase, one digit, and one symbol.</p>
          </div>
          {error && <p className="text-sm text-rose-500">{error}</p>}
          <button type="submit" className="w-full rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">Create account</button>
        </form>
 
        <p className="text-sm text-slate-600 dark:text-slate-400">Already have an account? Log in to continue.</p>
      </section>
    </div>
  )
}
 
export default SignUpPage