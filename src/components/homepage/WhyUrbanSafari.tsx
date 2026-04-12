const features = [
  {
    icon: "📱",
    title: "Technology + Real World",
    description: "App-powered challenges that send teams into physical spaces — not just staring at a screen.",
  },
  {
    icon: "🎨",
    title: "Fully Customizable",
    description: "Company trivia, branded photo overlays, inside jokes. Every experience can reflect your culture.",
  },
  {
    icon: "👥",
    title: "Any Team Size",
    description: "Designed for groups of 10 to 200+. Multiple competing teams run simultaneously without a hitch.",
  },
  {
    icon: "🏆",
    title: "Proven Results",
    description: "High engagement, measurable satisfaction, and teams that keep talking about it long after the event.",
  },
  {
    icon: "🌎",
    title: "Available Anywhere",
    description: "Experiences available in any city. Remote and hybrid teams are fully supported with the Plugged In tier.",
  },
  {
    icon: "🤝",
    title: "White Glove Service",
    description: "From first inquiry to post-event wrap-up, we handle the logistics so you can focus on your team.",
  },
];

export default function WhyUrbanSafari() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-forest-500 font-semibold tracking-widest uppercase text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-bold text-forest-700">Built for Real Teams</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="text-3xl shrink-0 mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-forest-700 mb-2">{feature.title}</h3>
                <p className="text-forest-500 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
