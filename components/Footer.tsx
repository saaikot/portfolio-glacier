"use client";
import { useState, useEffect } from "react"; // 👈 নতুন ইমপোর্ট
import { profile } from "@/data/profile";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiHeart } from "react-icons/fi";

export default function Footer() {
  // 👇 ব্রাউজারে লোড হওয়ার পর সালটা সেট হবে
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-[#09090b] px-4 pb-8 pt-10 overflow-hidden">
      
      {/* 🌟 Liquid Background Glows 🌟 */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 🌟 Main Glass Card 🌟 */}
      <div className="relative mx-auto max-w-6xl rounded-[2rem] bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden z-10">
        
        {/* Glass Reflection */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>

        <div className="relative z-10 p-8 sm:p-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Brand */}
            <div className="space-y-4">
              <a href="#home" className="font-display font-bold text-3xl tracking-tighter text-white">
                {profile.initials}<span className="text-sky-400">.</span>
              </a>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                A Developer and UI/UX Designer crafting premium, user-centric web experiences from Dhaka, Bangladesh.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">Navigation</h4>
              <ul className="space-y-3">
                {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-sky-400 text-sm transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-[1px] bg-sky-400 transition-all duration-300 group-hover:w-4"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Socials */}
            <div>
              <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">Connect</h4>
              <div className="flex flex-col gap-3">
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center justify-between group bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/5 hover:border-white/20">
                  <span className="flex items-center gap-2"><FiGithub /> GitHub</span>
                  <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0A66C2] text-sm transition-colors flex items-center justify-between group bg-white/5 hover:bg-[#0A66C2]/10 px-4 py-2.5 rounded-xl border border-white/5 hover:border-[#0A66C2]/30">
                  <span className="flex items-center gap-2"><FiLinkedin /> LinkedIn</span>
                  <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-sky-400 text-sm transition-colors flex items-center justify-between group bg-white/5 hover:bg-sky-500/10 px-4 py-2.5 rounded-xl border border-white/5 hover:border-sky-500/30">
                  <span className="flex items-center gap-2"><FiMail /> Email</span>
                  <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm font-medium">
              {/* 👇 এখানে state এর year বসালাম */}
              © {year} {profile.name}. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              Built with <FiHeart className="text-sky-400" /> by {profile.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}