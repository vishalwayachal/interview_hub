window.questions_int1 = [
  {
    question: "What are the benefits of using Node.js for real-time applications?",
    answer: "Non-blocking I/O and event-driven architecture make Node.js ideal for real-time apps like chat, notifications, and video streaming."
  },
  {
    question: "Explain NestJS and why you would choose it.",
    answer: "NestJS is a TypeScript-based framework built on Express, offering a structured way to write scalable and testable Node.js apps. Great for microservices and enterprise-grade apps."
  },
  {
    question: "How do you manage session and authentication in distributed systems?",
    answer: "Use stateless tokens (JWT) or centralized session stores (like Redis). Services validate tokens without maintaining session state."
  },
  {
    question: "How would you migrate a monolithic PHP app to microservices?",
    answer: "Identify business domains and boundaries. Extract services incrementally. Introduce an API Gateway. Use message queues for communication."
  },
  {
    question: "How do you structure a RESTful API?",
    answer: "Use nouns for endpoints: /users, /products. HTTP methods: GET, POST, PUT, DELETE. Versioning (/api/v1/), pagination, filtering, HATEOAS if needed."
  },
  {
    question: "What are the benefits of Vue.js in SPAs?",
    answer: "Vue is lightweight, reactive, and integrates easily with existing systems. Vuex simplifies state management. Great for real-time UIs."
  },
  {
    question: "How do you optimize frontend performance?",
    answer: "Code splitting (Webpack), lazy loading components, CDN for assets, minification, gzip compression, avoid unnecessary re-renders."
  },
  {
    question: "How do you manage secrets in production?",
    answer: "Use AWS Secrets Manager, GCP Secret Manager, or Vault. Avoid storing secrets in code or environment variables in CI/CD."
  },
  {
    question: "How would you implement zero-downtime deployments?",
    answer: "Blue-green deployment or canary rollout. Health checks with load balancer. Use container orchestration like Kubernetes."
  },
  {
    question: "How do you monitor services in production?",
    answer: "Metrics via Prometheus/Grafana. Logs with ELK stack or CloudWatch. Alerts with PagerDuty or Opsgenie."
  },
  {
    question: "How did you integrate OpenAI or Google Vision in your projects?",
    answer: "Used APIs for content moderation, extracting metadata, and flagging offensive material in real-time video uploads."
  },
  {
    question: "How do you handle model versioning in AI-based systems?",
    answer: "Use MLFlow, DVC, or model registries. Ensure compatibility and rollback options."
  },
  {
    question: "When would you use SQL vs NoSQL?",
    answer: "SQL: relational data, transactions (PostgreSQL, MySQL). NoSQL: unstructured data, horizontal scaling (MongoDB, Redis)."
  },
  {
    question: "How do you design a schema for high-write traffic (e.g., chat system)?",
    answer: "Use sharding and partitioning. Choose NoSQL like MongoDB. Use TTL indexes for expiring old messages."
  },
  {
    question: "Explain CAP theorem.",
    answer: "In a distributed system, you can only guarantee two of: Consistency, Availability, Partition Tolerance."
  },
  {
    question: "Design a scalable video upload and streaming service.",
    answer: "Use S3/MinIO for storage. Transcoding with AWS Elastic Transcoder/Wowza. CDN for delivery. Metadata in PostgreSQL. Queues (RabbitMQ/Kafka) for async processing."
  },
  {
    question: "How would you design a real-time notification system?",
    answer: "Redis pub/sub or WebSocket server (Node.js). Use Kafka/RabbitMQ for decoupled delivery. Store read/unread states in DB or Redis."
  },
  {
    question: "How would you handle 1 million concurrent users on a live stream?",
    answer: "Use CDN edge caching (CloudFront). Use media servers like Wowza with HLS. Redis for session/state management. Scale horizontally with Kubernetes pods."
  },
  {
    question: "What’s your approach to TDD (Test-Driven Development)?",
    answer: "Write failing unit tests first. Implement functionality. Refactor while ensuring tests pass."
  },
  {
    question: "How do you do code reviews effectively?",
    answer: "Focus on readability, architecture, security. Use GitHub/GitLab PR reviews. Avoid blocking unless it's critical."
  },
  {
    question: "How do you resolve conflicts in your team?",
    answer: "Address issues early via 1-on-1s. Align on objectives and responsibilities. Escalate only if needed after mutual discussion."
  },
  {
    question: "How do you prioritize tasks during a crunch time?",
    answer: "Use impact vs. effort matrix. Collaborate with stakeholders to re-align scope. Focus on MVP and defer non-critical tasks."
  },
  {
    question: "In Peeks, how did you ensure low-latency video delivery?",
    answer: "Used Wowza and AWS CloudFront. Pre-buffering, adaptive bitrate streaming. Integrated Prometheus to monitor latency."
  },
  {
    question: "What was the most technically challenging project you've led?",
    answer: "Keek – handling 10M+ users, real-time uploads, AI moderation, video transcoding at scale."
  },
  {
    question: "What was your role in CI/CD implementation at Nivi Health?",
    answer: "Built CI/CD with CircleCI and GitHub Actions for Lambda functions and Vue frontend, automating tests and deployments."
  }
];
