export const nodejsContent = {
  id: 'nodejs',
  slug: 'nodejs',
  title: 'Node.js',
  subtitle: 'Backend Runtime & Server Guide',
  category: 'Web Development',
  description:
    'Node.js runtime handbook: V8 engine, Event Loop phases, asynchronous non-blocking I/O, Buffer, Streams, CommonJS vs ESM, cluster module, and backend architecture.',
  sections: [
    {
      id: 'introduction-to-nodejs',
      title: '1. Introduction to Node.js',
      summary:
        'Node.js is a JavaScript runtime built around the V8 engine that enables JavaScript to run outside the browser with asynchronous, event-driven I/O.',
      content: [
        {
          type: 'paragraph',
          text: 'Node.js is a cross-platform JavaScript runtime environment built on the V8 JavaScript engine. It provides JavaScript with APIs for networking, files, processes, streams, cryptography, and other server-side operations. Node.js is especially effective for I/O-heavy applications because it uses asynchronous APIs and an event-driven execution model.',
        },
        {
          type: 'heading',
          text: 'V8 Engine',
        },
        {
          type: 'paragraph',
          text: 'V8 is the JavaScript engine used by Node.js. It parses and executes JavaScript and uses techniques such as just-in-time compilation and optimization. Node.js adds runtime APIs around V8 so JavaScript can interact with the operating system and network.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `console.log('Running JavaScript with Node.js');

const version = process.version;
console.log('Node version:', version);`,
        },
        {
          type: 'heading',
          text: 'Non-Blocking I/O',
        },
        {
          type: 'paragraph',
          text: 'Node.js APIs commonly provide asynchronous versions of I/O operations. Instead of blocking JavaScript execution while waiting for a file, database, or network operation to finish, Node.js can continue processing other work and later execute a callback or promise reaction when the operation completes.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fs = require('node:fs');

console.log('Before reading');

fs.readFile('./data.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log('File:', data);
});

console.log('After starting read');`,
        },
        {
          type: 'heading',
          text: 'Common Node.js Use Cases',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'REST and HTTP APIs.',
            'Real-time applications using WebSockets or other messaging mechanisms.',
            'Backend services and microservices.',
            'Command-line tools and automation scripts.',
            'File-processing and streaming applications.',
            'Server-side rendering and application backends.',
            'Build tools and development servers.',
            'Proxy and gateway services.',
          ],
        },
        {
          type: 'heading',
          text: 'Node.js vs Browser JavaScript',
        },
        {
          type: 'table',
          headers: ['Feature', 'Node.js', 'Browser'],
          rows: [
            ['JavaScript Engine', 'Typically V8', 'Depends on browser'],
            ['DOM', 'Not available by default', 'Available'],
            ['File System', 'Available through Node APIs', 'Restricted by browser security model'],
            ['HTTP Server', 'Can create servers directly', 'Does not normally create TCP/HTTP servers'],
            ['process', 'Available', 'Not normally available'],
            ['window', 'Not available by default', 'Available'],
            ['Primary Use', 'Backend, tooling, services', 'Web UI and browser applications'],
          ],
        },
        {
          type: 'heading',
          text: 'Simple Node.js Program',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('Node.js'));`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Important',
          text: 'Node.js is not a programming language. JavaScript is the language, V8 is the JavaScript engine, and Node.js is a runtime environment that provides additional APIs and execution capabilities.',
        },
      ],
    },

    {
      id: 'event-loop-in-depth',
      title: '2. Event Loop In Depth',
      summary:
        'The Node.js event loop coordinates asynchronous callbacks and allows a JavaScript process to handle many I/O operations without blocking the main JavaScript execution thread.',
      content: [
        {
          type: 'paragraph',
          text: 'The Node.js event loop is responsible for coordinating asynchronous operations and callback execution. JavaScript execution itself runs on the main thread, while Node.js and the operating system can perform or delegate many I/O operations outside the JavaScript call stack. When work is ready, callbacks are scheduled for execution through the event-loop mechanisms.',
        },
        {
          type: 'heading',
          text: 'Event Loop Phases',
        },
        {
          type: 'paragraph',
          text: 'Node.js documents several event-loop phases. The commonly described phases are timers, pending callbacks, idle/prepare, poll, check, and close callbacks. Each phase has a queue of callbacks associated with specific types of work.',
        },
        {
          type: 'table',
          headers: ['Phase', 'Purpose'],
          rows: [
            [
              'Timers',
              'Executes callbacks scheduled by setTimeout() and setInterval() when their timing conditions are met.',
            ],
            ['Pending Callbacks', 'Executes certain deferred system-level I/O callbacks.'],
            ['Idle / Prepare', 'Internal Node.js phase used by the runtime.'],
            ['Poll', 'Retrieves new I/O events and executes relevant I/O callbacks.'],
            ['Check', 'Executes callbacks scheduled with setImmediate().'],
            [
              'Close Callbacks',
              'Executes callbacks for close events, such as socket close handlers.',
            ],
          ],
        },
        {
          type: 'heading',
          text: 'Timers',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `setTimeout(() => {
  console.log('Timer callback');
}, 0);

console.log('Synchronous code');`,
        },
        {
          type: 'heading',
          text: 'setImmediate',
        },
        {
          type: 'paragraph',
          text: "setImmediate schedules a callback to run during the check phase. Its ordering relative to timers can depend on where the scheduling occurs, so code should not rely on a universal ordering between setTimeout(..., 0) and setImmediate() outside appropriate contexts.",
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fs = require('node:fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  setImmediate(() => {
    console.log('setImmediate');
  });
});`,
        },
        {
          type: 'heading',
          text: 'Microtasks',
        },
        {
          type: 'paragraph',
          text: 'Promise reactions and process.nextTick callbacks are handled through mechanisms associated with microtask processing rather than being ordinary event-loop phases. process.nextTick has particularly high priority in Node.js and excessive use can prevent the event loop from progressing to other work.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `console.log('start');

Promise.resolve().then(() => {
  console.log('promise');
});

process.nextTick(() => {
  console.log('nextTick');
});

console.log('end');

// Output: start → end → nextTick → promise`,
        },
        {
          type: 'heading',
          text: 'Non-Blocking Example',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fs = require('node:fs');

console.log('1');

fs.readFile('./large-file.txt', 'utf8', () => {
  console.log('2 - file finished');
});

console.log('3');

// Output: 1 → 3 → 2`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do Not Block the Event Loop',
          text: 'CPU-heavy synchronous JavaScript can block the event loop and delay every other request handled by that process. Expensive CPU work should be optimized, moved to worker threads, distributed to other processes, or otherwise isolated when appropriate.',
        },
      ],
    },

    {
      id: 'modules-system',
      title: '3. Modules System',
      summary:
        'Node.js supports both CommonJS and ECMAScript modules, allowing applications to split code into reusable files with explicit dependencies.',
      content: [
        {
          type: 'heading',
          text: 'CommonJS',
        },
        {
          type: 'paragraph',
          text: 'CommonJS is the traditional Node.js module system. It commonly uses require() to import modules and module.exports or exports to expose values.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// math.js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };

// app.js
const { add, multiply } = require('./math');

console.log(add(10, 20));      // 30
console.log(multiply(5, 4));   // 20`,
        },
        {
          type: 'heading',
          text: 'ECMAScript Modules',
        },
        {
          type: 'paragraph',
          text: 'ECMAScript Modules, commonly called ESM, use import and export syntax. A Node.js project can use ESM through configuration such as a package.json type field or appropriate module file extensions.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// math.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// app.js
import { add, multiply } from './math.js';

console.log(add(10, 20));
console.log(multiply(5, 4));`,
        },
        {
          type: 'heading',
          text: 'Default Export',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// app.js
import User from './user.js';

const user = new User('Bibhu');
console.log(user.name);`,
        },
        {
          type: 'table',
          headers: ['Feature', 'CommonJS', 'ES Modules'],
          rows: [
            ['Import', 'require()', 'import'],
            ['Export', 'module.exports / exports', 'export'],
            ['Default Export', 'module.exports = value', 'export default value'],
            ['File Interpretation', 'Traditional Node.js module format', 'ES module semantics'],
            ['Static Import Syntax', 'No', 'Yes'],
            [
              'Typical Modern Usage',
              'Existing Node.js applications',
              'New applications and standards-based modules',
            ],
          ],
        },
        {
          type: 'heading',
          text: 'Built-in Modules',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const path = require('node:path');
const os   = require('node:os');

console.log(path.join('src', 'controllers', 'user.js'));
console.log(os.platform());
console.log(os.cpus().length);`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Module Choice',
          text: 'Choose one module strategy for a project where practical and configure the project consistently. When maintaining an existing codebase, follow its established module conventions unless there is a deliberate migration plan.',
        },
      ],
    },

    {
      id: 'file-system-and-streams',
      title: '4. File System & Streams',
      summary:
        'Node.js provides file-system APIs and streams for efficiently reading, writing, transforming, and transferring data.',
      content: [
        {
          type: 'heading',
          text: 'File System Module',
        },
        {
          type: 'paragraph',
          text: 'The node:fs module provides APIs for interacting with files and directories. Both synchronous and asynchronous APIs exist, but asynchronous APIs are generally preferred in servers so that file operations do not unnecessarily block the event loop.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fs = require('node:fs/promises');

async function readFile() {
  try {
    const data = await fs.readFile('./data.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Read failed:', error);
  }
}

readFile();`,
        },
        {
          type: 'heading',
          text: 'Writing Files',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fs = require('node:fs/promises');

async function writeFile() {
  await fs.writeFile('./output.txt', 'Hello from Node.js', 'utf8');
  console.log('File written');
}

writeFile().catch(console.error);`,
        },
        {
          type: 'heading',
          text: 'What Are Streams?',
        },
        {
          type: 'paragraph',
          text: 'Streams process data incrementally instead of requiring the entire dataset to be loaded into memory at once. They are useful for large files, HTTP request and response bodies, compression, media, and other continuous data sources.',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Readable streams provide data that can be consumed.',
            'Writable streams accept data.',
            'Duplex streams can both read and write.',
            'Transform streams process data as it passes through.',
          ],
        },
        {
          type: 'heading',
          text: 'Readable Stream',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fs = require('node:fs');

const readable = fs.createReadStream('./large-file.txt', {
  encoding: 'utf8',
});

readable.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length);
});

readable.on('end', () => {
  console.log('Finished reading');
});`,
        },
        {
          type: 'heading',
          text: 'Writable Stream',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fs = require('node:fs');

const writable = fs.createWriteStream('./output.txt');

writable.write('First line\\n');
writable.write('Second line\\n');
writable.end('Done\\n');`,
        },
        {
          type: 'heading',
          text: 'Piping Streams',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fs = require('node:fs');

const input  = fs.createReadStream('./input.txt');
const output = fs.createWriteStream('./copy.txt');

input.pipe(output);

output.on('finish', () => {
  console.log('Copy complete');
});`,
        },
        {
          type: 'heading',
          text: 'Buffer',
        },
        {
          type: 'paragraph',
          text: 'Buffer is a Node.js type used to represent a fixed-length sequence of bytes. Buffers are important when handling binary data such as files, network packets, images, and encoded data.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const buffer = Buffer.from('Hello Node.js');

console.log(buffer);
console.log(buffer.toString('utf8'));

const binary = Buffer.alloc(4);
binary[0] = 72;
binary[1] = 105;
console.log(binary.toString());`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Streaming Advantage',
          text: 'For large data, streams can reduce peak memory usage because the application can process chunks incrementally rather than loading the complete dataset into memory.',
        },
      ],
    },

    {
      id: 'http-module',
      title: '5. HTTP Module',
      summary:
        'Node.js provides the built-in HTTP module for creating HTTP servers, reading requests, and producing responses without requiring a framework.',
      content: [
        {
          type: 'heading',
          text: 'Creating a Basic HTTP Server',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
        },
        {
          type: 'heading',
          text: 'Request Object',
        },
        {
          type: 'paragraph',
          text: 'The request object provides information about the incoming HTTP request, including its method, URL, headers, and readable request body stream.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const http = require('node:http');

const server = http.createServer((req, res) => {
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('User Agent:', req.headers['user-agent']);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ method: req.method, url: req.url }));
});

server.listen(3000);`,
        },
        {
          type: 'heading',
          text: 'Routing',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const http = require('node:http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home');
    return;
  }

  if (req.method === 'GET' && req.url === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([{ id: 1, name: 'Bibhu' }]));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Route not found' }));
});

