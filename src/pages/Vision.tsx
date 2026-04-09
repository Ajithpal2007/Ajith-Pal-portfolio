import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";

const Vision = () => (
  <PageLayout>
    <Section>
      <p className="text-sm font-medium text-primary mb-2">Vision</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Building tools that <span className="text-gradient">compound.</span>
      </h1>
      <div className="max-w-2xl space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">Why TaskFlow exists</h2>
          <p className="text-muted-foreground leading-relaxed">
            Productivity software is broken. Teams are drowning in tools that don't talk to
            each other. Every new app adds another tab, another login, another silo.
            The information that should flow freely between tasks, docs, and conversations
            gets trapped in disconnected systems.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">The problem with current tools</h2>
          <p className="text-muted-foreground leading-relaxed">
            Most productivity platforms started as single-purpose tools and bolted on features later.
            The architecture shows. They're slow, fragile, and impossible to customize.
            Integration means "we have a Zapier connector." Scale means "we raised another round."
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">A different approach</h2>
          <p className="text-muted-foreground leading-relaxed">
            TaskFlow is built the other way around. Start with the architecture. Design for
            composability from day one. Make every feature a module that can scale, evolve,
            or be replaced independently. Build the platform that the tools run on,
            not just the tools themselves.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">The long-term vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            I want to build software that makes teams faster — not software that makes teams
            dependent. Products that are opinionated about workflows but flexible about
            implementation. Platforms that get better as they grow, not slower.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">What I'm looking for</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm looking to work with people who think in systems, who care about craft,
            and who believe that the best products come from the intersection of technical
            excellence and deep user empathy. Whether that's at a startup, in a founding
            team, or building independently.
          </p>
        </div>

        <div className="pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Let's talk <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Section>
  </PageLayout>
);

export default Vision;
