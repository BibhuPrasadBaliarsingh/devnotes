import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { loadProgress, saveProgress, loadRecentlyViewed, saveRecentlyViewed } from '../services/progressService';

const ProgressContext = createContext(null);

const MAX_RECENT = 8;

export function ProgressProvider({ children }) {
  const [completedTopics, setCompletedTopics] = useState(() => loadProgress().completedTopics ?? []);
  const [recentlyViewed, setRecentlyViewed] = useState(() => loadRecentlyViewed());

  useEffect(() => {
    saveProgress({ completedTopics });
  }, [completedTopics]);

  useEffect(() => {
    saveRecentlyViewed(recentlyViewed);
  }, [recentlyViewed]);

  const topicKey = (courseId, topicId) => `${courseId}/${topicId}`;

  const isTopicComplete = useCallback(
    (courseId, topicId) => completedTopics.includes(topicKey(courseId, topicId)),
    [completedTopics]
  );

  const toggleTopicComplete = useCallback((courseId, topicId) => {
    const key = topicKey(courseId, topicId);
    setCompletedTopics((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }, []);

  const markTopicViewed = useCallback((courseId, topicId, topicTitle, courseTitle) => {
    const key = topicKey(courseId, topicId);
    setRecentlyViewed((prev) => {
      const withoutCurrent = prev.filter((entry) => entry.key !== key);
      const next = [{ key, courseId, topicId, topicTitle, courseTitle, viewedAt: Date.now() }, ...withoutCurrent];
      return next.slice(0, MAX_RECENT);
    });
  }, []);

  const getCourseProgress = useCallback(
    (courseId, totalTopics) => {
      if (!totalTopics) return 0;
      const completedInCourse = completedTopics.filter((key) => key.startsWith(`${courseId}/`)).length;
      return Math.round((completedInCourse / totalTopics) * 100);
    },
    [completedTopics]
  );

  const totalCompletedCount = completedTopics.length;

  const value = useMemo(
    () => ({
      completedTopics,
      recentlyViewed,
      isTopicComplete,
      toggleTopicComplete,
      markTopicViewed,
      getCourseProgress,
      totalCompletedCount,
    }),
    [completedTopics, recentlyViewed, isTopicComplete, toggleTopicComplete, markTopicViewed, getCourseProgress, totalCompletedCount]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within a ProgressProvider');
  return ctx;
}
