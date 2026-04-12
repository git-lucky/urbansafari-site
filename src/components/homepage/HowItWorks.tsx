const steps = [
  {
    number: "01",
    title: "Book Your Experience",
    description: "Choose a tier, pick a date, and tell us your team size. We'll handle everything from there.",
  },
  {
    number: "02",
    title: "We Handle the Setup",
    description: "Your custom game is built, logistics are sorted, and the technology is ready to go before day one.",
  },
  {
    number: "03",
    title: "Your Team Explores",
    description: "Teams compete through city challenges, photo missions, trivia, and creative tasks — all tracked in real time.",
  },
  {
    number: "04",
    title: "Celebrate Together",
    description: "Wrap up with an awards ceremony, highlight reel, and memories your team will talk about for months.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-forest-500 font-semibold tracking-widest uppercase text-sm mb-3">
            The Process
          </p>
          <h2 className="text-4xl font-bold text-forest-700">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center md:items-start md:text-left">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+2.5rem)] right-[-50%] h-px bg-forest-100" />
              )}

              <div className="w-12 h-12 rounded-full bg-forest-600 text-white font-bold text-lg flex items-center justify-center mb-4 shrink-0 relative z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-forest-700 mb-2">{step.title}</h3>
              <p className="text-forest-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
