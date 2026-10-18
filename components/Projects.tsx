"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">Featured <span className="text-sky-400">Projects.</span></h2>
          <div className="h-1 w-20 bg-sky-400 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-sky-500/30 transition-all duration-500 flex flex-col ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* 🌟 Thumbnail / Image Placeholder */}
              <div className={`relative w-full overflow-hidden bg-[#0c0c0e] ${project.featured ? "h-64 md:h-80" : "h-48 md:h-56"}`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-900/40 via-[#09090b] to-purple-900/20">
                    <div className="flex flex-col items-center opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                      <span className="font-mono text-5xl text-sky-400 font-bold">&lt;/&gt;</span>
                      <span className="mt-2 text-xs font-mono text-slate-300 uppercase tracking-widest">{project.title}</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sky-400 text-xs font-semibold tracking-widest uppercase mb-2">
                      {project.featured ? "Latest Build" : "Project"}
                    </p>
                    <h3 className="text-2xl font-display font-semibold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        <FiGithub /> Code
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors">
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
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