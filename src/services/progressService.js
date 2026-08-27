// Progress persistence layer — currently backed by localStorage.
import { readStorage, writeStorage } from '../utils/storage';
import { STORAGE_KEYS } from '../constants/storageKeys';

export function loadProgress() {
  return readStorage(STORAGE_KEYS.PROGRESS, { completedTopics: [] });
}

export function saveProgress(progress) {
  writeStorage(STORAGE_KEYS.PROGRESS, progress);
}

export function loadRecentlyViewed() {
  return readStorage(STORAGE_KEYS.RECENTLY_VIEWED, []);
}

export function saveRecentlyViewed(list) {
  writeStorage(STORAGE_KEYS.RECENTLY_VIEWED, list);
}
