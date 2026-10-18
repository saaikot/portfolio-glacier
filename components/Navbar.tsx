"use client";
import { useState, useEffect } from "react";
import { profile, navLinks } from "@/data/profile";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center pt-4 sm:pt-6 px-4">
      <div 
        className={`flex items-center justify-between w-full max-w-4xl px-6 py-3 transition-all duration-500 rounded-full border ${
          scrolled || isOpen
            ? "bg-[#09090b]/90 backdrop-blur-xl border-white/10 shadow-lg" 
            : "bg-transparent border-transparent"
        }`}
      >
        <a href="#home" className="font-display font-bold text-xl tracking-tighter text-white">
          {profile.initials}<span className="text-sky-400">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-slate-400 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-[#09090b]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-white text-black px-5 py-3 rounded-xl text-center text-sm font-semibold"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}