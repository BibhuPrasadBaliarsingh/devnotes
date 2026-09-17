export const reactContent = {
  id: 'react',
  slug: 'react',
  title: 'React.js',
  subtitle: 'Complete Library Guide & Reference',
  category: 'Web Development',
  description:
    'Complete React library guide: JSX, component lifecycle, props, state management, hooks (useState, useEffect, useMemo), Virtual DOM, performance optimization, and architectural best practices.',
  sections: [
    {
      id: 'introduction-to-react',
      title: '1. Introduction to React',
      summary:
        'React is a component-based JavaScript library for building interactive user interfaces efficiently through declarative rendering and reconciliation.',
      content: [
        {
          type: 'paragraph',
          text: 'React is an open-source JavaScript library for building user interfaces, especially single-page applications and component-driven web applications. Instead of directly manipulating the DOM for every UI change, developers describe what the UI should look like for a particular state, and React determines the necessary updates.',
        },
        {
          type: 'heading',
          text: 'What is React?',
        },
        {
          type: 'paragraph',
          text: 'React was originally developed at Facebook and introduced publicly in 2013. Its primary design idea is to divide an application into reusable components. Components receive inputs such as props and state and return a description of the UI.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default function App() {
  return (
    <main>
      <Welcome />
      <p>Build interfaces with reusable components.</p>
    </main>
  );
}`,
        },
        {
          type: 'subheading',
          text: 'Why React is popular',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Component-based architecture promotes reuse and maintainability.',
            'Declarative UI makes application behavior easier to reason about.',
            'React uses reconciliation to efficiently determine UI changes.',
            'Hooks provide state and lifecycle-related capabilities to function components.',
            'A large ecosystem provides routing, state management, testing, data fetching, and other tools.',
            'React can be used for traditional web applications, server-rendered applications, mobile applications through React Native, and other environments.',
          ],
        },
        {
          type: 'heading',
          text: 'Virtual DOM',
        },
        {
          type: 'paragraph',
          text: 'The Virtual DOM is an in-memory representation of the UI. When state or props change, React creates a new representation, compares it with the previous one, and determines which parts of the rendered output need to be updated. This comparison is part of reconciliation.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Reconciliation',
        },
        {
          type: 'paragraph',
          text: "Reconciliation is React's process for determining how the current UI tree differs from the previous tree. React uses element types, keys, and tree structure to make update decisions. Stable keys are especially important when rendering lists because they help React identify which items have been added, removed, or moved.",
        },
        {
          type: 'code',
          language: 'jsx',
          code: `const users = [
  { id: 1, name: 'Bibhu' },
  { id: 2, name: 'Rahul' },
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Important',
          text: 'The Virtual DOM should not be understood as simply making every DOM operation faster. React provides a declarative programming model and an efficient reconciliation system so developers can focus on application state and UI behavior.',
        },
        {
          type: 'table',
          headers: ['Concept', 'Meaning'],
          rows: [
            ['Component', 'Reusable unit of UI and behavior'],
            ['Props', 'Read-only data passed into a component'],
            ['State', 'Data managed by a component that can trigger rendering'],
            ['JSX', 'Syntax used to describe UI using JavaScript-like expressions'],
            ['Virtual DOM', 'In-memory representation used during rendering'],
            ['Reconciliation', 'Process used to determine required UI changes'],
          ],
        },
      ],
    },

    {
      id: 'jsx-and-components',
      title: '2. JSX & Components',
      summary:
        'JSX lets developers describe UI declaratively while components organize applications into reusable and independently maintainable pieces.',
      content: [
        {
          type: 'heading',
          text: 'JSX Basics',
        },
        {
          type: 'paragraph',
          text: 'JSX is a syntax extension commonly used with React. It allows markup-like syntax to be written inside JavaScript. JSX is transformed into JavaScript expressions by the build toolchain.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `const name = 'Bibhu';

function Greeting() {
  return <h1>Hello, {name}!</h1>;
}`,
        },
        {
          type: 'subheading',
          text: 'JSX rules',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'A component must return a single root element unless a Fragment is used.',
            'JavaScript expressions are placed inside curly braces.',
            'Use className instead of class for CSS classes.',
            'HTML attributes generally use camelCase naming in JSX, such as onClick and tabIndex.',
            'Tags must be properly closed.',
            'Conditional and list rendering can be performed using normal JavaScript expressions.',
          ],
        },
        {
          type: 'code',
          language: 'jsx',
          code: `function Profile({ user }) {
  const isAdmin = user.role === 'admin';

  return (
    <section className="profile">
      <h2>{user.name}</h2>
      {isAdmin && <span>Administrator</span>}
      <button type="button" onClick={() => console.log(user.id)}>
        View Profile
      </button>
    </section>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Functional Components',
        },
        {
          type: 'paragraph',
          text: 'Functional components are JavaScript functions that return React elements. Modern React development primarily uses function components together with hooks.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `function Button({ label, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}

function App() {
  return (
    <Button
      label="Save"
      onClick={() => console.log('Saved')}
    />
  );
}`,
        },
        {
          type: 'heading',
          text: 'Class Components',
        },
        {
          type: 'paragraph',
          text: 'Class components were historically used for state and lifecycle management. They remain supported, but new application code generally uses function components and hooks.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`,
        },
        {
          type: 'heading',
          text: 'Fragments',
        },
        {
          type: 'paragraph',
          text: 'Fragments allow a component to return multiple sibling elements without adding an unnecessary DOM wrapper.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `function UserInfo() {
  return (
    <>
      <h2>Bibhu</h2>
      <p>MERN Stack Developer</p>
    </>
  );
}`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Production Practice',
          text: 'Keep components focused on a clear responsibility. Extract repeated UI or complex behavior into reusable components instead of creating very large components with unrelated responsibilities.',
        },
      ],
    },

    {
      id: 'props-and-state',
      title: '3. Props & State',
      summary:
        'Props pass data into components while state represents data managed by a component that can change over time and trigger re-rendering.',
      content: [
        {
          type: 'heading',
          text: 'Props',
        },
        {
          type: 'paragraph',
          text: 'Props are inputs passed from a parent component to a child component. A child should treat props as read-only and communicate changes back through callback functions supplied by the parent.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `function UserCard({ name, role, onSelect }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{role}</p>
      <button onClick={onSelect}>Select</button>
    </article>
  );
}

function App() {
  return (
    <UserCard
      name="Bibhu"
      role="React Developer"
      onSelect={() => console.log('Selected')}
    />
  );
}`,
        },
        {
          type: 'heading',
          text: 'State',
        },
        {
          type: 'paragraph',
          text: 'State is data whose changes affect the rendered output. Updating state through its setter schedules a new render.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((current) => current + 1)}>
        Increment
      </button>
    </div>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Prop Drilling',
        },
        {
          type: 'paragraph',
          text: 'Prop drilling occurs when data or callbacks are passed through several intermediate components even though those components do not directly use the data. For small component trees this can be acceptable; for deeply shared state, Context or a state-management library may be more appropriate.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `function App() {
  const user = { name: 'Bibhu' };
  return <Dashboard user={user} />;
}

function Dashboard({ user }) {
  return <Sidebar user={user} />;
}

function Sidebar({ user }) {
  return <UserProfile user={user} />;
}

function UserProfile({ user }) {
  return <p>{user.name}</p>;
}`,
        },
        {
          type: 'heading',
          text: 'Lifting State Up',
        },
        {
          type: 'paragraph',
          text: 'When multiple sibling components need to coordinate the same piece of state, move that state to their closest common parent and pass the current value and event handlers down as props.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useState } from 'react';

function Parent() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <UserList selectedId={selectedId} onSelect={setSelectedId} />
      <UserDetails userId={selectedId} />
    </>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Controlled Components',
        },
        {
          type: 'paragraph',
          text: 'A controlled form element gets its value from React state and updates that state through an event handler. This gives React a single source of truth for the input value.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `function LoginForm() {
  const [email, setEmail] = useState('');

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <button type="submit">Login</button>
    </form>
  );
}`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Avoid Direct Mutation',
          text: 'Do not directly mutate objects or arrays stored in state. Create a new value and pass it to the state setter so React can correctly process the update.',
        },
      ],
    },

    {
      id: 'core-hooks',
      title: '4. Core Hooks',
      summary:
        'Core hooks provide function components with local state, side effects, references, and access to shared Context values.',
      content: [
        {
          type: 'heading',
          text: 'useState',
        },
        {
          type: 'paragraph',
          text: 'useState declares a state variable and a setter function. When the next state depends on the previous state, use the functional updater form.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useState } from 'react';

function Cart() {
  const [items, setItems] = useState([]);

  function addItem(product) {
    setItems((currentItems) => [...currentItems, product]);
  }

  return (
    <div>
      <p>Items: {items.length}</p>
      <button onClick={() => addItem({ id: Date.now(), name: 'Keyboard' })}>
        Add Item
      </button>
    </div>
  );
}`,
        },
        {
          type: 'heading',
          text: 'useEffect',
        },
        {
          type: 'paragraph',
          text: 'useEffect is used to synchronize a component with external systems such as browser APIs, subscriptions, timers, network connections, or third-party libraries. It should not be used merely to calculate values that can be derived during rendering.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadUser() {
      const response = await fetch(
        \`https://api.example.com/users/\${userId}\`
      );
      const data = await response.json();
      if (!ignore) {
        setUser(data);
      }
    }

    loadUser();

    return () => {
      ignore = true;
    };
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return <h2>{user.name}</h2>;
}`,
        },
        {
          type: 'heading',
          text: 'useRef',
        },
        {
          type: 'paragraph',
          text: 'useRef stores a mutable value that persists between renders without causing a re-render when it changes. It is commonly used to reference DOM elements or retain values such as timer IDs.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useRef } from 'react';

function SearchInput() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Search..." />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}`,
        },
        {
          type: 'heading',
          text: 'useContext',
        },
        {
          type: 'paragraph',
          text: 'useContext reads a value from the nearest matching Context provider. It is useful for values that need to be available across a component subtree, such as theme, locale, or authenticated-user information.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}`,
        },
        {
          type: 'subheading',
          text: 'Rules of Hooks',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Call hooks only at the top level of a function component or custom hook.',
            'Do not call hooks inside loops, conditions, or nested functions.',
            'Call hooks from React function components or custom hooks.',
            'Keep dependency arrays accurate when using effects and memoization hooks.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Common Mistake',
          text: 'Avoid using useEffect to synchronize one piece of React state with another when the value can simply be derived during rendering. Unnecessary effects can create extra renders and synchronization bugs.',
        },
      ],
    },

    {
      id: 'advanced-hooks',
      title: '5. Advanced Hooks',
      summary:
        'Advanced hooks help manage complex state, preserve expensive calculations or function identities when appropriate, and encapsulate reusable behavior.',
      content: [
        {
          type: 'heading',
          text: 'useMemo',
        },
        {
          type: 'paragraph',
          text: 'useMemo caches the result of a calculation between renders until its dependencies change. It is primarily useful when a calculation is expensive or when referential stability is important for another optimization.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useMemo, useState } from 'react';

function ProductList({ products }) {
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    const query = search.toLowerCase();
    return products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }, [products, search]);

  return (
    <>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products"
      />
      {filteredProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  );
}`,
        },
        {
          type: 'heading',
          text: 'useCallback',
        },
        {
          type: 'paragraph',
          text: 'useCallback caches a function definition between renders until its dependencies change. It is most useful when passing callbacks to memoized child components or when a stable function reference is required.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { memo, useCallback, useState } from 'react';

const SaveButton = memo(function SaveButton({ onSave }) {
  console.log('SaveButton rendered');
  return <button onClick={onSave}>Save</button>;
});

function Editor() {
  const [text, setText] = useState('');

  const handleSave = useCallback(() => {
    console.log('Saving:', text);
  }, [text]);

  return (
    <>
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <SaveButton onSave={handleSave} />
    </>
  );
}`,
        },
        {
          type: 'heading',
          text: 'useReducer',
        },
        {
          type: 'paragraph',
          text: 'useReducer is useful when state transitions are complex or when multiple actions update related state. A reducer receives the current state and an action and returns the next state.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Custom Hooks',
        },
        {
          type: 'paragraph',
          text: 'A custom hook is a JavaScript function whose name starts with use and that can call other hooks. Custom hooks allow reusable stateful logic to be extracted from components.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useEffect, useState } from 'react';

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() { setIsOnline(true); }
    function handleOffline() { setIsOnline(false); }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

function Status() {
  const isOnline = useOnlineStatus();
  return <p>{isOnline ? 'Online' : 'Offline'}</p>;
}`,
        },
        {
          type: 'table',
          headers: ['Hook', 'Primary Use'],
          rows: [
            ['useState', 'Local component state'],
            ['useEffect', 'Synchronization with external systems'],
            ['useRef', 'Persistent mutable values and DOM references'],
            ['useContext', 'Reading shared Context values'],
            ['useMemo', 'Caching calculated values'],
            ['useCallback', 'Caching function references'],
            ['useReducer', 'Complex state transitions'],
            ['Custom Hook', 'Reusable stateful logic'],
          ],
        },
      ],
    },

    {
      id: 'component-lifecycle',
      title: '6. Component Lifecycle',
      summary:
        'A React component progresses through rendering and commitment phases, while effects can synchronize external systems when components mount, update, and unmount.',
      content: [
        {
          type: 'heading',
          text: 'Mounting',
        },
        {
          type: 'paragraph',
          text: 'Mounting refers to a component being added to the UI. With function components, an effect with an empty dependency array can be used for synchronization that starts after the component commits, provided that the effect actually represents an external synchronization.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useEffect } from 'react';

function AnalyticsPage() {
  useEffect(() => {
    console.log('Page became active');

    return () => {
      console.log('Page cleanup');
    };
  }, []);

  return <h1>Dashboard</h1>;
}`,
        },
        {
          type: 'heading',
          text: 'Updating',
        },
        {
          type: 'paragraph',
          text: 'An update occurs when a component renders again because its state, props, context, or another relevant input changed. Effects with dependencies are re-synchronized when their dependencies change.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useEffect } from 'react';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId]);

  return <h2>Room: {roomId}</h2>;
}`,
        },
        {
          type: 'heading',
          text: 'Unmounting',
        },
        {
          type: 'paragraph',
          text: 'Unmounting occurs when a component is removed from the UI. Effects can return cleanup functions to unsubscribe from events, disconnect external connections, clear timers, or release other resources.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `useEffect(() => {
  const timerId = setInterval(() => {
    console.log('Polling...');
  }, 5000);

  return () => {
    clearInterval(timerId);
  };
}, []);`,
        },
        {
          type: 'heading',
          text: 'Class Lifecycle Equivalents',
        },
        {
          type: 'table',
          headers: ['Class Lifecycle', 'Function Component Pattern'],
          rows: [
            ['componentDidMount', 'useEffect with appropriate dependencies'],
            ['componentDidUpdate', 'useEffect with dependencies'],
            ['componentWillUnmount', 'Cleanup function returned from useEffect'],
            [
              'shouldComponentUpdate',
              'Memoization and architectural optimization where appropriate',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Effect Mental Model',
          text: 'Think of an effect as synchronization with something outside React. The dependency array describes the reactive values that determine when that synchronization must be updated.',
        },
      ],
    },

    {
      id: 'react-router',
      title: '7. React Router',
      summary:
        'React Router provides client-side routing primitives for mapping URLs to UI and navigating between application views.',
      content: [
        {
          type: 'heading',
          text: 'Basic Routes',
        },
        {
          type: 'paragraph',
          text: 'A typical React Router application defines a route configuration that maps URL paths to components. The exact APIs can vary between React Router releases, so project documentation should be checked when adopting a new major version.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/products/:id', element: <Product /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}`,
        },
        {
          type: 'heading',
          text: 'Navigation with Link',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}`,
        },
        {
          type: 'heading',
          text: 'useParams',
        },
        {
          type: 'paragraph',
          text: 'useParams reads dynamic parameters from the current URL. For example, a route such as /products/:id makes the id parameter available to the matching component.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  return <h1>Product ID: {id}</h1>;
}`,
        },
        {
          type: 'heading',
          text: 'useNavigate',
        },
        {
          type: 'paragraph',
          text: 'useNavigate provides programmatic navigation, which is useful after form submissions, authentication events, or other application actions.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // Authenticate user...
    navigate('/dashboard');
  }

  return <button onClick={handleLogin}>Login</button>;
}`,
        },
        {
          type: 'heading',
          text: 'Nested Routes',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: 'users', element: <Users /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Deployment Note',
          text: 'Client-side routes require the production server to return the application entry point for supported application paths. Otherwise, refreshing a nested route such as /about or /products/10 may result in a server-side 404.',
        },
      ],
    },

    {
      id: 'state-management',
      title: '8. State Management',
      summary:
        'React applications can manage state locally or share it through Context, reducers, or dedicated state-management libraries such as Redux Toolkit.',
      content: [
        {
          type: 'heading',
          text: 'Choosing a State Strategy',
        },
        {
          type: 'paragraph',
          text: 'Not every application needs a global state library. Start with local state when the state belongs to one component, lift state when siblings need it, use Context for values shared across a subtree, and consider a dedicated state library when application-wide state and complex update flows become difficult to manage.',
        },
        {
          type: 'table',
          headers: ['Approach', 'Suitable For', 'Typical Example'],
          rows: [
            ['useState', 'Local state', 'Form input or modal visibility'],
            ['useReducer', 'Complex local state', 'Multi-action form or workflow'],
            ['Context', 'Shared subtree values', 'Theme, locale, authenticated user'],
            [
              'Redux Toolkit',
              'Complex global application state',
              'Large application with many coordinated features',
            ],
            ['Server-state library', 'Remote/cache state', 'API data, caching, synchronization'],
          ],
        },
        {
          type: 'heading',
          text: 'Context API Pattern',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = {
    user,
    login: setUser,
    logout: () => setUser(null),
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}`,
        },
        {
          type: 'heading',
          text: 'Redux Toolkit Pattern',
        },
        {
          type: 'paragraph',
          text: 'Redux Toolkit is the recommended approach for writing Redux logic. It provides utilities for defining slices, reducers, actions, and stores while reducing the amount of repetitive Redux code.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});`,
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, addItem } from './store';

