import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import CourseCard from '../../components/ui/CourseCard';
import EmptyState from '../../components/common/EmptyState';
import { courses } from '../../data';

export default function Learn() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter(
      (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-fg sm:text-3xl">Learn</h1>
        <p className="mt-2 text-sm text-muted sm:text-base">
          Every technology on DevNotes, in one place. Pick one to start reading.
        </p>
      </div>

      <div className="mb-8 max-w-md">
        <div className="flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-3 focus-within:border-primary">
          <Search className="h-4 w-4 shrink-0 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter courses…"
            className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-muted"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Search}
          title="No courses found"
          description={`Nothing matches "${query}". Try a different search term.`}
        />
      )}
    </div>
  );
}
