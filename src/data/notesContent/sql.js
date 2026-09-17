export const sqlContent = {
  id: 'sql',
  slug: 'sql',
  title: 'SQL',
  subtitle: 'Relational Database Management & Queries',
  category: 'Database',
  description:
    'Comprehensive relational database guide: SQL DDL/DML, JOINs (INNER, LEFT, RIGHT, FULL), Grouping, Subqueries, Indexes, Database Normalization (1NF to 3NF), and ACID Transactions.',
  sections: [
    {
      id: 'introduction-to-sql-rdbms',
      title: '1. Introduction to SQL & RDBMS',
      summary:
        'Understand SQL, relational databases, tables, keys, relationships, and the major relational database management systems.',
      content: [
        {
          type: 'paragraph',
          text: 'SQL (Structured Query Language) is the standard language used to define, manipulate, query, and control data in relational database systems. An RDBMS stores data in tables consisting of rows and columns and uses relationships between tables to model structured information.',
        },
        {
          type: 'heading',
          text: 'Relational Database Model',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'A database contains one or more tables.',
            'A table consists of rows and columns.',
            'Each row represents a record or entity instance.',
            'Each column represents an attribute.',
            'A primary key uniquely identifies rows.',
            'Foreign keys establish relationships between tables.',
            'Constraints enforce data integrity.',
            'SQL is used to query and manipulate relational data.',
          ],
        },
        {
          type: 'subheading',
          text: 'Example Relational Schema',
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE TABLE departments (
    department_id   INT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    employee_id   INT PRIMARY KEY,
    employee_name VARCHAR(100) NOT NULL,
    salary        DECIMAL(10, 2),
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);

SELECT
    employee_id,
    employee_name,
    salary
FROM employees;`,
        },
        {
          type: 'subheading',
          text: 'Popular RDBMS Comparison',
        },
        {
          type: 'table',
          headers: ['RDBMS', 'Typical Strengths', 'SQL Dialect / Notes', 'Common Use Cases'],
          rows: [
            [
              'PostgreSQL',
              'Advanced SQL, extensibility, standards support',
              'PostgreSQL SQL dialect',
              'Web applications, analytics, complex relational workloads',
            ],
            [
              'MySQL',
              'Popular, simple deployment, broad ecosystem',
              'MySQL SQL dialect',
              'Web applications, CMS platforms, general backend systems',
            ],
            [
              'Microsoft SQL Server',
              'Enterprise tooling, analytics, Microsoft ecosystem',
              'T-SQL',
              'Enterprise applications, reporting, business systems',
            ],
            [
              'Oracle Database',
              'Enterprise features, scalability, mature tooling',
              'Oracle SQL / PL/SQL',
              'Large enterprise systems and high-end workloads',
            ],
            [
              'SQLite',
              'Embedded, lightweight, serverless',
              'SQLite SQL dialect',
              'Mobile apps, local applications, prototypes',
            ],
          ],
        },
        {
          type: 'subheading',
          text: 'Primary Key and Foreign Key',
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
    order_id    INT PRIMARY KEY,
    customer_id INT  NOT NULL,
    order_date  DATE NOT NULL,
    FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id)
);`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'SQL Dialects',
          text: 'SQL is standardized, but database vendors implement extensions and different syntax. Always check the documentation for the specific RDBMS you are using, especially for pagination, auto-generated keys, date functions, and transaction behavior.',
        },
      ],
    },

    {
      id: 'ddl-data-definition-language',
      title: '2. DDL — Data Definition Language',
      summary:
        'Learn CREATE, ALTER, DROP, TRUNCATE, and constraints used to define database structures.',
      content: [
        {
          type: 'paragraph',
          text: 'DDL (Data Definition Language) defines and modifies database objects such as databases, schemas, tables, constraints, and indexes. Common DDL commands include CREATE, ALTER, DROP, and TRUNCATE.',
        },
        {
          type: 'heading',
          text: 'CREATE TABLE',
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE TABLE products (
    product_id   INT PRIMARY KEY,
    product_name VARCHAR(150) NOT NULL,
    price        DECIMAL(10, 2) NOT NULL,
    stock        INT DEFAULT 0,
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        },
        {
          type: 'subheading',
          text: 'Constraints',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'PRIMARY KEY uniquely identifies each row.',
            'FOREIGN KEY maintains referential integrity.',
            'NOT NULL prevents NULL values.',
            'UNIQUE prevents duplicate values in constrained columns.',
            'CHECK enforces a Boolean condition.',
            'DEFAULT supplies a value when one is not provided.',
          ],
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE TABLE accounts (
    account_id INT PRIMARY KEY,
    email      VARCHAR(255) UNIQUE NOT NULL,
    balance    DECIMAL(12, 2) DEFAULT 0,
    age        INT CHECK (age >= 18),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        },
        {
          type: 'subheading',
          text: 'ALTER TABLE',
        },
        {
          type: 'code',
          language: 'sql',
          code: `ALTER TABLE products
    ADD COLUMN category VARCHAR(100);

ALTER TABLE products
    ALTER COLUMN price TYPE DECIMAL(12, 2);

ALTER TABLE products
    ADD CONSTRAINT check_stock CHECK (stock >= 0);`,
        },
        {
          type: 'subheading',
          text: 'DROP vs TRUNCATE',
        },
        {
          type: 'table',
          headers: ['Command', 'Effect', 'Table Structure', 'Typical Use'],
          rows: [
            ['DELETE', 'Removes selected rows', 'Preserved', 'Conditional row deletion'],
            ['TRUNCATE', 'Removes all rows', 'Preserved', 'Quickly emptying a table'],
            ['DROP', 'Removes the table object', 'Removed', 'Completely removing an object'],
          ],
        },
        {
          type: 'code',
          language: 'sql',
          code: `TRUNCATE TABLE products;

DROP TABLE products;`,
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Destructive DDL',
          text: 'DROP removes the table definition and its data. TRUNCATE removes all rows. Run destructive statements carefully and verify the target database before executing them.',
        },
      ],
    },

    {
      id: 'dml-data-manipulation-language',
      title: '3. DML — Data Manipulation Language',
      summary:
        'Use SELECT, INSERT, UPDATE, and DELETE to retrieve and modify relational data.',
      content: [
        {
          type: 'paragraph',
          text: 'DML operations work with the data stored inside tables. SELECT retrieves data, INSERT adds rows, UPDATE modifies existing rows, and DELETE removes rows.',
        },
        {
          type: 'subheading',
          text: 'INSERT',
        },
        {
          type: 'code',
          language: 'sql',
          code: `INSERT INTO employees (employee_id, employee_name, salary, department_id)
VALUES (101, 'Alex', 55000.00, 10);

-- Multiple rows
INSERT INTO employees (employee_id, employee_name, salary, department_id)
VALUES
    (102, 'Sam',  62000.00, 10),
    (103, 'John', 48000.00, 20);`,
        },
        {
          type: 'subheading',
          text: 'SELECT',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    employee_id,
    employee_name,
    salary
FROM employees
WHERE salary >= 50000
ORDER BY salary DESC;`,
        },
        {
          type: 'subheading',
          text: 'UPDATE',
        },
        {
          type: 'code',
          language: 'sql',
          code: `UPDATE employees
SET salary = salary * 1.10
WHERE department_id = 10;`,
        },
        {
          type: 'subheading',
          text: 'DELETE',
        },
        {
          type: 'code',
          language: 'sql',
          code: `DELETE FROM employees
WHERE employee_id = 103;`,
        },
        {
          type: 'subheading',
          text: 'Filtering and Pagination',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    employee_id,
    employee_name,
    salary
FROM employees
WHERE salary BETWEEN 40000 AND 80000
  AND employee_name LIKE 'A%'
ORDER BY employee_id
LIMIT 10 OFFSET 20;`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Always Check UPDATE and DELETE',
          text: 'Before running UPDATE or DELETE in production, verify the WHERE condition with a SELECT query. An omitted or incorrect WHERE clause can modify or remove every row.',
        },
      ],
    },

    {
      id: 'sql-joins',
      title: '4. SQL JOINs',
      summary:
        'Combine related data from multiple tables using INNER, LEFT, RIGHT, and FULL OUTER JOINs.',
      content: [
        {
          type: 'paragraph',
          text: 'JOIN operations combine rows from multiple tables based on a related condition. They are fundamental to normalized relational database design.',
        },
        {
          type: 'heading',
          text: 'JOIN Comparison',
        },
        {
          type: 'table',
          headers: ['JOIN', 'Returns', 'Typical Purpose'],
          rows: [
            ['INNER JOIN', 'Only matching rows from both tables', 'Retrieve records with matching relationships'],
            ['LEFT JOIN', 'All rows from left table plus matches from right', 'Keep every left-side record'],
            ['RIGHT JOIN', 'All rows from right table plus matches from left', 'Keep every right-side record'],
            ['FULL OUTER JOIN', 'All rows from both tables', 'Show matches and unmatched records from both sides'],
          ],
        },
        {
          type: 'subheading',
          text: 'INNER JOIN',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    e.employee_name,
    d.department_name
FROM employees AS e
INNER JOIN departments AS d
    ON e.department_id = d.department_id;`,
        },
        {
          type: 'subheading',
          text: 'LEFT JOIN',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    d.department_name,
    e.employee_name
FROM departments AS d
LEFT JOIN employees AS e
    ON d.department_id = e.department_id
ORDER BY d.department_name;`,
        },
        {
          type: 'subheading',
          text: 'RIGHT JOIN',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    e.employee_name,
    d.department_name
FROM employees AS e
RIGHT JOIN departments AS d
    ON e.department_id = d.department_id;`,
        },
        {
          type: 'subheading',
          text: 'FULL OUTER JOIN',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    e.employee_name,
    d.department_name
FROM employees AS e
FULL OUTER JOIN departments AS d
    ON e.department_id = d.department_id;`,
        },
        {
          type: 'subheading',
          text: 'Joining Multiple Tables',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    o.order_id,
    c.name         AS customer_name,
    p.product_name
FROM orders AS o
INNER JOIN customers AS c
    ON o.customer_id = c.customer_id
INNER JOIN products AS p
    ON o.product_id = p.product_id;`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'FULL OUTER JOIN Support',
          text: 'FULL OUTER JOIN is available in systems such as PostgreSQL and SQL Server, but not identically supported by every RDBMS. Check your database dialect before using it.',
        },
      ],
    },

    {
      id: 'aggregate-functions-grouping',
      title: '5. Aggregate Functions & Grouping',
      summary:
        'Calculate totals, averages, minimums, maximums, and grouped statistics using aggregate functions.',
      content: [
        {
          type: 'paragraph',
          text: 'Aggregate functions process multiple rows and return a single calculated result per group. Common aggregate functions are COUNT, SUM, AVG, MIN, and MAX.',
        },
        {
          type: 'heading',
          text: 'Common Aggregate Functions',
        },
        {
          type: 'table',
          headers: ['Function', 'Purpose', 'Example'],
          rows: [
            ['COUNT()', 'Counts rows or non-NULL values', 'COUNT(employee_id)'],
            ['SUM()', 'Calculates total', 'SUM(salary)'],
            ['AVG()', 'Calculates average', 'AVG(salary)'],
            ['MIN()', 'Returns minimum value', 'MIN(salary)'],
            ['MAX()', 'Returns maximum value', 'MAX(salary)'],
          ],
        },
        {
          type: 'subheading',
          text: 'Aggregate Query',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    COUNT(*)    AS employee_count,
    SUM(salary) AS total_salary,
    AVG(salary) AS average_salary,
    MIN(salary) AS minimum_salary,
    MAX(salary) AS maximum_salary
FROM employees;`,
        },
        {
          type: 'subheading',
          text: 'GROUP BY',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    department_id,
    COUNT(*)    AS employee_count,
    AVG(salary) AS average_salary
FROM employees
GROUP BY department_id;`,
        },
        {
          type: 'subheading',
          text: 'HAVING',
        },
        {
          type: 'paragraph',
          text: 'WHERE filters individual rows before grouping, while HAVING filters groups after aggregate calculations.',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    department_id,
    COUNT(*)    AS employee_count,
    AVG(salary) AS average_salary
FROM employees
WHERE salary > 30000
GROUP BY department_id
HAVING COUNT(*) >= 2
ORDER BY average_salary DESC;`,
        },
        {
          type: 'subheading',
          text: 'COUNT DISTINCT',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    COUNT(DISTINCT department_id) AS department_count
FROM employees;`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'WHERE vs HAVING',
          text: 'Use WHERE for row-level filtering and HAVING for filtering based on grouped or aggregate results.',
        },
      ],
    },

    {
      id: 'subqueries-and-ctes',
      title: '6. Subqueries & CTEs',
      summary:
        'Use nested queries, correlated subqueries, CTEs, EXISTS, and IN to express complex relational logic.',
      content: [
        {
          type: 'paragraph',
          text: 'A subquery is a query nested inside another SQL statement. A CTE (Common Table Expression) uses the WITH clause to define a named temporary result set that can make complex queries easier to understand and maintain.',
        },
        {
          type: 'subheading',
          text: 'Scalar Subquery',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    employee_name,
    salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);`,
        },
        {
          type: 'subheading',
          text: 'Subquery with IN',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    employee_name,
    department_id
FROM employees
WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE department_name IN ('Engineering', 'Sales')
);`,
        },
        {
          type: 'subheading',
          text: 'Correlated Subquery',
        },
        {
          type: 'paragraph',
          text: 'A correlated subquery references a column from the outer query. Conceptually, the inner query is evaluated in relation to each candidate row of the outer query, although the optimizer may transform the execution plan.',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    e.employee_name,
    e.department_id,
    e.salary
FROM employees AS e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees AS e2
    WHERE e2.department_id = e.department_id
);`,
        },
        {
          type: 'subheading',
          text: 'CTE with WITH',
        },
        {
          type: 'code',
          language: 'sql',
          code: `WITH department_stats AS (
    SELECT
        department_id,
        COUNT(*)    AS employee_count,
        AVG(salary) AS average_salary
    FROM employees
    GROUP BY department_id
)
SELECT
    department_id,
    employee_count,
    average_salary
FROM department_stats
WHERE employee_count >= 3;`,
        },
        {
          type: 'subheading',
          text: 'EXISTS vs IN',
        },
        {
          type: 'table',
          headers: ['Feature', 'EXISTS', 'IN'],
          rows: [
            ['Primary idea', 'Checks whether a matching row exists', 'Checks whether a value belongs to a result set'],
            ['Typical use', 'Relationship existence checks', 'Membership checks'],
            ['NULL considerations', 'Usually easier to reason about for existence', 'NOT IN can produce surprising results when NULL is present'],
            ['Optimizer behavior', 'Depends on RDBMS and query', 'Depends on RDBMS and query'],
          ],
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    c.customer_id,
    c.name
FROM customers AS c
WHERE EXISTS (
    SELECT 1
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
);`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'CTEs and Performance',
          text: 'A CTE improves query organization, but it is not automatically a performance optimization. Materialization and optimization behavior depends on the database system and query.',
        },
      ],
    },

    {
      id: 'window-functions',
      title: '7. Window Functions',
      summary:
        'Perform calculations across related rows without collapsing the result set using ranking, navigation, and analytic functions.',
      content: [
        {
          type: 'paragraph',
          text: 'Window functions calculate values across a set of rows related to the current row while keeping individual rows in the result. They are widely used for rankings, running totals, comparisons with previous or next rows, and analytics.',
        },
        {
          type: 'subheading',
          text: 'ROW_NUMBER',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    employee_id,
    employee_name,
    department_id,
    salary,
    ROW_NUMBER() OVER (
        PARTITION BY department_id
        ORDER BY salary DESC
    ) AS row_number
FROM employees;`,
        },
        {
          type: 'subheading',
          text: 'RANK vs DENSE_RANK',
        },
        {
          type: 'table',
          headers: ['Function', 'Behavior with Ties', 'Example Ranks'],
          rows: [
            ['ROW_NUMBER', 'Always assigns unique sequential numbers', '1, 2, 3, 4'],
            ['RANK', 'Leaves gaps after ties', '1, 2, 2, 4'],
            ['DENSE_RANK', 'Does not leave gaps after ties', '1, 2, 2, 3'],
          ],
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    employee_name,
    salary,
    RANK() OVER (
        ORDER BY salary DESC
    ) AS salary_rank,
    DENSE_RANK() OVER (
        ORDER BY salary DESC
    ) AS dense_salary_rank
FROM employees;`,
        },
        {
          type: 'subheading',
          text: 'LAG and LEAD',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    employee_id,
    employee_name,
    salary,
    LAG(salary)  OVER (ORDER BY employee_id) AS previous_salary,
    LEAD(salary) OVER (ORDER BY employee_id) AS next_salary
FROM employees;`,
        },
        {
          type: 'subheading',
          text: 'Running Total',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    order_date,
    amount,
    SUM(amount) OVER (
        ORDER BY order_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total
FROM orders;`,
        },
        {
          type: 'subheading',
          text: 'Top N per Group',
        },
        {
          type: 'code',
          language: 'sql',
          code: `WITH ranked_employees AS (
    SELECT
        employee_id,
        employee_name,
        department_id,
        salary,
        ROW_NUMBER() OVER (
            PARTITION BY department_id
            ORDER BY salary DESC
        ) AS row_num
    FROM employees
)
SELECT
    employee_id,
    employee_name,
    department_id,
    salary
FROM ranked_employees
WHERE row_num <= 3;`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Window Function Advantage',
          text: 'Unlike GROUP BY, window functions preserve the detail rows while adding calculated values. This makes them especially useful for reporting and analytical queries.',
        },
      ],
    },

    {
      id: 'indexes-query-optimization',
      title: '8. Indexes & Query Optimization',
      summary:
        'Understand B-Tree indexes, composite indexes, EXPLAIN plans, indexing strategy, and common query optimization techniques.',
      content: [
        {
          type: 'paragraph',
          text: 'An index is a database structure that can accelerate data retrieval by allowing the database engine to locate qualifying rows without scanning every table row. Indexes improve reads in appropriate workloads but consume storage and add maintenance cost to INSERT, UPDATE, and DELETE operations.',
        },
        {
          type: 'heading',
          text: 'B-Tree Index',
        },
        {
          type: 'paragraph',
          text: 'B-Tree indexes are a common general-purpose index structure for equality, range, and ordered queries. Exact implementation details vary between database systems.',
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE INDEX idx_employees_department
    ON employees(department_id);

SELECT
    employee_id,
    employee_name
FROM employees
WHERE department_id = 10;`,
        },
        {
          type: 'subheading',
          text: 'Unique Index',
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE UNIQUE INDEX idx_users_email
    ON users(email);`,
        },
        {
          type: 'subheading',
          text: 'Composite Index',
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE INDEX idx_orders_customer_date
    ON orders(customer_id, order_date);

SELECT
    order_id,
    order_date,
    amount
FROM orders
WHERE customer_id = 101
ORDER BY order_date DESC;`,
        },
        {
          type: 'paragraph',
          text: 'Column order matters in a composite index. An index on (customer_id, order_date) is generally useful for queries filtering by customer_id and can also support appropriate ordering or filtering involving the leading column. Exact optimizer behavior depends on the database.',
        },
        {
          type: 'subheading',
          text: 'EXPLAIN',
        },
        {
          type: 'code',
          language: 'sql',
          code: `EXPLAIN
SELECT
    employee_id,
    employee_name
FROM employees
WHERE department_id = 10;`,
        },
        {
          type: 'subheading',
          text: 'When to Index',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Columns frequently used in selective WHERE conditions.',
            'Columns frequently used in JOIN conditions.',
            'Columns used for important ORDER BY operations when the index can help.',
            'Columns that enforce UNIQUE constraints.',
            'Composite indexes matching important multi-column query patterns.',
          ],
        },
        {
          type: 'subheading',
          text: 'When Not to Add an Index',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Do not index every column automatically.',
            'Avoid redundant indexes that provide no additional value.',
            'Be cautious with indexes on very small tables.',
            'Consider write-heavy workloads because indexes increase maintenance work.',
            'Low-selectivity columns may not benefit much from an ordinary index depending on the query and optimizer.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Measure Before Optimizing',
          text: 'Use EXPLAIN or the database-specific execution-plan tools to understand actual query behavior. An index that appears useful theoretically may not improve a real workload.',
        },
      ],
    },

    {
      id: 'database-normalization',
      title: '9. Database Normalization',
      summary:
        'Understand 1NF, 2NF, and 3NF and how normalization reduces redundancy and update anomalies.',
      content: [
        {
          type: 'paragraph',
          text: 'Database normalization is a systematic approach to organizing relational data to reduce unnecessary redundancy and prevent insertion, update, and deletion anomalies. The common introductory levels are First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF).',
        },
        {
          type: 'heading',
          text: '1NF — First Normal Form',
        },
        {
          type: 'paragraph',
          text: 'A table satisfies the basic idea of 1NF when each column contains atomic values rather than repeating groups or lists of values inside a single relational field.',
        },
        {
          type: 'table',
          headers: ['Student ID', 'Student Name', 'Courses'],
          rows: [
            ['1', 'Alex', 'SQL, Python, React'],
            ['2', 'Sam', 'SQL, Java'],
          ],
        },
        {
          type: 'paragraph',
          text: 'A normalized design separates students and courses into related tables.',
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE TABLE students (
    student_id   INT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL
);

CREATE TABLE courses (
    course_id   INT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL
);

CREATE TABLE student_courses (
    student_id INT,
    course_id  INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id)  REFERENCES courses(course_id)
);`,
        },
        {
          type: 'heading',
          text: '2NF — Second Normal Form',
        },
        {
          type: 'paragraph',
          text: 'For a table to satisfy 2NF, it should first satisfy 1NF and every non-key attribute should depend on the whole candidate key rather than only part of a composite key.',
        },
        {
          type: 'table',
          headers: ['Student ID', 'Course ID', 'Student Name', 'Course Name', 'Grade'],
          rows: [
            ['1', '101', 'Alex', 'SQL', 'A'],
            ['1', '102', 'Alex', 'Python', 'B'],
            ['2', '101', 'Sam', 'SQL', 'A'],
          ],
        },
        {
          type: 'paragraph',
          text: 'Student Name depends only on Student ID, and Course Name depends only on Course ID. Separating those attributes removes partial dependencies from the enrollment table.',
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE TABLE enrollments (
    student_id INT,
    course_id  INT,
    grade      CHAR(2),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id)  REFERENCES courses(course_id)
);`,
        },
        {
          type: 'heading',
          text: '3NF — Third Normal Form',
        },
        {
          type: 'paragraph',
          text: 'A table satisfies 3NF when it is in 2NF and non-key attributes do not depend transitively on another non-key attribute. In simple terms, non-key attributes should depend on the key, the whole key, and nothing but the key.',
        },
        {
          type: 'table',
          headers: ['Employee ID', 'Employee Name', 'Department ID', 'Department Name'],
          rows: [
            ['101', 'Alex', '10', 'Engineering'],
            ['102', 'Sam', '20', 'Sales'],
          ],
        },
        {
          type: 'paragraph',
          text: 'Department Name depends on Department ID rather than directly on Employee ID, so the department information should be moved to a separate table.',
        },
        {
          type: 'code',
          language: 'sql',
          code: `CREATE TABLE departments (
    department_id   INT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    employee_id   INT PRIMARY KEY,
    employee_name VARCHAR(100) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);`,
        },
        {
          type: 'table',
          headers: ['Normal Form', 'Main Requirement'],
          rows: [
            ['1NF', 'Atomic values and no repeating groups'],
            ['2NF', '1NF + no partial dependency on a composite key'],
            ['3NF', '2NF + no transitive dependency among non-key attributes'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Normalization Trade-off',
          text: 'Normalization improves consistency and reduces redundancy, but highly normalized systems may require more joins. In some workloads, controlled denormalization can be used for performance or reporting after measuring the actual requirements.',
        },
      ],
    },

    {
      id: 'acid-transactions',
      title: '10. ACID Properties & Transactions',
      summary:
        'Understand transactions, ACID guarantees, COMMIT, ROLLBACK, and transaction isolation levels.',
      content: [
        {
          type: 'paragraph',
          text: "A database transaction is a logical unit of work containing one or more operations. ACID describes four important properties that help relational databases provide reliable transaction processing: Atomicity, Consistency, Isolation, and Durability.",
        },
        {
          type: 'heading',
          text: 'ACID Properties',
        },
        {
          type: 'table',
          headers: ['Property', 'Meaning', 'Example'],
          rows: [
            [
              'Atomicity',
              'All operations in a transaction succeed or the transaction is rolled back',
              'Debit and credit in a bank transfer',
            ],
            [
              'Consistency',
              'A committed transaction preserves defined database rules',
              'Foreign-key and CHECK constraints remain valid',
            ],
            [
              'Isolation',
              "Concurrent transactions are controlled according to the isolation level",
              "One transaction should not improperly observe another transaction's intermediate state",
            ],
            [
              'Durability',
              'Committed changes survive an appropriate system failure',
              'Committed order remains after a database restart',
            ],
          ],
        },
        {
          type: 'subheading',
          text: 'BEGIN, COMMIT, ROLLBACK',
        },
        {
          type: 'code',
          language: 'sql',
          code: `BEGIN;

UPDATE accounts
SET balance = balance - 1000
WHERE account_id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE account_id = 2;

COMMIT;`,
        },
        {
          type: 'subheading',
          text: 'Rollback on Failure',
        },
        {
          type: 'code',
          language: 'sql',
          code: `BEGIN;

UPDATE accounts
SET balance = balance - 1000
WHERE account_id = 1;

-- If validation fails or another error occurs:
ROLLBACK;`,
        },
        {
          type: 'subheading',
          text: 'Isolation Levels',
        },
        {
          type: 'table',
          headers: ['Isolation Level', 'General Concept', 'Possible Anomalies / Notes'],
          rows: [
            [
              'Read Uncommitted',
              'Transactions may read data before it is committed',
              'Dirty reads may occur',
            ],
            [
              'Read Committed',
              'Reads generally see committed data',
              'Non-repeatable reads may occur',
            ],
            [
              'Repeatable Read',
              'Rows read by a transaction receive stronger repeatability guarantees',
              'Exact behavior varies by RDBMS; phantom behavior also varies',
            ],
            [
              'Serializable',
              'Provides the strongest standard isolation semantics',
              'Highest concurrency restrictions or overhead among standard levels',
            ],
          ],
        },
        {
          type: 'subheading',
          text: 'Transaction Example',
        },
        {
          type: 'code',
          language: 'sql',
          code: `BEGIN;

INSERT INTO orders (order_id, customer_id, order_date)
VALUES (5001, 101, CURRENT_DATE);

UPDATE inventory
SET stock = stock - 1
WHERE product_id = 10
  AND stock > 0;

-- Application verifies that the update affected a row.
COMMIT;`,
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Transaction Boundaries',
          text: 'A transaction should be kept focused and reasonably short. Long-running transactions can hold locks or snapshots longer than necessary and may increase contention or resource usage.',
        },
      ],
    },

    {
      id: 'sql-best-practices',
      title: '11. SQL Best Practices',
      summary:
        'Write secure, maintainable, and efficient SQL for production applications.',
      content: [
        {
          type: 'paragraph',
          text: 'Production SQL should be designed around correctness, security, maintainability, and measured performance. Query structure, indexes, constraints, transactions, and application-level access patterns should work together.',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Select only the columns the application needs instead of using SELECT * everywhere.',
            'Use parameterized queries or prepared statements to prevent SQL injection.',
            'Use transactions when multiple related changes must succeed or fail together.',
            'Add indexes based on actual query patterns and workload measurements.',
            'Use foreign keys and constraints to enforce important data integrity rules.',
            'Inspect execution plans for slow or high-impact queries.',
            'Avoid unnecessary joins and repeated database round trips.',
            'Use appropriate data types for stored values.',
            'Keep transactions short where possible.',
            'Use database migrations to manage schema changes consistently.',
            'Use least-privilege database accounts for applications.',
            'Back up production databases and regularly test restoration procedures.',
          ],
        },
        {
          type: 'subheading',
          text: 'Parameterized Query Concept',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    user_id,
    name,
    email
FROM users
WHERE email = :email;`,
        },
        {
          type: 'paragraph',
          text: 'The :email notation represents a named parameter used by many database drivers and libraries. The application should bind the value through the driver rather than constructing SQL by concatenating untrusted input.',
        },
        {
          type: 'subheading',
          text: 'Avoid SELECT * in APIs',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    user_id,
    name,
    email,
    created_at
FROM users
WHERE user_id = :user_id;`,
        },
        {
          type: 'subheading',
          text: 'Find Duplicate Values',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    email,
    COUNT(*) AS duplicate_count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Production Principle',
          text: 'Correctness comes before micro-optimization. First make the query logically correct, then inspect actual workload and execution plans to identify measurable bottlenecks.',
        },
      ],
    },

    {
      id: 'interview-questions',
      title: '12. Interview Questions',
      summary:
        'Frequently asked SQL interview questions covering relational concepts, queries, joins, aggregation, indexing, normalization, and transactions.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is SQL?',
              answer:
                'SQL stands for Structured Query Language. It is used to define, query, manipulate, and control data in relational database systems.',
            },
            {
              question: 'What is an RDBMS?',
              answer:
                'An RDBMS is a Relational Database Management System that stores structured data in related tables and provides mechanisms for querying, constraints, transactions, concurrency, and other database operations.',
            },
            {
              question: 'What is a primary key?',
              answer:
                'A primary key is a column or combination of columns that uniquely identifies each row in a table. It cannot contain NULL values in the normal relational definition.',
            },
            {
              question: 'What is a foreign key?',
              answer:
                'A foreign key is a column or group of columns that references a key in another table. It is commonly used to enforce referential integrity between related records.',
            },
            {
              question:
                'What is the difference between DELETE, TRUNCATE, and DROP?',
              answer:
                'DELETE removes rows and can usually use a WHERE condition. TRUNCATE removes all rows while retaining the table structure. DROP removes the database object itself. Exact transactional and identity-reset behavior varies by RDBMS.',
            },
            {
              question: 'What is the difference between WHERE and HAVING?',
              answer:
                'WHERE filters rows before grouping and aggregation. HAVING filters groups after GROUP BY and aggregate calculations.',
            },
            {
              question: 'What is an INNER JOIN?',
              answer:
                'INNER JOIN returns rows where the join condition matches in both participating tables.',
            },
            {
              question:
                'What is the difference between LEFT JOIN and INNER JOIN?',
              answer:
                'INNER JOIN returns only matching rows. LEFT JOIN returns every row from the left table and matching rows from the right table, using NULL values for missing right-side matches.',
            },
            {
              question: 'What is a self join?',
              answer:
                'A self join joins a table to itself using different aliases. It is useful for hierarchical or relationship data such as employees and their managers.',
            },
            {
              question: 'What is normalization?',
              answer:
                'Normalization organizes relational data to reduce unnecessary redundancy and prevent data anomalies. Common introductory forms include 1NF, 2NF, and 3NF.',
            },
            {
              question: 'What is an index?',
              answer:
                'An index is a data structure maintained by the database to accelerate suitable queries. Indexes can improve reads but require additional storage and maintenance during data modifications.',
            },
            {
              question: 'What is a composite index?',
              answer:
                'A composite index contains multiple columns. Column order is significant because database optimizers generally make the strongest use of the index beginning with its leading columns.',
            },
            {
              question: 'What is a subquery?',
              answer:
                'A subquery is a query nested inside another SQL statement. It can be used in SELECT, FROM, WHERE, HAVING, and other contexts depending on the database.',
            },
            {
              question: 'What is a CTE?',
              answer:
                'A Common Table Expression is a named temporary result defined using WITH. It improves readability and can be referenced by the statement that follows it. Recursive CTEs can also represent hierarchical queries.',
            },
            {
              question: 'What is the difference between UNION and UNION ALL?',
              answer:
                'UNION combines compatible result sets and removes duplicate rows. UNION ALL combines them without duplicate elimination and is generally cheaper when duplicates do not need to be removed.',
            },
            {
              question: 'What is a window function?',
              answer:
                'A window function performs calculations across related rows while retaining individual rows in the result. Examples include ROW_NUMBER, RANK, DENSE_RANK, LAG, and LEAD.',
            },
            {
              question: 'What is ACID?',
              answer:
                'ACID represents Atomicity, Consistency, Isolation, and Durability, four properties associated with reliable transaction processing in relational database systems.',
            },
            {
              question: 'What is a transaction?',
              answer:
                'A transaction is a logical unit of database work. It can contain multiple operations and is typically completed with COMMIT or undone with ROLLBACK.',
            },
            {
              question: 'What is a correlated subquery?',
              answer:
                'A correlated subquery references values from the outer query. This creates a dependency between the inner and outer query expressions.',
            },
            {
              question: 'What is EXPLAIN used for?',
              answer:
                'EXPLAIN or the database-specific execution-plan command shows how the database intends to execute a query. It helps identify scans, joins, index usage, estimated costs, and other optimization information.',
            },
          ],
        },
        {
          type: 'subheading',
          text: 'Common Interview Query: Second Highest Salary',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);`,
        },
        {
          type: 'subheading',
          text: 'Common Interview Query: Employees Without a Department',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    e.employee_id,
    e.employee_name
FROM employees AS e
LEFT JOIN departments AS d
    ON e.department_id = d.department_id
WHERE d.department_id IS NULL;`,
        },
        {
          type: 'subheading',
          text: 'Common Interview Query: Duplicate Emails',
        },
        {
          type: 'code',
          language: 'sql',
          code: `SELECT
    email,
    COUNT(*) AS count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Interview Tip',
          text: 'For SQL interviews, practice writing queries without relying only on memorized syntax. Be prepared to explain joins, grouping, NULL behavior, indexes, execution plans, normalization, and transaction concepts using small examples.',
        },
      ],
    },
  ],
};

export default sqlContent;
