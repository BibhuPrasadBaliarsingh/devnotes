// React course — data-driven content consumed by Course/Topic pages.
// To add a new course, create a sibling folder + index.js and register it in data/index.js.

export const reactCourse = {
  id: 'react',
  title: 'React',
  tagline: 'Build fast, component-based user interfaces.',
  description:
    'Learn React from the ground up — what it is, why it exists, how it compares to plain JavaScript and other frameworks, and the core ideas (JSX, the Virtual DOM, one-way data flow) that make it click.',
  level: 'Beginner → Intermediate',
  icon: 'Atom',
  accent: 'sky',
  chapters: [
    {
      id: 'react-introduction',
      title: 'React Introduction',
      topics: [
        {
          id: 'what-is-react',
          title: 'What is React?',
          summary: 'A JavaScript library for building fast, component-based user interfaces.',
          content: [
            { type: 'paragraph', text: 'React is a JavaScript library created by Facebook (now Meta) for building fast, scalable, and interactive user interfaces — especially single-page applications (SPAs). Instead of manipulating the page directly, you describe what the UI should look like, and React handles updating the browser for you.' },
            { type: 'heading', text: 'How it works, in short' },
            { type: 'list', ordered: false, items: [
              'You build the UI out of small, reusable pieces called components.',
              'Each component has its own logic and its own markup, written using JSX.',
              'React keeps an in-memory copy of the UI (the Virtual DOM) and only updates the real page where something actually changed.',
              'Data flows in one direction — from parent components down to children — which keeps applications predictable.',
            ]},
            { type: 'callout', variant: 'tip', title: 'Library, not a framework', text: 'React only handles the view layer. Routing, state management, and data fetching are typically added with separate libraries (React Router, Context/Redux, etc.), which keeps React itself small and flexible.' },
            { type: 'heading', text: 'Where React is used' },
            { type: 'list', ordered: false, items: [
              'Web applications and dashboards',
              'Mobile apps, via React Native',
              'E-commerce storefronts',
              'Admin panels and internal tools',
              'Games and interactive experiences built for the web',
            ]},
            { type: 'keypoints', items: [
              'React is a library, not a full framework.',
              'It only manages the view (UI) layer of an application.',
              'It is component-based, fast, and highly flexible.',
              'It follows a "learn once, write anywhere" philosophy (web, mobile, etc.).',
            ]},
          ],
        },
        {
          id: 'why-react',
          title: 'Why React?',
          summary: 'The problems with traditional UI development that React was built to solve.',
          content: [
            { type: 'paragraph', text: 'Before libraries like React existed, developers updated web pages by manipulating the DOM directly with vanilla JavaScript. That approach works for small pages, but breaks down as an application grows.' },
            { type: 'heading', text: 'Problems with traditional UI development' },
            { type: 'list', ordered: true, items: [
              'Direct DOM manipulation is slow — every change touches the real DOM, which is expensive.',
              'Code becomes tightly coupled and hard to maintain as the app grows.',
              'Reusing UI pieces is difficult, so the same markup gets duplicated repeatedly.',
              'Managing state and keeping the UI in sync with it becomes complicated.',
              'Full page reloads or heavy DOM updates slow large applications down.',
            ]},
            { type: 'heading', text: 'What React brings to the table' },
            { type: 'table', headers: ['Benefit', 'What it means'], rows: [
              ['Component-based', 'Build UIs from small, reusable, independent pieces.'],
              ['Virtual DOM', 'Only the parts of the page that changed are updated.'],
              ['Reusable code', 'Write a component once, use it anywhere.'],
              ['Built-in state tools', 'Hooks like useState and useEffect manage state cleanly.'],
              ['Large ecosystem', 'A huge community and library ecosystem (routing, forms, etc.).'],
              ['Cross-platform', 'React Native reuses the same mental model for mobile apps.'],
            ]},
            { type: 'callout', variant: 'note', title: 'Takeaway', text: 'React solves the biggest pain points of traditional UI development and helps teams build fast, scalable, maintainable, modern web applications.' },
          ],
        },
        {
          id: 'features-of-react',
          title: 'Features of React',
          summary: 'JSX, components, the Virtual DOM, one-way data flow, and more.',
          content: [
            { type: 'paragraph', text: 'React has a small set of core features that work together to make UI development simple, fast, and maintainable.' },
            { type: 'list', ordered: false, items: [
              'JSX — write HTML-like syntax directly inside JavaScript, making UI structure easy to read and write.',
              'Components — the UI is split into small, independent, reusable pieces, each with its own logic.',
              'Virtual DOM — React updates a lightweight in-memory copy of the DOM first, then applies only the necessary changes to the real page.',
              'One-way data flow — data flows from parent to child via props, which makes applications predictable and easier to debug.',
              'Reusability — a component built once (a button, a card) can be reused anywhere in the app.',
              'Declarative — you describe what the UI should look like; React figures out how to make that happen.',
              'Rich ecosystem — React Router, Redux/Context, Next.js, Tailwind CSS, and many more tools build on top of React.',
            ]},
            { type: 'code', language: 'jsx', title: 'A simple component', code: `function Greeting({ name }) {\n  return <h1 className="title">Hello, {name}!</h1>;\n}\n\nexport default Greeting;` },
            { type: 'callout', variant: 'tip', text: 'In short: React helps you build UI that is component-based, fast, scalable, and easy to maintain.' },
          ],
        },
        {
          id: 'react-vs-javascript',
          title: 'React vs JavaScript',
          summary: 'How building UI with React differs from plain (vanilla) JavaScript.',
          content: [
            { type: 'paragraph', text: 'React is a library built on top of JavaScript, not a replacement for it. The difference is in how each approaches building an interface.' },
            { type: 'table', headers: ['Aspect', 'React', 'Vanilla JavaScript'], rows: [
              ['Nature', 'A JavaScript library', 'A programming language'],
              ['Purpose', 'Used to build user interfaces', 'Used to add logic and interactivity'],
              ['DOM handling', 'Uses a Virtual DOM for efficient updates', 'Uses the real DOM directly; updates are slower'],
              ['UI development', 'Component-based approach', 'No built-in component concept'],
              ['Code reusability', 'High, through components and props', 'Difficult — needs manual functions/classes'],
              ['Data binding', 'One-way data flow', 'Two-way binding must be done manually'],
              ['Structure at scale', 'Well-organized as the app grows', 'Can get messy in large applications'],
            ]},
            { type: 'code', language: 'jsx', title: 'Same UI, two approaches', code: `// Vanilla JavaScript\nconst btn = document.getElementById('btn');\nlet count = 0;\nbtn.addEventListener('click', () => {\n  count++;\n  document.getElementById('count').innerText = count;\n});\n\n// React (JSX)\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Click Me</button>\n      <p>{count}</p>\n    </div>\n  );\n}` },
            { type: 'callout', variant: 'note', text: 'Key takeaway: JavaScript makes web pages interactive, but React helps you build modern, scalable, and efficient user interfaces on top of it.' },
          ],
        },
        {
          id: 'react-vs-angular-vs-vue',
          title: 'React vs Angular vs Vue',
          summary: 'A quick comparison of the three most popular front-end options.',
          content: [
            { type: 'paragraph', text: 'React, Angular, and Vue all solve the same broad problem — building interactive UIs — but make different trade-offs.' },
            { type: 'table', headers: ['Feature', 'React', 'Angular', 'Vue'], rows: [
              ['Type', 'JavaScript library', 'Full-fledged framework', 'Progressive framework'],
              ['Developed by', 'Meta', 'Google', 'Evan You'],
              ['Language', 'JavaScript (JSX)', 'TypeScript', 'JavaScript (templates)'],
              ['Data binding', 'One-way', 'Two-way', 'Two-way'],
              ['Learning curve', 'Easy to learn', 'Steeper — more concepts', 'Easy to moderate'],
              ['Best for', 'Flexible apps of any size', 'Large enterprise applications', 'Small to medium projects'],
            ]},
            { type: 'callout', variant: 'tip', title: 'When to choose which', text: 'Choose React for flexibility and a huge ecosystem. Choose Angular for large, structured, enterprise-level applications. Choose Vue for fast development and simplicity on small-to-medium projects.' },
          ],
        },
        {
          id: 'virtual-dom',
          title: 'Virtual DOM',
          summary: 'A lightweight in-memory copy of the DOM that makes React updates fast.',
          content: [
            { type: 'paragraph', text: 'The Virtual DOM is a lightweight JavaScript representation of the real DOM, kept in memory. React uses it to figure out exactly what changed, so it only touches the real page where necessary.' },
            { type: 'table', headers: ['Real DOM', 'Virtual DOM'], rows: [
              ['The actual DOM rendered by the browser', 'A lightweight copy of the real DOM'],
              ['Direct updates are expensive and slow', 'Updates are fast and efficient'],
              ['Every change can re-render large parts of the UI', 'Only the changed parts are updated'],
            ]},
            { type: 'heading', text: 'How an update happens' },
            { type: 'list', ordered: true, items: [
              'The user interacts with the UI (a click, typing, etc.).',
              'React updates the component\'s state.',
              'A new Virtual DOM tree is created in memory.',
              'React compares (diffs) the new tree against the previous one — this is called reconciliation.',
              'Only the real DOM nodes that actually changed are updated.',
              'The browser reflects the change on screen.',
            ]},
            { type: 'callout', variant: 'example', title: 'Diffing in practice', text: 'If a list re-renders and only one item\'s text changed, React updates just that item\'s DOM node instead of rebuilding the entire list.' },
            { type: 'keypoints', items: [
              'The Virtual DOM is a copy of the real DOM kept in memory.',
              'React diffs the old and new Virtual DOM trees to find changes.',
              'Only the changed parts are applied to the real DOM.',
              'Result: better performance and a smoother user experience.',
            ]},
          ],
        },
        {
          id: 'spa-vs-mpa',
          title: 'SPA vs MPA',
          summary: 'Single Page Applications vs Multi Page Applications.',
          content: [
            { type: 'paragraph', text: 'Web applications can be built in two broad ways: as a Single Page Application (SPA) or a Multi Page Application (MPA). React is most commonly used to build SPAs.' },
            { type: 'table', headers: ['Feature', 'SPA', 'MPA'], rows: [
              ['Definition', 'Loads a single page, updates content dynamically', 'Loads a new page from the server on every navigation'],
              ['Page load', 'Larger initial load, faster afterwards', 'Each page load is separate and slower'],
              ['Data fetching', 'Only the needed data is fetched, via an API', 'The entire HTML page is fetched again'],
              ['User experience', 'Smooth, app-like', 'Traditional website feel'],
              ['SEO', 'Needs extra setup (SSR/SSG)', 'SEO-friendly by default'],
              ['Good for', 'Dashboards, web apps, SaaS products', 'Blogs, news sites, simple e-commerce'],
            ]},
            { type: 'callout', variant: 'note', text: 'In short: SPAs give an app-like experience and speed, while MPAs are simpler and SEO-friendly by default.' },
          ],
        },
      ],
    },
  ],
};
