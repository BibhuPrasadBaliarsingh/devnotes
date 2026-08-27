// Maps string icon names (stored in course data) to lucide-react components,
// so data files stay plain JS/JSON-like and don't import React components directly.
import { Atom, Paintbrush, Hexagon, GitBranch, BookOpen } from 'lucide-react';

const ICONS = { Atom, Paintbrush, Hexagon, GitBranch };

export function getCourseIcon(name) {
  return ICONS[name] || BookOpen;
}
