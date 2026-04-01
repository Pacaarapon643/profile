"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-800/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-zinc-500"
          >
            <span>© {currentYear} Peem.</span>
            <span className="hidden sm:inline">Built with</span>
            <Heart className="hidden sm:inline w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span className="hidden sm:inline">&amp; Next.js</span>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {[
              { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
              { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:peem@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-zinc-500 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
