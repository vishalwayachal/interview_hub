window.questions_python = [
  {
    question: "What are Python’s key features?",
    answer: "Python is interpreted, dynamically typed, object-oriented, supports high-level data structures, and has an extensive standard library."
  },
  {
    question: "What is PEP8?",
    answer: "PEP8 is Python’s style guide that standardizes code formatting (indentation, line length, naming conventions, etc.)."
  },
  {
    question: "What are Python decorators?",
    answer: "Decorators are functions that modify the behavior of another function or method. They’re used for logging, timing, access control, etc.<br><pre><code>def log(func):\n    def wrapper(*args, **kwargs):\n        print(\"Function called\")\n        return func(*args, **kwargs)\n    return wrapper</code></pre>"
  },
  {
    question: "Explain *args and **kwargs",
    answer: "* <code>*args</code> = variable number of positional arguments<br>* <code>**kwargs</code> = variable number of keyword arguments<br><pre><code>def test(*args, **kwargs):\n    print(args, kwargs)</code></pre>"
  },
  {
    question: "What is the difference between is and ==?",
    answer: "<code>is</code> compares object identity (same memory)<br><code>==</code> compares values<br><pre><code>a = [1]; b = a; a is b → True\na == b → True</code></pre>"
  },
  {
    question: "What is a Python generator?",
    answer: "A generator uses <code>yield</code> to return items lazily, one at a time, useful for large data streams.<br><pre><code>def count_up(n):\n    for i in range(n):\n        yield i</code></pre>"
  },
  {
    question: "How is memory managed in Python?",
    answer: "Python uses automatic garbage collection with reference counting and a cyclic garbage collector."
  },
  {
    question: "What are Python’s scopes?",
    answer: "LEGB:<br>* <b>L</b>ocal<br>* <b>E</b>nclosing<br>* <b>G</b>lobal<br>* <b>B</b>uilt-in"
  },
  {
    question: "How do you handle exceptions?",
    answer: "<pre><code>try:\n    1 / 0\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")\nfinally:\n    print(\"Done\")</code></pre>"
  },
  {
    question: "What are Python data types?",
    answer: "Common: <code>int</code>, <code>float</code>, <code>str</code>, <code>list</code>, <code>dict</code>, <code>tuple</code>, <code>set</code>, <code>bool</code>, <code>None</code>."
  },
  {
    question: "Difference between list and tuple?",
    answer: "List: mutable, dynamic<br>Tuple: immutable, fixed<br><pre><code>l = [1, 2]; t = (1, 2)</code></pre>"
  },
  {
    question: "What is a lambda function?",
    answer: "Anonymous one-liner function:<br><pre><code>f = lambda x: x * 2</code></pre>"
  },
  {
    question: "What is a virtual environment?",
    answer: "An isolated Python environment to manage dependencies per project.<br><pre><code>python -m venv venv\nsource venv/bin/activate</code></pre>"
  },
  {
    question: "What is FastAPI?",
    answer: "A modern, high-performance web framework for building APIs using Python 3.7+ with automatic OpenAPI docs and async support."
  },
  {
    question: "How do you validate input in FastAPI?",
    answer: "Using Pydantic models:<br><pre><code>from pydantic import BaseModel\n\nclass User(BaseModel):\n    name: str</code></pre>"
  },
  {
    question: "How do you handle background tasks?",
    answer: "Use <code>BackgroundTasks</code> from FastAPI or Celery for async job processing."
  },
  {
    question: "How do you connect to PostgreSQL in Python?",
    answer: "Using SQLAlchemy or <code>psycopg2</code>.<br><pre><code>import psycopg2\nconn = psycopg2.connect(dbname=\"test\", user=\"admin\")</code></pre>"
  },
  {
    question: "What is SQLAlchemy ORM?",
    answer: "It lets you map Python classes to DB tables and write Pythonic queries instead of raw SQL.<br><pre><code>from sqlalchemy import Column, Integer, String\n\nclass User(Base):\n    id = Column(Integer, primary_key=True)\n    name = Column(String)</code></pre>"
  },
  {
    question: "How do you handle migrations in Python?",
    answer: "Using Alembic (with SQLAlchemy) or Django's migration system.<br><pre><code>alembic revision --autogenerate -m \"Add user table\"</code></pre>"
  },
  {
    question: "How do you secure APIs in FastAPI?",
    answer: "With OAuth2, JWT tokens, and <code>Depends()</code> to enforce authentication."
  },
  {
    question: "How does async work in Python?",
    answer: "<code>async def</code> defines a coroutine. Use <code>await</code> to run non-blocking code. It works well with FastAPI and I/O operations.<br><pre><code>async def fetch():\n    await asyncio.sleep(1)</code></pre>"
  },
  {
    question: "What are Python modules and packages?",
    answer: "Module: a <code>.py</code> file with code<br>Package: a directory with <code>__init__.py</code> and multiple modules"
  },
  {
    question: "What is __init__.py for?",
    answer: "Marks a directory as a Python package. Required for module imports."
  },
  {
    question: "How do you write unit tests in Python?",
    answer: "Use the built-in <code>unittest</code> or <code>pytest</code>.<br><pre><code>import unittest\n\nclass TestAdd(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(2 + 2, 4)</code></pre>"
  },
  {
    question: "What is the GIL (Global Interpreter Lock)?",
    answer: "A CPython mechanism that prevents multiple native threads from executing Python bytecode at once."
  }
];
