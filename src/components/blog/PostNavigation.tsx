import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Post } from "@/types";

interface PostNavigationProps {
  prev: Post | null;
  next: Post | null;
}

export default function PostNavigation({ prev, next }: PostNavigationProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="card p-5 group text-left"
        >
          <span className="text-xs text-text-muted dark:text-dark-text-muted flex items-center gap-1 mb-1">
            <ChevronLeft size={14} /> Previous
          </span>
          <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="card p-5 group text-right"
        >
          <span className="text-xs text-text-muted dark:text-dark-text-muted flex items-center gap-1 justify-end mb-1">
            Next <ChevronRight size={14} />
          </span>
          <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
