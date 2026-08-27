import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TopicNavigation({ courseId, previous, next }) {
  if (!previous && !next) return null;

  return (
    <div className="mt-10 grid grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-2">
      {previous ? (
        <Link
          to={`/learn/${courseId}/${previous.id}`}
          className="group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-x-0.5" />
          <div className="min-w-0 text-left">
            <div className="text-xs text-muted">Previous</div>
            <div className="truncate text-sm font-medium text-fg">{previous.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={`/learn/${courseId}/${next.id}`}
          className="group flex items-center justify-end gap-3 rounded-lg border border-border bg-card px-4 py-3 text-right transition-colors hover:border-primary/40 sm:col-start-2"
        >
          <div className="min-w-0 text-right">
            <div className="text-xs text-muted">Next</div>
            <div className="truncate text-sm font-medium text-fg">{next.title}</div>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
