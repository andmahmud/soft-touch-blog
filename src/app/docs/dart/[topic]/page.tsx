import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { getDartTopic, getDartTopics } from "@/lib/dart-docs";

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  const topics = getDartTopics();
  return topics.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const doc = getDartTopic(topic);
  if (!doc) return { title: "Not Found" };
  return {
    title: `${doc.title} - Dart Documentation`,
    description: doc.description,
  };
}

export default async function DartTopicPage({ params }: Props) {
  const { topic } = await params;
  const doc = getDartTopic(topic);

  if (!doc) notFound();

  const allTopics = getDartTopics();
  const currentIndex = allTopics.findIndex((t) => t.slug === topic);
  const prev = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const next = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  return (
    <div className="container py-12 max-w-4xl">
      <Link
        href="/docs/dart"
        className="inline-flex items-center gap-1 text-sm text-text-secondary dark:text-dark-text-secondary hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft size={16} /> All Dart Topics
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <BookOpen size={28} className="text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold">{doc.title}</h1>
      </div>

      <div className="prose-custom max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeSlug]}
        >
          {doc.content}
        </ReactMarkdown>
      </div>

      <div className="flex justify-between items-center mt-16 pt-8 border-t border-border dark:border-dark-border">
        {prev ? (
          <Link
            href={`/docs/dart/${prev.slug}`}
            className="card p-4 group max-w-xs"
          >
            <span className="text-xs text-text-muted dark:text-dark-text-muted">Previous</span>
            <p className="font-medium text-sm group-hover:text-primary transition-colors">{prev.title}</p>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            href={`/docs/dart/${next.slug}`}
            className="card p-4 group max-w-xs text-right"
          >
            <span className="text-xs text-text-muted dark:text-dark-text-muted">Next</span>
            <p className="font-medium text-sm group-hover:text-primary transition-colors">{next.title}</p>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
