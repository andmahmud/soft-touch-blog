import BlogCard from "./BlogCard";
import type { Post } from "@/types";
import { getRelatedPosts } from "@/lib/posts";

interface RelatedPostsProps {
  current: Post;
}

export default function RelatedPosts({ current }: RelatedPostsProps) {
  const related = getRelatedPosts(current, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
