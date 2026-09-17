export const sdlcContent = {
  id: 'sdlc',
  slug: 'sdlc',
  title: 'SDLC',
  subtitle: 'Software Development Life Cycle & Methodologies',
  category: 'Software Engineering',
  description:
    'Software Development Life Cycle methodologies: Waterfall, Agile, Scrum, Kanban, requirements engineering, architectural design patterns, code review, and DevOps CI/CD pipelines.',
  sections: [
    {
      id: 'introduction-to-sdlc',
      title: '1. Introduction to SDLC',
      summary:
        'Understand the Software Development Life Cycle, why it matters, and the six major phases used to deliver software systematically.',
      content: [
        {
          type: 'paragraph',
          text: 'SDLC (Software Development Life Cycle) is a structured process used to plan, analyze, design, develop, test, deploy, and maintain software systems. It provides a repeatable framework for managing software projects, controlling risk, improving quality, and aligning engineering work with business requirements.',
        },
        {
          type: 'heading',
          text: 'Why SDLC Is Important',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Provides a structured approach to software development.',
            'Improves communication between business and technical teams.',
            'Helps identify risks and requirements early.',
            'Provides checkpoints for quality assurance and validation.',
            'Makes project progress easier to plan and track.',
            'Improves maintainability through documentation and engineering standards.',
            'Supports predictable deployment and maintenance processes.',
          ],
        },
        {
          type: 'heading',
          text: 'Six Major SDLC Phases',
        },
        {
          type: 'table',
          headers: ['Phase', 'Primary Goal', 'Typical Activities', 'Main Output'],
          rows: [
            ['1. Planning', 'Define project direction', 'Scope, feasibility, resources, schedule, risks', 'Project plan'],
            ['2. Requirements', 'Understand what to build', 'Stakeholder interviews, user stories, acceptance criteria', 'Requirements specification'],
            ['3. Design', 'Decide how to build it', 'Architecture, database, APIs, UI, security design', 'Technical design'],
            ['4. Development', 'Implement the solution', 'Coding, integration, unit tests', 'Working software'],
            ['5. Testing', 'Verify quality and correctness', 'Functional, integration, system, regression, security testing', 'Test results'],
            ['6. Deployment & Maintenance', 'Operate and improve software', 'Release, monitoring, bug fixes, updates', 'Production system'],
          ],
        },
        {
          type: 'subheading',
          text: 'Example SDLC Flow',
        },
        {
          type: 'code',
          language: 'text',
          code: `Planning
  ↓
Requirements
  ↓
Design
  ↓
Development
  ↓
Testing
  ↓
Deployment
  ↓
Maintenance
  ↺  Feedback and new requirements`,
        },
        {
          type: 'subheading',
          text: 'Typical Deliverables',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Requirements document or product backlog',
            'Architecture and design documentation',
            'Source code',
            'Automated and manual test suites',
            'Deployment configuration',
            'Monitoring and operational documentation',
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'SDLC Is Not Always Linear',
          text: 'Modern teams often revisit requirements, design, development, and testing repeatedly. Agile and DevOps approaches make these feedback loops explicit rather than treating software delivery as a single one-way sequence.',
        },
      ],
    },

    {
      id: 'sdlc-models-comparison',
      title: '2. SDLC Models Comparison',
      summary:
        'Compare Waterfall, Agile, Spiral, V-Model, and RAD and understand when each model is appropriate.',
      content: [
        {
          type: 'paragraph',
          text: 'An SDLC model defines how development activities are organized and how teams handle requirements, feedback, risk, testing, and delivery. Different models are appropriate for different project constraints.',
        },
        {
          type: 'heading',
          text: 'Model Comparison',
        },
        {
          type: 'table',
          headers: ['Model', 'Approach', 'Strengths', 'Limitations', 'Suitable For'],
          rows: [
            ['Waterfall', 'Sequential phases', 'Simple planning and documentation', 'Changes become expensive later', 'Stable and well-understood requirements'],
            ['Agile', 'Iterative and incremental', 'Fast feedback and adaptability', 'Requires continuous collaboration', 'Products with evolving requirements'],
            ['Spiral', 'Risk-driven iterations', 'Strong risk management', 'Can be complex and expensive', 'Large, high-risk projects'],
            ['V-Model', 'Sequential with corresponding testing phases', 'Strong verification and validation focus', 'Less flexible to changing requirements', 'Projects requiring rigorous testing'],
            ['RAD', 'Rapid prototyping and iterative delivery', 'Fast development and user feedback', 'Less suitable for highly complex systems', 'Projects requiring rapid application development'],
          ],
        },
        {
          type: 'subheading',
          text: 'Waterfall',
        },
        {
          type: 'paragraph',
          text: 'Waterfall organizes development into relatively sequential phases. Teams typically complete requirements and design before moving deeply into implementation.',
        },
        {
          type: 'code',
          language: 'text',
          code: `Requirements
  ↓
Design
  ↓
Development
  ↓
Testing
  ↓
Deployment
  ↓
Maintenance`,
        },
        {
          type: 'subheading',
          text: 'Agile',
        },
        {
          type: 'code',
          language: 'text',
          code: `Backlog
  ↓
Plan
  ↓
Develop → Test → Review
  ↓
Increment
  ↓
Customer Feedback
  ↺  Next Iteration`,
        },
        {
          type: 'subheading',
          text: 'Spiral',
        },
        {
          type: 'paragraph',
          text: 'The Spiral model combines iterative development with explicit risk analysis. Each cycle typically identifies objectives, evaluates alternatives and risks, develops or prototypes a solution, and plans the next cycle.',
        },
        {
          type: 'subheading',
          text: 'V-Model',
        },
        {
          type: 'code',
          language: 'text',
          code: `Requirements  ←────────────→  Acceptance Testing
    ↓                                    ↑
System Design ←───────────→  System Testing
    ↓                                    ↑
Architecture  ←───────────→  Integration Testing
    ↓                                    ↑
          Implementation`,
        },
        {
          type: 'subheading',
          text: 'RAD',
        },
        {
          type: 'paragraph',
          text: 'Rapid Application Development emphasizes short development cycles, prototyping, reusable components, and frequent user feedback.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'No Universal SDLC Model',
          text: 'There is no single SDLC model that fits every project. Selection should consider requirement stability, risk, regulatory constraints, customer involvement, delivery expectations, technical uncertainty, and team capabilities.',
        },
      ],
    },

    {
      id: 'agile-methodology',
      title: '3. Agile Methodology',
      summary:
        'Learn the Agile Manifesto, its principles, iterative development, sprints, feedback loops, and retrospectives.',
      content: [
        {
          type: 'paragraph',
          text: 'Agile is an approach to software development that emphasizes iterative delivery, customer collaboration, responding to change, and delivering working software frequently. The Agile Manifesto describes four values and twelve principles.',
        },
        {
          type: 'heading',
          text: 'Agile Manifesto — Four Values',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Individuals and interactions over processes and tools.',
            'Working software over comprehensive documentation.',
            'Customer collaboration over contract negotiation.',
            'Responding to change over following a plan.',
          ],
        },
        {
          type: 'heading',
          text: 'Twelve Agile Principles',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Satisfy customers through early and continuous delivery of valuable software.',
            'Welcome changing requirements, even late in development.',
            'Deliver working software frequently.',
            'Business stakeholders and developers should work together regularly.',
            'Build projects around motivated individuals and provide the environment they need.',
            'Prefer direct communication for effective information sharing.',
            'Working software is a primary measure of progress.',
            'Promote a sustainable pace of development.',
            'Maintain continuous attention to technical excellence and good design.',
            'Keep things simple and maximize the amount of work not done.',
            'Support self-organizing teams because they can produce strong solutions.',
            'Regularly reflect on how to become more effective and adjust accordingly.',
          ],
        },
        {
          type: 'subheading',
          text: 'Agile Sprint Cycle',
        },
        {
          type: 'code',
          language: 'text',
          code: `Product Backlog
  ↓
Sprint Planning
  ↓
Sprint Development
  ↓
Daily Collaboration
  ↓
Testing & Integration
  ↓
Sprint Review
  ↓
Sprint Retrospective
  ↓
Next Sprint`,
        },
        {
          type: 'subheading',
          text: 'Sprint',
        },
        {
          type: 'paragraph',
          text: 'A sprint is a fixed-length development iteration used by Scrum teams to create a usable increment. Sprint length is commonly one to four weeks, depending on the team and product context.',
        },
        {
          type: 'subheading',
          text: 'Retrospective',
        },
        {
          type: 'paragraph',
          text: 'A retrospective is a structured reflection in which the team examines how the iteration went and identifies improvements for future work.',
        },
        {
          type: 'code',
          language: 'text',
          code: `Retrospective Questions:

  What went well?
  What did not go well?
  What should we change?
  What action will we take next sprint?`,
        },
        {
          type: 'subheading',
          text: 'Agile Metrics',
        },
        {
          type: 'table',
          headers: ['Metric', 'Purpose'],
          rows: [
            ['Velocity', 'Historical amount of work completed by a team'],
            ['Lead Time', 'Time from request to delivery'],
            ['Cycle Time', 'Time spent actively progressing a work item'],
            ['Defect Rate', 'Measures defect occurrence'],
            ['Release Frequency', 'How often software is released'],
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Agile Mindset',
          text: 'Agile is more than holding daily meetings or using sprints. Its central idea is creating short feedback loops so teams can continuously learn and adapt while delivering useful software.',
        },
      ],
    },

    {
      id: 'scrum-framework',
      title: '4. Scrum Framework',
      summary:
        'Understand Scrum roles, accountabilities, events, artifacts, and the relationship between product goals and sprint increments.',
      content: [
        {
          type: 'paragraph',
          text: 'Scrum is a lightweight framework for generating value through adaptive solutions to complex problems. Modern Scrum defines accountabilities for the Product Owner, Scrum Master, and Developers, along with events and artifacts.',
        },
        {
          type: 'heading',
          text: 'Scrum Accountabilities',
        },
        {
          type: 'table',
          headers: ['Accountability', 'Primary Responsibility'],
          rows: [
            ['Product Owner', 'Maximize product value and manage the Product Backlog effectively'],
            ['Scrum Master', 'Establish Scrum, improve team effectiveness, and help remove impediments'],
            ['Developers', 'Create a usable Increment that meets the Definition of Done'],
          ],
        },
        {
          type: 'heading',
          text: 'Scrum Events',
        },
        {
          type: 'table',
          headers: ['Event', 'Purpose', 'Typical Outcome'],
          rows: [
            ['Sprint', 'Container for all other Scrum events and development work', 'Usable Increment'],
            ['Sprint Planning', 'Define Sprint Goal and plan work', 'Sprint Backlog'],
            ['Daily Scrum', 'Inspect progress toward Sprint Goal and adapt plan', 'Updated plan'],
            ['Sprint Review', 'Inspect the Increment and collaborate on future adaptations', 'Updated Product Backlog'],
            ['Sprint Retrospective', 'Inspect team process and identify improvements', 'Improvement actions'],
          ],
        },
        {
          type: 'heading',
          text: 'Scrum Artifacts',
        },
        {
          type: 'table',
          headers: ['Artifact', 'Commitment', 'Purpose'],
          rows: [
            ['Product Backlog', 'Product Goal', 'Ordered list of work needed for the product'],
            ['Sprint Backlog', 'Sprint Goal', 'Selected work plus the plan for delivering it'],
            ['Increment', 'Definition of Done', 'Usable integrated product result'],
          ],
        },
        {
          type: 'subheading',
          text: 'Example User Story to Sprint Work',
        },
        {
          type: 'code',
          language: 'text',
          code: `User Story:
  "As a customer, I want to reset my password
   so that I can regain access to my account."

Acceptance Criteria:
  - User can request a reset link.
  - Reset link expires.
  - User can set a new password.
  - Invalid or expired links are rejected.

Sprint Tasks:
  - Create password reset API.
  - Add token generation.
  - Add email delivery.
  - Build reset-password UI.
  - Write tests.
  - Review and deploy.`,
        },
        {
          type: 'subheading',
          text: 'Definition of Done',
        },
        {
          type: 'code',
          language: 'text',
          code: `Definition of Done:

  [✓] Code implemented
  [✓] Code reviewed
  [✓] Automated tests passing
  [✓] Security checks completed
  [✓] Documentation updated where required
  [✓] Feature integrated
  [✓] Acceptance criteria satisfied`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Scrum vs Agile',
          text: 'Agile is a broad set of values and principles. Scrum is a specific framework that implements an empirical, iterative approach using defined accountabilities, events, and artifacts.',
        },
      ],
    },

    {
      id: 'kanban-and-lean',
      title: '5. Kanban & Lean',
      summary:
        'Learn visual workflow management, WIP limits, pull systems, flow optimization, and Lean waste reduction.',
      content: [
        {
          type: 'paragraph',
          text: 'Kanban is a method for managing knowledge work by visualizing work, limiting work in progress, managing flow, and continuously improving the system. Lean thinking focuses on maximizing customer value while reducing activities that do not contribute to that value.',
        },
        {
          type: 'heading',
          text: 'Kanban Board',
        },
        {
          type: 'code',
          language: 'text',
          code: `KANBAN BOARD

┌────────────┬────────────┬────────────┬────────────┐
│  BACKLOG   │IN PROGRESS │CODE REVIEW │    DONE    │
├────────────┼────────────┼────────────┼────────────┤
│  Task A    │  Task C    │  Task E    │  Task F    │
│  Task B    │  Task D    │            │  Task G    │
└────────────┴────────────┴────────────┴────────────┘

WIP Limits:
  IN PROGRESS = 2
  CODE REVIEW = 2`,
        },
        {
          type: 'subheading',
          text: 'WIP Limits',
        },
        {
          type: 'paragraph',
          text: 'WIP (Work In Progress) limits restrict how many items can occupy a workflow stage. The goal is to reduce excessive multitasking, expose bottlenecks, and improve flow.',
        },
        {
          type: 'subheading',
          text: 'Pull vs Push',
        },
        {
          type: 'table',
          headers: ['System', 'How Work Moves', 'Typical Characteristic'],
          rows: [
            ['Push', 'New work is assigned or pushed into stages', 'Can create queues and overloading'],
            ['Pull', 'A stage pulls work when it has capacity', 'Helps control WIP and improve flow'],
          ],
        },
        {
          type: 'subheading',
          text: 'Flow Metrics',
        },
        {
          type: 'table',
          headers: ['Metric', 'Meaning'],
          rows: [
            ['Lead Time', 'Elapsed time from request to delivery'],
            ['Cycle Time', 'Elapsed time from work start to completion'],
            ['Throughput', 'Number of completed work items over a period'],
            ['WIP', 'Number of items currently being worked on'],
          ],
        },
        {
          type: 'subheading',
          text: 'Lean Waste',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Unnecessary work or features.',
            'Waiting and idle time.',
            'Unnecessary handoffs.',
            'Excessive work in progress.',
            'Rework caused by defects.',
            'Unnecessary process steps.',
            'Unused skills and knowledge.',
          ],
        },
        {
          type: 'subheading',
          text: 'Example Workflow Policy',
        },
        {
          type: 'code',
          language: 'text',
          code: `Workflow Policy:

  Backlog → Development → Review → Testing → Done

  Development WIP: 3
  Review WIP:      2
  Testing WIP:     2

  Rule:
    If Review is full, developers help review existing work
    instead of starting another feature.`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Optimize Flow',
          text: 'Kanban is not simply a task board. WIP limits, explicit workflow policies, flow measurement, and continuous improvement are central to effective Kanban implementation.',
        },
      ],
    },

    {
      id: 'requirements-engineering',
      title: '6. Requirements Engineering',
      summary:
        'Learn how to discover, analyze, document, validate, prioritize, and manage software requirements.',
      content: [
        {
          type: 'paragraph',
          text: 'Requirements engineering is the systematic process of discovering, documenting, analyzing, validating, prioritizing, and managing what a software system must provide and the constraints under which it must operate.',
        },
        {
          type: 'heading',
          text: 'Functional vs Non-Functional Requirements',
        },
        {
          type: 'table',
          headers: ['Type', 'Meaning', 'Example'],
          rows: [
            ['Functional', 'Describes what the system should do', 'User can reset their password'],
            ['Non-functional', 'Describes quality attributes or constraints', 'Password reset API should respond within an agreed performance target'],
            ['Business', 'Describes business goals or outcomes', 'Increase successful online orders'],
            ['Technical', 'Describes implementation constraints', 'Application must use PostgreSQL'],
          ],
        },
        {
          type: 'subheading',
          text: 'User Stories',
        },
        {
          type: 'paragraph',
          text: 'A user story describes a capability from the perspective of a user or stakeholder. A common format is: As a [user], I want [capability], so that [benefit].',
        },
        {
          type: 'code',
          language: 'text',
          code: `User Story:

  As a customer,
  I want to save products to a wishlist,
  so that I can purchase them later.`,
        },
        {
          type: 'subheading',
          text: 'Acceptance Criteria',
        },
        {
          type: 'code',
          language: 'text',
          code: `Acceptance Criteria:

  Given a logged-in customer
  When the customer clicks "Add to Wishlist"
  Then the product appears in the wishlist.

  Given a product already exists in the wishlist
  When the customer clicks "Add to Wishlist"
  Then the system does not create a duplicate entry.

  Given an unauthenticated customer
  When the customer tries to save a product
  Then the system requests authentication.`,
        },
        {
          type: 'subheading',
          text: 'MoSCoW Prioritization',
        },
        {
          type: 'table',
          headers: ['Priority', 'Meaning', 'Example'],
          rows: [
            ["Must Have", 'Essential for the release', 'User authentication'],
            ["Should Have", 'Important but not critical', 'Email notifications'],
            ["Could Have", 'Useful if capacity allows', 'Theme customization'],
            ["Won't Have", 'Not planned for the current scope', 'Advanced analytics'],
          ],
        },
        {
          type: 'subheading',
          text: 'Requirements Workflow',
        },
        {
          type: 'code',
          language: 'text',
          code: `Stakeholders
  ↓
Elicitation
  ↓
Analysis
  ↓
Documentation
  ↓
Validation
  ↓
Prioritization
  ↓
Implementation
  ↓
Feedback
  ↺`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Ambiguous Requirements',
          text: 'Requirements such as "the application should be fast" are difficult to verify. Convert vague requirements into measurable acceptance criteria or quality targets whenever practical.',
        },
      ],
    },

    {
      id: 'software-architecture',
      title: '7. Software Architecture',
      summary:
        'Understand MVC, monolithic and microservice architectures, SOLID principles, and practical architectural trade-offs.',
      content: [
        {
          type: 'paragraph',
          text: 'Software architecture defines the major components of a system, their responsibilities, communication mechanisms, data flows, deployment boundaries, and important quality attributes. Good architecture helps teams evolve software while controlling complexity and risk.',
        },
        {
          type: 'heading',
          text: 'MVC Architecture',
        },
        {
          type: 'paragraph',
          text: 'MVC separates application responsibilities into Model, View, and Controller. The exact implementation varies by framework, but the pattern generally separates data/domain concerns, presentation, and request or interaction handling.',
        },
        {
          type: 'code',
          language: 'text',
          code: `Client
  ↓
Controller
  ↓
Model / Service
  ↓
Database

Controller
  ↓
View / Response
  ↓
Client`,
        },
        {
          type: 'heading',
          text: 'Monolith vs Microservices',
        },
        {
          type: 'table',
          headers: ['Aspect', 'Monolith', 'Microservices'],
          rows: [
            ['Deployment', 'Single deployable application', 'Multiple independently deployable services'],
            ['Complexity', 'Lower distributed-system complexity', 'Higher operational and distributed-system complexity'],
            ['Scaling', 'Usually scales as a unit', 'Individual services can scale independently'],
            ['Data', 'Often centralized', 'May be separated by service'],
            ['Failure Modes', 'Primarily process/application failures', 'Includes network and distributed-system failures'],
            ['Team Structure', 'Often works well for smaller teams', 'Can fit larger organizations with clear service ownership'],
          ],
        },
        {
          type: 'subheading',
          text: 'Monolithic Example',
        },
        {
          type: 'code',
          language: 'text',
          code: `Application
├── Authentication
├── Users
├── Products
├── Orders
├── Payments
└── Notifications
      ↓
   Database`,
        },
        {
          type: 'subheading',
          text: 'Microservices Example',
        },
        {
          type: 'code',
          language: 'text',
          code: `API Gateway
│
├── Auth Service
├── User Service
├── Product Service
├── Order Service
└── Notification Service

Services communicate through
HTTP APIs, events, or messaging.`,
        },
        {
          type: 'heading',
          text: 'SOLID Principles',
        },
        {
          type: 'table',
          headers: ['Principle', 'Meaning'],
          rows: [
            ['S — Single Responsibility', 'A class or module should have one primary responsibility'],
            ['O — Open/Closed', 'Software entities should be open for extension while minimizing modification'],
            ['L — Liskov Substitution', 'Subtypes should be usable wherever their base type is expected'],
            ['I — Interface Segregation', 'Clients should not depend on interfaces they do not use'],
            ['D — Dependency Inversion', 'High-level policy should depend on abstractions rather than concrete low-level details'],
          ],
        },
        {
          type: 'subheading',
          text: 'Dependency Inversion Example',
        },
        {
          type: 'code',
          language: 'text',
          code: `Bad:
  OrderService
    ↓
  MySQLDatabase

Better:
  OrderService
    ↓
  DatabaseRepository
    ↑
  ├── MySQLRepository
  └── PostgreSQLRepository`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Architecture Trade-offs',
          text: 'Architecture is about trade-offs. Microservices can provide independent deployment and scaling but introduce distributed-system complexity. A modular monolith can provide strong internal boundaries while keeping deployment simpler.',
        },
      ],
    },

    {
      id: 'code-review-best-practices',
      title: '8. Code Review Best Practices',
      summary:
        'Establish an effective pull request process and review code for correctness, security, maintainability, tests, and design quality.',
      content: [
        {
          type: 'paragraph',
          text: 'Code review is a collaborative quality-control process in which engineers inspect proposed changes before they are merged. Effective reviews identify defects, improve maintainability, share knowledge, and protect architectural consistency.',
        },
        {
          type: 'heading',
          text: 'Pull Request Process',
        },
        {
          type: 'code',
          language: 'text',
          code: `Developer
  ↓
Create Branch
  ↓
Implement Feature
  ↓
Run Tests + Lint
  ↓
Push Branch
  ↓
Open Pull Request
  ↓
Automated CI Checks
  ↓
Human Review
  ↓
Changes if Required
  ↓
Approve
  ↓
Merge`,
        },
        {
          type: 'heading',
          text: 'What to Review',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Correctness and business logic.',
            'Edge cases and error handling.',
            'Security vulnerabilities.',
            'Performance implications.',
            'API and database design.',
            'Readability and maintainability.',
            'Tests and test coverage for important behavior.',
            'Backward compatibility.',
            'Logging and observability.',
            'Unnecessary complexity or duplicated code.',
          ],
        },
        {
          type: 'subheading',
          text: 'Review Checklist',
        },
        {
          type: 'table',
          headers: ['Area', 'Questions'],
          rows: [
            ['Correctness', 'Does the implementation satisfy the requirements?'],
            ['Security', 'Could user input cause injection, authorization, or data exposure issues?'],
            ['Testing', 'Are important success and failure paths covered?'],
            ['Performance', 'Does this introduce unnecessary queries, loops, or expensive operations?'],
            ['Maintainability', 'Can another engineer understand and safely modify it?'],
            ['Architecture', 'Does it follow existing boundaries and conventions?'],
          ],
        },
        {
          type: 'subheading',
          text: 'Useful Git Commands',
        },
        {
          type: 'code',
          language: 'bash',
          code: `git diff main...feature/user-profile
git status
git log --oneline -10

# Run project checks
npm test
npm run lint
npm run build`,
        },
        {
          type: 'subheading',
          text: 'Good Review Comment',
        },
        {
          type: 'code',
          language: 'text',
          code: `Instead of:
  "Bad code."

Prefer:
  "Could we validate the input before calling the database?
   This would prevent invalid values from reaching the repository
   and make the error response more predictable."`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Review the Code, Not the Person',
          text: 'Keep review comments specific, respectful, and actionable. Distinguish required changes from optional suggestions and explain the technical reason when a change matters.',
        },
      ],
    },

    {
      id: 'devops-cicd-pipelines',
      title: '9. DevOps & CI/CD Pipelines',
      summary:
        'Understand DevOps practices, Git-based workflows, CI/CD stages, Docker, and deployment strategies.',
      content: [
        {
          type: 'paragraph',
          text: 'DevOps combines development and operations practices to improve the flow of software from code changes to reliable production operation. CI/CD automates portions of building, testing, validating, and delivering software.',
        },
        {
          type: 'heading',
          text: 'CI/CD Pipeline',
        },
        {
          type: 'code',
          language: 'text',
          code: `Developer Push
  ↓
Source Checkout
  ↓
Install Dependencies
  ↓
Lint
  ↓
Unit Tests
  ↓
Build
  ↓
Security / Quality Checks
  ↓
Package Artifact
  ↓
Deploy to Staging
  ↓
Integration / Acceptance Tests
  ↓
Production Deployment
  ↓
Monitoring`,
        },
        {
          type: 'heading',
          text: 'CI vs CD',
        },
        {
          type: 'table',
          headers: ['Concept', 'Meaning'],
          rows: [
            ['Continuous Integration', 'Frequently integrate changes and automatically build/test them'],
            ['Continuous Delivery', 'Keep software in a deployable state and automate delivery steps'],
            ['Continuous Deployment', 'Automatically deploy qualifying changes to production'],
          ],
        },
        {
          type: 'subheading',
          text: 'Git Flow Example',
        },
        {
          type: 'code',
          language: 'bash',
          code: `git checkout main
git pull origin main

git checkout -b feature/user-profile

# Implement changes
git add .
git commit -m "feat: add user profile"

git push -u origin feature/user-profile

# Open Pull Request → Run CI → Review → Merge`,
        },
        {
          type: 'subheading',
          text: 'Docker Example',
        },
        {
          type: 'code',
          language: 'bash',
          code: `docker build -t my-app:1.0 .

docker run \\
  --name my-app \\
  -p 3000:3000 \\
  my-app:1.0

docker ps`,
        },
        {
          type: 'subheading',
          text: 'Deployment Strategies',
        },
        {
          type: 'table',
          headers: ['Strategy', 'Description', 'Typical Benefit'],
          rows: [
            ['Rolling', 'Gradually replace old instances with new ones', 'Reduces need for full downtime'],
            ['Blue-Green', 'Maintain two environments and switch traffic', 'Fast rollback and controlled cutover'],
            ['Canary', 'Release to a small subset before broader rollout', 'Limits exposure while validating changes'],
            ['Recreate', 'Stop old version and deploy new version', 'Simple operational model but may cause downtime'],
          ],
        },
        {
          type: 'subheading',
          text: 'Simple CI Pipeline Configuration',
        },
        {
          type: 'code',
          language: 'yaml',
          code: `# Example pipeline stages
stages:
  - install
  - lint
  - test
  - build
  - deploy

install:
  command: npm ci

lint:
  command: npm run lint

test:
  command: npm test

build:
  command: npm run build

deploy:
  command: ./deploy.sh`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'CI/CD Is More Than Automation',
          text: 'A fast pipeline does not guarantee safe releases. Automated tests, reproducible builds, secrets management, deployment controls, observability, rollback procedures, and infrastructure practices are all important parts of reliable delivery.',
        },
      ],
    },

    {
      id: 'version-control-with-git',
      title: '10. Version Control with Git',
      summary:
        'Learn Git fundamentals, branching strategies, merge vs rebase, commit conventions, and collaborative workflows.',
      content: [
        {
          type: 'paragraph',
          text: 'Git is a distributed version control system that records changes to source code and other files. It enables branching, collaboration, history tracking, code review workflows, and controlled integration of changes.',
        },
        {
          type: 'heading',
          text: 'Basic Git Workflow',
        },
        {
          type: 'code',
          language: 'bash',
          code: `git clone <repository-url>
cd project

git status
git checkout -b feature/login

# Edit files
git add .
git commit -m "feat: add login form"

git push -u origin feature/login`,
        },
        {
          type: 'heading',
          text: 'Branching Strategies',
        },
        {
          type: 'table',
          headers: ['Strategy', 'Description', 'Typical Characteristics'],
          rows: [
            ['Feature Branching', 'Create short-lived branches for individual changes', 'Simple and PR-friendly'],
            ['Git Flow', 'Uses structured branches such as feature, release, and hotfix', 'Useful for certain release-oriented workflows'],
            ['Trunk-Based Development', 'Integrate small changes frequently into a shared main branch', 'Encourages short-lived branches and continuous integration'],
            ['Release Branching', 'Create a branch to stabilize a specific release', 'Can support separate release maintenance'],
          ],
        },
        {
          type: 'subheading',
          text: 'Merge vs Rebase',
        },
        {
          type: 'table',
          headers: ['Operation', 'Effect', 'History'],
          rows: [
            ['Merge', 'Combines histories with a merge commit when required', 'Preserves branch topology'],
            ['Rebase', 'Replays commits onto another base', 'Creates a more linear history but rewrites commit IDs'],
          ],
        },
        {
          type: 'code',
          language: 'bash',
          code: `# Update feature branch with main using merge
git checkout feature/login
git fetch origin
git merge origin/main

# Or rebase the feature branch
git checkout feature/login
git fetch origin
git rebase origin/main`,
        },
        {
          type: 'subheading',
          text: 'Commit Conventions',
        },
        {
          type: 'code',
          language: 'text',
          code: `feat:     add password reset
fix:      handle expired session
docs:     update API documentation
refactor: simplify order service
test:     add checkout tests
chore:    update dependencies`,
        },
        {
          type: 'subheading',
          text: 'Useful Git Commands',
        },
        {
          type: 'code',
          language: 'bash',
          code: `git log --oneline --graph --decorate
git diff
git diff --staged
git restore file.txt
git stash
git stash pop
git fetch origin
git branch -a
git remote -v`,
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Rebase Shared Branches Carefully',
          text: 'Rebase rewrites commit history. Avoid rebasing commits that other developers have already based work on unless the team explicitly agrees on the workflow.',
        },
      ],
    },

    {
      id: 'sdlc-interview-questions',
      title: '11. Interview Questions',
      summary:
        'Frequently asked SDLC, Agile, Scrum, Git, architecture, code review, and DevOps interview questions.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is SDLC?',
              answer:
                'SDLC stands for Software Development Life Cycle. It is a structured approach to planning, developing, testing, deploying, and maintaining software.',
            },
            {
              question: 'What are the main phases of SDLC?',
              answer:
                'A common model includes planning, requirements analysis, design, development, testing, and deployment/maintenance. Organizations may define the phases differently.',
            },
            {
              question: 'What is the difference between Waterfall and Agile?',
              answer:
                'Waterfall generally organizes work sequentially with greater emphasis on upfront planning. Agile uses iterative development, frequent feedback, incremental delivery, and adaptation to changing requirements.',
            },
            {
              question: 'What is the Agile Manifesto?',
              answer:
                'The Agile Manifesto defines four values emphasizing individuals and interactions, working software, customer collaboration, and responding to change over their respective alternatives.',
            },
            {
              question: 'What is Scrum?',
              answer:
                'Scrum is a lightweight framework for complex product development. It defines accountabilities, events, artifacts, and commitments around iterative delivery and empirical adaptation.',
            },
            {
              question: 'What are the Scrum accountabilities?',
              answer:
                'The Scrum Guide defines three accountabilities: Product Owner, Scrum Master, and Developers.',
            },
            {
              question: 'What is a Sprint?',
              answer:
                'A Sprint is a fixed-length event in Scrum during which the team works toward a Sprint Goal and creates a usable Increment.',
            },
            {
              question: 'What is the difference between Scrum and Kanban?',
              answer:
                'Scrum is a framework with defined accountabilities, events, artifacts, and Sprint-based iteration. Kanban focuses on visualizing workflow, controlling WIP, managing flow, and continuous improvement. Teams can use practices from both.',
            },
            {
              question: 'What is a WIP limit?',
              answer:
                'WIP means Work In Progress. A WIP limit restricts how many work items can be in a workflow stage at the same time, helping expose bottlenecks and control multitasking.',
            },
            {
              question: 'What is requirements engineering?',
              answer:
                'Requirements engineering is the process of eliciting, analyzing, documenting, validating, prioritizing, and managing requirements throughout the software lifecycle.',
            },
            {
              question:
                'What is the difference between functional and non-functional requirements?',
              answer:
                'Functional requirements describe what the system should do. Non-functional requirements describe quality attributes, constraints, or characteristics such as performance, security, reliability, and availability.',
            },
            {
              question: 'What is a user story?',
              answer:
                'A user story is a concise description of a desired capability from a user perspective, commonly written as: As a user, I want a capability, so that I receive a benefit.',
            },
            {
              question: 'What is an acceptance criterion?',
              answer:
                'Acceptance criteria are specific conditions that a feature must satisfy to be considered acceptable. They provide a basis for validation and testing.',
            },
            {
              question:
                'What is the difference between monolithic and microservice architecture?',
              answer:
                'A monolith is generally deployed as one application unit, while microservices divide a system into independently deployable services. Microservices can improve independent scaling and ownership but add distributed-system complexity.',
            },
            {
              question: 'What are SOLID principles?',
              answer:
                'SOLID is a set of five object-oriented design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.',
            },
            {
              question: 'What is code review?',
              answer:
                'Code review is the process of examining proposed source-code changes before integration. It helps identify defects, security issues, maintainability problems, and architectural inconsistencies while sharing engineering knowledge.',
            },
            {
              question: 'What is CI/CD?',
              answer:
                'Continuous Integration automatically validates frequently integrated code changes. Continuous Delivery automates keeping software deployable and delivering it to environments. Continuous Deployment extends automation to production deployment.',
            },
            {
              question: 'What is the difference between merge and rebase?',
              answer:
                'Merge combines branch histories and may create a merge commit. Rebase replays commits onto a different base and creates rewritten commit IDs, often producing a more linear history.',
            },
            {
              question: 'What is a deployment strategy?',
              answer:
                'A deployment strategy defines how a new software version is introduced into an environment. Examples include rolling, blue-green, canary, and recreate deployments.',
            },
            {
              question: 'Why are automated tests important in CI/CD?',
              answer:
                'Automated tests provide repeatable validation of software changes and can detect regressions before deployment. They are one part of a broader quality strategy that may also include code review, static analysis, security checks, and acceptance testing.',
            },
          ],
        },
        {
          type: 'subheading',
          text: 'Practical Interview Scenario',
        },
        {
          type: 'code',
          language: 'text',
          code: `Scenario:
  A team receives a new feature request.

Recommended flow:
  1.  Clarify business goal.
  2.  Gather functional and non-functional requirements.
  3.  Write user stories and acceptance criteria.
  4.  Estimate and prioritize the work.
  5.  Design the solution.
  6.  Create a Git branch.
  7.  Implement with automated tests.
  8.  Open a Pull Request.
  9.  Run CI checks.
  10. Perform code review.
  11. Deploy to staging.
  12. Validate the feature.
  13. Deploy to production.
  14. Monitor and collect feedback.`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Interview Tip',
          text: 'For SDLC interviews, avoid memorizing only definitions. Explain how requirements, architecture, development, testing, Git, code review, CI/CD, deployment, and monitoring connect into one software delivery process.',
        },
      ],
    },
  ],
};

export default sdlcContent;
