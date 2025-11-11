import { CommunityLinks, CommunityPost, ContactInfo } from "@/types";

export const communityPosts: CommunityPost[] = [
  {
    id: "post-1",
    title: "What counters Rift Tempo?",
    content:
      "I keep running into Lyra tempo decks in platinum. Any tech picks that slow them without giving up late game?",
    author: "MinerMike",
    replies: 12,
    likes: 48,
    createdAt: "2024-03-09T11:00:00.000Z",
  },
  {
    id: "post-2",
    title: "Share your Mining Rush drops",
    content:
      "Pulled a radiant relic on my third run! Curious what everyone else found and whether the drop table is worth grinding.",
    author: "CrystalQueen",
    replies: 34,
    likes: 72,
    createdAt: "2024-03-07T15:45:00.000Z",
  },
  {
    id: "post-3",
    title: "LFG for Riftbreakers Championship",
    content:
      "Looking for two consistent teammates (supports preferred) to queue for the qualifier. We scrim daily at 20:00 UTC.",
    author: "Echelon",
    replies: 9,
    likes: 33,
    createdAt: "2024-03-05T19:30:00.000Z",
  },
];

export const communityLinks: CommunityLinks = {
  official: [
    { name: "PlayDalarnia.com", url: "https://playdalarnia.com" },
    { name: "Status Page", url: "https://status.dalarnia.fun" },
    { name: "Official Discord", url: "https://discord.gg/dalarnia" },
  ],
  community: [
    { name: "Reddit /r/DalarniaLegends", url: "https://reddit.com/r/DalarniaLegends" },
    { name: "Strategy Hub Notion", url: "https://notion.so/dalarnia-legends" },
    { name: "Esports Bracket", url: "https://battlefy.com/dalarnia-legends" },
  ],
};

export const contactInfo: ContactInfo = {
  email: "contact@dalarnia.fun",
  discord: "dalarnia-legends",
  socialMedia: {
    twitter: "@DalarniaLegends",
    facebook: "DalarniaLegends",
  },
};
