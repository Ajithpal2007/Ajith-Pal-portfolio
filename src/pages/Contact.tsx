import { Github, Linkedin, Mail, FileText } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";

const links = [
  { 
    icon: <Mail size={20} />, 
    label: "Email", 
    value: "ajithpal343@gmail.com", 
    href: "mailto:ajithpal343@gmail.com" 
  },
  { 
    icon: <Github size={20} />, 
    label: "GitHub", 
    value: "Ajithpal2007", 
    href: "https://github.com/Ajithpal2007" 
  },
  { 
    icon: <Linkedin size={20} />, 
    label: "LinkedIn", 
    value: "linkedin.com/in/ajith-pal", 
    href: "https://www.linkedin.com/in/ajith-pal-ab6525350" 
  },
  { 
    icon: <FileText size={20} />, 
    label: "Resume", 
    value: "Download PDF", 
    // Paste your Uploadthing file URL here
    href: "https://ba16nmh63n.ufs.sh/f/eMd9rUYt0HxnWRot8GlqDuN6hvVxekJFXoBaZKQUlm8Ls3cO" 
  }
];


const Contact = () => (
  <PageLayout>
    <Section>
      <p className="text-sm font-medium text-primary mb-2">Contact</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's build together.</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-12">
        Open to founding opportunities, engineering roles, and ambitious collaborations.
        Reach out — I respond to every message.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 p-5 rounded-xl border border-border bg-surface-elevated hover-lift group"
          >
            <span className="text-primary">{l.icon}</span>
            <div>
              <div className="font-medium text-sm group-hover:text-primary transition-colors">{l.label}</div>
              <div className="text-xs text-muted-foreground">{l.value}</div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default Contact;
