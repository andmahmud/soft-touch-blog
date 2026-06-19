import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Code, Terminal, Shield, Zap, Box, Layers, Smartphone, Info, Package, Grid, GitBranch, AlertTriangle, Type } from "lucide-react";
import { getDartTopics } from "@/lib/dart-docs";

export const metadata: Metadata = {
  title: "Dart Documentation",
  description: "Comprehensive Dart programming language documentation - learn variables, functions, OOP, async, null safety, and more.",
};

const iconMap: Record<string, React.ReactNode> = {
  info: <Info size={28} />,
  type: <Type size={28} />,
  code: <Code size={28} />,
  "git-branch": <GitBranch size={28} />,
  terminal: <Terminal size={28} />,
  layers: <Layers size={28} />,
  box: <Box size={28} />,
  shield: <Shield size={28} />,
  zap: <Zap size={28} />,
  "alert-triangle": <AlertTriangle size={28} />,
  grid: <Grid size={28} />,
  package: <Package size={28} />,
  smartphone: <Smartphone size={28} />,
};

const colorMap: Record<string, { color: string; bg: string; border: string }> = {
  info: { color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/30", border: "border-blue-200 dark:border-blue-800" },
  type: { color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950/30", border: "border-purple-200 dark:border-purple-800" },
  code: { color: "text-cyan-500", bg: "bg-cyan-50 dark:bg-cyan-950/30", border: "border-cyan-200 dark:border-cyan-800" },
  "git-branch": { color: "text-green-500", bg: "bg-green-50 dark:bg-green-950/30", border: "border-green-200 dark:border-green-800" },
  terminal: { color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-950/30", border: "border-orange-200 dark:border-orange-800" },
  layers: { color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-950/30", border: "border-rose-200 dark:border-rose-800" },
  box: { color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950/30", border: "border-indigo-200 dark:border-indigo-800" },
  shield: { color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/30", border: "border-emerald-200 dark:border-emerald-800" },
  zap: { color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-950/30", border: "border-yellow-200 dark:border-yellow-800" },
  "alert-triangle": { color: "text-red-500", bg: "bg-red-50 dark:bg-red-950/30", border: "border-red-200 dark:border-red-800" },
  grid: { color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-950/30", border: "border-teal-200 dark:border-teal-800" },
  package: { color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-950/30", border: "border-violet-200 dark:border-violet-800" },
  smartphone: { color: "text-sky-500", bg: "bg-sky-50 dark:bg-sky-950/30", border: "border-sky-200 dark:border-sky-800" },
};

export default function DartDocsPage() {
  const topics = getDartTopics();

  return (
    <div className="container py-12">
      <section className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen size={36} className="text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Dart</span> Documentation
          </h1>
        </div>
        <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
          Comprehensive guides and references for the Dart programming language. From basics to advanced topics.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => {
          const style = colorMap[topic.icon] || colorMap.code;
          return (
            <Link
              key={topic.slug}
              href={`/docs/dart/${topic.slug}`}
              className="card p-5 group flex items-start gap-4"
            >
              <div className={`p-3 rounded-xl ${style.bg} ${style.color} shrink-0`}>
                {iconMap[topic.icon] || <Code size={28} />}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-1 line-clamp-2">
                  {topic.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
