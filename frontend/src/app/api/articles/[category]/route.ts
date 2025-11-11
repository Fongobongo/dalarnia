import { NextResponse } from "next/server";

import { getArticles } from "@/lib/data-service";
import type { ArticleCategory } from "@/types";

const allowed: ArticleCategory[] = [
  "all",
  "news",
  "patch_notes",
  "announcements",
  "guides",
  "events",
  "faq",
];

export async function GET(
  _request: Request,
  { params }: { params: { category: string } },
) {
  const category = params.category as ArticleCategory;
  if (!allowed.includes(category)) {
    return NextResponse.json({ error: "Unknown category" }, { status: 400 });
  }

  const data = await getArticles(category);
  return NextResponse.json(data);
}
