import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * items: [{ label, to }] — the last item is rendered as plain text (current page).
 */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 overflow-x-auto no-scrollbar text-sm text-muted">
      <Link to="/" className="flex items-center gap-1 shrink-0 hover:text-fg transition-colors">
        <Home className="h-3.5 w-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1 shrink-0">
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            {isLast || !item.to ? (
              <span className="text-fg font-medium truncate max-w-[200px]" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.to} className="hover:text-fg transition-colors truncate max-w-[160px]">
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
