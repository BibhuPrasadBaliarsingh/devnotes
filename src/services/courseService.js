// Course data access layer. Currently reads from local static data;
// swap the implementation here for real API calls later without touching UI code.
import { courses, getCourseById, getAllTopicsForCourse, getTopicById, getAdjacentTopics, getTotalTopicCount } from '../data';

export function fetchCourses() {
  return Promise.resolve(courses);
}

export function fetchCourseById(courseId) {
  return Promise.resolve(getCourseById(courseId));
}

export function fetchTopicsForCourse(course) {
  return Promise.resolve(getAllTopicsForCourse(course));
}

export function fetchTopic(courseId, topicId) {
  return Promise.resolve(getTopicById(courseId, topicId));
}

export function fetchAdjacentTopics(courseId, topicId) {
  return Promise.resolve(getAdjacentTopics(courseId, topicId));
}

export function courseTopicCount(course) {
  return getTotalTopicCount(course);
}

export { courses, getCourseById, getAllTopicsForCourse, getTopicById, getAdjacentTopics, getTotalTopicCount };
