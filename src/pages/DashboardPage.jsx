import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'
import { useAuth } from '../context/AuthContext'
import StatisticsCounter from '../components/shared/StatisticsCounter'
import heroImage from '../assets/environment.jpg'

const metrics = [
  { value: 128, label: 'Active campaigns', description: 'Live sustainability projects across neighborhoods.' },
  { value: 24, label: 'Pending complaints', description: 'Citizen reports awaiting review in the workflow.' },
  { value: 78, label: 'Petitions open', description: 'Current petitions gathering support globally.' },
]

function DashboardPage() {
  const { user } = useAuth()
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-white text-slate-900 shadow-sm">
        <div className="absolute inset-0 opacity-100" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-white/20" />
        <div className="relative grid gap-6 p-8 lg:grid-cols-[0.72fr_0.28fr] lg:p-10">
          <div className="space-y-5">
<p className="text-sm uppercase tracking-[0.35em] text-emerald-600 font-semibold">
  Active Hub: {user?.name || 'Guest Citizen'}
</p>
<h1 className="text-4xl font-semibold text-slate-900">
  Welcome back, {user?.name || 'Citizen'}!
</h1>
            <p className="max-w-3xl text-slate-900">Your actions are offsetting carbon emissions, validating community reports, and empowering the EcoVoice network.</p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-emerald-300 bg-white/80 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Eco Score</p>
                <p className="mt-4 text-3xl font-semibold text-emerald-600">50 pts</p>
              </div>
              <div className="rounded-3xl border border-emerald-300 bg-white/80 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Volunteer Hours</p>
                <p className="mt-4 text-3xl font-semibold text-slate-700">0 hrs</p>
              </div>
              <div className="rounded-3xl border border-emerald-300 bg-white/80 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Alerts</p>
                <p className="mt-4 text-3xl font-semibold text-amber-600">3 new</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-emerald-200 bg-emerald-50/90 p-6 text-slate-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">Live updates</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Notifications</h2>
              </div>
              <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase text-white">New</span>
            </div>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="rounded-3xl bg-emerald-100 p-4 shadow-sm">
                <p className="font-semibold text-slate-900">Air quality alert issued</p>
                <p className="mt-1">AQI reached 145 in your monitored region. Avoid outdoor group events.</p>
              </div>
              <div className="rounded-3xl bg-emerald-100 p-4 shadow-sm">
                <p className="font-semibold text-slate-900">New petition milestone</p>
                <p className="mt-1">Community petition reached 78% of its target signatures.</p>
              </div>
              <div className="rounded-3xl bg-emerald-100 p-4 shadow-sm">
                <p className="font-semibold text-slate-900">AI report ready</p>
                <p className="mt-1">Review the latest environmental verification summary for your region.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Quick overview</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <Card key={metric.label} title={metric.label} subtitle={metric.description} className="border-emerald-100 bg-emerald-50" />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Live environmental data</h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Real-time climate, air quality, and activity metrics from your selected regions.</p>
          <div className="mt-8">
            <StatisticsCounter stats={metrics} />
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Community pulse</h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Track recent citizen reports, petition momentum, and the latest activity from local groups.</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-900">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">New report submitted</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">A river pollution complaint has been added for your review.</p>
            </div>
            <div className="rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-900">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Petition nearing target</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Community solar funding petition is 92% of the way to approval.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DashboardPage
