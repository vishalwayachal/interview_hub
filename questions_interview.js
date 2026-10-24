// General & Experience
const generalExperienceQuestions = [
  {
    question: "You have over 13 years as a Full Stack Developer/Tech Lead. How did your job change from a regular developer to a team leader?",
    answer: "I started as a developer, then became a senior developer, and finally a Development Team Lead. Now, I handle everything from start to finish, moved our systems to a modern setup, made them handle many users, and lead a team of 8+ people. I focus on good practices and launching products."
  },
  {
    question: "You've worked on live streaming, AI, and business systems. Which was the hardest and why?",
    answer: "Live streaming was the hardest. It needed things to happen instantly, with very little delay, and handle many people at once. For one project, managing over 500,000 live viewers and making our system 40% faster was a big challenge, needing a lot of focus on speed and quick solutions."
  },
  {
    question: "You made a system 40% faster by fixing database searches, using caching, and adding more servers. Can you give an example?",
    answer: "For a live streaming app, many users made our system slow. I fixed slow database searches, used a tool called Redis to quickly store popular information, and added more servers using Docker and Kubernetes. This made our system 40% faster and able to handle over 10,000 users at once without issues."
  }
];

// Technical Skills & Architecture
const technicalSkillsQuestions = [
  {
    question: "You know many programming languages and tools. How do you pick which ones to use for a new project?",
    answer: "I choose based on what the project needs, how much it needs to grow, what my team knows, and how easy it will be to keep working on it. For a big video social app, we used PHP, Vue.js, and PostgreSQL for handling many videos. For a health chatbot with AI, Node.js and AWS Lambda worked well because they're good for quick, event-based tasks."
  },
  {
    question: "You've helped change old, big systems into many smaller parts. Why did you do this, and what problems did you face?",
    answer: "We changed our big system into smaller parts to make it handle more users and be more reliable. The big system struggled with over 10,000 users. Problems included making sure all the small parts shared information correctly, making them talk to each other, and handling the new, more complex setup. We used Docker and Kubernetes to help."
  }
];

// Project Specifics & Achievements
const projectAchievementsQuestions = [
  {
    question: "The Keek Social project got over 10 million users and 3 million uploads each month. What was key to handling so many users?",
    answer: "To handle so many users, we built real-time video processing, fast APIs, used a content delivery network (CDN) to send videos quickly worldwide, and used AI for checking content. Making it work well on all phones and computers was also important."
  },
  {
    question: "For the Nivi Health Chatbot, you built AI that spoke many languages and connected to public health systems. What was hard about this, especially with health privacy rules?",
    answer: "It was hard to make the AI understand many languages well. Connecting to different health systems also brought challenges. But the biggest challenge was keeping health information private, following rules like HIPAA. This meant making sure data was always safe, encrypted, and handled correctly."
  }
];

// Leadership & Soft Skills
const leadershipQuestions = [
  {
    question: "As a Team Lead, you've guided over 8 developers. How do you teach and help your team keep learning and getting better?",
    answer: "I help my team by giving them challenging work, feedback, and clear support. We make personal growth plans, review code together to learn, share knowledge in meetings, and use Agile methods to constantly improve. My goal is for them to solve problems on their own and grow."
  },
  {
    question: "You fixed old code and made it 35% better. Can you give an example and say how it helped the team?",
    answer: "We had a very old part of a social app that was hard to change. I led an effort to fix it: we found the worst parts, worked on them in short bursts, made sure code was written neatly, and added tests. This made the code much easier to work with, which made the team 20% more productive."
  }
];

// Further Technical Deep Dive
const furtherTechnicalQuestions = [
  {
    question: "How do you keep up with new technologies as a developer with over 10 years of experience?",
    answer: "I learn continuously. I follow industry experts, read tech blogs, attend online events, try new tools on my own projects, and connect with other developers. Learning from my team is also a big part of it."
  },
  {
    question: "Tell me about a time you had to quickly learn a new technology for a tough problem. How did you do it, and what happened?",
    answer: "When we moved our system to smaller parts, I had to quickly learn Kubernetes. I used online courses and practiced by setting up local systems. This helped us successfully use containers to make our system scalable and reliable."
  },
  {
    question: "You use different types of databases. How do you pick the right one for a project?",
    answer: "I pick based on the data, how it will be searched, and how much it needs to grow. For precise, structured data, I use SQL like PostgreSQL. For flexible, fast data that might change a lot, I use NoSQL like MongoDB, Couchbase (for real-time), or Redis (for quick storage)."
  },
  {
    question: "When was using serverless functions (like AWS Lambda) better than traditional servers?",
    answer: "Lambda was great for the Nivi Health Chatbot because it only runs when needed (like for a message) and handles many events automatically. It saved money and time because we didn't have to manage servers. But sometimes, it can be slower to start up."
  },
  {
    question: "How do you design systems that almost never fail and are always available? Give an example.",
    answer: "I build systems with backups, distribute work evenly, and make sure parts don't crash others if they fail. For example, in live streaming, we spread our services across different locations so if one goes down, others take over instantly. We also constantly watch for problems."
  }
];

