"use client";
import { motion } from "framer-motion";
import { FiCopy, FiDownload, FiCheck, FiTerminal } from "react-icons/fi";
import { useState } from "react";
import { profile } from "@/data/profile";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiJavascript, SiNodedotjs, SiFigma, SiGithub 
} from "react-icons/si";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techStack = [
    { icon: SiReact, color: "text-[#61DAFB]" },
    { icon: SiNextdotjs, color: "text-white" },
    { icon: SiTailwindcss, color: "text-[#38BDF8]" },
    { icon: SiTypescript, color: "text-[#3178C6]" },
    { icon: SiJavascript, color: "text-[#F7DF1E]" },
    { icon: SiNodedotjs, color: "text-[#339933]" },
    { icon: SiFigma, color: "text-[#F24E1E]" },
    { icon: SiGithub, color: "text-white" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 pt-36 lg:pt-28 pb-0 overflow-hidden">
      
      {/* Premium Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-6xl w-full relative z-10 flex-grow flex flex-col justify-center mt-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* 🌟 LEFT SIDE 🌟 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-400"></span>
              </span>
              Available for freelance
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-[80px] font-bold tracking-[-0.04em] text-white leading-[1.05] mb-6">
              Building <br />
              <span className="font-serif italic text-slate-400 pr-2">
                premium
              </span>{" "}
              web.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-400 max-w-md font-sans leading-relaxed mb-10">
              Hi, I'm <span className="text-white font-medium">{profile.name}</span>. A {profile.title} crafting digital experiences with a focus on clean design and robust engineering.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button 
                onClick={copyEmail}
                className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-lg w-full sm:w-auto text-sm"
              >
                {copied ? <FiCheck className="text-lg" /> : <FiCopy className="text-lg" />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
              
              <a 
                href={profile.resumeUrl} 
                download
                className="btn-glass flex items-center justify-center gap-2 px-6 py-3 rounded-lg w-full sm:w-auto text-sm"
              >
                <FiDownload className="text-lg" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* 🌟 RIGHT SIDE - Liquid Glass Code Editor 🌟 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0 mt-8 lg:mt-0 mb-16 lg:mb-0 group"
          >
            {/* Background Liquid Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-blue-500/10 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

            {/* Glass Editor Window */}
            <div className="relative bg-[#0c0c0e]/60 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
              
              {/* Glass Header */}
              <div className="bg-white/[0.03] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono">developer.ts</div>
                <div className="w-8"></div>
              </div>
              
              {/* Code Content */}
              <div className="p-5 sm:p-6 font-mono text-[12px] sm:text-sm leading-loose text-slate-300 overflow-x-auto">
                <p><span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">developer</span> <span className="text-[#56b6c2]">=</span> {"{"}</p>
                <p className="pl-4">name: <span className="text-[#98c379]">'Labib Saikot'</span>,</p>
                <p className="pl-4">role: <span className="text-[#98c379]">'Full Stack Dev'</span>,</p>
                <p className="pl-4">skills: [<span className="text-[#98c379]">'React'</span>, <span className="text-[#98c379]">'Next.js'</span>, <span className="text-[#98c379]">'UI/UX'</span>],</p>
                <p className="pl-4">hireable: <span className="text-[#d19a66]">function</span>() {"{"}</p>
                <p className="pl-8"><span className="text-[#c678dd]">return</span> (</p>
                <p className="pl-12">this.skills.length <span className="text-[#56b6c2]">&gt;=</span> <span className="text-[#d19a66]">3</span> <span className="text-[#56b6c2]">&amp;&amp;</span></p>
                <p className="pl-12">this.passion <span className="text-[#56b6c2]">===</span> <span className="text-[#98c379]">'high'</span></p>
                <p className="pl-8">);</p>
                <p className="pl-4">{"}"}</p>
                <p>{"};"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

            {/* 🌟 BOTTOM MARQUEE (With Fade effect) 🌟 */}
      <div className="relative w-full py-8 border-t border-white/5 overflow-hidden flex mt-auto">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none"></div>

        <div className="flex whitespace-nowrap animate-marquee items-center gap-16">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300">
              <tech.icon className={`text-2xl ${tech.color}`} />
              <span className="text-slate-400 font-mono text-xs uppercase tracking-widest hidden sm:block">
                {tech.icon.name.replace('Si', '')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}