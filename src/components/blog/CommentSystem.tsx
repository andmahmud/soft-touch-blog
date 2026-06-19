import { MessageSquare } from "lucide-react";

export default function CommentSystem() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageSquare size={24} /> Comments
      </h2>
      <div className="card p-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare size={32} className="text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Comments Coming Soon</h3>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary max-w-md mx-auto">
          We&apos;re working on adding a comment system. In the meantime, feel free to reach out via the contact page.
        </p>
      </div>
    </section>
  );
}