// Emerging Technologies & Trends
const emergingTechQuestions = [
  {
    question: "When do you choose Nginx over Apache, and vice versa?",
    answer: "I pick Nginx for speed in directing web traffic and serving simple files, especially for heavy-traffic sites like video streaming platforms. Apache is better for more complex websites that use special rules for folders or need many specific modules."
  },
  {
    question: "Tell me about your experience with CI/CD (automated code building and release). Which tools did you use, and how did they help?",
    answer: "I've used GitLab CI/CD, Jenkins, and GitHub Actions. These tools automate how we build, test, and release our code. They make releases faster and more reliable, reduce mistakes, and help developers work better."
  },
  {
    question: "How do you design and improve databases, especially for busy applications?",
    answer: "I start by organizing data well to avoid repeats, then sometimes simplify for speed. For busy apps, I focus on smart indexing, efficient search queries, using the right data types, and scaling the database by spreading it across multiple servers. Using a cache like Redis is also key."
  },
  {
    question: "What do you do to make sure web applications are secure, especially against common online attacks?",
    answer: "I always follow top security rules. This means writing code that prevents common attacks, checking all user inputs, building strong login systems, handling errors carefully to avoid giving away information, and setting up secure website headers. We also regularly check for security weaknesses."
  },
  {
    question: "You know Docker and Kubernetes. What are the main benefits of using these tools for your projects?",
    answer: "The main benefits are consistency (things work the same everywhere), isolation (software parts don't mess with each other), and scalability (easy to grow). Docker helps package software simply, and Kubernetes helps manage and scale these packages automatically, which was vital for handling huge numbers of users in live streaming."
  }
];

// Architecture & Design Patterns
const architectureQuestions = [
  {
    question: "When creating a new feature, how do you balance delivering it quickly with making it strong, scalable, and easy to maintain long-term?",
    answer: "It's a tricky balance. I deliver core features quickly first, accepting that some parts might be basic. But I always make sure the main structure allows for future growth and easy changes. This means clear organization of code and planning for improvements later. Openly talking about these choices with others is important."
  },
  {
    question: "Can you describe a complex system you designed or completely rebuilt? What was your part in that process?",
    answer: "I led the complete redesign of a large, old system into many smaller, interconnected services for a live streaming platform. My role was to plan the overall structure, pick the right technologies for each small service, design how they would talk to each other, and map out the step-by-step process for changing over. I also guided my team in adopting these new ways of working."
  },
  {
    question: "How do you make sure the code you write can be easily maintained and updated for a long time?",
    answer: "I ensure code is maintainable by following strict coding rules, doing thorough code reviews, writing clear notes within the code and in separate documents, and designing code in small, independent parts. We also regularly fix old code, and writing many tests helps ensure new changes don't break anything."
  }
];

// Cloud & DevOps
const cloudDevOpsQuestions = [
  {
    question: "You mentioned AWS. Can you describe your experience with specific AWS services beyond Lambda?",
    answer: "I use EC2 for virtual servers, S3 for storing large files like videos, RDS (PostgreSQL) for managed databases, and CloudWatch for monitoring and logs. I've also set up secure networks (VPC), managed domain names (Route 53), and balanced traffic (Elastic Load Balancing) to build reliable cloud systems."
  },
  {
    question: "How do you monitor and log what's happening in a live system, especially when it's made of many small parts?",
    answer: "For systems with many parts, I centralize all logs so they're easy to find and analyze. For monitoring, I use tools like Prometheus and Grafana to see how servers and applications are performing. I set up alerts for problems to find and fix issues quickly."
  }
];

