import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Layers, Zap, Globe, Shield, Users, GitBranch, Play, ExternalLink, Github } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import dashboardImg from "@/assets/dashboard.png";
import tasksImg from "@/assets/taskboard.png";
import chatImg from "@/assets/chat.png";
import integrationsImg from "@/assets/intergration.png";
import authImg from "@/assets/authpage.png";
import architectureImg from "@/assets/taskflow-architecture.jpg";
import demoVideo from "@/assets/TaskFlow Demo.mp4";

const features = [
  { icon: <Layers size={20} />, title: "Modular Architecture", desc: "200+ planned microservices with clear service boundaries and independent deployability." },
  { icon: <Zap size={20} />, title: "Real-time Collaboration", desc: "WebSocket-powered live updates enabling simultaneous multi-user editing and notifications." },
  { icon: <Globe size={20} />, title: "Third-party Integrations", desc: "Connects with Google Workspace, Slack, GitHub, and more via a unified integration layer." },
  { icon: <Shield size={20} />, title: "Auth & Access Control", desc: "Role-based access control with JWT authentication, OAuth providers, and fine-grained permissions." },
  { icon: <Users size={20} />, title: "WebRTC Communication", desc: "Built-in video/voice calling layer for seamless team communication without leaving the platform." },
  { icon: <GitBranch size={20} />, title: "Event-driven Core", desc: "Asynchronous event bus powering cross-service communication, audit logs, and workflow triggers." },
];

