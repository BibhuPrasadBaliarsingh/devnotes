import { CheckCircle2, Circle } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';

export default function MarkCompleteButton({ courseId, topicId, className = '' }) {
  const { isTopicComplete, toggleTopicComplete } = useProgress();
  const complete = isTopicComplete(courseId, topicId);

  return (
    <button
      type="button"
      onClick={() => toggleTopicComplete(courseId, topicId)}
      aria-pressed={complete}
      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
        complete
          ? 'border-success/40 bg-success/10 text-success'
          : 'border-border bg-card text-fg hover:bg-hover'
      } ${className}`}
    >
      {complete ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
      {complete ? 'Completed' : 'Mark as complete'}
    </button>
  );
}
