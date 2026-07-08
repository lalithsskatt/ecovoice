import { useRef, useEffect, useState } from 'react'
 
const stats = [
  { label: 'Trees planted', value: '120,000+' },
  { label: 'Volunteers', value: '8,600+' },
  { label: 'Projects launched', value: '320+' },
]
 
const team = [
  {
    name: 'Sai Charan',
    role: 'CLIMATE INTELLIGENCE DIRECTOR',
    description: 'Specializes in atmospheric data modeling and constructing localized carbon footprint metrics.',
    image: '../assets/team/sai.png',
    fallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Ushasree Vidivada',
    role: 'CORE PLATFORM ARCHITECT',
    description: 'Engineers system architecture focused on data transparency and distributed community dashboards.',
    image: '../assets/team/ushasree.png',
    fallback: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Lalith Harsha',
    role: 'LOBBY & COALITION LEAD',
    description: 'Manages municipal integrations, code compliance protocols, and technical ecosystem advocacy.',
    image: '../assets/team/lalith.png',
    fallback: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Ruthik Avinash',
    role: 'FRONTEND ENGINEER',
    description: 'Implements interactive geocoding interfaces and fast, real-time dashboard visualization tools.',
    image: '../assets/team/ruthik.png',
    fallback: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Bhavya sri',
    role: 'SUSTAINABILITY DATA ANALYST',
    description: 'Builds analytical query flows to track tree survival records and local cleanup metrics.',
    image: '../assets/team/bhavya.png',
    fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Madhu Kishore',
    role: 'FULL STACK DEVELOPER',
    description: 'Maintains open-source API systems and coordinates automated user notification trees.',
    image: '../assets/team/madhu.png',
    fallback: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
]
 
const timeline = [
  { year: '2025', event: 'Launched community complaint and sustainability tracking tools.' },
  { year: '2022', event: 'Reached 100,000 volunteer hours and 200 active campaigns.' },
  { year: '2019', event: 'Expanded programs to coastal cleanup and solar workshops.' },
  { year: '2018', event: 'EcoVoice launched with the first tree planting campaign.' },
]
 
const goals = [
  { name: 'Clean communities', description: 'Reduce plastic and pollution through regular volunteer-led cleanups.' },
  { name: 'Healthy ecosystems', description: 'Restore habitat with native planting and water protection efforts.' },
  { name: 'Inclusive education', description: 'Provide sustainability learning for all ages via workshops and resources.' },
]
 
function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRefs = useRef([]);
 
  // Auto-Slide effect driven by index state updates
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
    }, 3000); // Slides every 3 seconds
 
    return () => clearInterval(autoSlideInterval);
  }, []);
 
  // Whenever the active index changes, smoothly position the container
  useEffect(() => {
    const targetCard = cardRefs.current[currentIndex];
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start', // Aligns the leading card index to the left container margin
      });
    }
  }, [currentIndex]);
 
  return (
    <div className="w-full max-w-full overflow-hidden box-border px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto space-y-16 pb-10">
       
        {/* About Section */}
        <section className="rounded-3xl border border-emerald-300 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">About</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">EcoVoice unites people and planet through collaborative action.</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">We build accessible programs for communities to protect ecosystems, reduce waste, and empower climate leadership across cities and rural regions.</p>
        </section>
 
        {/* Stats Section */}
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <p className="text-4xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </section>
 
        {/* Mission & Vision Section */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-300 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Mission</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Empower communities to protect their local environment.</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">We design collaborative projects, learning experiences, and tools that enable residents and organizations to restore nature and build long-term resilience.</p>
          </div>
 
          <div className="rounded-3xl border border-emerald-300 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">Vision</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">A world where every neighborhood is healthy, thriving, and climate-ready.</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">We believe that local action adds up to global impact when people are connected by purpose, transparency, and shared stewardship.</p>
          </div>
        </section>
 
        {/* Updated Team Section */}
        <section className="rounded-3xl border border-emerald-300 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Our team</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">A dedicated squad of scientists, coders, and advocates.</p>
         
          <div className="relative mt-8 group">
            {/* Slider Container */}
            <div
              className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {team.map((member, index) => {
                return (
                  <div
                    key={member.name}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="w-64 shrink-0 flex flex-col overflow-hidden rounded-2xl bg-[#4A5551] shadow-md transition-transform duration-300 hover:-translate-y-1"
                  >
                    {/* Team Member Image */}
                    <div className="h-56 w-full bg-slate-200 dark:bg-slate-800">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.target.src = member.fallback;
                        }}
                      />
                    </div>
 
                    {/* Card Body - Styled dynamically to match second image */}
                    <div className="flex flex-1 flex-col p-5 text-white bg-[#3D4643]">
                      <h3 className="text-lg font-bold tracking-tight truncate">
                        {member.name}
                      </h3>
                     
                      <p className="mt-1 text-[10px] font-bold tracking-wider text-emerald-400 uppercase line-clamp-1">
                        {member.role}
                      </p>
                     
                      <p className="mt-3 text-xs leading-relaxed text-slate-300 line-clamp-3">
                        {member.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
 
        {/* Journey/Milestones Section */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Journey</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Milestones in our growth</h2>
          <div className="mt-8 space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{item.year}</p>
                <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">{item.event}</p>
              </div>
            ))}
          </div>
        </section>
 
        {/* Sustainability Goals Section */}
        <section className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Sustainability goals</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">What we aim to achieve</h2>
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {goals.map((goal) => (
              <div key={goal.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{goal.name}</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{goal.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
 
export default AboutPage;