import { Link } from "react-router-dom";
import { ArrowRight, Layers, Zap, Database } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";

const projects = [
  {
    slug: "taskflow",
    title: "TaskFlow",
    label: "FLAGSHIP",
    icon: <Layers size={14} />,
    description: "Scalable all-in-one productivity platform with microservices architecture, real-time collaboration, and modular design.",
    tech: ["React", "Node.js", "WebSockets", "PostgreSQL", "Docker"],
  },
  {
    slug: "api-gateway-engine",
    title: "API Gateway Engine",
    label: "SYSTEM DESIGN",
    icon: <Zap size={14} />,
    description: "Custom API gateway with rate limiting, authentication middleware, request routing, and service mesh integration.",
    tech: ["Node.js", "Redis", "Docker", "WebSocket"],
  },
  {
    slug: "datasync-pipeline",
    title: "DataSync Pipeline",
    label: "DATA ENGINEERING",
    icon: <Database size={14} />,
    description: "Event-driven data synchronization pipeline supporting real-time ETL across distributed microservices.",
    tech: ["CloudFlare", "bullmq", "PostgreSQL", "AWS Lambda"],
  },
];

const Projects = () => (
  <PageLayout>
    <Section>
      <p className="text-sm font-medium text-primary mb-2">Projects</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Built to ship.</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-16">
        Each project represents a real-world problem solved with scalable architecture,
        product thinking, and production-grade engineering.
      </p>
      <div className="grid gap-8">
        {projects.map((p) => {
          const inner = (
            <div className="group rounded-2xl border border-border bg-surface-elevated p-8 md:p-10 hover-lift">
              <div className="flex items-center gap-2 text-xs font-medium text-primary mb-4">
                {p.icon} {p.label}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{p.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-medium">{t}</span>
                ))}
              </div>
              {p.slug && (
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  View case study <ArrowRight size={14} />
                </div>
              )}
            </div>
          );
          return p.slug ? (
            <Link key={p.title} to={`/projects/${p.slug}`} className="block">{inner}</Link>
          ) : (
            <div key={p.title}>{inner}</div>
          );
        })}
      </div>
    </Section>
  </PageLayout>
);

export default Projects;