server.listen(3000);`,
        },
        {
          type: 'heading',
          text: 'Reading a Request Body',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const http = require('node:http');

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.writeHead(405);
    res.end('Method Not Allowed');
    return;
  }

  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User received', data }));
    } catch {
      res.writeHead(400);
      res.end('Invalid JSON');
    }
  });
});

server.listen(3000);`,
        },
        {
          type: 'heading',
          text: 'Common HTTP Status Codes',
        },
        {
          type: 'table',
          headers: ['Code', 'Meaning', 'Typical Use'],
          rows: [
            ['200', 'OK', 'Successful request'],
            ['201', 'Created', 'Resource successfully created'],
            ['204', 'No Content', 'Successful operation with no response body'],
            ['400', 'Bad Request', 'Invalid client request'],
            ['401', 'Unauthorized', 'Authentication is required or invalid'],
            ['403', 'Forbidden', 'Request is understood but not permitted'],
            ['404', 'Not Found', 'Requested resource does not exist'],
            ['409', 'Conflict', 'Request conflicts with current resource state'],
            ['429', 'Too Many Requests', 'Rate limit exceeded'],
            ['500', 'Internal Server Error', 'Unexpected server-side failure'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Frameworks',
          text: 'Frameworks such as Express build routing, middleware, request parsing, and other conveniences on top of Node.js HTTP capabilities. Understanding the underlying HTTP module helps when debugging framework behavior.',
        },
      ],
    },

    {
      id: 'npm-and-package-management',
      title: '6. npm & Package Management',
      summary:
        'npm manages Node.js project metadata, dependencies, scripts, versions, and package installation.',
      content: [
        {
          type: 'heading',
          text: 'package.json',
        },
        {
          type: 'paragraph',
          text: 'package.json describes a Node.js project. It commonly contains the project name, version, scripts, dependencies, development dependencies, module configuration, and other metadata.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `{
  "name": "my-api",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev":   "node --watch src/server.js",
    "start": "node src/server.js",
    "test":  "node --test"
  },
  "dependencies": {
    "express": "^5.0.0"
  },
  "devDependencies": {
    "eslint": "^9.0.0"
  }
}`,
        },
        {
          type: 'heading',
          text: 'Installing Packages',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `npm install express       # runtime dependency
npm install -D eslint    # dev dependency
npm uninstall express    # remove package
npm update               # update all packages`,
        },
        {
          type: 'heading',
          text: 'dependencies vs devDependencies',
        },
        {
          type: 'table',
          headers: ['Field', 'Purpose', 'Examples'],
          rows: [
            [
              'dependencies',
              'Packages required by the application at runtime',
              'express, mongoose, jsonwebtoken',
            ],
            [
              'devDependencies',
              'Packages primarily needed during development or build/test workflows',
              'eslint, prettier, test tools',
            ],
            ['scripts', 'Named commands for project workflows', 'dev, start, test, build'],
          ],
        },
        {
          type: 'heading',
          text: 'Semantic Versioning',
        },
        {
          type: 'paragraph',
          text: 'Semantic Versioning commonly uses MAJOR.MINOR.PATCH. A major version can indicate breaking changes, a minor version generally adds backward-compatible functionality, and a patch version generally contains backward-compatible fixes.',
        },
        {
          type: 'table',
          headers: ['Range', 'Example', 'General Meaning'],
          rows: [
            ['Exact', '1.2.3', 'Install exactly this version'],
            [
              'Caret',
              '^1.2.3',
              'Allow compatible updates within the major version under semver rules',
            ],
            [
              'Tilde',
              '~1.2.3',
              'Allow patch-level updates within the minor version under semver rules',
            ],
            [
              'Latest',
              'npm install package',
              'Install the version selected by npm according to package metadata and constraints',
            ],
          ],
        },
        {
          type: 'heading',
          text: 'npm Scripts',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `{
  "scripts": {
    "dev":   "node --watch src/server.js",
    "start": "node src/server.js",
    "lint":  "eslint .",
    "test":  "node --test"
  }
}`,
        },
        {
          type: 'heading',
          text: 'package-lock.json',
        },
        {
          type: 'paragraph',
          text: 'package-lock.json records the dependency resolution used by npm, including package versions and dependency relationships. It helps provide reproducible installations and should normally be committed to application repositories.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Production Practice',
          text: 'Avoid installing unnecessary packages. Every dependency increases maintenance, security, and update considerations. Review package ownership, activity, licensing, transitive dependencies, and security history before adding important dependencies.',
        },
      ],
    },

    {
      id: 'environment-and-config',
      title: '7. Environment & Config',
      summary:
        'Environment variables and configuration layers allow applications to separate deployment-specific settings from source code.',
      content: [
        {
          type: 'heading',
          text: 'process.env',
        },
        {
          type: 'paragraph',
          text: 'Node.js exposes environment variables through process.env. Values provided by the environment are strings and should be parsed or validated when an application expects another type.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const port    = Number(process.env.PORT) || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';

console.log({ port, nodeEnv });`,
        },
        {
          type: 'heading',
          text: 'dotenv',
        },
        {
          type: 'paragraph',
          text: 'The dotenv package can load variables from a local .env file into process.env. Modern Node.js versions also provide built-in environment-file capabilities, so projects should choose the approach appropriate for their supported Node.js version and deployment setup.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `# .env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/myapp

// server.js
require('dotenv').config();

console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);`,
        },
        {
          type: 'heading',
          text: 'Configuration Validation',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function requireEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      \`Missing required environment variable: \${name}\`
    );
  }

  return value;
}

const databaseUrl = requireEnv('DATABASE_URL');
console.log(databaseUrl);`,
        },
        {
          type: 'heading',
          text: 'NODE_ENV',
        },
        {
          type: 'paragraph',
          text: "NODE_ENV is a conventional environment variable used by many Node.js applications and libraries to distinguish deployment modes such as development and production. It should be used deliberately rather than becoming a collection of arbitrary behavior switches.",
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const environment = process.env.NODE_ENV || 'development';

if (environment === 'production') {
  console.log('Production configuration');
} else {
  console.log('Development configuration');
}`,
        },
        {
          type: 'heading',
          text: 'Configuration Best Practices',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Never commit passwords, private API keys, database credentials, or signing secrets to source control.',
            'Provide a documented list of required environment variables.',
            'Validate required configuration during application startup.',
            'Use different credentials and resources for development, testing, and production.',
            'Keep secrets in a dedicated secret-management system when appropriate for production deployments.',
            'Treat environment variables exposed to frontend bundles as potentially public.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Never Commit Secrets',
          text: 'A .env file containing credentials should generally be excluded from source control. If a secret has already been committed or exposed, removing the file alone is not enough; rotate or revoke the affected credential.',
        },
      ],
    },

    {
      id: 'cluster-and-worker-threads',
      title: '8. Cluster & Worker Threads',
      summary:
        'Node.js provides multiple concurrency and scaling mechanisms, including worker threads for CPU-intensive JavaScript and cluster processes for multiple server processes.',
      content: [
        {
          type: 'heading',
          text: 'Why Scale Node.js?',
        },
        {
          type: 'paragraph',
          text: 'A single Node.js process has one primary JavaScript execution thread. Applications can use multiple processes or worker threads to take advantage of additional CPU resources or isolate expensive work.',
        },
        {
          type: 'heading',
          text: 'Cluster Module',
        },
        {
          type: 'paragraph',
          text: 'The cluster module can create multiple Node.js processes that share server workloads. Each worker is a separate process with its own memory and event loop.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const cluster = require('node:cluster');
const http    = require('node:http');
const os      = require('node:os');

if (cluster.isPrimary) {
  const workers = os.availableParallelism();

  console.log(\`Primary process: \${process.pid}\`);

  for (let i = 0; i < workers; i += 1) {
    cluster.fork();
  }
} else {
  const server = http.createServer((req, res) => {
    res.end(\`Handled by \${process.pid}\`);
  });

  server.listen(3000);
}`,
        },
        {
          type: 'heading',
          text: 'Worker Threads',
        },
        {
          type: 'paragraph',
          text: 'The worker_threads module allows JavaScript to execute in additional threads. Worker threads are particularly useful for CPU-intensive JavaScript work that would otherwise block the main event loop.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// main.js
const { Worker } = require('node:worker_threads');

const worker = new Worker('./worker.js');

worker.on('message', (result) => {
  console.log('Result:', result);
});

worker.on('error', (error) => {
  console.error('Worker error:', error);
});

// worker.js
const { parentPort } = require('node:worker_threads');

let total = 0;
for (let i = 0; i < 1e8; i += 1) {
  total += i;
}

parentPort.postMessage(total);`,
        },
        {
          type: 'heading',
          text: 'child_process',
        },
        {
          type: 'paragraph',
          text: 'The child_process module can create separate operating-system processes. Depending on the API, a child process can execute another program or Node.js process and communicate with the parent through standard streams or IPC.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const { exec } = require('node:child_process');

exec('node --version', (error, stdout, stderr) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log('Version:', stdout.trim());

  if (stderr) {
    console.error(stderr);
  }
});`,
        },
        {
          type: 'table',
          headers: ['Technology', 'Execution Model', 'Best Fit'],
          rows: [
            ['Cluster', 'Multiple Node.js processes', 'Scaling network servers across CPU resources'],
            [
              'Worker Threads',
              'Multiple JavaScript threads',
              'CPU-intensive JavaScript computations',
            ],
            [
              'child_process',
              'Separate OS process',
              'Running external commands or isolated processes',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Scaling Architecture',
          text: 'In production, horizontal scaling across multiple application instances is also common. A load balancer or orchestration platform can distribute traffic across processes or machines.',
        },
      ],
    },

    {
      id: 'error-handling-and-debugging',
      title: '9. Error Handling & Debugging',
      summary:
        'Reliable Node.js services distinguish expected operational failures from programmer errors and provide structured logging, cleanup, and recovery behavior.',
      content: [
        {
          type: 'heading',
          text: 'try/catch',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function parseUser(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.error('Invalid JSON:', error.message);
    return null;
  }
}

console.log(parseUser('{invalid}')); // null`,
        },
        {
          type: 'heading',
          text: 'Async Error Handling',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function loadUser(id) {
  try {
    const response = await fetch(
      \`https://api.example.com/users/\${id}\`
    );

    if (!response.ok) {
      throw new Error(\`Request failed: \${response.status}\`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed:', error);
    throw error;
  }
}`,
        },
        {
          type: 'heading',
          text: 'EventEmitter Errors',
        },
        {
          type: 'paragraph',
          text: 'Many Node.js APIs use EventEmitter. For EventEmitters, an error event should be handled appropriately. An EventEmitter that emits an error event without an appropriate listener can cause the Node.js process to terminate.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('error', (error) => {
  console.error('Emitter error:', error.message);
});

emitter.emit('error', new Error('Something went wrong'));`,
        },
        {
          type: 'heading',
          text: 'uncaughtException',
        },
        {
          type: 'paragraph',
          text: 'uncaughtException is emitted when an exception reaches the event loop without being caught. It should not generally be treated as a normal application-level recovery mechanism. After an uncaught exception, the process may be in an unreliable state, so applications commonly perform minimal synchronous cleanup, log the failure, and allow a process manager to restart the process.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  // Perform minimal synchronous cleanup if required.
  process.exit(1);
});`,
        },
        {
          type: 'heading',
          text: 'unhandledRejection',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason);
});`,
        },
        {
          type: 'heading',
          text: 'Debugging with the Inspector',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `# Start with inspector
node --inspect server.js

# Break immediately on startup
node --inspect-brk server.js`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Error Strategy',
          text: 'Do not catch every error and continue blindly. Decide whether the error is expected and recoverable, should be returned to the client, should trigger a retry, or indicates a process-level failure requiring controlled restart.',
        },
      ],
    },

    {
      id: 'security-best-practices',
      title: '10. Security Best Practices',
      summary:
        'Secure Node.js applications validate untrusted input, control access, protect secrets, limit abuse, and reduce common application vulnerabilities.',
      content: [
        {
          type: 'heading',
          text: 'Input Validation',
        },
        {
          type: 'paragraph',
          text: 'All data received from clients should be treated as untrusted. Validate type, format, length, range, and business rules before using input in application logic, database queries, commands, or external requests.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function validateUserInput(body) {
  if (typeof body.email !== 'string' || !body.email.includes('@')) {
    throw new Error('Invalid email');
  }

  if (typeof body.age !== 'number' || body.age < 18) {
    throw new Error('Invalid age');
  }

  return {
    email: body.email.trim(),
    age: body.age,
  };
}`,
        },
        {
          type: 'heading',
          text: 'Rate Limiting',
        },
        {
          type: 'paragraph',
          text: 'Rate limiting restricts how frequently a client can perform an operation. It helps reduce brute-force attempts, abusive traffic, accidental request floods, and resource exhaustion.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
});

