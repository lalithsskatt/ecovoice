import { useEffect, useState } from 'react'
import heroImage from '../../assets/hero.jpg'
import leafImage from '../../assets/leaf.png'
import goPileafImage from '../../assets/gopileaf.jpeg'


const testimonials = [
  {
    quote: 'EcoVoice helped our neighborhood plant trees that cool the street and attract birds again.',
    name: 'Maya P.',
    role: 'Community Organizer',
    image: heroImage,
  },
  {
    quote: 'The volunteer platform made it easy to join local cleanups and feel part of something bigger.',
    name: 'Aaron L.',
    role: 'Volunteer',
    image: leafImage,
  },
  {
    quote: 'Their resources and project transparency gave our team the confidence to scale our impact.',
    name: 'Sofia R.',
    role: 'Program Manager',
    image: goPileafImage,
  },
]

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((index) => (index + 1) % testimonials.length)
    }, 6500)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="relative">
        <img src={testimonials[current].image} alt="testimonial" className="h-64 w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="relative p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Testimonials</p>
          <blockquote className="mt-6 space-y-4 rounded-3xl bg-white/90 p-8 shadow-2xl shadow-slate-950/10 backdrop-blur-sm">
            <p className="text-2xl font-semibold leading-tight text-slate-900">“{testimonials[current].quote}”</p>
            <footer className="text-sm text-slate-500">{testimonials[current].name}, {testimonials[current].role}</footer>
          </blockquote>
        </div>
      </div>
      <div className="mt-6 flex gap-3 p-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-8 rounded-full transition ${index === current ? 'bg-emerald-600' : 'bg-slate-300 dark:bg-slate-600'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsCarousel
