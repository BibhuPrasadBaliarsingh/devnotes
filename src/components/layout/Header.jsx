import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, BookOpen, Search as SearchIcon } from 'lucide-react';
import ThemeToggle from '../navigation/ThemeToggle';
import SearchBar from '../search/SearchBar';

const NAV_LINKS = [
  { to: '/learn', label: 'Learn' },
  { to: '/bookmarks', label: 'Bookmarks' },
  { to: '/progress', label: 'Progress' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header({ onOpenMobileSidebar, showSidebarToggle = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-4 px-4 sm:px-6">
        {showSidebarToggle && (
          <button
            type="button"
            onClick={onOpenMobileSidebar}
            aria-label="Open course navigation"
            className="-ml-1 flex h-9 w-9 items-center justify-center rounded-lg text-fg hover:bg-hover lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}

        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-fg">
            <BookOpen className="h-4.5 w-4.5" />
          </span>
          <span className="text-base font-bold tracking-tight text-fg">DevNotes</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive ? 'bg-hover text-fg' : 'text-muted hover:bg-hover hover:text-fg'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden flex-1 justify-center md:flex md:max-w-sm md:ml-auto">
          <SearchBar variant="header" />
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            onClick={() => setMobileSearchOpen((v) => !v)}
            aria-label="Toggle search"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-fg hover:bg-hover md:hidden"
          >
            <SearchIcon className="h-4.5 w-4.5" />
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-fg hover:bg-hover md:hidden"
          >
            {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {mobileSearchOpen && (
        <div className="border-t border-border px-4 py-3 md:hidden">
          <SearchBar variant="header" autoFocus onNavigate={() => setMobileSearchOpen(false)} />
        </div>
      )}

      {mobileMenuOpen && (
        <nav className="border-t border-border px-4 py-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                  isActive ? 'bg-hover text-fg' : 'text-muted hover:bg-hover hover:text-fg'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
