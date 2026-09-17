// Central Data Registry for Web Developer Notes
// Note: PDFs are source reference material only and are NOT exposed to users.

export const noteCategories = [
  'All',
  'Web Development',
  'Programming',
  'Database',
  'Software Engineering',
  'Interview Preparation',
];

export const notes = [
  {
    id: 'html',
    slug: 'html',
    title: 'HTML',
    category: 'Web Development',
    description:
      'Comprehensive HTML guide covering document structure, semantic elements, forms, tables, multimedia, accessibility, SEO, modern HTML5 features, and best practices.',
    tags: ['HTML', 'HTML5', 'Frontend', 'Web Development', 'Semantics', 'Forms', 'SEO'],
    icon: 'FileCode',
    featured: true,
    createdAt: '2026-01-05',
    contentModule: () => import('./notesContent/html'),
  },
  {
    id: 'css',
    slug: 'css',
    title: 'CSS',
    category: 'Web Development',
    description:
      'Comprehensive CSS guide covering selectors, cascade, box model, positioning, Flexbox, Grid, responsive design, animations, transitions, variables, architecture, accessibility, and production best practices.',
    tags: ['CSS', 'CSS3', 'Frontend', 'Styling', 'Flexbox', 'Grid', 'Responsive'],
    icon: 'Paintbrush',
    featured: true,
    createdAt: '2026-01-07',
    contentModule: () => import('./notesContent/css'),
  },
  {
    id: 'javascript',
    slug: 'javascript',
    title: 'JavaScript',
    category: 'Web Development',
    description:
      'Complete JavaScript developer reference: variables, data types, functions, closures, prototypes, event loop, promises, async/await, DOM manipulation, and modern ES6+ features.',
    tags: ['JavaScript', 'ES6+', 'Frontend', 'Async', 'DOM', 'Closures', 'Promises'],
    icon: 'Code',
    featured: true,
    createdAt: '2026-01-10',
    contentModule: () => import('./notesContent/javascript'),
  },
  {
    id: 'react',
    slug: 'react',
    title: 'React.js',
    category: 'Web Development',
    description:
      'Complete React library guide: JSX, component lifecycle, props, state management, hooks (useState, useEffect, useMemo), Virtual DOM, performance optimization, and architectural best practices.',
    tags: ['React.js', 'JavaScript', 'Frontend', 'Hooks', 'Virtual DOM', 'State Management'],
    icon: 'Atom',
    featured: true,
    createdAt: '2026-01-08',
    contentModule: () => import('./notesContent/react'),
  },
  {
    id: 'nodejs',
    slug: 'nodejs',
    title: 'Node.js',
    category: 'Web Development',
    description:
      'Node.js runtime handbook: V8 engine, Event Loop phases, asynchronous non-blocking I/O, Buffer, Streams, CommonJS vs ESM, cluster module, and backend architecture.',
    tags: ['Node.js', 'JavaScript', 'Backend', 'Event Loop', 'Async', 'Streams'],
    icon: 'Hexagon',
    featured: true,
    createdAt: '2026-01-12',
    contentModule: () => import('./notesContent/nodejs'),
  },
  {
    id: 'express',
    slug: 'express',
    title: 'Express.js',
    category: 'Web Development',
    description:
      'Fast, unopinionated web framework for Node.js: routing, middleware stack, RESTful APIs, request/response lifecycle, error handling, and security best practices.',
    tags: ['Express.js', 'Node.js', 'JavaScript', 'REST API', 'Backend', 'Middleware'],
    icon: 'Server',
    featured: true,
    createdAt: '2026-01-15',
    contentModule: () => import('./notesContent/express'),
  },
  {
    id: 'python',
    slug: 'python',
    title: 'Python',
    category: 'Programming',
    description:
      'Comprehensive Python language notes: syntax, data structures (lists, tuples, dicts, sets), OOP, list comprehensions, decorators, generators, error handling, and core standard modules.',
    tags: ['Python', 'Programming', 'OOP', 'Data Structures', 'Backend', 'Algorithms'],
    icon: 'Terminal',
    featured: true,
    createdAt: '2026-01-18',
    contentModule: () => import('./notesContent/python'),
  },
  {
    id: 'sql',
    slug: 'sql',
    title: 'SQL',
    category: 'Database',
    description:
      'Relational database guide: SQL queries, SELECT, JOINs (INNER, LEFT, RIGHT, FULL), aggregate functions, GROUP BY, subqueries, indexing, normalization (1NF-3NF), ACID transactions, and optimization.',
    tags: ['SQL', 'Database', 'PostgreSQL', 'MySQL', 'Relational DB', 'Queries', 'Joins'],
    icon: 'Database',
    featured: true,
    createdAt: '2026-01-14',
    contentModule: () => import('./notesContent/sql'),
  },
  {
    id: 'mongodb',
    slug: 'mongodb',
    title: 'MongoDB',
    category: 'Database',
    description:
      'Comprehensive NoSQL database reference: BSON documents, CRUD, query operators, update modifiers, aggregation pipeline, indexes, relationships, transactions, and Mongoose integration.',
    tags: ['MongoDB', 'NoSQL', 'Database', 'BSON', 'Aggregation', 'Mongoose', 'Backend'],
    icon: 'Database',
    featured: true,
    createdAt: '2026-01-16',
    contentModule: () => import('./notesContent/mongodb'),
  },
  {
    id: 'sdlc',
    slug: 'sdlc',
    title: 'SDLC',
    category: 'Software Engineering',
    description:
      'Software Development Life Cycle methodologies: Waterfall, Agile, Scrum, Kanban, requirements engineering, architectural design patterns, code review, and DevOps CI/CD pipelines.',
    tags: ['SDLC', 'Software Engineering', 'Agile', 'Scrum', 'DevOps', 'Architecture'],
    icon: 'Workflow',
    featured: false,
    createdAt: '2026-01-22',
    contentModule: () => import('./notesContent/sdlc'),
  },
  {
    id: 'software-testing',
    slug: 'software-testing',
    title: 'Software Testing',
    category: 'Software Engineering',
    description:
      'Software testing handbook: manual & automated testing, unit testing, integration, system testing, regression, boundary value analysis, test case design, bug lifecycles, and QA automation.',
    tags: ['Software Testing', 'QA', 'Software Engineering', 'Automation', 'Test Cases'],
    icon: 'ShieldCheck',
    featured: false,
    createdAt: '2026-01-25',
    contentModule: () => import('./notesContent/software-testing'),
  },
  {
    id: 'hr-interview-questions',
    slug: 'hr-interview-questions',
    title: 'HR Interview Questions',
    category: 'Interview Preparation',
    description:
      'Essential HR & behavioral interview preparation: STAR method (Situation, Task, Action, Result), standard questions, salary negotiation strategies, conflict resolution, and career growth tips.',
    tags: ['Interview', 'HR', 'Behavioral', 'Career', 'Soft Skills', 'STAR Method'],
    icon: 'Briefcase',
    featured: true,
    createdAt: '2026-01-20',
    contentModule: () => import('./notesContent/hr-interview-questions'),
  },
];

export function getNoteBySlug(slug) {
  return notes.find((n) => n.slug === slug || n.id === slug) ?? null;
}

export function getRelatedNotes(currentNote, limit = 3) {
  if (!currentNote) return [];
  return notes
    .filter((n) => n.id !== currentNote.id)
    .map((n) => {
      let score = 0;
      if (n.category === currentNote.category) score += 3;
      const commonTags = n.tags.filter((t) => currentNote.tags.includes(t));
      score += commonTags.length;
      return { note: n, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.note);
}
