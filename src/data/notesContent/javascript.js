export const javascriptContent = {
  id: 'javascript',
  slug: 'javascript',
  title: 'JavaScript',
  subtitle: 'Complete Developer Guide & Reference',
  category: 'Web Development',
  description:
    'Comprehensive JavaScript guide covering fundamentals, variables, data types, operators, control flow, loops, functions, scope, hoisting, arrays, strings, spread/rest operators, DOM manipulation, events, asynchronous JavaScript, promises, async/await, and practical interview concepts.',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction to JavaScript',
      content: [
        {
          type: 'heading',
          text: 'What is JavaScript?'
        },
        {
          type: 'paragraph',
          text: 'JavaScript is a high-level, dynamically typed, object-based programming language primarily used to create interactive and dynamic web applications. It can run in browsers as well as on servers using runtimes such as Node.js.'
        },
        {
          type: 'heading',
          text: 'History of JavaScript'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'JavaScript was created by Brendan Eich in 1995.',
            'Its original name was Mocha.',
            'It was later renamed LiveScript.',
            'It was eventually named JavaScript.'
          ]
        },
        {
          type: 'heading',
          text: 'Features of JavaScript'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Lightweight',
            'Open source',
            'Cross-platform',
            'Dynamically typed',
            'Interpreted/JIT-compiled by modern engines',
            'Client-side scripting',
            'Single-threaded execution model',
            'Loosely typed',
            'Supports object-oriented and functional programming',
            'Supports asynchronous programming'
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const name = "Bibhu";

console.log("Hello, " + name);`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Important',
          text: 'Modern JavaScript engines such as V8 use interpretation together with Just-In-Time (JIT) compilation and multiple optimization techniques. Therefore, describing modern JavaScript simply as a language that only executes line-by-line is incomplete.'
        }
      ]
    },

    {
      id: 'characteristics',
      title: '2. Characteristics, Advantages & Uses',
      content: [
        {
          type: 'heading',
          text: 'Characteristics of JavaScript'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'High-level language',
            'Dynamically typed',
            'Single-threaded JavaScript execution model',
            'Prototype-based object model',
            'First-class functions',
            'Lexical scoping',
            'Event-driven programming',
            'Asynchronous programming support',
            'Runs in browsers and server-side runtimes'
          ]
        },
        {
          type: 'heading',
          text: 'Advantages'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Runs directly in modern web browsers.',
            'Provides interactive and dynamic web experiences.',
            'Has a large ecosystem of libraries and frameworks.',
            'Works on multiple operating systems.',
            'Can be used for both frontend and backend development.',
            'Supports asynchronous operations such as API requests.',
            'Has extensive community and learning resources.'
          ]
        },
        {
          type: 'heading',
          text: 'Disadvantages'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Client-side code is exposed to users and must not contain secrets.',
            'Incorrect DOM manipulation can cause performance problems.',
            'Dynamic typing can allow type-related bugs at runtime.',
            'Browser APIs and environments can differ in behavior or availability.',
            'CPU-heavy JavaScript can block the browser main thread.',
            'Third-party dependencies can introduce security and maintenance concerns.'
          ]
        },
        {
          type: 'heading',
          text: 'Uses of JavaScript'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Web application development',
            'Frontend development',
            'Backend development with Node.js',
            'Mobile application development',
            'Game development',
            'Browser automation',
            'Real-time applications',
            'Client-side form validation',
            'Animations and dynamic interfaces',
            'Server applications'
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Frontend
document.querySelector("#title").textContent = "Hello JavaScript";

// Backend with Node.js
console.log("JavaScript can also run on the server.");`
        }
      ]
    },

    {
      id: 'java-vs-javascript',
      title: '3. Java vs JavaScript',
      content: [
        {
          type: 'paragraph',
          text: 'Java and JavaScript are different programming languages despite their similar names. Java is commonly used for enterprise applications, Android-related development, and backend systems, while JavaScript is widely used for web development and can also be used on the server through runtimes such as Node.js.'
        },
        {
          type: 'table',
          headers: ['Java', 'JavaScript'],
          rows: [
            ['Statically typed', 'Dynamically typed'],
            ['Primarily class-based object-oriented', 'Prototype-based object model'],
            ['Commonly runs on the JVM', 'Runs in JavaScript engines such as V8'],
            ['Source files commonly use .java', 'Source files commonly use .js'],
            ['Supports multithreaded application programming', 'JavaScript execution is traditionally single-threaded per event loop'],
            ['Common in enterprise/backend systems', 'Common in frontend and backend web development'],
            ['Compiled to JVM bytecode', 'Executed by JavaScript engines using interpretation and JIT compilation'],
            ['Uses classes as a fundamental language abstraction', 'Uses prototypes, with class syntax available as an abstraction']
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// JavaScript

class User {
  constructor(name) {
    this.name = name;
  }
}

const user = new User("Bibhu");

console.log(user.name);`
        }
      ]
    },

    {
      id: 'adding-javascript',
      title: '4. Adding JavaScript to HTML',
      content: [
        {
          type: 'heading',
          text: 'Internal JavaScript'
        },
        {
          type: 'paragraph',
          text: 'JavaScript can be written directly inside a script element in an HTML document.'
        },
        {
          type: 'code',
          language: 'html',
          code: `<button onclick="showMessage()">Click Me</button>
<script> function showMessage() { alert("Hello JavaScript"); } </script>`
        },
        {
          type: 'heading',
          text: 'External JavaScript'
        },
        {
          type: 'paragraph',
          text: 'For larger applications, JavaScript is usually placed in a separate .js file and linked to HTML.'
        },
        {
          type: 'code',
          language: 'html',
          code: `<script src="app.js"></script>`
        },
        {
          type: 'heading',
          text: 'Module JavaScript'
        },
        {
          type: 'code',
          language: 'html',
          code: `<script type="module" src="app.js"></script>`
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Best Practice',
          text: 'For production applications, prefer external JavaScript modules and keep HTML, CSS, and JavaScript responsibilities separated.'
        }
      ]
    },

    {
      id: 'tokens-identifiers',
      title: '5. Tokens, Keywords, Identifiers, Literals & Operators',
      content: [
        {
          type: 'heading',
          text: 'Tokens'
        },
        {
          type: 'paragraph',
          text: 'A token is a meaningful lexical unit recognized by the JavaScript parser. Examples include keywords, identifiers, literals, operators, and punctuation.'
        },
        {
          type: 'heading',
          text: 'Keywords'
        },
        {
          type: 'paragraph',
          text: 'Keywords are reserved words with special meaning in JavaScript.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `let age = 21;

if (age >= 18) {
  console.log("Adult");
}`
        },
        {
          type: 'heading',
          text: 'Identifiers'
        },
        {
          type: 'paragraph',
          text: 'Identifiers are names used for variables, functions, classes, objects, and other program entities.'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'An identifier cannot start with a number.',
            'It can start with a letter, underscore, or dollar sign.',
            'Keywords cannot normally be used as identifiers.',
            'Identifiers are case-sensitive.',
            'Spaces and most special characters are not allowed.'
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `let userName = "Bibhu";
let _count = 10;
let $price = 500;

// Invalid:
// let 1name = "Test";
// let user-name = "Test";`
        },
        {
          type: 'heading',
          text: 'Literals'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `let name = "Bibhu"; // String literal
let age = 21; // Number literal
let active = true; // Boolean literal
let user = null; // Null literal
let numbers = [1, 2, 3]; // Array literal
let person = { name: "Bibhu" }; // Object literal`
        }
      ]
    },

    {
      id: 'variables',
      title: '6. Variables: var, let & const',
      content: [
        {
          type: 'paragraph',
          text: 'Variables are named bindings used to store and access values. Modern JavaScript generally prefers let and const over var.'
        },
        {
          type: 'heading',
          text: 'var'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `var age = 20;

var age = 21; // Re-declaration allowed
age = 22; // Re-assignment allowed

console.log(age);`
        },
        {
          type: 'heading',
          text: 'let'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `let age = 20;

// let age = 21; // Error: cannot re-declare in same scope

age = 21; // Re-assignment allowed

console.log(age);`
        },
        {
          type: 'heading',
          text: 'const'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const age = 20;

// age = 21; // Error

console.log(age);`
        },
        {
          type: 'table',
          headers: ['Feature', 'var', 'let', 'const'],
          rows: [
            ['Declaration', 'Allowed', 'Allowed', 'Must initialize'],
            ['Re-declaration in same scope', 'Allowed', 'Not allowed', 'Not allowed'],
            ['Re-assignment', 'Allowed', 'Allowed', 'Not allowed'],
            ['Function scoped', 'Yes', 'No', 'No'],
            ['Block scoped', 'No', 'Yes', 'Yes'],
            ['Temporal Dead Zone', 'No', 'Yes', 'Yes']
          ]
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Recommended',
          text: 'Use const by default. Use let when reassignment is required. Avoid var in modern JavaScript unless you specifically need its older function-scoping behavior.'
        }
      ]
    },

    {
      id: 'data-types',
      title: '7. JavaScript Data Types',
      content: [
        {
          type: 'paragraph',
          text: 'JavaScript has primitive values and objects. Primitive values represent immutable data, while objects are collections of properties and can contain complex structures.'
        },
        {
          type: 'heading',
          text: 'Primitive Data Types'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'String',
            'Number',
            'BigInt',
            'Boolean',
            'Undefined',
            'Null',
            'Symbol'
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const name = "Bibhu";       // String
const age = 21;             // Number
const huge = 12345678901234567890n; // BigInt
const active = true;        // Boolean
let value;                  // Undefined
const empty = null;         // Null
const id = Symbol("id");    // Symbol

console.log(typeof name);
console.log(typeof age);
console.log(typeof active);
console.log(typeof value);`
        },
        {
          type: 'heading',
          text: 'Reference/Object Values'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Object',
            'Array',
            'Function',
            'Date',
            'RegExp',
            'Map',
            'Set',
            'Other built-in objects'
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const person = {
  name: "Bibhu",
  age: 21
};

const skills = ["HTML", "CSS", "JavaScript"];

console.log(person);
console.log(skills);`
        },
        {
          type: 'heading',
          text: 'Important typeof Behavior'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `console.log(typeof "Hello"); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof 10n); // bigint
console.log(typeof Symbol("x")); // symbol
console.log(typeof function() {}); // function
console.log(typeof {}); // object
console.log(typeof null); // object`
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Interview Point',
          text: 'typeof null returns "object" because of a long-standing JavaScript language behavior. It does not mean that null is actually an object.'
        }
      ]
    },

    {
      id: 'operators',
      title: '8. JavaScript Operators',
      content: [
        {
          type: 'heading',
          text: 'Arithmetic Operators'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000`
        },
        {
          type: 'heading',
          text: 'Comparison Operators'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `console.log(10 == "10"); // true
console.log(10 === "10"); // false

console.log(10 != "10"); // false
console.log(10 !== "10"); // true

console.log(10 > 5); // true
console.log(10 >= 10); // true
console.log(5 < 10); // true
console.log(5 <= 5); // true`
        },
        {
          type: 'heading',
          text: 'Logical Operators'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const age = 21;
const hasId = true;

console.log(age >= 18 && hasId);
console.log(age < 18 || hasId);
console.log(!hasId);`
        },
        {
          type: 'heading',
          text: 'Assignment Operators'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `let score = 10;

score += 5;
score -= 2;
score *= 2;
score /= 2;
score %= 3;
score **= 2;

console.log(score);`
        },
        {
          type: 'heading',
          text: 'Nullish Coalescing Operator'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const username = null;

const displayName = username ?? "Guest";

console.log(displayName); // Guest`
        },
        {
          type: 'heading',
          text: 'Optional Chaining'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  profile: {
    name: "Bibhu"
  }
};

console.log(user.profile?.name);
console.log(user.address?.city);`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Best Practice',
          text: 'Prefer === and !== when comparing values unless you have a specific reason to use type coercion.'
        }
      ]
    },

    {
      id: 'conditional-statements',
      title: '9. Conditional Statements',
      content: [
        {
          type: 'heading',
          text: 'if Statement'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const age = 21;

if (age >= 18) {
  console.log("Adult");
}`
        },
        {
          type: 'heading',
          text: 'if...else'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const age = 16;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}`
        },
        {
          type: 'heading',
          text: 'else if'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const marks = 85;

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("Needs improvement");
}`
        },
        {
          type: 'heading',
          text: 'Switch Statement'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;

  case "Friday":
    console.log("Almost weekend");
    break;

  default:
    console.log("Normal day");
}`
        },
        {
          type: 'heading',
          text: 'Ternary Operator'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const age = 21;

const status = age >= 18 ? "Adult" : "Minor";

console.log(status);`
        }
      ]
    },

    {
      id: 'loops',
      title: '10. JavaScript Loops',
      content: [
        {
          type: 'paragraph',
          text: 'Loops execute a block of code repeatedly while a condition or iteration rule allows it.'
        },
        {
          type: 'heading',
          text: 'for Loop'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`
        },
        {
          type: 'heading',
          text: 'while Loop'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}`
        },
        {
          type: 'heading',
          text: 'do...while Loop'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);`
        },
        {
          type: 'heading',
          text: 'for...in Loop'
        },
        {
          type: 'paragraph',
          text: 'for...in is commonly used to iterate over enumerable property keys of an object.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const student = {
  name: "Bibhu",
  age: 21,
  course: "BTech"
};

for (const key in student) {
  console.log(key, student[key]);
}`
        },
        {
          type: 'heading',
          text: 'for...of Loop'
        },
        {
          type: 'paragraph',
          text: 'for...of iterates over values produced by an iterable such as an array, string, Set, or Map.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const students = ["John", "Sara", "Jack"];

for (const student of students) {
  console.log(student);
}`
        },
        {
          type: 'table',
          headers: ['Loop', 'Common Use'],
          rows: [
            ['for', 'General counter-based iteration'],
            ['while', 'Repeat while a condition remains true'],
            ['do...while', 'Execute the body at least once'],
            ['for...in', 'Iterate over enumerable object keys'],
            ['for...of', 'Iterate over iterable values']
          ]
        }
      ]
    },

    {
      id: 'functions',
      title: '11. JavaScript Functions',
      content: [
        {
          type: 'paragraph',
          text: 'A function is a reusable block of code designed to perform a specific task. Functions can accept parameters, return values, and be passed around as values.'
        },
        {
          type: 'heading',
          text: 'Named Function'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function add(a, b) {
  return a + b;
}

console.log(add(10, 20));`
        },
        {
          type: 'heading',
          text: 'Anonymous Function'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const greet = function () {
  console.log("Hello");
};

greet();`
        },
        {
          type: 'heading',
          text: 'Function Expression'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 4));`
        },
        {
          type: 'heading',
          text: 'Arrow Function'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const add = (a, b) => a + b;

console.log(add(10, 20));`
        },
        {
          type: 'heading',
          text: 'Nested Function'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function parent() {
  const a = 10;

  function child() {
    const b = 20;
    console.log(a + b);
  }

  child();
}

parent();`
        },
        {
          type: 'heading',
          text: 'IIFE'
        },
        {
          type: 'paragraph',
          text: 'An Immediately Invoked Function Expression is a function expression that is executed immediately after it is created.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `(function () {
  console.log("Executed immediately");
})();`
        },
        {
          type: 'heading',
          text: 'Higher-Order Function'
        },
        {
          type: 'paragraph',
          text: 'A higher-order function accepts another function as an argument, returns a function, or both.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function calculate(a, b, operation) {
  return operation(a, b);
}

const result = calculate(10, 20, (x, y) => x + y);

console.log(result);`
        },
        {
          type: 'heading',
          text: 'Callback Function'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function processUser(callback) {
  console.log("Processing user...");
  callback();
}

function done() {
  console.log("Completed");
}

processUser(done);`
        }
      ]
    },

    {
      id: 'variables-scope',
      title: '12. Scope in JavaScript',
      content: [
        {
          type: 'paragraph',
          text: 'Scope determines where variables and functions can be accessed in a JavaScript program.'
        },
        {
          type: 'heading',
          text: 'Global Scope'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const globalName = "Bibhu";

function showName() {
  console.log(globalName);
}

showName();
console.log(globalName);`
        },
        {
          type: 'heading',
          text: 'Function Scope'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function test() {
  const message = "Inside function";

  console.log(message);
}

test();

// console.log(message); // ReferenceError`
        },
        {
          type: 'heading',
          text: 'Block Scope'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `{
  let blockValue = 100;
  const anotherValue = 200;

  console.log(blockValue);
}

// console.log(blockValue); // ReferenceError`
        },
        {
          type: 'heading',
          text: 'Lexical Scope'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();`
        },
        {
          type: 'heading',
          text: 'Module Scope'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// math.js
export const PI = 3.14159;

// app.js
import { PI } from "./math.js";

console.log(PI);`
        },
        {
          type: 'table',
          headers: ['Scope', 'Description'],
          rows: [
            ['Global', 'Accessible throughout the relevant global/module environment'],
            ['Function', 'Variables available inside a function'],
            ['Block', 'let and const are limited to the block'],
            ['Lexical', 'Inner scopes can access bindings from outer lexical scopes'],
            ['Module', 'Bindings belong to the module unless exported']
          ]
        }
      ]
    },

    {
      id: 'hoisting',
      title: '13. Hoisting & Temporal Dead Zone',
      content: [
        {
          type: 'paragraph',
          text: 'Hoisting describes how JavaScript declarations are processed before execution of the surrounding code. Different declaration types behave differently.'
        },
        {
          type: 'heading',
          text: 'Function Declaration Hoisting'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `greet();

function greet() {
  console.log("Hello");
}`
        },
        {
          type: 'heading',
          text: 'var Hoisting'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `console.log(value); // undefined

var value = 10;`
        },
        {
          type: 'heading',
          text: 'let and const'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// console.log(value); // ReferenceError

let value = 10;`
        },
        {
          type: 'paragraph',
          text: 'The period between entering the scope and the point where a let or const declaration is initialized is called the Temporal Dead Zone (TDZ).'
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Interview Point',
          text: 'Do not describe hoisting as JavaScript literally moving every line of code to the top. It is better understood as the creation and initialization behavior of bindings during execution-context setup.'
        }
      ]
    },

    {
      id: 'strings',
      title: '14. String Methods',
      content: [
        {
          type: 'paragraph',
          text: 'Strings are immutable sequences of characters. JavaScript provides many methods for searching, extracting, transforming, and splitting strings.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const str = "JavaScript";

console.log(str.length);
console.log(str.slice(0, 4));
console.log(str.substring(4, 10));
console.log(str.toUpperCase());
console.log(str.toLowerCase());`
        },
        {
          type: 'table',
          headers: ['Method', 'Purpose'],
          rows: [
            ['length', 'Returns number of UTF-16 code units'],
            ['slice()', 'Extracts part of a string'],
            ['substring()', 'Extracts characters between indexes'],
            ['replace()', 'Replaces the first matching occurrence'],
            ['replaceAll()', 'Replaces all matching occurrences'],
            ['toUpperCase()', 'Converts to uppercase'],
            ['toLowerCase()', 'Converts to lowercase'],
            ['trim()', 'Removes whitespace from both ends'],
            ['trimStart()', 'Removes leading whitespace'],
            ['trimEnd()', 'Removes trailing whitespace'],
            ['charAt()', 'Returns character at an index'],
            ['charCodeAt()', 'Returns UTF-16 code unit value'],
            ['split()', 'Splits a string into an array'],
            ['includes()', 'Checks whether a string contains a value'],
            ['startsWith()', 'Checks beginning of string'],
            ['endsWith()', 'Checks ending of string'],
            ['concat()', 'Combines strings']
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const text = " Hello JavaScript ";

console.log(text.trim());
console.log(text.includes("JavaScript"));
console.log(text.startsWith(" Hello"));
console.log(text.endsWith(" "));
console.log(text.split(" "));`
        },
        {
          type: 'heading',
          text: 'Template Literals'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const name = "Bibhu";
const age = 21;

const message = \`My name is \${name} and I am \${age} years old.\`;

console.log(message);`
        }
      ]
    },

    {
      id: 'arrays',
      title: '15. Arrays & Array Methods',
      content: [
        {
          type: 'paragraph',
          text: 'An array is an ordered collection of values. JavaScript arrays can contain values of different types.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills[0]);
console.log(skills.length);`
        },
        {
          type: 'table',
          headers: ['Method', 'Purpose'],
          rows: [
            ['push()', 'Adds element to the end'],
            ['pop()', 'Removes last element'],
            ['unshift()', 'Adds element to the beginning'],
            ['shift()', 'Removes first element'],
            ['indexOf()', 'Finds first matching index'],
            ['includes()', 'Checks whether value exists'],
            ['at()', 'Gets value by index, including negative indexes'],
            ['slice()', 'Creates a shallow copy of a portion'],
            ['splice()', 'Adds/removes/replaces array elements'],
            ['join()', 'Creates a string from array elements'],
            ['concat()', 'Combines arrays'],
            ['reverse()', 'Reverses array in place'],
            ['Array.from()', 'Creates an array from an iterable or array-like value'],
            ['map()', 'Creates a transformed array'],
            ['filter()', 'Creates an array containing matching elements'],
            ['find()', 'Returns first matching element'],
            ['findIndex()', 'Returns index of first matching element'],
            ['some()', 'Checks whether at least one element matches'],
            ['every()', 'Checks whether all elements match'],
            ['reduce()', 'Reduces array to a single accumulated value'],
            ['sort()', 'Sorts array in place']
          ]
        },
        {
          type: 'heading',
          text: 'push and pop'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const numbers = [1, 2, 3];

numbers.push(4);
console.log(numbers);

const removed = numbers.pop();

console.log(numbers);
console.log(removed);`
        },
        {
          type: 'heading',
          text: 'slice vs splice'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const numbers = [10, 20, 30, 40, 50];

const copied = numbers.slice(1, 4);

console.log(copied);
console.log(numbers);

numbers.splice(1, 2);

console.log(numbers);`
        },
        {
          type: 'heading',
          text: 'map, filter and reduce'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

const even = numbers.filter(num => num % 2 === 0);

const total = numbers.reduce(
  (sum, num) => sum + num,
  0
);

console.log(doubled);
console.log(even);
console.log(total);`
        }
      ]
    },

    {
      id: 'spread-rest',
      title: '16. Spread Operator & Rest Parameter',
      content: [
        {
          type: 'heading',
          text: 'Spread Operator'
        },
        {
          type: 'paragraph',
          text: 'The spread syntax expands an iterable or object into individual elements or properties.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const first = [10, 20, 30];

const second = [40, 50, 60];

const merged = [...first, ...second];

console.log(merged);`
        },
        {
          type: 'heading',
          text: 'Spread with Objects'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: "Bibhu",
  age: 21
};

const updatedUser = {
  ...user,
  role: "Developer"
};

console.log(updatedUser);`
        },
        {
          type: 'heading',
          text: 'Rest Parameter'
        },
        {
          type: 'paragraph',
          text: 'The rest parameter collects multiple function arguments into an array. It must be the final parameter.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function sum(...numbers) {
  return numbers.reduce(
    (total, number) => total + number,
    0
  );
}

console.log(sum(10, 20, 30, 40));`
        },
        {
          type: 'table',
          headers: ['Spread', 'Rest'],
          rows: [
            ['Expands values', 'Collects values'],
            ['Used in function calls', 'Used in function parameter lists'],
            ['Used in array/object literals', 'Creates an array of remaining arguments'],
            ['Example: ...items', 'Example: function(...items) {}']
          ]
        }
      ]
    },

    {
      id: 'destructuring',
      title: '17. Destructuring',
      content: [
        {
          type: 'heading',
          text: 'Array Destructuring'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fruits = ["Apple", "Banana", "Mango"];

const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);`
        },
        {
          type: 'heading',
          text: 'Object Destructuring'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: "Bibhu",
  age: 21,
  role: "Developer"
};

const { name, age, role } = user;

console.log(name);
console.log(age);
console.log(role);`
        },
        {
          type: 'heading',
          text: 'Destructuring with Default Values'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: "Bibhu"
};

const {
  name,
  city = "Bhubaneswar"
} = user;

console.log(name);
console.log(city);`
        },
        {
          type: 'heading',
          text: 'Function Parameter Destructuring'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function showUser({ name, age }) {
  console.log(name, age);
}

showUser({
  name: "Bibhu",
  age: 21
});`
        }
      ]
    },

    {
      id: 'dom',
      title: '18. DOM & DOM Manipulation',
      content: [
        {
          type: 'paragraph',
          text: 'The Document Object Model (DOM) represents an HTML document as a tree of nodes and objects. JavaScript can use DOM APIs to read, modify, create, and remove elements.'
        },
        {
          type: 'heading',
          text: 'getElementById()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const title = document.getElementById("title");

console.log(title);`
        },
        {
          type: 'heading',
          text: 'getElementsByClassName()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const cards = document.getElementsByClassName("card");

console.log(cards);`
        },
        {
          type: 'heading',
          text: 'getElementsByTagName()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);`
        },
        {
          type: 'heading',
          text: 'querySelector()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const title = document.querySelector("#title");

console.log(title);`
        },
        {
          type: 'heading',
          text: 'querySelectorAll()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  console.log(card);
});`
        },
        {
          type: 'heading',
          text: 'createElement()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const div = document.createElement("div");

div.textContent = "Hello JavaScript";

document.body.appendChild(div);`
        },
        {
          type: 'heading',
          text: 'innerText vs textContent vs innerHTML'
        },
        {
          type: 'table',
          headers: ['Property', 'Purpose'],
          rows: [
            ['innerText', 'Works with rendered/visible text and layout-aware behavior'],
            ['textContent', 'Gets or sets text content without parsing HTML'],
            ['innerHTML', 'Gets or sets HTML markup inside an element']
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const element = document.querySelector("#message");

element.textContent = "<strong>Hello</strong>";

element.innerHTML = "<strong>Hello</strong>";`
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Security',
          text: 'Avoid assigning untrusted user input to innerHTML. Unsafe HTML insertion can create XSS vulnerabilities. Prefer textContent when inserting plain text.'
        }
      ]
    },

    {
      id: 'dom-manipulation',
      title: '19. DOM Element Manipulation',
      content: [
        {
          type: 'heading',
          text: 'appendChild()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const parent = document.querySelector("#container");

const child = document.createElement("p");

child.textContent = "New paragraph";

parent.appendChild(child);`
        },
        {
          type: 'heading',
          text: 'append()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const container = document.querySelector("#container");

const paragraph = document.createElement("p");

paragraph.textContent = "Hello";

container.append(
  paragraph,
  "Some additional text"
);`
        },
        {
          type: 'heading',
          text: 'remove()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const element = document.querySelector("#item");

element.remove();`
        },
        {
          type: 'heading',
          text: 'removeChild()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const parent = document.querySelector("#container");
const child = document.querySelector("#item");

parent.removeChild(child);`
        },
        {
          type: 'table',
          headers: ['Method', 'Description'],
          rows: [
            ['appendChild()', 'Adds one Node as the last child and returns the appended node'],
            ['append()', 'Adds multiple nodes or strings and returns undefined'],
            ['remove()', 'Removes the element itself'],
            ['removeChild()', 'Removes a specified child from its parent and returns the removed node']
          ]
        }
      ]
    },

    {
      id: 'attributes',
      title: '20. HTML Attributes with JavaScript',
      content: [
        {
          type: 'heading',
          text: 'setAttribute()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const image = document.querySelector("#profile");

image.setAttribute("alt", "Profile image");
image.setAttribute("title", "User Profile");`
        },
        {
          type: 'heading',
          text: 'getAttribute()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const image = document.querySelector("#profile");

const altText = image.getAttribute("alt");

console.log(altText);`
        },
        {
          type: 'heading',
          text: 'removeAttribute()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const image = document.querySelector("#profile");

image.removeAttribute("title");`
        },
        {
          type: 'heading',
          text: 'classList'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const box = document.querySelector(".box");

box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("selected");

console.log(box.classList.contains("active"));`
        }
      ]
    },

    {
      id: 'events',
      title: '21. Event Handling',
      content: [
        {
          type: 'paragraph',
          text: 'An event represents an occurrence such as a click, keyboard action, form submission, pointer movement, or page lifecycle event.'
        },
        {
          type: 'heading',
          text: 'addEventListener()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const button = document.querySelector("#myButton");

button.addEventListener("click", () => {
  console.log("Button clicked");
});`
        },
        {
          type: 'heading',
          text: 'Common Events'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'click',
            'dblclick',
            'mouseover',
            'mouseout',
            'mousemove',
            'keydown',
            'keyup',
            'input',
            'change',
            'submit',
            'focus',
            'blur',
            'DOMContentLoaded'
          ]
        },
        {
          type: 'heading',
          text: 'Event Object'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const button = document.querySelector("#myButton");

button.addEventListener("click", (event) => {
  console.log(event.type);
  console.log(event.target);
});`
        },
        {
          type: 'heading',
          text: 'Prevent Default'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Form submission handled with JavaScript");
});`
        }
      ]
    },

    {
      id: 'event-bubbling',
      title: '22. Event Bubbling, Capturing & Delegation',
      content: [
        {
          type: 'heading',
          text: 'Event Bubbling'
        },
        {
          type: 'paragraph',
          text: 'During bubbling, an event propagates from the target element upward through its ancestors.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const parent = document.querySelector("#parent");

const child = document.querySelector("#child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});`
        },
        {
          type: 'heading',
          text: 'Event Capturing'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `parent.addEventListener(
  "click",
  () => {
    console.log("Parent capture");
  },
  true
);`
        },
        {
          type: 'heading',
          text: 'Event Delegation'
        },
        {
          type: 'paragraph',
          text: 'Event delegation uses bubbling to attach one handler to a parent instead of attaching separate handlers to many child elements.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    console.log("Clicked:", event.target.textContent);
  }
});`
        },
        {
          type: 'table',
          headers: ['Phase', 'Direction'],
          rows: [
            ['Capturing', 'Window/Document → Parent → Target'],
            ['Target', 'Event reaches target element'],
            ['Bubbling', 'Target → Parent → Document/Window']
          ]
        }
      ]
    },

    {
      id: 'timers',
      title: '23. JavaScript Timers',
      content: [
        {
          type: 'heading',
          text: 'setTimeout()'
        },
        {
          type: 'paragraph',
          text: 'setTimeout schedules a callback to run after at least the specified delay. The delay does not guarantee exact execution time.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const timerId = setTimeout(() => {
  console.log("Executed later");
}, 2000);

console.log(timerId);`
        },
        {
          type: 'heading',
          text: 'clearTimeout()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const timerId = setTimeout(() => {
  console.log("This will not execute");
}, 3000);

