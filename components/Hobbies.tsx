"use client";
import { motion } from "framer-motion";
import { FaGamepad, FaFutbol, FaMusic, FaFilm, FaVideo } from "react-icons/fa";
import { GiCricketBat, GiShuttlecock } from "react-icons/gi"; // 👈 নতুন সঠিক আইকন

const hobbies = [
  { icon: FaGamepad, label: "Gaming" },
  { icon: FaFutbol, label: "Football" },
  { icon: GiCricketBat, label: "Cricket" }, // 👈 ক্রিকেট ব্যাট
  { icon: GiShuttlecock, label: "Badminton" }, // 👈 ব্যাডমিন্টন কক
  { icon: FaMusic, label: "Listening Music" },
  { icon: FaFilm, label: "Movies & Series" },
  { icon: FaVideo, label: "Video Editing" },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Beyond <span className="text-sky-400">Code.</span>
          </h2>
          <div className="h-1 w-16 bg-sky-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass px-5 py-3 rounded-full flex items-center gap-3 border border-white/5 hover:border-sky-500/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-default group"
            >
              <hobby.icon className="text-sky-400 text-xl group-hover:scale-110 transition-transform" />
              <span className="text-slate-300 font-medium text-sm tracking-wide">
                {hobby.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}