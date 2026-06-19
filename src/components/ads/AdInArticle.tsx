export default function AdInArticle({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-bg-tertiary dark:bg-dark-bg-tertiary border border-border dark:border-dark-border rounded-lg min-h-[250px] my-8 ${className}`}
    >
      <p className="text-xs text-text-muted dark:text-dark-text-muted">
        In-Article Advertisement
      </p>
    </div>
  );
}
