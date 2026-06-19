"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function AdSticky() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-dark-bg-primary border-t border-border dark:border-dark-border p-2">
      <div className="container relative">
        <button
          onClick={() => setVisible(false)}
          className="absolute -top-8 right-0 p-1 bg-white dark:bg-dark-bg-primary border border-border dark:border-dark-border rounded-t-lg hover:text-primary transition-colors"
          aria-label="Close advertisement"
        >
          <X size={16} />
        </button>
        <div className="flex items-center justify-center bg-bg-tertiary dark:bg-dark-bg-tertiary rounded min-h-[50px]">
          <p className="text-xs text-text-muted dark:text-dark-text-muted">
            Sticky Advertisement
          </p>
        </div>
      </div>
    </div>
  );
}
