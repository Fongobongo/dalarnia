'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Discussion Board", path: "/community/board" },
  { name: "Community Links", path: "/community/links" },
  { name: "Contacts", path: "/community/contacts" },
];

export function CommunityNav() {
  const pathname = usePathname();

  return (
    <nav className="community-nav">
      {links.map((link) => (
        <Link key={link.path} href={link.path} className={`community-link ${pathname === link.path ? "active" : ""}`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
