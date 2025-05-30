export const projectsData = {
  "web-crawler": {
    slug: "web-crawler",
    name: "Web Crawler",
    summary: "High-performance concurrent web crawler with search capabilities",
    overview: {
      tagline: "A Go-based web crawler that efficiently crawls and indexes web pages with concurrent processing.",
      timeline: "2 months",
      type: "Backend System",
      status: "Completed",
      stack: ["Go", "MongoDB", "Atlas Search"],
    },
    motivation:
      "Built to understand the fundamentals of web crawling, concurrent programming, and search indexing. The goal was to create a system that could crawl at least 1000 pages while maintaining high performance and data quality.",
    techStack: [
      {
        category: "Backend",
        items: ["Go", "Standard Library", "Goroutines", "Channels"],
      },
      {
        category: "Database",
        items: ["MongoDB Atlas", "Atlas Search", "Indexing"],
      },
      {
        category: "Tools",
        items: ["Command Line Interface", "Benchmarking", "Error Handling"],
      },
    ],
    features: [
      "Concurrent web page fetching and parsing",
      "Breadth-first search crawling algorithm",
      "MongoDB Atlas integration for data storage",
      "Full-text search capabilities",
      "Robust error handling and recovery",
      "Performance monitoring and statistics",
    ],
    architecture: {
      description:
        "The crawler uses a producer-consumer pattern with goroutines for concurrent processing. URLs are queued and processed in parallel while maintaining thread-safe operations.",
      structure: `cmd/
├── crawler/
│   └── main.go
pkg/
├── crawler/
│   ├── crawler.go
│   ├── parser.go
│   └── queue.go
├── database/
│   ├── mongo.go
│   └── models.go
└── utils/
    ├── http.go
    └── validation.go
internal/
├── config/
│   └── config.go
└── metrics/
    └── stats.go`,
      codeSnippet: `// Main crawler loop with concurrent processing
func (c *Crawler) Start(seedURL string) error {
    c.queue.Add(seedURL)
    
    for i := 0; i < c.workers; i++ {
        go c.worker()
    }
    
    // Wait for completion
    c.wg.Wait()
    return nil
}`,
    },
    challenges: [
      {
        problem: "Managing concurrent access to shared data structures without race conditions",
        debugging: "Used Go's race detector and added comprehensive logging to identify problematic sections",
        solution: "Implemented proper mutex locks and used channels for communication between goroutines",
      },
      {
        problem: "Handling various HTTP errors and malformed HTML gracefully",
        debugging: "Created comprehensive test cases with different error scenarios and edge cases",
        solution: "Built robust error handling with retry logic and graceful degradation for parsing failures",
      },
    ],
    experience: {
      approach:
        "I chose to use simple technologies for the web crawler in order to fully understand all the components of the system. The only external services/libraries I used were MongoDB Atlas Search for the implementation of the searchable web archive. All other operations including fetching webpages, parsing HTML, threading, and benchmarking were done using Go's standard library. With this approach, I prioritized simplicity which will allow me to easily expand on this software in the future.",
      futureEnhancements:
        "Although my web crawler accomplished the goal of crawling at least 1000 pages, here are a few future enhancements I could make. First, I would like to allow the user to decide the seed url. This could be easily implemented in my command line tool by prompting the user for a url at the start of the program. However, there would need to be some added error handling for if a user enters an invalid url. Currently, the crawler searches Breadth-First. I would like to be able to experiment with different crawling algorithms like BFS, DFS, and hybrids. Making a swappable crawl would be ideal to compare the crawler statistics.",
      prosAndCons: {
        pros: [
          "Concurrently fetches and parses web pages",
          "Database inserts are concurrent",
          "Avoids loops and dead ends",
          "Ignores script tags",
          "Gracefully handles invalid urls, page not founds, and other errors",
          "Searching the web archive is relatively fast",
          "The crawled to queued ratio approached ~0.7 at its maximum, meaning pages were being crawled relatively effectively",
        ],
        cons: [
          "Parsing the first 500 characters after the <body> tag isn't always a great representation of the webpage's content due to aria labels, navigation components, and scripts",
          "Only crawls the first 500 tokens (open + closing tags) of a web page, which can result in an 'incomplete' crawl of a page",
          "Ignores relative links, which can result in an 'incomplete' crawl of a page",
          "The crawl speed decreases after about 500 seconds",
        ],
      },
    },
    links: {
      github: "https://github.com/username/web-crawler",
      docs: "https://docs.webcrawler.dev",
    },
  },
  coursify: {
    slug: "coursify",
    name: "Coursify",
    summary: "AI-powered course creation and management platform",
    overview: {
      tagline:
        "A comprehensive platform for educators to create, manage, and deliver online courses with AI assistance.",
      timeline: "4 months",
      type: "Full-stack Web Application",
      status: "In Development",
      stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "OpenAI"],
    },
    motivation:
      "As online education continues to grow, I noticed educators struggling with course creation tools that were either too complex or too limited. Coursify aims to bridge this gap by providing an intuitive platform with AI-powered content generation and smart course structuring.",
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form"],
      },
      {
        category: "Backend",
        items: ["Next.js API Routes", "Prisma ORM", "PostgreSQL", "NextAuth.js", "Stripe"],
      },
      {
        category: "AI & Services",
        items: ["OpenAI GPT-4", "Vercel AI SDK", "Uploadthing", "Resend Email"],
      },
    ],
    features: [
      "AI-powered course outline generation",
      "Drag-and-drop course builder interface",
      "Video upload and streaming with progress tracking",
      "Interactive quizzes and assignments",
      "Student progress analytics dashboard",
      "Payment processing and subscription management",
      "Real-time collaboration tools",
    ],
    architecture: {
      description:
        "Coursify follows a modern full-stack architecture with Next.js handling both frontend and backend. The application uses Prisma for type-safe database operations and integrates multiple third-party services for enhanced functionality.",
      structure: `app/
├── (auth)/
│   ├── sign-in/
│   └── sign-up/
├── (dashboard)/
│   ├── courses/
│   ├── analytics/
│   └── settings/
├── api/
│   ├── courses/
│   ├── auth/
│   └── webhooks/
components/
├── ui/
├── course/
├── dashboard/
└── auth/
lib/
├── db.ts
├── auth.ts
└── utils.ts`,
      codeSnippet: `// AI-powered course generation
export async function generateCourseOutline(topic: string, level: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are an expert course designer. Create a detailed course outline."
      },
      {
        role: "user", 
        content: \`Create a \${level} course outline for: \${topic}\`
      }
    ]
  });
  
  return completion.choices[0].message.content;
}`,
    },
    challenges: [
      {
        problem: "Implementing real-time video progress tracking across different devices",
        debugging: "Used browser dev tools to monitor WebSocket connections and localStorage behavior",
        solution:
          "Built a robust sync mechanism using database timestamps and client-side caching with conflict resolution",
      },
      {
        problem: "Optimizing AI content generation costs while maintaining quality",
        debugging: "Analyzed API usage patterns and implemented caching strategies for similar requests",
        solution: "Created a smart caching system and prompt optimization to reduce token usage by 40%",
      },
    ],
    experience: {
      approach:
        "I focused on creating a user-centric design by conducting interviews with educators to understand their pain points. The development process emphasized rapid prototyping and iterative feedback. I chose Next.js for its full-stack capabilities and excellent developer experience, while Prisma provided type safety for database operations.",
      futureEnhancements:
        "Future plans include implementing live streaming capabilities for real-time classes, adding mobile applications for iOS and Android, integrating with popular LMS platforms like Canvas and Blackboard, and developing advanced analytics with machine learning insights for course optimization.",
      prosAndCons: {
        pros: [
          "Intuitive drag-and-drop interface reduces course creation time by 60%",
          "AI assistance helps educators overcome writer's block",
          "Comprehensive analytics provide actionable insights",
          "Seamless payment integration with multiple providers",
          "Responsive design works well on all devices",
          "Type-safe development reduces runtime errors",
        ],
        cons: [
          "AI-generated content sometimes requires significant editing",
          "Video processing can be slow for large files",
          "Complex pricing model may confuse some users",
          "Limited offline functionality for students",
          "Requires stable internet connection for optimal experience",
        ],
      },
    },
    links: {
      github: "https://github.com/username/coursify",
      demo: "https://coursify-demo.vercel.app",
      docs: "https://docs.coursify.app",
    },
  },
  paralang: {
    slug: "paralang",
    name: "ParaLang",
    summary: "Real-time language learning through video conversations",
    overview: {
      tagline: "Connect with native speakers worldwide for immersive language learning through video calls.",
      timeline: "3 months",
      type: "Full-stack Web Application",
      status: "Completed",
      stack: ["React", "Node.js", "WebRTC", "Socket.io", "MongoDB"],
    },
    motivation:
      "Traditional language learning apps lack real human interaction. ParaLang was built to solve this by connecting language learners with native speakers for authentic conversation practice, making language learning more engaging and effective.",
    techStack: [
      {
        category: "Frontend",
        items: ["React", "Redux Toolkit", "Material-UI", "WebRTC", "Socket.io Client"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "Socket.io", "MongoDB", "JWT Authentication"],
      },
      {
        category: "Real-time",
        items: ["WebRTC", "Simple-peer", "Socket.io", "STUN/TURN Servers"],
      },
    ],
    features: [
      "Real-time video calling with screen sharing",
      "Smart matching algorithm based on language goals",
      "In-call translation and vocabulary tools",
      "Session recording and playback for review",
      "Progress tracking and learning analytics",
      "Community features and language exchange forums",
    ],
    architecture: {
      description:
        "ParaLang uses WebRTC for peer-to-peer video communication with Socket.io for signaling. The matching system uses a sophisticated algorithm considering time zones, language levels, and learning preferences.",
      structure: `client/
├── src/
│   ├── components/
│   │   ├── VideoCall/
│   │   ├── Matching/
│   │   └── Dashboard/
│   ├── store/
│   └── utils/
server/
├── controllers/
├── models/
├── routes/
├── socket/
│   ├── signaling.js
│   └── matching.js
└── utils/`,
      codeSnippet: `// WebRTC peer connection setup
const createPeerConnection = (socketId, createOffer) => {
  const peer = new RTCPeerConnection({
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'turn:turnserver.com', username: 'user', credential: 'pass' }
    ]
  });

  peer.onicecandidate = (event) => {
    if (event.candidate) {
      socket.emit('ice-candidate', {
        candidate: event.candidate,
        to: socketId
      });
    }
  };

  return peer;
};`,
    },
    challenges: [
      {
        problem: "Handling WebRTC connection failures and network instability",
        debugging: "Implemented comprehensive logging for ICE connection states and STUN/TURN server responses",
        solution: "Added automatic reconnection logic with fallback TURN servers and connection quality monitoring",
      },
      {
        problem: "Creating fair and effective language partner matching",
        debugging: "Analyzed user feedback and session success rates to identify matching algorithm weaknesses",
        solution: "Developed a multi-factor matching system considering time zones, skill levels, and user preferences",
      },
    ],
    experience: {
      approach:
        "I prioritized real-time performance and user experience, spending significant time optimizing WebRTC connections and reducing latency. The matching algorithm went through multiple iterations based on user feedback and success metrics. I also focused on making the interface intuitive for users of all technical skill levels.",
      futureEnhancements:
        "Future improvements include adding mobile applications with native WebRTC support, implementing AI-powered conversation analysis for personalized feedback, adding group conversation rooms for multiple participants, and integrating with popular language learning curricula for structured lessons.",
      prosAndCons: {
        pros: [
          "High-quality video calls with minimal latency",
          "Effective matching algorithm with 85% user satisfaction",
          "Intuitive interface suitable for all age groups",
          "Comprehensive session analytics and progress tracking",
          "Strong community features encouraging regular use",
          "Cross-platform compatibility",
        ],
        cons: [
          "Requires stable internet connection for optimal experience",
          "Limited functionality in regions with restricted WebRTC",
          "Matching can be slow during off-peak hours",
          "Mobile web experience could be improved",
          "Some users find video calls intimidating initially",
        ],
      },
    },
    links: {
      github: "https://github.com/username/paralang",
      demo: "https://paralang-demo.herokuapp.com",
    },
  },
  airwise: {
    slug: "airwise",
    name: "AirWise",
    summary: "Smart air quality monitoring and prediction system",
    overview: {
      tagline: "IoT-powered air quality monitoring with machine learning predictions for healthier living.",
      timeline: "5 months",
      type: "IoT & Web Application",
      status: "Completed",
      stack: ["Python", "React", "Arduino", "TensorFlow", "InfluxDB"],
    },
    motivation:
      "Growing concerns about air pollution and its health impacts motivated me to create a comprehensive monitoring solution. AirWise combines IoT sensors with machine learning to provide real-time air quality data and predictive insights for better health decisions.",
    techStack: [
      {
        category: "Hardware",
        items: ["Arduino Uno", "ESP32", "PM2.5 Sensor", "Temperature/Humidity Sensor", "WiFi Module"],
      },
      {
        category: "Backend",
        items: ["Python", "FastAPI", "TensorFlow", "Pandas", "NumPy"],
      },
      {
        category: "Frontend",
        items: ["React", "Chart.js", "Material-UI", "PWA"],
      },
      {
        category: "Database",
        items: ["InfluxDB", "Redis", "PostgreSQL"],
      },
    ],
    features: [
      "Real-time air quality monitoring with multiple sensors",
      "Machine learning predictions for next 24 hours",
      "Health recommendations based on air quality levels",
      "Historical data analysis and trends",
      "Mobile-responsive progressive web app",
      "Alert system for dangerous air quality levels",
      "Integration with weather APIs for enhanced predictions",
    ],
    architecture: {
      description:
        "AirWise uses a distributed architecture with IoT sensors collecting data, a Python backend for processing and ML predictions, and a React frontend for visualization. InfluxDB handles time-series data efficiently.",
      structure: `hardware/
├── sensors/
│   ├── pm25_sensor.ino
│   ├── temp_humidity.ino
│   └── wifi_module.ino
├── main.ino
└── config.h
backend/
├── api/
├── ml/
│   ├── models/
│   ├── training/
│   └── prediction.py
├── data/
└── utils/
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── utils/
└── public/`,
      codeSnippet: `# Air quality prediction model
def train_prediction_model(data):
    features = ['pm25', 'temperature', 'humidity', 'pressure']
    X = data[features]
    y = data['pm25_next_hour']
    
    model = Sequential([
        Dense(64, activation='relu', input_shape=(len(features),)),
        Dropout(0.2),
        Dense(32, activation='relu'),
        Dense(1)
    ])
    
    model.compile(optimizer='adam', loss='mse', metrics=['mae'])
    model.fit(X, y, epochs=100, validation_split=0.2)
    
    return model`,
    },
    challenges: [
      {
        problem: "Ensuring accurate sensor calibration and data reliability",
        debugging:
          "Cross-referenced sensor readings with official air quality stations and identified calibration drift",
        solution: "Implemented automatic calibration routines and data validation algorithms with outlier detection",
      },
      {
        problem: "Handling intermittent WiFi connectivity in IoT devices",
        debugging: "Monitored connection logs and identified patterns in connectivity failures",
        solution: "Added local data buffering and automatic reconnection with exponential backoff",
      },
    ],
    experience: {
      approach:
        "I combined hardware and software development to create an end-to-end solution. The project required learning about sensor calibration, time-series databases, and machine learning for environmental data. I focused on creating a reliable system that could operate continuously with minimal maintenance.",
      futureEnhancements:
        "Future plans include expanding to monitor additional pollutants like CO2 and VOCs, developing a mobile app with push notifications, creating a network of community sensors for city-wide monitoring, and integrating with smart home systems for automated air purification control.",
      prosAndCons: {
        pros: [
          "Accurate real-time monitoring with sub-minute updates",
          "Machine learning predictions achieve 85% accuracy",
          "Low-cost hardware solution under $100 per unit",
          "User-friendly interface with clear health recommendations",
          "Robust data collection with 99.5% uptime",
          "Progressive web app works offline",
        ],
        cons: [
          "Requires technical knowledge for initial hardware setup",
          "Sensor accuracy can degrade over time without maintenance",
          "Limited to indoor air quality monitoring",
          "Machine learning model requires periodic retraining",
          "Power consumption could be optimized further",
        ],
      },
    },
    links: {
      github: "https://github.com/username/airwise",
      demo: "https://airwise-demo.netlify.app",
      docs: "https://airwise-docs.gitbook.io",
    },
  },
  "portfolio-site": {
    slug: "portfolio-site",
    name: "Portfolio Site",
    summary: "Modern developer portfolio with dynamic project showcase",
    overview: {
      tagline:
        "A clean, professional portfolio website showcasing projects with interactive elements and smooth animations.",
      timeline: "1 month",
      type: "Frontend Application",
      status: "Completed",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    motivation:
      "I needed a professional online presence to showcase my projects and skills. The goal was to create a portfolio that stands out while maintaining excellent performance and accessibility standards.",
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      {
        category: "Deployment",
        items: ["Vercel", "GitHub Actions", "Domain Management"],
      },
      {
        category: "Tools",
        items: ["ESLint", "Prettier", "Lighthouse", "Analytics"],
      },
    ],
    features: [
      "Responsive design optimized for all devices",
      "Interactive project showcase with filtering",
      "Smooth animations and micro-interactions",
      "Dark/light theme toggle",
      "SEO optimization and meta tags",
      "Contact form with email integration",
      "Performance optimized with 95+ Lighthouse score",
    ],
    architecture: {
      description:
        "Built with Next.js for optimal performance and SEO. Uses static generation for fast loading and dynamic imports for code splitting. Tailwind CSS provides utility-first styling with custom design system.",
      structure: `app/
├── (pages)/
│   ├── about/
│   ├── projects/
│   └── contact/
├── components/
│   ├── ui/
│   ├── layout/
│   └── sections/
├── lib/
│   ├── utils.ts
│   └── constants.ts
└── styles/
    └── globals.css`,
      codeSnippet: `// Smooth scroll animation hook
export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}`,
    },
    challenges: [
      {
        problem: "Achieving perfect Lighthouse scores while maintaining rich animations",
        debugging: "Used Chrome DevTools Performance tab to identify rendering bottlenecks and animation jank",
        solution:
          "Optimized animations using CSS transforms and will-change property, implemented lazy loading for images",
      },
      {
        problem: "Creating smooth theme transitions without layout shift",
        debugging: "Analyzed CSS-in-JS performance and identified theme switching delays",
        solution: "Used CSS custom properties for theme variables and preloaded theme styles to eliminate flashing",
      },
    ],
    experience: {
      approach:
        "I focused on creating a balance between visual appeal and performance. Every animation and interaction was carefully considered for its impact on user experience. The design system was built mobile-first with accessibility as a core requirement throughout development.",
      futureEnhancements:
        "Future improvements include adding a blog section with MDX support, implementing a CMS for easy content updates, adding more interactive elements like a 3D hero section, and creating a design system documentation site.",
      prosAndCons: {
        pros: [
          "Excellent performance with 95+ Lighthouse scores across all metrics",
          "Fully responsive design that works on all devices",
          "Smooth animations that enhance user experience",
          "SEO optimized with proper meta tags and structured data",
          "Accessible design following WCAG guidelines",
          "Fast deployment and updates with Vercel",
        ],
        cons: [
          "Limited content management without a CMS",
          "Requires developer knowledge for content updates",
          "Animation complexity may not work well on older devices",
          "Static nature limits dynamic content possibilities",
        ],
      },
    },
    links: {
      github: "https://github.com/username/portfolio",
      demo: "https://yourname.dev",
    },
  },
  "dev-blog-system": {
    slug: "dev-blog-system",
    name: "Dev Blog System",
    summary: "Modern blogging platform built for developers",
    overview: {
      tagline:
        "A feature-rich blogging platform with markdown support, syntax highlighting, and developer-focused tools.",
      timeline: "Ongoing",
      type: "Full-stack Web Application",
      status: "In Development",
      stack: ["Next.js", "Prisma", "PostgreSQL", "MDX", "TypeScript"],
    },
    motivation:
      "Existing blogging platforms often lack the features developers need, such as proper code syntax highlighting, markdown support, and technical writing tools. This project aims to create the perfect blogging platform for the developer community.",
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js 14", "TypeScript", "Tailwind CSS", "MDX", "Prism.js"],
      },
      {
        category: "Backend",
        items: ["Next.js API Routes", "Prisma ORM", "PostgreSQL", "NextAuth.js"],
      },
      {
        category: "Content",
        items: ["MDX", "Remark", "Rehype", "Gray-matter", "Reading Time"],
      },
    ],
    features: [
      "Rich markdown editor with live preview",
      "Syntax highlighting for 100+ programming languages",
      "Tag-based categorization and search",
      "Comment system with threading",
      "Reading time estimation and progress tracking",
      "SEO optimization for technical content",
      "RSS feed generation",
    ],
    architecture: {
      description:
        "The blog system uses Next.js with MDX for content processing. Prisma handles database operations while a custom markdown pipeline processes technical content with enhanced syntax highlighting.",
      structure: `app/
├── (blog)/
│   ├── posts/
│   ├── tags/
│   └── search/
├── (admin)/
│   ├── editor/
│   └── dashboard/
├── api/
│   ├── posts/
│   ├── comments/
│   └── search/
components/
├── editor/
├── blog/
└── ui/
lib/
├── mdx.ts
├── db.ts
└── utils.ts`,
      codeSnippet: `// MDX processing pipeline
export async function processMDX(content: string) {
  const result = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkCodeTitles],
      rehypePlugins: [
        rehypePrism,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }]
      ]
    },
    scope: {
      readingTime: calculateReadingTime(content)
    }
  });
  
  return result;
}`,
    },
    challenges: [
      {
        problem: "Implementing a performant markdown editor with real-time preview",
        debugging: "Profiled editor performance and identified re-rendering issues with large documents",
        solution: "Implemented debounced updates and virtual scrolling for large markdown files",
      },
      {
        problem: "Creating a flexible content management system for technical posts",
        debugging: "Analyzed content workflow requirements and identified pain points in existing solutions",
        solution: "Built a custom CMS with markdown-first approach and developer-friendly features",
      },
    ],
    experience: {
      approach:
        "I'm building this platform iteratively, focusing on core writing and reading experiences first. The architecture prioritizes performance and developer experience, with extensive use of TypeScript for type safety and modern React patterns for maintainability.",
      futureEnhancements:
        "Planned features include collaborative editing, integration with popular developer tools like GitHub, advanced analytics for technical content, newsletter functionality, and a plugin system for extending functionality.",
      prosAndCons: {
        pros: [
          "Excellent markdown support with live preview",
          "Superior syntax highlighting for technical content",
          "Fast search with full-text indexing",
          "SEO optimized for technical articles",
          "Clean, distraction-free reading experience",
          "Developer-friendly content management",
        ],
        cons: [
          "Still in development with limited features",
          "Requires technical knowledge to set up",
          "No visual editor for non-technical users",
          "Limited theme customization options currently",
          "Comment system needs moderation tools",
        ],
      },
    },
    links: {
      github: "https://github.com/username/dev-blog-system",
    },
  },
}