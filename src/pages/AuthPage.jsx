import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logo from '../assets/leaf2.png'

 
function AuthPage() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [showPasswordHint, setShowPasswordHint] = useState(false)
  const { login, signup } = useAuth()
  const navigate = useNavigate()
 
  const isStrongPassword = (password) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password)
  }
 
  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
 
    if (!isStrongPassword(form.password)) {
      setError('Password must be at least 8 characters and include one uppercase, one lowercase, one digit, and one special character.')
      return
    }
 
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
    
<div className="min-h-screen w-full flex flex-col items-center justify-center 
                overflow-hidden bg-[radial-gradient(circle at top left, rgb(221 255 226 / 56%),
                transparent 35%), linear-gradient(180deg, rgb(168 255 189 / 86%), 
                rgb(255 255 255) 100%)] px-4 text-slate-950 sm:px-6 lg:px-8">  
        <div className="mb-8 flex justify-center">
            <img
              src={logo}
              alt="EcoVoice Logo"
              className="h-14 w-20 object-contain"
            />
            <div>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">
              EcoVoice
            </p>

            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Sustainability in action
            </p>
            </div>
        </div>
    <div className="mx-auto flex w-full max-w-5xl overflow-hidden rounded-[2rem] 
                    border border-slate-200 bg-white/90 shadow-2xl shadow-slate-900/10 
                    backdrop-blur-xl md:flex-row">     
        <div className="hidden w-full basis-1/2 
                        bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),transparent_35%),
                        linear-gradient(180deg,rgba(236,253,245,0.95),rgba(14,165,100,0.1))] 
                        p-12 text-slate-950 lg:block">
          
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">
                  EcoVoice Global
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950">
                Citizen Environmental Platform
                </h2>
            </div>
            <p className="max-w-xs text-slate-700">
              Connect, report, petition, and track climate progress from a single secure citizen dashboard.
            </p>
            <div className="space-y-4 rounded-3xl border border-emerald-100
                           bg-emerald-50/80 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">
                  Quick stats
              </p>
              <div className="space-y-3 text-sm text-slate-700">
                <p>• 1,212+ active guardians</p>
                <p>• 8.46k tons CO₂ offset</p>
                <p>• 142 resolved violations</p>
              </div>
            </div>
          </div>
        </div>
 
        <div className="w-full bg-white p-8 sm:p-10 lg:w-1/2">
          <div className="flex flex-col sm:items-center sm:justify-between gap-4 
                          border-b border-slate-200 pb-6 sm:flex-row">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-500">
                  Welcome
              </p>
              <h1 className="text-3xl font-semibold text-slate-950">{mode === 'login' ? 'Sign In' : 'Register'}</h1>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`rounded-full px-4 py-2 transition ${mode === 'login' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('register')}
                className={`rounded-full px-4 py-2 transition ${mode === 'register' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                Register
              </button>
            </div>
          </div>
 
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-slate-700">Username</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-3xl border border-emerald-200 
                          bg-slate-50 px-4 py-3 text-slate-950 outline-none transition
                          focus:border-emerald-500 focus:bg-white"
                  placeholder="EcoWarrior"
                />
              </div>
            )}
 
            <div>
              <label className="block text-sm font-medium text-slate-700">
                  Email address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-emerald-200 
                          bg-slate-50 px-4 py-3 text-slate-950 outline-none transition
                          focus:border-emerald-500 focus:bg-white"
                placeholder="you@example.com"
              />
            </div>
 
            <div>
              <label className="block text-sm font-medium text-slate-700">
                  Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                onFocus={() => {
                if (form.password.length === 0) {
                  setShowPasswordHint(true)
                }
              }}
              onBlur={() => setShowPasswordHint(false)}
                className="mt-3 w-full rounded-3xl border border-emerald-200 
                          bg-slate-50 px-4 py-3 text-slate-900 outline-none transition 
                          focus:border-emerald-500 focus:bg-white"
                placeholder="Enter a strong password"
              />
              {mode === 'register' &&
                  showPasswordHint &&
                  form.password.length === 0 && (
                    <p className="mt-2 text-xs text-emerald-700 font-semibold">
                      Use at least 8 chars, one uppercase, one lowercase, one number, and one symbol.
                    </p>
                )}
              <div className="mt-3 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row 
                              sm:items-center sm:justify-between">
                <p>{mode === 'login' ? 'Access your citizen hub.' : 'Create an account to join the network.'}</p>
                <Link to="/forgot-password" className="font-semibold text-emerald-600 
                        hover:text-emerald-500">
                  Forgot password?
                </Link>
              </div>
              {error && <p className="mt-3 text-sm text-rose-400">{error}</p>}
            </div>
 
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 
                        px-6 py-3 text-sm font-semibold text-white shadow-lg transition 
                        hover:brightness-105"
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
 