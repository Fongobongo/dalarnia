'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Marketplace", path: "/trading/markets" },
  { name: "Buy $D Token", path: "/trading/buy_token" },
];

export function TradingNav() {
  const pathname = usePathname();

  return (
    <nav className="trading-nav">
      {tabs.map((tab) => (
        <Link key={tab.path} href={tab.path} className={`trading-link ${pathname === tab.path ? "active" : ""}`}>
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}
