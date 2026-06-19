export default function AdBanner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-bg-tertiary dark:bg-dark-bg-tertiary border border-border dark:border-dark-border rounded-lg min-h-[90px] ${className}`}
    >
      <p className="text-xs text-text-muted dark:text-dark-text-muted">
        Advertisement
      </p>
    </div>
  );
}
