import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/homepage/Hero'
import HowItWorks from '@/components/homepage/HowItWorks'
import ExperienceTiers from '@/components/homepage/ExperienceTiers'
import WhyUrbanSafari from '@/components/homepage/WhyUrbanSafari'
import SocialProof from '@/components/homepage/SocialProof'
import ContactCTA from '@/components/homepage/ContactCTA'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ExperienceTiers />
      <WhyUrbanSafari />
      <SocialProof />
      <ContactCTA />
    </>
  )
}
