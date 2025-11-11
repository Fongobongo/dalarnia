import { NextResponse } from "next/server";

import { getContactInfo } from "@/lib/data-service";

export async function GET() {
  const data = await getContactInfo();
  return NextResponse.json(data);
}
