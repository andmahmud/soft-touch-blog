import Link from "next/link";
import { ArrowRight } from "lucide-react";

const docSections = [
  {
    title: "HTML & CSS",
    description: "Learn HTML5, CSS3, Flexbox, Grid, and responsive design.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3h16l-1.5 18L12 22l-6.5-1L4 3z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="14" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>
    ),
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    href: "/categories/web-dev",
    count: 9,
  },
  {
    title: "JavaScript",
    description: "Modern JavaScript: ES6+, async/await, DOM manipulation, and more.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    ),
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    href: "/blog?tag=JavaScript",
    count: 5,
  },
  {
    title: "TypeScript",
    description: "Type-safe JavaScript with interfaces, generics, and advanced types.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="12" y1="13" x2="12" y2="18"/></svg>
    ),
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    href: "/categories/typescript",
    count: 7,
  },
  {
    title: "React",
    description: "Build UIs with React: hooks, components, state management, and patterns.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    href: "/categories/react",
    count: 6,
  },
  {
    title: "Next.js",
    description: "Full-stack React with App Router, server components, and API routes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    href: "/categories/nextjs",
    count: 5,
  },
  {
    title: "Flutter & Dart",
    description: "Cross-platform mobile apps with Flutter and the Dart language.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    ),
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-950/30",
    href: "/categories/flutter",
    count: 12,
  },
  {
    title: "Developer Tools",
    description: "JSON formatter, password generator, QR codes, Base64, color converter.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    href: "/tools/json-formatter",
    count: 5,
  },
  {
    title: "Web Performance",
    description: "Optimization techniques, Core Web Vitals, caching, and best practices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    ),
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    href: "/blog?tag=Performance",
    count: 4,
  },
];

export default function DocSections() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {docSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="card p-5 group flex items-start gap-4"
            >
              <div className={`p-3 rounded-xl ${section.bg} ${section.color} shrink-0`}>
                {section.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-1 line-clamp-2">
                  {section.description}
                </p>
                <span className="text-xs text-text-muted dark:text-dark-text-muted mt-1 inline-block">
                  {section.count} articles
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
