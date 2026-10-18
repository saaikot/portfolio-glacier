"use client";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiFigma, SiNodedotjs } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">My <span className="text-sky-400">Skills.</span></h2>
          <div className="h-1 w-20 bg-sky-400 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[220px]">
          {/* Big Card - Frontend */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 glass rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border border-white/5 hover:border-sky-500/30"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all"></div>
            <div>
              <p className="text-sky-400 text-sm font-semibold tracking-wider uppercase mb-2">Core Stack</p>
              <h3 className="text-3xl font-display text-white mb-4">Frontend Development</h3>
              {/* 👇 ফাঁকা জায়গা পূরণ করার জন্য বুলেট পয়েন্ট */}
              <ul className="space-y-2 text-sm text-slate-400 mb-6">
                <li className="flex items-center gap-2"><span className="text-sky-400">▹</span> Scalable Component Architecture</li>
                <li className="flex items-center gap-2"><span className="text-sky-400">▹</span> State Management (Redux, Context)</li>
                <li className="flex items-center gap-2"><span className="text-sky-400">▹</span> API Integration & Performance</li>
              </ul>
            </div>
            {/* 👇 আইকনগুলো আরো বড় করলাম */}
            <div className="flex gap-4 sm:gap-6 text-5xl sm:text-6xl text-slate-300 mt-4 opacity-80 group-hover:opacity-100 transition-opacity">
               <SiReact className="hover:text-sky-400 transition-colors cursor-pointer" />
               <SiNextdotjs className="hover:text-white transition-colors cursor-pointer" />
               <SiTailwindcss className="hover:text-cyan-400 transition-colors cursor-pointer" />
               <SiTypescript className="hover:text-blue-500 transition-colors cursor-pointer" />
            </div>
          </motion.div>

          {/* Small Card - Backend */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-3xl p-6 flex flex-col justify-between border border-white/5 hover:border-emerald-500/30 group min-h-[180px]"
          >
            <SiNodedotjs className="text-5xl text-emerald-500 group-hover:scale-110 transition-transform" />
            <p className="text-white font-medium text-lg">Backend APIs</p>
          </motion.div>

          {/* Small Card - UI/UX */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-3xl p-6 flex flex-col justify-between border border-white/5 hover:border-pink-500/30 group min-h-[180px]"
          >
            <SiFigma className="text-5xl text-pink-400 group-hover:scale-110 transition-transform" />
            <p className="text-white font-medium text-lg">UI/UX Design</p>
          </motion.div>

          {/* Wide Card - Design to Code */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 glass rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between border border-white/5 hover:border-sky-500/30 gap-4 min-h-[180px]"
          >
            <div>
              <p className="text-white font-medium text-lg">Pixel Perfect</p>
              <p className="text-sm text-slate-400">Figma to Code conversion</p>
            </div>
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-[#09090b] flex items-center justify-center text-xs font-bold text-white z-30">UX</div>
              <div className="w-12 h-12 rounded-full bg-sky-900 border-2 border-[#09090b] flex items-center justify-center text-xs font-bold text-sky-400 z-20">UI</div>
              <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-[#09090b] flex items-center justify-center text-xs font-bold text-white z-10">&lt;/&gt;</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}