import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  MessageCircleMore,
  Code2,
  Zap,
  Brain,
  SquareChevronRight,
  ExternalLink,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Design Philosophy: Cyberpunk Minimalism
 * - Pure black background (#000000) with neon green accents (#00FF00)
 * - Monospace typography (JetBrains Mono) for headings
 * - Minimal decoration, maximum impact
 * - Sharp hover effects with green glow
 * - Terminal-style aesthetic reflecting developer passion
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xpqlworn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        setMessage("");
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Formspree Error:", data);
        if (data.errors) {
          setError(data.errors.map((e: any) => e.message).join(", "));
        } else {
          setError(
            "Failed to send message. Please ensure the Form ID is correct."
          );
        }
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setError(
        "Something went wrong. Please check your connection or try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between px-6 py-3 bg-background/40 backdrop-blur-xl border border-border/50 rounded-full shadow-2xl pointer-events-auto">
            <div className="text-xl font-black font-mono tracking-tighter text-accent drop-shadow-[0_0_8px_rgba(0,255,0,0.5)]">
              <Code2>GT</Code2>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex gap-8 text-md font-mono uppercase tracking-widest text-muted-foreground">
                <a
                  href="#projects"
                  className="hover:text-accent transition-all duration-300 hover:scale-105"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="hover:text-accent transition-all duration-300 hover:scale-105"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="hover:text-accent transition-all duration-300 hover:scale-105"
                >
                  Contact
                </a>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-8 h-8 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(/images/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container relative py-32 md:py-48">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold font-mono mb-4 ">
                  Girma Tesafaye
                </h1>
                <p className="text-xl text-muted-foreground">
                  Full-Stack Developer | Vibe Coder
                </p>
              </div>
              <p className="text-lg leading-relaxed text-foreground/90">
                I don't just code—I{" "}
                <span className="text-accent font-semibold">vibe code</span>{" "}
                🎧💻. With{" "}
                <span className="text-accent font-semibold">
                  AI as my co-pilot
                </span>
                , I explore modern tech, build clean solutions, and keep
                learning every day.
              </p>
              {/* Tech Stack Icons */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground font-mono mb-2">
                    Good At
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["React.js", "Node.js", "Express.js", "MongoDB"].map(
                      tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary border border-accent text-accent text-sm font-mono rounded"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono mb-2">
                    Still Learning
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "TypeScript",
                      "Supabase",
                      "Firebase",
                      "React Native [for mobile]",
                    ].map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary border border-accent/50 text-accent/70 text-sm font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/girmatesafaye"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/80 border border-accent gap-2 font-mono">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </a>
                <a href="https://t.me/Anasimos17">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10 font-mono gap-2"
                  >
                    <MessageCircleMore className="w-4 h-4" />
                    Telegram
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 border-2 border-accent/30 rounded-lg animate-pulse" />
                <div className="absolute inset-4 border border-accent/20 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Code2 className="w-20 h-20 text-accent mx-auto mb-4 opacity-50" />
                    <p className="text-sm text-muted-foreground font-mono">
                      Building the future
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold font-mono mb-4 ">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "LibraryConnect-Hawassa",
                description:
                  "A Hawassa-focused web app where readers can upload book covers and info, and others can message owners to borrow books directly.",
                tags: [
                  "React.js",
                  "Tailwind CSS",
                  "Express.js",
                  "Node.js",
                  "MongoDB",
                ],
                repo: "https://github.com/girmatesfaye/LibraryConnect-Hawassa",
                demo: "https://bookcircle-hawassa-frontend.onrender.com",
              },
              {
                title: "yeChinkAI",
                description:
                  "Too Shy to Ask for Money? Let Addis AI Ask For You yeChink uses AI to craft the perfect message when you need money from family. No awkwardness, no embarrassment—just respectful, effective communication.",
                tags: [
                  "React.js",
                  "Tailwind CSS",
                  "Express.js",
                  "Node.js",
                  "MongoDB",
                  "Addis AI",
                ],
                repo: "https://github.com/girmatesfaye/yeChinkAI",
                demo: "https://yechinkai-client.onrender.com",
              },
              {
                title: "CoffeeChat-AI",
                description:
                  "This project started as a fun idea for coffee hangouts with friends. I used Gemini to turn the “who pays?” question into a simple, interactive game.",
                tags: [
                  "React.js",
                  "Tailwind CSS",
                  "Express.js",
                  "Node.js",
                  "MongoDB",
                  "Gemini AI",
                ],
                repo: "https://github.com/girmatesfaye/CoffeeChat-AI",
                demo: "https://coffeechat-ai-client.onrender.com",
              },
              {
                title: "Vent-IS",
                description:
                  "Vent-IS is an anonymous app that helps my introverted classmates share thoughts freely through tagged posts and likes.",
                tags: [
                  "React.js",
                  "Tailwind CSS",
                  "Express.js",
                  "Node.js",
                  "MongoDB",
                ],
                repo: "https://github.com/girmatesfaye/Vent-IS",
                demo: "https://vent-is-frontend.onrender.com",
              },
              {
                title: "FaithLens",
                description:
                  "FaithLens explores mindful news consumption by connecting headlines with relevant Bible verses and personal reflections.",
                tags: [
                  "React.js",
                  "Tailwind CSS",
                  "Express.js",
                  "Node.js",
                  "MongoDB",
                ],
                repo: "https://github.com/girmatesfaye/FaithLens",
                demo: "https://faithlens-frontend.onrender.com",
              },
              {
                title: "RomeBurger",
                description:
                  "Full-stack restaurant/burger ordering application. Features real-time order management and user-friendly interface.",
                tags: ["React.js", "Tailwind CSS", "TypeScript", "Supabase"],
                repo: "https://github.com/girmatesfaye/RomeBurger",
                demo: "https://romeburger.vercel.app",
                isLocked: true,
                lockedMessage: "🚧 Under Construction 🚧",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="bg-secondary border-border hover:border-accent/50 transition-all duration-300 p-6 group relative overflow-hidden"
              >
                {/* Blur Overlay for Locked Projects */}
                {project.isLocked && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-accent font-mono text-sm font-bold text-center px-4 drop-shadow-[0_0_8px_rgba(0,255,0,0.5)]">
                      {project.lockedMessage || "Private Project"}
                    </p>
                  </div>
                )}

                <div
                  className={
                    project.isLocked ? "blur-[3px] transition-all" : ""
                  }
                >
                  <h3 className="text-xl font-bold font-mono mb-3 text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-background border border-accent/20 text-accent/80 font-mono rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.isLocked ? "#" : project.repo}
                      target={project.isLocked ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-mono ${project.isLocked ? "cursor-not-allowed opacity-50" : ""}`}
                      onClick={e => project.isLocked && e.preventDefault()}
                    >
                      <Github className="w-4 h-4" />
                      Repo
                    </a>
                    <a
                      href={project.isLocked ? "#" : project.demo}
                      target={project.isLocked ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-mono ${project.isLocked ? "cursor-not-allowed opacity-50" : ""}`}
                      onClick={e => project.isLocked && e.preventDefault()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section
        id="skills"
        className="py-24 border-t border-border bg-secondary/30"
      >
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold font-mono mb-4 ">
              Skills & Expertise
            </h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Code2,
                title: "Frontend Development",
                skills: [
                  "React.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Responsive Design",
                ],
              },
              {
                icon: Zap,
                title: "Backend Development",
                skills: [
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Supabase",
                  "RESTful APIs",
                ],
              },
              {
                icon: Brain,
                title: "Tools & Technologies",
                skills: ["Git", "Vite", "npm", "VS Code", "Antigravity"],
              },
              {
                icon: SquareChevronRight,
                title: "AI Weapons",
                skills: ["Google Gemini", "Github Copilot"],
              },
            ].map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                    <h3 className="text-lg font-bold font-mono text-foreground">
                      {skill.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {skill.skills.map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 border-t border-border bg-secondary/30"
      >
        <div className="container max-w-2xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold font-mono mb-4 ">Get In Touch</h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground font-mono mb-2">
                  Email
                </p>
                <a
                  href="mailto:girmaglory@gmail.com"
                  className="text-lg font-mono text-accent hover:text-accent/80"
                >
                  girmaglory@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono mb-2">
                  Phone
                </p>
                <a
                  href="tel:+251901653545"
                  className="text-lg font-mono text-accent hover:text-accent/80"
                >
                  +251 901 653 545
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono mb-2">
                  GitHub
                </p>
                <a
                  href="https://github.com/girmatesfaye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono text-accent hover:text-accent/80"
                >
                  https://github.com/girmatesfaye
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono mb-2">
                  My Telegram Channel
                </p>
                <a
                  href="https://t.me/girma_thoughts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-mono text-accent hover:text-accent/80"
                >
                  @girma_thoughts
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground font-mono mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground font-mono mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Your message here..."
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/80 font-mono"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitted && (
                <p className="text-accent text-sm text-center">
                  Message sent! I'll get back to you soon at{" "}
                  <span className="font-bold">girmaglory@gmail.com</span>.
                </p>
              )}
              {error && (
                <p className="text-destructive text-sm text-center font-mono">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="font-mono">
              © 2026 Girma Tesafaye. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/girmatesfaye"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://t.me/girma_thoughts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Telegram
              </a>
              <a
                href="mailto:girmaglory@gmail.com"
                className="hover:text-accent transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
