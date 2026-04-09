import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Zap, Github } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Placeholder images - replace with actual paths
import placeholder1 from "@/assets/Complete Architecture.svg";
import placeholder2 from "@/assets/Domain & Data System.svg";
import placeholder3 from "@/assets/Standard Request Flow.svg";
import placeholder4 from "@/assets/API Gateway & Service.png";
import placeholder5 from "@/assets/API Gateway & Service1.png";



const ScreenshotFrame = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <div className="group">
    <div className="rounded-xl border border-border overflow-hidden bg-surface-elevated shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-border/50">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      <img src={src} alt={alt} loading="lazy" width={1920} height={1080} className="w-full h-auto" />
    </div>
    {caption && <p className="text-sm text-muted-foreground mt-3 text-center">{caption}</p>}
  </div>
);

const ApiGatewayEngine = () => (
  <PageLayout>
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-surface-subtle" />
      <div className="container relative z-10">
        <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={14} /> Back to projects
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated text-xs font-medium text-primary mb-6">
          <Zap size={12} /> SYSTEM DESIGN
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Gateway Engine</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-2">
          Custom API gateway with rate limiting, authentication middleware, request routing, and service mesh integration.
        </p>
      </div>
    </section>

    <Section>
      <p className="text-sm font-medium text-primary mb-2">Image Gallery</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Visual Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ScreenshotFrame src={placeholder1} alt="Complete Architecture" caption="Complete Architecture"  />
        <ScreenshotFrame src={placeholder2} alt="Domain & Data System" caption="Domain & Data System"  />
        <ScreenshotFrame src={placeholder3} alt="Standard Request Flow" caption="Standard Request Flow"  />
        <ScreenshotFrame src={placeholder4} alt="API Gateway & Service" caption="API Gateway & Service"  />
        <ScreenshotFrame src={placeholder5} alt="Auth Gateway & Service" caption="Auth Gateway & Service"  />
       
      </div>
    </Section>

    <Section className="bg-surface-subtle">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Explore the code & documentation</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/Ajithpal2007/TaskFlow/tree/main/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-surface-elevated font-medium hover:bg-surface-subtle transition-colors"
          >
            <Github size={18} /> View on GitHub
          </a>
          <a
            href="https://taskflow-8047ebcf.mintlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View Documentation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </Section>
  </PageLayout>
);

export default ApiGatewayEngine;