app.use('/api', limiter);`,
        },
        {
          type: 'heading',
          text: 'Helmet',
        },
        {
          type: 'paragraph',
          text: "Helmet is a collection of Express middleware that can set various HTTP security-related response headers. Its configuration should be reviewed for the application's actual requirements.",
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.json({ message: 'Secure API' });
});

app.listen(3000);`,
        },
        {
          type: 'heading',
          text: 'Password Security',
        },
        {
          type: 'paragraph',
          text: 'Passwords should never be stored as plaintext. Use a password hashing algorithm designed for password storage, such as Argon2id or bcrypt, with appropriate parameters and per-password salts.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import bcrypt from 'bcrypt';

const password = 'user-password';

const hash    = await bcrypt.hash(password, 12);
const isValid = await bcrypt.compare(password, hash);

console.log(isValid); // true`,
        },
        {
          type: 'heading',
          text: 'Common Vulnerabilities',
        },
        {
          type: 'table',
          headers: ['Risk', 'Example', 'Protection'],
          rows: [
            [
              'Injection',
              'Untrusted input changes a database query',
              'Parameterized queries, safe ORM APIs, validation',
            ],
            [
              'Broken Authentication',
              'Weak credential or session handling',
              'Strong password hashing, secure sessions, MFA where appropriate',
            ],
            [
              'Sensitive Data Exposure',
              'Secrets returned in API responses',
              'Data minimization and access controls',
            ],
            [
              'XSS',
              'Untrusted content interpreted as executable HTML/JS',
              'Context-aware output encoding and appropriate security policies',
            ],
            [
              'CSRF',
              'Unauthorized state-changing browser request',
              'Appropriate CSRF defenses for cookie-based authentication',
            ],
            [
              'DoS',
              'Expensive requests exhaust resources',
              'Rate limits, input limits, timeouts, queues, and infrastructure controls',
            ],
            [
              'Path Traversal',
              'User input accesses unintended files',
              'Canonicalization, allowlists, safe path handling',
            ],
            [
              'Command Injection',
              'Untrusted input reaches shell commands',
              'Avoid shell execution with user input; use safe APIs and strict validation',
            ],
          ],
        },
        {
          type: 'heading',
          text: 'Secure Cookies',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `res.cookie('session', sessionToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 60 * 60 * 1000,
});`,
        },
        {
          type: 'heading',
          text: 'Security Checklist',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Validate and constrain all external input.',
            'Use HTTPS in production.',
            'Never hard-code secrets in source code.',
            'Hash passwords using an appropriate password-hashing algorithm.',
            'Use secure cookie attributes when cookies contain authentication information.',
            'Apply authentication and authorization checks consistently.',
            'Use rate limiting for sensitive or abuse-prone endpoints.',
            'Set request body and upload size limits.',
            'Keep dependencies updated and audit them regularly.',
            'Avoid exposing stack traces and internal implementation details to clients.',
            'Use least-privilege permissions for databases, files, and cloud resources.',
            'Log security-relevant events without logging passwords, tokens, or other sensitive secrets.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Security Rule',
          text: 'Never trust data simply because it came from your own frontend. Attackers can call backend APIs directly and can modify every request sent by a browser.',
        },
      ],
    },

    {
      id: 'express-and-backend-architecture',
      title: '11. Backend Architecture with Node.js',
      summary:
        'A maintainable Node.js backend separates transport, business logic, data access, validation, configuration, and infrastructure concerns.',
      content: [
        {
          type: 'heading',
          text: 'Typical Architecture',
        },
        {
          type: 'code',
          language: 'text',
          code: `src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── repositories/
├── utils/
├── validators/
├── app.js
└── server.js`,
        },
        {
          type: 'paragraph',
          text: 'The exact folder structure depends on project size and team preferences. The important architectural principle is to keep responsibilities clear so HTTP concerns do not become tightly coupled to database queries and business rules.',
        },
        {
          type: 'heading',
          text: 'Controller Layer',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `export async function getUser(req, res, next) {
  try {
    const user = await userService.getById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return next(error);
  }
}`,
        },
        {
          type: 'heading',
          text: 'Service Layer',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `export async function getById(id) {
  const user = await userRepository.findById(id);

  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}`,
        },
        {
          type: 'heading',
          text: 'Middleware',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function requireAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  req.user = { id: 'user-id' };
  return next();
}

app.get('/api/profile', requireAuth, getProfile);`,
        },
        {
          type: 'heading',
          text: 'Centralized Error Middleware',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function errorHandler(error, req, res, next) {
  console.error(error);

  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    message: statusCode === 500 ? 'Internal server error' : error.message,
  });
}

app.use(errorHandler);`,
        },
        {
          type: 'heading',
          text: 'Graceful Shutdown',
        },
        {
          type: 'paragraph',
          text: 'Production services should respond to termination signals by stopping new work and closing resources such as HTTP servers and database connections when possible.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const server = app.listen(3000, () => {
  console.log('API started');
});

