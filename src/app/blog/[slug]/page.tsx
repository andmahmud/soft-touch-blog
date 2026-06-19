import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// lucide-react replaced with inline SVGs for RSC compatibility
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import AuthorBox from "@/components/blog/AuthorBox";
import RelatedPosts from "@/components/blog/RelatedPosts";
import PostNavigation from "@/components/blog/PostNavigation";
import CommentSystem from "@/components/blog/CommentSystem";
import CategoryBadge from "@/components/ui/CategoryBadge";
import TagBadge from "@/components/ui/TagBadge";
import AdInArticle from "@/components/ads/AdInArticle";
import AdSidebar from "@/components/ads/AdSidebar";
import JsonLd from "@/components/seo/JsonLd";
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastUpdated,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const next = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <JsonLd
        type="BlogPosting"
        data={{
          headline: post.title,
          description: post.excerpt,
          image: post.coverImage,
          datePublished: post.date,
          dateModified: post.lastUpdated || post.date,
          author: {
            "@type": "Person",
            name: post.author.name,
            url: siteConfig.url,
          },
        }}
      />
      <article className="container py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-text-secondary dark:text-dark-text-secondary hover:text-primary mb-6 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> Back to Blog
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <CategoryBadge category={post.category} />
              <span className="flex items-center gap-1 text-sm text-text-muted dark:text-dark-text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1 text-sm text-text-muted dark:text-dark-text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> {post.readingTime} min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-6">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
            <div className="mb-6">
              <ShareButtons
                title={post.title}
                url={`${siteConfig.url}/blog/${post.slug}`}
              />
            </div>
            <AdInArticle />
            <div className="prose-custom">
              <MarkdownRenderer content={post.content} />
            </div>
            <AdInArticle />
            <div className="mt-6">
              <ShareButtons
                title={post.title}
                url={`${siteConfig.url}/blog/${post.slug}`}
              />
            </div>
            <AuthorBox author={post.author} />
            <PostNavigation prev={prev} next={next} />
            <RelatedPosts current={post} />
            <CommentSystem />
          </div>
          <div className="hidden lg:block">
            <div className="space-y-8">
              <TableOfContents content={post.content} />
              <AdSidebar />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
