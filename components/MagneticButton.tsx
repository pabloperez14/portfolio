import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = "", href }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;

        // Get button dimensions and position relative to viewport
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate the center of the button
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Move the button slightly towards the mouse (magnetic pull effect)
        // The divisor controls the strength (higher = weaker pull)
        setPosition({ x: middleX / 3, y: middleY / 3 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const innerContent = (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`relative inline-flex items-center justify-center transition-colors ${className}`}
        >
            {children}
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block relative">
                {innerContent}
            </a>
        );
    }

    return (
        <div className="inline-block relative">
            {innerContent}
        </div>
    );
};
