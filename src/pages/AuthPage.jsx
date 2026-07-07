import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function AuthPage() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const { login, signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (mode === 'login') {
      await login({ email: form.email, password: form.password })
    } else {
      await signup({ name: form.name, email: form.email, password: form.password })
    }
    navigate('/dashboard')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-slate-950 px-4 py-20 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/95 shadow-2xl shadow-slate-900/50 backdrop-blur-xl">
        <div className="hidden w-1/2 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.35),_transparent_35%),_radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_28%)] p-12 lg:block">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">EcoVoice Global</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Citizen Environmental Platform</h2>
            </div>
            <p className="max-w-xs text-slate-300">
              Connect, report, petition, and track climate progress from a single secure citizen dashboard.
            </p>
            <div className="space-y-4 rounded-3xl border border-slate-700 bg-slate-950/50 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Quick stats</p>
              <div className="space-y-3 text-sm text-slate-300">
                <p>• 1,212+ active guardians</p>
                <p>• 8.46k tons CO₂ offset</p>
                <p>• 142 resolved violations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-slate-950 p-8 sm:p-10 lg:w-1/2">
          <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Welcome</p>
              <h1 className="text-3xl font-semibold text-white">{mode === 'login' ? 'Sign In' : 'Register'}</h1>
            </div>
            <div className="flex gap-2 text-sm">
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`rounded-full px-4 py-2 transition ${mode === 'login' ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('register')}
                className={`rounded-full px-4 py-2 transition ${mode === 'register' ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
              >
                Register
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-slate-300">Username</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-500"
                  placeholder="EcoWarrior"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-300">Email address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-500"
                placeholder="Enter a strong password"
              />
              <div className="mt-3 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <p>{mode === 'login' ? 'Access your citizen hub.' : 'Create an account to join the network.'}</p>
                <Link to="/forgot-password" className="font-semibold text-emerald-400 hover:text-emerald-300">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105"
            >
              {mode === 'login' ? 'Sign In to Dashboard' : 'Send Verification Code'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            By continuing, you agree to the EcoVoice privacy policy and community guidelines.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
