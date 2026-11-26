// Single source of truth for all site content.
// Update this file when your resume changes — every section reads from here.

export const profile = {
  name: "Alex Mwaura",
  fullName: "Alex Mwangi Mwaura",
  role: "Software Engineer",
  location: "Nairobi, Kenya",
  timezone: "Africa/Nairobi",
  email: "alexmwaura36@gmail.com",
  // Point this at a public copy of your latest resume (without references' phone numbers).
  resumeUrl:
    "https://drive.google.com/file/d/1Ju_VGfXtIzwRSV9DVvczYLtSEgvp84Pr/view?usp=drive_link",
  socials: {
    github: "https://github.com/AlexMwaura",
    linkedin: "https://www.linkedin.com/in/alex-mwaura-562419119/",
  },
  headline: {
    lead: "I build the rails",
    emphasis: "money",
    tail: "moves on.",
  },
  intro:
    "Software engineer with 4+ years designing and shipping production fintech systems across African markets — lending, credit risk, payroll and mobile money. I work across the stack, from event-driven backends to the interfaces people actually use.",
  about: [
    "I started out keeping a university's IT running, then moved into building the software behind SACCO banking in Kenya — platforms used by more than 70 financial institutions and 600,000+ members.",
    "Since then I've architected mobile-money lending for Rwanda, Uganda and Tanzania at NCBA, and today at Fin Africa I build multi-tenant lending, payroll and regulatory-reporting systems across five markets.",
    "I care about the boring parts done well: correct numbers, idempotent payments, clean data flows, and interfaces that make complex financial work feel simple.",
  ],
};

export const stats = [
  { value: 4, suffix: "+", label: "Years shipping production fintech" },
  { value: 70, suffix: "+", label: "Financial institutions served" },
  { value: 600, suffix: "K+", label: "Members on platforms I built" },
  { value: 7, suffix: "", label: "African markets worked across" },
];

export const markets = [
  { code: "KE", name: "Kenya" },
  { code: "TZ", name: "Tanzania" },
  { code: "UG", name: "Uganda" },
  { code: "RW", name: "Rwanda" },
  { code: "ZA", name: "South Africa" },
  { code: "SZ", name: "Eswatini" },
  { code: "BW", name: "Botswana" },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  where: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "Fin Africa",
    role: "Software Engineer",
    period: "Aug 2025 — Present",
    where: "Kenya · South Africa · Tanzania · Eswatini · Botswana",
    summary:
      "Building multi-tenant lending, reporting and payroll systems that serve five markets.",
    highlights: [
      "Led the Eswatini ECL (Expected Credit Loss) month-end pipeline — transforming loan, transaction and repayment data from a PostgreSQL warehouse into regulatory outputs on AWS S3.",
      "Built backend APIs and loan-level XIRR calculations for the EIR (Effective Interest Rate) reporting module in the multi-tenant Loan Tracker.",
      "Shipped affordability calculations, settlement-quote automation and refinancing workflows in the Loan Tracker Back Office (Next.js, TypeScript).",
      "Implemented event-driven loan processing with RabbitMQ in a Kotlin/Spring Boot payroll system, integrating M-Pesa disbursements.",
    ],
    stack: ["Next.js", "TypeScript", "Kotlin", "Spring Boot", "Django", "RabbitMQ", "PostgreSQL", "AWS S3"],
  },
  {
    company: "NCBA Group",
    role: "Solutions Architect",
    period: "Aug 2024 — Aug 2025",
    where: "Nairobi, Kenya",
    summary:
      "Architecture for mobile-money lending products across East Africa.",
    highlights: [
      "Designed end-to-end architecture for the Rwanda & Uganda Loan Top-Up (MoKash), including secure MTN Mobile Money integration.",
      "Built the Instant Payment Notification (IPN) portal for Loop, enabling real-time transaction processing and more accurate reconciliation.",
      "Architected Mpawa Rescore Automation (Tanzania), replacing manual credit scoring with an automated engine to reduce NPLs.",
      "Ran Jenkins CI/CD across UAT & SIT and drove root-cause analysis with Elasticsearch and Kibana.",
    ],
    stack: ["React", "Jenkins", "ELK", "MTN MoMo", "AWS", "Azure"],
  },
  {
    company: "Tangazoletu",
    role: "Software Developer",
    period: "Jun 2022 — Aug 2024",
    where: "Nairobi, Kenya",
    summary:
      "Core banking and mobile-money platforms for SACCOs and banks.",
    highlights: [
      "Built Spring Boot microservices integrating core banking and mobile money over REST and SOAP.",
      "Shipped Ionic mobile apps used by 30+ SACCOs, and Angular/React portals.",
      "Containerised services with Docker and deployed on Kubernetes & OpenShift via Jenkins and GitLab CI.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "React", "Ionic", "Docker", "Kubernetes", "OpenShift"],
  },
  {
    company: "Tangazoletu",
    role: "Graduate Trainee",
    period: "Apr 2022 — Jun 2022",
    where: "Nairobi, Kenya",
    summary: "Full-stack fintech foundations — Java, Spring Boot, Angular, React and DevOps tooling.",
    highlights: [],
    stack: ["Java", "Angular", "React"],
  },
  {
    company: "Kirinyaga University",
    role: "IT Support Specialist",
    period: "Jan 2020 — Feb 2021",
    where: "Kenya",
    summary: "Kept campus infrastructure and academic systems running for students and staff.",
    highlights: [],
    stack: [],
  },
];

