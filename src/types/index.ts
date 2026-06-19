export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  lastUpdated?: string;
  author: Author;
  category: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
  published: boolean;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
  description: string;
  icon: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  author: Author;
  social: SocialLinks;
}
