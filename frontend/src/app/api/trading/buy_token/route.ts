import { NextResponse } from "next/server";

import { getTokenInfo } from "@/lib/data-service";

export async function GET() {
  const data = await getTokenInfo();
  return NextResponse.json(data);
}
