export type ArticleCategory =
  | "all"
  | "news"
  | "patch_notes"
  | "announcements"
  | "guides"
  | "events"
  | "faq";

export interface Article {
  id: string;
  title: string;
  content: string;
  category: Exclude<ArticleCategory, "all">;
  tags: string[];
  author: string;
  createdAt: string;
}

export type Rarity = "Legendary" | "Epic" | "Rare" | "Common";

export interface Legend {
  id: string;
  name: string;
  description: string;
  rarity: Rarity;
  stats: {
    attack: number;
    defense: number;
    speed: number;
  };
  abilities: string[];
}

export interface Deck {
  id: string;
  name: string;
  description: string;
  author: string;
  legends: string[];
  likes: number;
  views: number;
  createdAt: string;
}

export interface CommunityPost {
  id: string;
  title: string;
  content: string;
  author: string;
  replies: number;
  likes: number;
  createdAt: string;
}

export interface CommunityLinks {
  official: { name: string; url: string }[];
  community: { name: string; url: string }[];
}

export interface ContactInfo {
  email: string;
  discord: string;
  socialMedia: {
    twitter: string;
    facebook: string;
  };
}

export interface MarketItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  rarity: Rarity;
  seller: string;
}

export interface TokenInfo {
  tokenName: string;
  symbol: string;
  currentPrice: string;
  marketCap: string;
  exchanges: {
    name: string;
    url: string;
  }[];
}
