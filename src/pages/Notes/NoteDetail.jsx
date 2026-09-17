import { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import {
  Share2,
  Tag,
  BookOpen,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';
import { notes, getNoteBySlug, getRelatedNotes } from '../../data/notes';
import { getNoteContentBySlug } from '../../data/notesContent';
import { getCourseIcon } from '../../utils/iconMap';
import NoteRenderer from '../../components/notes/NoteRenderer';
import TableOfContents from '../../components/notes/TableOfContents';
import NoteCard from '../../components/ui/NoteCard';
import SEOHead from '../../components/common/SEOHead';
import NotFound from '../NotFound/NotFound';

export default function NoteDetail() {
  const { slug } = useParams();
  const note = getNoteBySlug(slug);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [slug]);

  if (!note) {
    return <NotFound />;
  }

  const contentData = getNoteContentBySlug(note.slug);
  const IconComponent = getCourseIcon(note.icon);
  const related = getRelatedNotes(note, 3);
  const pageUrl = window.location.href;

  const pageTitle = `${note.title} Notes — Complete ${note.title} Guide`;

  function handleShare() {
    if (navigator.share) {
      navigator
        .share({
          title: pageTitle,
          text: note.description,
          url: pageUrl,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(pageUrl);
      alert('Link copied to clipboard!');
    }
  }

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6">
      <SEOHead
        title={pageTitle}
        description={note.description}
        canonicalUrl={pageUrl}
      />

      {/* Top Mobile Bar */}
      <div className="mb-4 flex items-center justify-between border-b border-border pb-3 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileSidebarOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-fg"
        >
          <Menu className="h-4 w-4" />
          <span>All Topics</span>
        </button>

        <span className="text-xs font-medium text-muted truncate max-w-[180px]">
          {note.title}
        </span>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/60 backdrop-blur-sm lg:hidden">
          <div className="relative w-4/5 max-w-xs bg-bg p-4 shadow-xl border-r border-border overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
              <span className="text-sm font-bold text-fg">Documentation Topics</span>
              <button
                type="button"
                onClick={() => setMobileSidebarOpen(false)}
                className="rounded-lg p-1 text-muted hover:text-fg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="space-y-1">
              {notes.map((item) => {
                const ItemIcon = getCourseIcon(item.icon);
                return (
                  <NavLink
                    key={item.id}
                    to={`/notes/${item.slug}`}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-muted hover:bg-hover hover:text-fg'
                      }`
                    }
                  >
                    <ItemIcon className="h-4 w-4 shrink-0" />
                    <span>{item.title}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>
          <div className="flex-1" onClick={() => setMobileSidebarOpen(false)} />
        </div>
      )}

      {/* Main 3-Column Grid Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Sidebar - Topic Navigation (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-20 rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between pb-2 border-b border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">
                Topics Registry
              </span>
              <BookOpen className="h-3.5 w-3.5 text-primary" />
            </div>
            <nav className="space-y-1 text-xs">
              {notes.map((item) => {
                const ItemIcon = getCourseIcon(item.icon);
                return (
                  <NavLink
                    key={item.id}
                    to={`/notes/${item.slug}`}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-lg px-3 py-2 font-medium transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-muted hover:bg-hover hover:text-fg'
                      }`
                    }
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <ItemIcon className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </div>
                    <ChevronRight className="h-3 w-3 opacity-40" />
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Center - Documentation Content */}
        <main className="lg:col-span-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-muted">
            <Link to="/" className="hover:text-fg transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/notes" className="hover:text-fg transition-colors">
              Notes
            </Link>
            <span>/</span>
            <span className="font-medium text-fg truncate">{note.title}</span>
          </nav>

          {/* Header */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm mb-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div>
                  <span className="inline-block rounded-md bg-hover px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {note.category}
                  </span>
                  <h1 className="mt-1 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                    {note.title}
                  </h1>
                  <p className="mt-1 text-xs text-muted sm:text-sm">
                    {contentData?.subtitle || note.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <Tag className="h-3 w-3 text-muted shrink-0" />
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/80 bg-bg px-2 py-0.5 text-[11px] font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleShare}
                aria-label="Share note"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-muted hover:bg-hover hover:text-fg transition-colors"
                title="Share link"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Main Web Section Renderer */}
          {contentData?.sections ? (
            <NoteRenderer sections={contentData.sections} />
          ) : (
            <div className="p-8 text-center text-muted">
              <p>Documentation content for {note.title} is being updated.</p>
            </div>
          )}

          {/* Related Notes */}
          {related.length > 0 && (
            <section className="border-t border-border pt-10 mt-12">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-fg sm:text-xl">
                    Related Notes
                  </h2>
                  <p className="mt-1 text-xs text-muted">
                    More guides in {note.category} and related topics.
                  </p>
                </div>
                <Link
                  to="/notes"
                  className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  View all →
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((relNote) => (
                  <NoteCard key={relNote.id} note={relNote} />
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Right Sidebar - "On this page" TOC (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-20 rounded-xl border border-border bg-card p-4 shadow-sm">
            {contentData?.sections && (
              <TableOfContents sections={contentData.sections} />
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
