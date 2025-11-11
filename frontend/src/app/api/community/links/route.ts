import { NextResponse } from "next/server";

import { getCommunityLinks } from "@/lib/data-service";

export async function GET() {
  const data = await getCommunityLinks();
  return NextResponse.json(data);
}
