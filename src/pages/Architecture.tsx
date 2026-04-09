import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import { Github } from "lucide-react";

const principles = [
  { title: "Service Boundaries", desc: "Each domain maps to an independent service with its own data store, API contract, and deployment pipeline. No shared databases." },
  { title: "API Gateway Pattern", desc: "A single entry point handles routing, auth, rate limiting, and request transformation — isolating clients from internal service topology." },
  { title: "Event-driven Communication", desc: "Services communicate asynchronously via an event bus, enabling loose coupling, audit trails, and eventual consistency." },
  { title: "Database per Service", desc: "Each microservice owns its data. PostgreSQL for transactional, Redis for caching, and specialized stores where needed." },
  { title: "Monolith-first Transition", desc: "Start modular within a monolith, extract to microservices as scaling demands emerge. Pragmatic over dogmatic." },
  { title: "Reliability Patterns", desc: "Circuit breakers, retries with exponential backoff, health checks, and graceful degradation built into every service boundary." },
];

const Architecture = () => (
  <PageLayout>
    <Section>
      <p className="text-sm font-medium text-primary mb-2">Architecture</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Systems thinking.</h1>
       <a
            href="https://github.com/Ajithpal2007/TaskFlow/tree/main/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-surface-elevated font-medium hover:bg-surface-subtle transition-colors"
          >
            <Github size={18} /> docs on GitHub
          </a>
      <p className="text-lg text-muted-foreground max-w-2xl mb-16 leading-relaxed">
        Architecture isn't about tools — it's about trade-offs. Every decision balances
        scalability, maintainability, and speed of iteration. Here's how I think about building systems.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {principles.map((p) => (
          <div key={p.title} className="p-6 rounded-xl border border-border bg-surface-elevated hover-lift">
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section className="bg-surface-subtle">
      <p className="text-sm font-medium text-primary mb-2">Design Philosophy</p>
      <h2 className="text-3xl font-bold mb-8">Why decisions matter more than tools.</h2>
      <div className="max-w-2xl space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          The tools will change. React today, something else tomorrow. But the principles of
          good system design — separation of concerns, loose coupling, high cohesion,
          clear contracts — these remain constant.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          I design systems that are resilient to change. That means making boundaries explicit,
          keeping services small enough to reason about, and always having a clear answer to:
          "What happens when this fails?"
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Every architecture decision I make is documented with context: what we chose,
          what we rejected, and why. Because the "why" is what lets the next engineer
          (or future me) make better decisions.
        </p>
      </div>
    </Section>
  </PageLayout>
);

export default Architecture;
