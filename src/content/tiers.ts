export interface Tier {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  mascotPose: string;
  subtitle?: string;
  featured?: boolean;
  badges?: string[];
}

export const tiers: Tier[] = [
  {
    slug: 'scout',
    name: 'Scout',
    tagline: 'Self-guided. Flexible. Ready to play.',
    description:
      'A custom expedition your team can run on their own schedule. Perfect when you want the Urban Safari energy without the coordination overhead.',
    includes: [
      'We build your city game, no setup required on your end',
      'Teams navigate challenges at their own pace',
      'No facilitator, play any day, any time',
      'Great for small teams',
    ],
    mascotPose: 'atlas-binoculars',
  },
  {
    slug: 'remote-expedition',
    name: 'Remote Expedition',
    tagline: 'We join you  — virtually.',
    description:
      'The guided version for remote teams. We kick off live on video, stay on standby all day, and keep every team in sync no matter where they are.',
    includes: [
      'Live remote kickoff and orientation',
      'Real-time support from a Safari host',
      'Leaderboard updates across all teams',
      'Works for teams spread across time zones',
    ],
    mascotPose: 'atlas-headset',
  },
  {
    slug: 'guided-expedition',
    name: 'Urban Safari',
    subtitle: 'Guided Expedition',
    tagline: 'Our signature expedition. Your team just shows up.',
    description:
      'Our fully guided, in-person experience. We build the challenges around your company and handle the day from kickoff to the awards celebration.',
    includes: [
      'In-person Safari host and full event coordination',
      'Custom company-specific challenges',
      'In-city support throughout the event',
      'Awards ceremony and celebration at the finish',
      'Post-event highlight reel for your team',
      'Dedicated account lead from booking to wrap',
    ],
    mascotPose: 'atlas-flag',
    featured: true,
    badges: ['Most booked', 'Signature'],
  },
];
