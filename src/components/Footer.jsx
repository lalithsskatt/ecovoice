import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
const links = [
  { to: '#about', label: 'About' },
  { to: '#projects', label: 'Projects' },
  { to: '#events', label: 'Events' },
  { to: '#contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-slate-950 text-slate-300 dark:border-slate-800">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-xl font-semibold text-white">Globe Environment</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            We connect communities around climate action, circular living, and meaningful environmental impact.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            {links.map((link) => (
              <a key={link.to} href={link.to} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Follow Us</h3>
          <div className="follow-us">
  <h3>FOLLOW US</h3>
 
  <div className="social-icons flex gap-4 mt-2">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
 
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
 
    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
 
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <FaYoutube />
    </a>
  </div>
</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
