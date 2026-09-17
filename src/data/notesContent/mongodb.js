export const mongodbContent = {
  id: 'mongodb',
  slug: 'mongodb',
  title: 'MongoDB',
  subtitle: 'Complete NoSQL Database Guide & Reference',
  category: 'Database',
  description:
    'Comprehensive MongoDB guide covering NoSQL concepts, databases and collections, CRUD operations, query operators, indexing, aggregation pipelines, schema design, relationships, transactions, MongoDB Atlas, security, performance optimization, and production best practices.',
  sections: [
    {
      id: 'introduction-to-mongodb',
      title: '1. Introduction to MongoDB',
      summary:
        'Understand NoSQL principles, document model, BSON data types, and how MongoDB structures databases, collections, and documents.',
      content: [
        {
          type: 'paragraph',
          text: 'MongoDB is a document-oriented NoSQL database that stores data in flexible BSON documents. Instead of organizing information primarily into rows and tables like a relational database, MongoDB organizes data into databases, collections, and documents. MongoDB is widely used in modern web applications, APIs, analytics systems, and distributed applications.',
        },
        {
          type: 'heading',
          text: 'MongoDB Data Hierarchy',
        },
        {
          type: 'code',
          language: 'text',
          code: `MongoDB
+-- Database
    +-- Collection
        +-- Document
            +-- Field
            +-- Value`,
        },
        {
          type: 'table',
          headers: ['MongoDB', 'Relational Database Equivalent'],
          rows: [
            ['Database', 'Database'],
            ['Collection', 'Table'],
            ['Document', 'Row / Record'],
            ['Field', 'Column'],
            ['Embedded Document', 'Related nested data'],
            ['ObjectId', 'Identifier / Primary Key concept'],
          ],
        },
        {
          type: 'heading',
          text: 'Example Document',
        },
        {
          type: 'code',
          language: 'json',
          code: `{
  "_id": "64f123456789abcdef123456",
  "name": "Bibhu",
  "age": 21,
  "role": "MERN Developer",
  "skills": ["React", "Node.js", "MongoDB"],
  "address": {
    "city": "Bhubaneswar",
    "state": "Odisha"
  }
}`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'BSON',
          text: 'MongoDB stores documents internally as BSON, a binary representation that extends JSON with additional data types such as ObjectId, Date, Decimal128, and binary data.',
        },
      ],
    },

    {
      id: 'mongodb-database-collections',
      title: '2. Databases & Collections',
      summary:
        'Manage databases and collections with commands to switch contexts, create collections, and manage database resources.',
      content: [
        {
          type: 'paragraph',
          text: 'A MongoDB database contains collections, and collections contain documents. MongoDB collections are similar to tables in relational databases, but documents within a collection can have different structures.',
        },
        {
          type: 'heading',
          text: 'Create or Switch Database',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `use ecommerce

db.createCollection("users")

show dbs

show collections`,
        },
        {
          type: 'heading',
          text: 'Drop Database or Collection',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.users.drop()

db.dropDatabase()`,
        },
        {
          type: 'table',
          headers: ['Command', 'Purpose'],
          rows: [
            ['use databaseName', 'Switch to or create a database context'],
            ['show dbs', 'List databases with stored data'],
            ['show collections', 'List collections in the current database'],
            ['db.createCollection()', 'Explicitly create a collection'],
            ['db.collection.drop()', 'Delete a collection'],
            ['db.dropDatabase()', 'Delete the current database'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Database Creation',
          text: 'A database generally becomes visible after data is stored in it. Simply switching to a new database name does not necessarily make an empty database appear in database listings.',
        },
      ],
    },

    {
      id: 'mongodb-crud',
      title: '3. CRUD Operations',
      summary:
        'Perform basic and bulk data operations using insertOne, insertMany, find, updateOne, updateMany, deleteOne, and deleteMany.',
      content: [
        {
          type: 'paragraph',
          text: 'CRUD stands for Create, Read, Update, and Delete. These four operations form the foundation of working with MongoDB documents.',
        },
        {
          type: 'heading',
          text: 'Create Documents',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.users.insertOne({
  name: "Rahul",
  age: 24,
  role: "Developer"
})

db.users.insertMany([
  {
    name: "Anita",
    age: 25,
    role: "Designer"
  },
  {
    name: "Amit",
    age: 27,
    role: "Manager"
  }
])`,
        },
        {
          type: 'heading',
          text: 'Read Documents',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.users.find()

db.users.findOne({
  name: "Rahul"
})

db.users.find({
  age: { $gte: 25 }
})`,
        },
        {
          type: 'heading',
          text: 'Update Documents',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.users.updateOne(
  { name: "Rahul" },
  {
    $set: {
      age: 25,
      role: "Senior Developer"
    }
  }
)

db.users.updateMany(
  { role: "Developer" },
  {
    $set: {
      active: true
    }
  }
)`,
        },
        {
          type: 'heading',
          text: 'Delete Documents',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.users.deleteOne({
  name: "Rahul"
})

db.users.deleteMany({
  active: false
})`,
        },
        {
          type: 'table',
          headers: ['Operation', 'MongoDB Method'],
          rows: [
            ['Create one', 'insertOne()'],
            ['Create many', 'insertMany()'],
            ['Read many', 'find()'],
            ['Read one', 'findOne()'],
            ['Update one', 'updateOne()'],
            ['Update many', 'updateMany()'],
            ['Delete one', 'deleteOne()'],
            ['Delete many', 'deleteMany()'],
          ],
        },
      ],
    },

    {
      id: 'mongodb-query-operators',
      title: '4. Query & Comparison Operators',
      summary:
        'Filter documents using comparison ($eq, $gt, $lt, $in) and logical ($and, $or, $nor, $not) query operators.',
      content: [
        {
          type: 'paragraph',
          text: 'MongoDB query operators allow you to filter documents based on values, ranges, arrays, existence, data types, and logical conditions.',
        },
        {
          type: 'heading',
          text: 'Comparison Operators',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Equal
db.products.find({
  price: { $eq: 100 }
})

// Greater than
db.products.find({
  price: { $gt: 100 }
})

// Greater than or equal
db.products.find({
  price: { $gte: 100 }
})

// Less than
db.products.find({
  price: { $lt: 500 }
})

// Less than or equal
db.products.find({
  price: { $lte: 500 }
})

// Not equal
db.products.find({
  category: { $ne: "Electronics" }
})

// In
db.products.find({
  category: {
    $in: ["Electronics", "Books"]
  }
})

// Not in
db.products.find({
  category: {
    $nin: ["Electronics", "Books"]
  }
})`,
        },
        {
          type: 'heading',
          text: 'Logical Operators',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.users.find({
  $and: [
    { age: { $gte: 18 } },
    { active: true }
  ]
})

db.users.find({
  $or: [
    { role: "Admin" },
    { role: "Manager" }
  ]
})

db.users.find({
  $nor: [
    { active: false },
    { blocked: true }
  ]
})

db.users.find({
  $not: {
    $eq: "Guest"
  }
})`,
        },
        {
          type: 'table',
          headers: ['Operator', 'Purpose'],
          rows: [
            ['$eq', 'Equals'],
            ['$ne', 'Not equal'],
            ['$gt', 'Greater than'],
            ['$gte', 'Greater than or equal'],
            ['$lt', 'Less than'],
            ['$lte', 'Less than or equal'],
            ['$in', 'Matches any value in an array'],
            ['$nin', 'Does not match values in an array'],
            ['$and', 'All conditions must match'],
            ['$or', 'At least one condition must match'],
            ['$nor', 'None of the conditions should match'],
            ['$not', 'Negates a condition'],
          ],
        },
      ],
    },

    {
      id: 'mongodb-update-array-operators',
      title: '5. Update & Array Operators',
      summary:
        'Modify fields and manipulate arrays efficiently using $set, $unset, $inc, $push, $addToSet, $pull, and $pop.',
      content: [
        {
          type: 'paragraph',
          text: 'MongoDB provides update operators for modifying fields, incrementing numeric values, removing fields, and manipulating arrays without replacing the complete document.',
        },
        {
          type: 'heading',
          text: 'Common Update Operators',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Set a value
db.users.updateOne(
  { name: "Bibhu" },
  {
    $set: {
      role: "MERN Developer"
    }
  }
)

// Remove a field
db.users.updateOne(
  { name: "Bibhu" },
  {
    $unset: {
      temporaryField: ""
    }
  }
)

// Increment
db.products.updateOne(
  { name: "Laptop" },
  {
    $inc: {
      stock: 5
    }
  }
)

// Rename field
db.users.updateMany(
  {},
  {
    $rename: {
      "username": "userName"
    }
  }
)`,
        },
        {
          type: 'heading',
          text: 'Array Operators',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Add one item
db.users.updateOne(
  { name: "Bibhu" },
  {
    $push: {
      skills: "Express"
    }
  }
)

// Add multiple items
db.users.updateOne(
  { name: "Bibhu" },
  {
    $push: {
      skills: {
        $each: ["JWT", "Mongoose"]
      }
    }
  }
)

// Add only if not already present
db.users.updateOne(
  { name: "Bibhu" },
  {
    $addToSet: {
      skills: "MongoDB"
    }
  }
)

// Remove matching values
db.users.updateOne(
  { name: "Bibhu" },
  {
    $pull: {
      skills: "PHP"
    }
  }
)

// Remove first array item
db.users.updateOne(
  { name: "Bibhu" },
  {
    $pop: {
      skills: -1
    }
  }
)

// Remove last array item
db.users.updateOne(
  { name: "Bibhu" },
  {
    $pop: {
      skills: 1
    }
  }
)`,
        },
        {
          type: 'table',
          headers: ['Operator', 'Purpose'],
          rows: [
            ['$set', 'Set or replace a field value'],
            ['$unset', 'Remove a field'],
            ['$inc', 'Increment or decrement a numeric value'],
            ['$mul', 'Multiply a numeric value'],
            ['$rename', 'Rename a field'],
            ['$push', 'Add an item to an array'],
            ['$addToSet', 'Add an item only if it is not already present'],
            ['$pull', 'Remove matching array items'],
            ['$pop', 'Remove the first or last array item'],
            ['$each', 'Used with array update operations for multiple values'],
          ],
        },
      ],
    },

    {
      id: 'mongodb-projection-sorting-pagination',
      title: '6. Projection, Sorting & Pagination',
      summary:
        'Control returned fields using projection, sort documents, and construct efficient page navigation using limit and skip.',
      content: [
        {
          type: 'paragraph',
          text: 'Projection controls which fields are returned. Sorting determines document order, while limit and skip are commonly used for pagination. These operations are important for APIs because returning only required data can reduce unnecessary processing and network transfer.',
        },
        {
          type: 'heading',
          text: 'Projection',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Include selected fields
db.users.find(
  {},
  {
    name: 1,
    email: 1
  }
)

// Exclude selected fields
db.users.find(
  {},
  {
    password: 0
  }
)`,
        },
        {
          type: 'heading',
          text: 'Sorting',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Ascending
db.products.find().sort({
  price: 1
})

// Descending
db.products.find().sort({
  price: -1
})`,
        },
        {
          type: 'heading',
          text: 'Pagination',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const page = 2;
const limit = 10;
const skip = (page - 1) * limit;

db.products
  .find()
  .skip(skip)
  .limit(limit);`,
        },
        {
          type: 'table',
          headers: ['Method', 'Purpose'],
          rows: [
            ['find()', 'Retrieve matching documents'],
            ['sort()', 'Order results'],
            ['limit()', 'Restrict number of returned documents'],
            ['skip()', 'Skip a number of documents'],
            ['projection', 'Select or exclude returned fields'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Pagination Tip',
          text: 'For very large datasets, offset-based skip pagination can become inefficient. Cursor-based or range-based pagination using an indexed field is often more scalable.',
        },
      ],
    },

    {
      id: 'mongodb-aggregation',
      title: '7. Aggregation Pipeline',
      summary:
        'Process data pipelines using stages such as $match, $group, $project, $sort, $unwind, and $lookup.',
      content: [
        {
          type: 'paragraph',
          text: 'The MongoDB aggregation framework processes documents through a sequence of stages called a pipeline. It is useful for filtering, transforming, grouping, joining, calculating values, and generating reports.',
        },
        {
          type: 'heading',
          text: 'Basic Aggregation',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.orders.aggregate([
  {
    $match: {
      status: "completed"
    }
  },
  {
    $group: {
      _id: "$customerId",
      totalSpent: {
        $sum: "$amount"
      },
      orderCount: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalSpent: -1
    }
  }
])`,
        },
        {
          type: 'heading',
          text: '$project Stage',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.users.aggregate([
  {
    $project: {
      name: 1,
      email: 1,
      fullName: {
        $concat: ["$firstName", " ", "$lastName"]
      }
    }
  }
])`,
        },
        {
          type: 'heading',
          text: '$unwind Stage',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.orders.aggregate([
  {
    $unwind: "$items"
  },
  {
    $project: {
      orderId: "$_id",
      product: "$items.product",
      quantity: "$items.quantity"
    }
  }
])`,
        },
        {
          type: 'table',
          headers: ['Stage', 'Purpose'],
          rows: [
            ['$match', 'Filter documents'],
            ['$project', 'Select or transform fields'],
            ['$group', 'Group documents and calculate values'],
            ['$sort', 'Sort documents'],
            ['$limit', 'Limit results'],
            ['$skip', 'Skip results'],
            ['$unwind', 'Deconstruct an array'],
            ['$lookup', 'Perform a join-like operation'],
            ['$addFields', 'Add calculated fields'],
            ['$count', 'Count documents'],
            ['$facet', 'Run multiple pipelines on the same input'],
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Aggregation Principle',
          text: 'Place highly selective filtering stages such as $match early when appropriate, and use indexes that support the query so the database can reduce the amount of data processed.',
        },
      ],
    },

    {
      id: 'mongodb-lookup-and-relationships',
      title: '8. Relationships & $lookup',
      summary:
        'Model 1:1, 1:N, and N:M data relationships using embedding or referencing, and perform joins with $lookup.',
      content: [
        {
          type: 'paragraph',
          text: 'MongoDB supports different approaches for representing relationships. Related information can be embedded inside documents or stored in separate collections and connected using references. The appropriate design depends on access patterns, data size, update frequency, and relationship complexity.',
        },
        {
          type: 'heading',
          text: 'Embedded Document',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `{
  name: "Bibhu",
  address: {
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India"
  }
}`,
        },
        {
          type: 'heading',
          text: 'Referenced Documents',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// users collection document
{
  _id: ObjectId("user123"),
  name: "Bibhu"
}

// orders collection document
{
  _id: ObjectId("order123"),
  userId: ObjectId("user123"),
  total: 2500
}`,
        },
        {
          type: 'heading',
          text: '$lookup Example',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  {
    $unwind: "$user"
  }
])`,
        },
        {
          type: 'table',
          headers: ['Approach', 'Advantages', 'Considerations'],
          rows: [
            ['Embedding', 'Simple reads and related data together', 'Document size and update patterns matter'],
            ['References', 'Useful for reusable or independently managed data', 'May require additional queries or aggregation'],
            ['$lookup', 'Join-like aggregation capability', 'Can add processing cost and complexity'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Schema Design Rule',
          text: 'MongoDB schema design should be driven by how the application reads and writes data. Do not automatically normalize every relationship or embed everything.',
        },
      ],
    },

    {
      id: 'mongodb-indexing',
      title: '9. Indexes & Query Optimization',
      summary:
        'Improve query performance using single field, compound, unique, multikey, and text indexes, and analyze performance with explain().',
      content: [
        {
          type: 'paragraph',
          text: 'Indexes allow MongoDB to locate matching documents more efficiently than scanning every document in a collection. Indexes can significantly improve read performance, but they consume storage and add overhead to write operations.',
        },
        {
          type: 'heading',
          text: 'Create an Index',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.users.createIndex({
  email: 1
})

db.products.createIndex({
  category: 1,
  price: -1
})

db.users.createIndex(
  { email: 1 },
  { unique: true }
)

db.users.getIndexes()`,
        },
        {
          type: 'heading',
          text: 'Explain a Query',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.users
  .find({
    email: "user@example.com"
  })
  .explain("executionStats")`,
        },
        {
          type: 'table',
          headers: ['Index Type', 'Typical Use'],
          rows: [
            ['Single Field', 'Queries or sorting on one field'],
            ['Compound', 'Queries involving multiple fields'],
            ['Unique', 'Enforce uniqueness'],
            ['Multikey', 'Index array fields'],
            ['Text', 'Text-search use cases'],
            ['TTL', 'Automatically expire documents based on time'],
          ],
        },
        {
          type: 'heading',
          text: 'Indexing Guidelines',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Index fields frequently used in selective queries.',
            'Consider indexes that support common sort operations.',
            'Use compound indexes based on real query patterns.',
            'Avoid creating indexes for every field.',
            'Review query plans when diagnosing slow queries.',
            'Monitor index size and write overhead.',
            'Use production workload evidence rather than assumptions when designing indexes.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Too Many Indexes',
          text: 'Indexes are not free. Every additional index can consume memory and storage and may increase the work required for inserts, updates, and deletes.',
        },
      ],
    },

    {
      id: 'mongodb-schema-design',
      title: '10. Schema Design & Data Modeling',
      summary:
        'Architect effective document models based on access patterns, document size limits, and schema validation rules.',
      content: [
        {
          type: 'paragraph',
          text: 'MongoDB uses flexible document schemas, but flexible does not mean unplanned. Production applications still need deliberate data modeling. The schema should reflect application access patterns, data relationships, document size, consistency requirements, and expected growth.',
        },
        {
          type: 'heading',
          text: 'Example E-Commerce Product Schema',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `{
  _id: ObjectId("..."),
  name: "Mechanical Keyboard",
  slug: "mechanical-keyboard",
  price: 2999,
  category: "Accessories",

  specifications: {
    switchType: "Mechanical",
    layout: "Full Size"
  },

  images: [
    "/images/keyboard-1.jpg",
    "/images/keyboard-2.jpg"
  ],

  inventory: {
    stock: 50,
    warehouse: "BBSR"
  },

  createdAt: ISODate("2026-01-10T00:00:00Z"),
  updatedAt: ISODate("2026-01-10T00:00:00Z")
}`,
        },
        {
          type: 'heading',
          text: 'Embedding vs Referencing',
        },
        {
          type: 'table',
          headers: ['Use Embedding When', 'Use References When'],
          rows: [
            ['Related data is commonly read together', 'Related data is large or independently accessed'],
            ['Data has a natural parent-child relationship', 'The related data is shared by many documents'],
            ['The embedded data remains reasonably bounded', 'The relationship is many-to-many or highly dynamic'],
            ['Atomic document-level updates are useful', 'Independent lifecycle management is needed'],
          ],
        },
        {
          type: 'heading',
          text: 'Schema Validation',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: {
          bsonType: "string"
        },
        email: {
          bsonType: "string"
        }
      }
    }
  }
})`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Model for Your Queries',
          text: 'Start schema design by identifying the important application queries and write patterns. Then choose embedding, referencing, indexes, and document structures that support those operations.',
        },
      ],
    },

    {
      id: 'mongodb-transactions',
      title: '11. Transactions & Atomicity',
      summary:
        'Execute multi-document ACID transactions using sessions when multi-operation consistency is required.',
      content: [
        {
          type: 'paragraph',
          text: 'MongoDB provides atomicity at the single-document level and also supports multi-document transactions. Transactions are useful when multiple database operations must succeed or fail together.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const session = db.getMongo().startSession();

session.startTransaction();

try {
  const users = session.getDatabase("shop").users;
  const orders = session.getDatabase("shop").orders;

  users.updateOne(
    { _id: ObjectId("user123") },
    {
      $inc: {
        balance: -500
      }
    },
    { session }
  );

  orders.insertOne(
    {
      userId: ObjectId("user123"),
      amount: 500,
      status: "paid"
    },
    { session }
  );

  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}`,
        },
        {
          type: 'heading',
          text: 'Transaction Flow',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Start a database session.',
            'Start a transaction.',
            'Perform the related operations using the session.',
            'Commit the transaction if all operations succeed.',
            'Abort the transaction if an error occurs.',
            'End the session.',
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Use Transactions Carefully',
          text: 'Transactions provide strong consistency for multi-document operations but can introduce additional overhead. If the data can be modeled so an operation is safely atomic within one document, that approach can be simpler.',
        },
      ],
    },

    {
      id: 'mongodb-nodejs-mongoose',
      title: '12. MongoDB with Node.js & Mongoose',
      summary:
        'Integrate MongoDB with Node.js applications using Mongoose schemas, models, connections, and query operations.',
      content: [
        {
          type: 'paragraph',
          text: 'Mongoose is an ODM (Object Data Modeling) library commonly used with MongoDB and Node.js applications. It provides schemas, models, validation, middleware, query helpers, and other application-level features.',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    age: {
      type: Number,
      min: 18
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

export default User;`,
        },
        {
          type: 'heading',
          text: 'Database Connection',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `import mongoose from "mongoose";

await mongoose.connect(process.env.MONGODB_URI);

console.log("MongoDB connected");`,
        },
        {
          type: 'heading',
          text: 'CRUD with Mongoose',
        },
        {
          type: 'code',
          language: 'javascript',
          code: `const user = await User.create({
  name: "Bibhu",
  email: "bibhu@example.com",
  age: 21
});

const users = await User.find({
  age: { $gte: 18 }
}).sort({
  createdAt: -1
});

const updatedUser = await User.findByIdAndUpdate(
  user._id,
  {
    $set: {
      name: "Bibhu Prasad"
    }
  },
  {
    new: true,
    runValidators: true
  }
);

await User.findByIdAndDelete(user._id);`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Mongoose vs MongoDB',
          text: 'MongoDB is the database system. Mongoose is an application library that provides an ODM layer for Node.js applications. You can use MongoDB without Mongoose.',
        },
      ],
    },

    {
      id: 'mongodb-security',
      title: '13. MongoDB Security',
      summary:
        'Secure MongoDB deployments using authentication, RBAC authorization, network restriction, TLS encryption, and secret management.',
      content: [
        {
          type: 'paragraph',
          text: 'Database security is essential in production. MongoDB deployments should use authentication, authorization, network controls, secure credentials, encrypted connections, careful data exposure, and appropriate operational monitoring.',
        },
        {
          type: 'heading',
          text: 'Application Security Practices',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Never hard-code database passwords or connection strings in source code.',
            'Store secrets in secure environment configuration or a dedicated secrets-management system.',
            'Use least-privilege database users.',
            'Use encrypted connections where required by the deployment.',
            'Restrict database network access.',
            'Validate and sanitize application input.',
            'Never return sensitive fields such as password hashes unnecessarily.',
            'Keep MongoDB and related dependencies updated according to your maintenance policy.',
            'Monitor authentication and database activity.',
            'Use backups and test the recovery process.',
          ],
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// .env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>

// server.js
import "dotenv/config";
import mongoose from "mongoose";

await mongoose.connect(process.env.MONGODB_URI);`,
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Never Commit Secrets',
          text: 'Do not commit real MongoDB credentials, API keys, production connection strings, or other secrets to Git repositories. If a secret is accidentally exposed, rotate or revoke it promptly.',
        },
      ],
    },

    {
      id: 'mongodb-performance-best-practices',
      title: '14. Performance Optimization & Best Practices',
      summary:
        'Optimize throughput and latency using indexes, selective projection, connection pooling, and execution analysis.',
      content: [
        {
          type: 'paragraph',
          text: 'MongoDB performance depends on query design, indexes, schema design, document size, hardware resources, workload patterns, and application architecture. Optimization should be based on measured workload behavior rather than assumptions.',
        },
        {
          type: 'heading',
          text: 'Performance Checklist',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Identify slow or high-frequency queries.',
            'Use explain() to inspect query execution.',
            'Create indexes that support important query patterns.',
            'Return only the fields required by the application.',
            'Avoid unbounded document growth.',
            'Use pagination for large result sets.',
            'Prefer efficient aggregation pipelines.',
            'Review schema design as application access patterns evolve.',
            'Avoid unnecessary database round trips.',
            'Monitor database performance in production.',
            'Use connection pooling appropriately.',
            'Keep database operations asynchronous in Node.js applications.',
            'Design backups and disaster-recovery procedures.',
            'Test performance using realistic data volumes.',
          ],
        },
        {
          type: 'code',
          language: 'javascript',
          code: `// Example: Select only required fields
const users = await User.find(
  { active: true },
  { name: 1, email: 1, role: 1 }
)
.sort({ createdAt: -1 })
.limit(20);`,
        },
        {
          type: 'heading',
          text: 'Production Architecture',
        },
        {
          type: 'code',
          language: 'text',
          code: `Client -> React Frontend -> Node.js / Express API -> Service Layer -> Mongoose / MongoDB Driver -> MongoDB (Indexes / Backups / Security)`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Optimization Principle',
          text: 'Do not optimize based only on intuition. Measure the workload, inspect query plans, identify bottlenecks, make a targeted change, and measure again.',
        },
      ],
    },

    {
      id: 'mongodb-interview-questions',
      title: '15. MongoDB Interview Questions',
      summary:
        'Frequently asked MongoDB technical interview questions covering NoSQL design, BSON, indexing, aggregation, and Mongoose.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is MongoDB?',
              answer:
                'MongoDB is a document-oriented NoSQL database that stores data as BSON documents organized into collections.',
            },
            {
              question: 'What is the difference between MongoDB and SQL databases?',
              answer:
                'Relational databases primarily organize data into tables and rows with relational schemas, while MongoDB stores flexible documents in collections. MongoDB also provides aggregation, indexing, transactions, replication, and other database capabilities.',
            },
            {
              question: 'What is a document in MongoDB?',
              answer:
                'A document is a BSON data structure containing field-value pairs. It is roughly analogous to a record in a relational database.',
            },
            {
              question: 'What is a collection?',
              answer:
                'A collection is a group of MongoDB documents and is broadly comparable to a table in a relational database.',
            },
            {
              question: 'What is BSON?',
              answer:
                'BSON is MongoDB’s binary-encoded document format. It extends JSON-like structures with additional data types and is used internally by MongoDB.',
            },
            {
              question: 'What is ObjectId?',
              answer:
                'ObjectId is a BSON type commonly used as the default identifier for MongoDB documents. It is designed to be unique and contains encoded information related to its generation time.',
            },
            {
              question: 'What is CRUD?',
              answer:
                'CRUD stands for Create, Read, Update, and Delete, representing the fundamental operations used to manage documents.',
            },
            {
              question: 'What is the difference between find() and findOne()?',
              answer:
                'find() returns a cursor for matching documents, while findOne() returns a single matching document or null when no match is found.',
            },
            {
              question: 'What is an index in MongoDB?',
              answer:
                'An index is a data structure that helps MongoDB locate and sort matching documents more efficiently for supported query patterns.',
            },
            {
              question: 'What is a compound index?',
              answer:
                'A compound index contains multiple fields in a defined order and can support queries and sorting involving those fields.',
            },
            {
              question: 'What is aggregation in MongoDB?',
              answer:
                'Aggregation processes documents through stages such as $match, $group, $project, $sort, $unwind, and $lookup to transform and analyze data.',
            },
            {
              question: 'What is the difference between $match and $project?',
              answer:
                '$match filters documents, while $project controls or transforms the fields that continue through the aggregation pipeline.',
            },
            {
              question: 'What does $group do?',
              answer:
                '$group combines documents based on a grouping expression and can calculate values such as sums, averages, minimums, maximums, and counts.',
            },
            {
              question: 'What does $lookup do?',
              answer:
                '$lookup performs a join-like operation between collections within an aggregation pipeline.',
            },
            {
              question: 'What is $unwind?',
              answer:
                '$unwind deconstructs an array field so that each array element can become a separate pipeline document.',
            },
            {
              question: 'What is the difference between embedding and referencing?',
              answer:
                'Embedding stores related data inside a document, while referencing stores related documents separately and connects them through identifiers. The best approach depends on application access patterns and data characteristics.',
            },
            {
              question: 'Does MongoDB support transactions?',
              answer:
                'Yes. MongoDB supports multi-document transactions in supported deployment configurations in addition to atomic operations on individual documents.',
            },
            {
              question: 'What is Mongoose?',
              answer:
                'Mongoose is an ODM library commonly used with MongoDB and Node.js. It provides schemas, models, validation, middleware, and other application-level abstractions.',
            },
            {
              question: 'How can MongoDB queries be optimized?',
              answer:
                'Analyze query patterns, create appropriate indexes, use explain(), return only required fields, design efficient schemas, paginate large datasets, and monitor real workload performance.',
            },
            {
              question: 'What is MongoDB Atlas?',
              answer:
                'MongoDB Atlas is MongoDB’s managed cloud database service that provides hosted database deployments along with operational features such as monitoring, scaling, security controls, and backups depending on the selected configuration.',
            },
          ],
        },
      ],
    },
  ],
};

export default mongodbContent;
