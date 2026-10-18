"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;
    const mouse = { x: null as number | null, y: null as number | null };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "rgba(56, 189, 248, 0.5)"; // Glacier Blue
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            this.x -= dx / 30;
            this.y -= dy / 30;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 12000;
      if (numberOfParticles > 120) numberOfParticles = 120; // performance limit
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 0.5;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let directionX = Math.random() * 0.8 - 0.4;
        let directionY = Math.random() * 0.8 - 0.4;
        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);
            
          if (distance < 15000) {
            opacityValue = 1 - distance / 15000;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacityValue * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050B14]">
      {/* Background Aurora Blobs */}
      <motion.div
        animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-sky-500/10 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[120px]"
      />

      {/* Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />

      {/* Moving Grid Overlay */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" 
      />

      {/* Floating Developer Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[
          { text: "<div>", top: "15%", left: "10%", delay: 0 },
          { text: "const", top: "25%", left: "80%", delay: 2 },
          { text: "{...}", top: "60%", left: "15%", delay: 1 },
          { text: "</>", top: "70%", left: "85%", delay: 3 },
          { text: "npm install", top: "40%", left: "5%", delay: 4 },
          { text: "=>", top: "80%", left: "40%", delay: 1.5 },
          { text: "async", top: "10%", left: "50%", delay: 2.5 },
          { text: "await", top: "50%", left: "90%", delay: 0.5 },
          { text: "01", top: "35%", left: "75%", delay: 3.5 },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0.05, 0.3, 0.05], y: [-15, 15, -15] }}
            transition={{ duration: 6 + (i % 3) * 2, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            className="absolute font-mono text-sm sm:text-base text-sky-400/50"
            style={{ top: item.top, left: item.left }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}