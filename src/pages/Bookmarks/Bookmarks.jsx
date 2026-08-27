import { Link } from 'react-router-dom';
import { Bookmark, ArrowRight } from 'lucide-react';
import EmptyState from '../../components/common/EmptyState';
import { useBookmarks } from '../../contexts/BookmarksContext';

export default function Bookmarks() {
  const { bookmarks, toggleBookmark } = useBookmarks();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-fg sm:text-3xl">Bookmarks</h1>
      <p className="mt-2 text-sm text-muted">Topics you've saved to come back to later.</p>

      {bookmarks.length === 0 ? (
        <div className="mt-6">
          <EmptyState
            icon={Bookmark}
            title="No bookmarks yet"
            description="Tap the bookmark icon on any topic page to save it here."
            actionLabel="Browse courses"
            actionTo="/learn"
          />
        </div>
      ) : (
        <ul className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {bookmarks.map((b) => (
            <li key={b.key} className="flex items-center gap-3 px-4 py-3.5">
              <Link to={`/learn/${b.courseId}/${b.topicId}`} className="min-w-0 flex-1 group">
                <p className="truncate text-sm font-medium text-fg group-hover:text-primary">{b.topicTitle}</p>
                <p className="truncate text-xs text-muted">{b.courseTitle}</p>
              </Link>
              <Link
                to={`/learn/${b.courseId}/${b.topicId}`}
                className="hidden shrink-0 items-center gap-1 text-xs font-medium text-primary sm:flex"
              >
                Read <ArrowRight className="h-3 w-3" />
              </Link>
              <button
                type="button"
                onClick={() => toggleBookmark(b.courseId, b.topicId)}
                aria-label="Remove bookmark"
                className="shrink-0 rounded-lg p-2 text-muted hover:bg-hover hover:text-danger"
              >
                <Bookmark className="h-4 w-4" fill="currentColor" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
