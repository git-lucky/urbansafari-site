export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-forest-50 to-forest-100 py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-forest-500 font-semibold tracking-widest uppercase text-sm mb-4">
            Engaging Team Building Experiences
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-forest-700 leading-tight mb-6">
            Discover Your Next Team Adventure
          </h1>

          <p className="text-xl text-forest-600 mb-10 max-w-xl">
            Unforgettable experiences that get your team off their seats and into the city — competing, collaborating, and celebrating together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-4 bg-forest-600 text-white font-semibold rounded-xl text-lg hover:bg-forest-700 transition-colors shadow-md"
            >
              Book an Experience
            </a>
            <a
              href="#tiers"
              className="px-8 py-4 border-2 border-forest-600 text-forest-600 font-semibold rounded-xl text-lg hover:bg-forest-600 hover:text-white transition-colors"
            >
              View Experiences
            </a>
          </div>

          <p className="mt-8 text-forest-500 text-sm">
            Trusted by teams in cities nationwide
          </p>
        </div>

        {/* Photo */}
        <div className="flex-1 w-full max-w-lg md:max-w-none">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video md:aspect-[4/3]">
            <img
              src="/team-pic.jpg"
              alt="Team celebrating together after an Urban Safari experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-forest-700/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
