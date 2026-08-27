import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, CheckCircle2, Circle, X } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';

function ChapterGroup({ chapter, courseId, activeTopicId, isTopicComplete }) {
  const containsActive = chapter.topics.some((t) => t.id === activeTopicId);
  const [open, setOpen] = useState(containsActive || true);

  return (
    <div className="mb-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-wide text-muted hover:text-fg"
        aria-expanded={open}
      >
        <span className="truncate">{chapter.title}</span>
        <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? '' : '-rotate-90'}`} />
      </button>

      {open && (
        <ul className="mt-0.5 space-y-0.5">
          {chapter.topics.map((topic) => {
            const complete = isTopicComplete(courseId, topic.id);
            return (
              <li key={topic.id}>
                <NavLink
                  to={`/learn/${courseId}/${topic.id}`}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-primary/10 font-medium text-primary'
                        : 'text-fg/80 hover:bg-hover hover:text-fg'
                    }`
                  }
                >
                  {complete ? (
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" />
                  ) : (
                    <Circle className="h-3.5 w-3.5 shrink-0 opacity-40" />
                  )}
                  <span className="truncate">{topic.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function SidebarContent({ course, activeTopicId, isTopicComplete }) {
  return (
    <>
      <div className="mb-3 px-2">
        <p className="text-sm font-semibold text-fg">{course.title}</p>
        <p className="text-xs text-muted">{course.chapters.length} chapters</p>
      </div>
      {course.chapters.map((chapter) => (
        <ChapterGroup
          key={chapter.id}
          chapter={chapter}
          courseId={course.id}
          activeTopicId={activeTopicId}
          isTopicComplete={isTopicComplete}
        />
      ))}
    </>
  );
}

export default function Sidebar({ course, activeTopicId, mobileOpen, onCloseMobile }) {
  const { isTopicComplete } = useProgress();
  if (!course) return null;

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border lg:block">
        <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto px-3 py-6 no-scrollbar">
          <SidebarContent course={course} activeTopicId={activeTopicId} isTopicComplete={isTopicComplete} />
        </div>
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={onCloseMobile} aria-hidden="true" />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-bg px-3 py-4 shadow-xl">
            <div className="mb-2 flex items-center justify-between px-2">
              <span className="text-sm font-semibold text-fg">Course contents</span>
              <button
                type="button"
                onClick={onCloseMobile}
                aria-label="Close menu"
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-hover"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div onClick={onCloseMobile}>
              <SidebarContent course={course} activeTopicId={activeTopicId} isTopicComplete={isTopicComplete} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
