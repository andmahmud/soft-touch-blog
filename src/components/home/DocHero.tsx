"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, BookOpen } from "lucide-react";

export default function DocHero() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/blog?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:to-primary/5">
      <div className="container py-16 md:py-24 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <BookOpen size={40} className="text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">TechBlog</span> Docs
          </h1>
        </div>
        <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-8 max-w-2xl mx-auto">
          Tutorials, references, and guides for web development, mobile apps, and programming.
        </p>
        <form onSubmit={handleSearch} className="max-w-xl mx-auto">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-dark-text-muted"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tutorials, references & guides..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-dark-bg-secondary border-2 border-border dark:border-dark-border rounded-xl text-base focus:outline-hidden focus:border-primary shadow-sm text-text-primary dark:text-dark-text-primary"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
