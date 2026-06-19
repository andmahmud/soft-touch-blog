import type { SiteConfig, Category } from "@/types";

export const siteConfig: SiteConfig = {
  name: "TechBlog",
  title: "TechBlog - Documentation & Tutorials",
  tagline: "Learn web development, mobile apps, and programming",
  description:
    "Free tutorials, references, and guides for Flutter, React, Next.js, TypeScript, CSS, and web development.",
  url: "https://techblog.example.com",
  author: {
    name: "TechBlog Team",
    avatar: "https://picsum.photos/seed/avatar/200/200",
    bio: "Providing free, high-quality documentation and tutorials for developers of all skill levels.",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
    twitter: "https://twitter.com/example",
  },
  social: {
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
    twitter: "https://twitter.com/example",
    email: "hello@techblog.example.com",
  },
};

export const categories: Category[] = [
  { name: "Flutter", slug: "flutter", count: 8, description: "Cross-platform mobile development with Flutter and Dart", icon: "smartphone" },
  { name: "React", slug: "react", count: 6, description: "Building modern UIs with React and its ecosystem", icon: "code" },
  { name: "Next.js", slug: "nextjs", count: 5, description: "Full-stack React applications with Next.js", icon: "globe" },
  { name: "TypeScript", slug: "typescript", count: 7, description: "Type-safe JavaScript for better code quality", icon: "file-type" },
  { name: "Web Dev", slug: "web-dev", count: 9, description: "General web development tips and tutorials", icon: "layout" },
  { name: "Dart", slug: "dart", count: 4, description: "Programming with Dart language", icon: "terminal" },
];
