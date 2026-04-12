import { useEffect, useState } from 'react'

const teamImages = [
  { src: '/assets/TeamsInAction/teamimage2.jpeg', alt: 'Team jumping in the city' },
  { src: '/assets/TeamsInAction/teamimage3.jpeg', alt: 'Team cheering after winning' },
  { src: '/assets/TeamsInAction/teamimage4.jpeg', alt: 'Team in action during hunt' },
  { src: '/assets/TeamsInAction/teamimage6.jpeg', alt: 'Team exploring together' },
  { src: '/assets/TeamsInAction/teamimage8.jpeg', alt: 'Team celebrating their win' },
  { src: '/assets/TeamsInAction/teamimage9.jpeg', alt: 'Team on their adventure' },
  { src: '/assets/TeamsInAction/teamimage10.jpeg', alt: 'Team having fun in the city' },
  { src: '/assets/TeamsInAction/teamimage11.jpeg', alt: 'Team on the adventure' },
]

export default function SocialProof() {
  const [startIndex, setStartIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setStartIndex((prev) => (prev + 1) % teamImages.length)
        setFading(false)
      }, 400)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const visible = [0, 1, 2].map((i) => teamImages[(startIndex + i) % teamImages.length])
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(4)
      } else {
        setVisibleCount(3)
      }
    }
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const getGridClass = () => {
    if (visibleCount === 1) return 'grid-cols-1'
    if (visibleCount === 4) return 'grid-cols-2'
    return 'flex justify-center gap-4'
  }

  const displayedImages = visibleCount === 1 || visibleCount === 4
    ? teamImages.slice(0, visibleCount)
    : visible

  return (
    <section className="py-16 px-6 bg-forest-50 border-y border-forest-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-forest-500 font-semibold tracking-widest uppercase text-sm mb-8">
          Trusted by great teams
        </p>

        <div
          className={`${getGridClass()} gap-4 transition-opacity duration-400 justify-center`}
          style={{ opacity: fading && visibleCount === 3 ? 0 : 1 }}
        >
          {displayedImages.map((img, idx) => (
            <div
              key={`${img.src}-${idx}`}
              className="relative w-52 h-40 rounded-2xl overflow-hidden shadow-md shrink-0 mx-auto"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
