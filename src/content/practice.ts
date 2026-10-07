// The five sample challenges in the homepage practice hunt. Local only: nothing is uploaded or sent.
export type PracticeKind = 'photo' | 'video' | 'trivia' | 'choice' | 'text';

export interface PracticeChallenge {
  id: PracticeKind;
  icon: 'camera' | 'film' | 'question' | 'list' | 'pen';
  card: string;
  cardLine: string;
  kind: string;
  title: string;
  points: number;
  answer: string;
  art: string;
  description: string;
}

export const practiceChallenges: PracticeChallenge[] = [
  { id: 'photo', icon: 'camera', card: 'Snap it', cardLine: 'A photo, usually with the whole team in it.', kind: 'Photo challenge', title: 'Strike your explorer pose', points: 100, answer: 'A photo', art: '/img/team-in-action.webp', description: 'Gather your group and strike your boldest explorer pose. Make it a photo you’ll laugh about later.' },
  { id: 'video', icon: 'film', card: 'Film it', cardLine: 'A short video of the team doing something brave or silly.', kind: 'Video challenge', title: 'Ten seconds as a tour guide', points: 100, answer: 'A short video', art: '/img/atlas-wave.webp', description: 'Introduce an ordinary place as if it were the most extraordinary stop on your expedition. Give us ten seconds of your best tour-guide voice.' },
  { id: 'trivia', icon: 'question', card: 'Answer it', cardLine: 'Trivia about where you are.', kind: 'Trivia challenge', title: 'Find your bearings', points: 50, answer: 'A short answer', art: '/img/atlas-cartographer-outfit.webp', description: 'You are facing north. Which direction is directly behind you? Type the direction below.' },
  { id: 'choice', icon: 'list', card: 'Pick one', cardLine: 'Choose the right answer from a few.', kind: 'Multiple-choice challenge', title: 'A clue with branches', points: 50, answer: 'One choice', art: '/img/atlas-binoculars.webp', description: '“I have branches, but no leaves.” Which of these places fits the clue?' },
  { id: 'text', icon: 'pen', card: 'Type it', cardLine: 'Write what you found or figured out.', kind: 'Text challenge', title: 'Name your next expedition', points: 50, answer: 'Your own words', art: '/img/atlas-flag.webp', description: 'Every great adventure deserves a name. Give your next expedition a title that would make your friends want to come along.' },
];
