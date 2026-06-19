import Link from "next/link";

interface CategoryBadgeProps {
  category: string;
  link?: boolean;
}

export default function CategoryBadge({ category, link = true }: CategoryBadgeProps) {
  const className = "inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors";

  if (link) {
    return (
      <Link href={`/categories/${category.toLowerCase()}`} className={className}>
        {category}
      </Link>
    );
  }

  return <span className={className}>{category}</span>;
}