const ScreenshotFrame = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <div className="group">
    <div className="rounded-xl border border-border overflow-hidden bg-surface-elevated shadow-2xl">
      {/* macOS-style title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-border/50">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-4 text-xs text-muted-foreground font-mono">taskflow.app</span>
      </div>
      <img src={src} alt={alt} loading="lazy" width={1920} height={1080} className="w-full h-auto" />
    </div>
    {caption && <p className="text-sm text-muted-foreground mt-3 text-center">{caption}</p>}
  </div>
);

const TaskFlow = () => (
  <PageLayout>
    {/* Hero */}
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-surface-subtle" />
      <div className="container relative z-10">
        <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={14} /> Back to projects
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated text-xs font-medium text-primary mb-6">
          <Layers size={12} /> FLAGSHIP PROJECT
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">TaskFlow</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-2">
          Scalable all-in-one productivity platform
        </p>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          A modular SaaS system designed to compete conceptually with ClickUp and Notion —
          built with scalability, real-time collaboration, and microservices-first thinking from the ground up.
        </p>
      </div>
    </section>

    {/* Demo Video */}
    <Section>
      <p className="text-sm font-medium text-primary mb-2">Product Demo</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">See it in action.</h2>
      <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
        A walkthrough of TaskFlow's core experience — from login to task management, real-time updates, and integrations.
      </p>
      <div className="rounded-xl border border-border overflow-hidden bg-surface-elevated shadow-2xl max-w-5xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-border/50">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs text-muted-foreground font-mono flex items-center gap-1"><Play size={10} /> demo recording</span>
        </div>
        <AspectRatio ratio={16 / 9}>
          <video
          
            src={demoVideo}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            
          />
        </AspectRatio>
      </div>
    </Section>

    {/* Overview / Problem & Solution */}
    <Section className="bg-surface-subtle">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-sm font-medium text-primary mb-2">The Problem</p>
          <h2 className="text-2xl font-bold mb-4">Fragmented productivity tools</h2>
          <p className="text-muted-foreground leading-relaxed">
            Teams juggle multiple disconnected tools for tasks, docs, communication, and
            project management. Data silos lead to context switching, missed updates,
            and reduced velocity. Existing monolithic platforms struggle to scale features
            independently.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-primary mb-2">The Solution</p>
          <h2 className="text-2xl font-bold mb-4">One platform, modular by design</h2>
          <p className="text-muted-foreground leading-relaxed">
            TaskFlow unifies task management, documentation, real-time collaboration,
            and communication into a single platform. Each capability is an independent
            microservice, enabling teams to adopt what they need and scale each component
            independently.
          </p>
        </div>
      </div>
    </Section>

    {/* Dashboard Screenshot */}
    <Section>
      <p className="text-sm font-medium text-primary mb-2">Product Overview</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for clarity.</h2>
      <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        A unified dashboard that surfaces what matters — project health, team activity, and task progress at a glance.
      </p>
      <ScreenshotFrame src={dashboardImg} alt="TaskFlow dashboard showing project overview, metrics, and team activity" caption="Dashboard — Project overview with real-time metrics and activity feed" />
    </Section>

    {/* Core Features — Task Management */}
    <Section className="bg-surface-subtle">
      <p className="text-sm font-medium text-primary mb-2">Core Features</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Task management, reimagined.</h2>
      <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        Kanban boards with drag-and-drop, priority labels, assignees, and status tracking — built for teams that move fast.
      </p>
      <ScreenshotFrame src={tasksImg} alt="TaskFlow Kanban board with task cards across To Do, In Progress, and Done columns" caption="Kanban Board — Drag-and-drop task management with priority and assignee tracking" />
    </Section>

    {/* Real-Time Features — Chat */}
    <Section>
      <p className="text-sm font-medium text-primary mb-2">Real-Time Features</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Collaboration without context switching.</h2>
      <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        WebSocket-powered team chat with channels, typing indicators, and presence — all inside the platform.
      </p>
      <ScreenshotFrame src={chatImg} alt="TaskFlow real-time team chat with channels and online members" caption="Team Chat — Real-time messaging with channels and presence indicators" />
    </Section>

    {/* Integrations */}
    <Section className="bg-surface-subtle">
      <p className="text-sm font-medium text-primary mb-2">Integrations & Extensibility</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Connects to your stack.</h2>
      <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        A unified integration layer that connects with Google Workspace, Slack, GitHub, Jira, and more — with one-click setup.
      </p>
      <ScreenshotFrame src={integrationsImg} alt="TaskFlow integrations panel showing connected apps like Google, Slack, GitHub" caption="Integrations Panel — One-click connections to Google, Slack, GitHub, and more" />
    </Section>

    {/* System Design / Auth */}
    <Section>
      <p className="text-sm font-medium text-primary mb-2">System Design & User Flow</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-tenant from day one.</h2>
      <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        JWT-based authentication with OAuth providers, workspace isolation, and role-based access control for enterprise-grade security.
      </p>
      <ScreenshotFrame src={authImg} alt="TaskFlow login screen with OAuth and workspace selector" caption="Auth & Workspaces — OAuth login with multi-tenant workspace switching" />
    </Section>

    {/* Features Breakdown */}
    <Section className="bg-surface-subtle">
      <p className="text-sm font-medium text-primary mb-2">Key Features</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Built for real teams.</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-6 rounded-xl border border-border bg-surface-elevated hover-lift">
            <div className="text-primary mb-3">{f.icon}</div>
            <h3 className="font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Architecture Diagram */}
    <Section>
      <p className="text-sm font-medium text-primary mb-2">System Architecture</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for scale.</h2>
      <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        TaskFlow's architecture separates concerns into independently deployable services,
        connected via an event bus and unified API gateway.
      </p>
      <ScreenshotFrame src={architectureImg} alt="TaskFlow system architecture diagram showing microservices, databases, and integrations" caption="System Architecture — Microservices connected via API Gateway, Event Bus, and WebSocket layer" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {["API Gateway", "Auth Service", "Task Engine", "Doc Service", "Notification Hub", "Integration Layer", "Real-time Server", "Analytics Pipeline", "Search Index"].map((s) => (
          <div key={s} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface-elevated font-mono text-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {s}
          </div>
        ))}
      </div>
    </Section>

    {/* Technical Deep Dive / Tech Stack */}
    <Section className="bg-surface-subtle">
      <p className="text-sm font-medium text-primary mb-2">Tech Stack</p>
      <h2 className="text-2xl font-bold mb-8">Technologies powering TaskFlow</h2>
      <div className="flex flex-wrap gap-3 mb-16">
        {["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "WebSockets", "Docker", "Kubernetes", "Nginx", "Jest", "GitHub Actions"].map((t) => (
          <span key={t} className="px-4 py-2 rounded-lg border border-border bg-surface-elevated text-sm font-medium">{t}</span>
        ))}
      </div>

      <p className="text-sm font-medium text-primary mb-2">Technical Decisions</p>
      <h2 className="text-2xl font-bold mb-8">Why this approach</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {[
          { q: "Why microservices over monolith?", a: "Independent scaling and deployment of each capability. The task engine can scale separately from the chat service during peak usage." },
          { q: "Why WebSockets over polling?", a: "Sub-50ms latency for real-time updates. Polling introduces unnecessary load and delay that breaks the collaborative experience." },
          { q: "Why PostgreSQL + Redis?", a: "PostgreSQL for ACID-compliant relational data. Redis for session caching, pub/sub messaging, and rate limiting — each optimized for its use case." },
          { q: "Why event-driven architecture?", a: "Loose coupling between services. When a task is updated, the event bus notifies the notification hub, analytics pipeline, and search index independently." },
        ].map((item) => (
          <div key={item.q} className="p-6 rounded-xl border border-border bg-surface-elevated">
            <h3 className="font-semibold mb-2 text-sm">{item.q}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Results / Future Scope */}
    <Section>
      <p className="text-sm font-medium text-primary mb-2">Future Roadmap</p>
      <h2 className="text-2xl font-bold mb-8">Where TaskFlow is heading</h2>
      <div className="space-y-4 max-w-2xl">
        {[
          "AI-powered task prioritization and smart scheduling",
          "Plugin marketplace for custom integrations",
          "Multi-tenant architecture with workspace isolation",
          "Advanced analytics dashboard with custom reporting",
          "Mobile-native experience with offline-first sync",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-surface-elevated">
            <span className="mt-0.5 w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0">{i + 1}</span>
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </Section>

    {/* CTA — GitHub + Live Demo */}
    <Section className="bg-surface-subtle">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Explore the code & architecture</h2>
        <p className="text-muted-foreground mb-8">Dive into the codebase or explore the system design philosophy behind TaskFlow.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/Ajithpal2007/TaskFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-surface-elevated font-medium hover:bg-surface-subtle transition-colors"
          >
            <Github size={18} /> View on GitHub
          </a>
          <Link
            to="/architecture"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View Architecture <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  </PageLayout>
);

export default TaskFlow;
