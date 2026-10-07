// The homepage practice hunt, in the Expedition Passport look. Local only: nothing is uploaded or sent.
// The phone's four challenges introduce Urban Safari and Mike, one of each kind. Facts used come only
// from the site and Mike's brief: Urban Safari is Mike's company and he guides the hunts; team
// scavenger hunts in your own city; each team plays from one phone; challenges add points and move you
// along the race track; WooTown Scavengers was played September 11 to 13, 2026 in Woodward, Oklahoma
// (the photos are from it).
import type { FaName } from './passportIcons';

export type PracticeKind = 'photo' | 'video' | 'trivia' | 'choice';

export interface PracticeChallenge {
  id: PracticeKind;
  fa: FaName;
  verb: string;
  title: string;
  points: number;
  /** The card's big picture (4:3) and the row's coin (square). */
  card: string;
  coin: string;
  mission: string;
  label?: string;
  placeholder?: string;
  picks?: string[];
  right?: number;
}

export const practiceChallenges: PracticeChallenge[] = [
  { id: 'photo', fa: 'camera', verb: 'Snap it', title: 'Meet your guide', points: 100, card: '/img/practice/guide-card.webp', coin: '/img/practice/guide-coin.webp',
    mission: 'This is Mike. Urban Safari is his company, and he guides the hunts. Say hi the Safari way: snap a photo of your team waving back.' },
  { id: 'trivia', fa: 'circle-question', verb: 'Answer it', title: 'Find your bearings', points: 50, card: '/img/practice/start-card.webp', coin: '/img/practice/start-coin.webp',
    label: 'Your answer', placeholder: 'Type the town',
    mission: 'These photos are from WooTown Scavengers, a real Urban Safari hunt played September 11 to 13, 2026. Which Oklahoma town was it played in? Hint: it’s in the name.' },
  { id: 'choice', fa: 'list-ul', verb: 'Pick one', title: 'How the race works', points: 50, card: '/img/practice/pose-card.webp', coin: '/img/practice/pose-coin.webp',
    mission: 'Each team plays from one phone. What moves your team along the race track?',
    picks: ['Finishing challenges', 'Picking the best team name', 'Walking the farthest'], right: 0 },
  { id: 'video', fa: 'clapperboard', verb: 'Film it', title: 'Ten seconds as a tour guide', points: 100, card: '/img/practice/spot-card.webp', coin: '/img/practice/spot-coin.webp',
    mission: 'Introduce an ordinary place as if it were the most extraordinary stop on your expedition. Give us ten seconds of your best tour-guide voice.' },
];

/** One real example of each kind, shown below the phone as a challenge's details (not playable). */
export interface DetailCard {
  kind: PracticeKind;
  fa: FaName;
  verb: string;
  img: string;
  alt: string;
  title: string;
  mission: string;
  points: number;
  answer: 'photo' | 'video' | 'field' | 'picks';
  label?: string;
  picks?: string[];
}

export const detailCards: DetailCard[] = [
  { kind: 'photo', fa: 'camera', verb: 'Snap it', img: '/img/practice/tower.webp', alt: 'The team stacking giant colored blocks into a tall tower in the park.', title: 'Tower of power',
    mission: 'Stack the giant blocks as high as they’ll go, then get the whole team in the shot.', points: 100, answer: 'photo' },
  { kind: 'video', fa: 'clapperboard', verb: 'Film it', img: '/img/practice/kerplunk.webp', alt: 'Teams playing giant KerPlunk by the lake.', title: 'Film the drop',
    mission: 'Take turns pulling sticks and film the moment the balls come crashing down.', points: 100, answer: 'video' },
  { kind: 'trivia', fa: 'circle-question', verb: 'Answer it', img: '/img/practice/golf.webp', alt: 'A player lining up a golf shot at the driving range.', title: 'Tee box trivia',
    mission: 'In golf, what do you call one stroke under par on a hole?', points: 50, answer: 'field', label: 'Type your answer' },
  { kind: 'choice', fa: 'list-ul', verb: 'Pick one', img: '/img/practice/lot.webp', alt: 'A team in a parking lot, one player pointing the way.', title: 'Which way now?',
    mission: 'The clue reads: “Where the ducks are.” Where do you head next?', points: 50, answer: 'picks', picks: ['The lake', 'The library', 'The bakery'] },
];

/** Two sample teams on the practice race track, so your place means something. */
export const practiceRivals = [125, 275];
