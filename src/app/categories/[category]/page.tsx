import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import Sidebar from "@/components/layout/Sidebar";
import { getPostsByCategory, getAllPosts, getRecentPosts, getAllCategories, getAllTags } from "@/lib/posts";
import { categories } from "@/lib/constants";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  const cats = [...new Set(posts.map((p) => p.category.toLowerCase()))];
  return cats.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  return {
    title: `${cat?.name || category} Articles`,
    description: cat?.description || `Browse articles about ${category}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const posts = getPostsByCategory(category);
  const cat = categories.find((c) => c.slug === category);

  if (posts.length === 0 && !cat) notFound();

  const recentPosts = getRecentPosts(4);
  const allCategories = getAllCategories();
  const allTags = getAllTags();

  return (
    <div className="container py-12">
      <Link
        href="/categories"
        className="inline-flex items-center gap-1 text-sm text-text-secondary dark:text-dark-text-secondary hover:text-primary mb-6 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> All Categories
      </Link>
      <div className="mb-8">
        <h1 className="section-title">{cat?.name || category}</h1>
        <p className="section-subtitle">
          {cat?.description || `Articles about ${category}`} ({posts.length} {posts.length === 1 ? "article" : "articles"})
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-text-secondary dark:text-dark-text-secondary py-10 text-center">
              No articles found in this category.
            </p>
          )}
        </div>
        <div>
          <Sidebar recentPosts={recentPosts} categories={allCategories} tags={allTags} />
        </div>
      </div>
    </div>
  );
}
