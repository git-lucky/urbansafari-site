import { useState } from 'react'

const navLinks = [
  { label: 'Experiences', href: '#tiers' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-forest-100">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 text-forest-700 font-bold text-xl">
          <img
            src="/urban-safari-logo.png"
            alt="Urban Safari logo"
            width={70}
            height={70}
            className="rounded-full"
          />
          <span>Urban Safari</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-forest-600 hover:text-forest-700 font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-forest-600 text-white font-semibold rounded-lg hover:bg-forest-700 transition-colors"
        >
          Get a Quote
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-forest-600 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-forest-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-forest-600 font-medium text-lg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="inline-flex justify-center px-5 py-3 bg-forest-600 text-white font-semibold rounded-lg"
            onClick={() => { setOpen(false); window.location.hash = 'contact' }}
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  )
}
