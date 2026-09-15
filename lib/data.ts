export const profile = {
  name: "Sandaru Shashinda",
  firstName: "Sandaru",
  lastName: "Shashinda",
  title: "Senior Software Engineer",
  tagline: "Problem Solver",
  roles: [
    "Senior Software Engineer",
    "Full-Stack Architect",
    "Systems Problem Solver",
    "Technical Lead & Mentor",
  ],
  location: "Colombo, Sri Lanka",
  email: "shashinda.98@gmail.com",
  phone: "+94 71 246 4859",
  phoneHref: "+94712464859",
  linkedin: "https://linkedin.com/in/sandaru-shashinda",
  linkedinLabel: "in/sandaru-shashinda",
  summary:
    "Senior software engineer with 5+ years building and leading enterprise-grade, full-stack systems. I combine hands-on engineering across the frontend, backend and cloud with technical leadership, product thinking and cross-functional collaboration — owning delivery end to end and mentoring teams along the way.",
  shortSummary:
    "I design and ship enterprise-grade platforms end to end — the architecture, the real-time data, the cloud, and the teams that build them.",
} as const;

export const stats = [
  { value: 5, suffix: "+", label: "Years shipping software", hint: "Since 2021" },
  { value: 10, suffix: "M+", label: "Records per table, served fast", hint: "Sub-2s API responses" },
  { value: 80, suffix: "%+", label: "Unit test coverage", hint: "Test-driven with Jest" },
  { value: 4, suffix: "", label: "Enterprise platforms shipped", hint: "Telecom, insurance, CMS" },
] as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  duration: string;
  current?: boolean;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Zoomi Technologies Inc",
    period: "Jun 2025 — Present",
    duration: "1 yr 2 mos",
    current: true,
    highlights: [
      "Lead developer on scalable full-stack telecom and SaaS platforms.",
      "Drove architecture, real-time data handling and cross-team delivery.",
      "Kept API responses under 2s on tables of 5–10M records.",
      "Integrated feature-full authentication and authorisation with dynamic user roles.",
      "Translated complex business needs into architectural designs with cross-functional stakeholders.",
      "Mentored junior software engineers, providing technical guidance and code review.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Zoomi Technologies Inc",
    period: "Jun 2024 — Jun 2025",
    duration: "1 yr",
    highlights: [
      "Built a solid foundation in RabbitMQ, message queuing and asynchronous messaging.",
      "Developed microservices fronted by API gateways.",
      "Owned full auth and authorization flows with dynamic roles.",
      "Worked hands-on with Docker, CI/CD pipelines and DevOps practices.",
      "Optimised, designed and managed MongoDB collections and SQL tables.",
      "Guided and mentored intern software engineers in development best practices.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "EchonLabs (PVT) LTD",
    period: "Jun 2023 — May 2024",
    duration: "1 yr",
    highlights: [
      "Delivered finance, claims and payments modules on a centralized IAM.",
      "Gained experience with large-scale, enterprise-grade applications.",
      "Developed and deployed a full-stack ERP system from concept to production for finance and insurance stakeholders.",
      "Designed solid database architecture.",
      "Worked across microservices with NestJS and RabbitMQ.",
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "EchonLabs (PVT) LTD",
    period: "May 2022 — May 2023",
    duration: "1 yr",
    highlights: [
      "Implemented pixel-perfect UIs.",
      "Built the backend for agent hierarchy and subordination.",
      "Grew across the full stack with strong fundamentals.",
      "Applied core SDLC principles from requirements gathering through to production deployment.",
      "Learned and applied Agile/Scrum methodologies in a team-based environment.",
    ],
  },
  {
    role: "Software Developer",
    company: "Reifenwechsel Mobil",
    period: "Aug 2021 — Mar 2023",
    duration: "1 yr 7 mos",
    highlights: [
      "Implemented product management and inventory management modules.",
      "Developed robust, well-architected React and Angular frontends.",
      "Worked with Docker, CI/CD pipelines, Git and DevOps practices.",
      "Consistently delivered within deadlines, demonstrating effective time management and reliability.",
    ],
  },
];

export type Project = {
  name: string;
  kind: string;
  blurb: string;
  stack: string[];
  highlights: string[];
  featured?: boolean;
  metric: { value: string; label: string };
};

export const projects: Project[] = [
  {
    name: "Telecommunication ERP",
    kind: "BPO Platform",
    featured: true,
    blurb:
      "Lead developer on a telecom BPO platform built to stay fast under punishing data volumes — every API call under two seconds against schemas holding 5 to 10 million records.",
    stack: ["Next.js", "Nest.js", "PostgreSQL", "RabbitMQ", "WebSockets", "AWS", "ELK", "Jest"],
    metric: { value: "< 2s", label: "API response on 10M-row tables" },
    highlights: [
      "Lead developer of the project, contributing to every part of the system.",
      "Designed a scalable backend architecture to handle large datasets efficiently.",
      "Used RabbitMQ for message queuing and asynchronous messaging.",
      "Integrated feature-full authentication and authorisation with dynamic user roles.",
      "Integrated real-time data handling with WebSockets.",
      "Unit test-driven development with 80%+ coverage using Jest.",
      "Implemented logging and monitoring with the ELK stack.",
      "Handled AWS, cloud-native development and CI/CD pipelines.",
    ],
  },
  {
    name: "IAM Insurance System",
    kind: "Identity & Finance Platform",
    blurb:
      "A centralized identity platform with finance and general-insurance claims built on top — invoices, receipts, payments and double entries, all under one roof.",
    stack: ["React.js", "Nest.js", "MongoDB", "PostgreSQL", "Microservices", "RabbitMQ"],
    metric: { value: "Multi-system", label: "Unified under one IAM" },
    highlights: [
      "Built finance modules for single and bulk invoices, receipts, payments and double entries.",
      "Built modules for general insurance claim intimation and processing.",
      "Designed solid database architecture for payments and claims.",
      "Worked with microservices architecture using Nest.js and RabbitMQ.",
      "Developed and scaled modular multi-systems, integrating them into a centralized IAM.",
      "Developed advanced dynamic forms.",
      "Implemented full auth: roles with permissions, 2FA, OAuth, JWT, AuthGuard and PermissionGuard.",
    ],
  },
  {
    name: "ERP Insurance System",
    kind: "Enterprise Resource Planning",
    blurb:
      "An insurance ERP with a complete notification dashboard — single and bulk sends, push delivery via OneSignal — sitting on top of a deep agent hierarchy.",
    stack: ["React.js", "Nest.js", "PostgreSQL", "TypeORM", "OneSignal"],
    metric: { value: "Bulk + push", label: "Notification dashboard" },
    highlights: [
      "Created a complete notification dashboard for single and bulk notifications, with push delivery via OneSignal.",
      "Handled the backend for agent hierarchy and subordination.",
      "Implemented pixel-perfect UIs.",
      "Handled advanced database queries to fulfil complex requirements.",
    ],
  },
  {
    name: "CMS Platform",
    kind: "Product & Inventory Suite",
    blurb:
      "A Spring Boot microservices platform behind an API gateway, hardened with circuit breakers so one failing service never takes the whole suite down.",
    stack: ["Angular", "Spring Boot", "Java", "PostgreSQL", "Hibernate", "Resilience4j"],
    metric: { value: "3 services", label: "Behind an API gateway" },
    highlights: [
      "Implemented product management and inventory management modules.",
      "Handled the full authentication and authorisation flow with dynamic user roles.",
      "Implemented microservices architecture with an API gateway and 3 services.",
      "Implemented circuit breaking with Resilience4j.",
    ],
  },
];

export type SkillGroup = { title: string; note: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    note: "Interfaces that stay fast and pixel-accurate",
    items: ["React", "Next.js", "Angular", "TypeScript", "HTML & CSS", "Tailwind"],
  },
  {
    title: "Backend",
    note: "APIs and services built to hold up",
    items: ["Node.js", "Nest.js", "Express.js", "Spring Boot", "Java", ".NET / C#"],
  },
  {
    title: "Data",
    note: "Schemas designed for scale, then tuned",
    items: ["PostgreSQL", "MongoDB", "SQL", "TypeORM", "Hibernate", "Query tuning"],
  },
  {
    title: "Architecture",
    note: "Distributed systems that degrade gracefully",
    items: ["Microservices", "RabbitMQ", "API Gateway", "REST", "tRPC", "GraphQL", "WebSockets", "Resilience4j"],
  },
  {
    title: "Cloud & DevOps",
    note: "From local commit to production",
    items: ["AWS EC2", "AWS Lambda", "S3", "CloudWatch", "Docker", "CI/CD", "Git", "ELK Stack"],
  },
  {
    title: "Security & Quality",
    note: "Auth done properly, tests that mean something",
    items: ["RBAC", "2FA", "OAuth", "JWT", "Jest", "Playwright", "JUnit 5"],
  },
];

