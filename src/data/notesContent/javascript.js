export const javascriptContent = {
  id: 'javascript',
  slug: 'javascript',
  title: 'JavaScript',
  subtitle: 'Complete Developer Guide & Reference',
  category: 'Web Development',
  description:
    'Comprehensive JavaScript guide covering language fundamentals, scope, closures, object-oriented concepts, asynchronous programming, DOM manipulation, and modern ES6+ features.',
  sections: [
    {
      id: 'introduction-to-javascript',
      title: '1. Introduction to JavaScript',
      summary:
        'JavaScript is a high-level, dynamically typed programming language used to build interactive web applications and increasingly used across servers, tooling, and other environments.',
      content: [
        {
          type: 'paragraph',
          text: 'JavaScript is a programming language standardized as ECMAScript and implemented by modern browsers and other JavaScript runtimes. In the browser, JavaScript can interact with HTML and CSS through Web APIs such as the DOM, fetch, timers, and browser events. Outside the browser, runtimes such as Node.js provide additional APIs for servers, command-line tools, and automation.',
        },
        {
          type: 'heading',
          text: 'JavaScript Engine',
        },
        {
          type: 'paragraph',
          text: 'A JavaScript engine parses JavaScript source code, creates an internal representation, executes it, and applies optimization techniques. Modern engines use techniques such as just-in-time compilation to improve execution performance. Examples include V8, SpiderMonkey, and JavaScriptCore.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const numbers = [1, 2, 3, 4];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);`,
        },
        {
          type: 'heading',
          text: 'Single-Threaded Execution',
        },
        {
          type: 'paragraph',
          text: 'JavaScript execution is generally described as single-threaded because a JavaScript execution context processes one piece of JavaScript work at a time on its main execution thread. This does not mean the entire runtime can never perform work concurrently. Browser and server runtimes provide background facilities for operations such as networking, timers, and file I/O.',
        },
        {
          type: 'heading',
          text: 'Event-Driven Programming',
        },
        {
          type: 'paragraph',
          text: 'JavaScript applications commonly respond to events such as clicks, keyboard input, network responses, timers, and messages. An event handler is registered and executed when the corresponding event is delivered.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `document.querySelector('#saveButton')
  .addEventListener('click', () => {
    console.log('Save button clicked');
  });`,
        },
        {
          type: 'heading',
          text: 'Common JavaScript Environments',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Web browsers for interactive client-side applications.',
            'Node.js for backend services, APIs, scripts, and command-line applications.',
            'Deno and Bun for server-side JavaScript and TypeScript workloads.',
            'Build tools and development environments for transforming and bundling application code.',
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Important Distinction',
          text: 'JavaScript is the language, while a runtime such as a browser or Node.js provides the environment and APIs in which JavaScript executes.',
        },
      ],
    },

    {
      id: 'variables-and-scope',
      title: '2. Variables & Scope',
      summary:
        'JavaScript provides var, let, and const declarations with different scoping, hoisting, and reassignment behavior.',
      content: [
        {
          type: 'heading',
          text: 'var, let, and const',
        },
        {
          type: 'paragraph',
          text: 'Modern JavaScript code generally prefers let and const. const prevents reassignment of the binding, but objects and arrays referenced by a const variable can still be mutated unless they are otherwise protected.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `var oldStyle = 'function scoped';

let count = 10;
count = 20;

const user = {
  name: 'Bibhu',
};

user.name = 'Developer';

console.log(oldStyle);
console.log(count);
console.log(user.name);`,
        },
        {
          type: 'heading',
          text: 'Scope',
        },
        {
          type: 'paragraph',
          text: 'Scope determines where a variable can be accessed. JavaScript has global scope, module scope, function scope, and block scope. let and const are block-scoped, while var is function-scoped.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function example() {
  var functionScoped = 'available in function';

  if (true) {
    let blockScoped = 'available in block';
    const alsoBlockScoped = true;

    console.log(functionScoped);
    console.log(blockScoped);
    console.log(alsoBlockScoped);
  }

  console.log(functionScoped);

  // console.log(blockScoped); // ReferenceError
}`,
        },
        {
          type: 'heading',
          text: 'Hoisting',
        },
        {
          type: 'paragraph',
          text: 'Hoisting describes how declarations are processed before execution of their surrounding code. The behavior differs by declaration type. Function declarations can generally be called before their declaration, var declarations are initialized with undefined, and let and const remain unavailable until execution reaches their declaration.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `sayHello();

function sayHello() {
  console.log('Hello');
}

console.log(value); // undefined
var value = 100;`,
        },
        {
          type: 'heading',
          text: 'Temporal Dead Zone',
        },
        {
          type: 'paragraph',
          text: 'The Temporal Dead Zone, or TDZ, is the period from the start of a block until execution reaches a let, const, or class declaration. Accessing the binding during this period throws a ReferenceError.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `{
  // console.log(name); // ReferenceError

  let name = 'Bibhu';

  console.log(name);
}`,
        },
        {
          type: 'table',
          headers: ['Feature', 'var', 'let', 'const'],
          rows: [
            ['Scope', 'Function scope', 'Block scope', 'Block scope'],
            ['Redeclaration in same scope', 'Allowed', 'Not allowed', 'Not allowed'],
            ['Reassignment', 'Allowed', 'Allowed', 'Not allowed'],
            ['TDZ', 'No', 'Yes', 'Yes'],
            ['Before declaration access', 'undefined after hoisting', 'ReferenceError', 'ReferenceError'],
            ['Typical modern usage', 'Legacy cases', 'Changing bindings', 'Default choice'],
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Best Practice',
          text: 'Use const by default. Use let when the binding must be reassigned. Avoid var in modern application code unless there is a specific compatibility or legacy reason.',
        },
      ],
    },

    {
      id: 'data-types-and-type-coercion',
      title: '3. Data Types & Type Coercion',
      summary:
        'JavaScript has primitive and object values, and its operators can perform implicit or explicit type conversion.',
      content: [
        {
          type: 'heading',
          text: 'Primitive Data Types',
        },
        {
          type: 'paragraph',
          text: 'JavaScript primitive values include string, number, bigint, boolean, undefined, symbol, and null. Primitives are immutable values and are not objects, although JavaScript can temporarily provide object-like behavior for some primitive values.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const name = 'Bibhu';             // string
const age = 21;                   // number
const largeNumber = 9007199254740993n; // bigint
const isDeveloper = true;         // boolean
const missing = undefined;        // undefined
const empty = null;               // null
const id = Symbol('id');          // symbol

console.log(typeof name);
console.log(typeof age);
console.log(typeof largeNumber);
console.log(typeof isDeveloper);`,
        },
        {
          type: 'heading',
          text: 'Reference Values',
        },
        {
          type: 'paragraph',
          text: 'Objects, arrays, functions, dates, maps, sets, and many other structures are object values. Variables hold references to these values rather than containing the object itself in the same sense as a primitive value.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const userA = {
  name: 'Bibhu',
};

const userB = userA;

userB.name = 'React Developer';

console.log(userA.name);   // 'React Developer'
console.log(userA === userB); // true`,
        },
        {
          type: 'heading',
          text: 'typeof',
        },
        {
          type: 'paragraph',
          text: 'The typeof operator returns a string describing the type of a value. One historical JavaScript quirk is that typeof null returns "object", even though null is a primitive value.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `console.log(typeof 'hello');       // string
console.log(typeof 42);           // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (quirk!)
console.log(typeof {});           // object
console.log(typeof function () {}); // function`,
        },
        {
          type: 'heading',
          text: '== vs ===',
        },
        {
          type: 'paragraph',
          text: 'The loose equality operator == can perform type coercion before comparison. The strict equality operator === compares values without performing that equality coercion. Strict equality is generally preferred because it makes type conversions explicit.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `console.log(5 == '5');    // true
console.log(5 === '5');   // false

console.log(false == 0);  // true
console.log(false === 0); // false`,
        },
        {
          type: 'heading',
          text: 'Explicit Type Conversion',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const input = '42';

const number = Number(input);
const text = String(number);
const booleanValue = Boolean(number);

console.log(number);       // 42
console.log(text);         // '42'
console.log(booleanValue); // true`,
        },
        {
          type: 'table',
          headers: ['Category', 'Examples'],
          rows: [
            ['String', '"Hello", \'React\''],
            ['Number', '10, 3.14, NaN, Infinity'],
            ['BigInt', '123n'],
            ['Boolean', 'true, false'],
            ['Undefined', 'undefined'],
            ['Null', 'null'],
            ['Symbol', 'Symbol("id")'],
            ['Object', '{}'],
            ['Array', '[]'],
            ['Function', 'function () {}'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'NaN',
          text: 'NaN means Not-a-Number and has the special property that NaN !== NaN. Use Number.isNaN(value) when you need to determine whether a value is actually NaN.',
        },
      ],
    },

    {
      id: 'functions-and-closures',
      title: '4. Functions & Closures',
      summary:
        'Functions are first-class JavaScript values, and closures allow functions to retain access to variables from their lexical environment.',
      content: [
        {
          type: 'heading',
          text: 'Function Declaration',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function add(a, b) {
  return a + b;
}

console.log(add(10, 20)); // 30`,
        },
        {
          type: 'heading',
          text: 'Function Expression',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 4)); // 20`,
        },
        {
          type: 'heading',
          text: 'Arrow Functions',
        },
        {
          type: 'paragraph',
          text: 'Arrow functions provide concise function syntax and have lexical this behavior. Unlike ordinary functions, arrow functions do not create their own this, arguments, super, or new.target bindings.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const square = (number) => number * number;

const greet = (name) => {
  return \`Hello, \${name}!\`;
};

console.log(square(5));       // 25
console.log(greet('Bibhu')); // Hello, Bibhu!`,
        },
        {
          type: 'heading',
          text: 'IIFE',
        },
        {
          type: 'paragraph',
          text: 'An Immediately Invoked Function Expression is a function expression that is executed immediately after it is created. IIFEs were historically used to create private scopes before modules became widely available.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `(function () {
  const privateValue = 'hidden';
  console.log(privateValue);
})();`,
        },
        {
          type: 'heading',
          text: 'Closures',
        },
        {
          type: 'paragraph',
          text: 'A closure occurs when a function retains access to variables from its lexical environment after the outer function has finished executing. Closures are useful for encapsulation, factories, callbacks, and maintaining state.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`,
        },
        {
          type: 'heading',
          text: 'Closure-Based Factory',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Key Concept',
          text: 'Closures are based on lexical scope: a function can access variables from the scope where the function was defined, not merely where it is eventually called.',
        },
      ],
    },

    {
      id: 'prototypes-and-oop',
      title: '5. Prototypes & OOP',
      summary:
        'JavaScript uses prototype-based inheritance, while ES6 classes provide a more familiar syntax for creating objects and inheritance hierarchies.',
      content: [
        {
          type: 'heading',
          text: 'Prototype Chain',
        },
        {
          type: 'paragraph',
          text: 'Every ordinary JavaScript object has an internal prototype reference. When a property is not found directly on an object, JavaScript can search its prototype and continue through the prototype chain until it finds the property or reaches null.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: 'Bibhu',
};

console.log(Object.getPrototypeOf(user));
console.log(user.toString());`,
        },
        {
          type: 'heading',
          text: 'Constructor Functions and Prototypes',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return \`Hello, \${this.name}\`;
};

const person = new Person('Bibhu');
console.log(person.greet()); // Hello, Bibhu`,
        },
        {
          type: 'heading',
          text: 'ES6 Classes',
        },
        {
          type: 'paragraph',
          text: 'Classes provide syntax for defining constructors, methods, static methods, getters, setters, and inheritance. JavaScript classes still use prototypes internally; class syntax does not replace the prototype-based object model.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return \`Hello, \${this.name}\`;
  }
}

