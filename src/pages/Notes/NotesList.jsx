import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, BookOpen } from 'lucide-react';
import { notes, noteCategories } from '../../data/notes';
import NoteCard from '../../components/ui/NoteCard';
import EmptyState from '../../components/common/EmptyState';
import SEOHead from '../../components/common/SEOHead';

export default function NotesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      // Category filter
      if (selectedCategory !== 'All' && note.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = note.title.toLowerCase().includes(q);
        const inCategory = note.category.toLowerCase().includes(q);
        const inDesc = note.description.toLowerCase().includes(q);
        const inTags = note.tags.some((tag) => tag.toLowerCase().includes(q));
        if (!inTitle && !inCategory && !inDesc && !inTags) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  function handleCategoryChange(cat) {
    setSelectedCategory(cat);
    const params = new URLSearchParams(searchParams);
    if (cat === 'All') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    setSearchParams(params, { replace: true });
  }

  function handleSearchChange(e) {
    const val = e.target.value;
    setSearchQuery(val);
    const params = new URLSearchParams(searchParams);
    if (!val.trim()) {
      params.delete('q');
    } else {
      params.set('q', val);
    }
    setSearchParams(params, { replace: true });
  }

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6">
      <SEOHead
        title="Developer Notes & Documentation"
        description="Browse free comprehensive developer notes for JavaScript, React, Node.js, Express, Python, SQL, SDLC, Software Testing, and HR Interviews."
      />

      {/* Header section */}
      <div className="mb-8 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted mb-3">
          <BookOpen className="h-3.5 w-3.5 text-primary" />
          <span>{notes.length} Web Documentation Guides</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl lg:text-4xl">
          Developer Documentation & Study Guides
        </h1>
        <p className="mt-2 text-sm text-muted sm:text-base">
          Clean, structured web documentation for core software engineering subjects. Built for quick reading and learning.
        </p>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md">
          <div className="flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-3 focus-within:border-primary">
            <Search className="h-4 w-4 shrink-0 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by topic, keyword, or tag..."
              className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-muted"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="flex items-center gap-1 text-xs font-semibold text-muted mr-1">
            <Filter className="h-3.5 w-3.5" />
            Categories:
          </span>
          {noteCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-fg shadow-sm'
                    : 'border border-border bg-card text-muted hover:bg-hover hover:text-fg'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Notes Grid */}
      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Search}
          title="No notes found"
          description={`No notes matched "${searchQuery}" in category "${selectedCategory}". Try adjusting your search term.`}
        />
      )}
    </div>
  );
}