// Project Management & Communication
const projectManagementQuestions = [
  {
    question: "How do you explain complicated technical ideas to people who aren't technical, like project managers or business owners?",
    answer: "I explain technical things by showing their impact on the business or users, not just how they work. I use simple words, drawings, and focus on what's being done and why it matters to them, avoiding technical jargon."
  },
  {
    question: "What is your experience with Agile methods? How do you make sure your team uses these methods effectively?",
    answer: "I'm a big fan of Agile, especially Scrum. I make sure we have daily meetings, plan our work in short cycles, and regularly review how we're doing. I focus on creating working software often, getting quick feedback, and allowing the team to organize itself. My job is to remove any blockers."
  },
  {
    question: "How do you handle project requirements that aren't clear or change often?",
    answer: "I see unclear requirements as a chance to work closely with others to make them clear through discussions and examples. When requirements change often, I use Agile's flexibility to break down changes into smaller parts, prioritize them, and adjust our plans quickly. Good communication and being flexible are key."
  }
];

// Emerging Technologies & Trends (Continued)
const emergingTechQuestionsContinued = [
  {
    question: "How do you see the role of a developer changing with AI, and what are you doing to include AI in your work?",
    answer: "The developer role is changing to include AI features. I'm learning about how to make AI models work and how to connect them to our systems. I've already used AI services for things like checking content, which is how I'm bringing AI into my work."
  },
  {
    question: "What are the long-term effects of using serverless systems for teams and how they develop software?",
    answer: "Serverless can mean smaller, more focused teams because the cloud handles much of the infrastructure. Development becomes more about reacting to events. But it means we need to be very good at monitoring and tracing, and it changes how we develop and test locally."
  },
  {
    question: "With more rules about data privacy, how do you make sure your applications are secure and follow these rules?",
    answer: "I build privacy into the design from the start. This includes making data anonymous, restricting who can access it, encrypting everything, and having clear rules for keeping data. My experience with strict health privacy rules helped me understand and apply strong compliance practices."
  }
];

// Scalability, Performance & Reliability (Continued)
const scalabilityQuestions = [
  {
    question: "You've made systems handle many users and viewers. How do you find and fix speed problems in such busy environments?",
    answer: "I use monitoring tools to find out what's slowing things down, like slow database searches or inefficient code. Then I fix these by improving the searches, using caching, using systems that handle tasks in the background, or adding more servers, all based on real-time data."
  },
  {
    question: "How do you manage errors and logs in systems made of many small parts, so you can debug and understand them well?",
    answer: "I make sure all parts of the system log information in a standard way, with a special ID for each request so I can track it. I use central logging systems to gather everything. For errors, I log detailed information and set up alerts to know immediately when something goes wrong."
  }
];

// Leadership & Strategic Thinking (Continued)
const leadershipStrategicQuestions = [
  {
    question: "As a Tech Lead, how do you manage old code that needs fixing across many projects, especially when new features are also needed?",
    answer: "I openly discuss the old code issues with everyone involved, prioritize what needs fixing based on how much it impacts the system, and set aside dedicated time in our work cycles to fix it. I also encourage my team to continuously improve code quality during their regular work."
  },
  {
    question: "You've worked in Kolhapur for a long time. How has this location affected your approach to development, team building, or problem-solving?",
    answer: "Working in Kolhapur has taught me to be resourceful and efficient, often building strong solutions with fewer resources than in bigger cities. It has also created a very close-knit team, leading to direct communication and strong teamwork. This encourages practical solutions focused on core business needs."
  },
  {
    question: "If a new big project comes up with a tight deadline and uses technology your team doesn't know well, what would you do as a Tech Lead?",
    answer: "I'd quickly check if the new tech is a good fit and then make a plan for the team to learn it. I'd pick a few team members to try it out first, use online resources, and give them time to learn. For the project, I'd suggest starting with a basic version to deliver value quickly while the team learns more."
  }
];

// Behavioral & Professional Growth (Continued)
const behavioralGrowthQuestions = [
  {
    question: "Tell me about a time you had to change how you talked to different groups of people (engineers, product managers, business owners) to work better together.",
    answer: "When talking to product managers or business owners, I'd explain technical things by focusing on how they help the product or business. With engineers, I'd go deeper into the technical details. With outside partners, I'd focus on how our systems connect. The key is listening and tailoring my message to what they care about."
  },
  {
    question: "What are your thoughts on writing automated tests (unit, integration, end-to-end)? How do you make sure your team tests their code well?",
    answer: "I believe automated tests are vital for good code quality and confidence in our work. I lead by example, ensure tests are included in code reviews, teach the team about testing, and make testing a required part of our release process."
  }
];

