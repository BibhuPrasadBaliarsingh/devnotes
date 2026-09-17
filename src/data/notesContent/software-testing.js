export const softwareTestingContent = {
  id: 'software-testing',
  slug: 'software-testing',
  title: 'Software Testing',
  subtitle: 'QA Engineering & Test Automation Guide',
  category: 'Software Engineering',
  description:
    'Software testing handbook: manual & automated testing, unit testing, integration, system testing, regression, boundary value analysis, test case design, bug lifecycles, and QA automation.',
  sections: [
    {
      id: 'introduction-to-software-testing',
      title: '1. Introduction to Software Testing',
      summary:
        'Understand the purpose of software testing, testing objectives, defect costs, and the testing pyramid.',
      content: [
        {
          type: 'paragraph',
          text: 'Software testing is the process of evaluating software to determine whether it satisfies specified requirements and behaves as expected. Testing helps identify defects, reduce risk, validate functionality, and provide information about software quality.',
        },
        {
          type: 'heading',
          text: 'Why Software Testing Matters',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Detects defects before they reach users.',
            'Validates functional and non-functional requirements.',
            'Reduces business and operational risk.',
            'Improves confidence in software releases.',
            'Protects critical data and user workflows.',
            'Helps prevent regressions when software changes.',
            'Provides measurable evidence about product quality.',
          ],
        },
        {
          type: 'heading',
          text: 'Testing Objectives',
        },
        {
          type: 'table',
          headers: ['Objective', 'Purpose'],
          rows: [
            ['Verification', 'Check whether software is being built according to specified requirements and design'],
            ['Validation', 'Check whether the delivered software meets user and business needs'],
            ['Defect Detection', 'Identify incorrect or unexpected behavior'],
            ['Risk Reduction', 'Reduce the likelihood and impact of failures'],
            ['Quality Information', 'Provide evidence to support release decisions'],
          ],
        },
        {
          type: 'subheading',
          text: 'Cost of Defects',
        },
        {
          type: 'paragraph',
          text: 'Defects discovered late can require more effort because they may affect deployed systems, customer data, documentation, integrations, and dependent features. Early testing and continuous feedback can reduce the cost and impact of fixing defects.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function calculateDiscount(price, percentage) {
  return price - (price * percentage / 100);
}

// Example testable behavior
const finalPrice = calculateDiscount(1000, 10);
console.log(finalPrice); // Expected: 900`,
        },
        {
          type: 'heading',
          text: 'Testing Pyramid',
        },
        {
          type: 'code',
          language: 'text',
          code: `        Testing Pyramid

              /\\
             /  \\
            / E2E\\
           /------\\
          /Integration\\
         /--------------\\
        /   Unit Tests   \\
       /__________________\\

  More tests  → Lower-level, fast tests
  Fewer tests → Higher-level, slower tests`,
        },
        {
          type: 'table',
          headers: ['Level', 'Typical Quantity', 'Speed', 'Purpose'],
          rows: [
            ['Unit', 'Many', 'Fast', 'Test individual functions or components'],
            ['Integration', 'Moderate', 'Medium', 'Test interactions between components'],
            ['E2E/System', 'Fewer', 'Slow', 'Validate complete user workflows'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Testing Is Not Only Bug Finding',
          text: 'Testing also provides information about risk, requirements, usability, reliability, performance, and whether the system is suitable for its intended use.',
        },
      ],
    },

    {
      id: 'testing-types',
      title: '2. Testing Types',
      summary:
        'Compare unit, integration, system, acceptance, smoke, and regression testing and understand where each fits.',
      content: [
        {
          type: 'paragraph',
          text: 'Different testing levels and types answer different questions. A strong QA strategy combines multiple forms of testing rather than relying on a single test category.',
        },
        {
          type: 'heading',
          text: 'Testing Type Comparison',
        },
        {
          type: 'table',
          headers: ['Testing Type', 'Scope', 'Typical Goal', 'Execution'],
          rows: [
            ['Unit Testing', 'Smallest testable unit', 'Verify isolated logic', 'Usually automated'],
            ['Integration Testing', 'Multiple components', 'Verify interactions and integrations', 'Manual and/or automated'],
            ['System Testing', 'Complete application', 'Validate system behavior against requirements', 'Manual and/or automated'],
            ['Acceptance Testing', 'Business/user requirements', 'Determine whether requirements are acceptable', 'Often business/user focused'],
            ['Smoke Testing', 'Critical application paths', 'Determine whether a build is stable enough for deeper testing', 'Often automated'],
            ['Regression Testing', 'Existing functionality', 'Detect unintended breakage after changes', 'Manual and/or automated'],
          ],
        },
        {
          type: 'subheading',
          text: 'Unit Test Example',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function add(a, b) {
  return a + b;
}

console.assert(add(2, 3) === 5);
console.assert(add(-1, 1) === 0);`,
        },
        {
          type: 'subheading',
          text: 'Smoke Test Example',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `async function smokeTest() {
  const response = await fetch('http://localhost:3000/health');

  if (!response.ok) {
    throw new Error('Application health check failed');
  }

  console.log('Smoke test passed');
}

smokeTest();`,
        },
        {
          type: 'subheading',
          text: 'Regression Testing',
        },
        {
          type: 'paragraph',
          text: 'Regression testing checks existing functionality after changes such as bug fixes, refactoring, dependency updates, or new features. Automated regression suites are especially valuable for stable, frequently repeated checks.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `describe('Shopping Cart Regression Suite', () => {
  it('calculates the total correctly', () => {
    const cart = [
      { price: 500, quantity: 2 },
      { price: 200, quantity: 1 },
    ];

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    expect(total).toBe(1200);
  });
});`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Layered Testing',
          text: 'Use fast unit tests for local logic, integration tests for component boundaries, and a smaller number of E2E tests for critical end-to-end workflows.',
        },
      ],
    },

    {
      id: 'manual-vs-automated-testing',
      title: '3. Manual vs Automated Testing',
      summary:
        'Learn when manual testing or automation is appropriate and how to choose between them.',
      content: [
        {
          type: 'paragraph',
          text: 'Manual testing is performed by a person interacting with the application and observing results. Automated testing uses software tools and scripts to execute repeatable checks. Mature QA teams generally use both approaches.',
        },
        {
          type: 'heading',
          text: 'Manual vs Automated Testing',
        },
        {
          type: 'table',
          headers: ['Aspect', 'Manual Testing', 'Automated Testing'],
          rows: [
            ['Execution', 'Human executes test steps', 'Tool executes programmed steps'],
            ['Best For', 'Exploration, usability, visual validation', 'Repeatable regression and data-driven checks'],
            ['Initial Cost', 'Usually lower', 'Usually higher'],
            ['Repeated Runs', 'Time-consuming', 'Fast and consistent'],
            ['Exploratory Testing', 'Strong', 'Limited without specialized approaches'],
            ['Maintenance', 'Test execution effort', 'Script maintenance required'],
            ['Speed', 'Human-dependent', 'Usually faster for repeated tests'],
          ],
        },
        {
          type: 'heading',
          text: 'When to Use Manual Testing',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Exploratory testing.',
            'Usability evaluation.',
            'Visual and UX inspection.',
            'Testing rapidly changing features.',
            'Scenarios requiring human judgment.',
            'Ad-hoc investigation of unexpected behavior.',
          ],
        },
        {
          type: 'heading',
          text: 'When to Automate',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Frequently repeated regression tests.',
            'Stable and predictable workflows.',
            'Large data sets or many input combinations.',
            'API testing.',
            'Unit and integration testing.',
            'Smoke tests that must run on every deployment.',
          ],
        },
        {
          type: 'subheading',
          text: 'Decision Guide',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function shouldAutomate(test) {
  if (test.isRepeatedFrequently && test.isStable) {
    return true;
  }

  if (test.requiresHumanJudgment) {
    return false;
  }

  if (test.hasManyDataCombinations) {
    return true;
  }

  return 'Evaluate ROI and maintenance cost';
}`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Do Not Automate Everything',
          text: 'Automation has development and maintenance costs. Automate tests where repeatability, speed, coverage, and reliability provide enough value to justify those costs.',
        },
      ],
    },

    {
      id: 'test-case-design-techniques',
      title: '4. Test Case Design Techniques',
      summary:
        'Apply boundary value analysis, equivalence partitioning, decision tables, and state transition testing.',
      content: [
        {
          type: 'paragraph',
          text: 'Test design techniques help QA engineers systematically select test conditions instead of relying only on random examples. They improve coverage while keeping the number of test cases manageable.',
        },
        {
          type: 'heading',
          text: 'Boundary Value Analysis',
        },
        {
          type: 'paragraph',
          text: 'Boundary Value Analysis (BVA) focuses on values at or near the edges of an allowed range because defects frequently occur around boundaries.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function isValidAge(age) {
  return age >= 18 && age <= 60;
}

// Boundary tests
console.assert(isValidAge(17) === false); // min - 1
console.assert(isValidAge(18) === true);  // min
console.assert(isValidAge(19) === true);  // min + 1
console.assert(isValidAge(59) === true);  // max - 1
console.assert(isValidAge(60) === true);  // max
console.assert(isValidAge(61) === false); // max + 1`,
        },
        {
          type: 'table',
          headers: ['Boundary', 'Example Values'],
          rows: [
            ['Minimum - 1', '17'],
            ['Minimum', '18'],
            ['Minimum + 1', '19'],
            ['Maximum - 1', '59'],
            ['Maximum', '60'],
            ['Maximum + 1', '61'],
          ],
        },
        {
          type: 'heading',
          text: 'Equivalence Partitioning',
        },
        {
          type: 'paragraph',
          text: 'Equivalence Partitioning divides inputs into groups that are expected to behave similarly. A representative value from each partition can reduce redundant testing.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function getAgeCategory(age) {
  if (age < 0)  return 'invalid';
  if (age < 18) return 'minor';
  if (age < 60) return 'adult';
  return 'senior';
}

// Representative values per partition
console.assert(getAgeCategory(-1) === 'invalid');
console.assert(getAgeCategory(10) === 'minor');
console.assert(getAgeCategory(30) === 'adult');
console.assert(getAgeCategory(70) === 'senior');`,
        },
        {
          type: 'heading',
          text: 'Decision Tables',
        },
        {
          type: 'paragraph',
          text: 'Decision tables are useful when system behavior depends on combinations of conditions. Each meaningful combination can be represented as a rule.',
        },
        {
          type: 'table',
          headers: ['Logged In', 'Premium User', 'Product Available', 'Expected Result'],
          rows: [
            ['No', 'No', 'Yes', 'Redirect to login'],
            ['Yes', 'No', 'Yes', 'Allow standard purchase'],
            ['Yes', 'Yes', 'Yes', 'Allow premium purchase'],
            ['Yes', 'Any', 'No', 'Show unavailable message'],
          ],
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function canPurchase(loggedIn, premium, available) {
  if (!loggedIn)   return 'LOGIN_REQUIRED';
  if (!available)  return 'OUT_OF_STOCK';
  return premium ? 'PREMIUM_PURCHASE' : 'STANDARD_PURCHASE';
}`,
        },
        {
          type: 'heading',
          text: 'State Transition Testing',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const accountStates = {
  ACTIVE: 'active',
  LOCKED: 'locked',
};

function loginFailed(attempts) {
  return attempts >= 5
    ? accountStates.LOCKED
    : accountStates.ACTIVE;
}

console.assert(loginFailed(3) === 'active');
console.assert(loginFailed(5) === 'locked');`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Combine Techniques',
          text: 'Real test suites often combine BVA, equivalence partitioning, decision tables, state transitions, pairwise testing, and exploratory testing rather than relying on one technique.',
        },
      ],
    },

    {
      id: 'bug-life-cycle',
      title: '5. Bug Life Cycle',
      summary:
        'Understand defect states, severity, priority, retesting, regression, and the difference between severity and priority.',
      content: [
        {
          type: 'paragraph',
          text: 'The bug life cycle describes how a reported defect moves through investigation, development, verification, and closure. Exact states vary by organization and tracking tool.',
        },
        {
          type: 'heading',
          text: 'Typical Bug Flow',
        },
        {
          type: 'code',
          language: 'text',
          code: `New
  ↓
Assigned
  ↓
Open
  ↓
Fixed
  ↓
Retest
  ├── Pass → Closed
  └── Fail → Reopened
                ↓
              Fixed`,
        },
        {
          type: 'heading',
          text: 'Bug States',
        },
        {
          type: 'table',
          headers: ['State', 'Meaning'],
          rows: [
            ['New', 'Defect has been reported and awaits triage'],
            ['Assigned', 'Defect has been assigned to an owner'],
            ['Open', 'Defect has been accepted for investigation or development'],
            ['Fixed', 'Developer has implemented a fix'],
            ['Retest', 'QA is verifying the fix'],
            ['Closed', 'QA has verified that the issue is resolved'],
            ['Reopened', 'The defect still occurs after the attempted fix'],
            ['Rejected', 'Reported behavior is not considered a valid defect'],
            ['Duplicate', 'Issue has already been reported elsewhere'],
          ],
        },
        {
          type: 'heading',
          text: 'Severity vs Priority',
        },
        {
          type: 'table',
          headers: ['Concept', 'Question', 'Example'],
          rows: [
            ['Severity', 'How serious is the technical/business impact?', 'Application crashes for all users'],
            ['Priority', 'How urgently should it be addressed?', 'A minor issue blocking an important release'],
            ['High Severity', 'Large impact', 'Payment processing fails'],
            ['Low Severity', 'Small impact', 'Minor visual alignment issue'],
          ],
        },
        {
          type: 'subheading',
          text: 'Good Bug Report',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const bugReport = {
  title:       'Checkout fails when coupon is expired',
  environment: 'Chrome 153 / Production',
  severity:    'High',
  priority:    'High',
  steps: [
    'Login to account',
    'Add product to cart',
    'Apply expired coupon',
    'Click Checkout',
  ],
  expected: 'Expired coupon should be rejected with a clear message',
  actual:   'Checkout request returns HTTP 500',
  evidence: ['Screenshot', 'Console log', 'Network response'],
};

console.log(bugReport);`,
        },
        {
          type: 'subheading',
          text: 'Retest vs Regression',
        },
        {
          type: 'paragraph',
          text: 'Retesting verifies whether a specific defect has been fixed. Regression testing checks surrounding or previously working functionality to ensure the change did not introduce new problems.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Severity and Priority Are Different',
          text: 'Severity describes impact, while priority describes urgency. A low-severity issue can still have high priority because of release deadlines, customer visibility, or business context.',
        },
      ],
    },

    {
      id: 'test-planning-management',
      title: '6. Test Planning & Management',
      summary:
        'Create effective test plans, define strategy, measure coverage, and connect requirements to test cases with traceability.',
      content: [
        {
          type: 'paragraph',
          text: 'Test planning defines what will be tested, how it will be tested, who will perform the work, which environments and tools are required, and how risks and results will be managed.',
        },
        {
          type: 'heading',
          text: 'Test Plan Components',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Scope and objectives.',
            'Features to be tested.',
            'Features excluded from testing.',
            'Testing levels and types.',
            'Test environment and test data.',
            'Roles and responsibilities.',
            'Entry and exit criteria.',
            'Risk assessment.',
            'Schedule and milestones.',
            'Defect management process.',
            'Automation strategy.',
            'Reporting and metrics.',
          ],
        },
        {
          type: 'heading',
          text: 'Test Strategy',
        },
        {
          type: 'paragraph',
          text: 'A test strategy describes the overall approach to quality assurance for a product or organization. It may define test levels, automation principles, environments, risk-based priorities, tooling, and release quality gates.',
        },
        {
          type: 'table',
          headers: ['Area', 'Example Decision'],
          rows: [
            ['Unit Testing', 'Developers maintain unit tests for business logic'],
            ['API Testing', 'Automate critical API contracts'],
            ['E2E Testing', 'Automate critical customer journeys'],
            ['Exploratory Testing', 'Perform focused sessions for new features'],
            ['Performance', 'Run load tests before major releases'],
            ['Security', 'Perform automated and manual security checks'],
          ],
        },
        {
          type: 'heading',
          text: 'Test Coverage',
        },
        {
          type: 'paragraph',
          text: 'Test coverage describes how much of a defined scope is exercised by testing. Coverage can refer to requirements, features, code, risks, configurations, or other dimensions. High numerical coverage does not automatically mean high-quality testing.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const requirements = [
  { id: 'REQ-001', tested: true  },
  { id: 'REQ-002', tested: true  },
  { id: 'REQ-003', tested: false },
  { id: 'REQ-004', tested: true  },
];

const coverage =
  requirements.filter((req) => req.tested).length /
  requirements.length * 100;

console.log(\`Requirement coverage: \${coverage}%\`);
// Requirement coverage: 75%`,
        },
        {
          type: 'heading',
          text: 'Requirements Traceability Matrix',
        },
        {
          type: 'table',
          headers: ['Requirement', 'Test Case', 'Status', 'Defect'],
          rows: [
            ['REQ-001 Login', 'TC-001', 'Passed', 'None'],
            ['REQ-002 Checkout', 'TC-002', 'Failed', 'BUG-101'],
            ['REQ-003 Payment', 'TC-003', 'Passed', 'None'],
            ['REQ-004 Refund', 'TC-004', 'Not Run', 'None'],
          ],
        },
        {
          type: 'subheading',
          text: 'Example Test Case',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const testCase = {
  id:    'TC-LOGIN-001',
  title: 'Login with valid credentials',
  preconditions: [
    'User account exists',
    'Application is available',
  ],
  steps: [
    'Open login page',
    'Enter valid email',
    'Enter valid password',
    'Click Login',
  ],
  expected: 'User is redirected to dashboard',
  priority: 'High',
};

console.log(testCase);`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Risk-Based Testing',
          text: 'When time is limited, prioritize testing around high-impact, high-probability, security-sensitive, revenue-critical, and recently changed areas rather than treating every test case as equally important.',
        },
      ],
    },

    {
      id: 'unit-testing-with-jest',
      title: '7. Unit Testing with Jest',
      summary:
        'Learn Jest fundamentals including describe, it, expect, mocking, beforeEach, afterEach, and isolated unit testing.',
      content: [
        {
          type: 'paragraph',
          text: 'Jest is a JavaScript testing framework commonly used for unit and integration testing. It provides test organization, assertions, mocks, spies, setup hooks, and coverage capabilities.',
        },
        {
          type: 'subheading',
          text: 'Basic Test',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function add(a, b) {
  return a + b;
}

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });
});`,
        },
        {
          type: 'subheading',
          text: 'Common Matchers',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `expect(5).toBe(5);
expect({ name: 'Alex' }).toEqual({ name: 'Alex' });
expect([1, 2, 3]).toContain(2);
expect('hello').toMatch(/hello/);
expect(true).toBeTruthy();
expect(false).toBeFalsy();
expect(null).toBeNull();`,
        },
        {
          type: 'subheading',
          text: 'beforeEach and afterEach',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `describe('User Service', () => {
  let users;

  beforeEach(() => {
    users = [];
  });

  afterEach(() => {
    users.length = 0;
  });

  it('starts with an empty collection', () => {
    expect(users).toEqual([]);
  });

  it('can add a user', () => {
    users.push({ id: 1, name: 'Alex' });
    expect(users).toHaveLength(1);
  });
});`,
        },
        {
          type: 'subheading',
          text: 'Mocking Functions',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const sendEmail = jest.fn();

sendEmail.mockReturnValue(true);

const result = sendEmail('user@example.com', 'Welcome');

expect(result).toBe(true);
expect(sendEmail).toHaveBeenCalledTimes(1);
expect(sendEmail).toHaveBeenCalledWith(
  'user@example.com',
  'Welcome'
);`,
        },
        {
          type: 'subheading',
          text: 'Mocking an Async API',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const fetchUser = jest.fn();

fetchUser.mockResolvedValue({ id: 101, name: 'Alex' });

async function getUserName(id) {
  const user = await fetchUser(id);
  return user.name;
}

test('returns user name', async () => {
  await expect(getUserName(101)).resolves.toBe('Alex');

  expect(fetchUser).toHaveBeenCalledWith(101);
});`,
        },
        {
          type: 'subheading',
          text: 'Running Jest',
        },
        {
          type: 'code',
          language: 'bash',
          code: `npm install --save-dev jest

npx jest

npx jest --watch

npx jest --coverage`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Good Unit Tests',
          text: 'A good unit test is focused, deterministic, readable, fast, and independent from external systems such as production databases, real email services, or third-party APIs.',
        },
      ],
    },

    {
      id: 'integration-and-e2e-testing',
      title: '8. Integration & E2E Testing',
      summary:
        'Test API and component integration using Supertest and browser workflows using Cypress.',
      content: [
        {
          type: 'paragraph',
          text: 'Integration tests verify that multiple components work together correctly. End-to-end tests validate complete workflows through the application from a user or system perspective.',
        },
        {
          type: 'heading',
          text: 'Cypress E2E Testing',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `describe('Login Flow', () => {
  it('allows a valid user to login', () => {
    cy.visit('/login');

    cy.get('[data-testid="email"]')
      .type('user@example.com');

    cy.get('[data-testid="password"]')
      .type('ValidPassword123');

    cy.get('[data-testid="login-button"]')
      .click();

    cy.url().should('include', '/dashboard');

    cy.contains('Welcome').should('be.visible');
  });
});`,
        },
        {
          type: 'subheading',
          text: 'Cypress API Test',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `describe('Users API', () => {
  it('returns users', () => {
    cy.request('GET', '/api/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });
});`,
        },
        {
          type: 'subheading',
          text: 'Supertest API Testing',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import request from 'supertest';
import app from '../app.js';

describe('GET /api/users', () => {
  it('returns users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });
});`,
        },
        {
          type: 'subheading',
          text: 'Testing POST API',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `it('creates a user', async () => {
  const response = await request(app)
    .post('/api/users')
    .send({ name: 'Alex', email: 'alex@example.com' })
    .expect(201);

  expect(response.body).toMatchObject({
    name:  'Alex',
    email: 'alex@example.com',
  });
});`,
        },
        {
          type: 'heading',
          text: 'Integration vs E2E',
        },
        {
          type: 'table',
          headers: ['Aspect', 'Integration', 'E2E'],
          rows: [
            ['Scope', 'Multiple internal components', 'Complete user/system workflow'],
            ['Speed', 'Usually faster', 'Usually slower'],
            ['Environment', 'May use test databases/services', 'Often uses a realistic application environment'],
            ['Purpose', 'Verify component interactions', 'Verify critical business journeys'],
            ['Failure Diagnosis', 'Generally easier', 'Can be more difficult'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Avoid Brittle E2E Tests',
          text: 'Prefer stable selectors such as data-testid attributes where appropriate, avoid unnecessary timing assumptions, and keep E2E coverage focused on important workflows.',
        },
      ],
    },

    {
      id: 'performance-security-testing',
      title: '9. Performance & Security Testing',
      summary:
        'Understand load testing concepts and common web security risks, with practical k6 examples.',
      content: [
        {
          type: 'paragraph',
          text: 'Performance testing evaluates how software behaves under different workloads. Security testing identifies weaknesses that could allow unauthorized access, data exposure, manipulation, or other security failures.',
        },
        {
          type: 'heading',
          text: 'Performance Testing Types',
        },
        {
          type: 'table',
          headers: ['Type', 'Purpose'],
          rows: [
            ['Load Testing', 'Evaluate behavior under expected workload'],
            ['Stress Testing', 'Evaluate behavior beyond expected capacity'],
            ['Spike Testing', 'Evaluate sudden increases or decreases in traffic'],
            ['Soak Testing', 'Evaluate stability during sustained load'],
            ['Scalability Testing', 'Evaluate how performance changes as workload or resources increase'],
          ],
        },
        {
          type: 'subheading',
          text: 'k6 Load Test',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus:      10,
  duration: '30s',
};

export default function () {
  const response = http.get('http://localhost:3000/api/health');

  check(response, {
    'status is 200':   (res) => res.status === 200,
    'response is fast': (res) => res.timings.duration < 500,
  });

  sleep(1);
}`,
        },
        {
          type: 'subheading',
          text: 'Run k6',
        },
        {
          type: 'code',
          language: 'bash',
          code: `k6 run load-test.js`,
        },
        {
          type: 'heading',
          text: 'Performance Metrics',
        },
        {
          type: 'table',
          headers: ['Metric', 'Meaning'],
          rows: [
            ['Latency', 'Time required to process a request'],
            ['Throughput', 'Amount of work processed per unit of time'],
            ['Error Rate', 'Percentage of failed requests or operations'],
            ['p50', 'Median observed latency'],
            ['p95', 'Latency below which approximately 95% of observations fall'],
            ['p99', 'Latency below which approximately 99% of observations fall'],
          ],
        },
        {
          type: 'heading',
          text: 'OWASP Top 10 Categories',
        },
        {
          type: 'table',
          headers: ['Category', 'Security Concern'],
          rows: [
            ['Broken Access Control', 'Users can access resources or actions they should not'],
            ['Cryptographic Failures', 'Sensitive data is inadequately protected'],
            ['Injection', 'Untrusted input changes the intended behavior of an interpreter'],
            ['Insecure Design', 'Security weaknesses originate in design decisions'],
            ['Security Misconfiguration', 'Unsafe or unnecessary configuration creates vulnerabilities'],
            ['Vulnerable and Outdated Components', 'Dependencies contain known security weaknesses'],
            ['Identification and Authentication Failures', 'Authentication or identity controls are weak'],
            ['Software and Data Integrity Failures', 'Untrusted or insufficiently verified updates/data are accepted'],
            ['Security Logging and Monitoring Failures', 'Important security events are not adequately detected or investigated'],
            ['Mishandling of Exceptional Conditions', 'Unexpected states or errors are handled insecurely'],
          ],
        },
        {
          type: 'subheading',
          text: 'Input Validation Test',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function validateUsername(username) {
  if (typeof username !== 'string') return false;
  return /^[a-zA-Z0-9_]{3,30}$/.test(username);
}

console.assert(validateUsername('alex_123') === true);
console.assert(validateUsername('<script>alert(1)</script>') === false);
console.assert(validateUsername('ab') === false);`,
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Security Testing Is Not Only QA',
          text: 'Security should be addressed throughout the SDLC. QA can identify security risks through testing, but secure design, development practices, dependency management, access control, infrastructure security, and operational monitoring are also required.',
        },
      ],
    },

    {
      id: 'test-driven-development',
      title: '10. Test-Driven Development (TDD)',
      summary:
        'Learn the Red-Green-Refactor cycle and how tests can guide implementation design.',
      content: [
        {
          type: 'paragraph',
          text: 'Test-Driven Development is a development practice in which developers write a failing automated test before implementing the behavior required to make that test pass. The cycle is commonly described as Red, Green, Refactor.',
        },
        {
          type: 'heading',
          text: 'Red-Green-Refactor',
        },
        {
          type: 'code',
          language: 'text',
          code: `RED
  Write a test that fails
    ↓
GREEN
  Write the minimum code needed to pass
    ↓
REFACTOR
  Improve implementation while keeping tests green
    ↓
  Repeat`,
        },
        {
          type: 'heading',
          text: 'TDD Example',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Step 1: RED — write failing test
test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

// Step 2: GREEN — implement minimum code
function add(a, b) {
  return a + b;
}

// Step 3: REFACTOR
// Improve implementation only if needed,
// while keeping the test passing.`,
        },
        {
          type: 'subheading',
          text: 'Example with Business Logic',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `function calculateTotal(items) {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

describe('calculateTotal', () => {
  it('calculates the cart total', () => {
    const items = [
      { price: 100, quantity: 2 },
      { price: 50,  quantity: 1 },
    ];

    expect(calculateTotal(items)).toBe(250);
  });

  it('returns zero for an empty cart', () => {
    expect(calculateTotal([])).toBe(0);
  });
});`,
        },
        {
          type: 'heading',
          text: 'Benefits and Trade-offs',
        },
        {
          type: 'table',
          headers: ['Aspect', 'Benefit', 'Trade-off'],
          rows: [
            ['Design', 'Encourages testable, focused interfaces', 'Can require practice and discipline'],
            ['Regression', 'Tests provide fast feedback', 'Tests must be maintained'],
            ['Feedback', 'Defects can be detected early', 'Initial development may feel slower'],
            ['Documentation', 'Tests demonstrate expected behavior', 'Poorly written tests can mislead'],
          ],
        },
        {
          type: 'subheading',
          text: 'TDD Workflow Example',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Requirement: Password must contain at least 8 characters.

test('accepts a valid password', () => {
  expect(isValidPassword('Password123')).toBe(true);
});

test('rejects a short password', () => {
  expect(isValidPassword('Pass123')).toBe(false);
});

function isValidPassword(password) {
  return password.length >= 8;
}`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'TDD Principle',
          text: 'TDD is not simply writing tests after coding. The test is used first to express expected behavior, then implementation is created to satisfy it, followed by refactoring.',
        },
      ],
    },

    {
      id: 'qa-best-practices',
      title: '11. QA Automation & Best Practices',
      summary:
        'Build maintainable QA automation with reliable test data, stable selectors, CI integration, reporting, and test isolation.',
      content: [
        {
          type: 'paragraph',
          text: 'A maintainable automation framework should be reliable, readable, fast enough for its purpose, easy to diagnose when failures occur, and integrated into the software delivery workflow.',
        },
        {
          type: 'heading',
          text: 'Automation Best Practices',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Keep tests independent whenever practical.',
            'Use deterministic test data.',
            'Avoid arbitrary sleep statements when explicit waits or assertions are available.',
            'Use stable selectors for UI automation.',
            'Keep assertions close to the behavior they validate.',
            'Separate test data, configuration, and test logic.',
            'Capture useful logs and artifacts on failures.',
            'Run fast tests early in CI.',
            'Quarantine and investigate flaky tests rather than ignoring them.',
            'Review and maintain automation like production code.',
            'Use parallel execution carefully when tests are independent.',
            'Clean up created resources after tests.',
          ],
        },
        {
          type: 'subheading',
          text: 'Stable UI Selector',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Preferred: stable data-testid attribute
cy.get('[data-testid="submit-order"]').click();

// Avoid: fragile CSS or auto-generated class names
// cy.get('.btn-primary.mt-4.submit')`,
        },
        {
          type: 'subheading',
          text: 'Test Isolation',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `describe('User Tests', () => {
  beforeEach(() => {
    cy.request('POST', '/api/test/reset');
  });

  it('creates a user', () => {
    cy.request('POST', '/api/users', {
      name:  'Alex',
      email: 'alex@example.com',
    }).its('status').should('eq', 201);
  });

  it('rejects duplicate email', () => {
    cy.request('POST', '/api/users', {
      name:  'Alex',
      email: 'alex@example.com',
    });

    cy.request({
      method:           'POST',
      url:              '/api/users',
      failOnStatusCode: false,
      body: { name: 'Sam', email: 'alex@example.com' },
    }).its('status').should('eq', 409);
  });
});`,
        },
        {
          type: 'subheading',
          text: 'CI Quality Gate',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// package.json scripts
{
  "scripts": {
    "test":          "jest",
    "test:coverage": "jest --coverage",
    "test:e2e":      "cypress run",
    "lint":          "eslint .",
    "quality":       "npm run lint && npm test"
  }
}`,
        },
        {
          type: 'table',
          headers: ['Quality Area', 'Recommended Practice'],
          rows: [
            ['Reliability', 'Eliminate unnecessary timing dependencies'],
            ['Maintainability', 'Use reusable helpers and clear test names'],
            ['Coverage', 'Prioritize important business and risk areas'],
            ['CI', 'Run automated tests on pull requests'],
            ['Reporting', 'Publish actionable test results'],
            ['Flakiness', 'Track, investigate, and fix unstable tests'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Automation Is Software',
          text: 'Treat test automation as production-quality engineering. Poorly designed tests create maintenance costs, false failures, and reduced confidence in the QA process.',
        },
      ],
    },

    {
      id: 'software-testing-interview-questions',
      title: '12. Interview Questions',
      summary:
        'Frequently asked software testing interview questions covering manual testing, automation, test design, bugs, performance, security, and TDD.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is software testing?',
              answer:
                'Software testing is the process of evaluating software to identify defects and provide evidence about whether it satisfies specified requirements and intended behavior.',
            },
            {
              question: 'What is the difference between verification and validation?',
              answer:
                'Verification asks whether the software is being built according to specified requirements and design. Validation asks whether the delivered software meets user and business needs.',
            },
            {
              question: 'What is unit testing?',
              answer:
                'Unit testing verifies small, isolated pieces of logic such as functions, methods, or components. Unit tests are usually fast and highly automated.',
            },
            {
              question: 'What is integration testing?',
              answer:
                'Integration testing verifies interactions between two or more components, such as an API service and database or multiple application modules.',
            },
            {
              question: 'What is system testing?',
              answer:
                'System testing evaluates the complete integrated application against specified system requirements.',
            },
            {
              question: 'What is acceptance testing?',
              answer:
                'Acceptance testing evaluates whether a system or feature satisfies agreed business or user acceptance criteria.',
            },
            {
              question: 'What is smoke testing?',
              answer:
                'Smoke testing is a focused set of checks covering critical functionality to determine whether a build or environment is stable enough for more extensive testing.',
            },
            {
              question: 'What is regression testing?',
              answer:
                'Regression testing checks existing functionality after changes to identify unintended side effects or newly introduced defects.',
            },
            {
              question: 'What is the difference between severity and priority?',
              answer:
                'Severity describes the impact of a defect, while priority describes how urgently the defect should be addressed. They are related but not identical.',
            },
            {
              question: 'What is Boundary Value Analysis?',
              answer:
                'Boundary Value Analysis focuses on input values at and around boundaries because defects commonly occur near minimum and maximum limits.',
            },
            {
              question: 'What is Equivalence Partitioning?',
              answer:
                'Equivalence Partitioning divides an input domain into groups expected to behave similarly, allowing representative values to test each partition.',
            },
            {
              question: 'What is a test case?',
              answer:
                'A test case is a documented set of preconditions, inputs, steps, and expected results used to verify specific behavior.',
            },
            {
              question: 'What is a test plan?',
              answer:
                'A test plan defines testing scope, objectives, approach, resources, environments, schedule, risks, responsibilities, and completion criteria for a testing effort.',
            },
            {
              question: 'What is test coverage?',
              answer:
                'Test coverage is a measure of how much of a defined scope is exercised by testing. It can refer to requirements, code, features, risks, configurations, or other dimensions.',
            },
            {
              question: 'What is a flaky test?',
              answer:
                'A flaky test is a test that produces inconsistent results without a corresponding change in the software under test. Common causes include timing dependencies, shared state, unstable environments, and external dependencies.',
            },
            {
              question: 'What is mocking?',
              answer:
                'Mocking replaces or simulates a dependency so that the system under test can be isolated. It is commonly used to avoid real external API calls, databases, email services, or other dependencies during unit tests.',
            },
            {
              question: 'What is TDD?',
              answer:
                'Test-Driven Development is a development practice based on the Red-Green-Refactor cycle: write a failing test, implement enough code to pass it, and then refactor while keeping tests passing.',
            },
            {
              question: 'What is the testing pyramid?',
              answer:
                'The testing pyramid is a model that encourages many fast lower-level tests, fewer integration tests, and a smaller number of slower end-to-end tests.',
            },
            {
              question: 'What is the difference between manual and automated testing?',
              answer:
                'Manual testing is performed by a person, while automated testing uses software to execute programmed checks. Manual testing is valuable for exploration and human judgment, while automation is valuable for repeatable checks.',
            },
            {
              question: 'What is performance testing?',
              answer:
                'Performance testing evaluates system behavior under defined workloads, including response times, throughput, resource usage, stability, and behavior under increasing load.',
            },
          ],
        },
        {
          type: 'subheading',
          text: 'Interview Scenario: Testing a Login Feature',
        },
        {
          type: 'code',
          language: 'text',
          code: `Login Test Scenarios:
  - Valid email + valid password
  - Valid email + invalid password
  - Invalid email format
  - Empty email
  - Empty password
  - Both fields empty
  - Locked account
  - Unverified account
  - Multiple failed attempts
  - Session creation after login
  - Logout after successful login
  - Unauthorized access to protected routes`,
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Example automated test
it('logs in with valid credentials', async () => {
  const response = await request(app)
    .post('/api/auth/login')
    .send({
      email:    'user@example.com',
      password: 'ValidPassword123',
    });

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('user');
});`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Interview Tip',
          text: 'When answering QA interview questions, explain the concept, provide a practical example, identify edge cases, and describe how you would automate or measure the test when appropriate.',
        },
      ],
    },
  ],
};

export default softwareTestingContent;