const person = new Person('Bibhu');
console.log(person.greet()); // Hello, Bibhu`,
        },
        {
          type: 'heading',
          text: 'Inheritance',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `class Developer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }

  code() {
    return \`\${this.name} writes \${this.language}\`;
  }
}

const developer = new Developer('Bibhu', 'JavaScript');

console.log(developer.greet()); // Hello, Bibhu
console.log(developer.code());  // Bibhu writes JavaScript`,
        },
        {
          type: 'heading',
          text: 'this Keyword',
        },
        {
          type: 'paragraph',
          text: 'The value of this depends on how a function is called. In a method call, this generally refers to the object before the dot. In constructors invoked with new, this refers to the newly created instance. Arrow functions inherit this from their surrounding lexical scope.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: 'Bibhu',
  greet() {
    console.log(this.name);
  },
};

user.greet(); // 'Bibhu'

const greet = user.greet;
greet(); // undefined (no context)`,
        },
        {
          type: 'heading',
          text: 'bind, call, and apply',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function introduce(role, company) {
  return \`\${this.name} is a \${role} at \${company}\`;
}

const user = { name: 'Bibhu' };

console.log(introduce.call(user, 'Developer', 'Bynext AI'));
console.log(introduce.apply(user, ['Developer', 'Bynext AI']));

const bound = introduce.bind(user);
console.log(bound('Developer', 'Bynext AI'));`,
        },
        {
          type: 'table',
          headers: ['Concept', 'Description'],
          rows: [
            ['Prototype', 'Object used as a fallback for property and method lookup'],
            ['Prototype Chain', 'Linked sequence of prototypes used during property lookup'],
            ['class', 'Syntax for defining constructor-based object behavior'],
            ['extends', 'Declares class inheritance'],
            ['super', 'Accesses the parent class constructor or methods'],
            ['this', 'Contextual reference determined by invocation rules'],
          ],
        },
      ],
    },

    {
      id: 'promises-and-async-await',
      title: '6. Promises & Async/Await',
      summary:
        'JavaScript uses promises and async functions to manage asynchronous operations while the event loop coordinates when callbacks and promise reactions execute.',
      content: [
        {
          type: 'heading',
          text: 'The Event Loop',
        },
        {
          type: 'paragraph',
          text: 'The event loop coordinates JavaScript execution with asynchronous runtime operations. Synchronous code runs on the call stack. When asynchronous work completes, callbacks and promise reactions are scheduled for later execution according to the runtime event-loop rules. Promise reactions are processed through the microtask mechanism and are generally processed before subsequently selected timer tasks.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `console.log('Start');

setTimeout(() => {
  console.log('Timer');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

// Output: Start → End → Promise → Timer`,
        },
        {
          type: 'heading',
          text: 'Promise States',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Pending: the operation has not completed.',
            'Fulfilled: the operation completed successfully.',
            'Rejected: the operation failed.',
          ],
        },
        {
          type: 'heading',
          text: 'Creating a Promise',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

wait(1000).then(() => {
  console.log('One second passed');
});`,
        },
        {
          type: 'heading',
          text: 'Promise Chaining',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `fetch('/api/users')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Request finished');
  });`,
        },
        {
          type: 'heading',
          text: 'Async/Await',
        },
        {
          type: 'paragraph',
          text: 'An async function always returns a promise. The await operator pauses execution of the async function until the awaited promise settles, allowing asynchronous code to be written in a sequential style.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function loadUsers() {
  const response = await fetch('/api/users');

  if (!response.ok) {
    throw new Error('Unable to load users');
  }

  const users = await response.json();
  return users;
}

loadUsers()
  .then((users) => console.log(users))
  .catch((error) => console.error(error));`,
        },
        {
          type: 'heading',
          text: 'Error Handling with try/catch',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function loadUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);

    if (!response.ok) {
      throw new Error('User request failed');
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to load user:', error);
    return null;
  }
}`,
        },
        {
          type: 'heading',
          text: 'Parallel Async Operations',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function loadDashboard() {
  const [usersResponse, productsResponse] = await Promise.all([
    fetch('/api/users'),
    fetch('/api/products'),
  ]);

  const [users, products] = await Promise.all([
    usersResponse.json(),
    productsResponse.json(),
  ]);

  return { users, products };
}`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Avoid Accidental Sequential Requests',
          text: 'If independent asynchronous operations do not depend on each other, starting them together and awaiting Promise.all can reduce unnecessary waiting compared with awaiting each operation sequentially.',
        },
      ],
    },

    {
      id: 'es6-modern-features',
      title: '7. ES6+ Modern Features',
      summary:
        'Modern JavaScript provides concise syntax and powerful language features such as destructuring, spread, modules, optional chaining, and nullish coalescing.',
      content: [
        {
          type: 'heading',
          text: 'Destructuring',
        },
        {
          type: 'paragraph',
          text: 'Destructuring extracts values from arrays or properties from objects into variables.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: 'Bibhu',
  role: 'Developer',
  address: {
    city: 'Bhubaneswar',
  },
};

const {
  name,
  role,
  address: { city },
} = user;

console.log(name); // Bibhu
console.log(role); // Developer
console.log(city); // Bhubaneswar`,
        },
        {
          type: 'heading',
          text: 'Spread Operator',
        },
        {
          type: 'paragraph',
          text: 'The spread syntax expands iterable values or object properties into a new array or object. It is commonly used for non-mutating updates.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];

const user = { name: 'Bibhu', role: 'Developer' };
const updatedUser = { ...user, role: 'React Developer' };

console.log(combined);     // [1,2,3,4,5,6]
console.log(updatedUser);  // { name: 'Bibhu', role: 'React Developer' }`,
        },
        {
          type: 'heading',
          text: 'Rest Parameters',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(10, 20, 30, 40)); // 100`,
        },
        {
          type: 'heading',
          text: 'Optional Chaining',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  profile: {
    contact: {
      email: 'bibhu@example.com',
    },
  },
};

