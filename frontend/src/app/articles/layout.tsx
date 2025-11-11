import type { ReactNode } from "react";

import { CategoryNav } from "@/components/articles/CategoryNav";

export default function ArticlesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="articles-page">
      <div className="container">
        <h1 className="page-title">Articles</h1>
        <CategoryNav />
        <div className="articles-content">{children}</div>
      </div>
    </div>
  );
}
