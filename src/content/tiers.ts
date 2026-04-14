export type TierBadge = 'popular' | 'premium';

export interface Tier {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  mascotPose: string;
  badge?: TierBadge;
  badgeLabel?: string;
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
    name: 'Guided Expedition',
    tagline: 'We run the show. Your team just shows up.',
    description:
      'A fully facilitated experience with our in-person Safari crew handling every moving piece, from kickoff to the awards ceremony.',
    includes: [
      'In-person Safari host running the event',
      'Full event coordination and logistics',
      'In-city support team throughout the day',
      'Awards ceremony and celebration at the finish',
    ],
    mascotPose: 'atlas-flag',
    badge: 'popular',
    badgeLabel: 'Most booked',
  },
  {
    slug: 'urban-safari',
    name: 'Urban Safari',
    tagline: 'The full expedition. Bespoke. Unforgettable.',
    description:
      'Guided Expedition, plus custom challenges built around your company, and a highlight reel your team will still be sending each other months later.',
    includes: [
      'Includes Guided Expedition +',
      'Custom company-specific challenges',
      'Post-event highlight reel delivered to your company',
      'Dedicated account lead from booking to wrap',
    ],
    mascotPose: 'atlas-clapper',
    badge: 'premium',
    badgeLabel: 'Signature',
  },
];
