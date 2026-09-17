export const pythonContent = {
  id: 'python',
  slug: 'python',
  title: 'Python',
  subtitle: 'Complete Language Guide & Reference',
  category: 'Programming',
  description:
    'Comprehensive Python language notes: syntax, data structures (lists, tuples, dicts, sets), OOP, list comprehensions, decorators, generators, error handling, and core standard modules.',
  sections: [
    {
      id: 'introduction-to-python',
      title: '1. Introduction to Python',
      summary:
        'Understand Python fundamentals, execution model, dynamic typing, indentation, PEP 8, and the Zen of Python.',
      content: [
        {
          type: 'paragraph',
          text: 'Python is a high-level, general-purpose programming language designed with an emphasis on readability and developer productivity. It supports procedural, object-oriented, functional, and other programming styles. Python code is typically executed by an interpreter, with CPython compiling source code to bytecode before executing it on the Python virtual machine.',
        },
        {
          type: 'heading',
          text: 'Key Characteristics',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'High-level and dynamically typed.',
            'Readable syntax with significant indentation.',
            'Supports object-oriented, procedural, and functional programming.',
            'Large standard library and extensive third-party ecosystem.',
            'Cross-platform and open source.',
            'Automatic memory management through garbage collection and reference counting in CPython.',
            'Used in web development, automation, data science, AI/ML, scripting, testing, and backend development.',
          ],
        },
        {
          type: 'subheading',
          text: 'Basic Python Program',
        },
        {
          type: 'code',
          language: 'python',
          code: `def greet(name):
    return f"Hello, {name}!"

message = greet("Bibhu")
print(message)`,
        },
        {
          type: 'subheading',
          text: 'Dynamic Typing',
        },
        {
          type: 'paragraph',
          text: 'Python variables do not have to be declared with a fixed type. A variable name refers to an object, and the object carries its type. The same variable can later refer to an object of another type.',
        },
        {
          type: 'code',
          language: 'python',
          code: `value = 100
print(type(value))

value = "Python"
print(type(value))

value = [1, 2, 3]
print(type(value))`,
        },
        {
          type: 'subheading',
          text: 'Indentation',
        },
        {
          type: 'paragraph',
          text: 'Indentation is part of Python syntax. Code blocks are normally defined using consistent indentation rather than curly braces. Four spaces are the standard convention.',
        },
        {
          type: 'code',
          language: 'python',
          code: `age = 21

if age >= 18:
    print("Adult")
    if age >= 21:
        print("Eligible")
else:
    print("Minor")`,
        },
        {
          type: 'subheading',
          text: 'PEP 8',
        },
        {
          type: 'paragraph',
          text: 'PEP 8 is the main style guide for Python code. Common recommendations include four spaces for indentation, descriptive names, reasonable line lengths, blank lines between logical sections, and consistent import organization.',
        },
        {
          type: 'subheading',
          text: 'The Zen of Python',
        },
        {
          type: 'paragraph',
          text: 'The Zen of Python is a collection of guiding principles for writing Python code. It can be displayed from an interactive Python session using the built-in import mechanism.',
        },
        {
          type: 'code',
          language: 'python',
          code: `import this`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Python Execution',
          text: 'Python is often described as interpreted, but CPython performs multiple stages: source code is parsed and compiled to bytecode, then the bytecode is executed by the Python virtual machine.',
        },
      ],
    },

    {
      id: 'variables-and-data-types',
      title: '2. Variables & Data Types',
      summary:
        'Learn Python primitive values, dynamic variables, type inspection, and common built-in data types.',
      content: [
        {
          type: 'paragraph',
          text: 'A Python variable is a name bound to an object. Python provides several built-in types for representing numbers, text, Boolean values, absence of a value, collections, and other objects.',
        },
        {
          type: 'heading',
          text: 'Core Data Types',
        },
        {
          type: 'table',
          headers: ['Type', 'Example', 'Description', 'Mutable?'],
          rows: [
            ['int', '42', 'Integer numbers', 'No'],
            ['float', '3.14', 'Floating-point numbers', 'No'],
            ['str', '"Hello"', 'Unicode text', 'No'],
            ['bool', 'True', 'Boolean value', 'No'],
            ['NoneType', 'None', 'Represents absence of a value', 'No'],
            ['list', '[1, 2, 3]', 'Ordered collection', 'Yes'],
            ['tuple', '(1, 2, 3)', 'Immutable ordered collection', 'No'],
            ['dict', '{"name": "Alex"}', 'Key-value mapping', 'Yes'],
            ['set', '{1, 2, 3}', 'Collection of unique values', 'Yes'],
          ],
        },
        {
          type: 'subheading',
          text: 'Variable Assignment',
        },
        {
          type: 'code',
          language: 'python',
          code: `name        = "Alex"
age         = 25
salary      = 45000.50
is_active   = True
middle_name = None

print(name)
print(age)
print(salary)
print(is_active)
print(middle_name)`,
        },
        {
          type: 'subheading',
          text: 'type() and isinstance()',
        },
        {
          type: 'paragraph',
          text: 'Use type() when you need the exact type object. Use isinstance() when checking whether an object is an instance of a type or one of its subclasses.',
        },
        {
          type: 'code',
          language: 'python',
          code: `value = 100

print(type(value))
print(isinstance(value, int))
print(isinstance(value, (int, float)))

text = "Python"
print(isinstance(text, str))`,
        },
        {
          type: 'subheading',
          text: 'Type Conversion',
        },
        {
          type: 'code',
          language: 'python',
          code: `number = int("42")
price  = float("99.50")
text   = str(123)
flag   = bool(1)

print(number)   # 42
print(price)    # 99.5
print(text)     # '123'
print(flag)     # True`,
        },
        {
          type: 'subheading',
          text: 'Multiple Assignment',
        },
        {
          type: 'code',
          language: 'python',
          code: `first, second, third = 10, 20, 30

a = 5
b = 10
a, b = b, a   # swap

print(first, second, third)  # 10 20 30
print(a, b)                  # 10 5`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Dynamic Typing',
          text: 'Dynamic typing does not mean Python has no types. Every object has a type; Python simply determines and enforces object types at runtime instead of requiring variable declarations like many statically typed languages.',
        },
      ],
    },

    {
      id: 'data-structures',
      title: '3. Data Structures',
      summary:
        'Master lists, tuples, dictionaries, and sets along with their methods, operations, and practical use cases.',
      content: [
        {
          type: 'paragraph',
          text: 'Python provides four fundamental built-in collection types commonly used in application development: list, tuple, dict, and set. Choosing the appropriate structure depends on ordering, uniqueness, mutability, and lookup requirements.',
        },
        {
          type: 'heading',
          text: 'Lists',
        },
        {
          type: 'paragraph',
          text: 'Lists are ordered, mutable collections that allow duplicate values. They support indexing, slicing, insertion, deletion, sorting, and iteration.',
        },
        {
          type: 'code',
          language: 'python',
          code: `numbers = [10, 20, 30]

numbers.append(40)
numbers.extend([50, 60])
numbers.insert(0, 5)

numbers.remove(30)
last = numbers.pop()

numbers.sort()
numbers.reverse()

print(numbers)
print(last)`,
        },
        {
          type: 'heading',
          text: 'Tuples',
        },
        {
          type: 'code',
          language: 'python',
          code: `coordinates = (10, 20)

x, y = coordinates

print(x)
print(y)
print(coordinates.count(10))
print(coordinates.index(20))`,
        },
        {
          type: 'heading',
          text: 'Dictionaries',
        },
        {
          type: 'paragraph',
          text: 'Dictionaries store key-value pairs. Keys must be hashable, while values can be objects of almost any type. Dictionaries preserve insertion order in modern Python implementations.',
        },
        {
          type: 'code',
          language: 'python',
          code: `user = {
    "id": 101,
    "name": "Alex",
    "skills": ["Python", "SQL"]
}

print(user["name"])
print(user.get("email", "Not provided"))

user["city"] = "Bhubaneswar"
user.update({"active": True})

removed = user.pop("active")

for key, value in user.items():
    print(key, value)`,
        },
        {
          type: 'heading',
          text: 'Sets',
        },
        {
          type: 'code',
          language: 'python',
          code: `frontend = {"HTML", "CSS", "JavaScript"}
backend  = {"Python", "JavaScript", "SQL"}

print(frontend | backend)   # union
print(frontend & backend)   # intersection
print(frontend - backend)   # difference
print(frontend ^ backend)   # symmetric difference

frontend.add("React")
frontend.discard("CSS")`,
        },
        {
          type: 'heading',
          text: 'Comparison',
        },
        {
          type: 'table',
          headers: ['Structure', 'Ordered', 'Mutable', 'Duplicates', 'Typical Use'],
          rows: [
            ['list', 'Yes', 'Yes', 'Allowed', 'General-purpose sequence'],
            ['tuple', 'Yes', 'No', 'Allowed', 'Fixed records and immutable sequences'],
            ['dict', 'Insertion order', 'Yes', 'Keys unique', 'Key-value lookup'],
            ['set', 'No indexing', 'Yes', 'Not allowed', 'Uniqueness and set operations'],
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Selection Rule',
          text: 'Use a list for ordered mutable data, a tuple for fixed grouped values, a dictionary for named/keyed data, and a set when uniqueness or mathematical set operations are important.',
        },
      ],
    },

    {
      id: 'control-flow',
      title: '4. Control Flow',
      summary:
        'Control program execution with conditions, loops, break, continue, pass, and comprehensions.',
      content: [
        {
          type: 'paragraph',
          text: 'Control-flow statements determine which parts of a program execute and how many times they execute. Python provides conditional statements, loops, loop-control statements, and concise comprehension syntax.',
        },
        {
          type: 'subheading',
          text: 'if, elif, else',
        },
        {
          type: 'code',
          language: 'python',
          code: `score = 82

if score >= 90:
    grade = "A"
elif score >= 75:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"

print(grade)   # B`,
        },
        {
          type: 'subheading',
          text: 'for Loop',
        },
        {
          type: 'code',
          language: 'python',
          code: `for number in range(1, 6):
    print(number)

users = ["Alex", "Sam", "John"]

for index, user in enumerate(users, start=1):
    print(index, user)`,
        },
        {
          type: 'subheading',
          text: 'while Loop',
        },
        {
          type: 'code',
          language: 'python',
          code: `count = 1

while count <= 5:
    print(count)
    count += 1`,
        },
        {
          type: 'subheading',
          text: 'break, continue, pass',
        },
        {
          type: 'code',
          language: 'python',
          code: `for number in range(10):
    if number == 3:
        continue        # skip 3

    if number == 8:
        break           # stop at 8

    print(number)


def future_feature():
    pass                # placeholder`,
        },
        {
          type: 'subheading',
          text: 'List Comprehension',
        },
        {
          type: 'code',
          language: 'python',
          code: `squares = [number ** 2 for number in range(1, 6)]

even_squares = [
    number ** 2
    for number in range(1, 11)
    if number % 2 == 0
]

print(squares)       # [1, 4, 9, 16, 25]
print(even_squares)  # [4, 16, 36, 64, 100]`,
        },
        {
          type: 'subheading',
          text: 'Dictionary and Set Comprehensions',
        },
        {
          type: 'code',
          language: 'python',
          code: `numbers = range(1, 6)

square_map     = {number: number ** 2 for number in numbers}
unique_squares = {number ** 2 for number in range(1, 6)}

print(square_map)
print(unique_squares)`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Readable Comprehensions',
          text: 'Comprehensions are concise, but avoid deeply nested or complicated expressions. If a comprehension becomes difficult to understand, use a normal loop.',
        },
      ],
    },

    {
      id: 'functions',
      title: '5. Functions',
      summary:
        'Learn function definitions, arguments, default values, lambda functions, recursion, and first-class functions.',
      content: [
        {
          type: 'paragraph',
          text: 'Functions package reusable behavior into named units. Python functions are first-class objects, meaning they can be assigned to variables, passed as arguments, returned from other functions, and stored in collections.',
        },
        {
          type: 'subheading',
          text: 'Basic Function',
        },
        {
          type: 'code',
          language: 'python',
          code: `def add(a, b):
    return a + b

result = add(10, 20)
print(result)   # 30`,
        },
        {
          type: 'subheading',
          text: 'Default Arguments',
        },
        {
          type: 'code',
          language: 'python',
          code: `def greet(name, message="Hello"):
    return f"{message}, {name}!"

print(greet("Alex"))             # Hello, Alex!
print(greet("Alex", "Welcome"))  # Welcome, Alex!`,
        },
        {
          type: 'subheading',
          text: '*args and **kwargs',
        },
        {
          type: 'code',
          language: 'python',
          code: `def total(*numbers):
    return sum(numbers)

def describe_user(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

print(total(10, 20, 30))   # 60

describe_user(
    name="Alex",
    age=25,
    city="Bhubaneswar"
)`,
        },
        {
          type: 'subheading',
          text: 'Lambda Functions',
        },
        {
          type: 'code',
          language: 'python',
          code: `numbers = [5, 2, 9, 1]

sorted_numbers = sorted(numbers, key=lambda value: value)

double = lambda value: value * 2

print(sorted_numbers)   # [1, 2, 5, 9]
print(double(10))       # 20`,
        },
        {
          type: 'subheading',
          text: 'Recursion',
        },
        {
          type: 'code',
          language: 'python',
          code: `def factorial(number):
    if number <= 1:
        return 1
    return number * factorial(number - 1)

print(factorial(5))   # 120`,
        },
        {
          type: 'subheading',
          text: 'First-Class Functions',
        },
        {
          type: 'code',
          language: 'python',
          code: `def square(value):
    return value * value

def apply_operation(function, value):
    return function(value)

result = apply_operation(square, 5)
print(result)   # 25`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Mutable Default Arguments',
          text: 'Avoid using mutable objects such as lists or dictionaries as default arguments because the same object is reused between function calls. Use None and create the object inside the function instead.',
        },
        {
          type: 'code',
          language: 'python',
          code: `def add_item(item, items=None):
    if items is None:
        items = []

    items.append(item)
    return items

print(add_item("Python"))    # ['Python']
print(add_item("React"))     # ['React']`,
        },
      ],
    },

    {
      id: 'object-oriented-programming',
      title: '6. Object-Oriented Programming',
      summary:
        'Build reusable Python classes with constructors, inheritance, super(), dunder methods, class methods, and encapsulation conventions.',
      content: [
        {
          type: 'paragraph',
          text: 'Python supports object-oriented programming through classes and objects. Classes define data and behavior, while objects are instances of those classes.',
        },
        {
          type: 'subheading',
          text: 'Class and __init__',
        },
        {
          type: 'code',
          language: 'python',
          code: `class User:
    def __init__(self, name, email):
        self.name  = name
        self.email = email

    def introduce(self):
        return f"My name is {self.name}"


user = User("Alex", "alex@example.com")

print(user.name)
print(user.introduce())`,
        },
        {
          type: 'subheading',
          text: 'Inheritance and super()',
        },
        {
          type: 'code',
          language: 'python',
          code: `class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Some sound"


class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    def speak(self):
        return "Woof"


dog = Dog("Max", "Labrador")

print(dog.name)    # Max
print(dog.breed)   # Labrador
print(dog.speak()) # Woof`,
        },
        {
          type: 'subheading',
          text: 'Dunder Methods',
        },
        {
          type: 'paragraph',
          text: 'Dunder, or double-underscore, methods define special object behavior. Examples include __init__, __str__, __repr__, __len__, __eq__, and __iter__.',
        },
        {
          type: 'code',
          language: 'python',
          code: `class Product:
    def __init__(self, name, price):
        self.name  = name
        self.price = price

    def __str__(self):
        return f"{self.name}: Rs.{self.price}"

    def __eq__(self, other):
        if not isinstance(other, Product):
            return NotImplemented
        return self.name == other.name and self.price == other.price


product = Product("Laptop", 60000)
print(product)`,
        },
        {
          type: 'subheading',
          text: '@classmethod',
        },
        {
          type: 'paragraph',
          text: 'A class method receives the class as its first argument, conventionally named cls. It is commonly used for alternative constructors or operations related to class-level state.',
        },
        {
          type: 'code',
          language: 'python',
          code: `class User:
    def __init__(self, name, age):
        self.name = name
        self.age  = age

    @classmethod
    def from_string(cls, value):
        name, age = value.split(",")
        return cls(name, int(age))


user = User.from_string("Alex,25")

print(user.name)   # Alex
print(user.age)    # 25`,
        },
        {
          type: 'subheading',
          text: 'Encapsulation Convention',
        },
        {
          type: 'code',
          language: 'python',
          code: `class BankAccount:
    def __init__(self, balance):
        self._balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self._balance += amount

    @property
    def balance(self):
        return self._balance


account = BankAccount(1000)
account.deposit(500)
print(account.balance)   # 1500`,
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Python Access Control',
          text: 'Python does not enforce Java-style private fields. A leading underscore communicates that an attribute is intended for internal use. A double leading underscore triggers name mangling.',
        },
      ],
    },

    {
      id: 'decorators-and-generators',
      title: '7. Decorators & Generators',
      summary:
        'Understand function decorators, @property, @staticmethod, yield, generator expressions, and lazy evaluation.',
      content: [
        {
          type: 'paragraph',
          text: 'Decorators modify or extend callable behavior without changing the original function directly. Generators produce values lazily, which can reduce memory usage when processing large or streaming datasets.',
        },
        {
          type: 'subheading',
          text: 'Function Decorator',
        },
        {
          type: 'code',
          language: 'python',
          code: `from functools import wraps

def log_call(function):
    @wraps(function)
    def wrapper(*args, **kwargs):
        print(f"Calling {function.__name__}")
        result = function(*args, **kwargs)
        print(f"Finished {function.__name__}")
        return result
    return wrapper


@log_call
def add(a, b):
    return a + b


print(add(10, 20))`,
        },
        {
          type: 'subheading',
          text: '@property',
        },
        {
          type: 'code',
          language: 'python',
          code: `class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def area(self):
        return 3.14159 * self.radius ** 2


circle = Circle(5)
print(circle.area)   # 78.53975`,
        },
        {
          type: 'subheading',
          text: '@staticmethod',
        },
        {
          type: 'code',
          language: 'python',
          code: `class MathUtils:
    @staticmethod
    def is_even(number):
        return number % 2 == 0


print(MathUtils.is_even(10))   # True`,
        },
        {
          type: 'subheading',
          text: 'Generators with yield',
        },
        {
          type: 'code',
          language: 'python',
          code: `def count_up_to(limit):
    number = 1
    while number <= limit:
        yield number
        number += 1


for value in count_up_to(5):
    print(value)`,
        },
        {
          type: 'subheading',
          text: 'Generator Expressions',
        },
        {
          type: 'code',
          language: 'python',
          code: `numbers = (number ** 2 for number in range(1, 1_000_000))

print(next(numbers))   # 1
print(next(numbers))   # 4
print(next(numbers))   # 9`,
        },
        {
          type: 'table',
          headers: ['Feature', 'Decorator', 'Generator'],
          rows: [
            ['Purpose', 'Modify callable behavior', 'Produce values lazily'],
            ['Main syntax', '@decorator', 'yield'],
            ['Typical use', 'Logging, authorization, caching', 'Large data streams'],
            ['Memory', 'Depends on wrapped function', 'Generally memory efficient'],
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Generator Advantage',
          text: 'A generator does not build the entire result collection in memory. It computes the next value when requested, making it useful for large files, database streams, and pipelines.',
        },
      ],
    },

    {
      id: 'error-handling-context-managers',
      title: '8. Error Handling & Context Managers',
      summary:
        'Handle runtime failures safely with exceptions and manage resources using context managers and the with statement.',
      content: [
        {
          type: 'paragraph',
          text: 'Python uses exceptions to represent runtime errors and exceptional conditions. Robust programs catch only the exceptions they can meaningfully handle and allow unexpected errors to propagate or be logged appropriately.',
        },
        {
          type: 'subheading',
          text: 'try, except, else, finally',
        },
        {
          type: 'code',
          language: 'python',
          code: `try:
    number = int(input("Enter a number: "))
    result = 100 / number
except ValueError:
    print("Please enter a valid integer.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
else:
    print("Result:", result)
finally:
    print("Operation completed.")`,
        },
        {
          type: 'subheading',
          text: 'Custom Exceptions',
        },
        {
          type: 'code',
          language: 'python',
          code: `class InsufficientBalanceError(Exception):
    pass


def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientBalanceError("Insufficient balance")
    return balance - amount


try:
    balance = withdraw(1000, 1500)
except InsufficientBalanceError as error:
    print(error)`,
        },
        {
          type: 'subheading',
          text: 'Exception Chaining',
        },
        {
          type: 'code',
          language: 'python',
          code: `def parse_age(value):
    try:
        return int(value)
    except ValueError as error:
        raise ValueError("Age must be a valid integer") from error


try:
    parse_age("abc")
except ValueError as error:
    print(error)`,
        },
        {
          type: 'subheading',
          text: 'Context Managers',
        },
        {
          type: 'paragraph',
          text: 'A context manager manages setup and cleanup around a block of code. The with statement is commonly used for files, locks, database connections, and other resources that must be released reliably.',
        },
        {
          type: 'code',
          language: 'python',
          code: `with open("example.txt", "w", encoding="utf-8") as file:
    file.write("Hello Python")

print("File operation completed.")`,
        },
        {
          type: 'subheading',
          text: 'Creating a Custom Context Manager',
        },
        {
          type: 'code',
          language: 'python',
          code: `from contextlib import contextmanager

@contextmanager
def managed_resource():
    print("Acquire resource")
    try:
        yield
    finally:
        print("Release resource")


with managed_resource():
    print("Using resource")`,
        },
        {
          type: 'callout',
          variant: 'danger',
          title: 'Avoid Bare except',
          text: 'Avoid using bare except clauses in application code because they can catch unexpected exceptions, including control-flow exceptions. Catch specific exception types whenever possible.',
        },
      ],
    },

    {
      id: 'standard-library-modules',
      title: '9. Standard Library Modules',
      summary:
        'Explore commonly used standard modules including os, sys, json, datetime, collections, itertools, and pathlib.',
      content: [
        {
          type: 'paragraph',
          text: 'Python includes a large standard library that provides functionality for files, operating-system interaction, JSON, dates, collections, iteration, paths, networking, testing, and many other tasks.',
        },
        {
          type: 'subheading',
          text: 'os',
        },
        {
          type: 'code',
          language: 'python',
          code: `import os

print(os.getcwd())
print(os.listdir("."))

home = os.environ.get("HOME")
print(home)`,
        },
        {
          type: 'subheading',
          text: 'sys',
        },
        {
          type: 'code',
          language: 'python',
          code: `import sys

print(sys.version)
print(sys.platform)
print(sys.argv)`,
        },
        {
          type: 'subheading',
          text: 'json',
        },
        {
          type: 'code',
          language: 'python',
          code: `import json

user = {
    "name": "Alex",
    "age": 25,
    "skills": ["Python", "SQL"]
}

json_text = json.dumps(user, indent=2)
print(json_text)

parsed_user = json.loads(json_text)
print(parsed_user["name"])`,
        },
        {
          type: 'subheading',
          text: 'datetime',
        },
        {
          type: 'code',
          language: 'python',
          code: `from datetime import datetime, timedelta

now    = datetime.now()
future = now + timedelta(days=7)

print(now)
print(future)
print(now.strftime("%Y-%m-%d %H:%M:%S"))`,
        },
        {
          type: 'subheading',
          text: 'collections',
        },
        {
          type: 'code',
          language: 'python',
          code: `from collections import Counter, defaultdict, deque

words  = ["python", "js", "python", "react", "python"]
counts = Counter(words)
print(counts)

groups = defaultdict(list)
groups["backend"].append("Python")
groups["frontend"].append("React")

queue = deque(["task1", "task2"])
queue.append("task3")
print(queue.popleft())   # task1`,
        },
        {
          type: 'subheading',
          text: 'itertools',
        },
        {
          type: 'code',
          language: 'python',
          code: `from itertools import chain, islice

first  = [1, 2, 3]
second = [4, 5, 6]

combined = chain(first, second)

print(list(islice(combined, 4)))   # [1, 2, 3, 4]`,
        },
        {
          type: 'subheading',
          text: 'pathlib',
        },
        {
          type: 'code',
          language: 'python',
          code: `from pathlib import Path

base      = Path("project")
file_path = base / "data" / "users.json"

print(file_path)          # project/data/users.json
print(file_path.suffix)   # .json
print(file_path.name)     # users.json

if file_path.exists():
    print("File exists")`,
        },
        {
          type: 'table',
          headers: ['Module', 'Purpose', 'Common APIs'],
          rows: [
            ['os', 'Operating system interaction', 'getcwd, listdir, environ'],
            ['sys', 'Python runtime information', 'version, argv, path'],
            ['json', 'JSON serialization', 'dumps, loads, dump, load'],
            ['datetime', 'Dates and times', 'datetime, timedelta, strftime'],
            ['collections', 'Specialized collections', 'Counter, defaultdict, deque'],
            ['itertools', 'Iterator utilities', 'chain, islice, product'],
            ['pathlib', 'Object-oriented paths', 'Path, exists, read_text'],
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Prefer pathlib for New Code',
          text: 'pathlib provides an object-oriented interface for filesystem paths and is generally easier to compose and read than manual path-string manipulation.',
        },
      ],
    },

    {
      id: 'file-io-and-string-operations',
      title: '10. File I/O & String Operations',
      summary:
        'Read and write files safely and work effectively with strings, formatting, slicing, searching, and common string methods.',
      content: [
        {
          type: 'paragraph',
          text: 'Python provides built-in file handling through open() and convenient path-based APIs through pathlib. Text files should normally be opened with an explicit encoding such as UTF-8.',
        },
        {
          type: 'subheading',
          text: 'Writing a File',
        },
        {
          type: 'code',
          language: 'python',
          code: `with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Python is powerful.\\n")
    file.write("Python is readable.\\n")`,
        },
        {
          type: 'subheading',
          text: 'Reading a File',
        },
        {
          type: 'code',
          language: 'python',
          code: `with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)`,
        },
        {
          type: 'subheading',
          text: 'Reading Line by Line',
        },
        {
          type: 'code',
          language: 'python',
          code: `with open("notes.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())`,
        },
        {
          type: 'subheading',
          text: 'f-Strings',
        },
        {
          type: 'code',
          language: 'python',
          code: `name   = "Alex"
age    = 25
salary = 45000.50

message        = f"{name} is {age} years old."
salary_message = f"Salary: Rs.{salary:,.2f}"

print(message)
print(salary_message)`,
        },
        {
          type: 'subheading',
          text: 'Common String Methods',
        },
        {
          type: 'code',
          language: 'python',
          code: `text = " Hello Python World "

clean  = text.strip()
lower  = clean.lower()
upper  = clean.upper()
words  = clean.split()
joined = "-".join(words)

print(clean)
print(lower)
print(upper)
print(words)
print(joined)

print("Python" in clean)
print(clean.startswith("Hello"))
print(clean.replace("World", "Developer"))`,
        },
        {
          type: 'subheading',
          text: 'String Slicing',
        },
        {
          type: 'code',
          language: 'python',
          code: `text = "Python"

print(text[0])     # P
print(text[-1])    # n
print(text[0:3])   # Pyt
print(text[:4])    # Pyth
print(text[2:])    # thon
print(text[::-1])  # nohtyP  (reversed)`,
        },
        {
          type: 'subheading',
          text: 'Pathlib File Operations',
        },
        {
          type: 'code',
          language: 'python',
          code: `from pathlib import Path

file_path = Path("notes.txt")

file_path.write_text("Learning Python", encoding="utf-8")

content = file_path.read_text(encoding="utf-8")
print(content)`,
        },
        {
          type: 'table',
          headers: ['Mode', 'Purpose'],
          rows: [
            ['r', 'Read existing file'],
            ['w', 'Write and replace existing content'],
            ['a', 'Append to existing content'],
            ['x', 'Create a new file and fail if it exists'],
            ['rb', 'Read binary data'],
            ['wb', 'Write binary data'],
          ],
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Resource Safety',
          text: 'Use with when working with files so that resources are closed automatically even when an exception occurs.',
        },
      ],
    },

    {
      id: 'python-best-practices',
      title: '11. Python Best Practices',
      summary:
        'Apply production-quality Python practices for readability, maintainability, testing, typing, dependencies, and error handling.',
      content: [
        {
          type: 'paragraph',
          text: 'Production Python code should prioritize readability, predictable behavior, maintainability, security, and testability. Python gives developers flexibility, so consistent project conventions are especially important.',
        },
        {
          type: 'heading',
          text: 'Recommended Practices',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'Follow PEP 8 and use consistent naming conventions.',
            'Prefer small, focused functions with clear responsibilities.',
            'Use descriptive variable and function names.',
            'Use virtual environments to isolate project dependencies.',
            'Pin or constrain production dependencies appropriately.',
            'Handle expected exceptions explicitly.',
            'Use context managers for resources that need cleanup.',
            'Write automated tests for important application behavior.',
            'Use type hints to improve readability and tooling.',
            'Avoid unnecessary global state.',
            'Use logging instead of print statements for application diagnostics.',
            'Keep secrets out of source code and version control.',
          ],
        },
        {
          type: 'subheading',
          text: 'Type Hints',
        },
        {
          type: 'code',
          language: 'python',
          code: `def calculate_total(price: float, quantity: int) -> float:
    return price * quantity


total = calculate_total(499.99, 3)
print(total)   # 1499.97`,
        },
        {
          type: 'subheading',
          text: 'Logging',
        },
        {
          type: 'code',
          language: 'python',
          code: `import logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger(__name__)

logger.info("Application started")
logger.warning("This is a warning")`,
        },
        {
          type: 'subheading',
          text: 'Virtual Environment',
        },
        {
          type: 'code',
          language: 'python',
          code: `# Create virtual environment
python -m venv .venv

# Activate on Linux/macOS
source .venv/bin/activate

# Activate on Windows
.venv\\Scripts\\activate

# Install packages
python -m pip install requests`,
        },
        {
          type: 'subheading',
          text: 'Testing with unittest',
        },
        {
          type: 'code',
          language: 'python',
          code: `import unittest


def add(a, b):
    return a + b


class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)


if __name__ == "__main__":
    unittest.main()`,
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Security',
          text: 'Never hard-code passwords, API keys, database credentials, or other secrets in source code. Use environment variables or a dedicated secret-management system.',
        },
      ],
    },

    {
      id: 'interview-questions',
      title: '12. Interview Questions',
      summary:
        'Frequently asked Python interview questions covering fundamentals, data structures, OOP, functions, memory, exceptions, and advanced concepts.',
      content: [
        {
          type: 'faq',
          items: [
            {
              question: 'What is Python?',
              answer:
                'Python is a high-level, general-purpose programming language known for readable syntax, dynamic typing, extensive libraries, and support for multiple programming paradigms.',
            },
            {
              question: 'Is Python compiled or interpreted?',
              answer:
                'Python implementations vary, but CPython first compiles source code into bytecode and then executes that bytecode using the Python virtual machine. Calling Python simply interpreted is a useful simplification but not the complete CPython execution model.',
            },
            {
              question: 'What is dynamic typing in Python?',
              answer:
                'Dynamic typing means variable names do not require fixed declared types. They can refer to objects of different types at runtime, while each object itself has a specific type.',
            },
            {
              question: 'What is the difference between a list and a tuple?',
              answer:
                'A list is mutable, while a tuple is immutable. Both are ordered sequences and can contain duplicate values. Lists are commonly used for collections that change, while tuples are useful for fixed collections of values.',
            },
            {
              question: 'What is the difference between == and is?',
              answer:
                '== compares values for equality, while is checks whether two references point to the same object. Use is commonly with singleton values such as None.',
            },
            {
              question: 'What are *args and **kwargs?',
              answer:
                '*args collects additional positional arguments into a tuple, while **kwargs collects additional keyword arguments into a dictionary.',
            },
            {
              question: 'What is a decorator?',
              answer:
                'A decorator is a callable that takes another callable and returns a modified or enhanced callable. It is commonly used for logging, authorization, caching, validation, and instrumentation.',
            },
            {
              question: 'What is a generator?',
              answer:
                'A generator is an iterator-producing function or expression that computes values lazily. Functions containing yield return generator objects and resume execution when the next value is requested.',
            },
            {
              question: 'What is the difference between yield and return?',
              answer:
                'return ends a function and optionally provides one result. yield pauses a generator function and provides a value while preserving its execution state for later continuation.',
            },
            {
              question:
                'What is the difference between @classmethod and @staticmethod?',
              answer:
                '@classmethod receives the class as its first argument, conventionally cls, and can operate on class-level state. @staticmethod receives neither self nor cls automatically and behaves like a function namespaced inside a class.',
            },
            {
              question: 'What is __init__?',
              answer:
                '__init__ is an initialization method called after an object is created. It is commonly used to initialize instance attributes. Object creation itself is controlled by __new__.',
            },
            {
              question: 'What are dunder methods?',
              answer:
                'Dunder methods are special methods with names surrounded by double underscores, such as __init__, __str__, __len__, and __eq__. They allow classes to integrate with Python language operations.',
            },
            {
              question:
                'What is the difference between shallow copy and deep copy?',
              answer:
                'A shallow copy creates a new outer object but keeps references to nested objects. A deep copy recursively copies nested objects as well. The copy module provides copy() and deepcopy() for these operations.',
            },
            {
              question: 'What is a context manager?',
              answer:
                'A context manager defines setup and cleanup behavior around a block of code. It is normally used through the with statement, such as with open(...) for files.',
            },
            {
              question: 'What is the GIL?',
              answer:
                'In standard CPython builds with the traditional GIL, the Global Interpreter Lock allows only one thread at a time to execute Python bytecode within a process. This affects CPU-bound multithreading. Modern Python also has builds and evolving features that can change this model.',
            },
            {
              question: 'How does Python manage memory?',
              answer:
                'CPython primarily uses reference counting along with a cyclic garbage collector to manage memory. Objects are allocated and released automatically, although external resources such as files and sockets should still be managed explicitly with context managers.',
            },
            {
              question: 'What is the difference between a module and a package?',
              answer:
                'A module is generally a Python file containing code. A package is a directory-based structure used to organize multiple modules and subpackages. Modern Python supports namespace packages that can exist without a traditional __init__.py file.',
            },
            {
              question: 'Why should mutable default arguments be avoided?',
              answer:
                'Default argument expressions are evaluated when the function is defined, not each time it is called. Therefore, a mutable default such as [] can be shared across calls. Using None and creating a new object inside the function avoids this issue.',
            },
          ],
        },
        {
          type: 'subheading',
          text: 'Useful Interview Example',
        },
        {
          type: 'code',
          language: 'python',
          code: `def add_item(item, items=None):
    if items is None:
        items = []

    items.append(item)
    return items


first  = add_item("Python")
second = add_item("JavaScript")

print(first)    # ['Python']
print(second)   # ['JavaScript']`,
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Interview Tip',
          text: 'When answering Python interview questions, explain the concept first, then provide a short code example and mention an appropriate real-world use case or trade-off.',
        },
      ],
    },
  ],
};

export default pythonContent;
