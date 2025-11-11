import { NextResponse } from "next/server";

import { getDecks } from "@/lib/data-service";

export async function GET() {
  const data = await getDecks();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const deck = {
    id: `deck-${Date.now()}`,
    name: payload.name ?? "Untitled Deck",
    description: payload.description ?? "",
    author: payload.author ?? "Anonymous",
    legends: payload.legendIds ?? [],
    likes: 0,
    views: 0,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json(deck, { status: 201 });
}
