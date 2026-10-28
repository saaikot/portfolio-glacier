"use client";
import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

const experiences = [
  {
    type: "work",
    title: "Web Development",
    org: "Programming Hero",
    period: "2026 - Present",
    desc: "Learning and building full-stack web applications using the MERN stack and Next.js. Focused on writing clean, scalable code.",
    tags: ["React", "Next.js", "MongoDB"],
  },
  {
    type: "work",
    title: "Cyber Security Basics",
    org: "Udemy",
    period: "2025",
    desc: "Completed a foundational course on cybersecurity, understanding network vulnerabilities and basic defense mechanisms.",
    tags: ["Networking", "Security"],
  },
  {
    type: "education",
    title: "BSc in Computer Science",
    org: "Dhaka International University",
    period: "2022 - present",
    desc: "Pursuing Bachelor of Science in Computer Science. Gained strong foundation in algorithms, data structures, and software engineering.",
    tags: ["CGPA: 3"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            Experience & <span className="text-sky-400">Education.</span>
          </h2>
          <div className="h-1 w-20 bg-sky-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-white/10 -translate-x-1/2 md:translate-x-0"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center justify-between mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Glowing Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#09090b] border-2 border-sky-400 z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(56,189,248,0.8)]"></div>

              {/* Empty half for desktop alternating layout */}
              <div className="hidden md:block w-[45%]"></div>

              {/* Content Card */}
              <div className="w-[calc(100%-3rem)] ml-auto md:ml-0 md:w-[45%]">
                <div className="glass p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-colors relative group">
                  <div className="absolute top-6 -right-4 md:-right-4 w-8 h-8 rounded-full bg-[#09090b] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform z-20">
                    {exp.type === "work" ? <FiBriefcase size={14} className="text-sky-400" /> : <FiBookOpen size={14} className="text-sky-400" />}
                  </div>
                  <span className="text-sky-400 font-mono text-xs tracking-wider mb-2 block">{exp.period}</span>
                  <h3 className="text-xl font-display font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">@ {exp.org}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}