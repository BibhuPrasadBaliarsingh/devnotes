import { useEffect, useMemo } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/navigation/Breadcrumb';
import NoteContent from '../../components/notes/NoteContent';
import TopicNavigation from '../../components/notes/TopicNavigation';
import MarkCompleteButton from '../../components/common/MarkCompleteButton';
import BookmarkButton from '../../components/common/BookmarkButton';
import Badge from '../../components/ui/Badge';
import NotFound from '../NotFound/NotFound';
import { getTopicById, getAdjacentTopics } from '../../data';
import { useProgress } from '../../contexts/ProgressContext';

export default function Topic() {
  const { course } = useOutletContext();
  const { topicId } = useParams();
  const { markTopicViewed } = useProgress();

  const found = useMemo(() => getTopicById(course.id, topicId), [course.id, topicId]);
  const { previous, next } = useMemo(() => getAdjacentTopics(course.id, topicId), [course.id, topicId]);

  useEffect(() => {
    if (found) {
      markTopicViewed(course.id, topicId, found.topic.title, course.title);
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course.id, topicId]);

  if (!found) {
    return <NotFound message="We couldn't find that topic. It may have been renamed or removed." />;
  }

  const { topic, chapter } = found;
  const headings = (topic.content || []).filter((b) => b.type === 'heading');

  return (
    <div className="flex">
      <article className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb
            items={[
              { label: course.title, to: `/learn/${course.id}` },
              { label: chapter.title },
              { label: topic.title },
            ]}
          />

          <div className="mt-4 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <Badge>{chapter.title}</Badge>
              <h1 className="mt-2 text-2xl font-bold text-fg sm:text-3xl">{topic.title}</h1>
              <p className="mt-1.5 text-sm text-muted sm:text-base">{topic.summary}</p>
            </div>
            <BookmarkButton
              courseId={course.id}
              topicId={topic.id}
              topicTitle={topic.title}
              courseTitle={course.title}
              chapterId={chapter.id}
              className="mt-1 shrink-0"
            />
          </div>

          <div className="mt-8">
            <NoteContent blocks={topic.content} />
          </div>

          <div className="mt-8">
            <MarkCompleteButton courseId={course.id} topicId={topic.id} />
          </div>

          <TopicNavigation courseId={course.id} previous={previous} next={next} />
        </div>
      </article>

      {headings.length > 1 && (
        <aside className="hidden w-56 shrink-0 border-l border-border py-8 pr-6 xl:block">
          <div className="sticky top-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">On this page</p>
            <ul className="space-y-2 border-l border-border pl-3 text-sm">
              {headings.map((h, i) => (
                <li key={i}>
                  <a href={`#${slugForHeading(h.text)}`} className="block truncate text-muted hover:text-fg">
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
}

function slugForHeading(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
