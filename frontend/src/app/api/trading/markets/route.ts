import { NextResponse } from "next/server";

import { getMarketItems } from "@/lib/data-service";

export async function GET() {
  const data = await getMarketItems();
  return NextResponse.json(data);
}
