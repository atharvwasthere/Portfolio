export const projectsData = {
  "web-crawler": {
    slug: "web-crawler",
    name: "Web Crawler",
    summary: "High-performance concurrent web crawler with search capabilities",
    overview: {
      tagline: "A Go-based web crawler that efficiently crawls and indexes web pages with concurrent processing.",
      timeline: "1 week",
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
      github: "https://github.com/atharvwasthere/web-crawler",
      docs: "https://github.com/atharvwasthere/web-crawler#readme",
    },
  },
  airwise: {
    slug: "airwise",
    name: "AirWise",
    summary: "Plan trips to cleaner destinations instantly—stop just checking AQI, start escaping it.",
    overview: {
      tagline: "AirWise – Breathe Better, Travel Smarter.",
      timeline: "Work in Progress",
      type: "Full-Stack Web Application",
      status: "In Development",
      stack: ["Node.js", "Express", "MongoDB", "Redis", "React", "TanStack Query", "TailwindCSS"]
    },
    motivation:
      "Most AQI apps only show numbers, leaving people stuck with the problem. AirWise breaks that habit by turning passive AQI checks into proactive travel planning. In one tap, users discover cleaner destinations, get personalized health insights, and predictive travel tips. It's not monitoring—it's a lifestyle upgrade, a brag-worthy switch from reactive to smart living.",
    techStack: [
      {
        category: "Frontend",
        items: ["React", "TanStack Query", "TailwindCSS", "Mapbox", "Chart.js"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "Redis", "Axios for API calls"]
      },
      {
        category: "External APIs",
        items: ["WAQI API (Real-time AQI)", "OpenWeather API", "Nominatim Reverse Geocoding"]
      }
    ],
    features: [
      "Instant clean-air destination finder within your region",
      "AI-powered CleanAir Score combining AQI, weather, and crowd index",
      "One-tap scenic route planning optimized for better air",
      "Health-first mode for travelers with respiratory issues",
      "Historical AQI & weather trend visualization for planning",
      "Smart caching with Redis for lightning-fast responses",
      "Predictive AQI alerts for upcoming weekends",
      "Community-powered clean-air hotspots with user stories",
      "Eco-friendly route suggestions with CO₂ impact insights",
      "Social-ready shareable clean-air scorecards"
    ],
    architecture: {
      description:
        "AirWise uses a modular Node.js + Express backend with MongoDB for geospatial queries and Redis for API response caching. The React frontend leverages TanStack Query for optimized real-time data fetching and offline support. External APIs (WAQI, OpenWeather) feed live AQI and weather forecasts, while Nominatim reverse geocoding personalizes suggestions based on user location.",
      structure: "backend/\n├── config/               # Database & environment configuration\n│   └── db.js\n├── controllers/          # Handle request-response logic\n│   └── placeController.js\n├── models/               # MongoDB schemas\n│   └── placeModel.js\n├── routes/               # Define API endpoints\n│   └── placeRoutes.js\n├── services/             # Business logic (e.g., AQI ranking)\n│   └── placeService.js\n├── utils/                # Utility functions (e.g., AQI calculations)\n│   └── aqiUtils.js\n├── app.js                # App initialization\n└── server.js             # Server entry point",
      codeSnippet: "// Example: Nearby clean-air destinations\nrouter.get('/nearby-clean', async (req, res) => {\n  const { latitude, longitude } = req.query;\n  const userState = await getStateFromCoords(latitude, longitude); // Reverse geocode\n  const places = await Place.find({ state: userState }).lean();\n  const ranked = places.sort((a, b) => b.cleanAirScore - a.cleanAirScore);\n  res.json(ranked.slice(0, 5)); // Top 5 destinations\n});"
    },
    challenges: [
      {
        problem: "AQI apps show numbers but don't change user behavior",
        debugging: "User research revealed they just check AQI and stay stuck",
        solution: "Added instant travel recommendations and predictive planning to create an actionable next step"
      },
      {
        problem: "Real-time AQI and weather data caused slow responses",
        debugging: "WAQI API rate limits and latency were bottlenecks",
        solution: "Implemented Redis caching and pre-fetched clean-air routes for peak hours"
      }
    ],
    experience: {
      approach:
        "AirWise is designed as a Delta 4 product—creating an irreversible habit shift from passive AQI checking to proactive travel planning. This meant making it obvious, brag-worthy, and insanely useful: instant clean-air trips, predictive alerts, and eco-friendly routing—all in one tap.",
      futureEnhancements:
        "Next steps: AI-powered weekend planners, AR-based scenic viewpoint highlights, gamified eco-points for greener routes, integration with EV charging maps, and voice assistant commands for clean-air travel.",
      prosAndCons: {
        pros: [
          "Turns boring AQI numbers into exciting travel actions",
          "Predictive AQI and clean destination ranking",
          "Blazing-fast API responses with Redis caching",
          "Scalable modular backend",
          "Social features for brag-worthy sharing"
        ],
        cons: [
          "Still WIP—core features under development",
          "Dependent on external AQI APIs for real-time accuracy",
          "Sparse AQI data in remote areas can limit recommendations"
        ]
      }
    },
    links: {
      github: "https://github.com/atharvwasthere/airwise",
      docs: "https://github.com/atharvwasthere/airwise#readme"
    }
  },
  fastlane: {
    "version": 1,
    "slug": "fastlane",
    "name": "Fastlane v1 & v2",
    "summary": "A modular, TCP-based network benchmarking CLI tool that evolved from slow, single-threaded tests to a high-performance, multi-stream system.",
    "overview": {
      "tagline": "From messy single-thread tests to a real-time, multi-stream network benchmarking beast.",
      "timeline": "3 months (v1: 1 month, v2: 2 months)",
      "type": "CLI / Backend System",
      "status": "Completed",
      "stack": ["C++", "Go", "TCP Sockets", "Iperf3", "ASCII Terminal UI"]
    },
    "motivation": "I wanted to understand network benchmarking, TCP socket programming, concurrency, and building real-time CLI tools. The goal was to make something that could accurately measure network performance, handle errors gracefully, and show live stats—all while being modular enough to extend later.",
    "techStack": [
      {
        "category": "Backend / Core",
        "items": ["C++", "Go", "TCP sockets", "Iperf3", "Threads / Goroutines", "Channels"]
      },
      {
        "category": "CLI & UI",
        "items": ["ASCII UI", "Terminal Progress Bars", "Real-Time Metrics Display"]
      },
      {
        "category": "Tools",
        "items": ["Benchmarking", "Logging", "Error Handling", "Makefiles"]
      }
    ],
    "features": [
      "Ping, download, and upload benchmarking commands",
      "Real-time speed metrics in terminal",
      "Multi-stream TCP connections for parallel testing",
      "Graceful handling of network errors, timeouts, and resets",
      "Modular CLI structure for easy extension of commands",
      "JSON logging for post-test analysis and comparisons",
      "Performance statistics, including per-stream speeds and averages"
    ],
    "architecture": {
      "description": "Fastlane started as a simple, single-threaded TCP benchmarking CLI (v1), and then evolved into a modular, multi-stream, concurrent tool (v2). The architecture uses a per-command folder/module system, with shared utilities for networking, logging, and config parsing. TCP streams are handled in parallel with thread-safe aggregation of results. UI rendering is decoupled from networking threads to avoid flickering and inconsistencies.",
      "structure": "fastlane/\n├── cmd/\n│   ├── ping/\n│   │   └── ping.go\n│   ├── download/\n│   │   └── download.go\n│   └── upload/\n│       └── upload.go\n├── pkg/\n│   ├── network/\n│   │   ├── tcp.go\n│   │   ├── udp.go\n│   │   └── utils.go\n│   ├── ui/\n│   │   ├── ascii_ui.go\n│   │   └── printer.go\n│   └── logger/\n│       └── logger.go\n└── internal/\n    ├── config/\n    │   └── config.go\n    └── metrics/\n        └── stats.go"
    },
    "challenges": [
      {
        "problem": "V1: Single-threaded execution was painfully slow; download/upload streams were sequential.",
        "debugging": "Ran repeated tests on high-speed networks; timings were inconsistent and frustrating.",
        "solution": "Realized the need for concurrency. V2 introduced multi-stream TCP connections using threads/goroutines."
      },
      {
        "problem": "Messy CLI output in v1: every second printed a new line, terminal looked like a chaos storm.",
        "debugging": "Tried \r, line clearing, ANSI codes, nothing worked perfectly.",
        "solution": "Decoupled UI rendering from networking threads in v2; used a centralized render loop for smooth live updates."
      },
      {
        "problem": "Hardcoded commands in v1: adding a new test meant touching multiple files and breaking stuff.",
        "debugging": "Spent hours tracing function calls across modules.",
        "solution": "Implemented modular command structure in v2; each command in its folder with shared utilities."
      },
      {
        "problem": "Crashes on network errors: connection resets, timeouts, or unreachable servers killed v1 tests.",
        "debugging": "Debugged logs and tried to reproduce errors with flaky networks.",
        "solution": "Added robust error handling, retries, and graceful degradation; v2 could continue even if one stream failed."
      },
      {
        "problem": "No public TCP server for raw socket testing in v2.",
        "debugging": "Tried connecting to random servers → blocked, rate-limited, insecure.",
        "solution": "Pivoted to Iperf3-based testing, which cut testing time from ~80–90s → 10–15s while keeping results accurate. Still reused utils like printer.go, logger.go, etc."
      },
      {
        "problem": "TCP speed metrics fluctuated wildly due to TCP slow-start and network jitter.",
        "debugging": "Recorded per-second metrics, plotted spikes, tried smoothing by averaging.",
        "solution": "Implemented sampling over time, ignored outliers, aggregated per-stream results for stable readings."
      },
      {
        "problem": "Planning for UDP support without breaking TCP code.",
        "debugging": "Considered protocol differences and concurrency issues.",
        "solution": "Abstracted networking layer in v2 so UDP integration would be modular and isolated from TCP logic."
      },
      {
        "problem": "Cross-platform terminal differences (Windows vs Linux).",
        "debugging": "ANSI codes, keypress handling, clearing lines all behaved differently.",
        "solution": "Added OS checks and conditional rendering to make the CLI consistent across systems."
      }
    ],
    "experience": {
      "approach": "Kept it simple at first (v1), learned from mistakes, then went full modular + concurrent in v2. I focused on concurrency, robust error handling, modularity, and real-time feedback. Every design choice was driven by performance and reliability, and I reused as many utilities as possible to avoid reinventing the wheel.",
      "futureEnhancements": "Add user-defined test servers, extend UDP support, integrate historical result comparisons, possibly add GUI for easier visualization, and optimize multi-stream aggregation further.",
      "prosAndCons": {
        "pros": [
          "V2 multi-stream benchmarking works reliably and fast",
          "Robust error handling means tests rarely crash",
          "Centralized UI gives real-time metrics cleanly",
          "Modular commands make extending the tool trivial",
          "JSON logging enables post-test analysis and comparison"
        ],
        "cons": [
          "V1 was painfully slow and crash-prone",
          "Iperf3 pivot means the tool relies on external binaries",
          "CLI-only UI may not appeal to non-technical users",
          "Cross-platform quirks still require minor tweaks"
        ]
      }
    },
    "links": {
      "github": "https://github.com/atharvwasthere/fastlane",
      "docs": "https://github.com/atharvwasthere/fastlane#readme"
    }
  },
  encryptify: {
    "version": 1,
    "slug": "encryptify",
    "name": "Encryptify",
    "summary": "High-performance file encryption tool in C++ using multithreading, system calls, and Makefiles to speed up large file processing.",
    "overview": {
      "tagline": "Encrypt files at lightning speed without breaking your CPU.",
      "timeline": " 1 week",
      "type": "CLI / Security Tool",
      "status": "Completed",
      "stack": ["C++", "Multithreading", "System Calls", "Makefile"]
    },
    "motivation": "Wanted to understand low-level file handling, multithreading, and parallel processing in C++. The goal was to encrypt/decrypt large files efficiently while keeping CPU usage optimal.",
    "techStack": [
      {
        "category": "Core",
        "items": ["C++17", "STL", "Threads", "Mutexes", "File I/O"]
      },
      {
        "category": "CLI & Tools",
        "items": ["Makefiles", "Command-Line Interface", "Logging"]
      },
      {
        "category": "Performance",
        "items": ["System Calls", "Parallel Chunk Processing", "Memory Mapping"]
      }
    ],
    "features": [
      "Encrypts and decrypts files using multiple threads",
      "Processes large files in parallel to maximize CPU usage",
      "Supports partial encryption for huge files without loading into memory",
      "Command-line options for encryption algorithms and output paths",
      "Logs progress and errors in real-time"
    ],
    "architecture": {
      "description": "Encryptify reads files in chunks and processes each chunk in its own thread. System calls and memory-mapped I/O are used for efficiency. Makefiles handle building and dependencies. Mutexes and thread-safe queues prevent race conditions during parallel processing.",
      "structure": "cmd/\n├── encryptify/\n│   └── main.cpp\npkg/\n├── crypto/\n│   ├── encrypt.cpp\n│   └── decrypt.cpp\n├── io/\n│   ├── file_reader.cpp\n│   └── file_writer.cpp\n└── utils/\n    ├── logger.cpp\n    └── config.cpp\ninternal/\n├── threads/\n│   └── thread_manager.cpp\n└── tests/\n    └── test_files.cpp"
    },
    "challenges": [
      {
        "problem": "Single-threaded encryption was unbearably slow for large files",
        "debugging": "Timed each stage and realized CPU was underutilized while waiting for I/O",
        "solution": "Chunked files and used multiple threads to encrypt/decrypt in parallel"
      },
      {
        "problem": "Race conditions and data corruption when multiple threads wrote to the same file",
        "debugging": "Observed intermittent corrupt output; used logs to trace thread execution",
        "solution": "Implemented mutex locks and thread-safe queues for file writing"
      },
      {
        "problem": "Memory usage spiked when encrypting huge files",
        "debugging": "Loading whole files into memory caused crashes for multi-GB files",
        "solution": "Used memory-mapped I/O and chunk-based processing to limit memory footprint"
      },
      {
        "problem": "Cross-platform system call differences (Linux vs Windows)",
        "debugging": "Certain file operations behaved differently depending on OS",
        "solution": "Conditional compilation and abstraction for OS-specific file handling"
      },
      {
        "problem": "Build consistency across modules",
        "debugging": "Manual compilation kept breaking due to missing dependencies",
        "solution": "Set up a Makefile to handle compilation, linking, and dependency tracking automatically"
      }
    ],
    "experience": {
      "approach": "Kept everything low-level to really understand performance. Designed chunk-based parallel processing, used mutexes for safety, and memory-mapped I/O to handle huge files. Focused on reliability and speed over fancy UI.",
      "futureEnhancements": "Add more encryption algorithms, integrate with a GUI, support streaming files over network, and maybe add logging for audit/compliance purposes.",
      "prosAndCons": {
        "pros": [
          "Parallel processing drastically reduces encryption time",
          "Handles very large files without crashing",
          "Robust error handling and logging",
          "Makefile simplifies building across platforms",
          "Chunked processing ensures minimal memory footprint"
        ],
        "cons": [
          "No GUI, CLI-only might be intimidating for some users",
          "Currently supports only one algorithm (expandable)",
          "Cross-platform quirks still need testing on multiple OSes",
          "Partial encryption of files may produce uneven chunk speeds"
        ]
      }
    },
    "links": {
      "github": "https://github.com/atharvwasthere/encryptify",
      "docs": "https://github.com/atharvwasthere/encryptify#readme"
    }
  },
  coursify: {
    "version": 1,
    "slug": "coursify",
    "name": "Coursify",
    "summary": "A minimalistic landing page for showcasing online courses.",
    "overview": {
      "tagline": "A sleek and responsive landing page to promote your online course.",
      "timeline": "2 hours",
      "type": "Frontend",
      "status": "Completed",
      "stack": ["React", "Vite", "Tailwind CSS"]
    },
    "motivation": "To quickly set up a professional-looking landing page for an online course without the overhead of a full-fledged application.",
    "techStack": [
      {
        "category": "Frontend",
        "items": ["React", "Vite", "Tailwind CSS"]
      }
    ],
    "features": [
      "Responsive design for mobile and desktop",
      "Clean and modern UI",
      "Fast loading times"
    ],
    "architecture": {
      "description": "A single-page application built with React, bundled using Vite, and styled with Tailwind CSS for rapid development and customization.",
      "structure": "src/\n├── assets/\n├── components/\n├── App.jsx\n└── index.jsx"
    },
    "challenges": [
      {
        "problem": "Ensuring the landing page was lightweight and fast-loading",
        "debugging": "Monitored performance metrics and optimized assets",
        "solution": "Utilized Vite for fast bundling and Tailwind CSS for minimal CSS output"
      }
    ],
    "experience": {
      "approach": "Focused on delivering a clean and professional design with minimal resources to ensure quick load times and a smooth user experience.",
      "futureEnhancements": "Integrate a backend for course registration and user management, and add analytics to track user interactions.",
      "prosAndCons": {
        "pros": [
          "Quick setup and deployment",
          "Optimized for performance",
          "Easy to customize and extend"
        ],
        "cons": [
          "Limited functionality without backend integration",
          "Basic design may not stand out in a competitive market"
        ]
      }
    },
    "links": {
      "github": "https://github.com/atharvwasthere/coursify",
      "demo": "https://coursify-fawn.vercel.app/",
      "readme": "https://github.com/atharvwasthere/coursify/#readme"
    }
  },
  tuneit:{
  "slug": "tuneit",
  "name": "TuneIt",
  "summary": "A high-performance Node.js CLI tool for downloading videos from YouTube and files from Google Drive with queue, proxy, and conversion support.",
  "overview": {
    "tagline": "Manage media downloads, conversions, and Google Drive uploads entirely from the terminal.",
    "timeline": "1 week",
    "type": "CLI Tool",
    "status": "Completed",
    "stack": ["Node.js", "yt-dlp", "ffmpeg", "Commander.js", "Inquirer.js", "Google Drive API", "OAuth2"]
  },
  "motivation": "I wanted a CLI-first approach to manage media downloads, convert files, and upload to Google Drive efficiently. The goal was speed, control, and reliability without relying on a GUI.",
  "techStack": [
    {
      "category": "Core",
      "items": ["Node.js", "Commander.js (CLI commands)", "Inquirer.js (prompts)", "fs & stream for I/O", "child_process for spawning yt-dlp/ffmpeg"]
    },
    {
      "category": "Media Processing",
      "items": ["yt-dlp for YouTube downloads", "ffmpeg for audio/video conversion"]
    },
    {
      "category": "Cloud Integration",
      "items": ["Google Drive API", "OAuth2 authentication", "Token caching"]
    }
  ],
  "features": [
    "Download videos from YouTube and Google Drive",
    "Convert media to MP3 or MP4 using ffmpeg",
    "Interactive CLI wizard for guided downloads",
    "Queue management with concurrency and retry logic",
    "Resume interrupted downloads",
    "Proxy rotation for rate-limited sources",
    "OAuth2 authentication and secure token caching",
    "Real-time progress reporting and ETA in CLI"
  ],
  "architecture": {
    "description": "TuneIt uses a modular Node.js CLI design with separate layers for commands, download engine, conversion engine, and cloud integration. Downloads run concurrently using async/await and Promise-based queues, progress is monitored, and errors are handled with retries and backoff strategies.",
    "structure": "bin/\n├── tuneit.js  # Entry CLI script\nlib/\n├── commands/\n│   ├── download.js\n│   ├── config.js\n│   └── auth.js\n├── downloader/\n│   ├── youtube.js\n│   ├── gdrive.js\n│   ├── queue.js\n│   └── proxy.js\n├── converter/\n│   └── ffmpeg.js\n├── uploader/\n│   └── gdrive.js\n├── utils/\n│   ├── logger.js\n│   └── validation.js\nconfig/\n└── settings.json"
  },
  "challenges": [
    {
      "problem": "Handling YouTube rate-limiting and IP bans",
      "debugging": "Added proxy rotation, retries, and careful yt-dlp argument management",
      "solution": "Built a ProxyManager module with round-robin and failover strategies"
    },
    {
      "problem": "Resuming large downloads without restarting",
      "debugging": "Tracked partial downloads with queue state and temp files",
      "solution": "Implemented a DownloadState tracker and smart resume functionality"
    },
    {
      "problem": "Converting large files efficiently without blocking the CLI",
      "debugging": "Monitored ffmpeg process using child_process events and stream piping",
      "solution": "Implemented asynchronous conversion and progress reporting"
    }
  ],
  "experience": {
    "approach": "I focused on a Node.js CLI-first design to ensure cross-platform usability. All heavy-lifting operations like downloads and conversions are delegated to external tools (yt-dlp and ffmpeg) spawned as child processes. Configs are managed via JSON files, prompts handled via Inquirer, and concurrency controlled using Promise queues. This ensured that even large playlist downloads remained responsive and recoverable.",
    "futureEnhancements": "Add bulk playlist support with automatic folder creation, richer CLI UI with ASCII tables/spinners, built-in metadata tagging, optional logging/analytics for usage insights, and package as an npm global module for easier installation.",
    "prosAndCons": {
      "pros": [
        "Full CLI-first experience for power users",
        "Supports both YouTube and Google Drive",
        "Resilient downloads with resume & retries",
        "Proxy rotation handles rate-limited sources",
        "Real-time progress updates",
        "Cross-platform via Node.js"
      ],
      "cons": [
        "Relies on external binaries (yt-dlp, ffmpeg)",
        "Not a GUI, might be intimidating for beginners",
        "OAuth2 setup for Google Drive requires multiple manual steps",
        "Large playlists still take time due to sequential ffmpeg processing"
      ]
    }
  },
  "links": {
    "github": "https://github.com/atharvwasthere/tuneit",
    "docs": "https://github.com/atharvwasthere/tuneit#readme"
  }
},
"os-tools": {
  "slug": "ostools",
  "name": "OSTools",
  "summary": "An experimental C++ project recreating core OS concepts including memory management, process scheduling, pipelines, and deadlock handling.",
  "overview": {
    "tagline": "Explore OS internals and simulate processes, scheduling, and deadlock detection in C++.",
    "timeline": "3-4 weeks",
    "type": "C++ Systems Project",
    "status": "Completed",
    "stack": ["C++", "Unix System Calls", "Fork & Exec", "Pipes & IPC", "Data Structures"]
  },
  "motivation": "I wanted to understand OS-level resource management, scheduling algorithms, and deadlock handling by building them from scratch.",
  "techStack": [
    {
      "category": "Core",
      "items": ["C++17", "Vectors & Maps", "Standard I/O", "Unix system calls (fork, exec, pipe, dup2)"]
    },
    {
      "category": "Algorithms",
      "items": ["FCFS, SJF, Round Robin scheduling", "Banker's Algorithm", "Resource Allocation Graph (RAG)", "Wait-for Graph (WFG)"]
    },
    {
      "category": "Utilities",
      "items": ["Pipeline execution", "Cycle detection", "Deadlock simulation"]
    }
  ],
  "features": [
    "Simulate process scheduling using FCFS, SJF, and Round Robin",
    "Implement Unix-style pipelines with fork, pipe, and dup2",
    "Perform deadlock avoidance using Banker's Algorithm",
    "Detect deadlocks using Resource Allocation Graph and Wait-for Graph",
    "CLI interface for inputting processes, resources, and commands",
    "Visualize adjacency matrices and lists for debugging and learning"
  ],
  "architecture": {
    "description": "Modular C++ project with separate modules for scheduling, pipelines, and deadlock detection. Pipelines use Unix IPC (pipe/fork/dup2), scheduling algorithms calculate CPU allocation, and deadlock modules build RAG/WFG structures and detect cycles.",
    "structure": "main.cpp  # Entry point\nscheduling/\n├── fcfs.cpp\n├── sjf.cpp\n├── rr.cpp\npipes/\n├── pipeline.cpp\ndeadlock/\n├── bankers.cpp\n├── rag.cpp\n├── wfg.cpp\nutils/\n├── helpers.cpp\n├── logger.cpp"
  },
  "challenges": [
    {
      "problem": "Managing inter-process communication correctly",
      "debugging": "Handled closing and duplicating file descriptors carefully",
      "solution": "Implemented robust pipe/fork/dup2 logic for pipelines"
    },
    {
      "problem": "Ensuring scheduling algorithms correctly simulate CPU allocation",
      "debugging": "Tracked remaining burst times and process queues",
      "solution": "Tested each scheduling algorithm separately with multiple test cases"
    },
    {
      "problem": "Detecting deadlocks accurately in WFG",
      "debugging": "Implemented DFS with recursion stack and validated cycles",
      "solution": "Built robust cycle detection logic for Wait-for Graph"
    }
  ],
  "experience": {
    "approach": "I split the project into independent modules for pipelines, scheduling, and deadlock simulation. Each module has a CLI-driven input system, and Unix system calls handle process management. Data structures like vectors, maps, and adjacency matrices represent resources and dependencies.",
    "futureEnhancements": "Add multi-threaded simulation for real-time process execution, graphical visualization of RAG/WFG, more scheduling algorithms, and memory management simulations.",
    "prosAndCons": {
      "pros": [
        "Deep understanding of OS concepts",
        "Modular and expandable C++ code",
        "CLI-first approach for experiments",
        "Hands-on experience with Unix system calls"
      ],
      "cons": [
        "CLI-only, no GUI visualization",
        "Limited to educational simulations",
        "Manual input required for testing large scenarios"
      ]
    }
  },
  "links": {
    "github": "https://github.com/atharvwasthere/OS",
    "docs": "https://github.com/atharvwasthere/OS#readme"
  }
},
"usb-driver": {
  "slug": "usb_driver",
  "name": "Custom USB Driver",
  "summary": "A Linux kernel module for detecting and interacting with USB mass storage devices with future support for data transfers.",
  "overview": {
    "tagline": "Explore kernel-level USB programming, detect devices, log connections, and handle USB endpoints in Linux.",
    "timeline": "2 days",
    "type": "Linux Kernel Module",
    "status": "In Progress",
    "stack": ["C", "Linux Kernel API", "USB subsystem", "Makefile", "GCC Compiler"]
  },
  "motivation": "I wanted to gain hands-on experience with kernel-level programming and USB device handling, including detection, logging, and safe ejection handling.",
  "techStack": [
    {
      "category": "Core",
      "items": ["C programming", "Linux kernel API", "USB subsystem", "Makefile for module compilation"]
    },
    {
      "category": "Utilities",
      "items": ["printk() for logging", "Kernel module insertion (insmod/rmmod)", "dmesg for debugging"]
    },
    {
      "category": "Planned",
      "items": ["Data transfer handling in usb_transfer.c", "Bulk, interrupt, and control transfers"]
    }
  ],
  "features": [
    "Detects and registers USB mass storage devices",
    "Displays Vendor ID, Product ID, number of endpoints, endpoint attributes, and packet sizes",
    "Logs connection and disconnection events using printk()",
    "Supports auto-suspend for safe device ejection",
    "CLI-driven compilation and insertion using Makefile and insmod",
    "Future support for bulk, interrupt, and control USB transfers"
  ],
  "architecture": {
    "description": "Modular kernel driver design with separate source files for device detection, transfer operations, and utilities. Uses standard Linux USB API and kernel logging functions.",
    "structure": "usb_driver/\n├── include/\n│   └── usb.h\n├── usb_driver.c\n├── usb_transfer.c  # Planned\n├── Makefile\n├── README.md\n├── LICENSE\n└── .gitignore"
  },
  "challenges": [
    {
      "problem": "Understanding kernel-space programming and USB API",
      "debugging": "Used printk extensively and checked dmesg logs",
      "solution": "Tested device detection step by step and ensured correct endpoint handling"
    },
    {
      "problem": "Safe unloading of the kernel module",
      "debugging": "Verified module state using lsmod and dmesg",
      "solution": "Implemented proper cleanup in module exit function"
    },
    {
      "problem": "Planning for future data transfer operations",
      "debugging": "Designed usb_transfer.c skeleton and API",
      "solution": "Structured code to allow bulk, interrupt, and control transfers without affecting detection logic"
    }
  ],
  "experience": {
    "approach": "I focused on kernel-level USB detection and logging using a modular C design. The project emphasizes hands-on exploration of USB endpoints, device attributes, and safe module insertion/removal. While working on this driver, I actively referred to external resources such as the official Linux Kernel Documentation (https://www.kernel.org/doc/html/v6.14-rc7/driver-api/usb/writing_usb_driver.html) and a community guide on Dev.to (https://dev.to/ssd/writing-usb-driver-for-linux-in-c-5g64), which helped me understand USB driver registration, endpoint handling, and best practices.",
    "futureEnhancements": "Implement usb_transfer.c for bulk, interrupt, and control transfers, add error handling, expand support for other USB classes, and visualize device trees automatically.",
    "prosAndCons": {
      "pros": [
        "Hands-on kernel programming experience",
        "Deep understanding of Linux USB subsystem",
        "Modular and extensible design",
        "CLI-driven workflow for compilation and debugging"
      ],
      "cons": [
        "No GUI visualization",
        "Requires Linux kernel headers and compilation tools",
        "Current version only detects devices, no data transfer yet"
      ]
    }
  },
  "links": {
    "github": "https://github.com/atharvwasthere/usb-driver",
    "docs": "https://github.com/atharvwasthere/usb-driver#readme"
  },
  "references": [
    {
      "title": "Linux Kernel Documentation: Writing USB Drivers",
      "url": "https://www.kernel.org/doc/html/v6.14-rc7/driver-api/usb/writing_usb_driver.html"
    },
    {
      "title": "Dev.to Guide: Writing USB Driver for Linux in C",
      "url": "https://dev.to/ssd/writing-usb-driver-for-linux-in-c-5g64"
    }
  ]
},
"signal-chatroom": {
  "slug": "signal",
  "name": "Signal",
  "summary": "A C++17 chat system using Boost.Asio with a 4-byte length-prefixed protocol, multi-room routing, per-session queues, and backpressure for slow readers.",
  "overview": {
    "tagline": "Low-latency, event-driven chat with a simple wire spec and robust session/room model.",
    "timeline": "4 days(initial prototype)",
    "type": "C++ Network Service",
    "status": "In Progress",
    "stack": ["C++17", "Boost.Asio (TCP)", "std::thread", "Makefile", "g++/clang++"]
  },
  "motivation": "Build a Bloomberg-style, protocol-first messaging server: predictable latency, explicit framing, bounded memory, and clear delivery semantics instead of ad-hoc strings.",
  "techStack": [
    {
      "category": "Core",
      "items": ["Boost.Asio (io_context, tcp::socket, async_* APIs)", "Proactor pattern", "Thread pool for io_context", "Zero/low-copy buffers"]
    },
    {
      "category": "Messaging",
      "items": ["Fixed 4B big-endian length header", "Typed body (first field in body)", "Message kinds: TEXT, DIRECT, SYSTEM, FILE_META/CHUNK, ACK, PING/PONG", "Network byte order for all numeric fields in body"]
    },
    {
      "category": "Utilities",
      "items": ["Per-session send queues", "Slow-reader backpressure", "UTF-8 validation (optional)", "Monotonic msg_id + trace logging (in body)"]
    },
    {
      "category": "Planned",
      "items": ["AES-GCM body encryption", "zstd compression", "Multi-room authorization & ACLs", "Latency benchmarks & P99 reporting"]
    }
  ],
  "features": [
    "Event-driven I/O with async_read/async_write (no blocking handlers)",
    "Framed wire protocol (4B length header + typed body)",
    "Rooms, DMs, and broadcast fanout via RoomManager",
    "Per-session bounded send queues to enforce backpressure",
    "Threaded io_context (N threads) for scalability",
    "Clean shutdown on EOF/timeouts/errors with detailed error codes",
    "Observability: trace_id=(sender<<32)|msg_id (encoded in body), queue depth, bytes in/out"
  ],
  "architecture": {
    "description": "Server runs an io_context pool; Acceptor spawns Session objects. Each Session owns a socket, read buffer, and a send queue. RoomManager routes messages by room_id to participant Sessions. Only one write is in-flight per Session; additional messages are chained.",
    "structure": "signal/\n├── include/\n│   ├── protocol.hpp\n│   ├── message.hpp\n│   ├── session.hpp\n│   ├── room.hpp\n│   └── room_manager.hpp\n├── src/\n│   ├── server_main.cpp\n│   ├── client_main.cpp\n│   ├── message.cpp\n│   ├── session.cpp\n│   ├── room.cpp\n│   └── protocol.cpp\n├── benchmark/latency_client.cpp\n├── test/fuzz_decoder.cpp\n├── Makefile\n└── README.md"
  },
  "challenges": [
    {
      "problem": "Designing a safe, minimal header that still supports future growth.",
      "debugging": "Prototyped multiple framers; fuzzed the length decoder and boundary checks.",
      "solution": "Settled on a 4B big-endian body_len. All typing/version/flags live in the body’s first fields; strict bounds and overflow checks on the header."
    },
    {
      "problem": "Handling slow readers without unbounded memory growth.",
      "debugging": "Simulated clients that stop reading; watched sendQ growth and RSS.",
      "solution": "Per-session queue caps (count/bytes), single write-in-flight, drop/close policy for non-ACK messages when over limit."
    },
    {
      "problem": "Avoiding write storms and re-entrancy bugs with async_write.",
      "debugging": "Observed overlapping writes when triggering from multiple places.",
      "solution": "Centralized do_write(), chain next write from completion handler, and guard with write-idle check."
    }
  ],
  "experience": {
    "approach": "Protocol-first: define a 4B big-endian body_len header for framing; the body begins with {version, msg_type, flags, ids...} as needed. Implement encode/decode with strict bounds and endian conversions. Build Room/Session as separate units: Session owns socket + queues; Room holds weak_ptrs to participants and fans out messages. io_context runs on a small thread pool; no heavy work in handlers.",
    "futureEnhancements": "AES-GCM encrypted bodies with nonce/tag prefix, zstd compression flagged in the body header, ACK/latency telemetry with P50/P90/P99, multi-room ACLs, and a load generator to publish throughput/latency curves.",
    "prosAndCons": {
      "pros": [
        "Deterministic framing with the simplest possible header",
        "Good scalability via io_context thread pool",
        "Bounded memory via backpressure",
        "Clear separation: framing vs. routing vs. session I/O"
      ],
      "cons": [
        "No GUI; CLI only",
        "Currently plaintext (encryption planned in body metadata)",
        "Single-node deployment; no cross-node routing yet"
      ]
    }
  },
  "links": {
    "github": "https://github.com/atharvwasthere/signal",
    "docs": "https://github.com/atharvwasthere/signal#readme"
  },
  "references": [
    {
      "title": "Boost.Asio docs & examples (async TCP, io_context, strand)",
      "url": "https://www.boost.org/doc/libs/release/doc/html/boost_asio.html"
    },
    {
      "title": "Beej’s Guide to Network Programming (endianness & sockets basics)",
      "url": "https://beej.us/guide/bgnet/"
    }
  ]
},
"evespark": {
  "slug": "evespark",
  "name": "EveSpark: Event Management System",
  "summary": "A full-stack web application that simplifies the organization and participation of campus events, offering a central platform for registration, discovery, and administration.",
  "overview": {
    "tagline": "One-stop portal for managing events — from creation to participation.",
    "timeline": "1.5 months",
    "type": "Web Application",
    "status": "Completed",
    "stack": [
      "Node.js", "Express.js", "React.js", "MySQL",
      "Bootstrap", "RESTful APIs", "Flask (auxiliary)"
    ]
  },
  "motivation": "Before EveSpark, event details were scattered across WhatsApp groups and posters, leading to missed registrations and poor communication. The project was motivated by the need for a structured platform where students could discover events, register instantly, and admins could manage everything from one dashboard.",
  "techStack": [
    {
      "category": "Core",
      "items": [
        "Node.js runtime for building scalable backend",
        "Express.js for routing and API endpoints",
        "React.js SPA front-end for responsive UI",
        "MySQL for structured relational data"
      ]
    },
    {
      "category": "Authentication & Security",
      "items": [
        "Custom login/register with password hashing",
        "JWT-style tokens for user/admin role management",
        "CORS enabled for safe API consumption"
      ]
    },
    {
      "category": "Utilities",
      "items": [
        "Bootstrap for UI layout and styling",
        "Flask microservice for lightweight auxiliary logic"
      ]
    },
    {
      "category": "Planned",
      "items": [
        "WebSocket-based real-time notifications",
        "Payment integration for paid events",
        "SMS/email notifications to participants",
        "Analytics dashboard for admins",
        "Mobile app companion (React Native/Flutter)"
      ]
    }
  ],
  "features": [
    "Users can create profiles, track past event participation, and save interests.",
    "Simple event discovery interface with filtering and search.",
    "Streamlined registration flow — no external forms required.",
    "Admins can create/edit/delete events and track registrations live.",
    "Events display essential details: description, date, venue, organizers.",
    "Responsive front-end design works on desktops, tablets, and mobiles.",
    "Secure authentication system separates users and administrators.",
    "RESTful APIs for event CRUD and user registration logic."
  ],
  "architecture": {
    "description": "EveSpark follows a clear separation of concerns: React handles the front-end user experience, Express.js with Node.js powers the REST backend, and MySQL stores persistent data about users, events, and registrations. The architecture also introduces a small Flask microservice for modularity. Authentication middleware enforces roles, while CORS ensures secure cross-origin interactions.",
    "structure": "evespark/\n├── client/            # React front-end\n│   ├── src/\n│   │   ├── components/\n│   │   ├── pages/\n│   │   ├── App.js\n│   │   └── index.js\n│   └── package.json\n├── server/            # Node.js/Express API\n│   ├── src/\n│   │   ├── routes/\n│   │   ├── controllers/\n│   │   ├── models/\n│   │   └── app.js\n│   └── package.json\n├── flask_api/         # Auxiliary Flask microservice\n│   └── app.py\n├── database/\n│   ├── schema.sql\n│   └── seed.sql\n├── README.md\n└── LICENSE"
  },
  "challenges": [
    {
      "problem": "Implementing a secure role-based authentication system.",
      "debugging": "Test users could initially access admin-only endpoints due to missing middleware checks.",
      "solution": "Added token-based middleware to guard routes, introduced hashed passwords, and restricted privileges."
    },
    {
      "problem": "Ensuring stability under multiple registrations at once.",
      "debugging": "Observed MySQL connection pool exhaustion and duplicate records during stress tests.",
      "solution": "Adopted pooled connections, enforced unique constraints, and wrapped writes inside transactions."
    },
    {
      "problem": "Keeping the front-end responsive with heavy API calls.",
      "debugging": "Large API responses blocked UI rendering in React.",
      "solution": "Introduced loading states, reduced payload size, and optimized React state updates with hooks/context."
    }
  ],
  "experience": {
    "approach": "The build was approached as a modular full-stack app: backend in Node/Express for CRUD and auth, front-end in React for interactivity, MySQL for persistent storage, and an auxiliary Flask service for experimental extensions. It emphasizes solving real campus coordination problems by replacing scattered communication with a structured system.",
    "futureEnhancements": "Next steps include WebSocket-powered real-time updates (notifications, chats), integration with UPI/payment systems for ticketed events, automatic email/SMS alerts for reminders, data analytics dashboards for admins, and a mobile-first app for on-the-go registration.",
    "prosAndCons": {
      "pros": [
        "Full-stack modular design with clean separation",
        "Responsive UI built with React + Bootstrap",
        "Simplified user experience for event discovery and registration",
        "Admin panel centralizes all event management"
      ],
      "cons": [
        "No real-time communication yet",
        "Requires manual deployment/configuration",
        "Currently designed for single-server use, not horizontally scalable"
      ]
    }
  },
  "links": {
    "github": "https://github.com/atharvwasthere/EveSpark",
    "docs": "https://github.com/atharvwasthere/EveSpark#readme"
  }
},
"search-engine": {
    "slug": "persona-search-engine",
    "name": "Persona-Based Trust-Aware Search Engine",
    "summary": "A search engine that delivers results personalized by user personas and filtered for credibility, designed to prevent misinformation and improve search relevance for specific user roles.",
    "overview": {
      "tagline": "Smart search that adapts to you — Developer, Finance, Student, or Traveler.",
      "timeline": "Still figuring out (2–4 weeks MVP expected)",
      "type": "Web Application / Search Engine",
      "status": "Ideation / Planning",
      "stack": [
        "Go for backend and crawler services",
        "React.js or Next.js for front-end",
        "Bigtable / PostgreSQL for storage",
        "Redis for caching",
        "Elasticsearch or Meilisearch for indexing",
        "Optional ML components for credibility scoring"
      ]
    },
    "motivation": "Current search engines provide generalized results and often fail to filter misinformation effectively. The project is motivated by the need for a trusted, persona-driven search system that filters content based on credibility and user-specific context.",
    "techStack": [
      {
        "category": "Core",
        "items": [
          "Go backend for scalable crawlers and API services",
          "React.js SPA front-end for personalized search interface",
          "Bigtable / PostgreSQL for storing trusted and untrusted content",
          "Elasticsearch or Meilisearch for fast full-text and semantic search"
        ]
      },
      {
        "category": "Authentication & Security",
        "items": [
          "JWT or session-based auth for persona-based access",
          "Role-based access control for different personas",
          "CORS and rate limiting for secure API consumption"
        ]
      },
      {
        "category": "Utilities",
        "items": [
          "Redis for caching frequently accessed queries",
          "Optional ML/AI service for credibility scoring of content",
          "Logging and monitoring using Prometheus/Grafana or similar"
        ]
      },
      {
        "category": "Planned / Experimental",
        "items": [
          "Multi-persona support with dynamic query routing",
          "Device-driver-like crawler for each persona domain",
          "Cross-source verification for credibility scoring",
          "Visualization of credibility and source trust on UI",
          "Optional LLM-based summarization for top results"
        ]
      }
    ],
    "features": [
      "Users can select a persona (Developer, Finance Analyst, Student, Traveler) to filter and rank results.",
      "Crawlers fetch content from trusted and specialized sources per persona.",
      "Credibility engine assigns scores to each piece of content before indexing.",
      "Search results are personalized and ranked based on persona, trust score, and relevance.",
      "Cache frequently accessed or trending topics for faster response times.",
      "Optional dashboard displays trust levels, sources, and alerts on misinformation trends.",
      "Frontend UI shows results with transparency: credibility score and source verification info."
    ],
    "architecture": {
      "description": "The system separates concerns into front-end, backend API, crawler services, storage, indexing, and optional ML modules. Frontend communicates via API Gateway to Go backend, which orchestrates crawlers, credibility engine, and indexing. Trusted and untrusted content are stored separately. Persona selection informs query processing and ranking.",
      "structure": "persona_search_engine/\n├── client/            # React front-end\n│   ├── src/\n│   │   ├── components/\n│   │   ├── pages/\n│   │   ├── App.js\n│   │   └── index.js\n│   └── package.json\n├── server/            # Go backend API\n│   ├── cmd/\n│   ├── internal/\n│   │   ├── handlers/\n│   │   ├── models/\n│   │   ├── services/\n│   │   └── crawler/\n│   └── go.mod\n├── storage/\n│   ├── bigtable/     # Trusted content DB\n│   └── untrusted/    # Low credibility store\n├── search_index/      # Elasticsearch / Meilisearch\n├── ml_service/       # Optional credibility scoring\n└── README.md"
    },
    "challenges": [
      {
        "problem": "Determining credibility of content from diverse sources.",
        "debugging": "Still figuring out how to design scoring rules vs ML classifier.",
        "solution": "Plan to implement layered scoring: source reputation, cross-verification, sentiment analysis."
      },
      {
        "problem": "Managing multiple personas with custom ranking logic.",
        "debugging": "Still figuring out query routing and caching strategies per persona.",
        "solution": "Persona selector will guide crawler scope and search ranking algorithms."
      },
      {
        "problem": "Efficiently crawling and storing large amounts of web content without Google API.",
        "debugging": "Still figuring out Go-based crawler architecture for reliability and politeness.",
        "solution": "Will implement domain-specific crawlers and RSS/API-based scraping for trusted sources."
      }
    ],
    "experience": {
      "approach": "The build approach is modular: separate crawler services for each persona, backend in Go for orchestration, Bigtable/Postgres for storage, and Elasticsearch/Meilisearch for indexing. Frontend React app allows persona selection and transparency display. ML modules can be integrated later for credibility scoring.",
      "futureEnhancements": "Real-time crawling for trending topics, device-driver-like crawler for multiple domains, ML-based credibility scoring, LLM summarization for search results, analytics dashboard for user insights, multi-server horizontal scaling for larger datasets.",
      "prosAndCons": {
        "pros": [
          "Persona-based search personalization",
          "Trust-aware content filtering",
          "Modular architecture allows easy scaling and experimentation",
          "Cache and ranking optimizations improve response time"
        ],
        "cons": [
          "Still in planning; crawler and credibility engine design not finalized",
          "ML credibility scoring requires dataset preparation",
          "Complexity in handling multiple personas simultaneously",
          "Frontend/UX for displaying trust scores needs careful design"
        ]
      }
    },
    "links": {
      "github": "Still figuring out / planning",
      "docs": "Still figuring out / planning"
    }
  },
  "competitive-search": {
    "slug": "competitive_search",
    "name": "Competitive Search ",
    "summary": "A Flow Launcher Node.js plugin to quickly search and open Codeforces and LeetCode problems from the launcher, with an extensible action/method map for future features (tags, difficulty, contests, profiles).",
    "overview": {
      "tagline": "Type lc <query> or cf <query> → get results, click → open in browser. Clean JSON-RPC, modular actions, CI-ready.",
      "timeline": "1–2 weeks (MVP) + incremental features",
      "type": "Flow Launcher Plugin (Node.js)",
      "status": "MVP working locally; packaging/release in progress",
      "stack": ["Node.js 23.x", "Flow Launcher JSON-RPC", "open (npm)", "GitHub Actions", "Windows (primary)"]
    },
    "motivation": "Jump from Flow to a specific competitive programming problem or filtered search in one keystroke. Keep hands on keyboard, avoid browser tab churn, and later surface helpful metadata (tags/difficulty/rating) inline.",
    "techStack": [
      {
        "category": "Core",
        "items": ["Node.js (CommonJS)", "Flow Launcher JSON-RPC via process.argv[2]", "methodMap dispatcher", "ActionKeyword triggers (cs/lc/cf)"]
      },
      {
        "category": "Packaging & Release",
        "items": ["GitHub Actions (build + zip + release)", "node_modules vendoring", "UUID manifest", "icon + IcoPath"]
      },
      {
        "category": "Utilities",
        "items": ["open (default browser)", "node.bat shim (cwd fix)", "Basic query parser (prefix + keyword)"]
      },
      {
        "category": "Planned Integrations",
        "items": ["Codeforces API (problemset, rating, tags)", "LeetCode GraphQL (difficulty, tags)", "Local cache for recent queries"]
      }
    ],
    "features": [
      "ActionKeyword flow: lc <text> → LeetCode search; cf <text> → Codeforces problemset search; cs <text> → smart router (planned).",
      "One-click open via JsonRPCAction → openUrl action.",
      "Method map routing for progressive complexity (query, openUrl, showTags, ...).",
      "Result scoring knob (score field) to fine-tune ordering.",
      "Icon support for recognizable results.",
      "CI pipeline that zips code + node_modules and publishes versioned releases."
    ],
    "architecture": {
      "description": "Flow calls main.js with a JSON-RPC payload. main.js parses {method, parameters} and dispatches to actions via a methodMap. handleQuery parses the user input (prefix + terms), builds an URL, and returns a Result[]. On selection, Flow calls openUrl which uses open() to launch the browser. The structure is intentionally modular so new actions (e.g., showTags) can be added without touching the core.",
      "structure": "plugin/\n├── main.js\n├── actions/\n│   ├── openUrl.js\n│   ├── showTags.js\n│   └── handleQuery.js\n├── icon.png\n├── node.bat\n├── package.json\n└── plugin.json",
      "flow": [
        "User types: lc two sum",
        "Flow → node main.js { method: \"query\", parameters: [\"lc two sum\"] }",
        "main.js → methodMap.query → actions/handleQuery.js",
        "handleQuery → parse prefix & search terms → build URL → return Result[] with JsonRPCAction { method: \"openUrl\", parameters: [url] }",
        "User selects result → Flow → node main.js { method: \"openUrl\", parameters: [url] }",
        "actions/openUrl.js → open(url) → default browser"
      ]
    },
    "implementation": {
      "actionKeywords": ["cs", "lc", "cf"],
      "resultShape": {
        "Title": "string",
        "SubTitle": "string",
        "IcoPath": "string",
        "JsonRPCAction": {
          "method": "string",
          "parameters": ["..."],
          "dontHideAfterAction": "boolean (optional)"
        },
        "score": "number (0–100)"
      },
      "queryParsing": "Split on whitespace; first token is platform prefix (lc/cf); rest rejoined as search terms. Build platform-specific URL."
    },
    "pluginManifest": {
      "example": {
        "ID": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
        "ActionKeyword": "cs",
        "Name": "Competitive Search",
        "Description": "Search Codeforces/LeetCode from Flow",
        "Author": "Atharv Singh",
        "Version": "1.0.0",
        "Language": "javascript",
        "Website": "https://github.com/Atharvwasthere/Flow.Launcher.Plugin.CompetitiveSearch",
        "IcoPath": "icon.png",
        "ExecuteFileName": "node.bat"
      },
      "notes": [
        "ID must be a valid UUID.",
        "ActionKeyword must be set (e.g., cs).",
        "If using Node runtime, prefer a node.bat shim so cwd resolves to plugin dir.",
        "For TS/JS plugins you can also set ExecuteFileName to main.js, but the node.bat pattern is recommended by Flow docs."
      ]
    },
    "ci": {
      "workflow": "On push to main (or workflow_dispatch), actions/checkout, setup-node (23.9.0 to match local), read Version from plugin.json, npm install --production, zip including node_modules, release with tag v<Version>.",
      "zipContents": ["main.js", "actions/", "icon.png", "node.bat", "package.json", "package-lock.json (optional)", "plugin.json", "node_modules/"],
      "releaseName": "Flow.Launcher.Plugin.CompetitiveSearch-v<Version>.zip"
    },
    "currentState": {
      "whatWorks": [
        "Plugin loads and appears in Flow Launcher (log shows init OK).",
        "Query method returns a single clickable result for lc/cf with correct URL.",
        "Click action opens the browser via open() when routed to openUrl."
      ],
      "whereStuck": [
        "Historically: plugin not visible due to missing UUID/ActionKeyword; fixed by updating plugin.json.",
        "Historically: clicks not opening due to method name mismatch/typos (parameters vs parameter) and mixed handlers; fixed by methodMap + clean action names.",
        "Packaging: need final CI zip naming and ensuring node_modules is included so users do not need npm install.",
        "Optional: confirm Node path in Flow & prefer node.bat for stable cwd resolution.",
        "Optional: icons path consistency (icon.png or Images\\app.png)."
      ],
      "logsHelpfulLines": [
        "PluginManager.InitializePlugins - Total init cost for <Competitive Search> is <XXms>",
        "Dependencies Info: Node Path: C:\\\\Program Files\\\\nodejs\\\\node.exe"
      ]
    },
    "roadmap": {
      "mvp": [
        "✅ lc <query> → open LeetCode search",
        "✅ cf <query> → open Codeforces problemset search",
        "✅ methodMap dispatch (query, openUrl, showTags stub)",
        "✅ basic icon + scoring"
      ],
      "next": [
        "Inline metadata: fetch LeetCode difficulty & tags (GraphQL), CF rating & tags (problemset API).",
        "Multiple results list (top N matches) with score ordering.",
        "Smart router: cs <query> → detect platform intent or show both.",
        "Recent history & quick re-open items.",
        "Settings page for default platform and max results.",
        "Unit tests for query parsing and action routing."
      ],
      "later": [
        "Profile shortcuts (cf @handle, lc @username).",
        "Contest search (upcoming, virtual, standings).",
        "Local cache with TTL + offline read of last results.",
        "Theming & preview badges (difficulty/rating) inside result subtitle."
      ]
    },
    "challenges": [
      {
        "problem": "Plugin not detected by Flow.",
        "debugging": "Checked logs under %APPDATA%/FlowLauncher/Logs and saw null key & missing execute path messages.",
        "solution": "Added valid UUID, ActionKeyword, and corrected ExecuteFileName. Ensured plugin folder in Roaming\\FlowLauncher\\Plugins. Restarted Flow."
      },
      {
        "problem": "Click action did not open browser.",
        "debugging": "JsonRPCAction method name did not match handler; typos in parameters vs parameter; async/await not used consistently.",
        "solution": "Introduced methodMap and normalized action names: openUrl, showTags. Access parameters[0] reliably. Use open(url)."
      },
      {
        "problem": "Users should not run npm install.",
        "debugging": "Flow docs recommend shipping node_modules inside zip.",
        "solution": "CI zips repo + node_modules; main.js requires './node_modules/open' or uses node.bat to ensure local resolution."
      }
    ],
    "experience": {
      "approach": "Keep the core tiny: a clean dispatcher, small action handlers, and a simple query parser. Push complexity to actions/utils so new features do not touch main.js. Use CI to bundle everything so end-users only install the zip.",
      "futureEnhancements": "Multiple results with metadata, API rate limiting, graceful errors when APIs fail, settings to prefer LC/CF, and caching for snappy repeated searches.",
      "prosAndCons": {
        "pros": [
          "Fast keyboard-first search for CP problems.",
          "Minimal main.js with clear methodMap routing.",
          "Easy to extend with new actions."
        ],
        "cons": [
          "Currently opens search pages, not exact problems (needs API resolution).",
          "No offline cache yet.",
          "LeetCode GraphQL requires careful handling to avoid breakage."
        ]
      }
    },
    "testing": {
      "manual": [
        "From Flow, type: lc two sum → should show a result → click opens LC search.",
        "From Flow, type: cf binary search → should open CF problemset search with filter.",
        "Edge: type only lc or cf with no terms → plugin should guide usage.",
        "Click test: ensure openUrl receives parameters[0] and opens default browser."
      ],
      "cliMock": [
        "node main.js \"{\\\"method\\\":\\\"query\\\",\\\"parameters\\\":[\\\"lc two sum\\\"]}\"",
        "node main.js \"{\\\"method\\\":\\\"openUrl\\\",\\\"parameters\\\":[\\\"https://leetcode.com\\\"]}\""
      ]
    },
    "links": {
      "github": "https://github.com/Atharvwasthere/Flow.Launcher.Plugin.CompetitiveSearch",
      "docs": "https://github.com/Flow-Launcher/Flow.Launcher/wiki/Develop-Plugins-(JS-TS)"
    }
  },
  "JustDO": {
    "slug": "JustDO",
    "name": "JustDO",
    "summary": "A minimalistic CLI todo manager that helps you stay productive straight from your terminal—no GUI, no distractions, just pure focus.",
    "overview": {
      "tagline": "JustDO – Get More Done in Less Time.",
      "timeline": "1 Day",
      "type": "Command-Line Application",
      "status": "Production Ready",
      "stack": ["Go", "Cobra CLI", "Viper Config", "JSON Storage", "Cross-Platform"]
    },
    "motivation": "Most todo apps are bloated with features you don't need, forcing you to switch contexts from your terminal to a GUI. JustDO eliminates that friction by bringing task management directly to where developers live—the command line. It's fast, lightweight, and designed for people who think in terminal commands, not mouse clicks.",
    "techStack": [
      {
        "category": "Core Language",
        "items": ["Go 1.24.4", "JSON for data persistence"]
      },
      {
        "category": "CLI Framework",
        "items": ["Cobra CLI", "Viper configuration management", "Tabwriter for formatting"]
      },
      {
        "category": "Distribution",
        "items": ["GoReleaser", "Homebrew Tap", "Scoop Bucket", "GitHub Releases"]
      },
      {
        "category": "Development Tools",
        "items": ["Go modules", "Cross-platform builds", "MIT License"]
      }
    ],
    "features": [
      "Lightning-fast task addition with duplicate detection",
      "Priority-based task sorting (1=low, 2=medium, 3=high)",
      "Flexible task filtering (--all, --done, pending)",
      "Persistent JSON storage with configurable file paths",
      "Cross-platform support (Windows, macOS, Linux)",
      "Multiple installation methods (Homebrew, Scoop, Go install)",
      "Configuration via flags, environment variables, or YAML config",
      "Clean tabular output with task positions and status indicators",
      "Task completion tracking with visual markers",
      "Home directory auto-detection for seamless setup"
    ],
    "architecture": {
      "description": "JustDO follows a modular CLI architecture using Cobra for command handling and Viper for configuration management. The core todo package handles data modeling and JSON persistence, while individual command files (add, list, done) manage specific operations. The application supports multiple configuration sources with a clear precedence hierarchy.",
      "structure": "cmd/\n├── root.go              # Base command & config initialization\n├── add.go               # Task creation with priority support\n├── list.go              # Task listing with filtering options\n└── done.go              # Task completion functionality\ntodo/\n└── todo.go              # Core data models & file operations\nmain.go                  # Application entry point\ntasks.json               # Default storage file",
      "codeSnippet": "// Example: Adding a task with priority\nfunc addRun(cmd *cobra.Command, args []string) {\n  items, _ := todo.ReadItems(viper.GetString(\"datafile\"))\n  for _, taskText := range args {\n    if !taskExists(items, taskText) {\n      item := todo.Item{Text: taskText}\n      item.SetPriority(priority)\n      items = append(items, item)\n    }\n  }\n  todo.SaveItems(viper.GetString(\"datafile\"), items)\n}"
    },
    "challenges": [
  {
    "problem": "Most CLI tools have poor configuration management",
    "debugging": "Users struggled with hardcoded file paths and no flexibility",
    "solution": "Implemented Viper with hierarchical config: flags > env vars > config file > defaults"
  },
  {
    "problem": "Task organization became chaotic without priorities",
    "debugging": "Users couldn't distinguish urgent from casual tasks",
    "solution": "Added priority system (1-3) with smart sorting that puts done items first, then sorts by priority"
  },
  {
    "problem": "Cross-platform distribution complexity",
    "debugging": "Manual binary distribution was tedious and error-prone",
    "solution": "Integrated GoReleaser with automated Homebrew and Scoop package management"
  },
  {
    "problem": "Case-sensitivity issues during release",
    "debugging": "Linux CI runners failed because README.md was mismatched as Readme.md",
    "solution": "Standardized filenames and updated GoReleaser config to match case-sensitive paths"
  },
  {
    "problem": "Release workflow couldn’t push to Homebrew/Scoop repos",
    "debugging": "Default GitHub Actions token didn’t have cross-repo write permissions",
    "solution": "Generated a fine-grained PAT with Contents: read/write, added as GH_PAT, and updated workflow to use it"
  },
  {
    "problem": "GoReleaser build failed to locate entry point",
    "debugging": "Config assumed main.go was in cmd/justdo/, but the file was in the root directory",
    "solution": "Fixed GoReleaser config by setting main path to project root"
  }
],
    "experience": {
      "approach": "JustDO embraces the Unix philosophy of 'do one thing and do it well.' Instead of feature-creeping into a complex task manager, it focuses on the core workflow developers actually use: add tasks, check progress, mark complete. The CLI-first approach eliminates context switching and integrates seamlessly with existing terminal workflows.",
      "futureEnhancements": "Next steps: Task categories/tags, due date support, task dependencies, team collaboration features, git integration for project-specific todos, terminal UI (TUI) mode for interactive usage, task time tracking, and integration with popular IDEs.",
      "prosAndCons": {
        "pros": [
          "Zero-friction task management from terminal",
          "Blazing fast startup and execution",
          "Cross-platform with easy installation options",
          "Flexible configuration without complexity",
          "Clean, readable output format",
          "Lightweight with no external dependencies"
        ],
        "cons": [
          "CLI-only interface may not suit all users",
          "Limited advanced features compared to GUI apps",
          "JSON storage lacks advanced querying capabilities",
          "No built-in synchronization across devices",
          "Manual backup required for task persistence"
        ]
      }
    },
    "links": {
      "github": "https://github.com/atharvwasthere/JustDO",
      "docs": "https://github.com/atharvwasthere/JustDO#readme",
      "releases": "https://github.com/atharvwasthere/JustDO/releases"
    }
},
    "DashIt": {
    "slug": "DashIt",
    "name": "DashIt",
    "summary": "A fast, clean dashboard UI for Shopify-style metrics and reports, with landing, auth, and export features.",
    "overview": {
      "tagline": "Your Stats, Simplified",
      "timeline": "2 hours",
      "type": "Web Frontend Application",
      "status": "Prototype / Demo-Ready",
      "stack": ["React", "Vite", "TypeScript", "TailwindCSS", "EvilCharts", "Client-side PDF Export"]
    },
    "motivation": "Enable founders/shops to quickly view key metrics (revenue, cohorts, retention) in a polished UI without building a full stack dashboard first. The frontend is pluggable — backend can be swapped. Focus is on UX, clarity, and speed of iteration.",
    "techStack": [
      {
        "category": "Frontend Core",
        "items": ["React", "TypeScript"]
      },
      {
        "category": "Build Tool / Bundler",
        "items": ["Vite"]
      },
      {
        "category": "Styling / UI",
        "items": ["TailwindCSS", "Responsive Layout"]
      },
      {
        "category": "Charts / Visualization",
        "items": ["EvilCharts"]
      },
      {
        "category": "Export / Utilities",
        "items": ["Client-side PDF export (via JS)"]
      },
      {
        "category": "Routing / Auth",
        "items": ["React Router", "Google OAuth integration (frontend hook)"]
      }
    ],
    "features": [
      "Landing / Homepage + Pricing / Login UI",
      "Dashboard views over 1 / 3 / 6 months",
      "Month-over-month comparisons, cohort & category breakdowns",
      "Real-time KPIs: 24h revenue, orders, AOV, new customers",
      "AI-style quick notes (UI hooks for annotation or insights)",
      "Export dashboard / reports to PDF (client side)",
      "Responsive layout (mobile / desktop)",
      "Mock mode for local development (simulate backend)",
      "Chart rendering, data mapping utilities, integration hooks for real backend"
    ],
    "architecture": {
      "description": "Frontend is structured in pages, components, hooks, lib (API / data mappers), utils, types. The architecture separates UI (components, pages) from data logic (lib, mappers), and utility functions (PDF export, formatting). Mock mode allows development without backend. Auth and data fetch are decoupled so backend can be plugged in.",
      "structure": "src/\n├── pages/             # Dashboard.tsx, Pricing.tsx, AuthGoogle.tsx, Index.tsx\n├── components/ui/     # charts, KPIs, tables, nav, hero, footer\n├── hooks/              # e.g. useMobile, useToasts, maybe useInsights\n├── lib/                # API wrappers, insight mappers\n├── utils/              # PDF export logic, formatters, etc.\n└── types/              # shared TS type definitions"
    },
    "challenges": [
      {
        "problem": "No real backend yet, data shape undefined",
        "debugging": "Must mock API shapes and enforce contracts in lib/insights.mappers",
        "solution": "Mock-mode and clear mapper interfaces; integrate early with backend to reduce mismatch"
      }
    ],
    "experience": {
      "approach": "DashIt-Frontend emphasizes clarity, speed, and modularity. It’s built to ship a working demo fast, with clean UI and pluggable backend. It trades off deep backend logic for frontend polish and flexibility.",
      "futureEnhancements": "Add filtering, drill-down charts, live updates / websockets, annotation/commenting, multi-tenant dashboard switching, dark mode, more export formats (CSV, PNG), embedding dashboards, custom metrics, theming.",
      "prosAndCons": {
        "pros": [
          "Beautiful, coherent UI out of the box",
          "Backend agnostic — easy to plug in different services",
          "Rapidly demoable",
          "Lightweight and front-end focused",
          "Responsive by default, export capability built in"
        ],
        "cons": [
          "No built-in backend logic or data storage",
          "PDF export may not scale for large datasets",
          "Mock data mismatches risk during real integration",
          "Limited analytic depth until backend supports richer queries",
          "Frontend alone cannot enforce security or data access rules"
        ]
      }
    },
    "links": {
      "github": "https://github.com/atharvwasthere/DashIt-Frontend",
      "demo": "https://dash-it-frontend.vercel.app",
      "readme": "https://github.com/atharvwasthere/DashIt-Frontend#readme"
    }
  },
  "Orion": {
    "slug": "orion",
    "name": "Orion",
    "summary": "A multi-tenant, context-aware AI customer support platform that blends hybrid retrieval, structured LLM reasoning, and adaptive confidence tracking to deliver human-grade chat experiences for small businesses.",
    "overview": {
      "tagline": "Orion – Intelligent Customer Support with Contextual Understanding.",
      "timeline": "Ongoing Development",
      "type": "Full-Stack AI Application",
      "status": "Production Ready",
      "stack": ["Node.js", "Express", "Prisma", "PostgreSQL", "React", "Vite", "TanStack Router", "TypeScript", "Tailwind CSS"]
    },
    "motivation": "Traditional chatbots lack contextual understanding and often provide generic responses. Orion addresses this by implementing hybrid context retrieval that combines semantic FAQ matching with company profile summaries, enabling more accurate and human-like responses. The platform also incorporates adaptive confidence tracking to identify when to escalate to human agents, ensuring customer satisfaction while reducing support workload.",
    "techStack": [
      {
        "category": "Backend",
        "items": ["Node.js 20", "Express.js", "Prisma ORM", "PostgreSQL", "Google Gemini API"]
      },
      {
        "category": "Frontend",
        "items": ["React 19", "Vite 7", "TypeScript", "Tailwind CSS v4", "TanStack Router", "Radix UI"]
      },
      {
        "category": "AI & LLM Integration",
        "items": ["Google Gemini API (@google/genai)", "768-dimension vector embeddings", "Structured JSON response generation"]
      },
      {
        "category": "Data Management",
        "items": ["Prisma ORM", "PostgreSQL with pgvector", "JSON metadata storage"]
      },
      {
        "category": "Development & Deployment",
        "items": ["TypeScript", "ESLint", "Prettier", "Cross-platform compatibility"]
      }
    ],
    "features": [
      "Hybrid context retrieval combining company profile summaries with semantic FAQ matching",
      "Structured LLM responses with JSON schema enforcement for consistent output",
      "Adaptive confidence tracking with Exponential Moving Average (EMA) smoothing",
      "Multi-tenant architecture with company-specific knowledge bases",
      "Intelligent escalation system based on confidence thresholds and conversation patterns",
      "Bulk FAQ upload with 97% reduction in Gemini API calls through optimized processing",
      "Session-based conversation memory with confidence history tracking",
      "Real-time structured chat interface with confidence visualization",
      "Dashboard analytics for monitoring conversation quality and escalation patterns",
      "TanStack Router-based frontend with responsive design and modern UI components"
    ],
    "architecture": {
      "description": "Orion follows a monorepo architecture with clearly separated backend and frontend layers. The backend implements a RESTful API using Express with Prisma ORM for database operations. The frontend uses React with Vite for fast development and TanStack Router for client-side routing. Core intelligence is implemented through hybrid context retrieval, structured LLM generation, and adaptive confidence tracking systems.",
      "structure": "Orion/\n├── Backend/                     # Express + Prisma API\n│   ├── prisma/                  # Schema + migrations\n│   ├── src/\n│   │   ├── config/              # Database and API configuration\n│   │   ├── lib/                 # Core utilities (embeddings, confidence, companyProfile)\n│   │   ├── llm/                 # LLM adapters and structured generation\n│   │   ├── middleware/          # Error handling and logging\n│   │   ├── routes/              # API endpoints (v1)\n│   │   ├── services/            # Business logic (hybridContext, retrieval, summary)\n│   │   └── tests/               # Unit and integration tests\n│   └── package.json             # Backend dependencies\n└── Frontend/                    # React + Vite app\n    ├── src/\n    │   ├── Components/          # UI components\n    │   ├── Pages/               # Page components\n    │   ├── hooks/               # Custom React hooks\n    │   ├── lib/                 # Frontend utilities\n    │   ├── routes/              # TanStack Router route definitions\n    │   └── router.ts            # Router configuration\n    └── package.json             # Frontend dependencies",
      "codeSnippet": "// Example: Hybrid context retrieval service\nexport async function getHybridContext(\n  companyId: string,\n  query: string,\n  topK: number = 10\n): Promise<HybridContext> {\n  // 1. Fetch company profile\n  const company = await prisma.company.findUnique({\n    where: { id: companyId },\n    select: { companyProfile: true },\n  });\n\n  // 2. Fetch FAQs with embeddings\n  const faqs = await prisma.fAQ.findMany({\n    where: { companyId },\n    select: { question: true, answer: true, embedding: true },\n  });\n\n  // 3. Embed user query\n  const queryVec = await embedQueryText(query);\n\n  // 4. Calculate cosine similarity\n  const scoredFAQs = faqs\n    .map((faq) => {\n      if (!Array.isArray(faq.embedding)) return null;\n      const score = cosineSimilarity(queryVec, faq.embedding);\n      return { question: faq.question, answer: faq.answer, score };\n    })\n    .filter((item): item is NonNullable<typeof item> => item !== null)\n    .sort((a, b) => b.score - a.score)\n    .slice(0, topK);\n\n  return {\n    companyProfile: company?.companyProfile,\n    topFAQs: scoredFAQs,\n  };\n}"
    },
    "challenges": [
      {
        "problem": "Excessive Gemini API quota consumption during FAQ uploads",
        "debugging": "Each FAQ upload triggered a separate company profile regeneration, resulting in 40 API calls for 40 FAQs",
        "solution": "Implemented bulk upload endpoint that processes all FAQs in a single transaction and triggers company profile regeneration only once"
      },
      {
        "problem": "Duplicate session creation between chat and dashboard views",
        "debugging": "Both /chat and /dashboard/conversations/:id were creating new sessions, causing data inconsistency",
        "solution": "Refactored conversation detail page to use read-only data fetching without session creation, clarifying responsibilities between interactive and read-only views"
      },
      {
        "problem": "Premature summary fetching for new or empty sessions",
        "debugging": "Application attempted to fetch summaries for sessions with no messages, causing 404 errors",
        "solution": "Added conditional checks to only fetch summaries when messages exist in the session"
      },
      {
        "problem": "Complex frontend routing with multiple dashboard views",
        "debugging": "Managing nested routes and parameter passing between dashboard components was error-prone",
        "solution": "Implemented TanStack Router with file-based routing and proper route hierarchy for maintainable navigation"
      },
      {
        "problem": "Inconsistent confidence tracking across conversation turns",
        "debugging": "Confidence scores fluctuated wildly without proper smoothing, leading to premature escalations",
        "solution": "Implemented Exponential Moving Average (EMA) smoothing with sigmoid compression and multi-threshold classification"
      }
    ],
    "experience": {
      "approach": "Orion embraces a modular, service-oriented architecture where each intelligent subsystem (context retrieval, LLM generation, confidence tracking) is implemented as independent modules. This separation of concerns enables easier testing, maintenance, and future enhancements. The system prioritizes transparency by attaching structured metadata to every response, enabling explainable AI interactions.",
      "futureEnhancements": "Planned improvements include vector database migration for sub-second semantic search at scale, analytics dashboard for confidence trends and FAQ performance, agent queueing for human takeover assignment, and multilingual support for translated FAQs and localized context retrieval. Additional features like conversation summarization improvements and advanced escalation patterns are also in the roadmap.",
      "prosAndCons": {
        "pros": [
          "Context-aware responses through hybrid retrieval combining semantic matching and company profiles",
          "Structured LLM outputs enable consistent frontend rendering and explainable responses",
          "Adaptive confidence tracking prevents poor user experiences through intelligent escalation",
          "Optimized API usage with bulk operations reducing costs by 97%",
          "Modern tech stack with TypeScript, React 19, and Vite for excellent developer experience",
          "Multi-tenant architecture supports multiple companies with isolated knowledge bases"
        ],
        "cons": [
          "Dependency on external LLM APIs introduces latency and cost considerations",
          "Complexity of confidence tracking system requires careful threshold tuning",
          "Current implementation requires manual FAQ curation for knowledge base creation",
          "Limited offline functionality without external API connectivity",
          "Database schema changes require careful migration planning in multi-tenant environment",
          "Real-time conversation features require persistent connection management"
        ]
      }
    },
    "links": {
      "github": "https://github.com/atharvwasthere/Orion",
      "docs": "https://github.com/atharvwasthere/Orion#readme",
      "releases": "https://github.com/atharvwasthere/Orion/releases"
    }
  }
}