console.log(user.profile?.contact?.email); // 'bibhu@example.com'
console.log(user.settings?.theme);         // undefined`,
        },
        {
          type: 'heading',
          text: 'Nullish Coalescing',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const username = null;
const displayName = username ?? 'Guest';
console.log(displayName); // 'Guest'`,
        },
        {
          type: 'heading',
          text: 'Template Literals',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const name = 'Bibhu';
const role = 'JavaScript Developer';

const message = \`Hello, \${name}. You are a \${role}.\`;
console.log(message);`,
        },
        {
          type: 'heading',
          text: 'Modules',
        },
        {
          type: 'paragraph',
          text: 'ES modules allow code to be split into separate files with explicit imports and exports. Modules help organize applications and establish clear dependencies between files.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// math.js
export function add(a, b) {
  return a + b;
}
export const PI = 3.14159;

// app.js
import { add, PI } from './math.js';

console.log(add(10, 20)); // 30
console.log(PI);          // 3.14159`,
        },
        {
          type: 'heading',
          text: 'Default Export',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// User.js
export default function User() {
  return { name: 'Bibhu' };
}

// app.js
import User from './User.js';
console.log(User());`,
        },
        {
          type: 'table',
          headers: ['Feature', 'Purpose'],
          rows: [
            ['Destructuring', 'Extract values from arrays and objects'],
            ['Spread', 'Expand iterable values or object properties'],
            ['Rest', 'Collect remaining arguments or properties'],
            ['Optional chaining', 'Safely access nested properties'],
            ['Nullish coalescing', 'Provide fallback for null or undefined'],
            ['Template literals', 'Create strings with interpolation'],
            ['Modules', 'Organize code with explicit imports and exports'],
          ],
        },
      ],
    },

    {
      id: 'dom-manipulation-and-events',
      title: '8. DOM Manipulation & Events',
      summary:
        'Browser JavaScript can query and modify the DOM and respond to user interactions through the event system.',
      content: [
        {
          type: 'heading',
          text: 'Selecting Elements',
        },
        {
          type: 'paragraph',
          text: 'The DOM provides methods for finding elements. querySelector returns the first element matching a CSS selector, while querySelectorAll returns a static NodeList containing matching elements.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const heading = document.querySelector('h1');
const button = document.querySelector('#saveButton');
const cards = document.querySelectorAll('.card');

console.log(heading);
console.log(button);
console.log(cards);`,
        },
        {
          type: 'heading',
          text: 'Changing Content and Classes',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const title = document.querySelector('#title');

title.textContent = 'JavaScript Developer';
title.classList.add('active');
title.classList.remove('hidden');
title.classList.toggle('highlight');`,
        },
        {
          type: 'heading',
          text: 'Creating Elements',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const list = document.querySelector('#list');

const item = document.createElement('li');
item.textContent = 'React';
item.className = 'skill';

list.appendChild(item);`,
        },
        {
          type: 'heading',
          text: 'addEventListener',
        },
        {
          type: 'paragraph',
          text: 'addEventListener registers a function that runs when an event occurs. It is preferred over inline event attributes because it keeps behavior separate from markup and allows multiple listeners for the same event type.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const button = document.querySelector('#save');

button.addEventListener('click', (event) => {
  console.log('Clicked:', event.target);
});`,
        },
        {
          type: 'heading',
          text: 'Event Object',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const form = document.querySelector('#loginForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log(formData.get('email'));
});`,
        },
        {
          type: 'heading',
          text: 'Event Bubbling',
        },
        {
          type: 'paragraph',
          text: 'Many DOM events bubble from the target element through its ancestors. Event bubbling allows a parent element to observe events that originated from descendants.',
        },
        {
          type: 'heading',
          text: 'Event Delegation',
        },
        {
          type: 'paragraph',
          text: 'Event delegation attaches a listener to a common ancestor instead of adding individual listeners to every child. It is particularly useful for dynamic lists where child elements can be added or removed.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const list = document.querySelector('#users');

list.addEventListener('click', (event) => {
  const button = event.target.closest('[data-user-id]');

  if (!button) return;

  const userId = button.dataset.userId;
  console.log('Selected user:', userId);
});`,
        },
        {
          type: 'heading',
          text: 'Preventing Default Behavior',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `document
  .querySelector('#link')
  .addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Navigation prevented');
  });`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Modern Application Note',
          text: 'Frameworks such as React provide their own event-handling abstractions, but understanding the browser DOM event model remains important for debugging, accessibility, and integration with browser APIs.',
        },
      ],
    },

    {
      id: 'error-handling',
      title: '9. Error Handling',
      summary:
        'JavaScript provides structured mechanisms for detecting, throwing, catching, and cleaning up after errors.',
      content: [
        {
          type: 'heading',
          text: 'try/catch',
        },
        {
          type: 'paragraph',
          text: 'The try block contains code that may throw an exception. If an exception occurs, control moves to the catch block. The finally block executes after try and catch processing regardless of whether an exception occurred.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `try {
  const result = JSON.parse('invalid json');
  console.log(result);
} catch (error) {
  console.error('Parsing failed:', error.message);
} finally {
  console.log('Cleanup complete');
}`,
        },
        {
          type: 'heading',
          text: 'throw',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}`,
        },
        {
          type: 'heading',
          text: 'Custom Errors',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

function validateEmail(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Invalid email address', 'email');
  }
}

