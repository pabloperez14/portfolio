import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505] selection:bg-white selection:text-black">
      {/* --- GOOGLE STYLE AURORA MESH BACKGROUND --- */}
      {/* Absolute positioning, massive blur, and pure CSS transform animations to ensure 0 cost on mobile GPU */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep blue orb spinning slowly */}
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
        />
        {/* Purple/Violet orb counter-spinning */}
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/10 blur-[120px] mix-blend-screen"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ willChange: "transform" }}
        />
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-5xl px-6">
        <motion.div style={{ y: yText, opacity: opacityText }} className="flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-32 h-32 md:w-40 md:h-40 mb-10"
          >
            <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-neutral-900 relative z-10">
              <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600 font-mono text-xs">
                PROXIMAMENTE
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y: yText, opacity: opacityText }} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-neutral-700"></span>
              <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">Backend Architecture</span>
              <span className="h-px w-8 bg-neutral-700"></span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-sans font-medium tracking-tight text-white mb-6 leading-[1.1]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block"
              >
                Pablo González Pérez
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-sans text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Transformo complejidad en sistemas eficientes. <br />
              Me gusta pensar soluciones robusta a problemas complejos.
            </motion.p>

            {/* Social Links Updated (Google Magnetic Interactions) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-6 justify-center mt-10 relative z-20"
            >
              <MagneticButton href="https://github.com/pabloperez14" className="p-4 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm text-neutral-400 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-colors shadow-lg shadow-black/50">
                <Github size={20} />
              </MagneticButton>
              <MagneticButton href="https://www.linkedin.com/in/pablo-gonzalez-perez" className="p-4 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm text-neutral-400 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-colors shadow-lg shadow-black/50">
                <Linkedin size={20} />
              </MagneticButton>
              <MagneticButton href="mailto:pablodev1422@gmail.com" className="p-4 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm text-neutral-400 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-colors shadow-lg shadow-black/50">
                <Mail size={20} />
              </MagneticButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};