import { useState, useRef, useEffect, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchNotes } from '../../services/searchService';

export default function SearchBar({ variant = 'header', autoFocus = false, onNavigate }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const listboxId = useId();
  const navigate = useNavigate();

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setResults(searchNotes(query).slice(0, 8));
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function goToResult(result) {
    if (result.type === 'note') {
      const hash = result.sectionId ? `#${result.sectionId}` : '';
      navigate(`/notes/${result.slug}${hash}`);
    } else {
      navigate(`/learn/${result.courseId}/${result.topicId}`);
    }
    setQuery('');
    setIsOpen(false);
    onNavigate?.();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setIsOpen(false);
    onNavigate?.();
  }

  const isHeader = variant === 'header';

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSubmit} role="search">
        <label htmlFor={`search-${listboxId}`} className="sr-only">
          Search notes
        </label>
        <div
          className={`flex items-center gap-2 rounded-lg border border-border bg-card px-3 transition-colors focus-within:border-primary ${isHeader ? 'h-9' : 'h-12'
            }`}
        >
          <Search className={`shrink-0 text-muted ${isHeader ? 'h-4 w-4' : 'h-5 w-5'}`} />
          <input
            id={`search-${listboxId}`}
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search notes… (e.g. virtual dom, git rebase)"
            className={`w-full bg-transparent outline-none placeholder:text-muted text-fg ${isHeader ? 'text-sm' : 'text-base'
              }`}
            role="combobox"
            aria-expanded={isOpen && results.length > 0}
            aria-controls={listboxId}
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
              className="shrink-0 text-muted hover:text-fg"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>

      {isOpen && results.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute z-40 mt-2 w-full max-h-96 overflow-y-auto rounded-lg border border-border bg-card shadow-lg"
        >
          {results.map((result) => (
            <li key={`${result.courseId}-${result.topicId}`}>
              <button
                type="button"
                onClick={() => goToResult(result)}
                className="flex w-full flex-col gap-0.5 border-b border-border px-4 py-2.5 text-left last:border-b-0 hover:bg-hover"
              >
                <span className="text-sm font-medium text-fg">{result.topicTitle}</span>
                <span className="text-xs text-muted">
                  {result.courseTitle} • {result.chapterTitle}
                </span>
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full px-4 py-2 text-left text-xs font-medium text-primary hover:bg-hover"
            >
              See all results for "{query}"
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
