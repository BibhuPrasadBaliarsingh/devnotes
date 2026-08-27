import { Link } from 'react-router-dom';
import { BookOpen, Layers, Search, Moon } from 'lucide-react';

const POINTS = [
  { icon: Layers, title: 'Data-driven courses', text: 'Every course is plain structured data, so new technologies can be added without rebuilding the UI.' },
  { icon: Search, title: 'Search everything', text: 'Find any concept across every course from one search bar.' },
  { icon: Moon, title: 'Light & dark mode', text: 'Comfortable reading, day or night — your preference is remembered.' },
];

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <BookOpen className="h-6 w-6" />
      </div>
      <h1 className="mt-4 text-2xl font-bold text-fg sm:text-3xl">About DevNotes</h1>
      <p className="mt-3 leading-relaxed text-muted">
        DevNotes is a developer learning and notes platform. Open the website, choose what you want to
        learn, and study clean, organized notes — no sign-up, no clutter, no distractions.
      </p>
      <p className="mt-3 leading-relaxed text-muted">
        This is the first version of the platform. It currently covers React, CSS, Node.js, and Git &
        GitHub, with more technologies planned — HTML, JavaScript, Express, MongoDB, TypeScript,
        Next.js, and Data Structures & Algorithms.
      </p>

      <div className="mt-8 space-y-4">
        {POINTS.map((p) => (
          <div key={p.title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <p.icon className="h-4.5 w-4.5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-fg">{p.title}</p>
              <p className="mt-0.5 text-sm text-muted">{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/learn"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-fg hover:opacity-90"
      >
        Start learning
      </Link>
    </div>
  );
}
