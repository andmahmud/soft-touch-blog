"use client";

import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { ChevronLeft, ChevronRight, FileX } from "lucide-react";
import type { Post } from "@/types";

const POSTS_PER_PAGE = 9;

interface BlogListProps {
  posts: Post[];
  search?: string;
}

export default function BlogList({ posts, search = "" }: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 bg-bg-tertiary dark:bg-dark-bg-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
          <FileX size={40} className="text-text-muted dark:text-dark-text-muted" />
        </div>
        <h3 className="text-xl font-bold mb-2">No Articles Found</h3>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          {search
            ? `No results for "${search}". Try different keywords.`
            : "No articles in this category yet."}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-border dark:border-dark-border hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                p === currentPage
                  ? "bg-primary text-white"
                  : "border border-border dark:border-dark-border hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-border dark:border-dark-border hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
