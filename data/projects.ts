import { Project } from "@/types/project";

export const allProjects: Project[] = [
  {
    id: "0",
    title: "Cxperia",
    description:
      "A B2B2C SaaS digital experience platform enabling beauty and cosmetic brands to create immersive, interactive product experiences through QR codes, tutorials, and analytics.",
    imageUrl:
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765683566/cxr_lt6u5x.png",
    imageAlt: "Cxperia digital experience platform dashboard",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "React",
      "Zustand",
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
    id: "1",
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
      "Implementing real-time job allocation with WebSocket connections required building a robust pub/sub system that could handle thousands of concurrent driver connections while ensuring fair job distribution and preventing race conditions. The solution involved implementing priority queues, connection pooling, and efficient message broadcasting to all relevant drivers.",
      "Building GPS-based location validation to ensure drivers are physically present at pickup points before job initiation. This required integrating Mapbox for accurate geocoding, implementing geofencing algorithms, and handling edge cases like GPS accuracy variations and network latency in real-time validation.",
      "Creating a secure document upload and verification pipeline using Cloudinary while maintaining data privacy and compliance. The challenge was implementing proper file validation, virus scanning, secure storage, and automated document processing workflows that could scale with driver registrations.",
      "Designing a comprehensive analytics system that could aggregate real-time metrics (average fare, delivery volume, job history) while maintaining query performance. This required implementing efficient database indexing, materialized views for complex aggregations, and caching strategies for frequently accessed dashboard data.",
    ],
    results:
      "OnRoute successfully launched and processes thousands of jobs daily across the UK. The real-time dispatch system reduced average job allocation time by 40% compared to traditional methods. The GPS validation system achieved 98% accuracy in preventing fraudulent job starts, significantly improving service reliability. The admin dashboard provides comprehensive insights that enabled data-driven decision making, leading to a 25% increase in driver efficiency. The platform demonstrates expertise in real-time systems, mobile development, geolocation services, and enterprise-grade security implementation.",
    role: "Full-Stack Developer & System Architect",
    roleDescription:
      "Designed and developed the complete OnRoute platform including mobile app, admin dashboard, real-time WebSocket infrastructure, GPS validation system, and analytics engine.",
  },
  
  {
    id: "2",
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
      "Implementing intelligent keyword monitoring that tracks mentions, filters them into topics, and extracts valuable signals including leads, crises, trends, and anomalies. This required developing sophisticated natural language processing pipelines and pattern recognition algorithms to categorize and prioritize signals effectively.",
      "Creating a sentiment analysis system that accurately determines the emotional tone and impact of mentions across diverse content types and languages. The challenge was building a robust model that could handle context, sarcasm, and cultural nuances while providing actionable confidence scores.",
      "Designing a scheduler system that manages monitoring tasks, data collection intervals, and alert triggers while ensuring system reliability and preventing data loss. This required implementing fault-tolerant job queues and state management across distributed systems.",
    ],
    results:
      "SmartMention successfully processes millions of mentions daily, providing brands with real-time insights into their online presence. The crawler engine demonstrates high reliability and scalability, handling peak loads without degradation. The sentiment analysis system achieves strong accuracy in identifying positive, negative, and neutral signals, enabling brands to respond proactively to emerging trends and potential crises. The platform's analytics dashboard has become an essential tool for brand monitoring, helping clients identify opportunities, manage reputation, and track campaign performance across diverse online platforms.",
    role: "Backend Engineer & Crawler Architect",
    roleDescription:
      "Built the crawler engine and keyword monitoring system that tracks mentions, filters into topics, extracts leads, crises, trends, and anomalies. Implemented sentiment analysis and scheduler systems. Assisted the team in building the frontend analytics dashboard.",
  },
  {
    id: "3",
    title: "Secure API Handler",
    description:
      "An enterprise-grade API handler framework for Node.js + Express + Prisma with authentication, security, multi-tenancy, caching, and observability.",
    imageUrl:
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765108924/Gemini_Generated_Image_r66ad3r66ad3r66a_hir2su.png",
    imageAlt: "Secure API Handler architecture diagram showing security layers",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "Redis",
      "Docker",
      "PostgreSQL",
      "JWT",
      "Zod",
    ],
    category: "Web App",
    liveDemoUrl: "",
    githubUrl: "https://github.com/RkayG/secure-api-request-handler",
    slug: "secure-api-handler",
    galleryImages: [
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765108244/api-handler-1_fcjhjh.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765108243/api-handler-3_pxtqwu.png",
    ],
    overview:
      "A comprehensive, production-ready API handler framework designed to accelerate secure backend development. This enterprise-grade template provides a robust foundation for building scalable, multi-tenant applications with built-in security best practices, performance optimizations, and observability features. The framework abstracts away common concerns like authentication, input validation, rate limiting, caching, and monitoring, allowing developers to focus on business logic while maintaining industry-standard security and performance.",
    challenges: [
      "Designing a flexible authentication system that supports multiple strategies (JWT, API Keys, OAuth) while maintaining type safety and developer ergonomics. The solution required a strategy pattern implementation with a unified interface that could be easily extended without breaking existing code.",
      "Implementing secure multi-tenant architecture with support for different isolation strategies (shared schema, separate schema, separate database) while ensuring data isolation and preventing tenant data leakage. This required careful design of context management and database query scoping.",
      "Creating a performant caching layer that works across distributed systems using Redis, with intelligent cache invalidation strategies and fallback to in-memory caching. The challenge was balancing cache hit rates with data freshness and handling cache stampede scenarios.",
      "Building comprehensive input sanitization and validation that prevents XSS, SQL injection, and CSRF attacks while maintaining developer productivity. This required integrating multiple security libraries (DOMPurify, Zod) and creating a unified sanitization pipeline.",
    ],
    results:
      "The framework has been successfully used as a foundation for multiple production applications, significantly reducing development time while ensuring security and performance standards. It provides a complete solution for building secure APIs with features like distributed rate limiting, automatic request validation, multi-tenant support, and comprehensive monitoring. The template demonstrates expertise in enterprise-level architecture, security best practices, and developer experience optimization.",
    role: "Full-Stack Developer & Framework Architect",
    roleDescription:
      "Designed and implemented the complete framework architecture, including security layers, multi-tenant support, caching strategies, and developer tooling.",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects, skills, and experience. Built with Next.js 16, featuring a clean design, interactive project gallery, and a co-founder wizard for potential partnerships.",
    imageUrl:
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765189057/portfolio_website_xdpsmy.png",
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
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1765189057/portfolio_website_xdpsmy.png",
    ],
    overview:
      "A modern, responsive portfolio website designed and developed to showcase professional work, skills, and experience. The site features a clean, intuitive design with smooth navigation, an interactive project gallery with detailed project pages, an about section highlighting background and expertise, and an innovative co-founder wizard that allows potential partners to submit detailed partnership inquiries through a multi-step form. Built with Next.js 16 using the App Router for optimal performance, TypeScript for type safety, and Tailwind CSS for modern, responsive styling. The site uses static site generation for fast loading times and easy deployment, with a component-based architecture for maintainability and scalability.",
    role: "Designer & Developer",
    roleDescription:
      "Designed and developed the complete portfolio website including UI/UX design, project showcase system, co-founder wizard, and all interactive features.",
  },
  {
    id: "5",
    title: "Solana Liquidation Bot",
    description:
      "A production-ready Solana liquidation bot with flash loan integration, supporting Solend, MarginFi, and Kamino lending protocols with zero-capital operation.",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGWzrzVyOaV-6GhREOmfJqRhlez0d2cjEMVMIBe2wXMWt_WyOjSy3jdsdzFxcmP5OVZ4jacODopsr5B_MnfGkaIaCK2BkMKyH2oJ-rH4C3zd8G_tyzk1cuKgmsaJfFu_4G_K6UKsyyW2KWLIPnC_zSQJ2F0QTpKgzPFUf_-zrFVqCqOgCW7Wqh0fzhfZOXCKGvfRrnSYkwYC9lmkMZB-t_VoMSVMX-Sh2Z49jsk3XsszmGnnLswMLojSgVuFvFN3FJRD-xTSe346g",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGYg8KRBfhnWex9PfaBYROuTTOHLZNTzi-CpYn-8_96YU5KNJQJ0ciiI7szujMheNX1vJctp2-WLDzE1ez0U4o29XybdWmyUUPWPwyifuV6iZxsEH4ztdqZ81_8M8jASx0sCyiuwKWF8jzqvHeTwt9d59eNeAfpWkO3QB02LKYjvjlJi-t_0n48YQh8gPVOK2sUYsgi5H-NlBkD_vA8d9foh3aBR54MJfCX7yhc1pDq-HwgYt99u2Ou6-qEp5_ryIKzcOTKgTVT6Q",
    ],
    overview:
      "A production-ready Solana liquidation bot designed for zero-capital operation using flash loans. The bot monitors multiple lending protocols (Solend, MarginFi, Kamino) simultaneously, identifying liquidation opportunities and executing profitable trades within Solana's 400ms block times. Built with Rust for maximum performance, the system includes comprehensive risk management, transaction simulation, and real-time monitoring to ensure safe and profitable operations in a highly competitive environment.",
    challenges: [
      "Optimizing for Solana's 400ms block times required building an ultra-fast monitoring and execution system. The solution involved implementing efficient on-chain data parsing, priority queues for opportunity ranking, and parallel protocol monitoring to detect and act on opportunities before competitors.",
      "Implementing flash loan integration across multiple protocols (Solend, MarginFi, Kamino) with different interfaces and requirements. This required creating a unified abstraction layer that handles protocol-specific differences while maintaining type safety and ensuring atomic transaction execution.",
      "Building a robust simulation engine that accurately predicts transaction outcomes before execution. The challenge was accounting for slippage, gas costs, and market movements between simulation and execution, requiring sophisticated profit calculation algorithms and safety margins.",
      "Designing comprehensive risk management systems including daily loss limits, circuit breakers, and position size controls. This required implementing stateful tracking across bot restarts, configurable thresholds, and automatic shutdown mechanisms to protect capital.",
    ],
    results:
      "The bot successfully operates in production with zero capital requirements, using flash loans exclusively for all operations. It demonstrates high reliability with comprehensive safety checks, achieving a 15-30% success rate on detected opportunities. The system processes 5-20 liquidations daily with average profits of $30-80 per execution, showcasing the effectiveness of the multi-protocol monitoring and fast execution architecture. The project demonstrates advanced Solana development skills, systems programming expertise in Rust, and deep understanding of DeFi protocols and financial risk management.",
    role: "Blockchain Developer & Systems Architect",
    roleDescription:
      "Designed and implemented the complete liquidation bot architecture, including protocol integrations, flash loan handling, risk management systems, and real-time monitoring infrastructure.",
  },

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
    title: "OH Health + Pharmacy Website",
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
];

