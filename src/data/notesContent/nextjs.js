export const nextjsContent = {
  id: 'nextjs',
  slug: 'nextjs',
  title: 'Next.js',
  subtitle: 'Complete React Framework Guide & Reference',
  category: 'Web Development',
  description:
    'Comprehensive Next.js guide covering App Router, Server and Client Components, routing, layouts, dynamic routes, data fetching, caching, Server Actions, API route handlers, metadata, image optimization, authentication, middleware, performance, deployment, and production best practices.',
  sections: [
    {
      id: 'introduction-to-nextjs',
      title: '1. Introduction to Next.js',
      blocks: [
        {
          type: 'paragraph',
          text: 'Next.js is a React framework for building full-stack web applications. It provides routing, rendering strategies, data fetching patterns, metadata handling, image optimization, server-side capabilities, and production tooling on top of React.',
        },
        {
          type: 'heading',
          text: 'Why Use Next.js?',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'File-system based routing.',
            'React Server Components support through the App Router.',
            'Client Components for interactive browser-side features.',
            'Server-side rendering and static rendering capabilities.',
            'Dynamic routes and nested layouts.',
            'Built-in metadata APIs for SEO and sharing information.',
            'Image optimization through next/image.',
            'Font optimization through next/font.',
            'Route Handlers for backend HTTP endpoints.',
            'Server Actions for server-side mutations.',
            'Built-in support for TypeScript.',
            'Production-oriented development and build tooling.',
          ],
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// app/page.js

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Next.js</h1>
      <p>Build modern full-stack web applications.</p>
    </main>
  );
}`,
        },
        {
          type: 'table',
          headers: ['Feature', 'Purpose'],
          rows: [
            ['App Router', 'Modern routing architecture using the app directory'],
            ['Server Components', 'Render components on the server by default'],
            ['Client Components', 'Add browser-side interactivity'],
            ['Layouts', 'Share UI and preserve layout structure between routes'],
            ['Route Handlers', 'Create HTTP endpoints inside the application'],
            ['Server Actions', 'Execute server-side functions from supported React forms and interactions'],
            ['Metadata API', 'Define page metadata for SEO and sharing'],
            ['next/image', 'Optimized image component'],
            ['next/font', 'Font loading and optimization'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'React vs Next.js',
          text: 'React is a UI library, while Next.js is a framework built around React that provides application-level capabilities such as routing, server rendering, data handling, and production infrastructure.',
        },
      ],
    },
    {
      id: 'nextjs-project-setup',
      title: '2. Project Setup & Folder Structure',
      blocks: [
        {
          type: 'paragraph',
          text: 'A modern Next.js project commonly uses the App Router and an app directory. The project structure can be organized around routes, reusable components, libraries, and server-side functionality.',
        },
        {
          type: 'code',
          language: 'bash',
          code: `npx create-next-app@latest my-next-app

cd my-next-app

npm run dev`,
        },
        {
          type: 'heading',
          text: 'Typical Project Structure',
        },
        {
          type: 'code',
          language: 'text',
          code: `my-next-app/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── about/
│   │   └── page.js
│   ├── blog/
│   │   ├── page.js
│   │   └── [slug]/
│   │       └── page.js
│   └── api/
│       └── users/
│           └── route.js
│
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   └── Button.js
│
├── lib/
│   ├── db.js
│   └── utils.js
│
├── public/
│   └── images/
│
├── package.json
└── next.config.js`,
        },
        {
          type: 'table',
          headers: ['Directory/File', 'Purpose'],
          rows: [
            ['app/', 'Application routes and layouts'],
            ['app/page.js', 'Page for the root route'],
            ['app/layout.js', 'Root layout'],
            ['app/globals.css', 'Global styles'],
            ['public/', 'Static assets'],
            ['components/', 'Reusable UI components'],
            ['lib/', 'Reusable utilities and server-side libraries'],
            ['route.js', 'Route Handler endpoint'],
            ['next.config.js', 'Next.js configuration'],
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Project Organization',
          text: 'Keep route-specific files near their routes and move reusable UI, utilities, database access, and shared logic into appropriate modules.',
        },
      ],
    },
    {
      id: 'nextjs-routing',
      title: '3. Routing & Navigation',
      blocks: [
        {
          type: 'paragraph',
          text: 'The App Router uses folders and special files to define routes. A folder containing page.js represents a route segment. Nested folders create nested URL paths.',
        },
        {
          type: 'heading',
          text: 'Basic Routes',
        },
        {
          type: 'code',
          language: 'text',
          code: `app/
├── page.js -> /
├── about/
│   └── page.js -> /about
├── services/
│   └── page.js -> /services
└── contact/
    └── page.js -> /contact`,
        },
        {
          type: 'heading',
          text: 'Navigation with Link',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Programmatic Navigation',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `"use client";

import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  function handleLogin() {
    // Login logic
    router.push("/dashboard");
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Navigation Tip',
          text: 'Use next/link for normal internal navigation. Use useRouter when navigation needs to happen programmatically as part of a client-side interaction.',
        },
      ],
    },
    {
      id: 'nextjs-layouts-pages',
      title: '4. Pages, Layouts & Templates',
      blocks: [
        {
          type: 'paragraph',
          text: 'Next.js provides special files such as page.js and layout.js. Pages define route UI, while layouts provide shared UI around child routes and can preserve layout structure during navigation.',
        },
        {
          type: 'heading',
          text: 'Root Layout',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// app/layout.js

import "./globals.css";

export const metadata = {
  title: "My Website",
  description: "A Next.js website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>Navbar</nav>
        </header>

        <main>{children}</main>

        <footer>Footer</footer>
      </body>
    </html>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Nested Layout',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// app/dashboard/layout.js

export default function DashboardLayout({ children }) {
  return (
    <section className="dashboard">
      <aside>Dashboard Sidebar</aside>

      <div>
        {children}
      </div>
    </section>
  );
}`,
        },
        {
          type: 'table',
          headers: ['File', 'Purpose'],
          rows: [
            ['page.js', 'UI for a route'],
            ['layout.js', 'Shared UI around child routes'],
            ['template.js', 'Similar to layout but creates a new instance on navigation'],
            ['loading.js', 'Loading UI for a route segment'],
            ['error.js', 'Error UI for a route segment'],
            ['not-found.js', 'Not-found UI'],
            ['route.js', 'HTTP Route Handler'],
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Layout Advantage',
          text: 'Layouts allow common navigation, sidebars, headers, and other shared UI to be organized once instead of duplicated across pages.',
        },
      ],
    },
    {
      id: 'nextjs-dynamic-routes',
      title: '5. Dynamic Routes & Route Parameters',
      blocks: [
        {
          type: 'paragraph',
          text: 'Dynamic route segments allow pages to respond to variable URL values. They are commonly used for product pages, blog posts, user profiles, categories, and other resource-based pages.',
        },
        {
          type: 'code',
          language: 'text',
          code: `app/
└── products/
    └── [id]/
        └── page.js

/products/101
/products/202
/products/303`,
        },
        {
          type: 'heading',
          text: 'Dynamic Route Example',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// app/products/[id]/page.js

export default async function ProductPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>Product ID: {id}</h1>
    </main>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Catch-All Routes',
        },
        {
          type: 'code',
          language: 'text',
          code: `app/docs/[...slug]/page.js

/docs/react
/docs/react/hooks
/docs/react/hooks/use-state`,
        },
        {
          type: 'heading',
          text: 'Optional Catch-All Routes',
        },
        {
          type: 'code',
          language: 'text',
          code: `app/docs/[[...slug]]/page.js

/docs
/docs/react
/docs/react/hooks`,
        },
        {
          type: 'table',
          headers: ['Pattern', 'Example URL', 'Purpose'],
          rows: [
            ['[id]', '/products/123', 'Single dynamic segment'],
            ['[...slug]', '/docs/react/hooks', 'One or more dynamic segments'],
            ['[[...slug]]', '/docs or /docs/react', 'Zero or more dynamic segments'],
          ],
        },
      ],
    },
    {
      id: 'nextjs-server-client-components',
      title: '6. Server Components & Client Components',
      blocks: [
        {
          type: 'paragraph',
          text: 'In the App Router, components are Server Components by default. Client Components are used when a component needs browser-side interactivity, state, effects, event handlers, or client-only APIs.',
        },
        {
          type: 'heading',
          text: 'Server Component',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Server Component by default

export default async function UsersPage() {
  const response = await fetch(
    "https://api.example.com/users"
  );

  const users = await response.json();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Client Component',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
        },
        {
          type: 'table',
          headers: ['Server Component', 'Client Component'],
          rows: [
            ['Default in App Router', 'Requires "use client"'],
            ['Can access server-side resources', 'Runs in browser as client code'],
            ['Good for data fetching', 'Good for interactive UI'],
            ['Cannot use browser event handlers', 'Can use event handlers'],
            ['Cannot use useState/useEffect', 'Can use React client hooks'],
            ['Can reduce client JavaScript', 'Adds client-side JavaScript'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Client Component Rule',
          text: 'Do not add "use client" to every component automatically. Keep components on the server unless they genuinely require client-side capabilities.',
        },
      ],
    },
    {
      id: 'nextjs-data-fetching',
      title: '7. Data Fetching, Caching & Revalidation',
      blocks: [
        {
          type: 'paragraph',
          text: 'Next.js supports data fetching in Server Components and provides caching and revalidation mechanisms. The exact caching behavior depends on the Next.js version and the API used, so production applications should verify current framework behavior and configuration.',
        },
        {
          type: 'heading',
          text: 'Server-Side Fetching',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `export default async function ProductsPage() {
  const response = await fetch(
    "https://api.example.com/products"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await response.json();

  return (
    <main>
      <h1>Products</h1>

      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </article>
      ))}
    </main>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Revalidation Example',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const response = await fetch(
  "https://api.example.com/products",
  {
    next: {
      revalidate: 60
    }
  }
);`,
        },
        {
          type: 'heading',
          text: 'Request-Level Dynamic Data',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const response = await fetch(
  "https://api.example.com/profile",
  {
    cache: "no-store"
  }
);`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Caching Reminder',
          text: 'Do not assume every fetch behaves identically across Next.js versions and APIs. Understand whether your data should be static, revalidated, or dynamically requested before choosing a caching strategy.',
        },
      ],
    },
    {
      id: 'nextjs-loading-error-not-found',
      title: '8. Loading, Error & Not Found States',
      blocks: [
        {
          type: 'paragraph',
          text: 'Next.js provides special files that allow route segments to define loading states, error boundaries, and not-found UI. These patterns improve user experience and keep error handling close to the relevant route.',
        },
        {
          type: 'heading',
          text: 'Loading UI',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// app/products/loading.js

export default function Loading() {
  return (
    <div>
      Loading products...
    </div>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Error UI',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `"use client";

export default function ErrorPage({
  error,
  reset
}) {
  return (
    <div>
      <h2>Something went wrong.</h2>

      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Not Found',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// app/products/[id]/page.js

import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return <h1>{product.name}</h1>;
}`,
        },
        {
          type: 'table',
          headers: ['File/Function', 'Purpose'],
          rows: [
            ['loading.js', 'Loading UI'],
            ['error.js', 'Route-level error UI'],
            ['not-found.js', 'Default not-found UI for a segment'],
            ['notFound()', 'Trigger not-found handling programmatically'],
            ['global-error.js', 'Handle errors at the root level'],
          ],
        },
      ],
    },
    {
      id: 'nextjs-api-route-handlers',
      title: '9. API Route Handlers',
      blocks: [
        {
          type: 'paragraph',
          text: 'Route Handlers allow Next.js applications to expose HTTP endpoints using route.js files. They are useful for backend endpoints, webhooks, form processing, integrations, and other server-side HTTP operations.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// app/api/users/route.js

export async function GET() {
  const users = [
    {
      id: 1,
      name: "Bibhu"
    }
  ];

  return Response.json(users);
}`,
        },
        {
          type: 'heading',
          text: 'POST Request',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `export async function POST(request) {
  const body = await request.json();

  const user = {
    id: crypto.randomUUID(),
    name: body.name,
    email: body.email
  };

  return Response.json(
    user,
    {
      status: 201
    }
  );
}`,
        },
        {
          type: 'heading',
          text: 'Dynamic API Route',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// app/api/users/[id]/route.js

export async function GET(
  request,
  { params }
) {
  const { id } = await params;

  return Response.json({
    id
  });
}`,
        },
        {
          type: 'table',
          headers: ['HTTP Method', 'Typical Purpose'],
          rows: [
            ['GET', 'Retrieve data'],
            ['POST', 'Create data or trigger an operation'],
            ['PUT', 'Replace a resource'],
            ['PATCH', 'Partially update a resource'],
            ['DELETE', 'Delete a resource'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Authentication',
          text: 'Protect sensitive Route Handlers with appropriate authentication and authorization. Never assume that hiding a frontend button provides security.',
        },
      ],
    },
    {
      id: 'nextjs-server-actions',
      title: '10. Server Actions & Mutations',
      blocks: [
        {
          type: 'paragraph',
          text: 'Server Actions allow supported server-side functions to be invoked from client interactions such as forms. They can simplify mutations by keeping server-side logic on the server and reducing the need for a separate API endpoint for every operation.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// app/actions.js

"use server";

export async function createUser(formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  // Validate input.
  // Save data to the database.
  // Revalidate relevant UI.

  return {
    success: true,
    name,
    email
  };
}`,
        },
        {
          type: 'heading',
          text: 'Using a Server Action in a Form',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import { createUser } from "./actions";

export default function UserForm() {
  return (
    <form action={createUser}>
      <input name="name" placeholder="Name" required />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
      />

      <button type="submit">
        Create User
      </button>
    </form>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Important Server Action Practices',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Validate all incoming data on the server.',
            'Authenticate the current user when necessary.',
            'Authorize the requested operation.',
            'Never trust values coming from the browser.',
            'Handle database errors safely.',
            'Return only appropriate information.',
            'Revalidate affected UI when required.',
            'Keep sensitive logic on the server.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Security Rule',
          text: 'A Server Action is not automatically safe just because it runs on the server. Treat every input as untrusted and implement authentication, authorization, validation, and appropriate error handling.',
        },
      ],
    },
    {
      id: 'nextjs-metadata-seo',
      title: '11. Metadata & SEO',
      blocks: [
        {
          type: 'paragraph',
          text: 'Next.js provides a Metadata API for defining document titles, descriptions, Open Graph information, robots directives, icons, and other metadata. Good metadata improves search-engine understanding and link-sharing previews.',
        },
        {
          type: 'heading',
          text: 'Static Metadata',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// app/layout.js

export const metadata = {
  title: "DevNotes",
  description:
    "Developer notes and programming references",
  keywords: [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB"
  ]
};`,
        },
        {
          type: 'heading',
          text: 'Dynamic Metadata',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description
  };
}`,
        },
        {
          type: 'heading',
          text: 'Open Graph Metadata',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `export const metadata = {
  title: "Developer Notes",
  description: "Learn web development",
  openGraph: {
    title: "Developer Notes",
    description: "Learn web development",
    type: "website"
  }
};`,
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use descriptive page titles.',
            'Write useful descriptions.',
            'Use meaningful headings in page content.',
            'Use semantic HTML.',
            'Provide descriptive image alt text.',
            'Generate appropriate Open Graph metadata.',
            'Use canonical URLs where required by the site architecture.',
            'Provide robots and sitemap configuration appropriate to the site.',
            'Avoid duplicate page metadata when pages represent different content.',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'SEO Advantage',
          text: 'Next.js provides useful primitives for technical SEO, but good rankings still depend on content quality, site structure, performance, accessibility, links, and search-engine policies.',
        },
      ],
    },
    {
      id: 'nextjs-images-fonts-assets',
      title: '12. Images, Fonts & Static Assets',
      blocks: [
        {
          type: 'paragraph',
          text: 'Next.js provides optimized components for images and fonts. Static assets can also be placed in the public directory and referenced by URL.',
        },
        {
          type: 'heading',
          text: 'next/image',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import Image from "next/image";

export default function Profile() {
  return (
    <Image src="/images/profile.jpg" alt="Developer profile" width={600} height={600} priority />
  );
}`,
        },
        {
          type: 'heading',
          text: 'Remote Image Example',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import Image from "next/image";

export default function ProductImage() {
  return (
    <Image src="https://example.com/product.jpg" alt="Product" width={800} height={600} />
  );
}`,
        },
        {
          type: 'paragraph',
          text: 'Remote image sources must be configured according to the current Next.js image configuration requirements. Do not allow arbitrary remote image hosts without considering security and performance implications.',
        },
        {
          type: 'heading',
          text: 'next/font',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Static Assets',
          text: 'Files inside public/ are available from the site root. For example, public/logo.png can be referenced as /logo.png.',
        },
      ],
    },
    {
      id: 'nextjs-authentication-authorization',
      title: '13. Authentication & Authorization',
      blocks: [
        {
          type: 'paragraph',
          text: 'Authentication determines who a user is, while authorization determines what that authenticated user is allowed to do. Next.js applications can implement authentication using cookies, sessions, tokens, database-backed systems, or established authentication libraries.',
        },
        {
          type: 'heading',
          text: 'Authentication Flow',
        },
        {
          type: 'code',
          language: 'text',
          code: `User
|
v
Login Form
|
v
Server Validation
|
v
Verify Credentials
|
v
Create Session
|
v
Secure Cookie
|
v
Authenticated Request
|
v
Authorization Check
|
v
Protected Resource`,
        },
        {
          type: 'heading',
          text: 'Protected Server Page Concept',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  );
}`,
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use secure session handling.',
            'Protect authentication cookies appropriately.',
            'Validate credentials on the server.',
            'Implement authorization for protected resources.',
            'Do not trust user roles supplied only by the client.',
            'Protect sensitive Route Handlers and Server Actions.',
            'Avoid storing sensitive authentication data in insecure browser storage.',
            'Implement logout and session expiration correctly.',
            'Protect against common web security threats.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Authentication Is Not Authorization',
          text: 'A user being logged in does not automatically mean they are allowed to perform every operation. Always check permissions for sensitive resources and actions.',
        },
      ],
    },
    {
      id: 'nextjs-middleware-proxy',
      title: '14. Middleware, Request Control & Redirects',
      blocks: [
        {
          type: 'paragraph',
          text: 'Next.js provides request interception capabilities that can be used for tasks such as redirects, rewrites, authentication checks, localization, and request-based routing. The exact file and API conventions can change between framework versions, so verify the current Next.js documentation when starting a new project.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Example request interception pattern

import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = true;

  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"]
};`,
        },
        {
          type: 'heading',
          text: 'Redirect Example',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import { redirect } from "next/navigation";

export default async function AdminPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "admin") {
    redirect("/unauthorized");
  }

  return <h1>Admin Dashboard</h1>;
}`,
        },
        {
          type: 'table',
          headers: ['Concept', 'Typical Purpose'],
          rows: [
            ['Redirect', 'Send a request to another URL'],
            ['Rewrite', 'Serve another resource while keeping the visible URL'],
            ['Request interception', 'Apply logic before serving matched routes'],
            ['Matcher', 'Define which paths are affected'],
            ['Authorization check', 'Prevent unauthorized access'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do Not Use Middleware as Your Only Security Layer',
          text: 'Request-level checks can improve routing behavior, but sensitive data access and mutations must also enforce authorization at the actual server-side resource or operation.',
        },
      ],
    },
    {
      id: 'nextjs-performance',
      title: '15. Performance Optimization',
      blocks: [
        {
          type: 'paragraph',
          text: 'Next.js provides several tools that can help build performant applications. Performance still depends on application architecture, JavaScript usage, images, network requests, database queries, third-party scripts, and the actual user environment.',
        },
        {
          type: 'heading',
          text: 'Performance Checklist',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Keep components as Server Components when client-side behavior is unnecessary.',
            'Use Client Components only where interactivity requires them.',
            'Optimize images with next/image when appropriate.',
            'Use next/font or another efficient font-loading strategy.',
            'Avoid unnecessary client-side JavaScript.',
            'Split large interactive components appropriately.',
            'Cache or revalidate data according to its freshness requirements.',
            'Optimize database queries and indexes.',
            'Reduce unnecessary API requests.',
            'Avoid loading heavy third-party libraries for simple tasks.',
            'Use loading states to improve perceived performance.',
            'Monitor real-world performance metrics.',
            'Test production builds rather than relying only on development performance.',
          ],
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Keep interactive logic in a small Client Component

// components/AddToCartButton.js
"use client";

export default function AddToCartButton({
  productId
}) {
  function handleClick() {
    // Add product to cart
  }

  return (
    <button onClick={handleClick}>
      Add to Cart
    </button>
  );
}

// The surrounding product page can remain a
// Server Component.`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Performance Principle',
          text: 'Do not optimize only by reducing bundle size. Measure the full user experience, including server response time, rendering, images, JavaScript execution, network requests, and database performance.',
        },
      ],
    },
    {
      id: 'nextjs-deployment',
      title: '16. Build & Deployment',
      blocks: [
        {
          type: 'paragraph',
          text: 'Next.js applications should be tested with a production build before deployment. Deployment options depend on the application architecture and hosting provider. Server-side features require a runtime that supports the features your application uses.',
        },
        {
          type: 'code',
          language: 'bash',
          code: `npm install

npm run build

npm run start`,
        },
        {
          type: 'heading',
          text: 'Environment Variables',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// .env.local

DATABASE_URL="your-database-url"
JWT_SECRET="your-secret"

// Public variables should use the
// appropriate NEXT_PUBLIC_ prefix.

NEXT_PUBLIC_API_URL="https://api.example.com"`,
        },
        {
          type: 'table',
          headers: ['Variable Type', 'Typical Visibility'],
          rows: [
            ['DATABASE_URL', 'Server only'],
            ['JWT_SECRET', 'Server only'],
            ['API_SECRET', 'Server only'],
            ['NEXT_PUBLIC_API_URL', 'Can be exposed to browser code'],
            ['NEXT_PUBLIC_*', 'Intended for public/client-side use'],
          ],
        },
        {
          type: 'heading',
          text: 'Production Checklist',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Run the production build successfully.',
            'Configure environment variables securely.',
            'Verify database connectivity.',
            'Test authentication and authorization.',
            'Check metadata and SEO.',
            'Test all important routes.',
            'Check image loading and remote image configuration.',
            'Review logs and error handling.',
            'Configure the hosting environment for server-side requirements.',
            'Set up monitoring and backups for required services.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Never Expose Server Secrets',
          text: 'Do not prefix private credentials with NEXT_PUBLIC_ and do not place secrets directly in source code. Public environment variables can become part of client-side application output.',
        },
      ],
    },
    {
      id: 'nextjs-production-architecture',
      title: '17. Production Architecture & Best Practices',
      blocks: [
        {
          type: 'paragraph',
          text: 'A scalable Next.js application benefits from clear boundaries between presentation, server-side logic, data access, authentication, validation, and reusable utilities. The exact architecture should match the size and complexity of the application.',
        },
        {
          type: 'code',
          language: 'text',
          code: `Next.js Application
    |
    +-------------------+
    |                   |
    v                   v

Server UI           Client UI
    |                   |
    v                   v
Server Logic        Interactive State
    |
    +-------------------+
    |
    v
Service / Data Layer
    |
    +-----------+-----------+
    |                       |
    v                       v
Database                External APIs`,
        },
        {
          type: 'heading',
          text: 'Recommended Practices',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Keep business logic out of purely presentational components.',
            'Use Server Components for server-oriented rendering and data access where appropriate.',
            'Keep interactive browser logic inside focused Client Components.',
            'Validate incoming data on the server.',
            'Centralize database connection logic.',
            'Use reusable service or data-access functions for complex applications.',
            'Implement authorization at the resource or operation level.',
            'Use meaningful loading and error states.',
            'Keep environment secrets server-side.',
            'Use TypeScript for stronger type safety in larger applications.',
            'Monitor production errors and performance.',
            'Keep dependencies updated according to a controlled maintenance process.',
          ],
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Example: separate database access

// lib/users.js
import { db } from "./db";

export async function getUserById(id) {
  return db.user.findUnique({
    where: {
      id
    }
  });
}

// app/users/[id]/page.js
import { getUserById } from "@/lib/users";

export default async function UserPage({ params }) {
  const { id } = await params;

  const user = await getUserById(id);

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <main>
      <h1>{user.name}</h1>
    </main>
  );
}`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Architecture Principle',
          text: 'Start simple, then introduce additional layers when application complexity justifies them. Good architecture reduces coupling without creating unnecessary abstraction.',
        },
      ],
    },
    {
      id: 'nextjs-interview-questions',
      title: '18. Next.js Interview Questions',
      blocks: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is Next.js?',
              answer: 'Next.js is a React framework for building full-stack web applications. It provides routing, rendering, server-side capabilities, metadata APIs, image optimization, and production tooling.',
            },
            {
              question: 'What is the App Router?',
              answer: 'The App Router is Next.js routing architecture based on the app directory and special files such as page.js, layout.js, loading.js, error.js, and route.js.',
            },
            {
              question: 'What is a Server Component?',
              answer: 'A Server Component is a React component that can render on the server and is the default component type in the App Router.',
            },
            {
              question: 'What is a Client Component?',
              answer: 'A Client Component is a component marked with "use client" that can use browser-side interactivity such as event handlers and client React hooks.',
            },
            {
              question: 'Why should you not make every component a Client Component?',
              answer: 'Client Components can increase the amount of JavaScript that must run in the browser. Keeping server-oriented components on the server can reduce client-side work and simplify data access.',
            },
            {
              question: 'What is file-based routing in Next.js?',
              answer: 'Routes are created from the folder and special-file structure. For example, app/about/page.js maps to /about.',
            },
            {
              question: 'What is a dynamic route?',
              answer: 'A dynamic route uses a folder such as [id] to represent a variable URL segment, such as /products/123.',
            },
            {
              question: 'What is the difference between page.js and layout.js?',
              answer: 'page.js defines UI for a route, while layout.js defines shared UI around child routes.',
            },
            {
              question: 'What is next/link?',
              answer: 'next/link provides client-side navigation between internal routes and integrates with Next.js routing behavior.',
            },
            {
              question: 'What is a Route Handler?',
              answer: 'A Route Handler is a server-side HTTP endpoint defined using a route.js file inside the app directory.',
            },
            {
              question: 'What are Server Actions?',
              answer: 'Server Actions are server-side functions that can be invoked through supported React interactions, especially forms, and are useful for mutations and server-side operations.',
            },
            {
              question: 'What is the difference between SSR and static rendering?',
              answer: 'Server-side rendering generates dynamic HTML as part of a request or dynamic rendering process, while static rendering can produce content ahead of requests when the application and data allow it.',
            },
            {
              question: 'What is revalidation?',
              answer: 'Revalidation allows previously generated or cached data or output to be refreshed according to an application’s freshness strategy.',
            },
            {
              question: 'How do you create dynamic metadata?',
              answer: 'Next.js provides generateMetadata for generating metadata based on route parameters or fetched content.',
            },
            {
              question: 'What is next/image?',
              answer: 'next/image is Next.js’s image component that provides image-related optimizations such as responsive sizing and optimized loading behavior.',
            },
            {
              question: 'What is next/font?',
              answer: 'next/font provides font loading and optimization capabilities for supported local and external font sources.',
            },
            {
              question: 'How do you protect a Next.js route?',
              answer: 'Perform authentication and authorization checks on the server and redirect or reject unauthorized requests. Sensitive data access should also enforce authorization at the resource layer.',
            },
            {
              question: 'How do you create an API in Next.js?',
              answer: 'With the App Router, HTTP endpoints can be created using route.js Route Handlers inside an app directory route segment.',
            },
            {
              question: 'How can you improve Next.js performance?',
              answer: 'Use Server Components where appropriate, minimize unnecessary client JavaScript, optimize images and fonts, use suitable caching and revalidation, optimize backend and database queries, and measure real production performance.',
            },
            {
              question: 'What is the difference between React and Next.js?',
              answer: 'React primarily provides UI components and rendering capabilities, while Next.js provides a framework around React with routing, server rendering, data-fetching patterns, backend capabilities, optimization tools, and deployment-oriented features.',
            },
          ],
        },
      ],
    },
  ],
};

export default nextjsContent;
