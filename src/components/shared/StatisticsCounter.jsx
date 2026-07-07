import { useEffect, useState } from 'react'
import useInView from '../../hooks/useInView'

function StatisticsCounter({ stats }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const [values, setValues] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!inView) return
    const timers = stats.map((stat, index) => {
      const target = stat.value
      const increment = Math.ceil(target / 80)
      return window.setInterval(() => {
        setValues((current) => {
          const next = [...current]
          next[index] = Math.min(next[index] + increment, target)
          return next
        })
      }, 25)
    })

    return () => timers.forEach((timer) => window.clearInterval(timer))
  }, [inView, stats])

  return (
    <section ref={ref} className="grid gap-6 md:grid-cols-3">
      {stats.map((stat, index) => (
        <div key={stat.label} className="rounded-3xl border border-emerald-100 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-5xl font-semibold text-emerald-600 dark:text-emerald-400">{values[index].toLocaleString()}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{stat.label}</p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{stat.description}</p>
        </div>
      ))}
    </section>
  )
}

export default StatisticsCounter
