"use client";
import { motion } from "framer-motion";
import { FiMapPin, FiCode, FiAward, FiBriefcase } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">About <span className="text-sky-400">Me.</span></h2>
          <div className="h-1 w-20 bg-sky-400 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6 text-slate-400 text-base sm:text-lg leading-relaxed">
            <p>I'm a passionate <strong className="text-white">Developer</strong> and <strong className="text-white">UI/UX Enthusiast</strong> who loves building clean, fast, and premium web experiences.</p>
            <p>Currently exploring the intersection of design and code, I specialize in building full-stack applications using Next.js, React, and modern CSS frameworks. My goal is to create digital products that not only function flawlessly but also look stunning.</p>
            <p>Beyond coding, I have a strong interest in Cyber Security basics and love editing videos and playing sports in my free time.</p>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: FiCode, label: "Development", value: "Programming Hero" },
              { icon: FiAward, label: "Security", value: "Cyber Security" },
              { icon: FiBriefcase, label: "Projects", value: "4+ Completed" },
              { icon: FiMapPin, label: "Location", value: "Dhaka, Bangladesh" },
            ].map((stat, i) => (
              // 👇 কার্ডগুলোর প্যাডিং এবং হাইট বাড়ানো হলো
              <div key={i} className="glass p-8 rounded-2xl flex flex-col items-start justify-center border border-white/5 hover:border-sky-500/30 hover:-translate-y-1 transition-all duration-300 min-h-[160px]">
                <stat.icon className="text-sky-400 text-3xl mb-4" />
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">{stat.label}</p>
                <p className="text-white font-medium text-base">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}