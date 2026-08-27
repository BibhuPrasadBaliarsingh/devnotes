import { Bookmark } from 'lucide-react';
import { useBookmarks } from '../../contexts/BookmarksContext';

export default function BookmarkButton({ courseId, topicId, topicTitle, courseTitle, chapterId, className = '' }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(courseId, topicId);

  return (
    <button
      type="button"
      onClick={() => toggleBookmark(courseId, topicId, topicTitle, courseTitle, chapterId)}
      aria-pressed={bookmarked}
      aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this topic'}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
        bookmarked
          ? 'border-primary/40 bg-primary/10 text-primary'
          : 'border-border bg-card text-muted hover:text-fg hover:bg-hover'
      } ${className}`}
    >
      <Bookmark className="h-4 w-4" fill={bookmarked ? 'currentColor' : 'none'} />
    </button>
  );
}
