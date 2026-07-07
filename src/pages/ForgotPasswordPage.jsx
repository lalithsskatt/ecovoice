import { Link } from 'react-router-dom'

function ForgotPasswordPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center py-16">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Password reset</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Forgot your password?</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Enter your email to receive a secure reset link.</p>
        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Email address</label>
            <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-400 dark:border-slate-700 dark:bg-slate-800" placeholder="you@example.com" />
          </div>
          <button type="button" className="w-full rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">Send reset link</button>
        </form>
        <p className="mt-5 text-sm text-slate-600 dark:text-slate-400">
          Back to <Link to="/login" className="font-semibold text-emerald-600">login</Link>
        </p>
      </section>
    </div>
  )
}

export default ForgotPasswordPage
