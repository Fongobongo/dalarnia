import { MarketItem, TokenInfo } from "@/types";

export const marketItems: MarketItem[] = [
  {
    id: "item-1",
    name: "Riftblade Blueprint",
    price: 420,
    currency: "DAR",
    rarity: "Legendary",
    seller: "LyraLabs",
  },
  {
    id: "item-2",
    name: "Magma Core Shield",
    price: 180,
    currency: "DAR",
    rarity: "Epic",
    seller: "ForgeFrontier",
  },
  {
    id: "item-3",
    name: "Scout Drone Mk.II",
    price: 95,
    currency: "DAR",
    rarity: "Rare",
    seller: "Pulseworks",
  },
  {
    id: "item-4",
    name: "Verdant Bloom Seeds",
    price: 45,
    currency: "DAR",
    rarity: "Common",
    seller: "Greenline",
  },
];

export const tokenInfo: TokenInfo = {
  tokenName: "Dalarnia Token",
  symbol: "DAR",
  currentPrice: "$0.18",
  marketCap: "$52M",
  exchanges: [
    { name: "Kraken", url: "https://kraken.com" },
    { name: "Binance", url: "https://binance.com" },
    { name: "OKX", url: "https://okx.com" },
  ],
};
