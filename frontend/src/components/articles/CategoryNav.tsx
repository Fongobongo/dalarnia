'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "All Articles", path: "/articles/all" },
  { name: "News", path: "/articles/news" },
  { name: "Patch Notes", path: "/articles/patch_notes" },
  { name: "Announcements", path: "/articles/announcements" },
  { name: "Guides", path: "/articles/guides" },
  { name: "Events", path: "/articles/events" },
  { name: "FAQ", path: "/articles/faq" },
];

export function CategoryNav() {
  const pathname = usePathname();

  return (
    <nav className="category-nav">
      {categories.map((category) => (
        <Link
          key={category.path}
          href={category.path}
          className={`category-link ${pathname === category.path ? "active" : ""}`}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
