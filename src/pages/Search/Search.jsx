import { useMemo, useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import EmptyState from '../../components/common/EmptyState';
import { searchNotes } from '../../services/searchService';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const results = useMemo(() => searchNotes(query), [query]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams(query.trim() ? { q: query.trim() } : {});
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-fg sm:text-3xl">Search notes</h1>
      <p className="mt-2 text-sm text-muted">
        Search across every course — try "virtual dom", "useState", "git rebase", or "css padding".
      </p>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex h-12 items-center gap-2 rounded-lg border border-border bg-card px-4 focus-within:border-primary">
          <SearchIcon className="h-4.5 w-4.5 shrink-0 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notes…"
            className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-muted"
            autoFocus
          />
        </div>
      </form>

      <div className="mt-8">
        {query.trim() === '' ? (
          <p className="text-sm text-muted">Start typing to search across every topic.</p>
        ) : results.length === 0 ? (
          <EmptyState
            icon={SearchIcon}
            title="No results found"
            description={`Nothing matches "${query}". Try a different or more general term.`}
          />
        ) : (
          <>
            <p className="mb-4 text-xs font-medium text-muted">
              {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </p>
            <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
              {results.map((r) => (
                <li key={`${r.courseId}-${r.topicId}`}>
                  <Link
                    to={`/learn/${r.courseId}/${r.topicId}`}
                    className="block px-4 py-3.5 hover:bg-hover"
                  >
                    <p className="text-sm font-medium text-fg">{r.topicTitle}</p>
                    <p className="mt-0.5 text-xs text-muted">
                      {r.courseTitle} • {r.chapterTitle}
                    </p>
                    <p className="mt-1 line-clamp-1 text-xs text-muted/80">{r.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
