// Central course registry. Adding a new course = create data/courses/<id>/index.js
// exporting a course object with the same shape, then add it to this array.
import { reactCourse } from './courses/react';
import { cssCourse } from './courses/css';
import { nodeCourse } from './courses/node';
import { gitCourse } from './courses/git';

export * from './notes';

export const courses = [reactCourse, cssCourse, nodeCourse, gitCourse];

export function getCourseById(courseId) {
  return courses.find((c) => c.id === courseId) ?? null;
}

export function getAllTopicsForCourse(course) {
  if (!course) return [];
  return course.chapters.flatMap((chapter) =>
    chapter.topics.map((topic) => ({ ...topic, chapterId: chapter.id, chapterTitle: chapter.title }))
  );
}

export function getTopicById(courseId, topicId) {
  const course = getCourseById(courseId);
  if (!course) return null;
  for (const chapter of course.chapters) {
    const topic = chapter.topics.find((t) => t.id === topicId);
    if (topic) return { topic, chapter, course };
  }
  return null;
}

export function getFlatTopicList(courseId) {
  const course = getCourseById(courseId);
  return getAllTopicsForCourse(course);
}

export function getAdjacentTopics(courseId, topicId) {
  const flat = getFlatTopicList(courseId);
  const index = flat.findIndex((t) => t.id === topicId);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? flat[index - 1] : null,
    next: index < flat.length - 1 ? flat[index + 1] : null,
  };
}

export function getTotalTopicCount(course) {
  return course.chapters.reduce((sum, ch) => sum + ch.topics.length, 0);
}