export const softSkills = [
  "Technical Leadership & Ownership",
  "Stakeholder & Cross-functional Collaboration",
  "Product & Solution Thinking",
  "System Architecture & Scalability",
  "Mentoring & Team Enablement",
  "Problem-Solving & Adaptability",
  "Project Management",
  "Documenting & Knowledge Sharing",
  "Financial & AI Domain Knowledge",
] as const;

export const education = [
  {
    qualification: "B.Sc. Physical Science",
    field: "Computer Science, Mathematics & Physics",
    institution: "University of Sri Jayewardenepura",
    period: "2019 — 2023",
  },
  {
    qualification: "Secondary & Higher Secondary Education",
    field: "GCE A/L Maths Stream · GCE O/L with 8 A passes",
    institution: "Mahanama College, Colombo 3",
    period: "2009 — 2017",
  },
] as const;

export const certifications = [
  "Certified Database Administrator",
  "Certified Full-Stack Software Developer",
  "GCE Advanced Level — Maths Stream",
  "GCE Ordinary Level — 8 A passes",
] as const;

export const achievements = [
  {
    title: "National Astronomy & Astrophysics Competition",
    detail: "Two-time gold medalist",
  },
  {
    title: "School Cricket",
    detail: "U15 and U17 A-Team player, Mahanama College",
  },
  {
    title: "University Badminton Team",
    detail: "Team member, University of Sri Jayewardenepura",
  },
  {
    title: "Event Organizing Committee",
    detail: "Head of the university faculty committee",
  },
] as const;

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Sinhala", level: "Native" },
] as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
] as const;
