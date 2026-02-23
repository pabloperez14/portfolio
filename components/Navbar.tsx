import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-[#050505]/60 border-b border-white/5 text-white">
            <a href="#hero" className="font-poppins text-sm font-bold tracking-widest hover:text-neutral-300 transition-colors uppercase">
                Inicio
            </a>
            <div className="flex gap-8">
                <a href="#about" className="font-poppins text-base hover:text-neutral-300 transition-colors">Quién soy</a>
                <a href="#projects" className="font-poppins text-base hover:text-neutral-300 transition-colors">Proyectos</a>
                <a href="#contact" className="font-poppins text-base hover:text-neutral-300 transition-colors">Contacto</a>
            </div>
        </nav>
    );
};
