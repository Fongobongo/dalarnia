import { Legend } from "@/types";

export const legends: Legend[] = [
  {
    id: "leg-1",
    name: "Lyra the Riftblade",
    description:
      "An agile duelist that warps behind targets and amplifies combo damage when attacking from portals.",
    rarity: "Legendary",
    stats: { attack: 92, defense: 54, speed: 88 },
    abilities: [
      "Quantum Dash – teleport through terrain and strike",
      "Echo Rift – leaves a clone that repeats actions",
      "Singularity Vault – pulls enemies into a collapsing rift",
    ],
  },
  {
    id: "leg-2",
    name: "Grom Forgeheart",
    description:
      "Stalwart frontline tank that stacks armor while channeling magma shields for allies.",
    rarity: "Epic",
    stats: { attack: 63, defense: 90, speed: 42 },
    abilities: [
      "Molten Bulwark – damage reduction aura",
      "Hammerfall – cone stun that scales with armor",
      "Heart Forge – converts shields to burst heals",
    ],
  },
  {
    id: "leg-3",
    name: "Seris Pulseweaver",
    description:
      "Support engineer deploying drones that overclock friendly relics and jam enemy sensors.",
    rarity: "Rare",
    stats: { attack: 48, defense: 58, speed: 77 },
    abilities: [
      "Overclock Drone – increases ally attack speed",
      "Field Repair – restores armor over time",
      "Signal Scramble – silences enemies in an area",
    ],
  },
  {
    id: "leg-4",
    name: "Nyx Voidtide",
    description:
      "Control mage manipulating gravitational tides to displace squads and deny objectives.",
    rarity: "Legendary",
    stats: { attack: 75, defense: 60, speed: 70 },
    abilities: [
      "Event Horizon – creates a slow field",
      "Graviton Spear – single-target burst",
      "Tidal Collapse – chains multiple enemies together",
    ],
  },
  {
    id: "leg-5",
    name: "Talos Runebreaker",
    description:
      "Mid-range bruiser who shreds shields and stores kinetic energy for retaliations.",
    rarity: "Epic",
    stats: { attack: 84, defense: 68, speed: 55 },
    abilities: [
      "Rune Rend – bonus damage vs shields",
      "Kinetic Reserve – stores damage taken",
      "Skyfall Slam – unleashes stored energy in AoE",
    ],
  },
  {
    id: "leg-6",
    name: "Mira Starling",
    description:
      "Scout specializing in vision control with recon drones and precision headshots.",
    rarity: "Rare",
    stats: { attack: 70, defense: 40, speed: 95 },
    abilities: [
      "Luminous Scout – drone providing shared vision",
      "Overwatch – empowers the next basic attack",
      "Flare Cascade – reveals and slows enemies",
    ],
  },
  {
    id: "leg-7",
    name: "Kara Fluxbloom",
    description:
      "Controller who seeds arenas with flora that heal allies and entangle foes.",
    rarity: "Common",
    stats: { attack: 45, defense: 52, speed: 61 },
    abilities: [
      "Verdant Pulse – steady healing aura",
      "Bloom Snare – root that spreads if dispelled",
      "Primal Canopy – grants stealth under vegetation",
    ],
  },
];
