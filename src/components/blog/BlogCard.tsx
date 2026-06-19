import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Post } from "@/types";
import { formatDate } from "@/lib/utils";
import CategoryBadge from "@/components/ui/CategoryBadge";
import TagBadge from "@/components/ui/TagBadge";

interface BlogCardProps {
  post: Post;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="card overflow-hidden group block">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <CategoryBadge category={post.category} link={false} />
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-text-muted dark:text-dark-text-muted mb-3">
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readingTime} min read
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <TagBadge key={tag} tag={tag} link={false} />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
            Read More <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="card overflow-hidden group block">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <CategoryBadge category={post.category} link={false} />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-text-muted dark:text-dark-text-muted mb-2">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {post.readingTime} min
          </span>
        </div>
        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 2).map((tag) => (
            <TagBadge key={tag} tag={tag} link={false} />
          ))}
        </div>
      </div>
    </Link>
  );
}
