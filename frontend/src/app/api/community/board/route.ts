import { NextResponse } from "next/server";

import { getCommunityPosts } from "@/lib/data-service";

export async function GET() {
  const data = await getCommunityPosts();
  return NextResponse.json(data);
}
