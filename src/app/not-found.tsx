"use client";

import Link from "next/link";
import { FileX, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 bg-bg-tertiary dark:bg-dark-bg-tertiary rounded-full flex items-center justify-center mx-auto mb-6">
          <FileX size={48} className="text-text-muted dark:text-dark-text-muted" />
        </div>
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-text-secondary dark:text-dark-text-secondary mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home size={18} /> Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
