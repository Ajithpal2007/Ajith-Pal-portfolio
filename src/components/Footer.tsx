import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-sm font-semibold text-gradient">AP</Link>
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Built with intent.
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/Ajithpal2007" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/ajith-pal-ab6525350" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:ajithpal343@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
