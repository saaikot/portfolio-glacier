"use client";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { profile } from "@/data/profile";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">Let's build something <span className="text-sky-400">together.</span></h2>
          <div className="h-1 w-20 bg-sky-400 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8">
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <a href={`mailto:${profile.email}`} className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-sky-500/30 transition-all duration-300 w-full max-w-md">
                <div className="w-14 h-14 rounded-full bg-sky-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FiMail className="text-2xl text-sky-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">Email Me</p>
                  <p className="text-white font-semibold text-lg">{profile.email}</p>
                </div>
              </a>
            </div>

            {/* Social Links - বড় করা হয়েছে */}
            <div className="flex gap-4 pt-4">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/50 hover:-translate-y-2 transition-all duration-300">
                <FiGithub className="text-2xl" />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full glass flex items-center justify-center text-slate-300 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50 hover:-translate-y-2 transition-all duration-300">
                <FiLinkedin className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="glass p-8 sm:p-10 rounded-3xl border border-white/10 relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">Name</label>
                  <input type="text" required placeholder="Your Name" className="w-full bg-[#09090b]/50 border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">Email</label>
                  <input type="email" required placeholder="you@example.com" className="w-full bg-[#09090b]/50 border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-600" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">Message</label>
                <textarea required rows={5} placeholder="Tell me about your project..." className="w-full bg-[#09090b]/50 border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-600 resize-none"></textarea>
              </div>

              {/* Premium White Button */}
              <button type="submit" className="w-full group bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                {status === "success" ? (
                  <><FiCheckCircle className="text-xl" /> Message Sent!</>
                ) : (
                  <>Send Message <FiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}