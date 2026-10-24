window.questions_nodejs1 = [
  {
    question: "What do you mean by Asynchronous API?",
    answer:
      "All APIs of Node.js library are asynchronous (non-blocking). It essentially means a Node.js based server never waits for an API to return data. Server moves to next API after calling it and a notification mechanism of Events of Node.js helps server to get response from the previous API call.<br><small></small>",
  },
  {
    question: "What are the benefits of using Node.js?",
    answer:
      "<ul><li><b>Asynchronous and Event Driven:</b> All APIs are non-blocking.</li><li><b>Very Fast:</b> Built on Google Chrome's V8 engine.</li><li><b>Single Threaded but Highly Scalable:</b> Uses a single threaded model with event looping, serving many requests.</li><li><b>No Buffering:</b> Applications never buffer data, outputting in chunks.</li></ul><small></small>",
  },
  {
    question: "Is Node a single threaded application?",
    answer:
      "Yes! Node uses a single threaded model with event looping.<br><small></small>",
  },
  {
    question: "What is global installation of dependencies?",
    answer:
      "Globally installed packages/dependencies are stored in /npm directory. Such dependencies can be used in CLI (Command Line Interface) function of any node.js but cannot be imported using require() in Node application directly. To install a Node project globally use -g flag.<br><small></small>",
  },
  {
    question: "What is an error-first callback?",
    answer:
      "Error-first callbacks are used to pass errors and data. The first argument is always an error object that the programmer has to check if something went wrong. Additional arguments are used to pass data.<br><pre><code>fs.readFile(filePath, function(err, data) {\n  if (err) {\n    //handle the error\n  }\n  // use the data object\n});</code></pre><small></small>",
  },
  {
    question:
      "What's the difference between operational and programmer errors?",
    answer:
      "Operation errors are not bugs, but problems with the system, like request timeout or hardware failure. On the other hand programmer errors are actual bugs.<br><small></small>",
  },
  {
    question: "What is the difference between Nodejs, AJAX, and jQuery?",
    answer:
      "The one common trait between Node.js, AJAX, and jQuery is that all of them are the advanced implementation of JavaScript. However, they serve completely different purposes.<br><b>Node.js</b> – Server-side platform for developing client-server applications.<br><b>AJAX</b> – Client-side scripting technique for dynamic content.<br><b>jQuery</b> – JavaScript library for AJAX, DOM traversal, looping, and cross-browser compatibility.<br><small></small>",
  },
  {
    question: "How to make Post request in Node.js?",
    answer:
      "<pre><code>var request = require('request');\nrequest.post('http://www.example.com/action', {\n  form: { key: 'value' }\n}, function(error, response, body) {\n  if (!error && response.statusCode == 200) {\n    console.log(body)\n  }\n});</code></pre><small></small>",
  },
  {
    question: "What are the key features of Node.js?",
    answer:
      "<ul><li>Asynchronous event driven IO helps concurrent request handling</li><li>Fast in Code execution</li><li>Single Threaded but Highly Scalable</li><li>Node.js library uses JavaScript</li><li>Active and vibrant community</li><li>No Buffering</li></ul><small></small>",
  },
  {
    question: "What is control flow function?",
    answer:
      "It is a generic piece of code which runs in between several asynchronous function calls is known as control flow function.<br><small>Source: lazyquestion.com</small>",
  },
  {
    question: "What is Node.js?",
    answer:
      "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It lets developers use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.<br><small>Source: nodejs.org</small>",
  },
  {
    question: "Who uses Node.js?",
    answer:
      "Node.js is used by many large companies and organizations, including Netflix, LinkedIn, Walmart, and NASA. It's popular for building web applications, APIs, and real-time services like chat applications.<br><small></small>",
  },
  {
    question: "How does Node.js handle packages?",
    answer:
      "Node.js uses npm (Node Package Manager) to manage packages. npm is the default package manager for Node.js and is installed automatically when you install Node.js. It allows you to install, share, and manage dependencies for your Node.js projects.<br><small></small>",
  },
  {
    question: "What is the event loop in Node.js?",
    answer:
      "The event loop is a fundamental part of Node.js's architecture. It allows Node.js to perform non-blocking I/O operations—despite the fact that JavaScript is single-threaded—by offloading operations to the system kernel whenever possible.<br><small></small>",
  },
  {
    question: "Can you explain middleware in Node.js?",
    answer:
      "Middleware in Node.js are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. It can perform a variety of functions, like executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function.<br><small></small>",
  },
  {
    question: "What is the purpose of the 'next' function in middleware?",
    answer:
      "The 'next' function is used to pass control to the next middleware function in the stack. If the current middleware function does not end the request-response cycle, it must call 'next()' to pass control to the next middleware. Otherwise, the request will be left hanging.<br><small></small>",
  },
  {
    question: "How to handle errors in Node.js?",
    answer:
      "Errors in Node.js can be handled using the 'try...catch' statement for synchronous code and by using error-first callbacks or promises for asynchronous code. It's important to handle errors to prevent the application from crashing and to provide feedback about what went wrong.<br><small></small>",
  },
  {
    question: "What are streams in Node.js?",
    answer:
      "Streams are objects that allow you to read data from a source or write data to a destination in continuous fashion. They are used to handle reading/writing files, network communications, or any kind of end-to-end information exchange. Streams in Node.js are instances of EventEmitter class.<br><small></small>",
  },
  {
    question: "Can you explain the concept of Promises in Node.js?",
    answer:
      "Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They are used to avoid callback hell and to write cleaner asynchronous code. A Promise can be in one of three states: pending, fulfilled, or rejected.<br><small></small>",
  },
  {
    question: "What is the purpose of the 'await' keyword in Node.js?",
    answer:
      "The 'await' keyword is used to pause the execution of an async function and wait for the passed Promise to be fulfilled or rejected, and to obtain its resulting value. It can only be used inside functions defined with the 'async' keyword.<br><small></small>",
  },
  {
    question: "How to read and write files in Node.js?",
    answer:
      "Node.js provides a 'fs' (File System) module that allows you to read and write files on your computer. You can use 'fs.readFile' to read files and 'fs.writeFile' to write files. Both methods are available in synchronous and asynchronous versions.<br><small></small>",
  },
  {
    question: "What is the use of 'module.exports' in Node.js?",
    answer:
      "'module.exports' is a special object in Node.js that is used to export functions, objects, or primitive values from a module so that they can be used in other modules. It's how you make parts of your code available to be required and used in other files.<br><small></small>",
  },
  {
    question: "How to create a simple web server in Node.js?",
    answer:
      "<pre><code>const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello World\\n');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});</code></pre><small></small>",
  },
  {
    question: "What are the different types of APIs available in Node.js?",
    answer:
      "Node.js provides several built-in APIs, including:<br><ul><li><b>File System API:</b> for interacting with the file system.</li><li><b>HTTP API:</b> for building HTTP servers and clients.</li><li><b>Path API:</b> for handling and transforming file paths.</li><li><b>Stream API:</b> for working with streaming data.</li><li><b>Buffer API:</b> for handling binary data.</li></ul>Additionally, you can create your own custom APIs in Node.js.<br><small></small>",
  },
  {
    question: "How to debug a Node.js application?",
    answer:
      "You can debug a Node.js application using the built-in debugger, by running your application with the 'inspect' flag (e.g., node --inspect app.js), and then connecting a debugger client to the specified port. You can also use console.log statements to output debug information to the console.<br><small></small>",
  },
  {
    question: "What is the purpose of the 'process' object in Node.js?",
    answer:
      "The 'process' object is a global object in Node.js that provides information about, and control over, the current Node.js process. It can be used to access command-line arguments, environment variables, and to control the process's input/output streams. It also provides methods to exit the process and to handle uncaught exceptions.<br><small></small>",
  },
  {
    question: "Can you explain what a 'callback hell' is?",
    answer:
      "Callback hell, also known as 'Pyramid of Doom', is a term used to describe the situation when you have multiple nested callbacks in your code, making it hard to read and maintain. It often occurs in asynchronous programming when dealing with multiple successive asynchronous operations.<br><small></small>",
  },
  {
    question: "What are the advantages of using Express.js with Node.js?",
    answer:
      "Express.js is a web application framework for Node.js that provides a robust set of features for building web and mobile applications. Advantages of using Express.js with Node.js include:<br><ul><li>Simplifies the process of building server-side applications.</li><li>Provides a large number of HTTP utility methods and middleware to create a robust API.</li><li>Facilitates the integration of databases, authentication, and other services.</li><li>Has a large ecosystem of plugins and middleware.</li></ul><small></small>",
  },
  {
    question: "How to handle 404 errors in Node.js?",
    answer:
      "404 errors, or 'Not Found' errors, occur when the requested resource is not found on the server. In Node.js, you can handle 404 errors by defining a middleware function that matches all requests (using app.use('*')) and sends a 404 response. It's important to define this middleware after all other routes and middleware to catch any unmatched requests.<br><small></small>",
  },
  {
    question: "What is CORS and how to enable it in Node.js?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is a security feature that restricts web applications from making requests to a different domain than the one that served the web page. To enable CORS in Node.js, you can use the 'cors' middleware package, which allows you to specify which domains are permitted to access resources on your server.<br><small></small>",
  },
  {
    question: "How to parse JSON data in Node.js?",
    answer:
      "To parse JSON data in Node.js, you can use the 'JSON.parse()' method, which parses a JSON string and constructs the JavaScript value or object described by the string. To convert a JavaScript object to a JSON string, you can use the 'JSON.stringify()' method.<br><small></small>",
  },
  {
    question: "What is the use of 'res.sendFile' in Express.js?",
    answer:
      "'res.sendFile' is a method in Express.js used to send a file as an HTTP response. This method is used to serve static files, like images, CSS files, and JavaScript files, to the client. It automatically sets the correct Content-Type header based on the file extension.<br><small></small>",
  },
  {
    question: "How to set up a basic routing in Express.js?",
    answer:
      "Routing in Express.js is set up by defining route paths and the corresponding request handling functions. You can define routes for different HTTP methods (GET, POST, etc.) and for different paths. Here's an example:<br><pre><code>const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(3000, () => {\n  console.log('Server is running on port 3000');\n});</code></pre><small></small>",
  },
  {
    question: "What are environment variables in Node.js?",
    answer:
      "Environment variables are variables that are available in the environment in which a Node.js application is running. They are often used to store configuration settings, like database connection strings, API keys, and other sensitive information. In Node.js, you can access environment variables using 'process.env.VARIABLE_NAME'.<br><small></small>",
  },
  {
    question: "How to manage asynchronous code in Node.js?",
    answer:
      "Asynchronous code in Node.js can be managed using callbacks, promises, and async/await syntax. Callbacks are functions passed as arguments to be executed later. Promises are objects that represent the eventual completion or failure of an asynchronous operation. Async/await is syntactic sugar built on top of promises, allowing you to write asynchronous code that looks synchronous.<br><small></small>",
  },
  {
    question: "What is the purpose of the 'static' middleware in Express.js?",
    answer:
      "The 'static' middleware in Express.js is used to serve static files, like HTML files, images, CSS files, and JavaScript files, from a directory. It is a built-in middleware function in Express, and it is used to specify the directory from which to serve static assets.<br><small></small>",
  },
  {
    question: "How to handle form data in Node.js?",
    answer:
      "Form data in Node.js can be handled using middleware like 'body-parser', which parses incoming request bodies in a middleware before your handlers, available under the 'req.body' property. It can parse different types of form data, like URL-encoded data and JSON data.<br><small></small>",
  },
  {
    question: "What is the use of 'res.json' in Express.js?",
    answer:
      "'res.json' is a method in Express.js used to send a JSON response. This method converts a JavaScript object or value to a JSON string and sends it as the response body, with the correct Content-Type header set to 'application/json'.<br><small></small>",
  },
  {
    question: "How to implement authentication in Node.js?",
    answer:
      "Authentication in Node.js can be implemented using middleware like 'passport', which is a popular authentication middleware for Node.js. It can be used to authenticate requests, manage user sessions, and integrate with various authentication strategies, like local username/password, OAuth, and OpenID.<br><small></small>",
  },
  {
    question: "What are websockets and how to use them in Node.js?",
    answer:
      "Websockets are a protocol for full-duplex communication channels over a single TCP connection, commonly used in real-time web applications. In Node.js, you can use the 'ws' library to work with websockets, which provides a simple and efficient way to handle websocket connections and messages.<br><small></small>",
  },
  {
    question: "How to handle file uploads in Node.js?",
    answer:
      "File uploads in Node.js can be handled using middleware like 'multer', which is a middleware for handling 'multipart/form-data', which is used for uploading files. It is easy to use and integrates well with Express.js.<br><small>Source: multerjs.com</small>",
  },
  {
    question: "What is the use of 'res.redirect' in Express.js?",
    answer:
      "'res.redirect' is a method in Express.js used to redirect the client to a different URL. It sends a response to the client with a status code of 302 (Found) by default, and the URL to redirect to. The client then makes a new request to the specified URL.<br><small></small>",
  },
  {
    question: "How to implement session management in Node.js?",
    answer:
      "Session management in Node.js can be implemented using middleware like 'express-session', which is a session middleware for Express.js. It can be used to store session data on the server side, and to manage session IDs and cookies.<br><small></small>",
  },
  {
    question: "What are the security best practices for Node.js applications?",
    answer:
      "Some security best practices for Node.js applications include:<br><ul><li>Keep your Node.js and dependencies up to date.</li><li>Use environment variables for sensitive configuration data.</li><li>Validate and sanitize user input.</li><li>Implement proper error handling.</li><li>Use HTTPS.</li><li>Limit request rates (rate limiting).</li><li>Use security headers (helmet).</li></ul>It's also important to regularly review and update your application's security measures.<br><small></small>",
  },
  {
    question: "How to optimize the performance of a Node.js application?",
    answer:
      "To optimize the performance of a Node.js application, you can:<br><ul><li>Use the latest stable version of Node.js.</li><li>Optimize your code and algorithms.</li><li>Use asynchronous and non-blocking I/O operations.</li><li>Implement caching strategies.</li><li>Use a load balancer to distribute traffic.</li><li>Monitor and profile your application to identify bottlenecks.</li></ul>Performance optimization is an ongoing process and should be regularly reviewed and updated.<br><small></small>",
  },
  {
    question: "What is the role of the package.json file in a Node.js project?",
    answer:
      "The package.json file is a crucial part of a Node.js project. It is used to manage the project's dependencies, scripts, version, and other metadata. It allows you to specify the libraries your project depends on, and it can be used to automate tasks like testing, building, and starting the application.<br><small></small>",
  },
  {
    question: "How to create and use a custom module in Node.js?",
    answer:
      "To create a custom module in Node.js, you need to create a new JavaScript file, define your functions or variables, and then export them using 'module.exports'. To use the module in another file, you can use the 'require' function to import it. Here's an example:<br><pre><code>// myModule.js\nconst myFunction = () => {\n  console.log('Hello from myFunction!');\n};\n\nmodule.exports = myFunction;</code></pre><small></small>",
  },
  {
    question:
      "What is the difference between 'require' and 'import' in Node.js?",
    answer:
      "'require' is a function used to import modules in Node.js, while 'import' is a newer syntax for importing modules, introduced in ES6. 'require' is synchronous and can load modules conditionally, while 'import' is asynchronous and hoisted to the top of the file. Both can be used to include external modules or files in your Node.js application.<br><small></small>",
  },
  {
    question: "How to use environment variables in a Node.js application?",
    answer:
      "To use environment variables in a Node.js application, you can access them through the 'process.env' object. You can set environment variables in your operating system, or in a .env file in your project, and then access them in your application code. For example:<br><pre><code>const dbPassword = process.env.DB_PASSWORD;</code></pre><small></small>",
  },
  {
    question: "What is the purpose of the 'debug' module in Node.js?",
    answer:
      "The 'debug' module is a small debugging utility for Node.js, which allows you to conditionally print debug messages to the console. You can enable or disable debug messages for specific modules or namespaces, making it easier to debug your application. To use it, you need to install it as a dependency, and then require and use it in your code.<br><small>Source: debugjs.com</small>",
  },
  {
    question: "How to handle uncaught exceptions in Node.js?",
    answer:
      "To handle uncaught exceptions in Node.js, you can use the 'process.on' method to listen for the 'uncaughtException' event. This event is emitted when an exception bubbles all the way back to the event loop, and is not caught by any 'try...catch' block. You can use it to log the error and perform cleanup actions before the application exits.<br><small></small>",
  },
  {
    question: "What is the use of 'app.use' in Express.js?",
    answer:
      "'app.use' is a method in Express.js used to mount middleware functions at a specified path. It can be used to execute code, modify the request and response objects, end the request-response cycle, and call the next middleware function. It is a fundamental part of how middleware works in Express.js.<br><small></small>",
  },
  {
    question: "How to enable HTTPS in a Node.js application?",
    answer:
      "To enable HTTPS in a Node.js application, you need to obtain an SSL/TLS certificate, and then use the 'https' module to create an HTTPS server. You can use the 'https.createServer' method to create an HTTPS server instance, and then pass your certificate and key to it. Here's an example:<br><pre><code>const https = require('https');\n\nconst options = {\n  key: fs.readFileSync('server.key'),\n  cert: fs.readFileSync('server.cert')\n};\n\nhttps.createServer(options, app).listen(443, () => {\n  console.log('HTTPS Server running on port 443');\n});</code></pre><small></small>",
  },
  {
    question: "What are the common Node.js debugging techniques?",
    answer:
      "Common Node.js debugging techniques include:<br><ul><li>Using the built-in debugger and the 'inspect' flag.</li><li>Using console.log statements to output debug information.</li><li>Using the 'debug' module to conditionally print debug messages.</li><li>Using a debugger client, like Chrome DevTools, to set breakpoints and inspect variables.</li></ul>Debugging is an essential part of development, and it's important to use the right techniques and tools to effectively debug your Node.js applications.<br><small></small>",
  },
  {
    question: "How to test a Node.js application?",
    answer:
      "To test a Node.js application, you can use testing frameworks like 'Mocha', 'Jasmine', or 'Jest', which provide tools and utilities for writing and running tests. You can write unit tests, integration tests, and end-to-end tests to ensure the correctness and quality of your application. Here's an example of a simple test using Mocha:<br><pre><code>const assert = require('assert');\nconst myFunction = require('./myModule');\n\ndescribe('myFunction', () => {\n  it('should return true when input is true', () => {\n    assert.strictEqual(myFunction(true), true);\n  });\n});</code></pre><small></small>",
  },
  {
    question:
      "What is the role of the 'npm start' script in a Node.js project?",
    answer:
      "The 'npm start' script is a convention in Node.js projects, defined in the package.json file, that specifies the command to start the application. It is used to start the server or the main file of the application. You can run it using the command 'npm start'. By default, it runs the 'node server.js' command, but it can be customized to run any command.<br><small></small>",
  },
  {
    question: "How to use async/await in Node.js?",
    answer:
      "Async/await is a syntax for working with asynchronous code in a more synchronous fashion, introduced in ES2017. To use async/await in Node.js, you need to define your function as 'async', and then you can use the 'await' keyword inside the function to wait for a Promise to be resolved or rejected. Here's an example:<br><pre><code>const myAsyncFunction = async () => {\n  try {\n    const result = await somePromise();\n    console.log(result);\n  } catch (error) {\n    console.error(error);\n  }\n};</code></pre><small></small>",
  },
  {
    question:
      "What is the difference between synchronous and asynchronous functions in Node.js?",
    answer:
      "Synchronous functions in Node.js are functions that block the execution of code until they complete, while asynchronous functions are non-blocking and allow the execution of code to continue while they are running. Asynchronous functions in Node.js often use callbacks, promises, or async/await syntax to handle the result of the asynchronous operation. It's important to understand the difference to effectively manage asynchronous code in Node.js.<br><small></small>",
  },
  {
    question: "How to handle multiple asynchronous operations in Node.js?",
    answer:
      "To handle multiple asynchronous operations in Node.js, you can use techniques like:<br><ul><li>Using callbacks to handle the result of each operation.</li><li>Using promises to chain multiple asynchronous operations.</li><li>Using async/await syntax to write asynchronous code that looks synchronous.</li><li>Using 'Promise.all' to run multiple promises concurrently and wait for all of them to be resolved.</li></ul>It's important to manage asynchronous operations effectively to avoid callback hell and to write clean and maintainable code.<br><small></small>",
  },
  {
    question: "What is the purpose of the 'fs' module in Node.js?",
    answer:
      "The 'fs' (File System) module in Node.js is used to interact with the file system of the operating system. It allows you to read, write, update, and delete files and directories, and to perform other file system-related tasks. It provides both synchronous and asynchronous methods for file operations. Here's an example of reading a file using the 'fs' module:<br><pre><code>const fs = require('fs');\n\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  console.log(data);\n});</code></pre><small></small>",
  },
  {
    question: "How to create a readable stream in Node.js?",
    answer:
      "To create a readable stream in Node.js, you can use the 'fs.createReadStream' method, which creates a readable stream for reading data from a file. You can also create custom readable streams by extending the 'Readable' class from the 'stream' module. Here's an example of creating a readable stream from a file:<br><pre><code>const fs = require('fs');\n\nconst readableStream = fs.createReadStream('file.txt', 'utf8');\n\nreadableStream.on('data', (chunk) => {\n  console.log(`Received chunk: ${chunk}`);\n});\n\nreadableStream.on('end', () => {\n  console.log('No more data to read.');\n});</code></pre><small></small>",
  },
  {
    question:
      "What is the difference between 'readFile' and 'createReadStream' in Node.js?",
    answer:
      "'readFile' is a method in the 'fs' module that reads the entire contents of a file and returns it as a string or buffer, while 'createReadStream' is a method that creates a readable stream for reading data from a file. 'readFile' is suitable for reading small files, while 'createReadStream' is more efficient for reading large files or for reading files in chunks.<br><small></small>",
  },
  {
    question: "How to pause and resume a readable stream in Node.js?",
    answer:
      "To pause and resume a readable stream in Node.js, you can use the 'pause' and 'resume' methods of the stream. Pausing a stream stops the emission of 'data' events, while resuming the stream allows the 'data' events to be emitted again. Here's an example:<br><pre><code>const fs = require('fs');\n\nconst readableStream = fs.createReadStream('file.txt', 'utf8');\n\nreadableStream.on('data', (chunk) => {\n  console.log(`Received chunk: ${chunk}`);\n  readableStream.pause(); // pause the stream\n  setTimeout(() => {\n    readableStream.resume(); // resume the stream after 1 second\n  }, 1000);\n});</code></pre><small></small>",
  },
  {
    question: "What is the purpose of the 'pipe' method in Node.js streams?",
    answer:
      "The 'pipe' method in Node.js streams is used to connect the output of one stream to the input of another, allowing you to easily transfer data between streams. It is commonly used to read data from a source stream and write it to a destination stream, like reading from a file and writing to an HTTP response. Here's an example:<br><pre><code>const fs = require('fs');\nconst http = require('http');\n\nhttp.createServer((req, res) => {\n  const readStream = fs.createReadStream('file.txt');\n  readStream.pipe(res); // pipe the read stream to the response\n}).listen(3000);</code></pre><small></small>",
  },
  {
    question: "How to handle backpressure in Node.js streams?",
    answer:
      "Backpressure in Node.js streams is handled automatically by the stream module. When the internal buffer of a stream is full, the stream will stop reading from the source (e.g., a file or network socket) until there is space available in the buffer. This prevents the application from consuming too much memory and crashing. You can also manually control the flow of data and handle backpressure by using the 'pause' and 'resume' methods of the stream.<br><small></small>",
  },
  {
    question:
      "What is the difference between 'on' and 'once' methods in Node.js event handling?",
    answer:
      "'on' is a method used to register an event listener that will be called every time the specified event is emitted, while 'once' is a method used to register an event listener that will be called only the next time the specified event is emitted, and then it will be removed. Both methods are used to handle events in Node.js, but 'once' is useful for one-time event handling.<br><small></small>",
  },
  {
    question: "How to emit and handle custom events in Node.js?",
    answer:
      "To emit and handle custom events in Node.js, you can use the 'EventEmitter' class from the 'events' module. You can create an instance of 'EventEmitter', and then use the 'on' method to register event listeners, and the 'emit' method to emit events. Here's an example:<br><pre><code>const EventEmitter = require('events');\n\nconst myEmitter = new EventEmitter();\n\nmyEmitter.on('eventName', (arg1, arg2) => {\n  console.log(`Event received with arguments: ${arg1}, ${arg2}`);\n});\n\nmyEmitter.emit('eventName', 'arg1Value', 'arg2Value');</code></pre><small></small>",
  },
  {
    question:
      "What is the purpose of the 'setImmediate' and 'setTimeout' functions in Node.js?",
    answer:
      "'setImmediate' and 'setTimeout' are both used to schedule the execution of a function after a certain period of time. 'setTimeout' executes the function after the specified number of milliseconds, while 'setImmediate' executes the function on the next iteration of the event loop, after I/O events. They are useful for deferring the execution of a function to allow other operations to complete first.<br><small></small>",
  },
  {
    question: "How to clear a timeout or interval in Node.js?",
    answer:
      "To clear a timeout or interval in Node.js, you can use the 'clearTimeout' or 'clearInterval' functions, respectively. You need to pass the identifier returned by 'setTimeout' or 'setInterval' to these functions to clear the scheduled execution. Here's an example:<br><pre><code>const timeoutId = setTimeout(() => {\n  console.log('This will not be logged');\n}, 1000);\n\nclearTimeout(timeoutId); // clear the timeout</code></pre><small></small>",
  },
  {
    question:
      "What is the difference between process.nextTick and setImmediate?",
    answer:
      "Both process.nextTick and setImmediate are used to schedule the execution of a function, but they differ in when the function is executed. process.nextTick schedules the function to be executed in the same phase of the event loop, before any I/O tasks, while setImmediate schedules the function to be executed in the next iteration of the event loop, after I/O tasks. Here's an example:<br><pre><code>console.log('Start');\n\nsetImmediate(() => {\n  console.log('setImmediate');\n});\n\nprocess.nextTick(() => {\n  console.log('process.nextTick');\n});\n\nconsole.log('End');</code></pre>Output:<br>Start<br>End<br>process.nextTick<br>setImmediate<br><small></small>",
  },
  {
    question: "How to handle DNS lookups in Node.js?",
    answer:
      "To handle DNS lookups in Node.js, you can use the 'dns' module, which provides functions to perform DNS queries and resolve domain names. You can use 'dns.lookup' to resolve a domain name to an IP address, and 'dns.resolve' to perform other types of DNS queries, like MX or TXT records. Here's an example:<br><pre><code>const dns = require('dns');\n\ndns.lookup('www.example.com', (err, addresses, family) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  console.log('Addresses:', addresses);\n});</code></pre><small></small>",
  },
  {
    question: "What is the purpose of the 'cluster' module in Node.js?",
    answer:
      "The 'cluster' module in Node.js is used to create and manage child processes (workers) that can share the same server port, allowing you to take advantage of multi-core systems. It enables the creation of a cluster of Node.js processes that can handle incoming connections concurrently. Here's an example:<br><pre><code>const cluster = require('cluster');\nconst http = require('http');\n\nif (cluster.isMaster) {\n  // Fork workers.\n  for (let i = 0; i < require('os').cpus().length; i++) {\n    cluster.fork();\n  }\n} else {\n  // Workers can share any TCP connection.\n  http.createServer((req, res) => {\n    res.writeHead(200);\n    res.end('Hello World\\n');\n  }).listen(8000);\n}</code></pre><small></small>",
  },
  {
    question: "How to enable gzip compression in a Node.js application?",
    answer:
      "To enable gzip compression in a Node.js application, you can use the 'compression' middleware in Express.js, which is a middleware that compresses the response body using gzip compression. It helps to reduce the size of the response body and improve the performance of the application. Here's an example:<br><pre><code>const compression = require('compression');\n\napp.use(compression());</code></pre><small>Source: compression.github.io</small>",
  },
  {
    question: "What is the use of 'res.setHeader' in Node.js?",
    answer:
      "'res.setHeader' is a method in Node.js used to set the value of an HTTP response header. It can be used to set custom headers, or to modify the value of standard headers. Here's an example:<br><pre><code>res.setHeader('Content-Type', 'application/json');</code></pre><small></small>",
  },
  {
    question: "How to implement rate limiting in a Node.js application?",
    answer:
      "Rate limiting in a Node.js application can be implemented using middleware like 'express-rate-limit', which is a middleware that limits the number of requests to a specified number per IP address within a given time window. It helps to prevent abuse and to ensure fair usage of resources. Here's an example:<br><pre><code>const rateLimit = require('express-rate-limit');\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100 // limit each IP to 100 requests per windowMs\n});\n\napp.use(limiter);</code></pre><small>Source: express-rate-limit.github.io</small>",
  },
  {
    question: "What is the purpose of the 'helmet' middleware in Express.js?",
    answer:
      "The 'helmet' middleware in Express.js is used to secure your Express apps by setting various HTTP headers, helping to protect your app from well-known web vulnerabilities by mitigating the risks associated with them. It is a collection of 14 smaller middleware functions that set security-related HTTP headers. Here's an example:<br><pre><code>const helmet = require('helmet');\n\napp.use(helmet());</code></pre><small>Source: helmetjs.github.io</small>",
  },
  {
    question: "How to configure CORS in an Express.js application?",
    answer:
      "CORS (Cross-Origin Resource Sharing) can be configured in an Express.js application using the 'cors' middleware, which allows you to specify which origins are permitted to access resources on your server. You can enable CORS for all routes or for specific routes. Here's an example:<br><pre><code>const cors = require('cors');\n\napp.use(cors()); // enable CORS for all routes</code></pre><small></small>",
  },
  {
    question:
      "What is the use of 'express.json' and 'express.urlencoded' middleware?",
    answer:
      "'express.json' and 'express.urlencoded' are built-in middleware functions in Express.js, used to parse incoming request bodies. 'express.json' parses JSON formatted request bodies, while 'express.urlencoded' parses URL-encoded request bodies. They are commonly used to handle form submissions and JSON data in requests. Here's an example:<br><pre><code>app.use(express.json());\napp.use(express.urlencoded({ extended: true }));</code></pre><small></small>",
  },
  {
    question: "How to serve static files in an Express.js application?",
    answer:
      "To serve static files in an Express.js application, you can use the 'express.static' middleware, which serves static files from a specified directory. It is used to serve assets like images, CSS files, and JavaScript files. Here's an example:<br><pre><code>app.use(express.static('public')); // serve static files from the 'public' directory</code></pre><small></small>",
  },
  {
    question: "What is the purpose of the 'morgan' middleware in Express.js?",
    answer:
      "The 'morgan' middleware in Express.js is used to log HTTP requests and responses, providing a simple way to track and debug requests in your application. It can log requests to the console or to a file, and it supports different log formats. Here's an example:<br><pre><code>const morgan = require('morgan');\n\napp.use(morgan('combined')); // log requests to the console in 'combined' format</code></pre><small>Source: morganjs.com</small>",
  },
  {
    question: "How to handle uncaughtPromiseRejections in Node.js?",
    answer:
      "To handle uncaughtPromiseRejections in Node.js, you can use the 'process.on' method to listen for the 'unhandledRejection' event. This event is emitted when a promise is rejected and no error handler is attached to the promise within a turn of the event loop. You can use it to log the error and perform cleanup actions. Here's an example:<br><pre><code>process.on('unhandledRejection', (reason, promise) => {\n  console.error('Unhandled Rejection at:', promise, 'reason:', reason);\n});</code></pre><small></small>",
  },
  {
    question:
      "What is the use of 'res.cookie' and 'res.clearCookie' in Express.js?",
    answer:
      "'res.cookie' and 'res.clearCookie' are methods in Express.js used to set and clear cookies, respectively. 'res.cookie' is used to set a cookie in the response header, while 'res.clearCookie' is used to remove a cookie. Here's an example:<br><pre><code>res.cookie('name', 'value', { maxAge: 900000, httpOnly: true }); // set a cookie\nres.clearCookie('name'); // clear the cookie</code></pre><small></small>",
  },
  {
    question: "How to implement password hashing in Node.js?",
    answer:
      "Password hashing in Node.js can be implemented using libraries like 'bcrypt' or 'argon2', which are popular password hashing libraries. They provide functions to hash passwords and to verify hashed passwords. Here's an example using 'bcrypt':<br><pre><code>const bcrypt = require('bcrypt');\n\nconst saltRounds = 10;\nconst myPlaintextPassword = 's0///r3zZ';\nconst someOtherPlaintextPassword = 'not_bacon';\n\nbcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {\n  // Store hash in your password DB.\n});\n\n// To check a password\nbcrypt.compare(myPlaintextPassword, hash, (err, result) => {\n  // result == true or false\n});</code></pre><small>Source: bcryptjs.com</small>",
  },
  {
    question: "What is the purpose of the 'dotenv' package in Node.js?",
    answer:
      "The 'dotenv' package in Node.js is used to load environment variables from a .env file into process.env, allowing you to easily manage configuration settings and sensitive information, like API keys and database connection strings, in your application. It helps to keep your code clean and secure. Here's an example:<br><pre><code>require('dotenv').config();\n\nconst dbPassword = process.env.DB_PASSWORD;</code></pre><small></small>",
  },
  {
    question: "How to schedule tasks in a Node.js application?",
    answer:
      "To schedule tasks in a Node.js application, you can use libraries like 'node-cron' or 'agenda', which provide tools to schedule and manage recurring tasks or jobs. They allow you to specify the frequency and the task to be executed. Here's an example using 'node-cron':<br><pre><code>const cron = require('node-cron');\n\n// Schedule a task to run every minute\ncron.schedule('* * * * *, () => {\n  console.log('Running a task every minute');\n});</code></pre><small></small>",
  },
  {
    question: "What is the use of 'res.locals' in Express.js?",
    answer:
      "'res.locals' is an object in Express.js that contains response local variables, which are available only to the view(s) rendered during the request/response cycle. It is used to pass data from the server to the view templates. Here's an example:<br><pre><code>app.get('/', (req, res) => {\n  res.locals.title = 'Home';\n  res.render('index');\n});</code></pre><small></small>",
  },
  {
    question: "How to implement two-factor authentication in Node.js?",
    answer:
      "Two-factor authentication in Node.js can be implemented using libraries like 'speakeasy' or 'otplib', which provide functions to generate and verify one-time passwords (OTPs) for two-factor authentication. Here's an example using 'speakeasy':<br><pre><code>const speakeasy = require('speakeasy');\n\n// Generate a secret key for the user\nconst secret = speakeasy.generateSecret({ length: 20 });\nconsole.log('Secret key:', secret.base32); // Store this key in your database\n\n// Generate a token\nconst token = speakeasy.totp({\n  secret: secret.base32,\n  encoding: 'base32'\n});\nconsole.log('Token:', token);\n\n// Verify a token\nconst isValid = speakeasy.totp.verify({\n  secret: secret.base32,\n  encoding: 'base32',\n  token: token\n});\nconsole.log('Is token valid?', isValid);</code></pre><small>Source: speakeasyjs.github.io</small>",
  },
  {
    question:
      "What are the common performance bottlenecks in Node.js applications?",
    answer:
      "Common performance bottlenecks in Node.js applications include:<br><ul><li>Blocking the event loop with synchronous code.</li><li>Heavy computation tasks that can be offloaded to worker threads or external services.</li><li>Improper handling of asynchronous operations, leading to callback hell or unhandled promise rejections.</li><li>Memory leaks or excessive memory usage.</li><li>Improperly configured or missing caching.</li></ul>It's important to regularly monitor and profile your application to identify and address performance bottlenecks.<br><small></small>",
  },
  {
    question: "How to secure sensitive data in a Node.js application?",
    answer:
      "To secure sensitive data in a Node.js application, you can:<br><ul><li>Use environment variables to store sensitive configuration data.</li><li>Use encryption to protect sensitive data at rest and in transit.</li><li>Use secure password hashing algorithms to store passwords.</li><li>Regularly update dependencies and use security patches.</li><li>Implement proper access controls and authentication mechanisms.</li></ul>It's important to follow security best practices and to regularly review and update your application's security measures.<br><small></small>",
  },
  {
    question:
      "What is the role of the 'app.listen' method in an Express.js application?",
    answer:
      "The 'app.listen' method in an Express.js application is used to bind and listen for connections on the specified host and port. It is used to start the server and begin accepting incoming requests. Here's an example:<br><pre><code>app.listen(3000, () => {\n  console.log('Server is running on port 3000');\n});</code></pre><small></small>",
  },
  {
    question: "How to implement logging in a Node.js application?",
    answer:
      "Logging in a Node.js application can be implemented using libraries like 'winston' or 'morgan', which provide flexible and configurable logging solutions. They allow you to log messages to the console, files, or external logging services, and to control the log level and format. Here's an example using 'winston':<br><pre><code>const winston = require('winston');\n\nconst logger = winston.createLogger({\n  level: 'info',\n  format: winston.format.json(),\n  transports: [\n    new winston.transports.File({ filename: 'error.log', level: 'error' }),\n    new winston.transports.Console()\n  ]\n});\n\nlogger.info('Informational message');\nlogger.error('Error message');</code></pre><small>Source: winstonjs.github.io</small>",
  },
  {
    question:
      "What is the purpose of the 'compression' middleware in Express.js?",
    answer:
      "The 'compression' middleware in Express.js is used to compress the response body using gzip compression, to reduce the size of the response and improve the performance of the application. It is a built-in middleware function in Express, and it is used to enable gzip compression for all responses. Here's an example:<br><pre><code>const compression = require('compression');\n\napp.use(compression());</code></pre><small>Source: compression.github.io</small>",
  },
  {
    question: "How to implement input validation in a Node.js application?",
    answer:
      "Input validation in a Node.js application can be implemented using libraries like 'express-validator' or 'joi', which provide tools to validate and sanitize user input. They allow you to define validation rules and messages, and to automatically validate incoming request data. Here's an example using 'express-validator':<br><pre><code>const { body, validationResult } = require('express-validator');\n\napp.post('/user', [\n  body('username').isLength({ min: 5 }),\n  body('email').isEmail()\n], (req, res) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(400).json({ errors: errors.array() });\n  }\n  // handle valid data\n});</code></pre><small>Source: express-validator.github.io</small>",
  },
  {
    question: "What is the use of 'res.status' in Express.js?",
    answer:
      "'res.status' is a method in Express.js used to set the HTTP status code of the response. It can be used to indicate the success or failure of a request, and to send appropriate status codes, like 200 (OK), 404 (Not Found), or 500 (Internal Server Error). Here's an example:<br><pre><code>res.status(404).send('Not Found');</code></pre><small></small>",
  },
  {
    question: "How to implement session management in a Node.js application?",
    answer:
      "Session management in a Node.js application can be implemented using libraries like 'express-session' or 'connect-redis', which provide tools to manage user sessions and to store session data on the server side. They allow you to create, read, update, and delete session data, and to manage session expiration and cleanup. Here's an example using 'express-session':<br><pre><code>const session = require('express-session');\n\napp.use(session({\n  secret: 'mySecret',\n  resave: false,\n  saveUninitialized: true,\n  cookie: { secure: false }\n}));</code></pre><small></small>",
  },
  {
    question: "What is the purpose of the 'connect' module in Node.js?",
    answer:
      "The 'connect' module in Node.js is a middleware framework for Node.js, providing a set of middleware functions to handle HTTP requests. It is used to build web applications and APIs, and to add functionality like logging, authentication, and session management to Node.js applications. It is the foundation of the Express.js framework. Here's an example:<br><pre><code>const connect = require('connect');\n\nconst app = connect();\n\napp.use((req, res) => {\n  res.end('Hello World!');\n});\n\napp.listen(3000);</code></pre><small>Source: connect.nodejs.org</small>",
  },
  {
    question: "How to handle 404 errors in an Express.js application?",
    answer:
      "404 errors, or 'Not Found' errors, occur when the requested resource is not found on the server. In an Express.js application, you can handle 404 errors by defining a middleware function that matches all requests (using app.use('*')) and sends a 404 response. It's important to define this middleware after all other routes and middleware to catch any unmatched requests. Here's an example:<br><pre><code>app.use((req, res) => {\n  res.status(404).send('Not Found');\n});</code></pre><small></small>",
  },
  {
    question: "What is the use of 'express.Router' in Express.js?",
    answer:
      "'express.Router' is a class in Express.js used to create modular, mountable route handlers. It is used to define routes and middleware for a specific part of your application, and to organize your code in a modular way. Here's an example:<br><pre><code>const express = require('express');\nconst router = express.Router();\n\nrouter.get('/', (req, res) => {\n  res.send('Home Page');\n});\n\nrouter.get('/about', (req, res) => {\n  res.send('About Page');\n});\n\nmodule.exports = router;</code></pre><small></small>",
  },
  {
    question: "How to enable CORS in an Express.js application?",
    answer:
      "CORS (Cross-Origin Resource Sharing) can be enabled in an Express.js application using the 'cors' middleware, which allows you to specify which origins are permitted to access resources on your server. You can enable CORS for all routes or for specific routes. Here's an example:<br><pre><code>const cors = require('cors');\n\napp.use(cors()); // enable CORS for all routes</code></pre><small></small>",
  },
  {
    question: "What is the use of 'express.static' middleware?",
    answer:
      "'express.static' is a built-in middleware function in Express.js, used to serve static files, like HTML files, images, CSS files, and JavaScript files, from a directory. It is used to specify the directory from which to serve static assets. Here's an example:<br><pre><code>app.use(express.static('public')); // serve static files from the 'public' directory</code></pre><small></small>",
  },
  {
    question: "How to parse URL parameters in an Express.js application?",
    answer:
      "To parse URL parameters in an Express.js application, you can use the 'req.params' object, which contains the route parameters parsed from the URL. You can define route parameters in your route path using the ':' prefix, and then access them in your request handler. Here's an example:<br><pre><code>app.get('/user/:id', (req, res) => {\n  const userId = req.params.id;\n  res.send(`User ID: ${userId}`);\n});</code></pre><small></small>",
  },
  {
    question:
      "What is the purpose of the 'body-parser' middleware in Express.js?",
    answer:
      "The 'body-parser' middleware in Express.js is used to parse the body of incoming request messages, in order to access the data in the request body. It can parse different types of request bodies, like JSON, URL-encoded, and text. It is commonly used to handle form submissions and JSON data in requests. Here's an example:<br><pre><code>const bodyParser = require('body-parser');\n\napp.use(bodyParser.json()); // parse JSON formatted request bodies\napp.use(bodyParser.urlencoded({ extended: true })); // parse URL-encoded request bodies</code></pre><small>Source: body-parser.github.io</small>",
  },
  {
    question:
      "How to implement OAuth 2.0 authentication in a Node.js application?",
    answer:
      "OAuth 2.0 authentication in a Node.js application can be implemented using libraries like 'passport-oauth2' or 'simple-oauth2', which provide tools to implement OAuth 2.0 authorization code flow, client credentials flow, and other OAuth 2.0 flows. Here's an example using 'passport-oauth2':<br><pre><code>const passport = require('passport');\nconst OAuth2Strategy = require('passport-oauth2').Strategy;\n\npassport.use(new OAuth2Strategy({\n    authorizationURL: 'https://provider.com/oauth2/authorize',\n    tokenURL: 'https://provider.com/oauth2/token',\n    clientID: 'yourClientID',\n    clientSecret: 'yourClientSecret',\n    callbackURL: 'https://yourapp.com/callback'\n  },\n  (accessToken, refreshToken, profile, cb) => {\n    // Save or update user information in your database\n    // Call cb(null, user) to pass the user to the next middleware\n  }\n));</code></pre><small></small>",
  },
  {
    question: "What are the differences between HTTP and HTTPS?",
    answer:
      "HTTP (HyperText Transfer Protocol) and HTTPS (HTTP Secure) are protocols for transferring data over the web. The main differences are:<br><ul><li>HTTPS is the secure version of HTTP, using SSL/TLS to encrypt the data transferred between the client and the server.</li><li>HTTPS provides authentication of the accessed website, ensuring that you are communicating with the intended website.</li><li>HTTPS is required for processing sensitive data, like credit card information, to ensure data security and privacy.</li><li>HTTPS URLs begin with 'https://' while HTTP URLs begin with 'http://'.</li></ul>It's important to use HTTPS to protect the integrity and confidentiality of data exchanged between the client and the server.<br><small>Source: mozilla.org</small>",
  },
  {
    question: "How to handle file downloads in a Node.js application?",
    answer:
      "To handle file downloads in a Node.js application, you can use the 'res.download' method in Express.js, which transfers the file at the given path and prompts the user to download it. You can also set the 'Content-Disposition' header to 'attachment' to force a download. Here's an example:<br><pre><code>app.get('/download', (req, res) => {\n  const file = `${__dirname}/files/report.pdf`;\n  res.download(file); // Set disposition and send file\n});</code></pre><small></small>",
  },
  {
    question: "What is the use of 'res.sendFile' in Express.js?",
    answer:
      "'res.sendFile' is a method in Express.js used to send a file as an HTTP response. This method is used to serve static files, like images, CSS files, and JavaScript files, to the client. It automatically sets the correct Content-Type header based on the file extension. Here's an example:<br><pre><code>app.get('/image', (req, res) => {\n  const file = `${__dirname}/images/photo.jpg`;\n  res.sendFile(file); // Send the file as a response\n});</code></pre><small></small>",
  },
  {
    question: "How to implement logout functionality in a Node.js application?",
    answer:
      "To implement logout functionality in a Node.js application, you can destroy the user session on the server side, and then redirect the user to the login page or home page. Here's an example:<br><pre><code>app.post('/logout', (req, res) => {\n  req.session.destroy((err) => {\n    if (err) {\n      return console.log(err);\n    }\n    res.redirect('/login');\n  });\n});</code></pre><small></small>",
  },
  {
    question:
      "What is the purpose of the 'connect-flash' middleware in Express.js?",
    answer:
      "The 'connect-flash' middleware in Express.js is used to store and retrieve flash messages, which are used to provide feedback to the user, like success or error messages. It is used to store messages in the session and to make them available to the views. Here's an example:<br><pre><code>const flash = require('connect-flash');\n\napp.use(flash());\n\napp.get('/login', (req, res) => {\n  res.render('login', { message: req.flash('error') });\n});</code></pre><small>Source: connect-flash.github.io</small>",
  },
  {
    question:
      "How to implement password reset functionality in a Node.js application?",
    answer:
      "Password reset functionality in a Node.js application can be implemented using a combination of email sending and token generation. You can generate a password reset token, send it to the user's email, and then verify the token when the user submits the new password. Here's an example:<br><pre><code>const crypto = require('crypto');\nconst nodemailer = require('nodemailer');\n\n// Generate a password reset token\nconst token = crypto.randomBytes(32).toString('hex');\n\n// Send the token to the user's email\nconst transporter = nodemailer.createTransport({/* SMTP configuration */});\ntransporter.sendMail({\n  to: user.email,\n  subject: 'Password Reset',\n  text: `Your password reset token is: ${token}`\n});</code></pre><small></small>",
  },
  {
    question: "What is the use of 'express-session' middleware?",
    answer:
      "'express-session' is a middleware for Express.js, used to manage user sessions and to store session data on the server side. It is used to create, read, update, and delete session data, and to manage session expiration and cleanup. Here's an example:<br><pre><code>const session = require('express-session');\n\napp.use(session({\n  secret: 'mySecret',\n  resave: false,\n  saveUninitialized: true,\n  cookie: { secure: false }\n}));</code></pre><small></small>",
  },
  {
    question:
      "How to implement Google OAuth 2.0 authentication in a Node.js application?",
    answer:
      "Google OAuth 2.0 authentication in a Node.js application can be implemented using the 'passport-google-oauth20' strategy with Passport.js, which provides tools to authenticate users with Google using OAuth 2.0. Here's an example:<br><pre><code>const GoogleStrategy = require('passport-google-oauth20').Strategy;\n\npassport.use(new GoogleStrategy({\n    clientID: 'yourClientID',\n    clientSecret: 'yourClientSecret',\n    callbackURL: 'https://yourapp.com/auth/google/callback'\n  },\n  (accessToken, refreshToken, profile, cb) => {\n    // Save or update user information in your database\n    // Call cb(null, user) to pass the user to the next middleware\n  }\n));</code></pre><small></small>",
  },
  {
    question: "What are the differences between PUT and PATCH methods in HTTP?",
    answer:
      "PUT and PATCH are both HTTP methods used to update resources, but they differ in how they update the resources. PUT is used to update a resource by replacing it with the new data, while PATCH is used to apply partial modifications to a resource. Here's an example:<br><pre><code>app.put('/user/:id', (req, res) => {\n  // Update the entire user data\n});\n\napp.patch('/user/:id', (req, res) => {\n  // Update only the specified fields of the user data\n});</code></pre><small></small>",
  },
  {
    question: "How to handle long-running requests in a Node.js application?",
    answer:
      "To handle long-running requests in a Node.js application, you can use techniques like:<br><ul><li>Offloading the long-running task to a worker thread or a separate service.</li><li>Using streaming to process the data in chunks.</li><li>Implementing pagination or lazy loading to reduce the amount of data processed at once.</li><li>Increasing the timeout limit for the request, if necessary.</li></ul>It's important to manage long-running requests effectively to avoid blocking the event loop and to ensure the responsiveness of the application.<br><small></small>",
  },
  {
    question: "What is the purpose of the 'request' module in Node.js?",
    answer:
      "The 'request' module in Node.js is used to make HTTP requests, allowing you to interact with external APIs or services. It provides a simple and flexible way to send HTTP requests and handle responses. Here's an example:<br><pre><code>const request = require('request');\n\nrequest('http://www.example.com', (error, response, body) => {\n  if (!error && response.statusCode == 200) {\n    console.log(body);\n  }\n});</code></pre><small>Source: requestjs.github.io</small>",
  },
  {
    question: "How to implement API rate limiting in a Node.js application?",
    answer:
      "API rate limiting in a Node.js application can be implemented using middleware like 'express-rate-limit', which is a middleware that limits the number of requests to a specified number per IP address within a given time window. It helps to prevent abuse and to ensure fair usage of resources. Here's an example:<br><pre><code>const rateLimit = require('express-rate-limit');\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100 // limit each IP to 100 requests per windowMs\n});\n\napp.use(limiter);</code></pre><small>Source: express-rate-limit.github.io</small>",
  },
  {
    question: "What is the use of 'res.redirect' in Express.js?",
    answer:
      "'res.redirect' is a method in Express.js used to redirect the client to a different URL. It sends a response to the client with a status code of 302 (Found) by default, and the URL to redirect to. The client then makes a new request to the specified URL. Here's an example:<br><pre><code>app.get('/old-url', (req, res) => {\n  res.redirect('/new-url');\n});</code></pre><small></small>",
  },
  {
    question: "How to implement user authentication in a Node.js application?",
    answer:
      "User authentication in a Node.js application can be implemented using libraries like 'passport', 'jsonwebtoken', or 'bcrypt', which provide tools to authenticate users, manage user sessions, and secure password storage. Here's an example using 'passport' and 'jsonwebtoken':<br><pre><code>const passport = require('passport');\nconst JwtStrategy = require('passport-jwt').Strategy;\nconst ExtractJwt = require('passport-jwt').ExtractJwt;\n\npassport.use(new JwtStrategy({\n    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),\n    secretOrKey: 'yourSecretKey'\n  },\n  (jwtPayload, done) => {\n    // Find the user in the database and return the user object\n    User.findById(jwtPayload.sub, (err, user) => {\n      if (err) {\n        return done(err, false);\n      }\n      if (user) {\n        return done(null, user);\n      } else {\n        return done(null, false);\n      }\n    });\n  }\n));</code></pre><small></small>",
  },
  {
    question:
      "What are the differences between session-based and token-based authentication?",
    answer:
      "Session-based and token-based authentication are two common methods of handling user authentication, and they differ in how they manage user sessions and authentication data. Session-based authentication stores the user authentication data on the server side, in a session store, and uses a session ID stored in a cookie to identify the user. Token-based authentication, on the other hand, generates a token (usually a JWT) upon successful login, and the token is sent to the client and stored on the client side. The client includes the token in the Authorization header of subsequent requests, and the server verifies the token to authenticate the user. Here's an example:<br><pre><code>// Session-based authentication\napp.post('/login', (req, res) => {\n  // Authenticate the user\n  req.session.userId = user.id; // Store user ID in session\n  res.send('Logged in');\n});\n\napp.get('/profile', (req, res) => {\n  const userId = req.session.userId; // Get user ID from session\n  // Find the user by ID and return the user data\n});</code></pre><pre><code>// Token-based authentication\napp.post('/login', (req, res) => {\n  // Authenticate the user\n  const token = jwt.sign({ sub: user.id }, 'yourSecretKey'); // Generate a token\n  res.json({ token });\n});\n\napp.get('/profile', (req, res) => {\n  const token = req.headers.authorization.split(' ')[1]; // Get token from Authorization header\n  const decoded = jwt.verify(token, 'yourSecretKey'); // Verify the token\n  const userId = decoded.sub; // Get user ID from token\n  // Find the user by ID and return the user data\n});</code></pre><small></small>",
  },
  {
    question: "How to implement Google reCAPTCHA in a Node.js application?",
    answer:
      "Google reCAPTCHA can be implemented in a Node.js application to protect against spam and automated abuse. You can use the 'express-recaptcha' middleware to integrate reCAPTCHA v2 or v3 with Express.js. Here's an example:<br><pre><code>const Recaptcha = require('express-recaptcha').Recaptcha;\n\nconst recaptcha = new Recaptcha('siteKey', 'secretKey');\n\napp.post('/submit', (req, res) => {\n  recaptcha.verify(req, (error) => {\n    if (error) {\n      return res.status(400).json({ error: 'Captcha verification failed' });\n    }\n    // Handle the form submission\n  });\n});</code></pre><small>Source: google.com</small>",
  },
  {
    question: "What is the purpose of the 'nodemailer' module in Node.js?",
    answer:
      "The 'nodemailer' module in Node.js is used to send emails, allowing you to integrate email sending capabilities into your application. It supports various transport methods, like SMTP, and provides a simple and flexible API to send emails. Here's an example:<br><pre><code>const nodemailer = require('nodemailer');\n\nconst transporter = nodemailer.createTransport({\n  host: 'smtp.example.com',\n  port: 587,\n  auth: {\n    user: 'username',\n    pass: 'password'\n  }\n});\n\nconst mailOptions = {\n  from: 'sender@example.com',\n  to: 'recipient@example.com',\n  subject: 'Hello',\n  text: 'Hello World!'\n};\n\ntransporter.sendMail(mailOptions, (error, info) => {\n  if (error) {\n    return console.log(error);\n  }\n  console.log('Email sent: ' + info.response);\n});</code></pre><small>Source: nodemailer.com</small>",
  },
];