clearTimeout(timerId);`
        },
        {
          type: 'heading',
          text: 'setInterval()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `let count = 0;

const intervalId = setInterval(() => {
  count++;

  console.log(count);

  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);`
        }
      ]
    },

    {
      id: 'promises',
      title: '24. JavaScript Promises',
      content: [
        {
          type: 'paragraph',
          text: 'A Promise represents the eventual completion or failure of an asynchronous operation.'
        },
        {
          type: 'heading',
          text: 'Promise States'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Pending: The operation has not completed.',
            'Fulfilled: The operation completed successfully.',
            'Rejected: The operation failed.'
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject(new Error("Operation failed"));
  }
});

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Finished");
  });`
        },
        {
          type: 'heading',
          text: 'Promise.all()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const first = Promise.resolve("First");
const second = Promise.resolve("Second");

Promise.all([first, second])
  .then(results => {
    console.log(results);
  });`
        },
        {
          type: 'heading',
          text: 'Promise.allSettled()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failed")
]).then(results => {
  console.log(results);
});`
        },
        {
          type: 'heading',
          text: 'Promise.race()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `Promise.race([
  fetch("/api/fast"),
  fetch("/api/slow")
]).then(response => {
  console.log(response);
});`
        }
      ]
    },

    {
      id: 'async-await',
      title: '25. Async/Await',
      content: [
        {
          type: 'paragraph',
          text: 'async and await provide syntax for working with Promises in a style that is easier to read than deeply nested promise chains.'
        },
        {
          type: 'heading',
          text: 'async Function'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function greet() {
  return "Hello";
}

greet().then(result => {
  console.log(result);
});`
        },
        {
          type: 'heading',
          text: 'await'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function getData() {
  const response = await fetch(
    "https://api.example.com/users"
  );

  const data = await response.json();

  console.log(data);
}

getData();`
        },
        {
          type: 'heading',
          text: 'Error Handling'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function getUser() {
  try {
    const response = await fetch(
      "https://api.example.com/user"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const user = await response.json();

    console.log(user);

  } catch (error) {
    console.error(error.message);
  }
}

getUser();`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Important',
          text: 'An async function always returns a Promise. await pauses execution of that async function until the awaited Promise settles; it does not block the entire JavaScript runtime.'
        }
      ]
    },

    {
      id: 'fetch-api',
      title: '26. Fetch API & API Requests',
      content: [
        {
          type: 'paragraph',
          text: 'The Fetch API provides a modern Promise-based interface for making HTTP requests from browser JavaScript and other environments that implement fetch.'
        },
        {
          type: 'heading',
          text: 'GET Request'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function getUsers() {
  const response = await fetch(
    "https://api.example.com/users"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();

  console.log(users);
}

getUsers();`
        },
        {
          type: 'heading',
          text: 'POST Request'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function createUser() {
  const response = await fetch(
    "https://api.example.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Bibhu",
        age: 21
      })
    }
  );

  const data = await response.json();

  console.log(data);
}

createUser();`
        },
        {
          type: 'table',
          headers: ['HTTP Method', 'Common Purpose'],
          rows: [
            ['GET', 'Retrieve data'],
            ['POST', 'Create data'],
            ['PUT', 'Replace/update a resource'],
            ['PATCH', 'Partially update a resource'],
            ['DELETE', 'Delete a resource']
          ]
        }
      ]
    },

    {
      id: 'closures',
      title: '27. Closures',
      content: [
        {
          type: 'paragraph',
          text: 'A closure occurs when a function retains access to variables from its lexical scope even after the outer function has finished executing.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());`
        },
        {
          type: 'heading',
          text: 'Practical Use Case'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function createUser() {
  let balance = 1000;

  return {
    getBalance() {
      return balance;
    },

    deposit(amount) {
      balance += amount;
    }
  };
}

const account = createUser();

account.deposit(500);

console.log(account.getBalance());`
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Interview Point',
          text: 'Closures are useful for data privacy, factory functions, callbacks, event handlers, memoization, and maintaining state between function calls.'
        }
      ]
    },

    {
      id: 'this',
      title: '28. this Keyword',
      content: [
        {
          type: 'paragraph',
          text: 'The value of this depends on how a function is called. Arrow functions are different because they do not create their own this binding.'
        },
        {
          type: 'heading',
          text: 'Object Method'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: "Bibhu",

  greet() {
    console.log(this.name);
  }
};

user.greet();`
        },
        {
          type: 'heading',
          text: 'Arrow Function'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: "Bibhu",

  greet: () => {
    console.log(this.name);
  }
};

user.greet();`
        },
        {
          type: 'heading',
          text: 'call, apply and bind'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function greet(city) {
  console.log(this.name, city);
}

const user = {
  name: "Bibhu"
};

greet.call(user, "Bhubaneswar");

greet.apply(user, ["Bhubaneswar"]);

const boundGreet = greet.bind(user);

boundGreet("Bhubaneswar");`
        },
        {
          type: 'table',
          headers: ['Method', 'Purpose'],
          rows: [
            ['call()', 'Calls function with a specified this and individual arguments'],
            ['apply()', 'Calls function with a specified this and arguments as an array-like value'],
            ['bind()', 'Creates a new function with a fixed this value']
          ]
        }
      ]
    },

    {
      id: 'objects',
      title: '29. Objects & Object Methods',
      content: [
        {
          type: 'paragraph',
          text: 'Objects store collections of key-value pairs and can contain properties and methods.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: "Bibhu",
  age: 21,

  greet() {
    console.log("Hello " + this.name);
  }
};

console.log(user.name);
user.greet();`
        },
        {
          type: 'heading',
          text: 'Object.keys()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: "Bibhu",
  age: 21
};

console.log(Object.keys(user));`
        },
        {
          type: 'heading',
          text: 'Object.values()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `console.log(Object.values(user));`
        },
        {
          type: 'heading',
          text: 'Object.entries()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `console.log(Object.entries(user));`
        },
        {
          type: 'heading',
          text: 'Object.assign()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const defaults = {
  theme: "light",
  language: "en"
};

const settings = {
  theme: "dark"
};

const result = Object.assign(
  {},
  defaults,
  settings
);

console.log(result);`
        }
      ]
    },

    {
      id: 'error-handling',
      title: '30. Error Handling',
      content: [
        {
          type: 'heading',
          text: 'try...catch'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Something went wrong:", error.message);
}`
        },
        {
          type: 'heading',
          text: 'finally'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `try {
  console.log("Trying...");
} catch (error) {
  console.error(error);
} finally {
  console.log("Always executes");
}`
        },
        {
          type: 'heading',
          text: 'throw'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}`
        },
        {
          type: 'heading',
          text: 'Custom Error'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid email");`
        }
      ]
    },

    {
      id: 'modules',
      title: '31. JavaScript Modules',
      content: [
        {
          type: 'paragraph',
          text: 'ES modules allow JavaScript applications to split code into reusable files using export and import.'
        },
        {
          type: 'heading',
          text: 'Named Export'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// math.js

export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;`
        },
        {
          type: 'heading',
          text: 'Named Import'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import { add, PI } from "./math.js";

console.log(add(10, 20));
console.log(PI);`
        },
        {
          type: 'heading',
          text: 'Default Export'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// user.js

export default function getUser() {
  return {
    name: "Bibhu"
  };
}

// app.js

import getUser from "./user.js";

console.log(getUser());`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Module Scope',
          text: 'Top-level variables declared inside an ES module are scoped to that module and are not automatically global.'
        }
      ]
    },

    {
      id: 'json',
      title: '32. JSON',
      content: [
        {
          type: 'paragraph',
          text: 'JSON (JavaScript Object Notation) is a text format commonly used for exchanging structured data between clients and servers.'
        },
        {
          type: 'heading',
          text: 'JSON.stringify()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = {
  name: "Bibhu",
  age: 21
};

const json = JSON.stringify(user);

console.log(json);`
        },
        {
          type: 'heading',
          text: 'JSON.parse()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const json = '{"name":"Bibhu","age":21}';

const user = JSON.parse(json);

console.log(user.name);`
        },
        {
          type: 'table',
          headers: ['Method', 'Purpose'],
          rows: [
            ['JSON.stringify()', 'JavaScript value → JSON string'],
            ['JSON.parse()', 'JSON string → JavaScript value']
          ]
        }
      ]
    },

    {
      id: 'array-advanced',
      title: '33. Advanced Array Methods',
      content: [
        {
          type: 'heading',
          text: 'map()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(result);`
        },
        {
          type: 'heading',
          text: 'filter()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter(
  num => num % 2 === 0
);

console.log(even);`
        },
        {
          type: 'heading',
          text: 'find()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const user = users.find(
  user => user.id === 2
);

console.log(user);`
        },
        {
          type: 'heading',
          text: 'some() and every()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const numbers = [2, 4, 6, 8];

console.log(
  numbers.some(num => num > 5)
);

console.log(
  numbers.every(num => num % 2 === 0)
);`
        },
        {
          type: 'heading',
          text: 'reduce()'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const prices = [100, 200, 300];

const total = prices.reduce(
  (sum, price) => sum + price,
  0
);

console.log(total);`
        }
      ]
    },

    {
      id: 'map-set',
      title: '34. Map & Set',
      content: [
        {
          type: 'heading',
          text: 'Set'
        },
        {
          type: 'paragraph',
          text: 'Set stores unique values.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const numbers = new Set([
  1,
  2,
  2,
  3
]);

console.log(numbers);

numbers.add(4);

console.log(numbers.has(3));

numbers.delete(2);

console.log(numbers);`
        },
        {
          type: 'heading',
          text: 'Map'
        },
        {
          type: 'paragraph',
          text: 'Map stores key-value pairs and allows keys of any value type.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const users = new Map();

users.set(1, "Bibhu");
users.set(2, "Rahul");

console.log(users.get(1));
console.log(users.has(2));

users.delete(2);

console.log(users);`
        },
        {
          type: 'table',
          headers: ['Set', 'Map'],
          rows: [
            ['Stores unique values', 'Stores key-value pairs'],
            ['Use add()', 'Use set()'],
            ['Use has() to check values', 'Use has() to check keys'],
            ['Good for uniqueness', 'Good for key-value associations']
          ]
        }
      ]
    },

    {
      id: 'prototype-oop',
      title: '35. Prototypes & Object-Oriented JavaScript',
      content: [
        {
          type: 'paragraph',
          text: 'JavaScript uses a prototype-based object model. Objects can inherit properties and methods through their prototype chain.'
        },
        {
          type: 'heading',
          text: 'Constructor Function'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log("Hello " + this.name);
};

const user = new User("Bibhu");

user.greet();`
        },
        {
          type: 'heading',
          text: 'Class Syntax'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const user = new User("Bibhu");

user.greet();`
        },
        {
          type: 'heading',
          text: 'Inheritance'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

class Admin extends User {
  deleteUser() {
    console.log("User deleted");
  }
}

const admin = new Admin("Bibhu");

admin.greet();
admin.deleteUser();`
        }
      ]
    },

    {
      id: 'memory-performance',
      title: '36. JavaScript Performance & Best Practices',
      content: [
        {
          type: 'heading',
          text: 'Avoid Unnecessary DOM Operations'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  const item = document.createElement("li");
  item.textContent = \`Item \${i}\`;

  fragment.appendChild(item);
}

document.querySelector("#list")
  .appendChild(fragment);`
        },
        {
          type: 'heading',
          text: 'Use Efficient Array Operations'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];

const activeUsers = users.filter(
  user => user.active
);

console.log(activeUsers);`
        },
        {
          type: 'heading',
          text: 'Avoid Blocking the Main Thread'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Avoid unnecessarily large synchronous loops.',
            'Break large tasks into smaller chunks when appropriate.',
            'Use Web Workers for suitable CPU-heavy browser tasks.',
            'Optimize expensive DOM operations.',
            'Debounce or throttle high-frequency events.',
            'Lazy-load expensive resources when appropriate.'
          ]
        },
        {
          type: 'heading',
          text: 'Debouncing Example'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function debounce(callback, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const search = debounce((value) => {
  console.log("Searching:", value);
}, 500);`
        },
        {
          type: 'heading',
          text: 'Production Best Practices'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Use const and let instead of var for modern code.',
            'Prefer strict equality === and !==.',
            'Keep functions small and focused.',
            'Use meaningful variable and function names.',
            'Handle asynchronous errors properly.',
            'Avoid exposing secrets in frontend JavaScript.',
            'Validate and sanitize untrusted input.',
            'Avoid unsafe HTML injection.',
            'Use modules to organize large applications.',
            'Use linting and formatting tools.',
            'Remove unnecessary dependencies.',
            'Optimize expensive rendering and DOM operations.'
          ]
        }
      ]
    },

    {
      id: 'interview-questions',
      title: '37. JavaScript Interview Questions',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is JavaScript?',
              answer:
                'JavaScript is a high-level, dynamically typed programming language widely used for interactive web applications, backend development, and other application environments.'
            },
            {
              question: 'Is JavaScript interpreted or compiled?',
              answer:
                'Modern JavaScript engines use a combination of parsing, interpretation, JIT compilation, and runtime optimization. Therefore, JavaScript should not be described as purely interpreted.'
            },
            {
              question: 'What is the difference between == and ===?',
              answer:
                '== performs equality comparison with type coercion, while === compares both type and value without performing that coercion.'
            },
            {
              question: 'What is the difference between null and undefined?',
              answer:
                'undefined generally indicates that a value has not been assigned or is missing, while null is an intentional representation of an empty or absent value.'
            },
            {
              question: 'What is hoisting?',
              answer:
                'Hoisting refers to the way JavaScript declarations are processed during execution-context creation. Function declarations are available before their textual position, while let and const remain inaccessible during their Temporal Dead Zone.'
            },
            {
              question: 'What is the Temporal Dead Zone?',
              answer:
                'The Temporal Dead Zone is the period from entering a scope until a let or const declaration is initialized. Accessing the binding during this period causes a ReferenceError.'
            },
            {
              question: 'What is scope?',
              answer:
                'Scope determines where variables and other bindings can be accessed. JavaScript supports global, function, block, lexical, and module scopes.'
            },
            {
              question: 'What is a closure?',
              answer:
                'A closure is created when a function retains access to variables from its lexical environment even after the outer function has finished executing.'
            },
            {
              question: 'What is a callback function?',
              answer:
                'A callback is a function passed to another function so that it can be called later or when a particular operation occurs.'
            },
            {
              question: 'What is a higher-order function?',
              answer:
                'A higher-order function accepts functions as arguments, returns a function, or both.'
            },
            {
              question: 'What is the difference between for...in and for...of?',
              answer:
                'for...in iterates over enumerable property keys, while for...of iterates over values produced by an iterable.'
            },
            {
              question: 'What is the difference between let and const?',
              answer:
                'Both are block-scoped. let allows reassignment, while const does not allow reassignment of the binding after initialization.'
            },
            {
              question: 'What is the difference between var, let and const?',
              answer:
                'var is function-scoped and permits re-declaration and reassignment. let is block-scoped and permits reassignment but not re-declaration in the same scope. const is block-scoped and does not permit reassignment of its binding.'
            },
            {
              question: 'What is the spread operator?',
              answer:
                'Spread syntax expands iterable values or object properties into another expression, such as an array literal, object literal, or function call.'
            },
            {
              question: 'What is the rest parameter?',
              answer:
                'The rest parameter collects remaining function arguments into an array.'
            },
            {
              question: 'What is the DOM?',
              answer:
                'The Document Object Model represents an HTML document as a tree of nodes and objects that JavaScript can access and manipulate.'
            },
            {
              question: 'What is event bubbling?',
              answer:
                'Event bubbling is the propagation phase in which an event moves from the target element upward through its ancestors.'
            },
            {
              question: 'What is event delegation?',
              answer:
                'Event delegation attaches an event listener to a parent and uses event propagation to handle events originating from matching child elements.'
            },
            {
              question: 'What is a Promise?',
              answer:
                'A Promise represents the eventual completion or failure of an asynchronous operation and has pending, fulfilled, and rejected states.'
            },
            {
              question: 'What is async/await?',
              answer:
                'async/await is syntax for working with Promises using an easier-to-read sequential style. An async function always returns a Promise.'
            },
            {
              question: 'What is the difference between map() and forEach()?',
              answer:
                'map() creates and returns a new array containing transformed values. forEach() executes a callback for each element and does not create a transformed result array.'
            },
            {
              question: 'What is the difference between slice() and splice()?',
              answer:
                'slice() returns a shallow copy of a selected portion without changing the original array. splice() changes the original array by adding, removing, or replacing elements.'
            },
            {
              question: 'What is the difference between innerHTML and textContent?',
              answer:
                'textContent treats assigned content as text, while innerHTML parses assigned content as HTML. Untrusted input should not be inserted into innerHTML without appropriate sanitization.'
            },
            {
              question: 'What is the this keyword?',
              answer:
                'this refers to a context determined by how a function is called. Arrow functions do not create their own this binding and instead use the surrounding lexical this.'
            },
            {
              question: 'What are call(), apply() and bind()?',
              answer:
                'call() and apply() invoke a function with a chosen this value immediately. call() receives arguments individually while apply() receives them as an array-like value. bind() creates a new function with a chosen this value.'
            },
            {
              question: 'What is the difference between synchronous and asynchronous JavaScript?',
              answer:
                'Synchronous code executes in sequence, while asynchronous APIs allow work to be scheduled and handled later without requiring the current JavaScript execution to wait for the external operation to finish.'
            },
            {
              question: 'What is the event loop?',
              answer:
                'The event loop coordinates JavaScript execution with asynchronous operations and task queues, allowing callbacks and Promise reactions to run when the call stack is available.'
            },
            {
              question: 'What is JSON.stringify()?',
              answer:
                'JSON.stringify() converts a JavaScript value into a JSON string.'
            },
            {
              question: 'What is JSON.parse()?',
              answer:
                'JSON.parse() converts a valid JSON string into a JavaScript value.'
            },
            {
              question: 'What is prototype inheritance?',
              answer:
                'Prototype inheritance allows an object to access properties and methods through its prototype chain.'
            },
            {
              question: 'What is the difference between primitive and reference values?',
              answer:
                'Primitive values represent immutable individual values such as strings, numbers, and booleans. Objects, including arrays and functions, are reference values that can contain mutable properties.'
            }
          ]
        }
      ]
    },

    {
      id: 'quick-reference',
      title: '38. JavaScript Quick Reference',
      content: [
        {
          type: 'table',
          headers: ['Topic', 'Key Concepts'],
          rows: [
            ['Variables', 'var, let, const'],
            ['Data Types', 'String, Number, BigInt, Boolean, Undefined, Null, Symbol, Object'],
            ['Operators', 'Arithmetic, Comparison, Logical, Assignment, Optional Chaining, Nullish Coalescing'],
            ['Conditions', 'if, else, else if, switch, ternary'],
            ['Loops', 'for, while, do...while, for...in, for...of'],
            ['Functions', 'Named, Anonymous, Expression, Arrow, Callback, HOF, IIFE'],
            ['Scope', 'Global, Function, Block, Lexical, Module'],
            ['Async', 'Promise, async/await, fetch, timers'],
            ['DOM', 'querySelector, createElement, append, remove'],
            ['Events', 'addEventListener, bubbling, capturing, delegation'],
            ['Arrays', 'map, filter, reduce, find, some, every, slice, splice'],
            ['Objects', 'keys, values, entries, assign'],
            ['Modern JS', 'Destructuring, Spread, Rest, Modules, Classes'],
            ['Error Handling', 'try, catch, finally, throw'],
            ['Data Exchange', 'JSON.parse, JSON.stringify']
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Modern JavaScript example

const users = [
  {
    id: 1,
    name: "Bibhu",
    active: true
  },
  {
    id: 2,
    name: "Rahul",
    active: false
  }
];

const activeUsers = users
  .filter(user => user.active)
  .map(user => ({
    ...user,
    role: "Developer"
  }));

console.log(activeUsers);`
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Learning Path',
          text: 'For practical web development, learn JavaScript fundamentals first, then master functions and scope, arrays and objects, DOM and events, asynchronous JavaScript, Promises and async/await, modules, APIs, and finally move into React or another frontend framework.'
        }
      ]
    }
  ]
};

export default javascriptContent;
