import Link from "next/link";
import { Github, Linkedin, Mail, Heart, BookOpen } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const footerLinks = [
  {
    title: "Tutorials",
    links: [
      { label: "Flutter", href: "/categories/flutter" },
      { label: "React", href: "/categories/react" },
      { label: "Next.js", href: "/categories/nextjs" },
      { label: "TypeScript", href: "/categories/typescript" },
      { label: "Web Dev", href: "/categories/web-dev" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "JSON Formatter", href: "/tools/json-formatter" },
      { label: "Password Generator", href: "/tools/password-generator" },
      { label: "QR Code Generator", href: "/tools/qr-code-generator" },
      { label: "Base64 Encoder", href: "/tools/base64-encoder" },
      { label: "Color Converter", href: "/tools/color-converter" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "All Tutorials", href: "/blog" },
      { label: "References", href: "/categories" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-secondary dark:bg-dark-bg-secondary border-t border-border dark:border-dark-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
          <BookOpen size={28} className="text-primary" />
          <span className="gradient-text">TechBlog</span>
            </Link>
            <p className="text-text-secondary dark:text-dark-text-secondary text-sm mb-4">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors text-text-secondary dark:text-dark-text-secondary hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors text-text-secondary dark:text-dark-text-secondary hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="p-2 rounded-lg hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors text-text-secondary dark:text-dark-text-secondary hover:text-primary"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-border dark:border-dark-border text-center text-sm text-text-muted dark:text-dark-text-muted">
          <p className="flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Made with <Heart size={14} className="text-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
