"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ placeholder = "Search articles...", className = "" }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/blog?search=${encodeURIComponent(query.trim())}`);
      setOpen(false);
      setQuery("");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`p-2 rounded-lg hover:bg-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors ${className}`}
        aria-label="Search"
      >
        <Search size={20} />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg mx-4 animate-fadeIn">
            <form onSubmit={handleSubmit} className="relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="w-full px-5 py-4 pr-12 text-lg bg-white dark:bg-dark-bg-secondary border border-border dark:border-dark-border rounded-xl shadow-2xl focus:outline-hidden focus:ring-2 focus:ring-primary text-text-primary dark:text-dark-text-primary"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:text-primary transition-colors"
              >
                <X size={20} />
              </button>
            </form>
          </div>
          <div className="fixed inset-0 -z-10" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
