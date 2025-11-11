import { Deck } from "@/types";

export const decks: Deck[] = [
  {
    id: "deck-1",
    name: "Rift Tempo Rush",
    description:
      "Hyper-aggressive opener featuring Lyra and Mira to secure early objectives before scaling opponents come online.",
    author: "NovaFlux",
    legends: ["leg-1", "leg-6", "leg-3"],
    likes: 182,
    views: 2450,
    createdAt: "2024-02-20T10:00:00.000Z",
  },
  {
    id: "deck-2",
    name: "Bulwark Control",
    description:
      "Slow-and-steady fortress build using Grom and Talos to stall lanes while Nyx sets up decisive picks.",
    author: "ShieldWall",
    legends: ["leg-2", "leg-4", "leg-5"],
    likes: 210,
    views: 3100,
    createdAt: "2024-02-12T12:30:00.000Z",
  },
  {
    id: "deck-3",
    name: "Botnet Suppression",
    description:
      "Seris and Kara lock down capture points with overlapping healing zones and signal jammers.",
    author: "Orbit",
    legends: ["leg-3", "leg-7", "leg-6"],
    likes: 142,
    views: 1675,
    createdAt: "2024-03-02T08:15:00.000Z",
  },
];
