// Search over local course data. Swap this implementation for a real
// backend/API-backed search later — callers only depend on searchNotes().
import { courses } from '../data';

function buildSearchIndex() {
  const index = [];
  for (const course of courses) {
    for (const chapter of course.chapters) {
      for (const topic of chapter.topics) {
        const textBlocks = (topic.content || [])
          .map((block) => block.text || (block.items || []).join(' ') || block.code || '')
          .join(' ');
        index.push({
          courseId: course.id,
          courseTitle: course.title,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          topicId: topic.id,
          topicTitle: topic.title,
          summary: topic.summary,
          haystack: `${topic.title} ${topic.summary} ${textBlocks}`.toLowerCase(),
        });
      }
    }
  }
  return index;
}

let cachedIndex = null;

export function searchNotes(query) {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];
  if (!cachedIndex) cachedIndex = buildSearchIndex();
  return cachedIndex
    .filter((entry) => entry.haystack.includes(trimmed))
    .slice(0, 30);
}
