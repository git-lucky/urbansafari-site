export interface FaqItem {
  q: string;
  a: string;
}

export const preSaleFaq: FaqItem[] = [
  {
    q: 'How big can a team be?',
    a: 'Anywhere from 10 to 200+. The platform and our hosts are built for multi-city expeditions with hundreds of players competing in parallel.',
  },
  {
    q: 'Which cities do you run in?',
    a: 'Any walkable city your team is in. Tell us where and when, and we\'ll scout the route, build the challenges, and turn your city into the game board.',
  },
  {
    q: 'Can we customize the game for our company?',
    a: 'Yes, on every tier above Scout. Guided Expedition adds company trivia and branded moments; the Urban Safari tier is fully custom (challenges, photo overlays, and the whole expedition written around your team).',
  },
  {
    q: 'How far out should we book?',
    a: 'For Scout and Remote Expedition, a couple of weeks is usually enough. For Guided Expedition or a fully custom Urban Safari, four to eight weeks gives us room to scout the city, build the challenges, and make the day feel effortless for you.',
  },
];

export const supportFaq: FaqItem[] = [
  {
    q: 'How do I join a game?',
    a: 'Open the Urban Safari app and enter the game code your event organizer shared. From there you\'ll join or create a team.',
  },
  {
    q: 'What is a Tech Captain?',
    a: 'One teammate who drives the app for the group: inviting team members, submitting challenges, and managing team settings. Everyone else on the team can still pitch in from their own device.',
  },
  {
    q: 'Can we play on multiple devices?',
    a: 'Yep. Every teammate can use their own phone. If you need to reinstall or hop devices, your rejoin code gets you right back to your team.',
  },
  {
    q: 'Why won\'t my photo or video upload?',
    a: 'Probably a weak signal. Big video files take longer, so stay on the page while it works. If it still won\'t go, quit and reopen the app; submissions are saved locally and will finish uploading when you\'re back online.',
  },
  {
    q: 'How are points scored?',
    a: 'Every challenge has a point value on its card. Complete it cleanly and you earn those points. Some creative challenges award bonus points, and hosts decide based on effort and originality.',
  },
  {
    q: 'The app wants camera access. Is that required?',
    a: 'Yes, for photo and video challenges. The app only uses your camera when you\'re actively submitting a challenge.',
  },
];

export const troubleshooting: FaqItem[] = [
  {
    q: 'App feels sluggish',
    a: 'Close other apps running in the background and make sure you\'ve got a stable connection. Restarting the app usually does the trick.',
  },
  {
    q: 'Can\'t find your team',
    a: 'Use your rejoin code to hop back in. Lost it? Your Tech Captain or event organizer can share it again.',
  },
  {
    q: 'Submission failed',
    a: 'Check your connection and retry. The submission is saved locally and will upload automatically once you\'re back online.',
  },
  {
    q: 'Want to report a bug?',
    a: 'Email support@itsybits.io with what happened, the device you\'re on, and your game code if you have it. We read every one.',
  },
];
