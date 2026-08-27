// Node.js course — data-driven content consumed by Course/Topic pages.

export const nodeCourse = {
  id: 'node',
  title: 'Node.js',
  tagline: 'JavaScript on the server.',
  description:
    'Understand what Node.js actually is, how its runtime and event loop work, how modules and npm fit together, and how to structure a first project.',
  level: 'Beginner → Intermediate',
  icon: 'Hexagon',
  accent: 'emerald',
  chapters: [
    {
      id: 'introduction-to-nodejs',
      title: 'Introduction to Node.js',
      topics: [
        {
          id: 'what-is-nodejs',
          title: 'What is Node.js?',
          summary: 'A JavaScript runtime that lets you run JS outside the browser.',
          content: [
            { type: 'paragraph', text: 'Node.js is a JavaScript runtime environment, not a programming language. It lets JavaScript run outside the browser — on a server, a laptop, or anywhere else — by pairing the language with Google Chrome\'s V8 engine plus a set of built-in APIs.' },
            { type: 'callout', variant: 'note', title: 'Node.js is not a language', text: 'JavaScript is the language. Node.js is the environment that provides everything needed to run that language outside a browser: the engine, built-in modules, and an event loop.' },
            { type: 'heading', text: 'Key features' },
            { type: 'list', ordered: false, items: [
              'Fast — built on the V8 engine, which compiles JS to machine code.',
              'Event-driven & non-blocking I/O — handles many operations concurrently without waiting.',
              'Scalable — well suited to large-scale, high-throughput applications.',
              'JavaScript everywhere — the same language on client and server.',
              'Open source with a huge ecosystem via npm.',
            ]},
            { type: 'code', language: 'javascript', title: 'Hello World in Node.js', code: `// app.js\nconsole.log("Hello from Node.js!");\nconsole.log("Welcome to Node.js World");\n\n// Run it:\n// $ node app.js` },
          ],
        },
        {
          id: 'nodejs-architecture',
          title: 'Node.js Architecture',
          summary: 'Event-driven, non-blocking I/O with a single-threaded event loop.',
          content: [
            { type: 'paragraph', text: 'Node.js follows an event-driven, non-blocking I/O model. A single-threaded event loop handles many connections concurrently — it never waits for one operation to finish before starting the next.' },
            { type: 'list', ordered: true, items: [
              'A client (browser or app) sends a request to the Node.js server.',
              'Node.js dispatches I/O work (file reads, database queries, network calls) without blocking.',
              'While that work happens in the background, Node.js moves on to handle other requests.',
              'When the I/O finishes, its callback runs and a response is returned.',
            ]},
            { type: 'callout', variant: 'tip', text: 'Node.js never waits for I/O to complete. It moves on to the next task and handles the result later via a callback, promise, or async/await.' },
          ],
        },
        {
          id: 'nodejs-vs-browser',
          title: 'Node.js vs Browser JavaScript',
          summary: 'Same language, very different environments and capabilities.',
          content: [
            { type: 'paragraph', text: 'Node.js and browser JavaScript both run on the V8 engine, but they expose very different sets of APIs because they solve different problems.' },
            { type: 'table', headers: ['Feature', 'Node.js', 'Browser JavaScript'], rows: [
              ['Environment', 'Server-side', 'Client-side'],
              ['Access to DOM', 'No', 'Yes'],
              ['Built-in modules', 'Many (fs, http, path, ...)', 'Few (mostly Web APIs)'],
              ['Typical use case', 'Backend, APIs, servers', 'Frontend UI, interaction'],
              ['I/O model', 'Non-blocking, event-driven', 'Single-threaded, browser-managed'],
            ]},
          ],
        },
        {
          id: 'npm-and-package-json',
          title: 'npm & package.json',
          summary: "Node's package manager, and the file at the heart of every project.",
          content: [
            { type: 'paragraph', text: 'npm (Node Package Manager) is the default package manager for Node.js. It downloads packages, manages dependencies, and lets you share and reuse code.' },
            { type: 'table', headers: ['Command', 'Description', 'Example'], rows: [
              ['npm init', 'Create a new package.json', 'npm init -y'],
              ['npm install <pkg>', 'Install a package', 'npm install express'],
              ['npm uninstall <pkg>', 'Remove a package', 'npm uninstall express'],
              ['npm list', 'List installed packages', 'npm list'],
              ['npm update', 'Update packages', 'npm update'],
            ]},
            { type: 'heading', text: 'package.json — the heart of every project' },
            { type: 'code', language: 'json', code: `{\n  "name": "my-first-app",\n  "version": "1.0.0",\n  "description": "My first Node.js application",\n  "main": "app.js",\n  "scripts": {\n    "start": "node app.js"\n  },\n  "author": "Your Name",\n  "license": "ISC"\n}` },
            { type: 'keypoints', items: [
              'package.json stores the project name, version, dependencies, and scripts.',
              'Always keep Node.js on an up-to-date LTS (Long Term Support) version for stability.',
              'Run node -v and npm -v to check installed versions.',
            ]},
          ],
        },
      ],
    },
    {
      id: 'core-nodejs-concepts',
      title: 'Core Node.js Concepts',
      topics: [
        {
          id: 'nodejs-runtime-v8',
          title: 'Node.js Runtime & the V8 Engine',
          summary: 'What a runtime is, and how V8 executes JavaScript so quickly.',
          content: [
            { type: 'paragraph', text: 'A runtime is an environment that provides everything a program needs to run. For Node.js, that means letting JavaScript run outside the browser — including the JS engine, built-in APIs, and an event loop.' },
            { type: 'heading', text: 'The V8 engine' },
            { type: 'list', ordered: false, items: [
              "V8 is Google's open-source JavaScript engine, written in C++.",
              'It compiles JavaScript directly to machine code for fast execution.',
              "It's the same engine that powers Google Chrome.",
            ]},
            { type: 'heading', text: 'Components of the Node.js runtime' },
            { type: 'list', ordered: true, items: [
              'V8 engine — executes the JavaScript code.',
              'Built-in modules & APIs — fs, path, http, os, events, and more.',
              "Event loop — handles asynchronous operations without blocking the main thread.",
              'Callback queue — stores callbacks waiting to run.',
              'libuv (thread pool) — handles background tasks like file I/O and DNS lookups.',
            ]},
            { type: 'callout', variant: 'tip', title: 'Key point', text: 'Node.js is single-threaded but non-blocking. It uses the event loop to handle many operations concurrently without spawning a thread per request.' },
          ],
        },
        {
          id: 'nodejs-modules',
          title: 'Node.js Modules',
          summary: 'Breaking a program into small, reusable, maintainable files.',
          content: [
            { type: 'paragraph', text: 'A module is a reusable piece of code. Node.js has a powerful module system that helps break a program into small, manageable files — improving reusability, readability, and maintainability.' },
            { type: 'table', headers: ['Type', 'Description', 'Example'], rows: [
              ['Built-in modules', 'Provided by Node.js itself', 'fs, path, os, http, events'],
              ['Custom modules', 'Created by you, exported for reuse', './math.js'],
            ]},
            { type: 'code', language: 'javascript', title: 'Creating and using a custom module', code: `// math.js\nconst add = (a, b) => a + b;\nconst sub = (a, b) => a - b;\nmodule.exports = { add, sub };\n\n// app.js\nconst math = require('./math');\nconsole.log(math.add(5, 3)); // 8\nconsole.log(math.sub(5, 3)); // 2` },
          ],
        },
        {
          id: 'commonjs-modules',
          title: 'CommonJS Modules',
          summary: "require(), exports, and module.exports — Node's default module system.",
          content: [
            { type: 'paragraph', text: "CommonJS is the default module system used in Node.js. It lets you split code across multiple files, exporting values from one module and importing (require-ing) them in another." },
            { type: 'code', language: 'javascript', title: 'require() syntax', code: `const moduleName = require('./moduleFile');` },
            { type: 'heading', text: 'exports vs module.exports' },
            { type: 'table', headers: ['exports', 'module.exports'], rows: [
              ['A reference object provided by Node.js', 'The actual object that gets exported'],
              ['You can add properties onto it', 'You can assign anything — value, function, object, class'],
              ['Shorthand for module.exports', 'Reassigning it completely replaces exports'],
            ]},
            { type: 'callout', variant: 'warning', title: 'Common mistake', text: 'Reassigning exports directly (exports = something) breaks the link to module.exports. When exporting a single value or function, assign to module.exports instead.' },
            { type: 'keypoints', items: [
              'require() reads a module file, executes it, and returns whatever it exports.',
              "If a file exports nothing, require() returns an empty object.",
              'Each module has its own private scope — variables and functions are not global by default.',
            ]},
          ],
        },
      ],
    },
  ],
};
