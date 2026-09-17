import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { getCourseIcon } from '../../utils/iconMap';

export default function NoteCard({ note }) {
  const IconComponent = getCourseIcon(note.icon);

  return (
    <div className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <IconComponent className="h-5 w-5" />
            </div>
            <div>
              <span className="inline-block rounded-md bg-hover px-2 py-0.5 text-xs font-medium text-muted">
                {note.category}
              </span>
              <h3 className="mt-0.5 text-base font-semibold text-fg group-hover:text-primary transition-colors">
                {note.title}
              </h3>
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-2 sm:text-sm">
          {note.description}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {note.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-border/60 bg-bg px-2 py-0.5 text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
          {note.tags.length > 4 && (
            <span className="inline-flex items-center text-[11px] text-muted">
              +{note.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-3 text-xs">
        <span className="inline-flex items-center gap-1 text-muted">
          <BookOpen className="h-3.5 w-3.5 text-primary" />
          <span>Web Notes</span>
        </span>

        <Link
          to={`/notes/${note.slug}`}
          className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          <span>Read Notes</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
