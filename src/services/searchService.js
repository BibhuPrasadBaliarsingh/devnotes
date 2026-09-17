import { courses, notes } from '../data';
import { getNoteContentBySlug } from '../data/notesContent';

function buildSearchIndex() {
  const index = [];

  // Index Web Developer Notes Sections
  for (const note of notes) {
    const fullContent = getNoteContentBySlug(note.slug);
    if (fullContent && fullContent.sections) {
      for (const sec of fullContent.sections) {
        const textBlocks = (sec.content || [])
          .map((b) => {
            if (b.text) return b.text;
            if (b.code) return b.code;
            if (b.items) return b.items.join(' ');
            if (b.rows) return b.rows.flat().join(' ');
            if (b.faqItems) return b.faqItems.map((i) => `${i.question} ${i.answer}`).join(' ');
            return '';
          })
          .join(' ');

        index.push({
          type: 'note',
          slug: note.slug,
          sectionId: sec.id,
          title: `${note.title} — ${sec.title}`,
          topicTitle: sec.title,
          courseTitle: `Notes • ${note.category}`,
          chapterTitle: note.title,
          category: note.category,
          haystack: `${note.title} ${sec.title} ${sec.summary} ${textBlocks} ${note.tags.join(' ')}`.toLowerCase(),
        });
      }
    } else {
      index.push({
        type: 'note',
        slug: note.slug,
        title: note.title,
        topicTitle: note.title,
        courseTitle: `Notes • ${note.category}`,
        chapterTitle: note.category,
        category: note.category,
        haystack: `${note.title} ${note.description} ${note.tags.join(' ')}`.toLowerCase(),
      });
    }
  }

  // Index Courses & Topics
  for (const course of courses) {
    for (const chapter of course.chapters) {
      for (const topic of chapter.topics) {
        const textBlocks = (topic.content || [])
          .map((block) => block.text || (block.items || []).join(' ') || block.code || '')
          .join(' ');
        index.push({
          type: 'topic',
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
