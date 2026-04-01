"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: { name: string; level: number; color: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 50, color: "from-indigo-500 to-blue-500" },
      { name: "TypeScript", level: 80, color: "from-blue-500 to-cyan-500" },
      { name: "Tailwind CSS", level: 50, color: "from-cyan-500 to-teal-500" },
      { name: "HTML / CSS", level: 50, color: "from-teal-500 to-emerald-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 80, color: "from-emerald-500 to-green-500" },
      { name: "Go (Golang)", level: 90, color: "from-green-500 to-lime-500" },
      { name: "REST API / GraphQL", level: 80, color: "from-lime-500 to-yellow-500" },
      { name: "PostgreSQL / MongoDB", level: 80, color: "from-yellow-500 to-orange-500" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git / Gitlab", level: 90, color: "from-orange-500 to-red-500" },
      { name: "Docker / K8s", level: 50, color: "from-red-500 to-pink-500" },
      { name: "AWS / GCP", level: 20, color: "from-pink-500 to-purple-500" },
      { name: "CI/CD Pipelines", level: 30, color: "from-purple-500 to-indigo-500" },
    ],
  },
];

const techLogos = [
  "React", "Next.js", "TypeScript", "Node.js", "Go",
  "PostgreSQL", "MongoDB", "Docker", "GCP", "Tailwind",
  "GraphQL", "Redis", "Git", "Linux",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-6">
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
            Skills & Technologies
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            My tech toolbox
            <br />
            <span className="text-zinc-500">& expertise levels</span>
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glass-card glow-border rounded-2xl p-8"
            >
              <h3 className="text-lg font-semibold mb-6 gradient-text inline-block">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.15 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500 font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-zinc-800/80 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: catIndex * 0.15 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden py-4"
        >
          <div className="flex gap-6 animate-[scroll_30s_linear_infinite]">
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="flex-shrink-0 px-6 py-3 rounded-full glass-card text-sm text-zinc-400 whitespace-nowrap transition-colors hover:text-white"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
