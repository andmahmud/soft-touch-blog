import Link from "next/link";

interface TagBadgeProps {
  tag: string;
  link?: boolean;
}

export default function TagBadge({ tag, link = true }: TagBadgeProps) {
  const content = (
    <span className="inline-block px-3 py-1 text-xs font-medium bg-bg-tertiary dark:bg-dark-bg-tertiary text-text-secondary dark:text-dark-text-secondary rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors cursor-pointer">
      {tag}
    </span>
  );

  if (link) {
    return <Link href={`/blog?tag=${encodeURIComponent(tag)}`}>{content}</Link>;
  }

  return content;
}
