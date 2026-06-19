import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "@/types";
import { calculateReadingTime } from "./utils";

const postsDirectory = path.join(process.cwd(), "src", "content", "posts");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fn) => fn.endsWith(".md"))
    .map((fileName) => getPostBySlug(fileName.replace(/\.md$/, "")))
    .filter((post): post is Post => post !== null && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return allPosts;
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getRecentPosts(count: number = 5): Post[] {
  return getAllPosts().slice(0, count);
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
      content,
      coverImage: data.coverImage || "https://picsum.photos/seed/blog-default/1200/630",
      date: data.date || new Date().toISOString(),
      lastUpdated: data.lastUpdated || undefined,
      author: {
        name: data.author?.name || "Blog Author",
        avatar: data.author?.avatar || "https://picsum.photos/seed/avatar/200/200",
        bio: data.author?.bio || "",
      },
      category: data.category || "Uncategorized",
      tags: data.tags || [],
      readingTime: data.readingTime || calculateReadingTime(content),
      featured: data.featured || false,
      published: data.published !== false,
    };
  } catch {
    return null;
  }
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase(),
  );
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

export function getRelatedPosts(current: Post, count: number = 3): Post[] {
  return getAllPosts()
    .filter(
      (post) =>
        post.slug !== current.slug &&
        (post.category === current.category ||
          post.tags.some((t) => current.tags.includes(t))),
    )
    .slice(0, count);
}

export function getAllCategories(): { name: string; count: number }[] {
  const posts = getAllPosts();
  const categoryMap = new Map<string, number>();
  posts.forEach((post) => {
    categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
  });
  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    count,
  }));
}

export function getAllTags(): { name: string; count: number }[] {
  const posts = getAllPosts();
  const tagMap = new Map<string, number>();
  posts.forEach((post) =>
    post.tags.forEach((tag) =>
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1),
    ),
  );
  return Array.from(tagMap.entries()).map(([name, count]) => ({
    name,
    count,
  }));
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase();
  return getAllPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some((t) => t.toLowerCase().includes(q)) ||
      post.category.toLowerCase().includes(q),
  );
}
