// Centralized route path constants — never hardcode route strings in components.
export const ROUTES = {
  HOME: '/',
  LEARN: '/learn',
  COURSE: (courseId) => `/learn/${courseId}`,
  TOPIC: (courseId, topicId) => `/learn/${courseId}/${topicId}`,
  SEARCH: '/search',
  BOOKMARKS: '/bookmarks',
  PROGRESS: '/progress',
  ABOUT: '/about',
};

export const COURSE_PATH_PATTERN = '/learn/:courseId';
export const TOPIC_PATH_PATTERN = '/learn/:courseId/:topicId';
