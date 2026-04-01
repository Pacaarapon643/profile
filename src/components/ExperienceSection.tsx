"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Software Developer",
    company: "I-NET",
    period: "2025 — Present",
    description:
      "Started my career building WordPress sites and custom web solutions. Transitioned to React and modern JavaScript frameworks.",
    tags: ["Go", "JavaScript", "MongoDB", "Git", "Redis"],
  },
  {
    type: "education",
    title: "Co-operative education internship",
    company: "Michelin Siam Co Ltd (Hat-Yai Manufacturing Site)",
    period: "2024",
    description: "collecting production data to solve problems and power AI.",
    tags: [""],
  },
  {
    type: "education",
    title: "Bachelor of Engineer Computer",
    company: "Prince of Songkla University",
    period: "2021 — 2024",
    description:
      "Studied computer science fundamentals, algorithms, data structures, and software engineering principles.",
    tags: ["Algorithms", "Data Structures", "OOP", "Databases"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-indigo-400 mb-2 tracking-wider uppercase">
            Experience & Education
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            My journey
            <br />
            <span className="text-zinc-500">so far</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={`${item.title}-${item.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-[47px] flex justify-center">
                  <div className="relative">
                    <div className="w-[47px] h-[47px] rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                      {item.type === "work" ? (
                        <Briefcase className="w-5 h-5 text-indigo-400" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-purple-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className="glass-card glow-border rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-indigo-400 text-sm">{item.company}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 bg-zinc-800/60 px-3 py-1 rounded-full w-fit">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800/60 text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
