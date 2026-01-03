import { Project } from "@/types/project";

export const allProjects: Project[] = [
  {
    id: "0",
    title: "Secure API Handler",
    description:
      "A production-ready Node.js framework that eliminates 90% of repetitive backend code through sophisticated TypeScript generics and declarative configuration. Useful for building secure, multi-tenant systems with built-in authentication, authorization, caching, and observability.",
    imageUrl:
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1766083668/Gemini_Generated_Image_twjstttwjstttwjs_1_mbavub.png",
    imageAlt: "Secure API Handler architecture diagram showing security layers",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "Redis",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Zod",
      "ESLint Security",
      "SonarQube",
    ],
    category: "Backend Framework / Developer Tooling",
    liveDemoUrl: "",
    githubUrl: "https://github.com/RkayG/secure-api-request-handler",
    slug: "secureapihandler",
    galleryImages: [
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765108244/api-handler-1_fcjhjh.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765108243/api-handler-3_pxtqwu.png",
    ],
    overview:
      "I designed and built a comprehensive API framework that transforms how teams build secure backend systems. Instead of writing hundreds of lines of boilerplate for authentication, validation, error handling, and authorization in every endpoint, developers write pure business logic in a declarative configuration. The framework handles everything else through advanced TypeScript generics that guarantee type safety from HTTP request → database → response. What makes it special? The ownership verification system that makes authorization bugs architecturally impossible—you can't forget to check if a user owns a resource because the framework does it automatically based on your configuration.",
    keyFeatures: [
      {
        title: "Zero-Boilerplate Development",
        description: "Write 5-10 lines instead of 50-100. A single declarative configuration gives you authentication, Zod validation, error handling, multi-tenancy, and consistent API responses automatically.",
      },
      {
        title: "Architectural Security",
        description: "Built-in ownership verification prevents 90% of authorization bugs. Declare which resources users must own, and the framework validates it before your handler even runs—no more forgotten authorization checks.",
      },
      {
        title: "End-to-End Type Safety",
        description: "Sophisticated TypeScript generics propagate types from validation schemas through database queries to API responses, catching bugs at compile time rather than runtime.",
      },
      {
        title: "Production-Ready Infrastructure",
        description: "Built-in Redis caching, distributed rate limiting, API versioning, health checks, monitoring, and encryption make it ready for enterprise deployment from day one.",
      },
      {
        title: "Multi-Tenant by Design",
        description: "Automatic tenant isolation prevents cross-tenant data leakage. Every database query is automatically scoped to the correct business context without manual WHERE clauses.",
      },
    ],
    technicalHighlights: [
      "Created a higher-order function pattern using TypeScript generics that injects validated input, authenticated user, tenant context, and database client into handlers",
      "Implemented automatic ownership verification system using Prisma query interception and declarative configuration",
      "Built a caching layer with Redis and in-memory fallback that automatically invalidates based on database mutations",
      "Designed a comprehensive error pipeline that transforms validation errors, Prisma errors, and auth failures into consistent, type-safe API responses",
      "Implemented distributed rate limiting using Redis with configurable windows and request limits per endpoint",
      "Created a plugin architecture for authentication strategies (JWT, API keys, OAuth) and multi-tenancy modes (shared schema, separate databases)",
      "Integrated security tooling including ESLint security plugins, dependency vulnerability scanning, and automated audit workflows",
    ],
    architecture: {
      designPatterns: ["Higher-Order Functions", "Middleware Pipeline", "Strategy Pattern", "Factory Pattern", "Singleton Services"],
      keyComponents: [
        "Handler Factory with TypeScript Generics",
        "Ownership Verification Engine",
        "Multi-Tenant Context Manager",
        "Caching Layer with Smart Invalidation",
        "Error Transformation Pipeline",
        "Security Middleware Stack",
      ],
      scalabilityFeatures: [
        "Horizontal scaling support via Redis-based rate limiting and caching",
        "Database connection pooling and query optimization",
        "Stateless authentication enabling containerized deployment",
        "Feature flags for gradual rollout and experimentation",
      ],
    },
    challenges: [
      "Creating a delightful developer experience where you write pure business logic and nothing else. The solution: a higher-order function with TypeScript generics that automatically injects validated input, authenticated user, businessId, and Prisma client into every handler.",
      "Building declarative ownership verification that developers can't forget to use. The requireOwnership config lets you specify table, resourceId, and field—the framework automatically checks ownership before your handler runs. This prevents 90% of authorization bugs through architecture, not discipline.",
      "Implementing multi-tenant architecture where every handler automatically gets the correct businessId in context. Database queries are automatically scoped to the right tenant without manual checks. The challenge: sophisticated context management that prevents cross-tenant data leakage through design.",
      "Ensuring every endpoint returns the same structure: { success: true/false, data: {...}, error: {...} }. Built a comprehensive error pipeline that catches everything (Zod errors, Prisma errors, auth failures) and transforms them into consistent, type-safe responses.",
    ],
    results: [
      "**70% reduction** in endpoint code: Write only business logic instead of repetitive boilerplate",
      "**90% fewer authorization bugs**: Architectural enforcement of ownership checks eliminated entire categories of security vulnerabilities",
      "**Consistent API contracts**: Predictable response structure across all endpoints",
      "**Developer satisfaction**: Lets Engineers focus on what matters'",
    ],
    codeSamples: [
      {
        title: "Complete CRUD Endpoint with Authentication & Ownership",
        description: "What would normally be 50+ lines of validation, auth checks, and error handling is now a clean 15-line handler",
        code: "router.put('/projects/:id', createAuthenticatedHandler({\n  schema: z.object({ name: z.string().min(1).max(200) }),\n  requireOwnership: {\n    model: 'Project',\n    resourceIdParam: 'id',\n    ownerIdField: 'ownerId'\n  },\n  handler: async ({ input, prisma, params }) => {\n    return await prisma.project.update({\n      where: { id: params.id },\n      data: input,\n      select: { id: true, name: true, updatedAt: true }\n    });\n  }\n}));",
      },
      {
        title: "Advanced Handler with Caching & Rate Limiting",
        description: "Enterprise features like caching and rate limiting are declarative configuration, not complex implementations",
        code: "router.get('/products', createHandler({\n  schema: z.object({ category: z.string().optional() }),\n  cache: { ttl: 300, keyGenerator: (req) => `products:${req.query.category}` },\n  rateLimit: { windowMs: 60000, maxRequests: 100 },\n  handler: async ({ input, prisma }) => {\n    return prisma.product.findMany({\n      where: input.category ? { category: input.category } : {},\n      orderBy: { createdAt: 'desc' }\n    });\n  }\n}));",
      },
    ],
    role: "Architect & Developer",
    roleDescription:
      "Designed and developed the entire framework architecture.",
  },
  {
    id: "1",
    title: "Cxperia",
    description:
      "A B2B2C SaaS digital experience platform enabling beauty and cosmetic brands to create immersive, interactive product experiences through QR codes, tutorials, and analytics.",
    imageUrl:
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683566/cxr_lt6u5x.png",
    imageAlt: "Cxperia digital experience platform dashboard",
    technologies: [
      "Next.js 15",
      "TypeScript",
      'Python',
      'FastAPI',
      'Redis',
      'SecureAPIHandler',
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "React",
      "Zustand",
      'Zod',
    ],
    category: "Web App",
    liveDemoUrl: "",
    githubUrl: "",
    slug: "cxperia",
    galleryImages: [
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683566/cxr_lt6u5x.png",
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683629/Screenshot_179_oai2zn.png',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683564/cxr2_talvfk.png',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683561/cxr4_ymdgmp.png',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683562/cxr3_zkqebv.png',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683560/cxr5_scv8dz.png',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683561/cxr7_bdfjcl.png',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683625/Screenshot_185_nhaqfl.png',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683621/Screenshot_187_lcksos.png',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683619/Screenshot_188_d83kly.png',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683617/Screenshot_193_bdgmki.png',

    ],
    overview:
      "Cxperia is a comprehensive digital experience platform that enables beauty and cosmetic brands to create immersive, interactive product experiences. The platform allows brands to generate QR codes for their products, create step-by-step tutorials and routines, and collect valuable customer feedback and analytics. Built with a mobile-first approach, Cxperia provides brands with tools to enhance customer engagement, improve product education, and build stronger brand-customer relationships through digital experiences.",
    role: "Founding Lead Developer",
    roleDescription:
      "Solely developed and launched the Cxperia platform, designing and implementing the entire platform architecture with a focus on modularity, extensibility, and scalable infrastructure.",
  },
  {
    id: "2",
    title: "OnRoute",
    description:
      "A high-performance taxi dispatch and delivery system built for efficiency, security, and precision. Designed with robust admin oversight, driver mobility, and scalable backend architecture.",
    imageUrl:
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1764955866/Screenshot_24_qbxxft.png",
    imageAlt: "OnRoute taxi dispatch system showing mobile app and admin dashboard",
    technologies: [
      "React Native",
      "Vite",
      "Node.js",
      "WebSocket",
      "PostgreSQL",
      "Cloudinary",
      "Mapbox",
      "Express",
    ],
    category: "Mobile App",
    liveDemoUrl: "",
    githubUrl: "",
    slug: "onroute",
    galleryImages: [
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1764955866/Screenshot_24_qbxxft.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1764955865/Screenshot_23_ap4u4u.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1764955865/Screenshot_21_ujtifh.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765653578/WhatsApp_Image_2025-12-11_at_14.39.51_b8367cfe_mhqsqp.jpg",
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765653578/WhatsApp_Image_2025-12-11_at_14.39.51_884845ff_gp0p9b.jpg',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765653578/WhatsApp_Image_2025-12-11_at_14.39.51_bdf59ddb_dccmbl.jpg',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765653578/WhatsApp_Image_2025-12-11_at_14.39.52_540a4fc5_zim8lz.jpg',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765653578/WhatsApp_Image_2025-12-11_at_14.42.17_55931e93_bmgqwo.jpg',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765653577/WhatsApp_Image_2025-12-11_at_14.42.18_56861322_a8m9i7.jpg',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765653577/WhatsApp_Image_2025-12-11_at_14.42.19_83fab0aa_zd0ukk.jpg',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765653577/WhatsApp_Image_2025-12-11_at_14.42.19_1eda7273_sxwjzz.jpg',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765653577/WhatsApp_Image_2025-12-11_at_14.42.18_7fe6fcc1_szd754.jpg',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765653577/WhatsApp_Image_2025-12-11_at_14.42.19_7585e39d_nqfhbc.jpg',
      'https://res.cloudinary.com/dxbbl7nve/image/upload/v1765653577/WhatsApp_Image_2025-12-11_at_14.39.52_43863e2f_nayz38.jpg',
    ],
    videoUrl: "",
    overview:
      "OnRoute is a comprehensive taxi dispatch and delivery system designed for real-time job allocation and driver compliance across the UK. The platform consists of a mobile React Native app for drivers and a powerful admin dashboard for oversight. The system streamlines the entire workflow from driver registration and document verification to real-time job bidding, GPS-based location validation, and comprehensive analytics. Built with scalability and security in mind, OnRoute handles high-volume operations while maintaining strict access controls and geo-restrictions.",
    challenges: [
      "Implementing real-time job allocation with WebSocket connections required building a robust pub/sub system that could handle concurrent driver connections while ensuring fair job distribution and preventing race conditions. The solution involved implementing priority queues, connection pooling, and efficient message broadcasting to all relevant drivers.",
      "Building GPS-based location validation to ensure drivers are physically present at pickup points before job initiation. This required integrating Mapbox for accurate geocoding.",
      "Creating a secure document upload and verification pipeline using Cloudinary while maintaining data privacy and compliance. The challenge was implementing proper file validation, virus scanning, and secure storage.",
      "Designing a comprehensive analytics system that could aggregate real-time metrics (average fare, delivery volume, job history) while maintaining query performance. This required implementing efficient database indexing, materialized views for complex aggregations, and caching strategies for frequently accessed dashboard data.",
    ],
    results:
      "The real-time dispatch system reduced average job allocation time by 40% compared to traditional methods. The GPS validation system achieved 98% accuracy in preventing fraudulent job starts, significantly improving service reliability. The admin dashboard provides comprehensive insights that enabled data-driven decision making, leading to a 25% increase in driver efficiency. The platform demonstrates expertise in real-time systems, mobile development, geolocation services, and enterprise-grade security implementation.",
    role: "Full-Stack Developer & System Architect",
    roleDescription:
      "Designed and developed the complete OnRoute platform including mobile app, admin dashboard, real-time WebSocket infrastructure, GPS validation system, and analytics engine.",
  },

  {
    id: "3",
    title: "SmartMention",
    description:
      "A social listening and signal tracking tool designed to help brands monitor online conversations in real time. Analyzes sentiment, impact, and confidence levels across thousands of platforms.",
    imageUrl:
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126610/Screenshot_26_bzyjmb.png",
    imageAlt: "SmartMention social listening dashboard showing analytics and signal tracking",
    technologies: [
      "Python",
      "Node.js",
      "React",
      "PostgreSQL",
      "Redis",
      "Web Scraping",
      "Sentiment Analysis",
      "Real-time Processing",
    ],
    category: "Web App",
    liveDemoUrl: "https://smartmention.com",
    githubUrl: "https://github.com/RkayG/brandtrack",
    slug: "smartmention",
    galleryImages: [
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126610/Screenshot_26_bzyjmb.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126602/Screenshot_27_m1kiyg.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126599/Screenshot_28_tpqus6.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126594/Screenshot_29_djm3dp.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126593/Screenshot_30_xttcas.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126592/Screenshot_35_xojffv.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126592/Screenshot_36_zffg2r.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126592/Screenshot_31_xgrqs2.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126591/Screenshot_32_v3abhh.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126590/Screenshot_34_i0npfd.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765126590/Screenshot_33_aoxhgb.png",
    ],
    overview:
      "SmartMention is a comprehensive social listening and signal tracking platform that enables brands to monitor online conversations in real-time across thousands of platforms. The system tracks public mentions tied to custom keywords and hashtags, filtering by sentiment, confidence score, and impact rating. Projects can be segmented to target specific campaigns or topics, providing brands with actionable insights into their online presence, emerging trends, potential crises, and lead opportunities.",
    challenges: [
      "Building a scalable crawler engine capable of monitoring thousands of platforms simultaneously while maintaining real-time performance. The solution required implementing efficient web scraping techniques, rate limiting, and distributed processing to handle high-volume data ingestion without overwhelming target platforms.",
      "Implementing intelligent keyword monitoring that tracks mentions, filters them into topics, and extracts valuable signals including leads, crises, trends, and anomalies. This required integrating Gemini Flash 2.0 to categorize and prioritize signals effectively.",
      "Creating a sentiment analysis system that accurately determines the emotional tone and impact of mentions. I benchmarked multiple solutions: **Vader** (fast but struggled with sarcasm/nuance, ~60-70% accuracy), **Hugging Face models** (accurate but too slow for real-time processing, >5mins/100 mentions), and **Gemini Flash**. I settled on **Gemini Flash 2.0** which offered ~87% accuracy with sub-second latency, using Vader only as a high-speed fallback for simple cases.",
      "Designing a scheduler system that manages monitoring tasks, data collection intervals, and alert triggers while ensuring system reliability and preventing data loss. This required implementing fault-tolerant job queues and state management across distributed systems.",
    ],
    results:
      "The crawler engine demonstrates high reliability and scalability, handling peak loads without degradation. The sentiment analysis system achieves strong accuracy in identifying positive, negative, and neutral signals, enabling brands to respond proactively to emerging trends and potential crises. The platform's analytics dashboard has become an essential tool for brand monitoring, helping clients identify opportunities, manage reputation, and track campaign performance across diverse online platforms.",
    role: "Backend Engineer & Crawler Architect",
    roleDescription:
      "Built the crawler engine and keyword monitoring system that tracks mentions, filters into topics, extracts leads, crises, trends, and anomalies. Implemented sentiment analysis and scheduler systems. Assisted the team in building the frontend analytics dashboard.",
  },

  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects, skills, and experience. Built with Next.js 16, featuring a clean design, interactive project gallery, and a co-founder wizard for potential partnerships.",
    imageUrl:
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1767440669/574_1x_shots_so_xidj6o.png",
    imageAlt: "Portfolio website showing modern design with project showcase and navigation",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "App Router",
      "Static Site Generation",
    ],
    category: "Web App",
    liveDemoUrl: "https://rufus-gladness.vercel.app",
    githubUrl: "https://github.com/RkayG/portfolio-new",
    slug: "portfolio-website",
    galleryImages: [
        "https://res.cloudinary.com/dxbbl7nve/image/upload/v1767440669/574_1x_shots_so_xidj6o.png",
      ],
      overview:
      "A modern, responsive portfolio website designed and developed to showcase professional work, skills, and experience. The site features a clean, intuitive design with smooth navigation, an interactive project gallery with detailed project pages, an about section highlighting background and expertise, and an innovative co-founder wizard that allows potential partners to submit detailed partnership inquiries through a multi-step form. Built with Next.js 16 using the App Router for optimal performance, TypeScript for type safety, and Tailwind CSS for modern, responsive styling. The site uses static site generation for fast loading times and easy deployment, with a component-based architecture for maintainability and scalability.",
    role: "Designer & Developer",
    roleDescription:
      "Designed and developed the complete portfolio website including UI/UX design, project showcase system, co-founder wizard, and all interactive features.",
  },
  /*  {
     id: "5",
     title: "Solana Liquidation Bot",
     description:
       "A Solana liquidation bot with flash loan integration, supporting Solend, MarginFi, and Kamino lending protocols with zero-capital operation.",
     imageUrl:
       "https://lh3.googleusercontent.com/aida-public/AB6AXuDNRyX4RMuo6NZb023axJ_9QdCXm3nbJ4YIl7tnh3jeFnwZNWbpdSLOXwViIn0dTfaRr13z-mJ8V5O8aiqsrXpPbcoxhSVIWV7N7E_jAwKF1_-ptUdajYI4Fcy9Yod9GanyQB6uHTcauyYsRM0aGegLB1GYrkWES3ZM9M2jW2cgMMcA8uGhAj0XuwrYnjZh4eO7kp2whWGZ3AmGQzHe1juuLFUUU8KElDMW0S_a8DohtaaMk0LAR8rrdg0tA2TpV1EGbfXQJmMTVYw",
     imageAlt: "Solana liquidation bot architecture showing protocol integrations",
     technologies: ["Rust", "Solana", "Anchor", "Flash Loans", "Solend", "MarginFi", "Kamino"],
     category: "Blockchain",
     liveDemoUrl: "",
     githubUrl: "https://github.com/RkayG/liquidation-bot",
     slug: "solana-liquidation-bot",
     galleryImages: [
       "https://lh3.googleusercontent.com/aida-public/AB6AXuDNRyX4RMuo6NZb023axJ_9QdCXm3nbJ4YIl7tnh3jeFnwZNWbpdSLOXwViIn0dTfaRr13z-mJ8V5O8aiqsrXpPbcoxhSVIWV7N7E_jAwKF1_-ptUdajYI4Fcy9Yod9GanyQB6uHTcauyYsRM0aGegLB1GYrkWES3ZM9M2jW2cgMMcA8uGhAj0XuwrYnjZh4eO7kp2whWGZ3AmGQzHe1juuLFUUU8KElDMW0S_a8DohtaaMk0LAR8rrdg0tA2TpV1EGbfXQJmMTVYw",
     ],
     overview:
       "A Solana liquidation bot designed for zero-capital operation using flash loans. The bot monitors multiple lending protocols (Solend, MarginFi, Kamino) simultaneously, identifying liquidation opportunities and executing profitable trades within Solana's 400ms block times. Built with Rust for maximum performance, the system includes comprehensive risk management, transaction simulation, and real-time monitoring to ensure safe and profitable operations in a highly competitive environment.",
     challenges: [
       "Optimizing for Solana's 400ms block times required building an ultra-fast monitoring and execution system. The solution involved implementing efficient on-chain data parsing, priority queues for opportunity ranking, and parallel protocol monitoring to detect and act on opportunities fast.",
       "Implementing flash loan integration across multiple protocols (Solend, MarginFi, Kamino) with different interfaces and requirements. This required creating a unified abstraction layer that handles protocol-specific differences while maintaining type safety and ensuring atomic transaction execution.",
       "Designing comprehensive risk management systems including daily loss limits, circuit breakers, and position size controls. This required implementing stateful tracking across bot restarts, configurable thresholds, and automatic shutdown mechanisms to protect capital.",
     ],
 
     role: "Blockchain Developer & Systems Architect",
     roleDescription:
       "Designed and implemented the complete liquidation bot architecture, including protocol integrations, flash loan handling, risk management systems, and real-time monitoring infrastructure.",
   }, */

  {
    id: "6",
    title: "AdFriend Extension",
    description:
      "A Chrome extension that transforms intrusive web advertisements into personalized movie recommendations, helping users discover their next favorite film while browsing.",
    imageUrl:
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765129109/adfriend-demo1_rnykwo.png",
    imageAlt: "AdFriend Chrome extension showing movie recommendations replacing ads",
    technologies: [
      "Chrome Extension",
      "React",
      "JavaScript",
      "TMDb API",
      "Chrome Storage API",
      "Content Scripts",
      "Manifest V3",
    ],
    category: "Web App",
    liveDemoUrl: "https://screenrec.com/share/XRNehEHpSc",
    githubUrl: "https://github.com/RkayG/ad-friend",
    slug: "adfriend-extension",
    galleryImages: [
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765129109/adfriend-demo1_rnykwo.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765129101/ad-replace-demo2_fndblq.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765129109/movie-card-features_cup9k7.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765129543/movie-card-trailer_ob2c1h.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765129097/popup_jdvo0c.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765129344/trailer_lz2zrr.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765129347/watchlist_12_s6hqrj.png",
    ],
    overview:
      "AdFriend is an innovative Chrome extension that reimagines the web browsing experience by replacing intrusive advertisements with personalized movie recommendations. Instead of being distracted by ads, users discover their next favorite movie while browsing their favorite websites. The extension intelligently detects ad containers across the web and seamlessly replaces them with interactive movie cards featuring trailers, reviews, ratings, and watchlist management. Built with React and integrated with TMDb API, AdFriend provides a privacy-focused, user-friendly alternative to traditional advertising.",
    challenges: [
      "Implementing real-time ad detection across diverse website structures required developing a robust content script that could identify various ad container patterns without breaking page layouts. The solution involved creating flexible CSS selectors and DOM mutation observers that adapt to different ad formats while maintaining page functionality.",
      "Building seamless integration with TMDb API while handling rate limits and ensuring fast response times. This required implementing intelligent caching strategies, request batching, and fallback mechanisms to provide smooth user experience even during API delays or failures.",
      "Designing memory-efficient content scripts that don't impact page performance. The challenge was creating a lightweight injection system that replaces ads without causing layout shifts or consuming excessive browser resources, requiring careful optimization of DOM manipulation and event handling.",
      "Creating a responsive movie card interface that adapts to various ad container sizes while maintaining visual appeal. This required developing flexible CSS layouts and responsive design patterns that work across different website layouts and screen sizes.",
    ],
    results:
      "AdFriend successfully transforms the browsing experience by replacing ads with engaging movie content, providing users with a more enjoyable and productive web experience. The extension demonstrates seamless integration with web pages, maintaining site functionality while offering valuable entertainment recommendations. Users can discover new movies, watch trailers, read reviews, and manage watchlists directly from their browsing experience. The privacy-focused approach with local storage and no tracking ensures user trust, while the intuitive interface makes movie discovery effortless. The project showcases expertise in Chrome extension development, API integration, and user experience design.",
    role: "Full-Stack Developer & Extension Architect",
    roleDescription:
      "Designed and developed the complete Chrome extension including ad detection algorithms, TMDb API integration, interactive movie cards, popup interface, and watchlist management system with Chrome Storage Sync.",
  },
  {
    id: "7",
    title: "OH Health+ Pharmacy Website",
    description:
      "A modern, ultra-sleek pharmacy website built with Next.js, TypeScript, and Tailwind CSS. This static site showcases all pharmacy services and enables online booking.",
    imageUrl:
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765188321/oh-pharma-website_bdwep4.png",
    imageAlt: "OH Health + Pharmacy website showing modern design with glassmorphism effects",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "React Icons",
      "App Router",
      "Static Site Generation",
    ],
    category: "Web App",
    liveDemoUrl: "https://oh-pharmacy-m5xo.vercel.app/",
    githubUrl: "https://github.com/RkayG/oh-pharmacy",
    slug: "oh-health-pharmacy",
    galleryImages: [
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765188321/oh-pharma-website_bdwep4.png",
    ],
    overview:
      "A modern, ultra-sleek pharmacy website built with Next.js, TypeScript, and Tailwind CSS. This static site showcases all pharmacy services and enables online booking. The website features an ultra-modern UI with glassmorphism effects and smooth animations, fully responsive design optimized for all devices, 70+ service pages covering all pharmacy services, service filtering and search functionality, online booking integration with external booking platforms, component-based architecture for easy maintenance, and static site generation for fast loading and easy deployment.",
    role: "Designer & Developer",
    roleDescription:
      "Designed and developed the OH Health+ Pharmacy website with a focus on modern UI/UX, responsive design, and optimal performance using Next.js static site generation.",
  },
  {
    id: "8",
    title: "Web3Fruity",
    description:
      "A comprehensive web3 income discovery platform that curates airdrops, token farming opportunities, reward-for-task platforms, crypto news, and tier-based web3 education. Helping users discover and participate in the latest earning opportunities in the decentralized ecosystem.",
    imageUrl:
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1766085601/Giy-I4DWgAACM1m_l8y0nx.jpg",
    imageAlt: "Web3Fruity web3 income discovery platform showing airdrops, games, and crypto news",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Contentful CMS",
      "RESTful API",
      "Blockchain Integration",
    ],
    category: "Web App",
    liveDemoUrl: "https://web3fruity.com",
    githubUrl: "",
    slug: "web3fruity",
    galleryImages: [
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1766085601/Giy-I4DWgAACM1m_l8y0nx.jpg",
    ],
    overview:
      "Web3Fruity is a comprehensive web3 income discovery platform designed to help users navigate the decentralized economy. The platform curates the latest earning opportunities including airdrops, play-to-earn games, reward-for-task platforms, token farming opportunities, and cryptocurrency news. Built with a modern tech stack integrated with Contentful CMS, Web3Fruity provides users with curated, up-to-date information, detailed token analytics, and tier-based educational content to help them safely participate in the web3 ecosystem. The platform leverages Contentful's headless CMS architecture for flexible content management, allowing for easy updates and curation of opportunities without code changes, while maintaining a RESTful API backend for seamless data delivery.",
    challenges: [
      "Integrating Contentful CMS as a headless content management system to enable enable curating and updating web3 opportunities (airdrops, games, tasks, news) without requiring code deployments. The solution required designing flexible content models, implementing efficient Contentful API integration, and building a robust data synchronization layer between the CMS and the frontend application.",
      "Implementing a tier-based education system that scales from beginner to advanced web3 concepts using Contentful's content modeling capabilities. The challenge was structuring educational content in the CMS that builds progressively while remaining engaging and actionable, requiring careful content architecture and flexible content relationships within Contentful.",
    ],

    role: "Full-Stack Developer & Platform Architect",
    roleDescription:
      "Designed and developed the complete Web3Fruity platform including frontend interface, RESTful API backend, and Contentful CMS integration. Architected the headless CMS content models for airdrops, games, reward tasks, token farms, and crypto news, enabling efficient content management. Built the API layer that synchronizes Contentful content with the frontend application and implemented the tier-based education content architecture within the CMS.",
  },
];

