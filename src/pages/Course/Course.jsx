import { Link, useOutletContext } from 'react-router-dom';
import { CheckCircle2, Circle, ArrowRight, Layers, BookText } from 'lucide-react';
import Breadcrumb from '../../components/navigation/Breadcrumb';
import ProgressBar from '../../components/ui/ProgressBar';
import Badge from '../../components/ui/Badge';
import { getCourseIcon } from '../../utils/iconMap';
import { getTotalTopicCount, getAllTopicsForCourse } from '../../data';
import { useProgress } from '../../contexts/ProgressContext';

export default function Course() {
  const { course } = useOutletContext();
  const { getCourseProgress, isTopicComplete } = useProgress();
  const totalTopics = getTotalTopicCount(course);
  const progress = getCourseProgress(course.id, totalTopics);
  const Icon = getCourseIcon(course.icon);
  const flatTopics = getAllTopicsForCourse(course);
  const firstIncomplete = flatTopics.find((t) => !isTopicComplete(course.id, t.id)) || flatTopics[0];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-10">
      <Breadcrumb items={[{ label: 'Learn', to: '/learn' }, { label: course.title }]} />

      <div className="mt-4 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-fg sm:text-3xl">{course.title}</h1>
          <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">{course.description}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Badge>{course.level}</Badge>
        <Badge variant="default">
          <Layers className="mr-1 inline h-3 w-3" />
          {course.chapters.length} chapters
        </Badge>
        <Badge variant="default">
          <BookText className="mr-1 inline h-3 w-3" />
          {totalTopics} topics
        </Badge>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-fg">Your progress</span>
          <span className="text-sm font-semibold text-primary">{progress}%</span>
        </div>
        <ProgressBar value={progress} className="mt-2" />
        {firstIncomplete && (
          <Link
            to={`/learn/${course.id}/${firstIncomplete.id}`}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-fg hover:opacity-90"
          >
            {progress > 0 ? 'Continue learning' : 'Start learning'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="mt-8 space-y-8">
        {course.chapters.map((chapter, ci) => (
          <div key={chapter.id}>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
              Chapter {ci + 1} · {chapter.title}
            </h2>
            <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
              {chapter.topics.map((topic) => {
                const complete = isTopicComplete(course.id, topic.id);
                return (
                  <li key={topic.id}>
                    <Link
                      to={`/learn/${course.id}/${topic.id}`}
                      className="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-hover"
                    >
                      {complete ? (
                        <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-success" />
                      ) : (
                        <Circle className="h-4.5 w-4.5 shrink-0 text-muted" />
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-fg">{topic.title}</p>
                        <p className="truncate text-xs text-muted">{topic.summary}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
