export const backendContent = {
  id: 'backend',
  slug: 'backend',
  title: 'Backend Development',
  subtitle: 'Complete Backend Interview & System Design Guide',
  category: 'Backend Development',
  description:
    'Comprehensive backend development guide covering backend fundamentals, HTTP, REST APIs, databases, SQL and NoSQL, authentication, authorization, sessions, JWT, caching, message queues, asynchronous processing, API security, scalability, load balancing, microservices, Docker, monitoring, system design, and real-world backend architecture.',

  sections: [
    {
      id: 'backend-fundamentals',
      title: '1. Backend Development Fundamentals',
      content: [
        {
          type: 'paragraph',
          text: 'Backend development focuses on the server-side logic responsible for processing requests, implementing business rules, communicating with databases and external services, authenticating users, and returning responses to clients.'
        },
        {
          type: 'heading',
          text: 'Basic Backend Architecture'
        },
        {
          type: 'code',
          language: 'text',
          code: `Client
  ↓
HTTP Request
  ↓
Web Server / Reverse Proxy
  ↓
Backend Application
  ↓
Business Logic
  ↓
Database / External Services
  ↓
HTTP Response
  ↓
Client`
        },
        {
          type: 'heading',
          text: 'Main Backend Responsibilities'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Receive and validate client requests',
            'Implement business logic',
            'Authenticate users',
            'Authorize access to resources',
            'Read and write database data',
            'Process files',
            'Communicate with third-party APIs',
            'Send emails and notifications',
            'Handle errors',
            'Protect APIs',
            'Manage sessions and tokens',
            'Process background jobs',
            'Scale application traffic',
            'Monitor application health'
          ]
        },
        {
          type: 'heading',
          text: 'Frontend vs Backend'
        },
        {
          type: 'table',
          headers: ['Frontend', 'Backend'],
          rows: [
            ['Runs mainly in the browser', 'Runs mainly on servers'],
            ['UI and user interaction', 'Business logic'],
            ['React, Vue, Angular', 'Node.js, Java, Python, Go, .NET'],
            ['Calls APIs', 'Provides APIs'],
            ['Client-side state', 'Server-side state and data'],
            ['Browser storage', 'Database and server storage']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Core Concept',
          text: 'A backend is the layer between clients and data/services. It validates requests, applies business rules, performs required operations, and returns appropriate responses.'
        }
      ]
    },

    {
      id: 'client-server-architecture',
      title: '2. Client-Server Architecture',
      content: [
        {
          type: 'paragraph',
          text: 'Client-server architecture separates the application into clients that request resources and servers that process those requests and provide responses.'
        },
        {
          type: 'code',
          language: 'text',
          code: `        Internet
           │
     ┌─────┴─────┐
     │           │
  Browser     Mobile App
     │           │
     └─────┬─────┘
           │
        API Server
           │
     ┌─────┼─────┐
     │     │     │
 Database Cache Services`
        },
        {
          type: 'heading',
          text: 'Request-Response Cycle'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const response = await fetch('/api/users');

const data = await response.json();

console.log(data);`
        },
        {
          type: 'heading',
          text: 'Stateless vs Stateful Servers'
        },
        {
          type: 'table',
          headers: ['Stateless', 'Stateful'],
          rows: [
            ['Server does not rely on local session state', 'Server maintains client state'],
            ['Easier horizontal scaling', 'Can require session affinity'],
            ['Common with token-based APIs', 'Common with server-side sessions'],
            ['Requests contain required authentication context', 'Server stores session information']
          ]
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Scalability',
          text: 'Stateless application servers are generally easier to scale horizontally because any suitable server instance can process a request.'
        }
      ]
    },

    {
      id: 'http-fundamentals',
      title: '3. HTTP Fundamentals',
      content: [
        {
          type: 'paragraph',
          text: 'HTTP is the protocol commonly used for communication between clients and web servers. Backend APIs receive HTTP requests and return HTTP responses.'
        },
        {
          type: 'heading',
          text: 'Common HTTP Methods'
        },
        {
          type: 'table',
          headers: ['Method', 'Purpose', 'Typical Usage'],
          rows: [
            ['GET', 'Retrieve data', 'Get users'],
            ['POST', 'Create/process data', 'Create a user'],
            ['PUT', 'Replace a resource', 'Replace user information'],
            ['PATCH', 'Partially update', 'Update user email'],
            ['DELETE', 'Delete a resource', 'Delete user']
          ]
        },
        {
          type: 'heading',
          text: 'HTTP Request Structure'
        },
        {
          type: 'code',
          language: 'http',
          code: `POST /api/users HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "Bibhu",
  "email": "bibhu@example.com"
}`
        },
        {
          type: 'heading',
          text: 'HTTP Response'
        },
        {
          type: 'code',
          language: 'http',
          code: `HTTP/1.1 201 Created
Content-Type: application/json

{
  "message": "User created",
  "id": "123"
}`
        },
        {
          type: 'heading',
          text: 'Important Status Codes'
        },
        {
          type: 'table',
          headers: ['Code', 'Meaning'],
          rows: [
            ['200', 'OK'],
            ['201', 'Created'],
            ['204', 'No Content'],
            ['301', 'Moved Permanently'],
            ['400', 'Bad Request'],
            ['401', 'Unauthorized'],
            ['403', 'Forbidden'],
            ['404', 'Not Found'],
            ['409', 'Conflict'],
            ['422', 'Unprocessable Content'],
            ['429', 'Too Many Requests'],
            ['500', 'Internal Server Error'],
            ['502', 'Bad Gateway'],
            ['503', 'Service Unavailable']
          ]
        }
      ]
    },

    {
      id: 'rest-api',
      title: '4. REST API Design',
      content: [
        {
          type: 'paragraph',
          text: 'REST is an architectural style commonly used to design web APIs around resources. A RESTful API uses HTTP methods and resource-oriented URLs to perform operations.'
        },
        {
          type: 'heading',
          text: 'Resource-Based URLs'
        },
        {
          type: 'code',
          language: 'text',
          code: `GET    /api/users
GET    /api/users/123
POST   /api/users
PATCH  /api/users/123
DELETE /api/users/123

GET    /api/products
GET    /api/products/123`
        },
        {
          type: 'heading',
          text: 'Express REST API Example'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/users', async (req, res) => {
  const users = await getUsers();

  res.status(200).json({
    success: true,
    data: users
  });
});

app.post('/api/users', async (req, res) => {
  const user = await createUser(req.body);

  res.status(201).json({
    success: true,
    data: user
  });
});

app.delete('/api/users/:id', async (req, res) => {
  await deleteUser(req.params.id);

  res.status(204).send();
});

app.listen(5000);`
        },
        {
          type: 'heading',
          text: 'Good API Design Principles'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use meaningful resource names',
            'Use HTTP methods correctly',
            'Return appropriate status codes',
            'Validate input',
            'Use consistent response structures',
            'Implement authentication where required',
            'Handle errors consistently',
            'Document APIs',
            'Use pagination for large collections',
            'Version APIs when necessary'
          ]
        }
      ]
    },

    {
      id: 'api-versioning',
      title: '5. API Versioning',
      content: [
        {
          type: 'paragraph',
          text: 'API versioning allows a backend to evolve while maintaining compatibility with existing clients.'
        },
        {
          type: 'heading',
          text: 'URL Versioning'
        },
        {
          type: 'code',
          language: 'text',
          code: `GET /api/v1/users
GET /api/v2/users`
        },
        {
          type: 'heading',
          text: 'Header-Based Versioning'
        },
        {
          type: 'code',
          language: 'http',
          code: `GET /api/users
Accept: application/vnd.example.v2+json`
        },
        {
          type: 'heading',
          text: 'Versioning Example'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.use('/api/v1/users', userRoutesV1);
app.use('/api/v2/users', userRoutesV2);`
        },
        {
          type: 'table',
          headers: ['Approach', 'Example'],
          rows: [
            ['URL', '/api/v1/users'],
            ['Header', 'Accept: application/vnd.api.v2+json'],
            ['Query Parameter', '/api/users?version=2']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Backward Compatibility',
          text: 'When an API changes in a way that can break existing clients, versioning can provide a controlled migration path.'
        }
      ]
    },

    {
      id: 'backend-architecture',
      title: '6. Backend Architecture',
      content: [
        {
          type: 'paragraph',
          text: 'Backend architecture describes how application responsibilities are organized into layers or services.'
        },
        {
          type: 'heading',
          text: 'Layered Architecture'
        },
        {
          type: 'code',
          language: 'text',
          code: `Request
   ↓
Routes
   ↓
Controller
   ↓
Service
   ↓
Repository / Model
   ↓
Database`
        },
        {
          type: 'heading',
          text: 'Typical Project Structure'
        },
        {
          type: 'code',
          language: 'text',
          code: `src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── repositories/
├── validators/
├── utils/
├── jobs/
├── app.js
└── server.js`
        },
        {
          type: 'heading',
          text: 'Controller Example'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `export const getUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};`
        },
        {
          type: 'heading',
          text: 'Service Layer'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `export const getUserById = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};`
        }
      ]
    },

    {
      id: 'middleware',
      title: '7. Middleware',
      content: [
        {
          type: 'paragraph',
          text: 'Middleware is code that executes during the request-response lifecycle. It can inspect requests, modify data, authenticate users, log activity, validate input, or handle errors.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
});`
        },
        {
          type: 'heading',
          text: 'Authentication Middleware'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'Authentication required'
    });
  }

  next();
};

