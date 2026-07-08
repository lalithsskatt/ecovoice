import { Link } from 'react-router-dom'
import HeroSlider from '../components/shared/HeroSlider'
import SearchBar from '../components/shared/SearchBar'
import StatisticsCounter from '../components/shared/StatisticsCounter'
import NewsCard from '../components/shared/NewsCard'
import CampaignCard from '../components/shared/CampaignCard'
import TestimonialsCarousel from '../components/shared/TestimonialsCarousel'
import PartnerLogos from '../components/shared/PartnerLogos'
import CTASection from '../components/shared/CTASection'

import environmentImage from '../assets/environment.jpg'
import leafImage from '../assets/leaf.png'
import leaf2Image from '../assets/leaf2.png'
import climateResilienceImage from '../assets/climateResilience.png'
import ProgessImage from '../assets/Progress.png'
import GreenRoofImage from '../assets/GreenRoof.png'
import VolunterImage from '../assets/Volunter.png'
import SolarImage from '../assets/Solar.png'
import CleanupImage from '../assets/Cleanup.png'
import WalkingpathImage from '../assets/Walkingpath.png'
import Solar1Image from '../assets/Solar1.png'
import GlobalStatisticsImage from '../assets/GlobalStatistics.png' 

const visionHighlights = [
  {
    title: 'Actionable community programs',
    description:
      'Join tree plantings, cleanups, and restoration initiatives that deliver measurable local impact.',
    image: environmentImage,
  },
  {
    title: 'Tools for climate resilience',
    description:
      'Use guides, maps, and volunteer projects to build stronger neighborhoods and ecosystems.',
    image: climateResilienceImage,
  },
  {
    title: 'Transparent impact reporting',
    description:
      'Track progress across campaigns, partners, and sustainability outcomes with clarity.',
    image: ProgessImage,
  },
]

const stats = [
  {
    value: 120000,
    label: 'Trees planted',
    description: 'Green canopy restored across cities and parks.',
  },
  {
    value: 8600,
    label: 'Volunteers activated',
    description: 'People mobilized for cleanup, planting, and education.',
  },
  {
    value: 320,
    label: 'Campaigns launched',
    description: 'Community-led conservation and sustainability programs.',
  },
]

const newsItems = [
  {
    title: 'Cities adopt smart green roofs to reduce heat stress',
    excerpt:
      'A growing number of municipalities are integrating living roofs into public buildings.',
    date: 'March 18, 2026',
    tag: 'Climate News',
    image: GreenRoofImage,
  },
  {
    title: 'Volunteer-led workshops expand across coastal regions',
    excerpt:
      'New community programs shine a light on plastic-free habits.',
    date: 'April 3, 2026',
    tag: 'Community',
    image: VolunterImage,
  },
  {
    title: 'Solar training labs help families transition to clean energy',
    excerpt:
      'Hands-on workshops are enabling local households to install solar panels.',
    date: 'April 20, 2026',
    tag: 'Renewables',
    image: SolarImage,
  },
]

const campaigns = [
  {
    title: 'Coastal Cleanup Challenge',
    description:
      'Recruit 300 volunteers to remove trash from endangered shoreline habitats.',
    progress: 72,
    ctaLabel: 'Join cleanup',
    image: CleanupImage,
  },
  {
    title: 'Urban Tree Corridor',
    description:
      'Establish shaded walking paths with native trees.',
    progress: 54,
    ctaLabel: 'Plant with us',
    image: WalkingpathImage,
  },
  {
    title: 'Solar Skills Lab',
    description:
      'Train 150 families on affordable solar installation.',
    progress: 36,
    ctaLabel: 'Learn more',
    image: Solar1Image,
  },
]

function HomePage() {
  return (
    <>
      {/* ================= HERO FULL WIDTH ================= */}
      <HeroSlider />

      {/* ============== REST OF PAGE ============== */}
      <div className="mx-auto max-w-7xl space-y-16 px-6 py-10">

        {/* Vision */}
        <section className="space-y-8 rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <div className="grid gap-8 lg:grid-cols-[0.85fr_0.6fr] lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
                Vision
              </p>

              <h2 className="mt-4 text-4xl font-semibold">
                A thriving planet starts with connected communities.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                EcoVoice empowers neighborhood leaders, volunteers, and
                partners to restore ecosystems, reduce pollution, and build
                climate resilience together.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <Link
                  to="/community"
                  className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                  Explore programs
                </Link>

                <Link
                  to="/about"
                  className="rounded-full border border-emerald-600 px-6 py-3 font-semibold text-emerald-600 hover:bg-emerald-50"
                >
                  Learn about EcoVoice
                </Link>

              </div>

            </div>

            <SearchBar />

          </div>

        </section>

        {/* What We Do */}

        <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            What we do
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {visionHighlights.map((item) => (

              <div
                key={item.title}
                className="overflow-hidden rounded-3xl border bg-emerald-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Statistics */}

        <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm">

          <div className="grid gap-8 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
                Global statistics
              </p>

              <h2 className="mt-4 text-3xl font-semibold">
                Real results from community action
              </h2>

              <p className="mt-4 text-slate-600">
                Our campaigns generate measurable environmental impact across
                neighborhoods.
              </p>

            </div>

            <img
              src={environmentImage}
              alt=""
              className="h-64 w-full rounded-3xl object-cover"
            />

          </div>

          <div className="mt-10">
            <StatisticsCounter stats={stats} />
          </div>

        </section>

        {/* News */}

        <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm">

          <div className="flex justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
                Climate News
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Latest Stories
              </h2>

            </div>

            <Link
              to="/learn"
              className="font-semibold text-emerald-600"
            >
              Read All →
            </Link>

          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">

            {newsItems.map((item) => (
              <NewsCard key={item.title} {...item} />
            ))}

          </div>

        </section>

        {/* Campaigns */}

        <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm">

          <h2 className="text-3xl font-semibold">
            Current Campaigns
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">

            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.title} {...campaign} />
            ))}

          </div>

        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          <TestimonialsCarousel />

          <PartnerLogos />

        </section>

        <CTASection
          title="Start making a difference today"
          description="Join EcoVoice and help build a greener future."
          primaryLabel="Become a volunteer"
          primaryLink="/signup"
          secondaryLabel="Explore our mission"
          secondaryLink="/about"
        />

      </div>
    </>
  )
}

export default HomePage