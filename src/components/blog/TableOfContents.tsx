"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ content }: { content: string }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = content.match(/^#{2,3}\s+.+/gm) || [];
    const tocItems = headings.map((heading) => {
      const level = heading.match(/^#+/)?.[0].length || 2;
      const text = heading.replace(/^#+\s+/, "");
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s]+/g, "-");
      return { id, text, level };
    });
    setItems(tocItems);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-80px 0px -80% 0px" },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="card p-5 sticky top-24">
      <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm">
        <List size={16} /> Table of Contents
      </h3>
      <nav className="space-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-sm py-1 transition-colors ${
              item.level === 3 ? "pl-4" : ""
            } ${
              activeId === item.id
                ? "text-primary font-medium"
                : "text-text-secondary dark:text-dark-text-secondary hover:text-primary"
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
