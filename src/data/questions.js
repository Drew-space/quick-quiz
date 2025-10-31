export const questions = [
  // --- HTML & CSS ---
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlink Transfer Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to define an internal stylesheet?",
    options: ["<style>", "<css>", "<script>", "<design>"],
    answer: "<style>",
  },
  {
    question: "Which tag is used to link an external CSS file in HTML?",
    options: ["<link>", "<style>", "<script>", "<meta>"],
    answer: "<link>",
  },
  {
    question: "Which HTML element is used for the largest heading?",
    options: ["<h1>", "<h6>", "<head>", "<heading>"],
    answer: "<h1>",
  },
  {
    question:
      "Which attribute is used to provide alternative text for an image?",
    options: ["alt", "title", "src", "href"],
    answer: "alt",
  },
  {
    question: "Which CSS property changes text color?",
    options: ["color", "font-color", "text-color", "text-style"],
    answer: "color",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Syntax",
      "Colorful Style Setup",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which CSS property controls the size of text?",
    options: ["text-size", "font-size", "font-weight", "text-style"],
    answer: "font-size",
  },
  {
    question: "Which unit is relative to the root element in CSS?",
    options: ["em", "%", "rem", "px"],
    answer: "rem",
  },
  {
    question: "Which layout model is used in CSS Flexbox?",
    options: [
      "Grid layout",
      "Flow layout",
      "One-dimensional layout",
      "Fixed layout",
    ],
    answer: "One-dimensional layout",
  },

  // --- JAVASCRIPT ---
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Method",
      "Digital Output Module",
      "Document Order Manager",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Apple", "Google"],
    answer: "Netscape",
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["var", "let", "const", "define"],
    answer: "const",
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "The global object always",
      "The object that owns the current code",
      "The current function",
      "The parent scope",
    ],
    answer: "The object that owns the current code",
  },
  {
    question: "Which of these is NOT a JavaScript data type?",
    options: ["String", "Number", "Character", "Boolean"],
    answer: "Character",
  },
  {
    question: "What is the correct way to write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
    answer: "// comment",
  },
  {
    question: "What does NaN stand for?",
    options: [
      "Not a Number",
      "Negative Number",
      "New Array Number",
      "No Active Node",
    ],
    answer: "Not a Number",
  },
  {
    question: "Which function is used to parse JSON in JavaScript?",
    options: ["JSON.parse()", "JSON.read()", "JSON.convert()", "JSON.decode()"],
    answer: "JSON.parse()",
  },
  {
    question:
      "Which of the following is used to handle async operations in JavaScript?",
    options: ["Promises", "Events", "Loops", "Switches"],
    answer: "Promises",
  },
  {
    question:
      "What is the default value of an uninitialized variable in JavaScript?",
    options: ["null", "undefined", "0", "empty"],
    answer: "undefined",
  },

  // --- REACT & FRONTEND ---
  {
    question: "Which company created React?",
    options: ["Facebook", "Google", "Apple", "Microsoft"],
    answer: "Facebook",
  },
  {
    question: "What is the purpose of useState in React?",
    options: [
      "To define routes",
      "To manage component state",
      "To handle side effects",
      "To create components",
    ],
    answer: "To manage component state",
  },
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML Syntax",
      "JavaScript Extension",
    ],
    answer: "JavaScript XML",
  },
  {
    question: "Which React hook is used for side effects?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    answer: "useEffect",
  },
  {
    question: "What is a component in React?",
    options: [
      "A reusable piece of UI",
      "A CSS function",
      "A JavaScript variable",
      "A router path",
    ],
    answer: "A reusable piece of UI",
  },

  // --- BACKEND, NODE & DATABASES ---
  {
    question: "Which of these is a backend JavaScript runtime?",
    options: ["React", "Node.js", "Vue", "Next.js"],
    answer: "Node.js",
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Sequential Query Logic",
      "Standard Query Layout",
      "Simple Query List",
    ],
    answer: "Structured Query Language",
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    answer: "MongoDB",
  },
  {
    question: "Which command creates a new Node.js project?",
    options: ["npm start", "npm install", "npm init", "node run"],
    answer: "npm init",
  },
  {
    question: "What does REST stand for?",
    options: [
      "Representational State Transfer",
      "Remote Server Transmission",
      "Response Encoding Syntax Type",
      "Reliable System Transfer",
    ],
    answer: "Representational State Transfer",
  },
  {
    question: "What does CRUD stand for in databases?",
    options: [
      "Create, Read, Update, Delete",
      "Connect, Remove, Undo, Delete",
      "Copy, Run, Upload, Download",
      "Create, Run, Undo, Deliver",
    ],
    answer: "Create, Read, Update, Delete",
  },
  {
    question: "Which HTTP method is used to update data?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "PUT",
  },
  {
    question: "What is the default port for HTTPS?",
    options: ["80", "21", "443", "8080"],
    answer: "443",
  },
  {
    question: "What is Express.js mainly used for?",
    options: [
      "Frontend design",
      "Database management",
      "Backend server creation",
      "Data visualization",
    ],
    answer: "Backend server creation",
  },
  {
    question: "Which language is used to define database schemas in Prisma?",
    options: ["YAML", "SQL", "Prisma Schema Language", "JSON"],
    answer: "Prisma Schema Language",
  },

  // --- SOFTWARE ENGINEERING BASICS ---
  {
    question: "What does OOP stand for?",
    options: [
      "Object Oriented Programming",
      "Ordered Operation Process",
      "Output Oriented Procedure",
      "Online Object Program",
    ],
    answer: "Object Oriented Programming",
  },
  {
    question: "Which data structure uses LIFO?",
    options: ["Queue", "Stack", "Tree", "Array"],
    answer: "Stack",
  },
  {
    question: "Which data structure uses FIFO?",
    options: ["Stack", "Queue", "Tree", "Heap"],
    answer: "Queue",
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: "Which of these is a version control system?",
    options: ["Git", "Docker", "AWS", "Node.js"],
    answer: "Git",
  },
  {
    question: "Which command initializes a new Git repository?",
    options: ["git start", "git init", "git repo", "git new"],
    answer: "git init",
  },
  {
    question: "What does IDE stand for?",
    options: [
      "Integrated Development Environment",
      "Interactive Debug Engine",
      "Integrated Deployment Editor",
      "Internal Design Emulator",
    ],
    answer: "Integrated Development Environment",
  },
  {
    question: "Which testing type focuses on individual code units?",
    options: [
      "Integration Testing",
      "Unit Testing",
      "System Testing",
      "Regression Testing",
    ],
    answer: "Unit Testing",
  },
  {
    question: "What does CI/CD stand for?",
    options: [
      "Continuous Integration / Continuous Deployment",
      "Code Integration / Code Delivery",
      "Continuous Inspection / Continuous Debugging",
      "Central Installation / Code Deployment",
    ],
    answer: "Continuous Integration / Continuous Deployment",
  },
  {
    question: "Which software development model is iterative and incremental?",
    options: ["Waterfall", "Agile", "Spiral", "RAD"],
    answer: "Agile",
  },
  {
    question: "What is a pull request in Git?",
    options: [
      "A request to push changes",
      "A request to review and merge code",
      "A request to delete a branch",
      "A request to create a repo",
    ],
    answer: "A request to review and merge code",
  },
  {
    question:
      "Which of the following is a JavaScript framework for building user interfaces?",
    options: ["Django", "Laravel", "React", "Flask"],
    answer: "React",
  },
  {
    question: "Which tool is used for containerization?",
    options: ["Git", "Jenkins", "Docker", "Nginx"],
    answer: "Docker",
  },
  {
    question: "Which HTTP response code means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    answer: "404",
  },
  {
    question: "What is Big O notation used for?",
    options: [
      "Measuring code readability",
      "Measuring algorithm efficiency",
      "Debugging code",
      "Testing API performance",
    ],
    answer: "Measuring algorithm efficiency",
  },
];
