"use client";

import { motion } from "framer-motion";
import { Rocket, Wrench, BookOpen, Sparkles } from "lucide-react";

interface LearningItem {
  icon: React.ElementType;
  title: string;
  description: string;
  tools: string[];
}

const learningItems: LearningItem[] = [
  {
    icon: Rocket,
    title: "Side Projects",
    description:
      "Building personal projects to experiment with new architectures and technologies beyond my day-to-day work.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Wrench,
    title: "DevOps & Cloud",
    description:
      "Exploring containerization, CI/CD pipelines, and cloud-native deployment strategies to level up my infrastructure skills.",
    tools: ["Docker", "Kubernetes", "GitHub Actions","GCP" ],
  },
  {
    icon: BookOpen,
    title: "System Design",
    description:
      "Studying distributed system patterns, scalability principles, and software architecture best practices.",
    tools: ["Microservices", "Message Queues", "Caching"],
  },
  {
    icon: Sparkles,
    title: "AI & Emerging Tech",
    description:
      "Experimenting with AI-powered tools and integrating intelligent features into modern web applications.",
    tools: ["LLMs", "RAG", "AI Agents"],
  },
];

export default function CurrentFocusSection() {
  return (
    <section id="current-focus" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-indigo-400 mb-2 tracking-wider uppercase">
            What I&apos;m Up To
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Currently exploring
            <br />
            <span className="text-zinc-500">new tools & technologies</span>
          </h2>
        </motion.div>

        {/* Status banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card glow-border rounded-2xl p-6 sm:p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="relative flex-shrink-0 mt-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
            <div>
              <p className="text-lg text-zinc-200 font-medium">
                I&apos;m currently working on personal projects to learn and
                experiment with new tools.
              </p>
              <p className="text-sm text-zinc-500 mt-2">
                As a developer, I believe continuous learning is the key to
                growth. I dedicate my free time to building side projects that
                push me out of my comfort zone and help me stay up-to-date with
                the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Learning cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {learningItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group glass-card glow-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                  <item.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-800/60 text-zinc-500 border border-zinc-700/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
