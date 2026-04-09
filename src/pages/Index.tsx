import { Link } from "react-router-dom";
import { ArrowRight, Layers, Zap, Globe, Shield, Code2, Server, Cloud, Database } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";

const skills = [
  {
    category: "Frontend",
    icon: <Code2 size={20} />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: <Server size={20} />,
    items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    category: "Infrastructure",
    icon: <Cloud size={20} />,
    items: ["Docker", "AWS", "CI/CD", "Vercel", "Kubernetes"],
  },
  {
    category: "Architecture",
    icon: <Database size={20} />,
    items: ["Microservices", "Event-driven", "System Design", "PostgreSQL", "Redis"],
  },
];

const signals = [
  { icon: <Layers size={18} />, text: "Microservices-first architecture" },
  { icon: <Zap size={18} />, text: "Real-time systems" },
  { icon: <Globe size={18} />, text: "Integration-ready platforms" },
  { icon: <Shield size={18} />, text: "Production-grade engineering" },
];

const Index = () => (
  <PageLayout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-surface-subtle" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="container relative z-10">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated text-xs font-medium text-muted-foreground animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Building TaskFlow — Scalable Productivity SaaS
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            I architect systems<br />
            <span className="text-gradient">that scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            SaaS builder and full-stack engineer designing production-grade platforms
            with microservices, real-time infrastructure, and product-first thinking.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/projects/taskflow"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              Explore TaskFlow
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Signals */}
    <Section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {signals.map((s) => (
          <div key={s.text} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface-elevated hover-lift">
            <span className="text-primary">{s.icon}</span>
            <span className="text-sm font-medium">{s.text}</span>
          </div>
        ))}
      </div>
    </Section>

    {/* Featured Projects */}
    <Section>
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-sm font-medium text-primary mb-2">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects built to ship.</h2>
        </div>
        <Link to="/projects" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          All projects <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/projects/taskflow" className="group rounded-2xl border border-border bg-surface-elevated p-8 hover-lift block">
          <div className="flex items-center gap-2 text-xs font-medium text-primary mb-4">
            <Layers size={14} /> FLAGSHIP
          </div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            TaskFlow
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Scalable all-in-one productivity platform built with microservices architecture.
            Real-time collaboration, third-party integrations, and modular design.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "WebSockets", "Microservices"].map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-medium">{t}</span>
            ))}
          </div>
        </Link>
        <Link to="/projects" className="group rounded-2xl border border-border bg-surface-elevated p-8 hover-lift block">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4">
            <Zap size={14} /> SYSTEM DESIGN
          </div>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            API Gateway Engine
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Custom API gateway with rate limiting, authentication middleware,
            request routing, and service mesh integration for distributed systems.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Redis", "Docker", "gRPC"].map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-medium">{t}</span>
            ))}
          </div>
        </Link>
      </div>
    </Section>

    {/* Engineering Capabilities */}
    <Section className="bg-surface-subtle">
      <p className="text-sm font-medium text-primary mb-2">Capabilities</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Engineering toolkit.</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((s) => (
          <div key={s.category} className="rounded-xl border border-border bg-surface-elevated p-6 hover-lift">
            <div className="flex items-center gap-2 mb-4 text-primary">
              {s.icon}
              <h3 className="font-semibold">{s.category}</h3>
            </div>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    {/* Builder Mindset */}
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium text-primary mb-2">Philosophy</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Builder mindset.</h2>
        <div className="grid gap-6 text-left">
          {[
            { title: "Systems over features", desc: "Every feature is a node in a larger system. I design for composability, not just functionality." },
            { title: "Scale from day one", desc: "Architecture decisions made early define what's possible later. I build foundations that support growth." },
            { title: "Product-first engineering", desc: "Code serves the user. I balance technical excellence with real-world usability and speed to market." },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-border bg-surface-elevated hover-lift">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-surface-subtle">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something meaningful.</h2>
        <p className="text-muted-foreground mb-8">
          Open to collaborations, founding opportunities, and ambitious engineering challenges.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Get in touch <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  </PageLayout>
);

export default Index;
