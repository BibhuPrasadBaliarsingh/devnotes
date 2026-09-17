import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, Layers, Users, BookOpen } from 'lucide-react';
import SearchBar from '../../components/search/SearchBar';
import CourseCard from '../../components/ui/CourseCard';
import NoteCard from '../../components/ui/NoteCard';
import SEOHead from '../../components/common/SEOHead';
import { courses, notes, getTotalTopicCount } from '../../data';
import { useProgress } from '../../contexts/ProgressContext';

const FEATURES = [
  {
    icon: Layers,
    title: 'Structured, not scattered',
    text: 'Every note and course is organized into logical sections you can move through in order, or jump around freely.',
  },
  {
    icon: Sparkles,
    title: 'Built for reading',
    text: 'Clean typography, code blocks with copy buttons, comparison tables, callouts, and Q&A accordions — no clutter.',
  },
  {
    icon: Clock,
    title: 'Pick up where you left off',
    text: 'Progress and recently viewed topics are saved automatically, right in your browser.',
  },
];

export default function Home() {
  const { recentlyViewed, totalCompletedCount } = useProgress();
  const totalTopics = courses.reduce((sum, c) => sum + getTotalTopicCount(c), 0);
  const featuredNotes = notes.filter((n) => n.featured).slice(0, 6);

  return (
    <div>
      <SEOHead
        title="Home"
        description="Free web developer notes and interactive courses for JavaScript, React, Node.js, Express, Python, SQL, SDLC, Testing, and HR Interviews."
      />

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {notes.length} Developer Guides & {totalTopics}+ interactive topics
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-fg sm:text-5xl">
              Learn. Practice. <span className="text-primary">Master.</span>
            </h1>
            <p className="mt-4 text-lg text-muted">Developer documentation made simple.</p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Master JavaScript, React, Node.js, Python, SQL, SDLC and Testing through clean, structured web documentation —
              built for reading and learning, not scrolling past ads.
            </p>

            <div className="mx-auto mt-8 max-w-lg">
              <SearchBar variant="hero" />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/notes"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-fg transition-opacity hover:opacity-90"
              >
                <BookOpen className="h-4 w-4" />
                Browse Notes
              </Link>
              <Link
                to="/learn"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-hover"
              >
                Browse Interactive Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Web Notes */}
      <section className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Web Documentation</span>
            <h2 className="mt-1 text-xl font-bold text-fg sm:text-2xl">Featured Developer Notes</h2>
            <p className="mt-1 text-sm text-muted">Structured documentation guides with code examples and Q&As.</p>
          </div>
          <Link to="/notes" className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80">
            View All Notes ({notes.length}) <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </section>

      {/* Popular courses */}
      <section className="border-t border-border/60 mx-auto max-w-[1440px] px-4 py-14 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Interactive Courses</span>
            <h2 className="mt-1 text-xl font-bold text-fg sm:text-2xl">Popular Courses</h2>
            <p className="mt-1 text-sm text-muted">Pick a technology and start reading interactively.</p>
          </div>
          <Link to="/learn" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary sm:flex">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Progress + recently viewed */}
      {(totalCompletedCount > 0 || recentlyViewed.length > 0) && (
        <section className="mx-auto max-w-[1440px] px-4 pb-14 sm:px-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5 lg:col-span-1">
              <h3 className="text-sm font-semibold text-fg">Your learning progress</h3>
              <p className="mt-2 text-3xl font-bold text-primary">{totalCompletedCount}</p>
              <p className="text-xs text-muted">topics completed across all courses</p>
              <Link to="/progress" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
                View full progress <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {recentlyViewed.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
                <h3 className="text-sm font-semibold text-fg">Recently viewed</h3>
                <ul className="mt-3 space-y-2">
                  {recentlyViewed.slice(0, 4).map((item) => (
                    <li key={item.key}>
                      <Link
                        to={`/learn/${item.courseId}/${item.topicId}`}
                        className="flex items-center justify-between rounded-lg px-2 py-2 text-sm hover:bg-hover"
                      >
                        <span className="truncate text-fg">{item.topicTitle}</span>
                        <span className="ml-3 shrink-0 text-xs text-muted">{item.courseTitle}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Why this platform */}
      <section className="border-t border-border bg-hover/40">
        <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-fg sm:text-2xl">Why use DevNotes?</h2>
            <p className="mt-1 text-sm text-muted">A study platform built like documentation, not like a blog.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-fg">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted">
            <Users className="h-3.5 w-3.5" />
            No sign-up required — everything is saved right in your browser.
          </div>
        </div>
      </section>
    </div>
  );
}
