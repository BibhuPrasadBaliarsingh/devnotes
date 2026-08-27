import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';
import ProgressBar from '../../components/ui/ProgressBar';
import EmptyState from '../../components/common/EmptyState';
import { getCourseIcon } from '../../utils/iconMap';
import { courses, getTotalTopicCount } from '../../data';
import { useProgress } from '../../contexts/ProgressContext';

export default function Progress() {
  const { getCourseProgress, totalCompletedCount } = useProgress();
  const totalTopics = courses.reduce((sum, c) => sum + getTotalTopicCount(c), 0);
  const overallPercent = totalTopics ? Math.round((totalCompletedCount / totalTopics) * 100) : 0;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-fg sm:text-3xl">Your progress</h1>
      <p className="mt-2 text-sm text-muted">Track how far you've come across every course.</p>

      <div className="mt-6 rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-fg">Overall completion</p>
            <p className="text-xs text-muted">
              {totalCompletedCount} of {totalTopics} topics completed
            </p>
          </div>
          <span className="ml-auto text-2xl font-bold text-primary">{overallPercent}%</span>
        </div>
        <ProgressBar value={overallPercent} className="mt-4" />
      </div>

      {totalCompletedCount === 0 ? (
        <div className="mt-6">
          <EmptyState
            title="No progress yet"
            description="Mark topics as complete while you read, and your progress will show up here."
            actionLabel="Start a course"
            actionTo="/learn"
          />
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {courses.map((course) => {
            const Icon = getCourseIcon(course.icon);
            const total = getTotalTopicCount(course);
            const percent = getCourseProgress(course.id, total);
            return (
              <Link
                key={course.id}
                to={`/learn/${course.id}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="truncate text-sm font-medium text-fg">{course.title}</span>
                    <span className="ml-2 shrink-0 text-xs font-semibold text-muted">{percent}%</span>
                  </div>
                  <ProgressBar value={percent} size="sm" className="mt-2" />
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted" />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
