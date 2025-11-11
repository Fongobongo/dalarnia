import type { ReactNode } from "react";

import { TradingNav } from "@/components/trading/TradingNav";

export default function TradingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="trading-page">
      <div className="container">
        <h1 className="page-title">Trading Hub</h1>
        <TradingNav />
        <div className="trading-content">{children}</div>
      </div>
    </div>
  );
}
