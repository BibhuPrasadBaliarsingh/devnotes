import { Link } from 'react-router-dom';
import { ArrowRight, BookText, Layers } from 'lucide-react';
import { getCourseIcon } from '../../utils/iconMap';
import { getTotalTopicCount } from '../../data';
import { useProgress } from '../../contexts/ProgressContext';
import ProgressBar from './ProgressBar';

export default function CourseCard({ course }) {
  const Icon = getCourseIcon(course.icon);
  const totalTopics = getTotalTopicCount(course);
  const { getCourseProgress } = useProgress();
  const progress = getCourseProgress(course.id, totalTopics);

  return (
    <Link
      to={`/learn/${course.id}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5.5 w-5.5" />
        </div>
        <ArrowRight className="h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-fg">{course.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">{course.description}</p>

      <div className="mt-4 flex items-center gap-4 text-xs text-muted">
        <span className="flex items-center gap-1">
          <Layers className="h-3.5 w-3.5" />
          {course.chapters.length} chapters
        </span>
        <span className="flex items-center gap-1">
          <BookText className="h-3.5 w-3.5" />
          {totalTopics} topics
        </span>
      </div>

      <div className="mt-3 text-xs font-medium text-muted">{course.level}</div>

      <div className="mt-4">
        <ProgressBar value={progress} size="sm" />
        <div className="mt-1.5 flex items-center justify-between text-xs">
          <span className="text-muted">{progress}% complete</span>
          <span className="font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
            {progress > 0 ? 'Continue' : 'Start learning'}
          </span>
        </div>
      </div>
    </Link>
  );
}
