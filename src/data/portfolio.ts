export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  bullets: string[];
};

export type Project = {
  title: string;
  kicker: string;
  summary: string;
  tags: string[];
  mediaLabel: string;
  mediaNote: string;
  mediaSrc?: string;
  mediaCaption?: string;
  repoUrl?: string;
  ndaProtected?: boolean;
  flow?: string[];
  features?: Array<{
    title: string;
    description: string;
  }>;
  featured?: boolean;
};

export type StackGroup = {
  title: string;
  tools: string;
  icons: string[];
};

export const profile = {
  name: "Kenneth Flororita",
  initials: "KF",
  role: "AI Automation Engineer",
  email: "kennethflororita@gmail.com",
  github: "https://github.com/Zen1chir0",
  linkedin: "https://www.linkedin.com/in/kenneth-flororita-36b870331",
  cv: "/Kenneth-Flororita-CV.pdf",
  image: "/kenneth-flororita-image.png",
  eyebrow: "Workflow Architect / AI Agents / API Orchestration",
  headline: "AI Workflows That Scale",
  summary:
    "I bridge LLM capability with business logic: autonomous agents, OAuth-secured API flows, self-healing monitoring pipelines, and campaign systems that move revenue instead of only making demos look clever.",
};

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const metrics: Metric[] = [
  { value: "40%", label: "sales volume lift in one week" },
  { value: "24/7", label: "workflow uptime monitoring" },
  { value: "1K+", label: "MAU platform safeguarded" },
  { value: "3", label: "QA dashboard teammates led" },
];

export const signals = ["n8n", "OpenAI", "Supabase", "Playwright", "HubSpot"];

export const specialties = [
  "Autonomous Agents",
  "OAuth 2.0",
  "Webhook Systems",
  "LLM Orchestration",
  "Incident Classification",
  "Revenue Workflows",
];

export const experiences: ExperienceItem[] = [
  {
    period: "Mar 2026 - Present",
    role: "AI Automation Engineer",
    company: "AgentGenius.ai / Contract",
    summary:
      "Refactored outreach infrastructure, engineered monitoring pipelines, and built secure CRM integrations for campaigns and lead operations.",
    bullets: [
      "Raised sales volume by 40% within one week through workflow optimization.",
      "Built 24/7 n8n, GitHub Actions, and Playwright monitoring for a 1,000+ MAU platform.",
      "Architected OAuth 2.0 HubSpot sync with real-time webhooks and ownership-aware routing.",
      "Created a human-in-the-loop kill switch for booked leads and AI drafting pause states.",
      "Proposed an AI-powered operations dashboard to C-level executives, translating automation telemetry into leadership-ready views.",
      "Managed dashboard QA for a 3-person team and documented API credit procurement logic.",
    ],
  },
  {
    period: "Jan 2026 - Apr 2026",
    role: "Data Operations Intern",
    company: "Aretex / Internship",
    summary:
      "Supported corporate data workflows with high-accuracy records management, validation, and standardized reporting exposure.",
    bullets: [
      "Maintained 100% accuracy across client records and database updates.",
      "Learned production data hygiene patterns inside structured business operations.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "FlowSentinel",
    kicker: "2026 / Reliability Engine",
    summary:
      "AI-assisted reliability and incident classification engine for failed workflow executions, combining deterministic rules with OpenAI fallback analysis.",
    tags: ["n8n", "Supabase", "OpenAI", "Webhooks"],
    mediaLabel: "FlowSentinel screenshot",
    mediaNote: "Reserved for n8n workflow capture / dashboard preview.",
    mediaSrc: "/workflow-architecture.png",
    mediaCaption:
      "n8n reliability workflow: error trigger -> normalization -> Supabase logging -> AI classification -> alerting",
    repoUrl: "https://github.com/Zen1chir0/Flowsentinel",
    flow: [
      "Webhook Error Trigger",
      "Payload Normalization",
      "Supabase Telemetry Store",
      "AI Classification",
      "Email Escalation",
    ],
    features: [
      {
        title: "Webhook Ingestion",
        description:
          "Captures failed workflow executions and extracts workflow, node, execution, and error metadata.",
      },
      {
        title: "Telemetry Store",
        description:
          "Stores normalized incident records in Supabase for debugging, tracking, and future dashboarding.",
      },
      {
        title: "AI Classification",
        description:
          "Classifies failure type, likely cause, and severity using rules first, then AI fallback when needed.",
      },
      {
        title: "Email Escalation",
        description:
          "Sends concise incident summaries with context, probable cause, and recommended next action.",
      },
    ],
    featured: true,
  },
  {
    title: "AI Campaign Generator",
    kicker: "2026 / Campaign Ops",
    summary:
      "Metric-based content generation system for TikTok, Facebook, and Instagram, stabilizing posting consistency across multiple campaign ecosystems.",
    tags: ["LLM Logic", "Social Campaigns", "Automation", "NDA"],
    mediaLabel: "Protected project visual",
    mediaNote: "Add a sanitized mockup or redacted workflow screenshot.",
    mediaSrc: "/ai-campaign-generator-architecture.svg",
    ndaProtected: true,
  },
  {
    title: "Nudge System",
    kicker: "2026 / Engagement",
    summary:
      "Proactive chatbot logging and re-engagement workflow that detects inactivity and triggers timely follow-up events.",
    tags: ["Chatbots", "Triggers", "Lifecycle", "NDA"],
    mediaLabel: "Protected project visual",
    mediaNote: "Add a sanitized mockup or redacted engagement flow.",
    mediaSrc: "/nudge-system-architecture.svg",
    ndaProtected: true,
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: "Languages & Frameworks",
    tools: "Python, PHP, JavaScript ES6+, HTML/CSS, Node.js, Express.js, React",
    icons: ["Python", "PHP", "JavaScript", "Node.js", "Express", "React"],
  },
  {
    title: "Automation & Infrastructure",
    tools: "n8n, Playwright, LLM orchestration, REST APIs, webhooks, GitHub Actions",
    icons: ["n8n", "Playwright", "OpenAI", "GitHub Actions", "REST APIs"],
  },
  {
    title: "Security & Databases",
    tools: "OAuth 2.0, PostgreSQL, Neon, MongoDB, Supabase, Linux essentials, AI-driven QA",
    icons: ["OAuth 2.0", "PostgreSQL", "MongoDB", "Supabase", "Linux"],
  },
];
