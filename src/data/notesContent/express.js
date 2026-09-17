export const expressContent = {
  id: 'express',
  slug: 'express',
  title: 'Express.js',
  subtitle: 'Fast Web Framework for Node.js',
  category: 'Web Development',
  description:
    'Fast, unopinionated web framework for Node.js: routing, middleware stack, RESTful APIs, request/response lifecycle, error handling, and security best practices.',
  sections: [
    {
      id: 'introduction-to-expressjs',
      title: '1. Introduction to Express.js',
      summary:
        'Express.js is a minimal and flexible web framework for Node.js that simplifies HTTP server development through routing and middleware.',
      content: [
        {
          type: 'paragraph',
          text: 'Express.js is a web framework for Node.js used to build web applications, REST APIs, backend services, and server-side applications. It provides abstractions around Node.js HTTP capabilities while keeping the framework relatively minimal and unopinionated.',
        },
        {
          type: 'heading',
          text: 'Why Express.js?',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Simple API for creating HTTP servers and routes.',
            'Middleware-based architecture for composing request processing logic.',
            'Support for route parameters, query strings, request bodies, and responses.',
            'Easy integration with databases, authentication libraries, validation libraries, and other Node.js packages.',
            'Suitable for small APIs as well as larger modular backend applications.',
            'Large ecosystem and extensive community adoption.',
          ],
        },
        {
          type: 'heading',
          text: 'Minimal Philosophy',
        },
        {
          type: 'paragraph',
          text: 'Express does not force a particular database, authentication system, project structure, or business-logic architecture. This flexibility is useful but also means developers must establish sensible conventions as applications grow.',
        },
        {
          type: 'heading',
          text: 'Installation',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `mkdir express-api
cd express-api

npm init -y
npm install express`,
        },
        {
          type: 'heading',
          text: 'Minimal Express Application',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Express and Node.js',
          text: 'Express is not a replacement for Node.js. Express runs on Node.js and provides routing, middleware, and application-level abstractions on top of Node HTTP functionality.',
        },
      ],
    },

    {
      id: 'application-setup',
      title: '2. Application Setup',
      summary:
        'An Express application starts by creating an app instance, configuring middleware and settings, defining routes, and starting an HTTP listener.',
      content: [
        {
          type: 'heading',
          text: 'Initializing the Application',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const express = require('express');

const app = express();

console.log('Express application created');`,
        },
        {
          type: 'heading',
          text: 'express.json()',
        },
        {
          type: 'paragraph',
          text: 'express.json() is built-in middleware that parses incoming requests containing JSON payloads and makes the parsed object available through req.body.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  console.log(req.body);

  res.status(201).json({
    message: 'User received',
    user: req.body,
  });
});

app.listen(3000);`,
        },
        {
          type: 'heading',
          text: 'app.listen()',
        },
        {
          type: 'paragraph',
          text: 'app.listen() starts an HTTP server that listens for incoming connections on a specified port. The callback runs when the server has started listening.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`API listening on port \${PORT}\`);
});`,
        },
        {
          type: 'heading',
          text: 'Application Settings',
        },
        {
          type: 'paragraph',
          text: "Express applications have settings that can be configured with app.set() and read with app.get(). Some settings affect behavior such as environment mode, JSON formatting, and view configuration.",
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.set('trust proxy', 1);
app.set('json spaces', 2);

console.log(app.get('trust proxy'));
console.log(app.get('json spaces'));`,
        },
        {
          type: 'heading',
          text: 'URL-Encoded Data',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.use(express.urlencoded({ extended: true }));

app.post('/form', (req, res) => {
  console.log(req.body);
  res.json({ received: true });
});`,
        },
        {
          type: 'heading',
          text: 'Recommended Basic Structure',
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
├── validators/
├── app.js
└── server.js`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Production Practice',
          text: 'Separate application creation from server startup when practical. This makes the Express app easier to test without opening a network port.',
        },
      ],
    },

    {
      id: 'routing',
      title: '3. Routing',
      summary:
        'Express routing maps HTTP methods and URL patterns to handlers that process requests and produce responses.',
      content: [
        {
          type: 'heading',
          text: 'GET Route',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Bibhu' },
    { id: 2, name: 'Rahul' },
  ]);
});`,
        },
        {
          type: 'heading',
          text: 'POST Route',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.post('/users', (req, res) => {
  const user = req.body;

  res.status(201).json({
    message: 'User created',
    user,
  });
});`,
        },
        {
          type: 'heading',
          text: 'PUT and DELETE',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'User updated', id, data: req.body });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'User deleted', id });
});`,
        },
        {
          type: 'heading',
          text: 'Route Parameters',
        },
        {
          type: 'paragraph',
          text: 'Route parameters represent dynamic values embedded in a URL path. They are available through req.params.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/products/:productId', (req, res) => {
  const { productId } = req.params;
  res.json({ productId });
});`,
        },
        {
          type: 'heading',
          text: 'Query Strings',
        },
        {
          type: 'paragraph',
          text: 'Query parameters are values after the question mark in a URL. Express exposes them through req.query.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/products', (req, res) => {
  const { search, page = '1', limit = '10' } = req.query;

  res.json({
    search,
    page: Number(page),
    limit: Number(limit),
  });
});`,
        },
        {
          type: 'heading',
          text: 'express.Router()',
        },
        {
          type: 'paragraph',
          text: 'express.Router() creates a modular router that can contain related routes and middleware. Routers are typically mounted into the main application under a common path.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// routes/userRoutes.js
const express = require('express');
const router  = express.Router();

router.get('/',    getUsers);
router.get('/:id', getUser);
router.post('/',   createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;

// app.js
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);`,
        },
        {
          type: 'heading',
          text: 'Route Order',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// More specific routes should come first
app.get('/users/me', (req, res) => {
  res.send('Current user');
});

app.get('/users/:id', (req, res) => {
  res.send(\`User \${req.params.id}\`);
});`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Route Matching',
          text: 'Route definitions are evaluated according to Express routing behavior and middleware order. Design specific routes carefully so dynamic patterns do not unintentionally capture paths intended for other handlers.',
        },
      ],
    },

    {
      id: 'middleware-stack',
      title: '4. Middleware Stack',
      summary:
        'Express middleware functions execute during request processing and can modify requests, produce responses, or pass control to subsequent middleware.',
      content: [
        {
          type: 'paragraph',
          text: 'Middleware functions have access to the request object, response object, and a next function. Middleware can execute code, modify req or res, terminate the request-response cycle, or call next() to continue processing.',
        },
        {
          type: 'heading',
          text: 'Basic Custom Middleware',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function logger(req, res, next) {
  console.log(req.method, req.originalUrl);
  next();
}

app.use(logger);`,
        },
        {
          type: 'heading',
          text: 'Execution Order',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

app.get('/', (req, res) => {
  console.log('Route handler');
  res.send('Hello');
});`,
        },
        {
          type: 'heading',
          text: 'Built-in Middleware',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'express.json() parses JSON request bodies.',
            'express.urlencoded() parses URL-encoded request bodies.',
            'express.static() serves static files.',
            'express.raw() parses request bodies as raw Buffer data.',
            'express.text() parses request bodies as text.',
          ],
        },
        {
          type: 'heading',
          text: 'Third-Party Middleware',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const cors   = require('cors');
const helmet = require('helmet');

app.use(cors());
app.use(helmet());`,
        },
        {
          type: 'heading',
          text: 'Route-Specific Middleware',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function requireAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  next();
}

app.get('/api/profile', requireAuth, (req, res) => {
  res.json({ message: 'Private profile' });
});`,
        },
        {
          type: 'heading',
          text: 'Middleware Categories',
        },
        {
          type: 'table',
          headers: ['Type', 'Purpose', 'Example'],
          rows: [
            ['Application middleware', 'Runs across the application', 'app.use(logger)'],
            ['Router middleware', 'Runs within a router', 'router.use(auth)'],
            ['Built-in middleware', 'Provided by Express', 'express.json()'],
            ['Third-party middleware', 'Provided by external packages', 'helmet(), cors()'],
            [
              'Error middleware',
              'Handles application errors',
              'errorHandler(err, req, res, next)',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Middleware Rule',
          text: 'A middleware function must either finish the response or call next() when it intends to pass control onward. Forgetting both can leave the request hanging.',
        },
      ],
    },

    {
      id: 'request-and-response-objects',
      title: '5. Request & Response Objects',
      summary:
        'Express extends Node HTTP request and response objects with convenient APIs for reading incoming data and constructing HTTP responses.',
      content: [
        {
          type: 'heading',
          text: 'req.body',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.use(express.json());

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  console.log(name);
  console.log(email);

  res.status(201).json({ name, email });
});`,
        },
        {
          type: 'heading',
          text: 'req.params',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/users/:id/orders/:orderId', (req, res) => {
  const { id, orderId } = req.params;
  res.json({ userId: id, orderId });
});`,
        },
        {
          type: 'heading',
          text: 'req.query',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/users', (req, res) => {
  const { role, page = '1' } = req.query;

  res.json({ role, page: Number(page) });
});`,
        },
        {
          type: 'heading',
          text: 'Request Headers',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/profile', (req, res) => {
  const authorization = req.get('Authorization');
  const userAgent     = req.get('User-Agent');

  console.log(authorization);
  console.log(userAgent);

  res.json({ received: true });
});`,
        },
        {
          type: 'heading',
          text: 'res.status()',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/not-found', (req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});`,
        },
        {
          type: 'heading',
          text: 'res.json()',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/api/data', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, name: 'React' },
      { id: 2, name: 'Node.js' },
    ],
  });
});`,
        },
        {
          type: 'heading',
          text: 'res.send()',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/hello', (req, res) => {
  res.send('Hello from Express');
});`,
        },
        {
          type: 'heading',
          text: 'Other Useful Response Methods',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'res.status(code) sets the HTTP status code.',
            'res.json(data) sends a JSON response.',
            'res.send(data) sends a response body.',
            'res.end() ends the response without sending additional data.',
            'res.redirect() redirects the client.',
            'res.sendFile() sends a file.',
            'res.download() prompts the client to download a file.',
            'res.cookie() sets a cookie when compatible response APIs are configured.',
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'API Practice',
          text: 'Return a consistent response structure where appropriate, use accurate HTTP status codes, and avoid exposing internal database or stack-trace details in production responses.',
        },
      ],
    },

    {
      id: 'restful-api-design',
      title: '6. RESTful API Design',
      summary:
        'A well-designed REST-style API uses meaningful resources, HTTP methods, status codes, validation, and predictable response structures.',
      content: [
        {
          type: 'heading',
          text: 'Resource-Oriented URLs',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/api/products',      getProducts);
app.get('/api/products/:id',  getProduct);
app.post('/api/products',     createProduct);
app.put('/api/products/:id',  updateProduct);
app.delete('/api/products/:id', deleteProduct);`,
        },
        {
          type: 'heading',
          text: 'CRUD Operations',
        },
        {
          type: 'table',
          headers: ['CRUD', 'HTTP Method', 'Example Endpoint'],
          rows: [
            ['Create', 'POST', '/api/products'],
            ['Read all', 'GET', '/api/products'],
            ['Read one', 'GET', '/api/products/:id'],
            ['Update', 'PUT/PATCH', '/api/products/:id'],
            ['Delete', 'DELETE', '/api/products/:id'],
          ],
        },
        {
          type: 'heading',
          text: 'HTTP Methods',
        },
        {
          type: 'table',
          headers: ['Method', 'Purpose', 'Typical Request Body'],
          rows: [
            ['GET', 'Retrieve resources', 'Usually no body'],
            ['POST', 'Create or trigger an operation', 'Usually yes'],
            ['PUT', 'Replace a resource representation', 'Usually yes'],
            ['PATCH', 'Partially modify a resource', 'Usually yes'],
            ['DELETE', 'Remove a resource', 'Usually no'],
          ],
        },
        {
          type: 'heading',
          text: 'HTTP Status Codes',
        },
        {
          type: 'table',
          headers: ['Status', 'Meaning', 'Example'],
          rows: [
            ['200', 'OK', 'Successful GET or update'],
            ['201', 'Created', 'Successful resource creation'],
            ['204', 'No Content', 'Successful operation without response body'],
            ['400', 'Bad Request', 'Invalid request data'],
            ['401', 'Unauthorized', 'Missing or invalid authentication'],
            ['403', 'Forbidden', 'Authenticated but not permitted'],
            ['404', 'Not Found', 'Resource does not exist'],
            ['409', 'Conflict', 'Resource state conflict'],
            ['422', 'Unprocessable Content', 'Validation failure where appropriate'],
            ['429', 'Too Many Requests', 'Rate limit exceeded'],
            ['500', 'Internal Server Error', 'Unexpected server failure'],
          ],
        },
        {
          type: 'heading',
          text: 'Pagination',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/api/products', async (req, res, next) => {
  try {
    const page  = Math.max(Number(req.query.page)  || 1, 1);
    const limit = Math.min(Math.max(Number(req.query.limit) || 10, 1), 100);
    const skip  = (page - 1) * limit;

    const products = await Product.find().skip(skip).limit(limit);

    res.json({ page, limit, data: products });
  } catch (error) {
    next(error);
  }
});`,
        },
        {
          type: 'heading',
          text: 'Filtering and Sorting',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/api/products', async (req, res, next) => {
  try {
    const { category, sort = 'createdAt' } = req.query;

    const filter = {};
    if (category) filter.category = category;

    const products = await Product.find(filter).sort(sort);

    res.json({ data: products });
  } catch (error) {
    next(error);
  }
});`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'REST Design',
          text: 'REST is an architectural style rather than a requirement to follow one exact URL format. Focus on clear resources, appropriate HTTP semantics, predictable representations, and consistent behavior.',
        },
      ],
    },

    {
      id: 'error-handling-middleware',
      title: '7. Error Handling Middleware',
      summary:
        'Express error-handling middleware centralizes application failures and uses a four-argument signature to distinguish it from ordinary middleware.',
      content: [
        {
          type: 'heading',
          text: 'Four-Argument Error Handler',
        },
        {
          type: 'paragraph',
          text: 'Express identifies error-handling middleware by its four arguments: error, request, response, and next. It should normally be registered after routes and other middleware that may generate errors.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function errorHandler(error, req, res, next) {
  console.error(error);

  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message:
      statusCode === 500
        ? 'Internal server error'
        : error.message,
  });
}

app.use(errorHandler);`,
        },
        {
          type: 'heading',
          text: 'Passing Errors with next()',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }

    return res.json(user);
  } catch (error) {
    return next(error);
  }
});`,
        },
        {
          type: 'heading',
          text: 'Async Error Propagation',
        },
        {
          type: 'paragraph',
          text: 'Express versions differ in how rejected promises from async route handlers are propagated. Modern Express versions support rejected promises from route handlers being forwarded to error handling. For older Express versions, projects commonly used wrappers or packages.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const asyncHandler = (handler) => {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
};

app.get(
  '/users',
  asyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(users);
  })
);`,
        },
        {
          type: 'heading',
          text: 'Custom Application Errors',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
  }
}

