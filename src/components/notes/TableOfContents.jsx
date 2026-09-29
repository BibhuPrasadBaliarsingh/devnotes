import { useState, useEffect, useRef } from 'react';
import { AlignLeft } from 'lucide-react';

export default function TableOfContents({ sections }) {
  const [activeId, setActiveId] = useState('');
  const activeItemRef = useRef(null);

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

  // Keep the active TOC link scrolled into view in the sidebar
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [activeId]);

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
    <nav className="flex flex-col min-h-0 flex-1 h-full">
      <div className="mb-3 flex shrink-0 items-center gap-2 border-b border-border pb-2.5 text-xs font-semibold uppercase tracking-wider text-muted">
        <AlignLeft className="h-3.5 w-3.5 text-primary" />
        <span>On this page</span>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1.5 custom-scrollbar">
        <ul className="space-y-1 border-l border-border pl-3 text-xs py-0.5">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <li key={sec.id}>
                <button
                  type="button"
                  ref={isActive ? activeItemRef : null}
                  onClick={() => scrollToSection(sec.id)}
                  title={sec.title}
                  className={`block w-full text-left transition-colors truncate py-1 text-xs ${
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
      </div>
    </nav>
  );
}
