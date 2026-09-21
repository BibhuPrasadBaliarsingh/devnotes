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
  Globe,
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
  Globe,
};

export function getCourseIcon(name) {
  return ICONS[name] || BookOpen;
}

