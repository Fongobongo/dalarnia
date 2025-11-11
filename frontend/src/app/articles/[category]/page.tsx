import { notFound } from "next/navigation";

import type { ArticleCategory } from "@/types";
import { ArticlesList } from "@/components/articles/ArticlesList";

const allowedCategories: ArticleCategory[] = ["all", "news", "patch_notes", "announcements", "guides", "events", "faq"];

export default function ArticlesCategoryPage({ params }: { params: { category: string } }) {
  const category = (params.category || "all") as ArticleCategory;

  if (!allowedCategories.includes(category)) {
    notFound();
  }

  return <ArticlesList category={category} />;
}
