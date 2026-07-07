import { Link } from 'react-router-dom'

function CTASection({ title, description, primaryLabel, primaryLink, secondaryLabel, secondaryLink }) {
  return (
    <section className="rounded-[2rem] bg-gradient-to-r from-emerald-600 via-sky-600 to-purple-600 p-10 text-white shadow-2xl shadow-slate-950/20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-100">Ready to act?</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-100/90">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to={primaryLink} className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
            {primaryLabel}
          </Link>
          {secondaryLink && (
            <Link to={secondaryLink} className="inline-flex rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default CTASection
