import { useState, useEffect } from 'react';
import { AlignLeft } from 'lucide-react';

export default function TableOfContents({ sections }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -40% 0px', threshold: 0.1 }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (!sections || sections.length === 0) return null;

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  }

  return (
    <nav className="space-y-3">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
        <AlignLeft className="h-3.5 w-3.5 text-primary" />
        <span>On this page</span>
      </div>
      <ul className="space-y-1.5 border-l border-border pl-3 text-xs">
        {sections.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <li key={sec.id}>
              <button
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className={`block w-full text-left transition-colors truncate py-1 ${
                  isActive
                    ? '-ml-3 border-l-2 border-primary pl-2.5 font-semibold text-primary'
                    : 'text-muted hover:text-fg'
                }`}
              >
                {sec.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
