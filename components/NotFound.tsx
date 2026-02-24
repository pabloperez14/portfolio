import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505] selection:bg-white selection:text-black">
            {/* Texto "404" Gigante Estático de Fondo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-[40vw] font-bold font-sans text-white/[0.02] tracking-tighter leading-none select-none"
                >
                    404
                </motion.h1>
            </div>

            {/* Contenido Central */}
            <div className="z-10 flex flex-col items-center text-center px-6 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-24 h-24 mb-8"
                >
                    <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-neutral-900 relative z-10 flex items-center justify-center text-white/50">
                        <span className="font-mono text-xs">VOID</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex items-center justify-center gap-3 mb-6"
                >
                    <span className="h-px w-8 bg-neutral-700"></span>
                    <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">Error 404</span>
                    <span className="h-px w-8 bg-neutral-700"></span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white mb-6"
                >
                    Página no encontrada
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-sans text-lg text-neutral-500 mb-12"
                >
                    Lo sentimos, la página que estás buscando no existe o ha sido movida. Usa el botón de abajo para volver a la página principal.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    {/* Botón Magnético que envuelve una etiqueta button nativa para interactuar con navigate */}
                    <MagneticButton className="px-8 py-4 bg-white text-black font-medium text-sm rounded-xl hover:bg-neutral-200 shadow-lg shadow-white/10 flex items-center gap-3">
                        <button onClick={() => navigate('/')} className="flex items-center gap-3 focus:outline-none">
                            <Home size={18} />
                            Volver al inicio
                        </button>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
};
