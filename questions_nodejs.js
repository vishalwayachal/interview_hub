window.questions_nodejs = [
  {
    question: "What is the difference between Node.js and JavaScript?",
    answer:
      "Node.js uses the V8 engine (Google Chrome), is for non-blocking server-side activities, and is an interpreter for scripting. JavaScript uses V8, Spider Monkey, JS Core, is for client-side operations, and is a programming language.",
  },
  {
    question: "What is Node.js?",
    answer:
      "Node.js is a popular scripting language for server-side scripting, known for non-blocking I/O and single-threaded event loop.",
  },
  {
    question: "Briefly explain the working of Node.js.",
    answer:
      "Node.js runs in a virtual environment using JavaScript, powered by the V8 engine, enabling non-blocking I/O and a single-threaded event loop.",
  },
  {
    question: "Where is Node.js used?",
    answer:
      "Network applications, distributed computing, responsive web apps, server-client applications.",
  },
  {
    question: "What is the difference between Node.js and Angular?",
    answer:
      "Node.js is for scalable server-side apps, generates DB queries, and is coded in C++/JavaScript. Angular is for real-time interactive web apps, uses MVC, is coded in TypeScript, and is an all-in-one web app framework.",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous functions?",
    answer:
      "Synchronous functions are used for I/O operations and respond instantly. Asynchronous functions do not wait for a response and allow continuous processing.",
  },
  {
    question: "What is the control flow function?",
    answer:
      "A code snippet that executes when asynchronous function calls are made, used to evaluate the order of execution in Node.js.",
  },
  {
    question: "Why is Node.js so popular these days?",
    answer:
      "It uses JavaScript on the server, provides access to HTTP stack, file I/O, TCP, direct DB access, and is fast and scalable.",
  },
  {
    question: "Are there any disadvantages to using Node.js?",
    answer:
      "Multi-threaded platforms are better for intensive CPU computation. Relational DB usage with Node.js is becoming obsolete.",
  },
  {
    question: "Explain the event-driven architecture of Node.js.",
    answer:
      "Node.js uses event loops and callback functions to handle asynchronous operations and non-blocking I/O efficiently.",
  },
  {
    question: "What is npm? How do you install packages using npm?",
    answer:
      "npm is Node Package Manager. Install packages using 'npm install package-name', e.g., 'npm install express'.",
  },
  {
    question: "How do you create a basic HTTP server in Node.js?",
    answer:
      "const http = require('http'); const server = http.createServer((req, res) => { res.writeHead(200, {'Content-Type': 'text/plain'}); res.end('Hello, World!'); }); server.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });",
  },
  {
    question:
      "Explain the difference between callbacks and promises in Node.js.",
    answer:
      "Callbacks are functions passed as arguments and executed asynchronously. Promises represent eventual completion/failure and allow chaining of async actions.",
  },
  {
    question: "What is the purpose of the package.json file?",
    answer:
      "It contains metadata about a Node.js project, including dependencies, scripts, version, author, etc. Used by npm to manage dependencies.",
  },
  {
    question: "How do you handle errors in Node.js?",
    answer:
      "Use try-catch for sync code, .catch() for promises, and error-handling middleware in Express for route/middleware errors.",
  },
  {
    question: "Explain the role of the 'require' function in Node.js.",
    answer:
      "require() imports modules/files, loads them at runtime, and returns their exports object.",
  },
  {
    question: "How do you debug Node.js applications?",
    answer:
      "Use console.log(), Node.js debugger (node inspect), or third-party tools like VS Code with breakpoints.",
  },
  {
    question: "Why is Node.js single-threaded?",
    answer:
      "Node.js uses a single-threaded model to support asynchronous processing, making it scalable and efficient for high performance under heavy load.",
  },
  {
    question: "What are the different API functions supported by Node.js?",
    answer: "Synchronous APIs (blocking) and Asynchronous APIs (non-blocking).",
  },
  {
    question: "What is the framework that is used most often in Node.js today?",
    answer:
      "Express.js is the most used framework for scalability, flexibility, and minimalism. Others include Hapi.js, Sails.js, Meteor.js, Derby.js, Adonis.js.",
  },
  {
    question:
      "What are the security implementations that are present in Node.js?",
    answer: "Error handling protocols and authentication pipelines.",
  },
  {
    question: "What is an event loop in Node.js?",
    answer:
      "An event loop handles callbacks for events, allowing Node.js to execute code without waiting for outputs, enabling non-blocking operations.",
  },
  {
    question:
      "What are the asynchronous tasks that should occur in an event loop?",
    answer:
      "Blocking send requests, high computational requirements, real-time I/O operations.",
  },
  {
    question: "What is the order of execution in control flow statements?",
    answer:
      "Handling execution and queue, data collection/storage, concurrency handling/limiting, execution of next code.",
  },
  {
    question: "What are the input arguments for an asynchronous queue?",
    answer: "Concurrency value and task function.",
  },
  {
    question:
      "What is the primary reason to use the event-based model in Node.js?",
    answer: "To overcome blocking operations in the I/O channel.",
  },
  {
    question: "How can you import external libraries into Node.js?",
    answer: "Use require('library') to load external libraries.",
  },
  {
    question: "What is meant by event-driven programming in Node.js?",
    answer:
      "Workflow is controlled by events from external programs or sources, using event handling and event selection.",
  },
  {
    question: "What is the difference between Ajax and Node.js?",
    answer:
      "Ajax is client-side, runs in browser; Node.js is server-side, runs on server.",
  },
  {
    question: "What are streams in Node.js?",
    answer:
      "Streams are data entities for continuous read/write operations, useful for processing large data sets.",
  },
  {
    question: "How do you handle file operations in Node.js?",
    answer:
      "Use the built-in fs module: fs.readFile(), fs.writeFile(), fs.mkdir(), fs.unlink(), etc.",
  },
  {
    question: "Explain the concept of middleware in Express.js.",
    answer:
      "Middleware functions have access to req, res, and next, and can modify requests/responses, execute code, or terminate the cycle.",
  },
  {
    question:
      "What are the advantages of using Node.js for backend development?",
    answer:
      "Non-blocking architecture, scalability, large ecosystem, and ability to use JavaScript on both client and server.",
  },
  {
    question: "How does clustering work in Node.js and when to use it?",
    answer:
      "Clustering spawns multiple Node.js processes to utilize multiple CPU cores, improving performance and concurrency.",
  },
  {
    question: "What is a RESTful API, and how do you implement it in Node.js?",
    answer:
      "RESTful APIs use HTTP methods for CRUD operations. Implement with Express.js by defining routes for GET, POST, PUT, DELETE.",
  },
  {
    question:
      "Explain the difference between require() and 'import' in Node.js.",
    answer:
      "require() is CommonJS, synchronous, loads modules at runtime. import is ES6, asynchronous, supported with --experimental-modules flag.",
  },
  {
    question: "How do you perform unit testing in Node.js applications?",
    answer:
      "Use frameworks like Mocha, Jest, Jasmine. Write test cases to verify code units, provide inputs, and assert outputs.",
  },
  {
    question: "What is the meaning of a test pyramid?",
    answer:
      "A methodology denoting the number of test cases for unit, integration, and combined testing, ensuring thorough coverage.",
  },
  {
    question:
      "What is the difference between spawn and fork methods in Node.js?",
    answer:
      "spawn() creates a new process; fork() is a special spawn for Node modules, enabling multiple worker nodes.",
  },
  {
    question: "What is the use of middleware in Node.js?",
    answer:
      "Middleware handles incoming requests and outbound responses, executes code, updates objects, and calls next middleware.",
  },
  {
    question: "What are global objects in Node.js?",
    answer:
      "Objects accessible across all modules, providing functions, strings, or objects globally.",
  },
  {
    question: "Why is assert used in Node.js?",
    answer:
      "To write test cases verifying code. Example: var assert = require('assert'); assert(add(3,5) === 8, 'three summed with five is eight');",
  },
  {
    question:
      "How is a test pyramid implemented using the HTML API in Node.js?",
    answer:
      "By defining many unit tests, fewer integration tests, and even fewer HTTP endpoint tests.",
  },
  {
    question: "Why is Express.js used?",
    answer:
      "Express.js is a lightweight, flexible framework for mobile and web apps, managing data flow between servers and apps.",
  },
  {
    question: "What are 'Event Emitters' in Node.js?",
    answer:
      "Objects that let code subscribe to named events and run callbacks. Used in HTTP and filesystem modules for async handling.",
  },
  {
    question: "How do you handle authentication in Node.js applications?",
    answer:
      "Use middleware like Passport.js, JWT, or OAuth for user authentication.",
  },
  {
    question:
      "What are worker threads in Node.js, and when would you use them?",
    answer:
      "Worker threads run JS code in separate threads, useful for CPU-intensive tasks without blocking the event loop.",
  },
  {
    question: "Explain the purpose of the 'process' module in Node.js.",
    answer:
      "The process module lets you control app runtime, access environment, command-line info, and manage the program.",
  },
  {
    question: "How do you optimize the performance of Node.js applications?",
    answer:
      "Minimize blocking I/O, optimize algorithms, cache data, use clustering, and scale across multi-cores.",
  },
  {
    question: "What is GraphQL?",
    answer:
      "A query language for APIs allowing clients to request only the data they need.",
  },
  {
    question:
      "How do you deploy Node.js applications to production environments?",
    answer:
      "Use Docker, cloud platforms, PaaS providers, or self-managed servers as reverse proxies.",
  },
  {
    question: "Explain the use of 'Passport.js' in Node.js applications.",
    answer:
      "Passport.js is middleware for authentication strategies, providing flexible user authentication.",
  },
  {
    question: "What are stubs in Node.js?",
    answer:
      "Functions used to assess/analyze component behavior during testing.",
  },
  {
    question: "What is the use of the connect module in Node.js?",
    answer:
      "Provides communication between Node.js and HTTP module, integrates with Express.js using middleware.",
  },
  {
    question: "What are the types of streams available in Node.js?",
    answer: "Duplex, readable, writable, and transform streams.",
  },
  {
    question: "What is the use of REPL in Node.js?",
    answer:
      "REPL (Read-Eval-Print-Loop) provides a virtual environment to test JS code. Launch with 'node' command.",
  },
  {
    question: "What is meant by tracing in Node.js?",
    answer:
      "Collects tracing info from V8, node core, and userspace code, dumped to a log file for validation.",
  },
  {
    question: "Where is package.json used in Node.js?",
    answer:
      "Contains metadata about project items, used for project identification and dependency management.",
  },
  {
    question:
      "What is the difference between readFile and createReadStream in Node.js?",
    answer:
      "readFile reads entire file asynchronously into memory; createReadStream reads file in chunks.",
  },
  {
    question: "What is the purpose of the crypto module in Node.js?",
    answer:
      "Provides cryptographic functionalities: ciphering, deciphering, signing, and hashing.",
  },
  {
    question: "What is a passport in Node.js?",
    answer:
      "Passport is middleware for authentication, providing unique strategies for Express.js apps.",
  },
  {
    question: "What is the use of EventEmitter in Node.js?",
    answer:
      "EventEmitter allows attachment between objects and named events, emitting events synchronously.",
  },
  {
    question: "Why do you think you are the right fit for this Node.js role?",
    answer:
      "Show understanding of the job, company architecture, and how your interests align with Node.js and the company.",
  },
  {
    question: "Do you have any past Node.js work experience?",
    answer:
      "Share honest experiences and explain how you've used Node.js in a working environment.",
  },
  {
    question:
      "Do you have any experience working in the same industry as ours?",
    answer:
      "Describe previous work or internship experience in similar environments or technologies.",
  },
  {
    question:
      "Do you have any certifications to boost your candidacy for this Node.js role?",
    answer:
      "Certifications show seriousness and add value to your resume and knowledge.",
  },
  {
    question: "What is a V8 engine?",
    answer:
      "Open-source JS engine by Google, used to execute JS code in browsers and Node.js.",
  },
  {
    question: "Explain the concept of garbage collection in Node.js.",
    answer:
      "Automatic process of reclaiming memory occupied by unused objects, managed by V8's garbage collector.",
  },
  {
    question:
      "How do you handle memory leaks in long-running Node.js applications?",
    answer:
      "Monitor memory usage, analyze heap snapshots with --inspect flag, and optimize memory usage.",
  },
  {
    question:
      "Discuss the architecture of a microservices-based Node.js application.",
    answer:
      "Decomposes app into small, independently deployable services communicating over HTTP or messaging queues.",
  },
  {
    question: "What are the differences between WebSocket and HTTP in Node.js?",
    answer:
      "WebSocket is full-duplex, real-time; HTTP is request-response, client-initiated.",
  },
  {
    question: "Explain the use of PM2 in Node.js for process management.",
    answer:
      "PM2 provides process monitoring, automatic restarts, log management, clustering, and production deployment.",
  },
  {
    question: "How do you ensure high scalability in Node.js applications?",
    answer:
      "Use load balancing, horizontal scaling, fault tolerance, caching, and database sharding.",
  },
  {
    question:
      "Discuss the use of Redis in caching and session management with Node.js.",
    answer:
      "Redis is an in-memory store for fast caching and session management, supporting various data structures.",
  },
  {
    question: "How does the DNS lookup function work in Node.js?",
    answer:
      "dns.lookup(address, options, callback) returns IPv4/IPv6 records, with options for input type and callback for results.",
  },
  {
    question: "How to get information about a file in Node.js?",
    answer:
      "Use fs.stat(path, callback) to get file info; callback receives stats object.",
  },
  {
    question: "Implement a function to reverse a string in Node.js.",
    answer:
      "function reverseString(str) { return str.split('').reverse().join(''); }",
  },
  {
    question:
      "Write a program to read a JSON file and parse its contents in Node.js.",
    answer:
      "const fs = require('fs'); fs.readFile('data.json', 'utf8', (err, data) => { if (err) throw err; const json = JSON.parse(data); console.log(json); });",
  },
  {
    question:
      "Create a simple Express.js application to handle GET and POST requests.",
    answer:
      "const express = require('express'); const app = express(); app.get('/', (req, res) => { res.send('GET request received'); }); app.post('/', (req, res) => { res.send('POST request received'); }); app.listen(3000, () => { console.log('Server running on port 3000'); });",
  },
  {
    question:
      "Implement a basic authentication middleware in Node.js using Express.",
    answer:
      "function authenticate(req, res, next) { const token = req.headers['authorization']; if (token === 'secretToken') { next(); } else { res.status(401).send('Unauthorized'); } } app.use(authenticate);",
  },
  {
    question:
      "Write a program to fetch data from an external API and display it in a Node.js application.",
    answer:
      "const axios = require('axios'); axios.get('https://api.example.com/data').then(response => { console.log(response.data); }).catch(error => { console.error(error); });",
  },
  {
    question:
      "Develop a RESTful API for a simple blog application using Node.js and Express.",
    answer:
      "app.get('/posts', (req, res) => {}); app.post('/posts', (req, res) => {});",
  },
  {
    question:
      "Implement a WebSocket server in Node.js to enable real-time communication.",
    answer:
      "const WebSocket = require('ws'); const wss = new WebSocket.Server({ port: 8080 }); wss.on('connection', function connection(ws) { console.log('Client connected'); ws.on('message', function incoming(message) { console.log('Received:', message); ws.send(`Echo: ${message}`); }); ws.on('close', function close() { console.log('Client disconnected'); }); });",
  },
  {
    question:
      "Write a function to calculate the factorial of a number using recursion in Node.js.",
    answer:
      "function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }",
  },
  {
    question: "What is NODE_ENV, and how do you use it in Express?",
    answer:
      "NODE_ENV is an environment variable for identifying the app environment (development, production, testing). Set NODE_ENV, configure app behavior, and start the server with environment-specific settings.",
  },
];
