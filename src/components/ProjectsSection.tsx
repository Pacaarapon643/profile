"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./icons";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Morklaichan",
    description:
      "A full-featured telemedicine platform enabling real-time video consultations, appointment scheduling, and secure health records management for clinics and hospitals.",
    tags: ["angular", "Go", "MongoDB", "Redis"],
    image: "/images/morklaichan.png",
    // github: "https://github.com/peem-paweenanan/morklaichan",
    // live: "https://example.com",
    featured: true,
  },
  {
    title: "Health Scoring",
    description:
      "This project is developed for the Thai Health Promotion Foundation (ThaiHealth) to serve as a national database for image archiving and data analysis. It includes an integrated dashboard designed to track and evaluate performance against standardized criteria and benchmarks.",
    tags: ["Vue.js", "Go", "MongoDB", "Redis"],
    image: "/images/healthscoring.png",
    // github: "https://github.com",
    // live: "https://example.com",
    featured: true,
  },
  {
    title: "Telemed Embassy",
    description:
      "TelemedEmbassy Redefining cross-border healthcare for Thai citizens abroad. A premium digital gateway connecting Thai nationals worldwide with specialized medical experts through a secure, embassy-integrated network for seamless virtual consultations and appointment management.",
    tags: ["angular", "Go", "MongoDB", "Redis"],
    image: "/images/telemedembassy.png",
    // github: "https://github.com",
    featured: true,
  },
  {
    title: "Warewolf Game",
    description:
      "Warewolf Game is a web application that allows users to play the game of Warewolf online.",
    tags: ["React", "Go", "PostgreSQL", "Redis", "WebSocket"],
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    // github: "https://github.com",
    // live: "https://example.com",
  },
  {
    title: "Cooming soon",
    description: "this project is coomming soon",
    tags: ["Next.js", "Go", "PostgreSQL", "Ai"],
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    github: "https://github.com",
  },
  // {
  //   title: "Weather Forecast PWA",
  //   description:
  //     "Progressive web app providing hyperlocal weather forecasts with beautiful data visualizations and offline support.",
  //   tags: ["React", "PWA", "D3.js", "OpenWeather API"],
  //   image: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  //   github: "https://github.com",
  //   live: "https://example.com",
  // },
];

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-32 px-6">
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
            Selected Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured projects
            <br />
            <span className="text-zinc-500">I&apos;ve worked on</span>
          </h2>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group glass-card glow-border rounded-3xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project image/gradient */}
                <div
                  className="relative h-64 md:h-auto min-h-[280px] overflow-hidden bg-cover bg-center"
                  style={{
                    background: project.image.startsWith("/")
                      ? `url('${project.image}') center/cover no-repeat`
                      : project.image,
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs text-white/80">
                    <Star className="w-3 h-3" /> Featured
                  </div>
                </div>

                {/* Project info */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl font-semibold mb-8 text-zinc-400"
        >
          Other Projects
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card glow-border rounded-2xl p-6 flex flex-col"
            >
              {/* Mini gradient preview */}
              <div
                className="h-2 rounded-full mb-6 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: project.image.startsWith("/")
                    ? `url('${project.image}') center/cover no-repeat`
                    : project.image,
                }}
              />
              <h4 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800/60 text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-zinc-800/50">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
