import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { readStorage, writeStorage } from '../utils/storage';
import { STORAGE_KEYS } from '../constants/storageKeys';

const BookmarksContext = createContext(null);

export function BookmarksProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => readStorage(STORAGE_KEYS.BOOKMARKS, []));

  useEffect(() => {
    writeStorage(STORAGE_KEYS.BOOKMARKS, bookmarks);
  }, [bookmarks]);

  const key = (courseId, topicId) => `${courseId}/${topicId}`;

  const isBookmarked = useCallback(
    (courseId, topicId) => bookmarks.some((b) => b.key === key(courseId, topicId)),
    [bookmarks]
  );

  const toggleBookmark = useCallback((courseId, topicId, topicTitle, courseTitle, chapterId) => {
    const k = key(courseId, topicId);
    setBookmarks((prev) =>
      prev.some((b) => b.key === k)
        ? prev.filter((b) => b.key !== k)
        : [{ key: k, courseId, topicId, topicTitle, courseTitle, chapterId, savedAt: Date.now() }, ...prev]
    );
  }, []);

  const value = useMemo(
    () => ({ bookmarks, isBookmarked, toggleBookmark }),
    [bookmarks, isBookmarked, toggleBookmark]
  );

  return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>;
}

export function useBookmarks() {
  const ctx = useContext(BookmarksContext);
  if (!ctx) throw new Error('useBookmarks must be used within a BookmarksProvider');
  return ctx;
}
