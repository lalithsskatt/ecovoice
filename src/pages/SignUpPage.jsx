import { useNavigate } from 'react-router-dom'

function SignUpPage() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
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
            <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email address</label>
            <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
            <input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800" placeholder="Create a strong password" />
          </div>
          <button type="submit" className="w-full rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">Create account</button>
        </form>

        <p className="text-sm text-slate-600 dark:text-slate-400">Already have an account? Log in to continue.</p>
      </section>
    </div>
  )
}

export default SignUpPage