function CartButton({ product }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.items.length);

  return (
    <button onClick={() => dispatch(addItem(product))}>
      Add to Cart ({count})
    </button>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <CartButton product={{ id: 1, name: 'Keyboard' }} />
    </Provider>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Context vs Redux Toolkit',
        },
        {
          type: 'paragraph',
          text: 'Context primarily provides a mechanism for making a value available to descendants. Redux Toolkit provides a more structured state-management architecture with centralized state, reducers, actions, middleware, selectors, and established debugging patterns. Context is not automatically a replacement for every global state requirement.',
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Architecture Tip',
          text: 'Separate server state from client UI state when possible. API data, caching, loading states, and synchronization often have different requirements from local UI state such as modal visibility or selected tabs.',
        },
      ],
    },

    {
      id: 'performance-optimization',
      title: '9. Performance Optimization',
      summary:
        'React performance improves when rendering work is kept focused, expensive calculations are controlled, and large application bundles are loaded only when needed.',
      content: [
        {
          type: 'heading',
          text: 'React.memo',
        },
        {
          type: 'paragraph',
          text: 'React.memo can skip rendering a function component when its props are unchanged according to the comparison used by React. It is most useful when a component renders frequently with the same props and its rendering work is meaningful.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { memo } from 'react';

const ProductCard = memo(function ProductCard({ product }) {
  console.log('ProductCard rendered');

  return (
    <article>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
    </article>
  );
});`,
        },
        {
          type: 'heading',
          text: 'useMemo and useCallback',
        },
        {
          type: 'paragraph',
          text: 'useMemo can cache an expensive calculation, while useCallback can preserve a function reference. These hooks should be introduced based on an identified rendering or calculation cost rather than applied everywhere by default.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `const visibleProducts = useMemo(
  () => filterProducts(products, search),
  [products, search]
);

const handleSelect = useCallback(
  (id) => setSelectedId(id),
  []
);`,
        },
        {
          type: 'heading',
          text: 'Lazy Loading',
        },
        {
          type: 'paragraph',
          text: 'React.lazy allows a component to be loaded dynamically. Suspense provides a fallback UI while the lazy component is loading.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import { lazy, Suspense } from 'react';

const AdminDashboard = lazy(() => import('./AdminDashboard'));

function App() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <AdminDashboard />
    </Suspense>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Code Splitting',
        },
        {
          type: 'paragraph',
          text: 'Code splitting divides JavaScript into smaller chunks that can be loaded when required. Route-level splitting is a common strategy because users may not need every page of an application during the initial visit.',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const ReportsPage = lazy(() => import('./pages/ReportsPage'));

function RoutesView() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </Suspense>
  );
}`,
        },
        {
          type: 'heading',
          text: 'List Rendering Optimization',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}`,
        },
        {
          type: 'subheading',
          text: 'Practical Performance Checklist',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use stable keys for list items.',
            'Keep component state close to where it is used.',
            'Avoid unnecessary effects and derived state.',
            'Use React.memo when profiling shows repeated unnecessary renders.',
            'Use useMemo for genuinely expensive calculations when it provides measurable value.',
            'Use useCallback when stable callback identity is relevant to an optimization.',
            'Lazy-load large or infrequently visited routes.',
            'Optimize images and static assets.',
            'Avoid rendering unnecessarily large lists; use virtualization for very large datasets when appropriate.',
            'Measure performance with browser tools and React profiling tools before and after optimization.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do Not Over-Optimize',
          text: 'Memoization adds complexity and has its own cost. Optimize based on evidence from profiling rather than adding memoization to every component and callback.',
        },
      ],
    },

    {
      id: 'production-architecture-best-practices',
      title: '10. Production Architecture & Best Practices',
      summary:
        'A production React application benefits from clear component boundaries, predictable data flow, reusable logic, accessible UI, and consistent project organization.',
      content: [
        {
          type: 'heading',
          text: 'Recommended Project Structure',
        },
        {
          type: 'code',
          language: 'text',
          code: `src/
├── assets/
├── components/
│   ├── common/
│   └── layout/
├── features/
│   ├── auth/
│   ├── products/
│   └── cart/
├── hooks/
├── pages/
├── routes/
├── services/
├── store/
├── utils/
├── App.jsx
└── main.jsx`,
        },
        {
          type: 'heading',
          text: 'Component Design Principles',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Keep components small enough to understand without excessive scrolling.',
            'Prefer composition over deeply nested conditional component logic.',
            'Keep reusable UI components independent of feature-specific business logic where practical.',
            'Use explicit prop names and sensible defaults.',
            'Avoid unnecessary state when a value can be derived from existing props or state.',
            'Move reusable stateful behavior into custom hooks.',
            'Keep API communication in dedicated service or data-access layers.',
            'Use error boundaries or framework-level error handling for resilient user experiences.',
          ],
        },
        {
          type: 'heading',
          text: 'Reusable API Service',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export async function getProducts() {
  const response = await api.get('/products');
  return response.data;
}`,
        },
        {
          type: 'heading',
          text: 'Error and Loading States',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `function ProductPage({ loading, error, products }) {
  if (loading) return <p>Loading products...</p>;

  if (error) {
    return <p role="alert">Unable to load products. Please try again.</p>;
  }

  if (!products.length) return <p>No products found.</p>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Accessibility',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use semantic HTML elements such as button, nav, main, header, and form.',
            'Provide accessible labels for form controls.',
            'Use meaningful alternative text for informative images.',
            'Do not rely exclusively on color to communicate information.',
            'Ensure interactive elements can be operated with a keyboard.',
            'Use ARIA attributes when native HTML semantics are insufficient.',
          ],
        },
        {
          type: 'heading',
          text: 'Environment Variables',
        },
        {
          type: 'code',
          language: 'jsx',
          code: `const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error('VITE_API_URL is not configured');
}

console.log('API:', apiUrl);`,
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Security',
          text: 'Never place private API keys, database credentials, JWT signing secrets, or other server-only secrets in frontend environment variables. Values exposed to a browser bundle must be treated as public.',
        },
      ],
    },

    {
      id: 'interview-questions',
      title: '11. React Interview Questions',
      summary:
        'These frequently asked questions cover fundamental React concepts, hooks, rendering, state management, routing, and performance.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is React?',
              answer:
                'React is a JavaScript library for building user interfaces using reusable components and declarative rendering. Developers describe the desired UI from the current application state, while React handles rendering and reconciliation.',
            },
            {
              question: 'What is the Virtual DOM?',
              answer:
                'The Virtual DOM is an in-memory representation of the UI used during React rendering. React compares the new and previous representations and determines the required changes to the actual UI.',
            },
            {
              question: 'What is reconciliation in React?',
              answer:
                'Reconciliation is the process React uses to compare the previous rendered element tree with the next one and determine how the UI should be updated. Element types, tree structure, and keys influence these decisions.',
            },
            {
              question: 'What is the difference between props and state?',
              answer:
                'Props are inputs passed to a component by its parent and should be treated as read-only. State is data managed by a component and can change over time through state update mechanisms.',
            },
            {
              question: 'Why are keys required when rendering lists?',
              answer:
                'Keys help React identify individual elements between renders. Stable, unique keys allow React to correctly associate existing items with their new positions and reduce incorrect state preservation or unnecessary DOM work.',
            },
            {
              question: 'What is useEffect used for?',
              answer:
                'useEffect is used to synchronize a component with external systems such as subscriptions, timers, browser APIs, network connections, or third-party libraries. It is not intended as a general-purpose replacement for ordinary JavaScript calculations.',
            },
            {
              question: 'What is the difference between useMemo and useCallback?',
              answer:
                'useMemo caches the result of a calculation, while useCallback caches a function reference. Both should be used when their memoization provides a meaningful benefit rather than automatically on every value or function.',
            },
            {
              question: 'What is prop drilling?',
              answer:
                'Prop drilling is the practice of passing data or callbacks through intermediate components that do not directly need them so a deeper component can access them. Context or another state-management strategy can reduce this pattern when the shared data is genuinely cross-cutting.',
            },
            {
              question: 'What is lifting state up?',
              answer:
                'Lifting state up means moving shared state to the closest common parent of the components that need it. The parent owns the state and passes values and update callbacks to its children.',
            },
            {
              question: 'When should Context API be used?',
              answer:
                'Context is useful when a value needs to be consumed by many components within a subtree, such as theme, locale, or authentication information. It should not automatically be used for every piece of application state.',
            },
            {
              question: 'What is useRef used for?',
              answer:
                'useRef provides a persistent mutable reference whose changes do not trigger rendering. Common uses include accessing DOM elements and storing values such as timer IDs or previous values.',
            },
            {
              question: 'What is a custom hook?',
              answer:
                'A custom hook is a reusable JavaScript function that starts with use and can call other React hooks. It extracts reusable stateful logic without sharing component state itself.',
            },
            {
              question: 'What is React.memo?',
              answer:
                'React.memo is a component optimization that can skip re-rendering when the component receives equivalent props. It is most useful when profiling indicates that repeated rendering is costly.',
            },
            {
              question: 'What is code splitting?',
              answer:
                'Code splitting divides application JavaScript into separate chunks that can be loaded when needed. React.lazy and dynamic imports are commonly used to lazy-load components and reduce the initial JavaScript payload.',
            },
            {
              question: 'What is a controlled component?',
              answer:
                'A controlled form component receives its current value from React state and updates that state through an event handler. React therefore acts as the source of truth for the input value.',
            },
            {
              question: 'What happens when state is updated in React?',
              answer:
                'A state update schedules React to render the affected component tree using the new state. React then reconciles the resulting UI and commits the necessary changes to the host environment.',
            },
          ],
        },
      ],
    },
  ],
};

export default reactContent;
