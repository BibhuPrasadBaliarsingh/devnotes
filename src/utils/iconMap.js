import {
  Atom,
  Paintbrush,
  Hexagon,
  GitBranch,
  BookOpen,
  Code,
  Server,
  Terminal,
  Database,
  Workflow,
  ShieldCheck,
  Briefcase,
  FileCode,
} from 'lucide-react';

const ICONS = {
  Atom,
  Paintbrush,
  Hexagon,
  GitBranch,
  BookOpen,
  Code,
  Server,
  Terminal,
  Database,
  Workflow,
  ShieldCheck,
  Briefcase,
  FileCode,
};

export function getCourseIcon(name) {
  return ICONS[name] || BookOpen;
}

