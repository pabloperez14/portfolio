import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const AmbientCursor: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState(true);

    // Only render the cursor on screens larger than mobile to avoid weird touch behaviors
    useEffect(() => {
        const checkDevice = () => {
            setIsDesktop(window.innerWidth > 768);
        };
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // Set initial position out of screen bounds
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    // Spring configuration for a "liquid", lagging smooth follow effect 
    const springConfig = { damping: 50, stiffness: 300, mass: 1 };

    // Apply spring physics to x/y motion
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseMove = (e: MouseEvent) => {
            // Offset by half the width/height (600px / 2 = 300px) to truly center the glow on the mouse tip
            mouseX.set(e.clientX - 300);
            mouseY.set(e.clientY - 300);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isDesktop, mouseX, mouseY]);

    if (!isDesktop) return null;

    return (
        <motion.div
            style={{ x, y, willChange: 'transform' }}
            className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/[0.07] mix-blend-screen blur-[120px] z-0"
        />
    );
};
