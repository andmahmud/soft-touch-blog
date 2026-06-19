"use client";

import Link from "next/link";
import { Search, Clock, ArrowRight, Tag } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TagBadge from "@/components/ui/TagBadge";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/types";

interface SidebarProps {
  recentPosts: Post[];
  categories: { name: string; count: number }[];
  tags: { name: string; count: number }[];
}

export default function Sidebar({ recentPosts, categories, tags }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <aside className="space-y-8">
      <div className="card p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Search size={18} /> Search
        </h3>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full px-4 py-2.5 bg-bg-tertiary dark:bg-dark-bg-tertiary border border-border dark:border-dark-border rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-primary text-text-primary dark:text-dark-text-primary"
          />
        </form>
      </div>

      <div className="card p-6">
        <h3 className="font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.name}>
              <Link
                href={`/categories/${cat.name.toLowerCase()}`}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors group"
              >
                <span className="text-text-secondary dark:text-dark-text-secondary group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
                <span className="text-xs text-text-muted dark:text-dark-text-muted bg-bg-tertiary dark:bg-dark-bg-tertiary px-2 py-0.5 rounded-full">
                  {cat.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Clock size={18} /> Recent Posts
        </h3>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h4 className="text-sm font-medium text-text-primary dark:text-dark-text-primary group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-text-muted dark:text-dark-text-muted mt-1 block">
                  {formatDate(post.date)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Tag size={18} /> Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 12).map((tag) => (
            <TagBadge key={tag.name} tag={tag.name} />
          ))}
        </div>
      </div>

      <div className="card p-6 text-center bg-linear-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border-primary/20">
        <h3 className="font-semibold mb-2">Newsletter</h3>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-4">
          Get the latest posts delivered to your inbox.
        </p>
        <a href="/contact" className="btn-primary text-sm justify-center w-full">
          Subscribe <ArrowRight size={16} />
        </a>
      </div>
    </aside>
  );
}