// Further Technical Deep Dive (Continued)
const furtherTechnicalQuestionsContinued = [
  {
    question: "You've used tools like Terraform. How has using code to manage infrastructure (IaC) helped your projects?",
    answer: "Using Terraform to manage our cloud setup with code has been very helpful. It makes sure our systems are always the same, lets us set up new things quickly, reduces mistakes we might make by hand, and helps us track changes to our infrastructure like any other code. This is very important for our systems on AWS."
  },
  {
    question: "How do you plan for recovering from major failures and keeping systems running, especially for live streaming or health apps?",
    answer: "I make sure our systems are spread across multiple locations so if one fails, others can take over. This includes regularly backing up data and being able to restore it quickly. For live streaming, we plan for quick switches if a stream goes down. We also practice these recovery steps often to make sure they work."
  },
  {
    question: "When would you pick RabbitMQ versus Kafka for sending messages between different parts of a system?",
    answer: "I'd choose RabbitMQ for reliable message delivery, complex message routes, and when messages need to be handled one by one, like for real-time events. I'd choose Kafka for very large amounts of data, continuous streams of information, and when we need to store messages for a long time or re-read them, good for data processing."
  }
];

// Frontend & User Experience (Continued)
const frontendQuestions = [
  {
    question: "You've worked with Vue.js and Angular. What are the main differences, and when would you prefer one over the other?",
    answer: "Vue.js is usually easier to learn, more flexible, and good for smaller or growing projects. Angular is a bigger, more structured tool, great for large business applications that need strong type-checking and many built-in features. I'd use Vue for quick starts and Angular for big, robust systems."
  },
  {
    question: "How do you make web applications faster and better for users, especially on phones, when there are many visitors?",
    answer: "I focus on reducing how many times the browser asks for information, optimizing images and videos (making them smaller, loading them only when needed), using browser storage, removing unused code, and loading important styles first. For phones, I ensure the design looks good, it's easy to touch, and loads quickly."
  },
  {
    question: "User feedback is important. How do you use it in your development process, and how does it change your design choices?",
    answer: "I make sure we constantly get user feedback as part of our work, through testing, talking to users, and looking at data. This feedback directly helps us confirm ideas, find problems users have, and improve the design to make the product better and more engaging. It's a key part of how the product grows."
  }
];

// Leadership & Team Development (Continued)
const leadershipTeamDevQuestions = [
  {
    question: "What common problems have you faced leading a development team, and how do you solve them?",
    answer: "Common problems include unclear communication, projects growing too big, and team members not having certain skills. I fix these by making communication open, keeping project goals clear, and helping the team learn new skills. This makes sure we keep moving forward effectively."
  },
  {
    question: "How do you help your team come up with new ideas and try new technologies, even when there are deadlines?",
    answer: "I give the team special time or hold 'hackathon' days to explore new ideas. I encourage them to share what they learn and create a safe space for trying new things, even if they don't always work out. We also set aside small parts of our project time to look into new technologies that might be useful."
  },
  {
    question: "How do you handle employee performance reviews and help your team members grow their careers?",
    answer: "I see performance reviews as a way to have helpful talks about what they've done well and where they can improve. I help them set clear goals for their career, give them ongoing feedback, and find training or new responsibilities for them. This supports their long-term growth in the company."
  }
];

// Industry & Local Context (Kolhapur specific)
const kolhapurQuestions = [
  {
    question: "Kolhapur's tech scene is growing. What challenges or chances do you see for attracting and keeping good tech talent here, and how would you help as a leader?",
    answer: "Opportunities include lower living costs and less competition than bigger cities. Challenges might be a smaller pool of very specialized talent. As a leader, I'd help by building a strong engineering culture, offering interesting projects, investing in learning, and promoting local successes to attract and keep skilled people."
  },
  {
    question: "How do you stay connected with the local tech community in Kolhapur, and how do you use these connections for your growth or your team's development?",
    answer: "I connect by going to local tech meetings, workshops, and online groups. These connections are useful for meeting new people, sharing knowledge, understanding local job trends, and sometimes finding new team members."
  }
];

window.questions_interview = [
  ...generalExperienceQuestions,
  ...technicalSkillsQuestions,
  ...projectAchievementsQuestions,
  ...leadershipQuestions,
  ...furtherTechnicalQuestions,
  ...emergingTechQuestions,
  ...architectureQuestions,
  ...cloudDevOpsQuestions,
  ...projectManagementQuestions,
  ...emergingTechQuestionsContinued,
  ...scalabilityQuestions,
  ...leadershipStrategicQuestions,
  ...behavioralGrowthQuestions,
  ...furtherTechnicalQuestionsContinued,
  ...frontendQuestions,
  ...leadershipTeamDevQuestions,
  ...kolhapurQuestions
];