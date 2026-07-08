const partners = [
  { name: 'GreenFuture', logo: '/src/assets/green future.jpeg' },
  { name: 'CleanWater', logo:  '/src/assets/clean water.jpeg' },
  { name: 'SolarRise', logo:   '/src/assets/solar rise.jpeg' },
  { name: 'EcoBridge', logo:   '/src/assets/eco bridge.jpeg' },
  { name: 'NatureLink', logo:   '/src/assets/nature link.png' },
  { name: 'EarthGuard', logo:   '/src/assets/earth gaurd.jpeg' },
]

function PartnerLogos() {
  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="grid grid-cols-2 gap-6">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center h-36 rounded-3xl border border-gray-200 bg-white shadow">
            <img src={partner.logo} alt={partner.name} className="h-24 w-24 object-contain" />
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default PartnerLogos
