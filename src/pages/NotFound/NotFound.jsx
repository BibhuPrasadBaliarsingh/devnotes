import { Link } from 'react-router-dom';
import { CompassIcon, Home, BookOpen } from 'lucide-react';

export default function NotFound({ message }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-hover text-muted">
        <CompassIcon className="h-8 w-8" />
      </div>
      <h1 className="mt-6 text-2xl font-bold text-fg">Page not found</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {message || "The page you're looking for doesn't exist or may have moved."}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-fg hover:opacity-90"
        >
          <Home className="h-4 w-4" />
          Go home
        </Link>
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-fg hover:bg-hover"
        >
          <BookOpen className="h-4 w-4" />
          Browse courses
        </Link>
      </div>
    </div>
  );
}
