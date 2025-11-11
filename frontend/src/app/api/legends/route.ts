import { NextResponse } from "next/server";

import { getLegends } from "@/lib/data-service";

export async function GET() {
  const data = await getLegends();
  return NextResponse.json(data);
}
