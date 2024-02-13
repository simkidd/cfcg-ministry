export interface Sermon {
  id: string;
  title: string;
  date: string;
  video: string;
  slug: string;
  content: string;
  speaker: string;
}

export const sermonsList: Sermon[] = [
  {
    id: "1",
    title:
      "Finding Purpose in a World Without It – Ecclesiastes 1:1-11 | Searching for Meaning (K)",
    date: "10 Jan 2022",
    speaker: "Derik Fuller",
    video: "https://www.youtube.com/embed/8OxyfY3Kl-k",
    slug: "finding-purpose-in-a-world-without-it",
    content:
      "As human beings we have an innate need for meaning. We want our lives to matter, but do they? In the grand scheme of things, where generations come and generations go, where we’re told that we inhabit a universe that has existed for billions and billions of years and is made up of hundreds of billions of stars and planets, what value and meaning do our lives hold? In the book of Ecclesiastes, Solomon seeks an answer to the question that all of us ask at some point: “What is the meaning of life?” As we travel through this book together the answers will challenge and surprise us, but most importantly, they should lead us to examine whether we are investing our lives in things that truly matter.",
  },
  {
    id: "1",
    title:
      "Renewing our Witness – Ephesians 4:17-32 | Out With The Old, In With The New (K)",
    date: "10 Jan 2022",
    speaker: "Darryl Siemens",
    slug: "renewing-our-witness",
    video: "https://www.youtube.com/embed/uKyNa25-FYc",
    content:
      "In Matthew 5:16 Jesus says that there should be a difference in his followers that radiates out to the world in such a way that people see our good works and give glory to our Father in heaven. Our lives should be a walking billboard for the goodness of God and the difference Jesus makes. If we are going to be the type of people who shine bright for Jesus this year there are things that we are going to need to put off and put on: in the way that we speak to and about others, in the ways we go about our work, and in the priorities and passions that drive us.",
  },
];
