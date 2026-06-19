import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import type { Author } from "@/types";

interface AuthorBoxProps {
  author: Author;
}

export default function AuthorBox({ author }: AuthorBoxProps) {
  return (
    <div className="card p-6 flex flex-col sm:flex-row items-start gap-4">
      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg">{author.name}</h3>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">
          {author.bio}
        </p>
        <div className="flex items-center gap-2">
          {author.github && (
            <a href={author.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors text-text-secondary dark:text-dark-text-secondary hover:text-primary" aria-label="GitHub">
              <Github size={16} />
            </a>
          )}
          {author.linkedin && (
            <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors text-text-secondary dark:text-dark-text-secondary hover:text-primary" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          )}
          {author.twitter && (
            <a href={author.twitter} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors text-text-secondary dark:text-dark-text-secondary hover:text-primary" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
