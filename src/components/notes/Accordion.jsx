import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(idx) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  if (!items || items.length === 0) return null;

  return (
    <div className="my-6 space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const q = item.question || item.q;
        const a = item.answer || item.a;

        return (
          <div
            key={idx}
            className="rounded-xl border border-border bg-card overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-fg hover:bg-hover/50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-2.5 text-sm sm:text-base">
                <HelpCircle className="h-4 w-4 shrink-0 text-primary" />
                {q}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-primary' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="border-t border-border/60 bg-bg/50 px-4 py-3.5 text-sm leading-relaxed text-muted whitespace-pre-line">
                {a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
