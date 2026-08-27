import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-fg">
            <BookOpen className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold text-fg">DevNotes</span>
          <span className="text-xs text-muted">— developer notes, made simple.</span>
        </div>
        <nav className="flex items-center gap-4 text-sm text-muted">
          <Link to="/learn" className="hover:text-fg">Learn</Link>
          <Link to="/about" className="hover:text-fg">About</Link>
          <Link to="/contact" className="hover:text-fg">Contact</Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-fg"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
