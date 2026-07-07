import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import neighbourImage from '../../assets/neighbour.jpg'
import climateImage from '../../assets/climate.jpg'
import petitionImage from '../../assets/petition.jpg'
import carbonImage from '../../assets/carbon.jpg'
 
const slides = [
  {
    title: 'Transform neighborhoods into green corridors',
    subtitle: 'Connect citizens, NGOs, and cities with data-backed campaigns, real-time maps, and community action.',
    ctaText: 'Explore campaigns',
    ctaLink: '/community',
    image: neighbourImage,
    overlay: 'linear-gradient(135deg, rgba(14,165,233,0.55), rgba(16,185,129,0.35))',
  },
  {
    title: 'Visualize climate impact worldwide',
    subtitle: 'Use an interactive global map to discover sustainable projects, hazard reports, and live environmental data from every region.',
    ctaText: 'View climate map',
    ctaLink: '/climate-map',
    image: climateImage,
    overlay: 'linear-gradient(135deg, rgba(34,197,94,0.55), rgba(6,182,212,0.35))',
  },
  {
    title: 'Launch petitions, reports, and community ideas',
    subtitle: 'Empower citizens with AI-assisted workflows, transparent complaint tracking, and shared advocacy tools.',
    ctaText: 'Start a petition',
    ctaLink: '/report-issue',
    image: petitionImage,
    overlay: 'linear-gradient(135deg, rgba(16,185,129,0.55), rgba(34,197,94,0.35))',
  },
  {
    title: 'Measure your carbon footprint with precision',
    subtitle: 'Generate personalized insights, sustainability goals, and practical actions with our carbon calculator and AI assistant.',
    ctaText: 'Calculate footprint',
    ctaLink: '/learn',
    image: carbonImage,
    overlay: 'linear-gradient(135deg, rgba(59,130,246,0.55), rgba(14,165,233,0.35))',
  },
]
 
function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
 
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length)
    }, 7000)
    return () => window.clearInterval(interval)
  }, [])
 
  const slide = slides[currentIndex]
 
  return (
          <section
        className="relative -mt-20 overflow-hidden bg-slate-950 text-white shadow-2xl shadow-slate-900/10"
        style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}
      >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
      <div className="absolute inset-0" style={{ background: slide.overlay, mixBlendMode: 'screen' }} />
      <div className="absolute inset-0 bg-slate-950/25" />
 
      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-20 sm:px-10 lg:px-12">        <div className="max-w-3xl space-y-8 rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/20">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur-sm">
            EcoVoice global launch
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{slide.title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-100/85">{slide.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={slide.ctaLink}
              className="inline-flex items-center rounded-full bg-emerald-500/95 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400/95"
            >
              {slide.ctaText}
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
 
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-10 rounded-full transition ${currentIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  )
}
 
export default HeroSlider