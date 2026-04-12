import { useEffect, useState } from 'react'

const tiers = [
  {
    name: 'Self Exploration',
    tagline: 'Independent. Flexible. Self-guided.',
    description: 'Perfect for teams who want the Urban Safari experience with full flexibility on timing and pace.',
    bullets: [
      'Prebuilt game ready to play — no setup required',
      'Teams navigate challenges at their own pace',
      'No facilitator needed',
      'Ideal for small groups and budget-conscious teams',
    ],
    badge: null,
    badgeColor: null,
    mascot: '/assets/Mascot/SelfExploration.png',
  },
  {
    name: 'Plugged In',
    tagline: 'Remote-friendly. Virtually guided.',
    description: 'Get all the energy of a guided hunt with live support — from anywhere.',
    bullets: [
      'Live remote orientation via video call',
      'Real-time support throughout the event',
      'Teams maintain their autonomy in the field',
      'Works for distributed and hybrid teams',
    ],
    badge: null,
    badgeColor: null,
    mascot: '/assets/Mascot/PluggedIn.png',
  },
  {
    name: 'On the Hunt',
    tagline: 'Fully facilitated. High energy.',
    description: 'Urban Safari runs the show. Your team just shows up and competes.',
    bullets: [
      'Urban Safari guides your hunt in-person',
      'Professional event coordination included',
      'Awards ceremony and celebration at the end',
      'High engagement guaranteed',
    ],
    badge: 'Most Popular',
    badgeColor: 'silver',
    mascot: '/assets/Mascot/OnTheHunt.png',
  },
  {
    name: 'Urban Safari Experience',
    tagline: 'The full package. Unforgettable.',
    description: 'Everything in On the Hunt, plus custom branding and a highlight reel your team will actually watch.',
    bullets: [
      'Everything included in On the Hunt',
      'Custom company-specific challenges built for you',
      'Branded highlight reel video delivered after',
      'Dedicated account manager from booking to wrap-up',
    ],
    badge: 'Premium',
    badgeColor: 'gold',
    mascot: '/assets/Mascot/UrbanSafariExperience.png',
  },
]

export default function ExperienceTiers() {
  const [columns, setColumns] = useState(4)

  useEffect(() => {
    const updateColumns = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 640) {
        setColumns(1)
      } else if (windowWidth < 1200) {
        setColumns(2)
      } else {
        setColumns(4)
      }
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  return (
    <section id="tiers" className="py-20 px-6 bg-forest-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-forest-500 font-semibold tracking-widest uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-forest-700 mb-4">Experience Tiers</h2>
          <p className="text-forest-600 text-lg max-w-2xl mx-auto">
            Four distinct levels to match your team's goals, size, and budget.
          </p>
        </div>

        <div id="tiers-grid" className={`grid ${columns === 1 ? 'grid-cols-1' : columns === 2 ? 'grid-cols-2' : 'grid-cols-4'} gap-6`}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative bg-white rounded-2xl p-8 border-l-4 border-forest-600 shadow-sm hover:shadow-md transition-shadow"
            >
              {tier.badge && tier.badgeColor && (
                <span
                  className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                  style={
                    tier.badgeColor === 'gold'
                      ? {
                          background: 'linear-gradient(135deg, #f472b6 0%, #a78bfa 25%, #60a5fa 50%, #2dd4bf 75%, #34d399 100%)',
                          color: '#ffffff',
                          textShadow: '0 1px 3px rgba(0,0,0,0.35)',
                          boxShadow: '0 4px 14px rgba(167, 139, 250, 0.55), 0 2px 6px rgba(244, 114, 182, 0.4)',
                        }
                      : {
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          color: '#ffffff',
                          textShadow: '0 1px 2px rgba(0,0,0,0.25)',
                          boxShadow: '0 4px 14px rgba(16, 185, 129, 0.5), 0 2px 6px rgba(5, 150, 105, 0.35)',
                        }
                  }
                >
                  {tier.badge}
                </span>
              )}

              <div className="flex justify-center mb-4">
                <img
                  src={tier.mascot}
                  alt={`${tier.name} mascot`}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-forest-700 mb-1">{tier.name}</h3>
              <p className="text-forest-500 font-medium italic mb-3">{tier.tagline}</p>
              <p className="text-forest-600 mb-5">{tier.description}</p>

              <ul className="space-y-2">
                {tier.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-forest-600">
                    <svg aria-hidden="true" className="w-5 h-5 text-forest-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex px-8 py-4 bg-forest-600 text-white font-semibold rounded-xl text-lg hover:bg-forest-700 transition-colors shadow-md"
          >
            Find the Right Tier for Your Team
          </a>
        </div>
      </div>
    </section>
  )
}
