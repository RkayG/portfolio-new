import { Project } from "@/types/project";

export const allProjects: Project[] = [
  {
    id: "0",
    title: "Secure API Handler Template",
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
    liveDemoUrl: "https://github.com/RkayG/secure-api-request-handler",
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
    id: "1",
    title: "SmartMention",
    description:
      "An advanced social listening and signal tracking tool designed to help brands monitor online conversations in real time. Analyzes sentiment, impact, and confidence levels across thousands of platforms.",
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
    liveDemoUrl: "#",
    githubUrl: "#",
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
    liveDemoUrl: "#",
    githubUrl: "#",
    slug: "onroute",
    galleryImages: [
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1764955866/Screenshot_24_qbxxft.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1764955865/Screenshot_23_ap4u4u.png",
      "https://res.cloudinary.com/dxbbl7nve/image/upload/v1764955865/Screenshot_21_ujtifh.png",
    ],
    videoUrl: "https://res.cloudinary.com/dxbbl7nve/video/upload/v1764953641/OnRoute_Mobile_Admin_Demo_kbbv3g.mp4",
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
    id: "3",
    title: "Solana Liquidation Bot",
    description:
      "A production-ready Solana liquidation bot with flash loan integration, supporting Solend, MarginFi, and Kamino lending protocols with zero-capital operation.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNRyX4RMuo6NZb023axJ_9QdCXm3nbJ4YIl7tnh3jeFnwZNWbpdSLOXwViIn0dTfaRr13z-mJ8V5O8aiqsrXpPbcoxhSVIWV7N7E_jAwKF1_-ptUdajYI4Fcy9Yod9GanyQB6uHTcauyYsRM0aGegLB1GYrkWES3ZM9M2jW2cgMMcA8uGhAj0XuwrYnjZh4eO7kp2whWGZ3AmGQzHe1juuLFUUU8KElDMW0S_a8DohtaaMk0LAR8rrdg0tA2TpV1EGbfXQJmMTVYw",
    imageAlt: "Solana liquidation bot architecture showing protocol integrations",
    technologies: ["Rust", "Solana", "Anchor", "Flash Loans", "Solend", "MarginFi", "Kamino"],
    category: "Blockchain",
    liveDemoUrl: "#",
    githubUrl: "#",
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
    id: "4",
    title: "DeFi Trading Platform",
    description:
      "A decentralized finance platform for trading digital assets with real-time data.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNRyX4RMuo6NZb023axJ_9QdCXm3nbJ4YIl7tnh3jeFnwZNWbpdSLOXwViIn0dTfaRr13z-mJ8V5O8aiqsrXpPbcoxhSVIWV7N7E_jAwKF1_-ptUdajYI4Fcy9Yod9GanyQB6uHTcauyYsRM0aGegLB1GYrkWES3ZM9M2jW2cgMMcA8uGhAj0XuwrYnjZh4eO7kp2whWGZ3AmGQzHe1juuLFUUU8KElDMW0S_a8DohtaaMk0LAR8rrdg0tA2TpV1EGbfXQJmMTVYw",
    imageAlt: "Screenshot of a DeFi Trading Platform dashboard",
    technologies: ["React", "Solidity", "Web3.js"],
    category: "Blockchain",
    liveDemoUrl: "#",
    githubUrl: "#",
    slug: "defi-trading-platform",
  },
  {
    id: "5",
    title: "NFT Marketplace",
    description:
      "A full-stack marketplace for creating, buying, and selling unique NFTs on the Ethereum blockchain.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZRj2kfl4Kqf9MgOEiQnPCCTsifk7GFMfR-LH6rQG01g_CGCOrQ61l7o3oNJS2MA8_q6U85bymKVQ1L90YhzIJ1B_Is-85TVuaFa8kubi549O8ydtF4avD0ubf3byIFC_U5z8nn56Eu_8yTPLHywf8IlJ48Z_ByFRNnxwGXVdXnh9ZRQiViGmlwVlIdPNCdupU-m_DAzjhNF2c_wDxeSjeWsRfTHSPJBobnIUkmRMlMBXtDYEeycVwjfi_enzu41mhD3Z6SmyQwJ0",
    imageAlt: "Screenshot of an NFT Marketplace with various digital art",
    technologies: ["Next.js", "TailwindCSS", "Ethers.js"],
    category: "Blockchain",
    liveDemoUrl: "#",
    githubUrl: "#",
    slug: "nft-marketplace",
  },
  {
    id: "6",
    title: "E-commerce Platform",
    description:
      "A modern, responsive e-commerce solution with a custom backend and payment integration.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpau77knzT06L2Xl0r0QhEw6zEUmh41R3nzDJbEyOdvlzvmHgY4uxBAJMRHtCr-bQnAZx89Rf_yg8C6I-HRgrvsdZ1HdXLmk7VUo_ES4M_bnWUfTsaIcILfytwxTwRfHHoqGvrbco4BJhxqMHwAk1aEifp5vJ5k1EgS_d3TkyqkIjN2uAAFBLJGjwT_qrOwVv9MR1l-dqFZMHpfiXHQuS-e7XazQRajAzFMbiFOd-Wel6Dw6jp2eOOLWGtTDfETtrCPEp66Sz0bYg",
    imageAlt: "Screenshot of an e-commerce website showing product listings",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe API", "Redis"],
    category: "Web App",
    liveDemoUrl: "#",
    githubUrl: "#",
    slug: "e-commerce-platform",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGWzrzVyOaV-6GhREOmfJqRhlez0d2cjEMVMIBe2wXMWt_WyOjSy3jdsdzFxcmP5OVZ4jacODopsr5B_MnfGkaIaCK2BkMKyH2oJ-rH4C3zd8G_tyzk1cuKgmsaJfFu_4G_K6UKsyyW2KWLIPnC_zSQJ2F0QTpKgzPFUf_-zrFVqCqOgCW7Wqh0fzhfZOXCKGvfRrnSYkwYC9lmkMZB-t_VoMSVMX-Sh2Z49jsk3XsszmGnnLswMLojSgVuFvFN3FJRD-xTSe346g",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGYg8KRBfhnWex9PfaBYROuTTOHLZNTzi-CpYn-8_96YU5KNJQJ0ciiI7szujMheNX1vJctp2-WLDzE1ez0U4o29XybdWmyUUPWPwyifuV6iZxsEH4ztdqZ81_8M8jASx0sCyiuwKWF8jzqvHeTwt9d59eNeAfpWkO3QB02LKYjvjlJi-t_0n48YQh8gPVOK2sUYsgi5H-NlBkD_vA8d9foh3aBR54MJfCX7yhc1pDq-HwgYt99u2Ou6-qEp5_ryIKzcOTKgTVT6Q",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1AzDnf2e_P4-1vBEq_fZ5oRDEFGo6ntVvKCGP4zlV3u9wcmtInz0n2XFSmFmj7bXcjw0FYXoOldi_bL2hYRxNbQomaMWz2qLIZ-uEAXvRXrJFxf10Cj0a-ChhPrYqTEl9dOrWnYASRFtNuZS8Z9kQkOULHzWL0YIi5AzHfULt8HbRvahc7HKwoCeYvxLrCdsaQ22i7ilrwNe3WtCf4y4FKS2EiWrFuoZhHwXgdBNYoV0kWbhgJ-d2Sf0GBUEnwLd0LHVzqfa1bLY",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNg5VP9a01l6NaWUDMIkd0nSgdBYQlHv6xRyBUeh7MvoKuBf8STHEbuusJsa0Q1hdeZDFJr933GzSK71IylClsaYq0tAOmFP-QnmRWduTtymM6Oro3QuH0hdQusQ9F-fqIzz_a1YQBeCED1FmpWvqdaerfOrLlaOnK59TwdWkjoK2imgEcKim3RXQeAH2_BBSHIjRUJiqEDMjw22HCw3QCk9UNUY514TBAhduaNkN-RH3bY_KkPC535mn77GV7DQe9k3XFdhpXEA8",
    ],
    overview:
      "This project involved building a full-stack e-commerce platform from the ground up. The goal was to create a scalable, secure, and user-friendly online store with features like product management, a shopping cart, secure checkout, and user authentication. The platform is designed to be highly performant and easily customizable for different types of products. We focused on a clean UI/UX to ensure a smooth and intuitive shopping experience for customers, driving engagement and sales.",
    challenges: [
      "One of the primary challenges was ensuring the payment gateway integration was both secure and seamless. We implemented Stripe's API, leveraging its robust security features and webhooks to handle payment processing and order status updates in real-time. This required careful handling of sensitive user data and thorough testing to prevent any vulnerabilities.",
      "Another challenge was optimizing database queries for performance, especially for product filtering and search functionalities. We solved this by implementing advanced indexing strategies and caching frequently accessed data with Redis, which significantly reduced page load times and improved the overall user experience.",
    ],
    results:
      "The final platform successfully launched and handled a high volume of traffic without performance degradation. The streamlined checkout process led to a 15% increase in conversion rates compared to the previous system. The project not only met all client requirements but also provided a solid foundation for future feature enhancements and scalability. It was a great learning experience in building a complex, real-world application.",
    role: "Full-Stack Developer",
    roleDescription:
      "Responsible for backend architecture, database design, and frontend implementation.",
  },
  {
    id: "7",
    title: "Task Management App",
    description:
      "A collaborative tool to help teams organize, track, and manage their work efficiently.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCs2AGa5SwqATBpB6bZWgRe5gPilcqSx1ry-rIzRjETtErKzMrjMJKBEmQ3pFduo4UE8V_7R8FF6E1vTD_3fHGHzic_1opKffWG2MiQlV0BMpHRtHskqVOO_jUnhKZAjySHCnkBL4sSI5X0NgW3NlaiAdKEgamF5RkrnfRU8vz-vyplZKS3gQGyDsLQwsDjFceQO_aw70dxjXj5VjMGlVNecDmxeuPnzuqHljeMq_FJ3UTVa8NdAyPbkiuev17PiywIG4htc-r-hNo",
    imageAlt: "Screenshot of a Task Management App with boards and cards",
    technologies: ["React Native", "Firebase", "GraphQL"],
    category: "Mobile App",
    liveDemoUrl: "#",
    githubUrl: "#",
    slug: "task-management-app",
  },
  {
    id: "8",
    title: "Personal Blog Engine",
    description:
      "A lightweight and fast blog built with a static site generator and headless CMS.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCd8FKx4j0jlS2PxHJg_8Abb4WoUj4Kk691bLgOiO5eXkH3WUn5wTcxz0myGzUKqxMIqQsGnnAu6fdp-aqo7gn_xAjlLyHKG2x-7Y7ES50-AwBqllSsvH_DObvMH9-SasAwLidtHZ0cZIG09L_bxKzRkg-Sv4Wdoglg5y0zpKygxvIbqQgtpWBbmnBXxskKH4u2yZDUalk3eV98Q9PQhlW9zK9v2jtjW4IEV57_nsRJsj8mmtpnfWBNA9RTmL6LMl7we8w4RcBPhs0",
    imageAlt: "Screenshot of a clean, minimalist blog website",
    technologies: ["Gatsby", "Contentful", "Markdown"],
    category: "Web App",
    liveDemoUrl: "#",
    githubUrl: "#",
    slug: "personal-blog-engine",
  },
  {
    id: "9",
    title: "Supply Chain dApp",
    description:
      "A blockchain application to track goods from origin to consumer with full transparency.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArk0XRxMTVOv9Uu52bFfPhyaH7jmvLlFH2A1E1eJeyjAxc7MedZRGS8X6d0Mk3ZomwMt79IjXZkVYIJsSaxCxdaIFaLOy5bsQ88O8x5pCDbXICKdLYZr0qCStI6DJbJeQQWmPIcxFrNeBV0ZfH4KHzooTM5-hCccmxDDGmY7pS8h_eJ-4m6V7SuMuGOpgi7BzgDh7_gfy2njRI4r5xUFC6aUYO2fH0E3H0honcyUDX3h45x1r4_CJsA7kmEDKzwCtZ91vUmIjCUp8",
    imageAlt: "Abstract graphic representing a supply chain dApp",
    technologies: ["Hyperledger", "Docker", "Go"],
    category: "Blockchain",
    liveDemoUrl: "#",
    githubUrl: "#",
    slug: "supply-chain-dapp",
  },
];