export type Project = {
  title: string;
  org: string;
  tag: string;
  blurb: string;
  metric?: { value: string; label: string };
  stack: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Eswatini ECL Pipeline",
    org: "Fin Africa",
    tag: "Data · Regulatory",
    blurb:
      "Month-end Expected Credit Loss pipeline turning raw loan, transaction and repayment data into structured regulatory outputs.",
    metric: { value: "Month-end", label: "regulatory reporting" },
    stack: ["PostgreSQL", "Data pipelines", "AWS S3"],
    featured: true,
  },
  {
    title: "SpotCash Mobile Banking",
    org: "Tangazoletu",
    tag: "Core banking",
    blurb:
      "Mobile banking for SACCOs, banks and MFIs — balance, deposits, withdrawals and the full loan lifecycle, integrated with core banking and mobile money.",
    metric: { value: "600K+", label: "members · 70+ institutions" },
    stack: ["Spring Boot", "Ionic", "Angular"],
    href: "https://www.tangazoletu.com/spotcash-mobile-banking/",
    featured: true,
  },
  {
    title: "MoKash Loan Top-Up",
    org: "NCBA Group",
    tag: "Architecture",
    blurb:
      "End-to-end architecture for loan top-ups in Rwanda & Uganda with secure MTN Mobile Money integration.",
    metric: { value: "2", label: "markets · MTN MoMo" },
    stack: ["Microservices", "MTN MoMo API"],
  },
  {
    title: "Loop IPN Portal",
    org: "NCBA Group",
    tag: "Payments",
    blurb:
      "Real-time Instant Payment Notification portal that improved reconciliation accuracy for the Loop platform.",
    stack: ["React", "TypeScript"],
  },
  {
    title: "Mpawa Rescore Automation",
    org: "NCBA Group",
    tag: "Credit risk",
    blurb:
      "Replaced a manual credit-scoring process in Tanzania with an automated engine to reduce non-performing loans.",
    stack: ["Architecture", "Credit scoring"],
  },
  {
    title: "Event-driven Payroll Lending",
    org: "Fin Africa",
    tag: "Payments",
    blurb:
      "RabbitMQ-based loan processing in a Kotlin/Spring Boot payroll system, wired to downstream disbursement and M-Pesa.",
    stack: ["Kotlin", "RabbitMQ", "M-Pesa"],
  },
  {
    title: "Kanja Money Transfer",
    org: "Tangazoletu",
    tag: "Payments",
    blurb:
      "SACCO-to-SACCO transfers over USSD and mobile apps, integrated directly with core banking.",
    stack: ["USSD", "Spring Boot"],
  },
  {
    title: "SpotPay Bulk Payments",
    org: "Tangazoletu",
    tag: "Payments",
    blurb:
      "Upload recipients from Excel, get supervisor approval, disburse instantly to e-wallets.",
    stack: ["Spring Boot", "Angular"],
    href: "https://www.tangazoletu.com/spotpay/",
  },
];

export const openSource = [
  {
    name: "reference-data-aggregation-service",
    desc: "Aggregates country reference data from SOAP into MySQL behind fast, searchable REST APIs.",
    lang: "Java",
  },
  {
    name: "currency-conversion",
    desc: "Two Spring Boot microservices that fetch live FX rates, convert, and log to PostgreSQL.",
    lang: "Java",
  },
  {
    name: "orders-dashboard",
    desc: "Angular SPA to list, filter, create and edit e-commerce orders.",
    lang: "TypeScript",
  },
  {
    name: "Arbitrary-Precision-Integer-Calculator",
    desc: "A REPL for arbitrary-precision integer arithmetic, written from scratch.",
    lang: "JavaScript",
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "Kotlin", "Python", "TypeScript", "JavaScript", "Ruby"] },
  { group: "Backend", items: ["Spring Boot", "Django", "Ruby on Rails", "REST", "SOAP"] },
  { group: "Frontend", items: ["React", "Next.js", "Angular", "Ionic"] },
  { group: "Architecture", items: ["Event-driven", "Microservices", "Serverless", "RabbitMQ"] },
  { group: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "OpenShift", "Terraform", "Jenkins", "GitLab CI"] },
  { group: "Data & Observability", items: ["PostgreSQL", "MySQL", "Oracle", "Prometheus", "Grafana", "ELK"] },
];

export const education = [
  { title: "BSc Information Technology", org: "Kirinyaga University", period: "2015 — 2019" },
  { title: "Software Engineering", org: "Moringa School", period: "2022" },
  { title: "Cybersecurity", org: "Huawei × Communications Authority of Kenya", period: "2022" },
];
