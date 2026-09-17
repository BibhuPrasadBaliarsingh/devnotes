import { useState, useMemo } from 'react';
import { Search, BookOpen, FileText } from 'lucide-react';
import CourseCard from '../../components/ui/CourseCard';
import NoteCard from '../../components/ui/NoteCard';
import EmptyState from '../../components/common/EmptyState';
import SEOHead from '../../components/common/SEOHead';
import { courses, notes } from '../../data';

export default function Learn() {
  const [activeTab, setActiveTab] = useState('all');
  const [query, setQuery] = useState('');

  const filteredCourses = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter(
      (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }, [query]);

  const filteredNotes = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return notes;
    return notes.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.description.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q) ||
        n.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6">
      <SEOHead
        title="Learn - Interactive Courses & Web Developer Notes"
        description="Explore developer interactive courses and web notes for React, JavaScript, Node.js, Express, Python, SQL, SDLC, Testing, and HR Interviews."
      />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-fg sm:text-3xl">Learn</h1>
        <p className="mt-2 text-sm text-muted sm:text-base">
          Every interactive course and developer documentation guide on DevNotes, in one place.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex h-11 max-w-md w-full items-center gap-2 rounded-lg border border-border bg-card px-3 focus-within:border-primary">
          <Search className="h-4 w-4 shrink-0 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses and notes..."
            className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-muted"
          />
        </div>

        {/* Tab Filters */}
        <div className="inline-flex rounded-lg border border-border bg-card p-1">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === 'all' ? 'bg-primary text-primary-fg' : 'text-muted hover:text-fg'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>All ({courses.length + notes.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('courses')}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === 'courses' ? 'bg-primary text-primary-fg' : 'text-muted hover:text-fg'
            }`}
          >
            <span>Courses ({courses.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('notes')}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === 'notes' ? 'bg-primary text-primary-fg' : 'text-muted hover:text-fg'
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Developer Notes ({notes.length})</span>
          </button>
        </div>
      </div>

      {/* Courses Section */}
      {(activeTab === 'all' || activeTab === 'courses') && filteredCourses.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-bold text-fg">Interactive Courses</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* Web Developer Notes Section */}
      {(activeTab === 'all' || activeTab === 'notes') && filteredNotes.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-bold text-fg">Developer Notes & Documentation</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </section>
      )}

      {filteredCourses.length === 0 && filteredNotes.length === 0 && (
        <EmptyState
          icon={Search}
          title="No results found"
          description={`Nothing matches "${query}". Try a different search term.`}
        />
      )}
    </div>
  );
}
