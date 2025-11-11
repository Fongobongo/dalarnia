import type { ReactNode } from "react";

import { CommunityNav } from "@/components/community/CommunityNav";

export default function CommunityLayout({ children }: { children: ReactNode }) {
  return (
    <div className="community-page">
      <div className="container">
        <h1 className="page-title">Community Hub</h1>
        <CommunityNav />
        <div className="community-content">{children}</div>
      </div>
    </div>
  );
}
