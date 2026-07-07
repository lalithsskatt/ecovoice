const partners = [
  { name: 'GreenFuture', logo: 'https://via.placeholder.com/140x60?text=GreenFuture' },
  { name: 'CleanWater', logo: 'https://via.placeholder.com/140x60?text=CleanWater' },
  { name: 'SolarRise', logo: 'https://via.placeholder.com/140x60?text=SolarRise' },
  { name: 'EcoBridge', logo: 'https://via.placeholder.com/140x60?text=EcoBridge' },
  { name: 'NatureLink', logo: 'https://via.placeholder.com/140x60?text=NatureLink' },
]

function PartnerLogos() {
  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <img src={partner.logo} alt={partner.name} className="h-10 object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PartnerLogos