async function shutdown(signal) {
  console.log(\`\${signal} received\`);

  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT',  () => shutdown('SIGINT'));`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Architecture Principle',
          text: 'Keep controllers thin, put business rules in services, isolate database access, validate input at boundaries, and centralize cross-cutting concerns such as authentication, logging, and error handling.',
        },
      ],
    },

    {
      id: 'interview-questions',
      title: '12. Node.js Interview Questions',
      summary:
        'These questions cover the Node.js runtime, event loop, asynchronous programming, modules, streams, scaling, security, and backend architecture.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is Node.js?',
              answer:
                'Node.js is a JavaScript runtime environment that uses the V8 engine and provides APIs for server-side networking, file systems, streams, processes, cryptography, and other operations.',
            },
            {
              question: 'Is Node.js single-threaded?',
              answer:
                'JavaScript execution in a typical Node.js process occurs on one primary thread, but Node.js can use the operating system, internal mechanisms, worker threads, and multiple processes to perform asynchronous or parallel work.',
            },
            {
              question: 'What is the V8 engine?',
              answer:
                'V8 is a JavaScript engine developed by Google and used by Node.js. It parses and executes JavaScript and applies runtime optimization techniques such as just-in-time compilation.',
            },
            {
              question: 'What is the Node.js event loop?',
              answer:
                'The event loop coordinates the execution of asynchronous callbacks and I/O-related work so that a Node.js process can continue processing other JavaScript work instead of blocking on every asynchronous operation.',
            },
            {
              question: 'What are the main phases of the Node.js event loop?',
              answer:
                'The commonly described phases are timers, pending callbacks, idle/prepare, poll, check, and close callbacks. Each phase handles specific categories of callbacks and runtime work.',
            },
            {
              question:
                'What is the difference between synchronous and asynchronous APIs in Node.js?',
              answer:
                'Synchronous APIs block JavaScript execution until the operation completes, while asynchronous APIs allow the process to continue handling other work and later deliver the result through callbacks, promises, or events.',
            },
            {
              question: 'What is the difference between CommonJS and ES Modules?',
              answer:
                'CommonJS traditionally uses require() and module.exports, while ES Modules use import and export. ES Modules are standardized by ECMAScript and provide statically analyzable module syntax.',
            },
            {
              question: 'What is a Buffer in Node.js?',
              answer:
                'Buffer represents a fixed-length sequence of bytes and is commonly used when working with binary data such as files, network data, encoded content, and streams.',
            },
            {
              question: 'What are Node.js streams?',
              answer:
                'Streams allow data to be processed incrementally instead of requiring an entire dataset to be held in memory. Node.js provides readable, writable, duplex, and transform stream types.',
            },
            {
              question: 'What is the difference between cluster and worker_threads?',
              answer:
                'Cluster creates multiple Node.js processes, each with its own memory and event loop, and is commonly used to scale network servers. Worker threads create additional JavaScript threads within a process and are useful for CPU-intensive JavaScript workloads.',
            },
            {
              question: 'What is child_process used for?',
              answer:
                'The child_process module creates separate operating-system processes and can be used to execute external commands, run other programs, and communicate with child processes.',
            },
            {
              question: 'What is npm?',
              answer:
                'npm is a package manager and ecosystem commonly used with Node.js. It installs dependencies, manages package metadata, runs project scripts, and helps resolve package versions.',
            },
            {
              question: 'What is package-lock.json?',
              answer:
                'package-lock.json records the dependency tree and resolved package information generated by npm. It helps make installations reproducible across environments.',
            },
            {
              question: 'What is process.env?',
              answer:
                'process.env is an object-like interface containing environment variables available to the Node.js process. Environment values are strings and should be validated or converted when necessary.',
            },
            {
              question: 'How should secrets be stored in a Node.js application?',
              answer:
                'Secrets should be supplied through secure environment or secret-management mechanisms rather than hard-coded in source code or committed to repositories.',
            },
            {
              question: 'How do you handle errors in an async Node.js function?',
              answer:
                'With async/await, use try/catch around operations that may reject and either handle the error appropriately or propagate it to a centralized error-handling layer.',
            },
            {
              question: 'What is EventEmitter?',
              answer:
                'EventEmitter is a Node.js class used to implement event-based communication. Objects can emit named events and listeners can subscribe to those events with methods such as on().',
            },
            {
              question: 'Why can process.nextTick() be dangerous when overused?',
              answer:
                'process.nextTick() callbacks are processed with very high priority. Scheduling excessive nextTick callbacks can prevent the event loop from progressing to other phases and can cause I/O starvation.',
            },
            {
              question: 'How can you prevent blocking the Node.js event loop?',
              answer:
                'Avoid expensive synchronous operations in request paths, optimize CPU-heavy algorithms, stream large data, use asynchronous APIs, and move CPU-intensive workloads to worker threads, separate processes, queues, or other appropriate infrastructure.',
            },
            {
              question: 'What is graceful shutdown?',
              answer:
                'Graceful shutdown is the process of stopping new work and closing servers, connections, and other resources cleanly when a service receives a termination signal. It helps deployments and restarts complete without unnecessarily dropping active work.',
            },
          ],
        },
      ],
    },
  ],
};

export default nodejsContent;
