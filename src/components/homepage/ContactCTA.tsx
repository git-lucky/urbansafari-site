export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-forest-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Build Your Team's Next Story?
        </h2>
        <p className="text-forest-100 text-xl mb-10 max-w-2xl mx-auto">
          Contact us to book your experience or get a custom quote. We'll find the right tier for your team and handle the rest.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Phone */}
          <a
            href="tel:4054374597"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-colors border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-forest-200 uppercase tracking-wide font-medium">Call us</div>
              <div className="font-bold text-lg">(405) 437-4597</div>
            </div>
          </a>

          {/* Email / Quote */}
          <a
            href="mailto:hello@urbansafari.app?subject=Team Building Inquiry&body=Hi! I'd like to learn more about Urban Safari experiences.%0A%0ATeam size: %0APreferred date: %0AExperience tier interest: %0AAdditional details: "
            className="flex items-center gap-3 bg-white text-forest-700 hover:bg-forest-50 px-8 py-4 rounded-xl transition-colors font-semibold"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-forest-500 uppercase tracking-wide font-medium">Email us</div>
              <div className="font-bold text-lg">Get a Quote</div>
            </div>
          </a>
        </div>

        <p className="mt-8 text-forest-200 text-sm">
          We typically respond within one business day.
        </p>
      </div>
    </section>
  );
}
