import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";

const About = () => (
  <PageLayout>
    <Section>
      <p className="text-sm font-medium text-primary mb-2">About</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Engineer. Builder. <span className="text-gradient">Systems thinker.</span>
      </h1>
      <div className="max-w-2xl space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          I'm a full-stack engineer who designs and builds production-grade SaaS platforms.
          My focus is on scalable architecture, real-time systems, and product-first
          engineering that delivers genuine value to users.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          I don't just write code — I architect solutions. Every system I build starts with
          understanding the problem deeply, designing for scale, and shipping with the kind
          of quality that compounds over time.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Currently building TaskFlow, a modular productivity platform that demonstrates
          how microservices, real-time collaboration, and thoughtful system design come
          together to create something meaningful.
        </p>
      </div>
    </Section>

    <Section className="bg-surface-subtle">
      <h2 className="text-2xl font-bold mb-8">What I focus on</h2>
      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
        {[
          { title: "Scalable Architecture", desc: "Microservices, event-driven systems, and infrastructure that grows with the product." },
          { title: "Product Engineering", desc: "Building features that users love with the technical foundations that engineers respect." },
          { title: "Real-time Systems", desc: "WebSocket infrastructure, live collaboration, and low-latency data synchronization." },
          { title: "Founding Mindset", desc: "Thinking about the business, the user, and the technology — all at once." },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-xl border border-border bg-surface-elevated">
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default About;