try {
  validateEmail('invalid-email');
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(error.field);
    console.error(error.message);
  }
}`,
        },
        {
          type: 'heading',
          text: 'Common Error Types',
        },
        {
          type: 'table',
          headers: ['Error Type', 'Typical Cause'],
          rows: [
            ['Error', 'Generic runtime error'],
            ['SyntaxError', 'Invalid JavaScript syntax'],
            ['ReferenceError', 'Accessing an unavailable identifier'],
            ['TypeError', 'Operation performed on an incompatible value'],
            ['RangeError', 'Value outside an allowed range'],
            ['URIError', 'Invalid URI-related operation'],
            ['AggregateError', 'Multiple errors represented together'],
          ],
        },
        {
          type: 'heading',
          text: 'Async Error Handling',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function saveUser(user) {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(\`HTTP error: \${response.status}\`);
    }

    return await response.json();
  } catch (error) {
    console.error('Save failed:', error);
    throw error;
  }
}`,
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Do Not Hide Errors Silently',
          text: 'Avoid empty catch blocks. If an error cannot be fully handled at the current layer, log useful diagnostic information or rethrow the error so an appropriate higher-level handler can respond.',
        },
      ],
    },

    {
      id: 'performance-and-best-practices',
      title: '10. Performance & Best Practices',
      summary:
        'Efficient JavaScript applications minimize unnecessary work, manage asynchronous operations carefully, and release resources that are no longer needed.',
      content: [
        {
          type: 'heading',
          text: 'Debouncing',
        },
        {
          type: 'paragraph',
          text: 'Debouncing delays execution until a specified period has passed without another call. It is useful for search inputs, resize handlers, and other operations where rapid repeated events should result in fewer executions.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function debounce(callback, delay) {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const search = debounce((query) => {
  console.log('Searching:', query);
}, 300);

search('r');
search('re');
search('react'); // Only this fires after 300ms`,
        },
        {
          type: 'heading',
          text: 'Throttling',
        },
        {
          type: 'paragraph',
          text: 'Throttling limits how frequently a function can execute during a period. It is useful for high-frequency events such as scrolling, pointer movement, or continuous browser resize events.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function throttle(callback, delay) {
  let waiting = false;

  return (...args) => {
    if (waiting) return;

    callback(...args);
    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}

const handleScroll = throttle(() => {
  console.log(window.scrollY);
}, 200);

window.addEventListener('scroll', handleScroll);`,
        },
        {
          type: 'heading',
          text: 'Memory Leaks',
        },
        {
          type: 'paragraph',
          text: 'A memory leak occurs when an application unintentionally keeps references to objects that are no longer needed, preventing garbage collection. Common causes include forgotten event listeners, active timers, subscriptions, retained closures, and long-lived caches.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function setup() {
  const handleResize = () => {
    console.log(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return function cleanup() {
    window.removeEventListener('resize', handleResize);
  };
}

const cleanup = setup();

// Call when the listener is no longer needed.
cleanup();`,
        },
        {
          type: 'heading',
          text: 'Avoid Unnecessary DOM Work',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i += 1) {
  const item = document.createElement('li');
  item.textContent = \`Item \${i + 1}\`;
  fragment.appendChild(item);
}

document.querySelector('#list').appendChild(fragment);`,
        },
        {
          type: 'heading',
          text: 'Efficient Array Operations',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const users = [
  { name: 'A', active: true },
  { name: 'B', active: false },
  { name: 'C', active: true },
];

const activeNames = users
  .filter((user) => user.active)
  .map((user) => user.name);

console.log(activeNames); // ['A', 'C']`,
        },
        {
          type: 'heading',
          text: 'Best Practices Checklist',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Prefer const and use let when reassignment is required.',
            'Use strict equality when comparing values unless loose equality is deliberately required.',
            'Keep functions focused on a clear responsibility.',
            'Use modules to organize larger applications.',
            'Avoid unnecessary global variables.',
            'Handle rejected promises and asynchronous errors.',
            'Clean up timers, event listeners, subscriptions, and other resources.',
            'Avoid blocking the main thread with expensive synchronous work.',
            'Use debounce or throttle for appropriate high-frequency events.',
            'Measure performance before applying complex optimizations.',
            'Validate external data rather than assuming API responses have the expected shape.',
            'Use meaningful variable and function names.',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Performance Principle',
          text: 'The most effective optimization is often reducing unnecessary work rather than making the same work slightly faster. Profile first, identify the bottleneck, optimize it, and measure again.',
        },
      ],
    },

    {
      id: 'arrays-objects-and-common-methods',
      title: '11. Arrays, Objects & Common Methods',
      summary:
        'Arrays and objects are fundamental JavaScript data structures with powerful built-in methods for transforming, searching, grouping, and organizing data.',
      content: [
        {
          type: 'heading',
          text: 'Array Methods',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const numbers = [1, 2, 3, 4, 5];

const doubled     = numbers.map((n) => n * 2);
const even        = numbers.filter((n) => n % 2 === 0);
const total       = numbers.reduce((sum, n) => sum + n, 0);
const found       = numbers.find((n) => n > 3);
const hasEven     = numbers.some((n) => n % 2 === 0);
const allPositive = numbers.every((n) => n > 0);

console.log(doubled);      // [2,4,6,8,10]
console.log(even);         // [2,4]
console.log(total);        // 15
console.log(found);        // 4
console.log(hasEven);      // true
console.log(allPositive);  // true`,
        },
        {
          type: 'heading',
          text: 'map vs forEach',
        },
        {
          type: 'paragraph',
          text: 'map creates and returns a new array containing transformed values. forEach executes a function for each item and returns undefined. Use map when transformation is the goal and forEach when you need side effects.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const prices = [100, 200, 300];

const discounted = prices.map((price) => price * 0.9);

prices.forEach((price) => {
  console.log('Price:', price);
});

console.log(discounted); // [90, 180, 270]`,
        },
        {
          type: 'heading',
          text: 'Object Methods',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: 'Bibhu',
  role: 'Developer',
  experience: 2,
};

console.log(Object.keys(user));    // ['name','role','experience']
console.log(Object.values(user));  // ['Bibhu','Developer',2]
console.log(Object.entries(user)); // [['name','Bibhu'],...]

const copy = Object.assign({}, user);
console.log(copy);`,
        },
        {
          type: 'heading',
          text: 'Sorting',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const users = [
  { name: 'Rahul', age: 28 },
  { name: 'Bibhu', age: 21 },
  { name: 'Amit',  age: 25 },
];

const sortedUsers = [...users].sort((a, b) => a.age - b.age);
console.log(sortedUsers);`,
        },
        {
          type: 'heading',
          text: 'Map and Set',
        },
        {
          type: 'paragraph',
          text: 'Map stores key-value pairs and allows keys of various types. Set stores unique values and is useful for removing duplicates or checking membership.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const userRoles = new Map();
userRoles.set('Bibhu', 'Developer');
userRoles.set('Rahul', 'Designer');
console.log(userRoles.get('Bibhu')); // 'Developer'

const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log([...uniqueNumbers]); // [1, 2, 3, 4]`,
        },
        {
          type: 'table',
          headers: ['Method', 'Returns', 'Typical Use'],
          rows: [
            ['map()', 'New array', 'Transform every element'],
            ['filter()', 'New array', 'Keep matching elements'],
            ['reduce()', 'Accumulated value', 'Aggregate or transform data'],
            ['find()', 'First matching value', 'Find one element'],
            ['some()', 'Boolean', 'Check whether at least one matches'],
            ['every()', 'Boolean', 'Check whether all match'],
            ['forEach()', 'undefined', 'Perform side effects'],
            ['includes()', 'Boolean', 'Check primitive membership'],
          ],
        },
      ],
    },

    {
      id: 'interview-questions',
      title: '12. JavaScript Interview Questions',
      summary:
        'These interview questions cover the core JavaScript concepts commonly tested in frontend and full-stack developer interviews.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is JavaScript?',
              answer:
                'JavaScript is a high-level programming language standardized as ECMAScript. It is widely used in browsers for interactive interfaces and is also used in server-side and tooling environments.',
            },
            {
              question: 'Is JavaScript single-threaded?',
              answer:
                'JavaScript execution on a typical main thread processes one piece of JavaScript work at a time, but runtimes can perform asynchronous operations using browser or server facilities and later schedule their results for JavaScript execution.',
            },
            {
              question: 'What is the difference between var, let, and const?',
              answer:
                'var is function-scoped and can be redeclared and reassigned. let and const are block-scoped. let can be reassigned, while const cannot be reassigned after initialization. let and const are subject to the Temporal Dead Zone.',
            },
            {
              question: 'What is hoisting?',
              answer:
                'Hoisting is a term describing how JavaScript processes declarations before executing surrounding code. Function declarations can be called before their declaration, var bindings are initialized to undefined, while let and const bindings remain unavailable until execution reaches their declarations.',
            },
            {
              question: 'What is the Temporal Dead Zone?',
              answer:
                'The Temporal Dead Zone is the period between entering the scope of a let, const, or class declaration and reaching its declaration during execution. Accessing the binding during this period throws a ReferenceError.',
            },
            {
              question: 'What is the difference between == and ===?',
              answer:
                '== performs equality comparison with coercion rules, while === performs strict equality without converting the operands for equality. Strict equality is generally preferred when predictable type behavior is desired.',
            },
            {
              question: 'What is a closure?',
              answer:
                'A closure is a function together with access to variables from its lexical environment. The function can continue accessing those variables even after the outer function has returned.',
            },
            {
              question: 'What is the prototype chain?',
              answer:
                'The prototype chain is the sequence of prototype objects JavaScript searches when a property is not found directly on an object. The search continues through prototypes until the property is found or the chain reaches null.',
            },
            {
              question:
                'What is the difference between function declarations and function expressions?',
              answer:
                'A function declaration defines a named function as a declaration and has different hoisting behavior from function expressions. A function expression creates a function value as part of an expression and is commonly assigned to a variable or passed as an argument.',
            },
            {
              question: 'How does this work in JavaScript?',
              answer:
                'The value of this depends on the invocation context. Method calls commonly use the object before the dot, constructors invoked with new receive the new instance, and arrow functions inherit this lexically from their surrounding scope.',
            },
            {
              question: 'What is a Promise?',
              answer:
                'A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be pending, fulfilled, or rejected and supports methods such as then, catch, and finally.',
            },
            {
              question: 'What is async/await?',
              answer:
                'async/await is syntax for working with promises in a sequential style. An async function returns a promise, and await pauses that function until the awaited promise settles.',
            },
            {
              question: 'What is the event loop?',
              answer:
                'The event loop coordinates execution between the JavaScript call stack and queues or runtime facilities used for asynchronous work. It enables JavaScript applications to respond to asynchronous events without blocking on every external operation.',
            },
            {
              question: 'What is the difference between microtasks and tasks?',
              answer:
                'Promise reactions and other microtasks are processed by the runtime at defined microtask checkpoints, while timers, user-interface events, and other callbacks are scheduled through task mechanisms. Microtasks are generally drained before the runtime proceeds to the next task.',
            },
            {
              question: 'What is event delegation?',
              answer:
                'Event delegation attaches an event listener to an ancestor and uses event bubbling to handle events originating from descendant elements. It is useful for dynamic lists and can reduce the number of event listeners.',
            },
            {
              question: 'What is the difference between map and forEach?',
              answer:
                'map returns a new array containing the results of transforming each element. forEach executes a callback for each element and returns undefined, so it is generally used for side effects rather than transformations.',
            },
            {
              question: 'What is the difference between shallow copy and deep copy?',
              answer:
                'A shallow copy creates a new outer object or array while nested objects remain shared references. A deep copy creates independent copies of nested data as well. The appropriate deep-copy strategy depends on the data types and application requirements.',
            },
            {
              question: 'What is debouncing?',
              answer:
                'Debouncing delays a function until a period of inactivity has passed. It is commonly used to reduce the number of search requests or expensive calculations triggered by rapidly changing input.',
            },
            {
              question: 'What is throttling?',
              answer:
                'Throttling limits how frequently a function can execute during a given period. It is commonly used for high-frequency events such as scrolling or pointer movement.',
            },
            {
              question: 'What causes memory leaks in JavaScript applications?',
              answer:
                'Common causes include retained references, forgotten event listeners, active timers, subscriptions that are not cleaned up, growing caches, and long-lived closures that unintentionally retain objects.',
            },
          ],
        },
      ],
    },
  ],
};

export default javascriptContent;
