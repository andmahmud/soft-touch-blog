import type { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";
import Sidebar from "@/components/layout/Sidebar";
import AdBanner from "@/components/ads/AdBanner";
import { getRecentPosts, getAllCategories, getAllTags, getAllPosts, searchPosts, getPostsByTag, getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore articles about Flutter, React, Next.js, TypeScript, and web development.",
  openGraph: {
    title: "Blog | TechBlog",
    description: "Explore articles about Flutter, React, Next.js, TypeScript, and web development.",
  },
};

export default async function BlogPage(props: {
  searchParams?: Promise<{ search?: string; tag?: string; category?: string; page?: string }>;
}) {
  const searchParams = await (props.searchParams ?? Promise.resolve({} as { search?: string; tag?: string; category?: string; page?: string }));
  const search = searchParams?.search || "";
  const tag = searchParams?.tag || "";
  const category = searchParams?.category || "";

  let posts = getAllPosts();
  if (search) posts = searchPosts(search);
  if (tag) posts = getPostsByTag(tag);
  if (category) posts = getPostsByCategory(category);

  const recentPosts = getRecentPosts(4);
  const allCategories = getAllCategories();
  const allTags = getAllTags();

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="section-title">Blog</h1>
        <p className="section-subtitle">
          {search
            ? `Search results for "${search}"`
            : tag
              ? `Articles tagged with "${tag}"`
              : category
                ? `Articles in "${category}"`
                : "Discover articles, tutorials, and guides"}
        </p>
      </div>
      <AdBanner className="mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <BlogList posts={posts} search={search} />
        </div>
        <div>
          <Sidebar recentPosts={recentPosts} categories={allCategories} tags={allTags} />
        </div>
      </div>
    </div>
  );
}
