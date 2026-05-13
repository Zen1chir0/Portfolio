# Kenneth Flororita - AI Automation Portfolio

A personal technical portfolio for Kenneth Flororita, an AI Automation Engineer focused on production-ready workflow systems, AI-assisted automation pipelines, CRM/API integrations, and reliability-oriented automation architecture.

The site presents selected automation work, sanitized project visuals, and technical positioning around one core theme: AI workflows that scale and survive real operations.

## Live Demo

Live site: [Add deployment URL here]

## Purpose

This portfolio is built to showcase automation engineering work beyond a traditional resume. It highlights workflow orchestration, reliability thinking, API integration, AI-assisted systems, and selected project case studies that demonstrate how automation systems behave under real operational pressure.

Some project details are intentionally generalized or redacted because client workflows and implementation details are protected by NDA. Public-facing visuals use sanitized architecture diagrams and non-sensitive descriptions.

## Featured Projects

| Project | Type | Summary | Tech / Concepts |
| --- | --- | --- | --- |
| FlowSentinel | Reliability engine | AI-assisted reliability and incident classification engine for failed workflow executions, combining deterministic rules, workflow telemetry, Supabase logging, and OpenAI fallback analysis. | n8n monitoring, webhook ingestion, payload normalization, Supabase telemetry, AI incident classification, email escalation |
| AI Campaign Generator | NDA-protected campaign system | Metric-based campaign strategy system for TikTok, Facebook, and Instagram. The public version shows a sanitized architecture preview only. | multi-platform metrics, data cleaning, performance scoring, AI-assisted strategy generation, campaign recommendation output |
| Nudge System | NDA-protected engagement workflow | Proactive chatbot logging and re-engagement workflow that detects inactivity and triggers follow-up events. The public version shows a sanitized architecture preview only. | activity logging, inactivity detection, trigger evaluation, automated follow-up, lifecycle updates |

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- CSS custom properties
- Responsive component-based layout

### Automation / Workflow

- n8n
- Webhooks
- Workflow orchestration
- CRM automation
- Reliability monitoring

### Backend / Data

- Supabase
- PostgreSQL concepts
- REST APIs
- HubSpot integration patterns
- OAuth 2.0

### AI / LLM

- OpenAI
- AI-assisted classification
- LLM fallback analysis
- AI campaign strategy generation

### Testing / Reliability

- Playwright
- GitHub Actions
- Uptime monitoring
- Workflow failure classification

### Deployment

- Static frontend deployment ready
- Vite production build

## Design Notes

The portfolio uses a clean technical aesthetic with a warm light theme, deep green-black dark mode, soft card styling, and NDA-safe project visuals. It includes responsive project cards, a light/dark mode transition, downloadable CV support, sanitized architecture previews, and a contact CTA.

The goal is to make the site feel like a technical artifact, not only a personal landing page.

## Repository Structure

```text
.
+-- public/
|   +-- CV-Kenneth_flororita.pdf
|   +-- kenneth-flororita-image.png
|   +-- workflow-architecture.png
|   +-- ai-campaign-generator-architecture.svg
|   +-- nudge-system-architecture.svg
+-- src/
|   +-- components/
|   |   +-- sections/
|   |   +-- ui/
|   +-- data/
|   +-- hooks/
|   +-- styles/
|   +-- App.tsx
|   +-- main.tsx
+-- index.html
+-- package.json
+-- README.md
```

## Getting Started

Clone the repository:

```bash
git clone [Add repository URL here]
cd portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

This version does not require public runtime environment variables.

Future versions may include a Supabase-backed visitor analytics layer and a hidden analytics dashboard.

## Future Improvements

- Supabase visitor analytics
- Hidden analytics dashboard
- Stronger project case study pages
- Improved dark mode transition
- More implementation writeups
- Additional personal automation projects
- More detailed reliability and monitoring examples

## Contact

- LinkedIn: https://www.linkedin.com/in/kenneth-flororita-36b870331
- GitHub: [Add GitHub URL]
- Email: kennethflororita@gmail.com
- Portfolio: [Add live URL]

## NDA Notice

Some work shown in this portfolio is based on client or contract projects. Sensitive implementation details, proprietary workflows, and private system data have been intentionally omitted or generalized. Architecture visuals for protected projects are sanitized and intended only to communicate high-level engineering structure.