app.get('/example', (req, res, next) => {
  next(new AppError('Resource not found', 404));
});`,
        },
        {
          type: 'heading',
          text: '404 Handler',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.use((req, res, next) => {
  const error = new Error(
    \`Route not found: \${req.method} \${req.originalUrl}\`
  );
  error.statusCode = 404;
  next(error);
});

app.use(errorHandler);`,
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Production Errors',
          text: 'Do not return stack traces, database errors, environment variables, tokens, or internal implementation details to clients in production. Log diagnostic information securely on the server and return an appropriate public error message.',
        },
      ],
    },

    {
      id: 'authentication-and-security',
      title: '8. Authentication & Security',
      summary:
        'Secure Express APIs require strong authentication, authorization, validation, rate limiting, secure headers, and careful handling of untrusted data.',
      content: [
        {
          type: 'heading',
          text: 'JWT Authentication',
        },
        {
          type: 'paragraph',
          text: 'JSON Web Tokens can be used to represent authenticated claims between a client and server. The jsonwebtoken package provides APIs for signing and verifying JWTs. Token storage and transport must be designed carefully according to the application threat model.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const jwt = require('jsonwebtoken');

function createToken(user) {
  return jwt.sign(
    { sub: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

const token = createToken({ id: '123', role: 'user' });
console.log(token);`,
        },
        {
          type: 'heading',
          text: 'JWT Verification Middleware',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function authenticate(req, res, next) {
  const header = req.get('Authorization');

  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  const token = header.slice(7);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    return next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

app.get('/api/profile', authenticate, (req, res) => {
  res.json({ user: req.user });
});`,
        },
        {
          type: 'heading',
          text: 'Authorization',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
}

app.delete('/api/users/:id', authenticate, requireAdmin, deleteUser);`,
        },
        {
          type: 'heading',
          text: 'Helmet',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const helmet = require('helmet');
app.use(helmet());`,
        },
        {
          type: 'paragraph',
          text: "Helmet sets various HTTP response headers that can improve application security. Its configuration should be reviewed according to the application's requirements, particularly when configuring content security policies.",
        },
        {
          type: 'heading',
          text: 'CORS',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const cors = require('cors');

app.use(cors({
  origin: ['https://example.com'],
  credentials: true,
}));`,
        },
        {
          type: 'heading',
          text: 'Rate Limiting',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api', apiLimiter);`,
        },
        {
          type: 'heading',
          text: 'Input Validation with Joi',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const Joi = require('joi');

const userSchema = Joi.object({
  name:  Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  age:   Joi.number().integer().min(18).required(),
});

app.post('/users', (req, res) => {
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: 'Validation failed',
      details: error.details.map((d) => d.message),
    });
  }

  console.log(value);
  return res.status(201).json({ message: 'User validated' });
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
            'Validate every untrusted request input.',
            'Use HTTPS in production.',
            'Protect JWT secrets and other credentials.',
            'Apply authentication and authorization separately.',
            'Use secure cookie settings when using cookie-based sessions or tokens.',
            'Configure CORS explicitly rather than allowing every origin unnecessarily.',
            'Use rate limiting for authentication and abuse-prone endpoints.',
            'Set request body and upload limits.',
            'Use Helmet or equivalent security headers where appropriate.',
            'Keep Express, Node.js, and dependencies updated.',
            'Do not expose stack traces or internal errors to API clients.',
            'Use parameterized database operations and safe query APIs.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Never Trust req.body',
          text: 'Anything in req.body, req.params, req.query, headers, cookies, or uploaded files can be controlled by a client. Treat all external input as untrusted until validated and authorized.',
        },
      ],
    },

    {
      id: 'connecting-to-a-database',
      title: '9. Connecting to a Database',
      summary:
        'Express applications commonly connect to databases through dedicated data-access layers, with MongoDB applications frequently using Mongoose for schemas, models, validation, and queries.',
      content: [
        {
          type: 'heading',
          text: 'Mongoose Connection',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const mongoose = require('mongoose');

async function connectDatabase() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB connected');
}

module.exports = connectDatabase;`,
        },
        {
          type: 'heading',
          text: 'Schema Example',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 18,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;`,
        },
        {
          type: 'heading',
          text: 'CRUD with Mongoose',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.post('/users', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

app.get('/users', async (req, res, next) => {
  try {
    const users = await User.find()
      .select('name email age')
      .sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    next(error);
  }
});`,
        },
        {
          type: 'heading',
          text: 'Connection Pooling',
        },
        {
          type: 'paragraph',
          text: 'Database drivers and ODMs such as Mongoose maintain pools of database connections rather than opening a new database connection for every request. Pool sizing should be configured according to application concurrency and database limits.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `mongoose.connect(process.env.MONGODB_URI, {
  maxPoolSize: 10,
  minPoolSize: 2,
  serverSelectionTimeoutMS: 5000,
});`,
        },
        {
          type: 'heading',
          text: 'Environment-Based Database Configuration',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `require('dotenv').config();

const databaseUrl = process.env.MONGODB_URI;

if (!databaseUrl) {
  throw new Error('MONGODB_URI is required');
}

mongoose
  .connect(databaseUrl)
  .then(() => console.log('Database connected'))
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });`,
        },
        {
          type: 'heading',
          text: 'Repository or Service Layer',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function findUserByEmail(email) {
  return User.findOne({ email: email.toLowerCase() });
}

async function createUser(data) {
  return User.create(data);
}

module.exports = { findUserByEmail, createUser };`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Architecture Tip',
          text: 'Avoid putting large database queries directly inside every route handler. A service or repository layer can make business logic easier to test, reuse, and maintain.',
        },
      ],
    },

    {
      id: 'file-uploads-and-static-files',
      title: '10. File Uploads & Static Files',
      summary:
        'Express can serve static assets directly and can process multipart file uploads through middleware such as Multer.',
      content: [
        {
          type: 'heading',
          text: 'express.static()',
        },
        {
          type: 'paragraph',
          text: 'express.static() is built-in middleware for serving static files such as HTML, CSS, JavaScript, images, and other assets.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const path = require('node:path');

app.use(
  '/static',
  express.static(path.join(__dirname, 'public'))
);`,
        },
        {
          type: 'heading',
          text: 'Multer',
        },
        {
          type: 'paragraph',
          text: 'Multer is middleware for handling multipart/form-data, which is commonly used for file uploads from HTML forms. Uploaded files can be stored on disk or in memory depending on the configured storage engine.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const multer = require('multer');

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
});

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);

  res.status(201).json({
    message: 'File uploaded',
    filename: req.file.filename,
  });
});`,
        },
        {
          type: 'heading',
          text: 'Multiple Files',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.post('/gallery', upload.array('images', 5), (req, res) => {
  const files = req.files.map((file) => ({
    name: file.originalname,
    size: file.size,
    path: file.path,
  }));

  res.status(201).json({ files });
});`,
        },
        {
          type: 'heading',
          text: 'File Type Validation',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, callback) => {
      const safeName = \`\${Date.now()}-\${file.originalname}\`;
      callback(null, safeName);
    },
  }),
  fileFilter: (req, file, callback) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];

    if (!allowed.includes(file.mimetype)) {
      return callback(new Error('Unsupported file type'));
    }

    callback(null, true);
  },
  limits: { fileSize: 5 * 1024 * 1024 },
});`,
        },
        {
          type: 'heading',
          text: 'Serving Uploaded Files',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `app.use('/uploads', express.static('uploads'));`,
        },
        {
          type: 'heading',
          text: 'Upload Security',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Limit file size and number of uploaded files.',
            'Validate file types and application-specific content requirements.',
            'Do not trust the original filename supplied by the client.',
            'Avoid executing uploaded files.',
            'Store user uploads outside sensitive application directories when appropriate.',
            'Consider object storage such as S3-compatible storage for production media workloads.',
            'Scan uploaded files when the threat model requires malware detection.',
            'Do not expose internal filesystem paths in API responses.',
          ],
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Upload Warning',
          text: 'File uploads are untrusted input. MIME type checks alone are not a complete security boundary because clients can provide misleading metadata.',
        },
      ],
    },

    {
      id: 'production-architecture',
      title: '11. Production Architecture',
      summary:
        'A scalable Express backend benefits from clear separation between routes, controllers, services, models, middleware, configuration, and infrastructure.',
      content: [
        {
          type: 'heading',
          text: 'Recommended Structure',
        },
        {
          type: 'code',
          language: 'text',
          code: `src/
├── config/
│   ├── database.js
│   └── env.js
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   └── validate.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── services/
│   ├── authService.js
│   └── userService.js
├── validators/
│   └── userValidator.js
├── app.js
└── server.js`,
        },
        {
          type: 'heading',
          text: 'Application Entry Point',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const express      = require('express');
const userRoutes   = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

module.exports = app;`,
        },
        {
          type: 'heading',
          text: 'Server Entry Point',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const app             = require('./app');
const connectDatabase = require('./config/database');

async function startServer() {
  await connectDatabase();

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(\`Server listening on port \${port}\`);
  });
}

startServer().catch((error) => {
  console.error('Startup failed:', error);
  process.exit(1);
});`,
        },
        {
          type: 'heading',
          text: 'Controller',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function getUser(req, res, next) {
  try {
    const user = await userService.getUser(req.params.id);

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
          text: 'Service',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function getUser(id) {
  const user = await User.findById(id);

  if (!user) return null;

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
}`,
        },
        {
          type: 'heading',
          text: 'Graceful Shutdown',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const server = app.listen(process.env.PORT || 3000);

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
          title: 'Maintainability',
          text: 'A good Express architecture keeps HTTP transport concerns in controllers and middleware, business rules in services, persistence logic in models or repositories, and configuration in dedicated modules.',
        },
      ],
    },

    {
      id: 'interview-questions',
      title: '12. Express.js Interview Questions',
      summary:
        'These interview questions cover Express fundamentals, routing, middleware, APIs, authentication, databases, errors, and production practices.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is Express.js?',
              answer:
                'Express.js is a web framework for Node.js that provides routing, middleware, request and response helpers, and application-level abstractions for building web applications and APIs.',
            },
            {
              question: 'Why is Express called unopinionated?',
              answer:
                'Express provides core mechanisms such as routing and middleware without forcing developers to use a particular database, authentication strategy, project structure, or business-logic architecture.',
            },
            {
              question: 'What is middleware in Express?',
              answer:
                'Middleware is a function that participates in the request-response lifecycle. It can execute logic, modify request or response objects, terminate the response, or call next() to pass control to another middleware or route handler.',
            },
            {
              question: 'What is the difference between app.use() and app.get()?',
              answer:
                'app.use() registers middleware or routers and can match a path prefix, while app.get() registers a handler specifically for GET requests matching its route pattern.',
            },
            {
              question: 'What is express.Router()?',
              answer:
                'express.Router() creates a modular routing object that can contain routes and middleware. It is commonly mounted under a base path with app.use().',
            },
            {
              question:
                'What is the difference between req.params, req.query, and req.body?',
              answer:
                'req.params contains dynamic values captured from route paths, req.query contains URL query parameters, and req.body contains parsed request body data when the appropriate body-parsing middleware is configured.',
            },
            {
              question: 'What does express.json() do?',
              answer:
                'express.json() is built-in Express middleware that parses requests containing JSON payloads and makes the parsed data available through req.body.',
            },
            {
              question:
                'How does error-handling middleware differ from normal middleware?',
              answer:
                'Express error-handling middleware uses four parameters: error, req, res, and next. This signature tells Express that the middleware is intended to process errors.',
            },
            {
              question:
                'Where should error-handling middleware be registered?',
              answer:
                'Centralized error-handling middleware is normally registered after application routes and other middleware that may generate errors, so errors can flow into the final handler.',
            },
            {
              question: 'How do you handle errors in async Express routes?',
              answer:
                'Use try/catch and pass failures to next(error), or use the native rejected-promise behavior available in modern Express versions.',
            },
            {
              question: 'What is RESTful API design?',
              answer:
                'RESTful API design uses resource-oriented endpoints and HTTP semantics to represent operations on resources. Common patterns include GET for retrieval, POST for creation, PUT or PATCH for updates, and DELETE for removal.',
            },
            {
              question: 'What is the difference between PUT and PATCH?',
              answer:
                'PUT is generally used to replace a resource representation, while PATCH is intended for partial modifications. The exact semantics should be documented consistently by the API.',
            },
            {
              question: 'What is CORS?',
              answer:
                'Cross-Origin Resource Sharing is a browser security mechanism that controls whether browser-based JavaScript from one origin can access resources from another origin. Express applications can configure CORS response headers through middleware.',
            },
            {
              question: 'What is Helmet used for?',
              answer:
                "Helmet provides Express middleware that sets various security-related HTTP response headers. It helps establish safer defaults but does not replace application-level authentication, authorization, validation, or other security controls.",
            },
            {
              question:
                'How do you implement JWT authentication in Express?',
              answer:
                'A common pattern is to issue a signed token after successful authentication, receive the token on protected requests, verify its signature and claims with a trusted secret or key, attach the verified identity to the request, and then perform authorization checks.',
            },
            {
              question: 'What is rate limiting and why is it useful?',
              answer:
                'Rate limiting restricts the number of requests a client can make during a defined period. It can help reduce brute-force attempts, accidental traffic spikes, and certain forms of resource exhaustion.',
            },
            {
              question: 'How do you validate request data in Express?',
              answer:
                'Use a validation library such as Joi, Zod, or another suitable schema validator. Validate data at the application boundary before using it in business logic or database operations.',
            },
            {
              question: 'How does Express connect to MongoDB?',
              answer:
                'Express itself does not provide a MongoDB driver. A Node.js MongoDB driver or ODM such as Mongoose can be used to establish database connectivity, define models, execute queries, and manage connections.',
            },
            {
              question: 'What is Multer?',
              answer:
                'Multer is middleware for handling multipart/form-data requests, especially file uploads. It can store uploaded files on disk or in memory and supports limits and filtering options.',
            },
            {
              question: 'What is express.static()?',
              answer:
                'express.static() is built-in middleware that serves static files such as images, CSS, JavaScript, and other assets from a directory.',
            },
            {
              question: 'How can you secure an Express API?',
              answer:
                'Use HTTPS, validate input, implement authentication and authorization, configure CORS deliberately, apply rate limiting, use security headers, protect secrets, limit request and upload sizes, keep dependencies updated, and avoid exposing internal errors.',
            },
            {
              question: 'What is graceful shutdown in Express?',
              answer:
                'Graceful shutdown is the process of stopping new work and closing the HTTP server and other resources when the process receives a termination signal. It helps reduce interrupted requests during deployments and restarts.',
            },
          ],
        },
      ],
    },
  ],
};

export default expressContent;