app.get('/api/profile', authMiddleware, getProfile);`
        },
        {
          type: 'heading',
          text: 'Middleware Flow'
        },
        {
          type: 'code',
          language: 'text',
          code: `Request
  ↓
Logger
  ↓
CORS
  ↓
Authentication
  ↓
Validation
  ↓
Controller
  ↓
Response`
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Middleware Order Matters',
          text: 'Middleware executes according to registration order. Authentication, validation, parsing, and error-handling middleware should be positioned appropriately in the request lifecycle.'
        }
      ]
    },

    {
      id: 'databases',
      title: '8. Databases',
      content: [
        {
          type: 'paragraph',
          text: 'Backend applications commonly use databases to persist users, products, orders, transactions, logs, configuration, and other application data.'
        },
        {
          type: 'heading',
          text: 'SQL vs NoSQL'
        },
        {
          type: 'table',
          headers: ['SQL', 'NoSQL'],
          rows: [
            ['Relational', 'Non-relational'],
            ['Tables and rows', 'Documents, key-value, graph or column models'],
            ['Structured schema', 'Often more flexible schema'],
            ['SQL queries', 'Database-specific query models'],
            ['Strong relational modeling', 'Often useful for flexible or distributed data models'],
            ['Examples: PostgreSQL, MySQL', 'Examples: MongoDB, Redis']
          ]
        },
        {
          type: 'heading',
          text: 'SQL Example'
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT id, name, email
FROM users
WHERE age >= 18
ORDER BY name;`
        },
        {
          type: 'heading',
          text: 'MongoDB Example'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const users = await User.find({
  age: { $gte: 18 }
}).sort({
  name: 1
});`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Database Selection',
          text: 'Choose a database according to data relationships, consistency requirements, query patterns, scale, operational needs, and application requirements rather than choosing purely based on popularity.'
        }
      ]
    },

    {
      id: 'database-design',
      title: '9. Database Design',
      content: [
        {
          type: 'paragraph',
          text: 'Database design determines how application data is structured, related, indexed, and accessed.'
        },
        {
          type: 'heading',
          text: 'Important Concepts'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Tables or collections',
            'Primary keys',
            'Foreign keys',
            'Indexes',
            'Relationships',
            'Normalization',
            'Denormalization',
            'Constraints',
            'Transactions',
            'Query optimization'
          ]
        },
        {
          type: 'heading',
          text: 'One-to-Many Relationship'
        },
        {
          type: 'code',
          language: 'text',
          code: `User
 │
 ├── Order 1
 ├── Order 2
 └── Order 3`
        },
        {
          type: 'heading',
          text: 'SQL Relationship Example'
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  total DECIMAL(10,2),
  FOREIGN KEY (user_id) REFERENCES users(id)
);`
        },
        {
          type: 'heading',
          text: 'Normalization'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '1NF — Atomic values',
            '2NF — Remove partial dependency',
            '3NF — Remove transitive dependency',
            'Higher normal forms may be used for specific database designs'
          ]
        }
      ]
    },

    {
      id: 'crud',
      title: '10. CRUD Operations',
      content: [
        {
          type: 'paragraph',
          text: 'CRUD represents the four fundamental database operations: Create, Read, Update, and Delete.'
        },
        {
          type: 'table',
          headers: ['CRUD', 'HTTP', 'Database Operation'],
          rows: [
            ['Create', 'POST', 'INSERT'],
            ['Read', 'GET', 'SELECT / FIND'],
            ['Update', 'PUT/PATCH', 'UPDATE'],
            ['Delete', 'DELETE', 'DELETE']
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Create
const user = await User.create({
  name: 'Bibhu',
  email: 'bibhu@example.com'
});

// Read
const users = await User.find();

// Update
await User.findByIdAndUpdate(
  user._id,
  { name: 'Bibhu Prasad' },
  { new: true }
);

// Delete
await User.findByIdAndDelete(user._id);`
        },
        {
          type: 'heading',
          text: 'REST CRUD Routes'
        },
        {
          type: 'code',
          language: 'text',
          code: `POST   /api/users
GET    /api/users
GET    /api/users/:id
PATCH  /api/users/:id
DELETE /api/users/:id`
        }
      ]
    },

    {
      id: 'joins-and-relationships',
      title: '11. Joins & Relationships',
      content: [
        {
          type: 'paragraph',
          text: 'A join combines related records from multiple relational tables. Backend applications frequently use joins when data is normalized across multiple tables.'
        },
        {
          type: 'heading',
          text: 'Common SQL Joins'
        },
        {
          type: 'table',
          headers: ['Join', 'Purpose'],
          rows: [
            ['INNER JOIN', 'Returns matching records from both tables'],
            ['LEFT JOIN', 'Returns all records from the left table and matching records from the right'],
            ['RIGHT JOIN', 'Returns all records from the right table and matching records from the left'],
            ['FULL OUTER JOIN', 'Returns records from either side where supported']
          ]
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
  users.name,
  orders.total
FROM users
INNER JOIN orders
  ON users.id = orders.user_id;`
        },
        {
          type: 'heading',
          text: 'MongoDB Lookup'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.users.aggregate([
  {
    $lookup: {
      from: 'orders',
      localField: '_id',
      foreignField: 'userId',
      as: 'orders'
    }
  }
]);`
        }
      ]
    },

    {
      id: 'indexing',
      title: '12. Database Indexing',
      content: [
        {
          type: 'paragraph',
          text: 'Indexes are data structures that help databases locate records more efficiently for supported query patterns. They can improve read performance but add storage and write-maintenance costs.'
        },
        {
          type: 'heading',
          text: 'MongoDB Index Example'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.users.createIndex({
  email: 1
});`
        },
        {
          type: 'heading',
          text: 'SQL Index Example'
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE INDEX idx_users_email
ON users(email);`
        },
        {
          type: 'heading',
          text: 'Types of Indexes'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Single-field index',
            'Compound index',
            'Unique index',
            'Text index',
            'Partial index',
            'Geospatial index',
            'Specialized database-specific indexes'
          ]
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do Not Index Everything',
          text: 'Indexes consume storage and can increase the cost of writes. Design indexes around actual query patterns and verify their usefulness with query plans and performance measurements.'
        }
      ]
    },

    {
      id: 'database-transactions',
      title: '13. Database Transactions & ACID',
      content: [
        {
          type: 'paragraph',
          text: 'A transaction groups multiple database operations into a unit of work. ACID describes important transaction properties in relational database systems and is also relevant to transactional capabilities in other databases.'
        },
        {
          type: 'table',
          headers: ['Property', 'Meaning'],
          rows: [
            ['Atomicity', 'All operations succeed or the transaction is rolled back'],
            ['Consistency', 'Transactions preserve defined database rules'],
            ['Isolation', 'Concurrent transactions are controlled according to the database isolation model'],
            ['Durability', 'Committed changes persist according to the database durability guarantees']
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const session = await mongoose.startSession();

try {
  session.startTransaction();

  await Account.updateOne(
    { _id: fromId },
    { $inc: { balance: -100 } },
    { session }
  );

  await Account.updateOne(
    { _id: toId },
    { $inc: { balance: 100 } },
    { session }
  );

  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
  throw error;
} finally {
  await session.endSession();
}`
        }
      ]
    },

    {
      id: 'authentication',
      title: '14. Authentication & Authorization',
      content: [
        {
          type: 'paragraph',
          text: 'Authentication determines who a user is. Authorization determines what an authenticated user is allowed to access or perform.'
        },
        {
          type: 'table',
          headers: ['Authentication', 'Authorization'],
          rows: [
            ['Who are you?', 'What are you allowed to do?'],
            ['Login', 'Permissions'],
            ['Password / token verification', 'Role or resource checks'],
            ['Identity verification', 'Access control']
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `User
 ↓
Login
 ↓
Credentials Verified
 ↓
Authentication
 ↓
Token / Session
 ↓
Request
 ↓
Authorization
 ↓
Protected Resource`
        },
        {
          type: 'heading',
          text: 'Basic Authentication Flow'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `POST /api/login

{
  "email": "user@example.com",
  "password": "password"
}

        ↓

Verify Credentials
        ↓
Create Session / Token
        ↓
Return Authentication Result`
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Password Security',
          text: 'Never store plain-text passwords. Store password hashes using a suitable password hashing algorithm and use secure credential handling practices.'
        }
      ]
    },

    {
      id: 'password-hashing',
      title: '15. Password Hashing',
      content: [
        {
          type: 'paragraph',
          text: 'Password hashing transforms a password into a one-way cryptographic representation suitable for storage. Password verification compares a supplied password against the stored hash rather than recovering the original password.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import bcrypt from 'bcrypt';

const password = 'user-password';

const hash = await bcrypt.hash(password, 12);

const isValid = await bcrypt.compare(
  password,
  hash
);

console.log(isValid);`
        },
        {
          type: 'heading',
          text: 'Secure Password Flow'
        },
        {
          type: 'code',
          language: 'text',
          code: `User Password
     ↓
Password Hashing
     ↓
Database
     ↓
Stored Hash

Login Password
     ↓
Hash Verification
     ↓
Match?
 ┌───┴───┐
Yes     No
 ↓       ↓
Login   Reject`
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Never store plain-text passwords',
            'Use a password hashing algorithm designed for passwords',
            'Use appropriate work factors',
            'Do not log passwords',
            'Use HTTPS for authentication requests',
            'Consider rate limiting login attempts'
          ]
        }
      ]
    },

    {
      id: 'jwt-authentication',
      title: '16. JWT Authentication',
      content: [
        {
          type: 'paragraph',
          text: 'JSON Web Token (JWT) is a token format commonly used for representing claims between parties. Backend applications can issue signed tokens after authentication and validate them on protected requests.'
        },
        {
          type: 'heading',
          text: 'JWT Structure'
        },
        {
          type: 'code',
          language: 'text',
          code: `HEADER.PAYLOAD.SIGNATURE`
        },
        {
          type: 'heading',
          text: 'JWT Example'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import jwt from 'jsonwebtoken';

const token = jwt.sign(
  {
    userId: user._id,
    role: user.role
  },
  process.env.JWT_SECRET,
  {
    expiresIn: '15m'
  }
);

console.log(token);`
        },
        {
          type: 'heading',
          text: 'JWT Verification'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET
);

console.log(decoded.userId);`
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'JWT Security',
          text: 'JWT payload data should not be treated as secret merely because it is encoded. Protect signing secrets, validate tokens correctly, use suitable expiration times, and choose a secure token storage strategy.'
        }
      ]
    },

    {
      id: 'sessions-cookies',
      title: '17. Sessions & Cookies',
      content: [
        {
          type: 'paragraph',
          text: 'Session-based authentication stores session state on the server or a shared session store while the browser commonly stores a session identifier in a cookie.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `res.cookie('sessionId', sessionId, {
  httpOnly: true,
  secure: true,
  sameSite: 'lax'
});

res.json({
  message: 'Logged in'
});`
        },
        {
          type: 'heading',
          text: 'Cookie Security Flags'
        },
        {
          type: 'table',
          headers: ['Flag', 'Purpose'],
          rows: [
            ['HttpOnly', 'Prevents client-side JavaScript from reading the cookie'],
            ['Secure', 'Sends cookie only over HTTPS connections'],
            ['SameSite', 'Controls cross-site cookie behavior'],
            ['Expires / Max-Age', 'Controls cookie lifetime']
          ]
        },
        {
          type: 'heading',
          text: 'Session Architecture'
        },
        {
          type: 'code',
          language: 'text',
          code: `Browser
   ↓
Session Cookie
   ↓
Load Balancer
   ↓
Backend Server
   ↓
Session Store
   ↓
User Session`
        }
      ]
    },

    {
      id: 'authorization-rbac',
      title: '18. Role-Based Access Control',
      content: [
        {
          type: 'paragraph',
          text: 'Role-Based Access Control (RBAC) grants permissions according to roles such as admin, manager, teacher, employee, or user.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: 'Forbidden'
      });
    }

    next();
  };
};

app.delete(
  '/api/users/:id',
  authMiddleware,
  requireRole('admin'),
  deleteUser
);`
        },
        {
          type: 'heading',
          text: 'RBAC Flow'
        },
        {
          type: 'code',
          language: 'text',
          code: `User
 ↓
Authentication
 ↓
User Role
 ↓
Permission Check
 ↓
Allowed?
 ├── Yes → Controller
 └── No  → 403 Forbidden`
        },
        {
          type: 'table',
          headers: ['Role', 'Example Permissions'],
          rows: [
            ['Admin', 'Manage users and system settings'],
            ['Manager', 'Manage assigned business resources'],
            ['Staff', 'Perform assigned operations'],
            ['User', 'Access own permitted resources']
          ]
        }
      ]
    },

    {
      id: 'api-security',
      title: '19. API Security',
      content: [
        {
          type: 'paragraph',
          text: 'Backend APIs must validate input, authenticate protected resources, authorize actions, protect secrets, limit abuse, and safely handle errors.'
        },
        {
          type: 'heading',
          text: 'Common API Security Practices'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use HTTPS',
            'Validate request data',
            'Sanitize where appropriate',
            'Use authentication',
            'Implement authorization',
            'Rate limit sensitive endpoints',
            'Protect secrets using environment configuration',
            'Use secure cookies where applicable',
            'Prevent injection attacks',
            'Configure CORS carefully',
            'Avoid leaking sensitive error information',
            'Keep dependencies updated',
            'Log security-relevant events appropriately'
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

app.use(helmet());

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20
});

app.use('/api/login', loginLimiter);`
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Never Expose Secrets',
          text: 'Do not hard-code database passwords, JWT secrets, API keys, or cloud credentials in source code or commit them to public repositories.'
        }
      ]
    },

    {
      id: 'cors',
      title: '20. CORS',
      content: [
        {
          type: 'paragraph',
          text: 'Cross-Origin Resource Sharing (CORS) is a browser security mechanism that controls whether a web page from one origin can access resources from another origin.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import cors from 'cors';

app.use(cors({
  origin: 'https://example.com',
  credentials: true
}));`
        },
        {
          type: 'heading',
          text: 'Origin'
        },
        {
          type: 'code',
          language: 'text',
          code: `https://frontend.example.com
        │
        ├── protocol: https
        ├── host: frontend.example.com
        └── port: default HTTPS port

https://api.example.com
        │
        └── Different origin`
        },
        {
          type: 'heading',
          text: 'Common CORS Problems'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Incorrect allowed origin',
            'Credentials configuration mismatch',
            'Missing preflight handling',
            'Incorrect allowed methods',
            'Incorrect allowed headers'
          ]
        }
      ]
    },

    {
      id: 'csrf',
      title: '21. CSRF Protection',
      content: [
        {
          type: 'paragraph',
          text: 'Cross-Site Request Forgery (CSRF) is an attack in which a victim\'s browser is induced to send an unwanted authenticated request to a site where the victim is already authenticated.'
        },
        {
          type: 'code',
          language: 'text',
          code: `Victim Browser
      ↓
Authenticated Cookie
      ↓
Malicious Site
      ↓
Unexpected Request
      ↓
Target Application`
        },
        {
          type: 'heading',
          text: 'Protection Techniques'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use SameSite cookies appropriately',
            'Use CSRF tokens where required',
            'Validate request origins where appropriate',
            'Avoid unsafe state-changing GET endpoints',
            'Use secure cookie configuration'
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Important',
          text: 'CSRF risk depends strongly on how authentication credentials are transported and stored. Token-in-header designs and cookie-based session designs have different security considerations.'
        }
      ]
    },

    {
      id: 'input-validation',
      title: '22. Input Validation',
      content: [
        {
          type: 'paragraph',
          text: 'Input validation ensures that incoming data matches the expected structure, type, format, and business rules before the backend processes it.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().int().min(18)
});

const result = userSchema.safeParse(req.body);

if (!result.success) {
  return res.status(400).json({
    message: 'Invalid input',
    errors: result.error.flatten()
  });
}`
        },
        {
          type: 'heading',
          text: 'Validate'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Required fields',
            'Data types',
            'String length',
            'Email format',
            'Numeric ranges',
            'Allowed values',
            'Object structure',
            'Business constraints'
          ]
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Never Trust Client Input',
          text: 'Frontend validation improves user experience, but backend validation is still required because clients can send arbitrary requests directly to an API.'
        }
      ]
    },

    {
      id: 'error-handling',
      title: '23. Error Handling',
      content: [
        {
          type: 'paragraph',
          text: 'Reliable backend systems handle expected failures consistently and prevent internal implementation details from leaking through API responses.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.use((err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message:
      statusCode === 500
        ? 'Internal server error'
        : err.message
  });
});`
        },
        {
          type: 'heading',
          text: 'Error Categories'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Validation errors',
            'Authentication errors',
            'Authorization errors',
            'Resource not found',
            'Conflict errors',
            'Database errors',
            'Third-party service failures',
            'Unexpected application errors'
          ]
        },
        {
          type: 'heading',
          text: 'Custom Error'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

throw new AppError(
  'User not found',
  404
);`
        }
      ]
    },

    {
      id: 'logging-monitoring',
      title: '24. Logging & Monitoring',
      content: [
        {
          type: 'paragraph',
          text: 'Logging records useful application events, while monitoring observes application health, performance, errors, and infrastructure behavior.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `console.info('Server started');
console.warn('High request latency');
console.error('Database connection failed');`
        },
        {
          type: 'heading',
          text: 'What to Monitor'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Request latency',
            'HTTP error rates',
            'CPU usage',
            'Memory usage',
            'Database performance',
            'Cache performance',
            'Queue depth',
            'Application availability',
            'External service failures',
            'Authentication failures'
          ]
        },
        {
          type: 'heading',
          text: 'Health Endpoint'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Observability',
          text: 'Production systems benefit from logs, metrics, traces, health checks, alerting, and centralized monitoring rather than relying only on console output.'
        }
      ]
    },

    {
      id: 'caching',
      title: '25. Caching',
      content: [
        {
          type: 'paragraph',
          text: 'Caching stores frequently accessed data temporarily so future requests can be served faster and with less load on backend resources.'
        },
        {
          type: 'code',
          language: 'text',
          code: `Client
  ↓
Cache
  ├── HIT  → Return Cached Data
  │
  └── MISS
       ↓
     Database
       ↓
     Store in Cache
       ↓
     Return Data`
        },
        {
          type: 'heading',
          text: 'Redis Example'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const cached = await redis.get('users');

if (cached) {
  return JSON.parse(cached);
}

const users = await User.find();

await redis.set(
  'users',
  JSON.stringify(users),
  { EX: 60 }
);

return users;`
        },
        {
          type: 'heading',
          text: 'Caching Strategies'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Cache-aside',
            'Read-through',
            'Write-through',
            'Write-behind',
            'TTL-based expiration',
            'Manual invalidation'
          ]
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Cache Invalidation',
          text: 'Caching introduces consistency considerations. Cached data should have a deliberate expiration and invalidation strategy.'
        }
      ]
    },

    {
      id: 'message-queues',
      title: '26. Message Queues',
      content: [
        {
          type: 'paragraph',
          text: 'Message queues allow backend components to communicate asynchronously. A producer sends a message and a consumer processes it later.'
        },
        {
          type: 'code',
          language: 'text',
          code: `Producer
   ↓
Message Queue
   ↓
Consumer
   ↓
Background Processing`
        },
        {
          type: 'heading',
          text: 'Example Use Cases'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Sending emails',
            'Processing images',
            'Generating reports',
            'Sending notifications',
            'Processing payments',
            'Background data processing',
            'Webhook processing'
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Producer
await queue.add('send-email', {
  userId: user.id,
  email: user.email
});

// Consumer
worker.process('send-email', async job => {
  await sendEmail(job.data.email);
});`
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Why Queues Help',
          text: 'Queues can move slow or retryable work out of the main HTTP request path, improving responsiveness and providing controlled background processing.'
        }
      ]
    },

    {
      id: 'async-processing',
      title: '27. Asynchronous Processing',
      content: [
        {
          type: 'paragraph',
          text: 'Asynchronous processing allows long-running work to happen independently from the request that initiated it.'
        },
        {
          type: 'heading',
          text: 'Synchronous Example'
        },
        {
          type: 'code',
          language: 'text',
          code: `Request
  ↓
Generate Large Report
  ↓
Wait
  ↓
Complete
  ↓
Response`
        },
        {
          type: 'heading',
          text: 'Asynchronous Example'
        },
        {
          type: 'code',
          language: 'text',
          code: `Request
  ↓
Create Job
  ↓
Return Job ID
  ↓
Background Worker
  ↓
Generate Report
  ↓
Store Result
  ↓
Notify User`
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const job = await reportQueue.add('generate-report', {
  userId: req.user.id
});

res.status(202).json({
  message: 'Report generation started',
  jobId: job.id
});`
        }
      ]
    },

    {
      id: 'websockets',
      title: '28. WebSockets & Real-Time Communication',
      content: [
        {
          type: 'paragraph',
          text: 'WebSockets provide a persistent connection that allows the server and client to exchange messages in real time.'
        },
        {
          type: 'code',
          language: 'text',
          code: `Client
   ↕
WebSocket Connection
   ↕
Server

Server → Client
Client → Server`
        },
        {
          type: 'heading',
          text: 'Socket.IO Example'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import { Server } from 'socket.io';

const io = new Server(httpServer, {
  cors: {
    origin: 'https://example.com'
  }
});

io.on('connection', socket => {
  console.log('Connected:', socket.id);

  socket.on('message', message => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
});`
        },
        {
          type: 'heading',
          text: 'Common Use Cases'
        },
          {
          type: 'list',
          ordered: false,
          items: [
            'Chat applications',
            'Live notifications',
            'Real-time dashboards',
            'Online gaming',
            'Collaborative applications',
            'Live tracking',
            'Real-time status updates'
          ]
        }
      ]
    },

    {
      id: 'scalability',
      title: '29. Scalability',
      content: [
        {
          type: 'paragraph',
          text: 'Scalability is the ability of a system to handle increased workload while maintaining acceptable performance and reliability.'
        },
        {
          type: 'heading',
          text: 'Vertical Scaling'
        },
        {
          type: 'code',
          language: 'text',
          code: `Small Server
     ↓
More CPU
More RAM
     ↓
Larger Server`
        },
        {
          type: 'heading',
          text: 'Horizontal Scaling'
        },
        {
          type: 'code',
          language: 'text',
          code: `             Load Balancer
                  ↓
       ┌──────────┼──────────┐
       ↓          ↓          ↓
    Server 1   Server 2   Server 3`
        },
        {
          type: 'table',
          headers: ['Vertical Scaling', 'Horizontal Scaling'],
          rows: [
            ['Increase machine capacity', 'Add more machines'],
            ['Simpler initially', 'More distributed complexity'],
            ['Has hardware limits', 'Can provide greater scale'],
            ['Often easier operationally', 'Requires load balancing and coordination']
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Scaling Principle',
          text: 'Stateless application servers, caching, database optimization, queues, and load balancing are common building blocks for scalable backend systems.'
        }
      ]
    },

    {
      id: 'load-balancing',
      title: '30. Load Balancing',
      content: [
        {
          type: 'paragraph',
          text: 'A load balancer distributes incoming requests across multiple backend instances.'
        },
        {
          type: 'code',
          language: 'text',
          code: `                 Users
                   ↓
              Load Balancer
                   ↓
        ┌──────────┼──────────┐
        ↓          ↓          ↓
    Backend 1  Backend 2  Backend 3
        │          │          │
        └──────────┼──────────┘
                   ↓
                Database`
        },
        {
          type: 'heading',
          text: 'Common Load Balancing Algorithms'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Round Robin',
            'Weighted Round Robin',
            'Least Connections',
            'IP Hash',
            'Consistent Hashing'
          ]
        },
        {
          type: 'heading',
          text: 'Nginx Example'
        },
        {
          type: 'code',
          language: 'text',
          code: `upstream backend {
    server 127.0.0.1:5001;
    server 127.0.0.1:5002;
    server 127.0.0.1:5003;
}

server {
    location /api/ {
        proxy_pass http://backend;
    }
}`
        }
      ]
    },

    {
      id: 'reverse-proxy',
      title: '31. Reverse Proxy',
      content: [
        {
          type: 'paragraph',
          text: 'A reverse proxy sits between clients and backend servers. It can route traffic, terminate TLS, serve static files, perform compression, apply security controls, and distribute traffic.'
        },
        {
          type: 'code',
          language: 'text',
          code: `Internet
   ↓
Nginx / Reverse Proxy
   ├── Static Files
   ├── /api → Backend
   └── /admin → Admin Service
                 ↓
             Application`
        },
        {
          type: 'heading',
          text: 'Nginx API Proxy'
        },
        {
          type: 'code',
          language: 'text',
          code: `server {
    listen 80;

    server_name example.com;

    location /api/ {
        proxy_pass http://localhost:5001/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}`
        },
        {
          type: 'heading',
          text: 'Benefits'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Traffic routing',
            'TLS termination',
            'Load balancing',
            'Static file serving',
            'Compression',
            'Request filtering',
            'Centralized entry point'
          ]
        }
      ]
    },

    {
      id: 'microservices',
      title: '32. Microservices Architecture',
      content: [
        {
          type: 'paragraph',
          text: 'Microservices architecture divides a system into independently deployable services that communicate through defined interfaces.'
        },
        {
          type: 'code',
          language: 'text',
          code: `                 API Gateway
                      ↓
        ┌─────────────┼─────────────┐
        ↓             ↓             ↓
   User Service   Order Service  Payment Service
        ↓             ↓             ↓
     Database      Database      Database`
        },
        {
          type: 'heading',
          text: 'Monolith vs Microservices'
        },
        {
          type: 'table',
          headers: ['Monolith', 'Microservices'],
          rows: [
            ['One deployable application', 'Multiple deployable services'],
            ['Simpler initially', 'More operational complexity'],
            ['Shared application runtime', 'Services communicate over APIs/events'],
            ['Often easier debugging initially', 'Requires distributed tracing and monitoring'],
            ['Scaling can be coarse-grained', 'Services can scale independently']
          ]
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Architecture Choice',
          text: 'Microservices are not automatically better. A modular monolith can be a suitable architecture for many applications, especially when the system and team are still small.'
        }
      ]
    },

    {
      id: 'api-gateway',
      title: '33. API Gateway',
      content: [
        {
          type: 'paragraph',
          text: 'An API Gateway provides a common entry point for clients communicating with multiple backend services.'
        },
        {
          type: 'code',
          language: 'text',
          code: `Mobile / Web Client
        ↓
    API Gateway
    ├── /users
    ├── /orders
    ├── /payments
    └── /notifications
        ↓
   Microservices`
        },
        {
          type: 'heading',
          text: 'Gateway Responsibilities'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Request routing',
            'Authentication',
            'Rate limiting',
            'Request transformation',
            'Response aggregation',
            'Logging',
            'Monitoring',
            'TLS termination'
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `GET /api/orders
        ↓
API Gateway
        ↓
Order Service
        ↓
Database`
        }
      ]
    },

    {
      id: 'distributed-systems',
      title: '34. Distributed Systems',
      content: [
        {
          type: 'paragraph',
          text: 'A distributed system consists of multiple computing components that communicate over a network and work together to provide application functionality.'
        },
        {
          type: 'code',
          language: 'text',
          code: `                Users
                   ↓
              Load Balancer
                   ↓
        ┌──────────┼──────────┐
        ↓          ↓          ↓
     Server A   Server B   Server C
        ↓          ↓          ↓
      Cache      Queue      Services
        └──────────┼──────────┘
                   ↓
              Database`
        },
        {
          type: 'heading',
          text: 'Distributed System Challenges'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Network failures',
            'Latency',
            'Partial failures',
            'Data consistency',
            'Service discovery',
            'Retries',
            'Duplicate messages',
            'Distributed transactions',
            'Observability',
            'Clock and ordering issues'
          ]
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Key Idea',
          text: 'In distributed systems, network communication can fail or become slow. Backend designs should explicitly account for timeouts, retries, idempotency, failure recovery, and observability.'
        }
      ]
    },

    {
      id: 'database-replication',
      title: '35. Database Replication',
      content: [
        {
          type: 'paragraph',
          text: 'Database replication maintains copies of data across multiple database nodes. It can improve availability, read scalability, and disaster recovery depending on the database technology and configuration.'
        },
        {
          type: 'code',
          language: 'text',
          code: `             Primary
                │
        ┌───────┴───────┐
        ↓               ↓
    Replica 1       Replica 2
     Reads            Reads`
        },
        {
          type: 'heading',
          text: 'Replication Concepts'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Primary / leader',
            'Replica / follower',
            'Replication lag',
            'Read replicas',
            'Failover',
            'High availability'
          ]
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Replication Is Not a Backup',
          text: 'Replication can improve availability, but it does not replace independent backups. Data deletion or corruption can potentially propagate to replicas.'
        }
      ]
    },

    {
      id: 'database-sharding',
      title: '36. Database Sharding',
      content: [
        {
          type: 'paragraph',
          text: 'Sharding distributes data across multiple database nodes using a shard key or partitioning strategy.'
        },
        {
          type: 'code',
          language: 'text',
          code: `Users
  ↓
Shard Key
  ├── Shard 1 → Users A-H
  ├── Shard 2 → Users I-P
  └── Shard 3 → Users Q-Z`
        },
        {
          type: 'heading',
          text: 'Why Shard?'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Handle very large datasets',
            'Distribute storage',
            'Distribute database workload',
            'Scale beyond a single database node'
          ]
        },
        {
          type: 'heading',
          text: 'Shard Key Considerations'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'High enough cardinality',
            'Balanced distribution',
            'Supports common query patterns',
            'Avoids excessive hotspotting',
            'Stable enough for the selected database strategy'
          ]
        }
      ]
    },

    {
      id: 'database-connection-pooling',
      title: '37. Database Connection Pooling',
      content: [
        {
          type: 'paragraph',
          text: 'A database connection pool maintains reusable database connections so applications do not need to create a new connection for every request.'
        },
        {
          type: 'code',
          language: 'text',
          code: `Application
    ↓
Connection Pool
 ┌──┬──┬──┬──┐
 │  │  │  │  │
 DB DB DB DB
 Connections`
        },
        {
          type: 'heading',
          text: 'Why Connection Pools Matter'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Avoid repeated connection setup',
            'Reuse established connections',
            'Control concurrent database connections',
            'Improve application efficiency'
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `await mongoose.connect(process.env.MONGODB_URI, {
  maxPoolSize: 20,
  minPoolSize: 5
});`
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Pool Size',
          text: 'An unnecessarily large connection pool can overload a database. Pool configuration should consider application concurrency, database limits, and actual workload.'
        }
      ]
    },

    {
      id: 'pagination',
      title: '38. Pagination',
      content: [
        {
          type: 'paragraph',
          text: 'Pagination divides a large dataset into smaller responses so clients do not need to retrieve every record at once.'
        },
        {
          type: 'heading',
          text: 'Offset Pagination'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 20;

const skip = (page - 1) * limit;

const users = await User.find()
  .skip(skip)
  .limit(limit);`
        },
        {
          type: 'heading',
          text: 'Cursor Pagination'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const users = await User.find({
  _id: { $lt: lastId }
})
.sort({ _id: -1 })
.limit(20);`
        },
        {
          type: 'table',
          headers: ['Offset Pagination', 'Cursor Pagination'],
          rows: [
            ['Uses page/offset', 'Uses a cursor'],
            ['Simple to implement', 'Useful for large or changing datasets'],
            ['Large offsets can become inefficient', 'Can provide stable continuation'],
            ['Good for many simple interfaces', 'Good for feeds and high-volume APIs']
          ]
        }
      ]
    },

    {
      id: 'rate-limiting',
      title: '39. Rate Limiting',
      content: [
        {
          type: 'paragraph',
          text: 'Rate limiting restricts how frequently a client can make requests during a defined period.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 100
});

app.use('/api/', apiLimiter);`
        },
        {
          type: 'heading',
          text: 'Why Rate Limit?'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Reduce abusive traffic',
            'Protect expensive endpoints',
            'Limit brute-force attempts',
            'Protect infrastructure',
            'Control API consumption'
          ]
        },
        {
          type: 'heading',
          text: 'Common Algorithms'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Fixed Window',
            'Sliding Window',
            'Token Bucket',
            'Leaky Bucket'
          ]
        }
      ]
    },

    {
      id: 'idempotency',
      title: '40. Idempotency',
      content: [
        {
          type: 'paragraph',
          text: 'An operation is idempotent when repeating the same operation produces the same intended final effect. Idempotency is especially important for distributed systems, retries, and payment-like operations.'
        },
        {
          type: 'heading',
          text: 'Idempotency Key Example'
        },
        {
          type: 'code',
          language: 'http',
          code: `POST /api/payments
Idempotency-Key: 7f1c-payment-001

{
  "amount": 500,
  "currency": "INR"
}`
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const existing = await Payment.findOne({
  idempotencyKey: req.headers['idempotency-key']
});

if (existing) {
  return res.json(existing);
}

// Process payment once
const payment = await createPayment({
  ...req.body,
  idempotencyKey: req.headers['idempotency-key']
});`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Why It Matters',
          text: 'If a client retries a request because of a timeout, idempotency can prevent the same business operation from being performed multiple times.'
        }
      ]
    },

    {
      id: 'retries-timeouts',
      title: '41. Timeouts, Retries & Circuit Breakers',
      content: [
        {
          type: 'paragraph',
          text: 'Backend services often depend on databases and external APIs. Timeouts prevent requests from waiting indefinitely, retries can recover from temporary failures, and circuit breakers can prevent repeatedly calling an unhealthy dependency.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const controller = new AbortController();

const timeout = setTimeout(() => {
  controller.abort();
}, 5000);

try {
  const response = await fetch(
    'https://api.example.com/data',
    {
      signal: controller.signal
    }
  );

  return await response.json();
} finally {
  clearTimeout(timeout);
}`
        },
        {
          type: 'heading',
          text: 'Retry Strategy'
        },
        {
          type: 'code',
          language: 'text',
          code: `Request
  ↓
Failure
  ↓
Wait
  ↓
Retry
  ↓
Failure
  ↓
Exponential Backoff
  ↓
Retry Limit
  ↓
Fail Safely`
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use timeouts for network calls',
            'Retry only appropriate failures',
            'Use exponential backoff where appropriate',
            'Add jitter in distributed systems',
            'Limit retry attempts',
            'Use idempotency for retryable operations',
            'Avoid retry storms'
          ]
        }
      ]
    },

    {
      id: 'docker-backend',
      title: '42. Docker for Backend Applications',
      content: [
        {
          type: 'paragraph',
          text: 'Docker packages an application and its runtime dependencies into containers, providing consistent environments across development, testing, and deployment.'
        },
        {
          type: 'code',
          language: 'dockerfile',
          code: `FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 5000

CMD ["npm", "start"]`
        },
        {
          type: 'heading',
          text: 'Docker Compose Example'
        },
        {
          type: 'code',
          language: 'yaml',
          code: `services:
  backend:
    build: .
    ports:
      - "5000:5000"
    environment:
      MONGODB_URI: mongodb://mongo:27017/app

  mongo:
    image: mongo:8
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:`
        },
        {
          type: 'heading',
          text: 'Container Architecture'
        },
        {
          type: 'code',
          language: 'text',
          code: `Docker Host
│
├── Backend Container
│
├── MongoDB Container
│
└── Redis Container`
        }
      ]
    },

    {
      id: 'environment-configuration',
      title: '43. Environment Variables & Configuration',
      content: [
        {
          type: 'paragraph',
          text: 'Environment variables allow applications to receive configuration values without hard-coding environment-specific settings into source code.'
        },
        {
          type: 'code',
          language: 'text',
          code: `PORT=5000
MONGODB_URI=mongodb://localhost:27017/app
JWT_SECRET=replace-with-a-secure-secret
NODE_ENV=production`
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import 'dotenv/config';

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error('MONGODB_URI is required');
}`
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Do not commit secrets to Git',
            'Use different configuration per environment',
            'Validate required environment variables',
            'Use secret-management solutions where appropriate',
            'Do not expose server secrets to frontend bundles'
          ]
        }
      ]
    },

    {
      id: 'deployment',
      title: '44. Backend Deployment',
      content: [
        {
          type: 'paragraph',
          text: 'Deployment moves a backend application into an environment where users or other services can access it.'
        },
        {
          type: 'code',
          language: 'text',
          code: `Developer
   ↓
Git Repository
   ↓
CI/CD
   ↓
Build
   ↓
Test
   ↓
Deploy
   ↓
Server / Cloud
   ↓
Reverse Proxy
   ↓
Backend`
        },
        {
          type: 'heading',
          text: 'Typical Production Stack'
        },
        {
          type: 'code',
          language: 'text',
          code: `Domain
  ↓
DNS
  ↓
Nginx
  ↓
HTTPS / TLS
  ↓
Node.js Application
  ↓
MongoDB / PostgreSQL
  ↓
Redis / Queue`
        },
        {
          type: 'heading',
          text: 'Production Checklist'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Set production environment variables',
            'Use HTTPS',
            'Configure reverse proxy',
            'Configure process management',
            'Configure database access',
            'Enable logging',
            'Configure monitoring',
            'Configure backups',
            'Configure firewall/security rules',
            'Test health endpoints'
          ]
        }
      ]
    },

    {
      id: 'process-management',
      title: '45. Node.js Process Management',
      content: [
        {
          type: 'paragraph',
          text: 'A process manager can keep a backend process running, restart it after failures, manage multiple instances, and provide operational controls.'
        },
        {
          type: 'code',
          language: 'bash',
          code: `npm install -g pm2

pm2 start server.js --name backend

pm2 status

pm2 logs backend

pm2 restart backend

pm2 save`
        },
        {
          type: 'heading',
          text: 'Multiple Instances'
        },
        {
          type: 'bash',
          language: 'bash',
          code: `pm2 start server.js -i max`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Production Process',
          text: 'Process management should be combined with proper logging, health checks, graceful shutdown, and infrastructure monitoring.'
        }
      ]
    },

    {
      id: 'graceful-shutdown',
      title: '46. Graceful Shutdown',
      content: [
        {
          type: 'paragraph',
          text: 'Graceful shutdown allows a backend server to stop accepting new work, finish appropriate in-flight operations, close connections, and exit cleanly.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const server = app.listen(5000);

const shutdown = async signal => {
  console.log(\`\${signal} received\`);

  server.close(async () => {
    await mongoose.connection.close();

    console.log('Server closed');

    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));`
        },
        {
          type: 'heading',
          text: 'Why Graceful Shutdown Matters'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Prevents abrupt termination of requests',
            'Closes database connections',
            'Supports container orchestration',
            'Reduces data corruption risk',
            'Makes deployments safer'
          ]
        }
      ]
    },

    {
      id: 'file-upload',
      title: '47. File Upload & Storage',
      content: [
        {
          type: 'paragraph',
          text: 'Backend applications often receive images, videos, documents, and other files. Production systems commonly validate file type and size and use dedicated object storage or media services.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import multer from 'multer';

const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

app.post(
  '/api/upload',
  upload.single('file'),
  async (req, res) => {
    res.json({
      filename: req.file.originalname
    });
  }
);`
        },
        {
          type: 'heading',
          text: 'Production Upload Flow'
        },
        {
          type: 'code',
          language: 'text',
          code: `Client
  ↓
Upload API
  ↓
Validate Type + Size
  ↓
Object Storage
  ↓
Store File URL / Metadata
  ↓
Database`
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Validate file size',
            'Validate allowed file types',
            'Generate safe filenames',
            'Avoid trusting user-provided paths',
            'Store files outside application source where appropriate',
            'Use object storage for scalable deployments',
            'Protect private files with authorization'
          ]
        }
      ]
    },

    {
      id: 'email-notifications',
      title: '48. Email & Notification Systems',
      content: [
        {
          type: 'paragraph',
          text: 'Backend applications can send transactional emails and notifications for events such as registration, password reset, orders, payments, alerts, and system updates.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `await emailService.send({
  to: user.email,
  subject: 'Welcome',
  template: 'welcome',
  data: {
    name: user.name
  }
});`
        },
        {
          type: 'heading',
          text: 'Notification Architecture'
        },
        {
          type: 'code',
          language: 'text',
          code: `Business Event
      ↓
Notification Job
      ↓
Message Queue
      ↓
Worker
 ┌────┼────┐
 ↓    ↓    ↓
Email Push SMS`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Background Processing',
          text: 'Email and notification delivery can be moved to background workers so slow external communication does not unnecessarily block the main API request.'
        }
      ]
    },

    {
      id: 'webhooks',
      title: '49. Webhooks',
      content: [
        {
          type: 'paragraph',
          text: 'A webhook allows one service to notify another service about an event through an HTTP request.'
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.post('/webhooks/payment', async (req, res) => {
  const event = req.body;

  await processPaymentEvent(event);

  res.status(200).json({
    received: true
  });
});`
        },
        {
          type: 'heading',
          text: 'Webhook Flow'
        },
        {
          type: 'code',
          language: 'text',
          code: `Payment Provider
      ↓
Webhook POST
      ↓
Backend Endpoint
      ↓
Verify Event
      ↓
Process Event
      ↓
Update Database`
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Verify webhook authenticity where supported',
            'Validate event structure',
            'Make event handling idempotent',
            'Return appropriate HTTP status codes',
            'Process expensive work asynchronously',
            'Store event identifiers when duplicate delivery is possible'
          ]
        }
      ]
    },

    {
      id: 'testing-backend',
      title: '50. Backend Testing',
      content: [
        {
          type: 'paragraph',
          text: 'Backend testing verifies that application logic, APIs, database interactions, authentication, and integrations behave as expected.'
        },
        {
          type: 'table',
          headers: ['Test Type', 'Purpose'],
          rows: [
            ['Unit Test', 'Test a small isolated function or component'],
            ['Integration Test', 'Test interaction between components'],
            ['API Test', 'Test HTTP endpoints'],
            ['End-to-End Test', 'Test complete user workflows'],
            ['Load Test', 'Evaluate behavior under expected or high traffic'],
            ['Security Test', 'Identify security weaknesses']
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import request from 'supertest';

const response = await request(app)
  .get('/api/health');

expect(response.status).toBe(200);
expect(response.body.status).toBe('ok');`
        },
        {
          type: 'heading',
          text: 'Testing Pyramid'
        },
        {
          type: 'code',
          language: 'text',
          code: `        E2E
       /   \\
      / API  \\
     /--------\\
    /Integration\\
   /--------------\\
  /   Unit Tests   \\
 /__________________\\`
        }
      ]
    },

    {
      id: 'system-design',
      title: '51. System Design Fundamentals',
      content: [
        {
          type: 'paragraph',
          text: 'System design describes how components are organized and communicate to satisfy functional and non-functional requirements.'
        },
        {
          type: 'heading',
          text: 'Important System Design Topics'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Requirements',
            'API design',
            'Database design',
            'Caching',
            'Load balancing',
            'Horizontal scaling',
            'Queues',
            'Object storage',
            'Search',
            'Replication',
            'Sharding',
            'Fault tolerance',
            'Security',
            'Monitoring',
            'Disaster recovery'
          ]
        },
        {
          type: 'heading',
          text: 'Basic System Design'
        },
        {
          type: 'code',
          language: 'text',
          code: `Users
  ↓
CDN / Load Balancer
  ↓
API Servers
  ├── Cache
  ├── Queue
  ├── Database
  └── Object Storage`
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Interview Approach',
          text: 'Start system design by clarifying requirements, estimating scale, identifying APIs and data models, then designing components and discussing bottlenecks, failures, security, and scalability.'
        }
      ]
    },

    {
      id: 'scalable-backend-architecture',
      title: '52. Scalable Backend Architecture',
      content: [
        {
          type: 'paragraph',
          text: 'A scalable backend commonly separates traffic management, application processing, caching, asynchronous work, persistent storage, and observability.'
        },
        {
          type: 'code',
          language: 'text',
          code: `                         Users
                           ↓
                         CDN
                           ↓
                     Load Balancer
                           ↓
              ┌────────────┼────────────┐
              ↓            ↓            ↓
           API 1         API 2        API 3
              │            │            │
              └──────┬─────┴─────┬──────┘
                     ↓           ↓
                   Redis       Queue
                     ↓           ↓
                Database      Workers
                     ↓
                Read Replicas
`
        },
        {
          type: 'heading',
          text: 'Scaling Strategy'
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Optimize inefficient queries',
            'Add appropriate database indexes',
            'Cache repeated reads',
            'Use pagination',
            'Move slow tasks to queues',
            'Scale application instances',
            'Add load balancing',
            'Use database replicas where appropriate',
            'Partition or shard when required',
            'Monitor actual bottlenecks'
          ]
        }
      ]
    },

    {
      id: 'high-availability',
      title: '53. High Availability',
      content: [
        {
          type: 'paragraph',
          text: 'High availability means designing systems to remain operational despite failures of individual components.'
        },
        {
          type: 'code',
          language: 'text',
          code: `                Load Balancer
                    ↓
           ┌────────┴────────┐
           ↓                 ↓
       Server A           Server B
           │                 │
           └────────┬────────┘
                    ↓
              Database Cluster
                /       \\
           Primary      Replica`
        },
        {
          type: 'heading',
          text: 'High Availability Techniques'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Multiple application instances',
            'Load balancing',
            'Database replication',
            'Automatic failover',
            'Health checks',
            'Redundant infrastructure',
            'Backups',
            'Disaster recovery plans',
            'Monitoring and alerting'
          ]
        }
      ]
    },

    {
      id: 'disaster-recovery',
      title: '54. Backup & Disaster Recovery',
      content: [
        {
          type: 'paragraph',
          text: 'Backups provide recoverable copies of data. Disaster recovery defines how systems are restored after major failures such as infrastructure loss, accidental deletion, corruption, or security incidents.'
        },
        {
          type: 'heading',
          text: 'Backup Strategy'
        },
        {
          type: 'code',
          language: 'text',
          code: `Production Database
        ↓
Scheduled Backup
        ↓
Backup Storage
        ↓
Retention Policy
        ↓
Restore Testing`
        },
        {
          type: 'heading',
          text: 'Important Concepts'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Backup frequency',
            'Backup retention',
            'Off-site storage',
            'Encryption',
            'Restore testing',
            'Recovery Point Objective (RPO)',
            'Recovery Time Objective (RTO)'
          ]
        },
        {
          type: 'table',
          headers: ['Term', 'Meaning'],
          rows: [
            ['RPO', 'How much recent data loss the recovery strategy can tolerate'],
            ['RTO', 'How quickly the service should be restored after a failure']
          ]
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Restore Testing',
          text: 'A backup should not be considered reliable merely because it was successfully created. Regular restore testing verifies that the backup can actually be used for recovery.'
        }
      ]
    },

    {
      id: 'performance-optimization',
      title: '55. Backend Performance Optimization',
      content: [
        {
          type: 'paragraph',
          text: 'Backend performance optimization aims to reduce latency, improve throughput, use resources efficiently, and maintain predictable behavior under load.'
        },
        {
          type: 'heading',
          text: 'Common Optimization Areas'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Database indexes',
            'Efficient queries',
            'Pagination',
            'Caching',
            'Compression',
            'Connection pooling',
            'Asynchronous processing',
            'Efficient serialization',
            'CDN usage',
            'Load balancing',
            'Avoiding unnecessary network calls'
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Avoid loading unnecessary fields
const users = await User.find(
  { active: true },
  {
    name: 1,
    email: 1
  }
)
.limit(20)
.lean();`
        },
        {
          type: 'heading',
          text: 'Performance Measurement'
        },
          {
          type: 'code',
          language: 'javascript',
          code: `const start = performance.now();

await expensiveOperation();

const duration = performance.now() - start;

console.log(\`Duration: \${duration}ms\`);`
        }
      ]
    },

    {
      id: 'security-best-practices',
      title: '56. Backend Security Best Practices',
      content: [
        {
          type: 'list',
          ordered: false,
          items: [
            'Use HTTPS in production',
            'Hash passwords securely',
            'Use strong authentication mechanisms',
            'Implement authorization',
            'Validate all input',
            'Protect against injection attacks',
            'Configure CORS intentionally',
            'Use secure cookies where appropriate',
            'Apply rate limiting',
            'Protect secrets',
            'Keep dependencies updated',
            'Use security headers',
            'Avoid detailed production error leakage',
            'Log security events carefully',
            'Back up important data',
            'Use least-privilege access',
            'Monitor suspicious activity'
          ]
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.disable('x-powered-by');

app.use(helmet());

app.use(express.json({
  limit: '1mb'
}));`
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Security Mindset',
          text: 'Assume that clients can be manipulated and requests can be forged. Security-sensitive decisions must be enforced by the backend rather than trusted to frontend code.'
        }
      ]
    },

    {
      id: 'backend-interview-quick-reference',
      title: '57. Backend Interview Quick Reference',
      content: [
        {
          type: 'table',
          headers: ['Concept', 'Quick Explanation'],
          rows: [
            ['Backend', 'Server-side application logic and infrastructure'],
            ['API', 'Interface through which software components communicate'],
            ['REST', 'Resource-oriented HTTP API architectural style'],
            ['HTTP', 'Protocol used for web communication'],
            ['Middleware', 'Code executed during request processing'],
            ['Authentication', 'Verifies user identity'],
            ['Authorization', 'Controls permitted actions'],
            ['JWT', 'Signed token format commonly used for claims'],
            ['Session', 'Server-managed authentication state'],
            ['CORS', 'Browser mechanism controlling cross-origin requests'],
            ['CSRF', 'Attack involving unwanted authenticated requests'],
            ['Cache', 'Temporary stored data for faster access'],
            ['Queue', 'Asynchronous message-processing mechanism'],
            ['Load Balancer', 'Distributes traffic across servers'],
            ['Replication', 'Maintains copies of database data'],
            ['Sharding', 'Distributes data across database partitions/nodes'],
            ['Index', 'Data structure that can accelerate supported queries'],
            ['WebSocket', 'Persistent connection for real-time communication'],
            ['Microservices', 'Independently deployable services'],
            ['Docker', 'Containerization technology'],
            ['RPO', 'Acceptable recovery data-loss window'],
            ['RTO', 'Target recovery time after failure']
          ]
        },
        {
          type: 'code',
          language: 'text',
          code: `Backend Interview Flow

HTTP
 ↓
REST API
 ↓
Middleware
 ↓
Authentication
 ↓
Authorization
 ↓
Database
 ↓
Caching
 ↓
Queues
 ↓
Scaling
 ↓
Load Balancing
 ↓
Security
 ↓
Monitoring
 ↓
System Design`
        }
      ]
    },

    {
      id: 'backend-interview-questions',
      title: '58. Backend Interview Questions',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is backend development?',
              answer: 'Backend development involves server-side application logic, data access, authentication, business rules, APIs, integrations, and infrastructure needed to support client applications.'
            },
            {
              question: 'What is an API?',
              answer: 'An API is an interface that allows software components to communicate using defined requests, responses, and rules.'
            },
            {
              question: 'What is REST?',
              answer: 'REST is an architectural style commonly used to design resource-oriented APIs using HTTP.'
            },
            {
              question: 'What is the difference between authentication and authorization?',
              answer: 'Authentication verifies identity, while authorization determines what an authenticated identity is allowed to access or perform.'
            },
            {
              question: 'What is middleware?',
              answer: 'Middleware is code that executes during the request-response lifecycle and can perform tasks such as logging, authentication, validation, or error handling.'
            },
            {
              question: 'What is JWT?',
              answer: 'JWT is a compact token format containing claims that can be digitally signed and verified.'
            },
            {
              question: 'What is a session?',
              answer: 'A session is server-managed state associated with a client, usually represented to the client by a session identifier.'
            },
            {
              question: 'What is CORS?',
              answer: 'CORS is a browser security mechanism that controls cross-origin access to resources.'
            },
            {
              question: 'What is CSRF?',
              answer: 'CSRF is an attack in which a victim browser is induced to make an unwanted authenticated request to another application.'
            },
            {
              question: 'Why are passwords hashed?',
              answer: 'Passwords are hashed so the original password does not need to be stored directly. Verification is performed against the stored hash.'
            },
            {
              question: 'What is caching?',
              answer: 'Caching stores frequently needed data temporarily so it can be served faster and with less load on backend resources.'
            },
            {
              question: 'What is Redis?',
              answer: 'Redis is an in-memory data store commonly used for caching, sessions, counters, queues, and other low-latency workloads.'
            },
            {
              question: 'What is a message queue?',
              answer: 'A message queue allows producers to submit work or events that consumers can process asynchronously.'
            },
            {
              question: 'Why use a message queue?',
              answer: 'Queues can move slow or retryable operations out of the main request path and provide controlled asynchronous processing.'
            },
            {
              question: 'What is load balancing?',
              answer: 'Load balancing distributes incoming requests across multiple backend servers or instances.'
            },
            {
              question: 'What is horizontal scaling?',
              answer: 'Horizontal scaling means adding more application instances or machines instead of only increasing the resources of one machine.'
            },
            {
              question: 'What is vertical scaling?',
              answer: 'Vertical scaling means increasing the CPU, memory, storage, or other resources of an existing machine.'
            },
            {
              question: 'What is database replication?',
              answer: 'Replication maintains copies of database data on multiple nodes for availability, read scaling, or other operational purposes.'
            },
            {
              question: 'What is database sharding?',
              answer: 'Sharding distributes data across multiple database nodes according to a partitioning or shard-key strategy.'
            },
            {
              question: 'What is an index?',
              answer: 'An index is a database data structure that can make supported queries faster at the cost of additional storage and write maintenance.'
            },
            {
              question: 'What is pagination?',
              answer: 'Pagination divides large result sets into smaller responses so the client does not retrieve all records at once.'
            },
            {
              question: 'What is rate limiting?',
              answer: 'Rate limiting restricts how frequently clients can make requests within a specified period.'
            },
            {
              question: 'What is idempotency?',
              answer: 'Idempotency means repeating an operation results in the same intended final effect, which is especially useful when requests can be retried.'
            },
            {
              question: 'What is a reverse proxy?',
              answer: 'A reverse proxy receives client requests and forwards them to backend servers while potentially providing TLS termination, routing, load balancing, and other functions.'
            },
            {
              question: 'What is an API Gateway?',
              answer: 'An API Gateway provides a centralized entry point for clients communicating with multiple backend services.'
            },
            {
              question: 'What are microservices?',
              answer: 'Microservices are independently deployable services that communicate through APIs or events and collectively implement a larger system.'
            },
            {
              question: 'What is Docker?',
              answer: 'Docker is a containerization platform that packages applications with their runtime dependencies into isolated containers.'
            },
            {
              question: 'What is a health check endpoint?',
              answer: 'A health endpoint reports whether an application is running and can optionally provide dependency or readiness information.'
            },
            {
              question: 'What is graceful shutdown?',
              answer: 'Graceful shutdown allows a server to stop accepting new work, complete appropriate in-flight operations, close resources, and exit cleanly.'
            },
            {
              question: 'What is a webhook?',
              answer: 'A webhook is an HTTP callback mechanism through which one system sends event information to another system.'
            },
            {
              question: 'What is system design?',
              answer: 'System design is the process of defining architecture, components, data flow, APIs, storage, scalability, reliability, security, and operational behavior for a software system.'
            },
            {
              question: 'What is high availability?',
              answer: 'High availability is the design goal of keeping a service operational despite failures of individual components.'
            },
            {
              question: 'What is RPO?',
              answer: 'Recovery Point Objective describes the amount of recent data loss a recovery strategy is designed to tolerate.'
            },
            {
              question: 'What is RTO?',
              answer: 'Recovery Time Objective describes the target time for restoring a service after a failure.'
            },
            {
              question: 'How do you make a backend API scalable?',
              answer: 'Common techniques include efficient database queries, indexing, caching, pagination, asynchronous processing, stateless application servers, load balancing, replication, and monitoring.'
            }
          ]
        }
      ]
    },

    {
      id: 'real-world-ecommerce-backend',
      title: '59. Real-World E-Commerce Backend Architecture',
      content: [
        {
          type: 'paragraph',
          text: 'An e-commerce backend demonstrates how authentication, products, carts, orders, payments, inventory, notifications, databases, queues, and external services can work together.'
        },
        {
          type: 'code',
          language: 'text',
          code: `                    Web / Mobile
                         ↓
                    Load Balancer
                         ↓
                     API Server
                         ↓
       ┌─────────────────┼─────────────────┐
       ↓                 ↓                 ↓
    Users             Products           Orders
       │                 │                 │
       └─────────────────┼─────────────────┘
                         ↓
                      Database
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
        Redis          Queue         Payment API
                         ↓
                      Workers
                         ↓
                  Email / Notifications`
        },
        {
          type: 'heading',
          text: 'Core Modules'
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Authentication',
            'Users',
            'Products',
            'Categories',
            'Cart',
            'Orders',
            'Payments',
            'Inventory',
            'Coupons',
            'Reviews',
            'Notifications',
            'Admin dashboard'
          ]
        }
      ]
    },

    {
      id: 'real-world-crm-backend',
      title: '60. Real-World CRM Backend Architecture',
      content: [
        {
          type: 'paragraph',
          text: 'A CRM backend manages customers, leads, employees, communication records, tasks, notes, activities, permissions, and reports.'
        },
        {
          type: 'code',
          language: 'text',
          code: `                    Frontend
                       ↓
                    API Layer
                       ↓
              Authentication
                       ↓
       ┌───────────────┼───────────────┐
       ↓               ↓               ↓
     Leads          Customers        Staff
       ↓               ↓               ↓
     Calls           Notes          Tasks
       └───────────────┼───────────────┘
                       ↓
                    Database
                       ↓
                     Queue
                       ↓
               Notifications / Email`
        },
        {
          type: 'heading',
          text: 'Typical CRM APIs'
        },
        {
          type: 'code',
          language: 'text',
          code: `POST   /api/leads
GET    /api/leads
GET    /api/leads/:id
PATCH  /api/leads/:id
DELETE /api/leads/:id

POST   /api/customers
GET    /api/customers

POST   /api/calls
GET    /api/calls

POST   /api/notes
GET    /api/notes`
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'MERN Backend',
          text: 'A CRM can be implemented with Node.js and Express for APIs, MongoDB for persistence, React for the frontend, JWT or session-based authentication, Redis for selected caching needs, and queues for background tasks.'
        }
      ]
    }
  ]
};

export default backendContent;
