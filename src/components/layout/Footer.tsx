export default function Footer() {
  return (
    <footer className="bg-forest-700 text-forest-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 text-white font-bold text-xl mb-3">
              <img
                src="/urban-safari-logo.png"
                alt="Urban Safari logo"
                width={52}
                height={52}
                className="rounded-full"
              />
              <span>Urban Safari</span>
            </div>
            <p className="text-forest-300 max-w-sm">
              Unforgettable team building experiences that bring people together through exploration, competition, and celebration.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-end gap-3">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#tiers" className="text-forest-300 hover:text-white transition-colors">Experiences</a>
              <a href="#how-it-works" className="text-forest-300 hover:text-white transition-colors">How It Works</a>
              <a href="#contact" className="text-forest-300 hover:text-white transition-colors">Contact</a>
              <a href="/privacy" className="text-forest-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/support" className="text-forest-300 hover:text-white transition-colors">Support</a>
            </nav>
            <div className="flex flex-col gap-1 text-forest-300">
              <a href="tel:4054374597" className="hover:text-white transition-colors">(405) 437-4597</a>
              <a href="mailto:hello@urbansafari.app" className="hover:text-white transition-colors">hello@urbansafari.app</a>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-600 pt-6 text-forest-400 text-sm">
          © {new Date().getFullYear()} Urban Safari Game Experiences. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
