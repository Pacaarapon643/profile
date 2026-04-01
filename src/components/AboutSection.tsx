"use client";

import { motion } from "framer-motion";
import { User, Calendar, MapPin, Coffee } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "1+", icon: Calendar },
  { label: "Projects Built", value: "5+", icon: Coffee },
  { label: "Happy Clients", value: "3+", icon: User },
  { label: "Based in", value: "Thailand", icon: MapPin },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
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
            About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Passionate about building
            <br />
            <span className="text-zinc-500">exceptional digital products</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-zinc-400 leading-relaxed">
              I&apos;m a back-end developer with a passion for creating beautiful,
              functional, and user-first digital experiences. With expertise in modern web
              technologies, I bring ideas from concept to production with clean,
              maintainable code.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              My journey in tech started with a curiosity about how things 
              work and has evolved into developing scalable applications for enterprises. I use{" "}
              <span className="text-zinc-200">Next.js </span>for frontend ,{" "}
              <span className="text-zinc-200">Go </span> and <span className="text-zinc-200">Node.js </span> for backend development,
              and have a basic understanding of cloud infrastructure,
              including Docker and foundational Kubernetes knowledge.
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source, or sipping coffee at a local café.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="glass-card glow-border rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-5 h-5 mx-auto mb-3 text-indigo-400" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
