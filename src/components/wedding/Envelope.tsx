import { motion } from "framer-motion";
import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setTimeout(() => {
        onOpen();
      }, 1500);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, delay: isOpening ? 1.2 : 0 }}
    >
      {/* Decorative flourishes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-10 left-10 w-32 h-32 text-primary opacity-10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M10,50 Q25,20 50,50 T90,50" />
          <circle cx="20" cy="30" r="8" />
          <circle cx="80" cy="70" r="6" />
        </svg>
        <svg
          className="absolute bottom-10 right-10 w-32 h-32 text-primary opacity-10 rotate-180"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M10,50 Q25,20 50,50 T90,50" />
          <circle cx="20" cy="30" r="8" />
          <circle cx="80" cy="70" r="6" />
        </svg>
      </div>

      <motion.div
        className="cursor-pointer perspective-1000"
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        animate={isOpening ? { y: -50 } : { y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Envelope Container */}
        <div className="relative w-72 h-48 md:w-96 md:h-64" style={{ perspective: "1000px" }}>
          {/* Back of envelope */}
          <div className="absolute inset-0 bg-envelope-back rounded-sm shadow-lg" />

          {/* Envelope body with inner card visible when open */}
          <motion.div
            className="absolute inset-x-4 top-8 bottom-4 bg-ivory rounded-sm flex items-center justify-center"
            initial={{ y: 0 }}
            animate={isOpening ? { y: -80 } : { y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="text-center p-4">
              <p className="font-primary text-sm tracking-[0.2em] uppercase" style={{ color: 'hsl(147 21% 31%)' }}>Paula & Adrià</p>
              <p className="font-primary text-xs mt-2 tracking-[0.15em] opacity-60" style={{ color: 'hsl(147 21% 31%)' }}>20 · 06 · 2026</p>
            </div>
          </motion.div>

          {/* Front bottom part of envelope */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-envelope-front rounded-b-sm" />

          {/* Envelope flap (triangular) */}
          <motion.div
            className="absolute inset-x-0 top-0 origin-top"
            style={{ transformStyle: "preserve-3d" }}
            initial={{ rotateX: 0 }}
            animate={isOpening ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <svg
              viewBox="0 0 100 50"
              className="w-full"
              preserveAspectRatio="none"
              style={{ height: "50%" }}
            >
              <polygon
                points="0,0 100,0 50,50"
                fill="hsl(40, 25%, 90%)"
                stroke="hsl(40, 20%, 85%)"
                strokeWidth="0.5"
              />
            </svg>
            {/* Wax seal */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2"
              animate={isOpening ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: 'hsl(147 21% 31%)' }}>
                <span className="font-primary text-xs md:text-sm" style={{ color: 'hsl(45 60% 94%)' }}>P&A</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Side triangles for 3D effect */}
          <div className="absolute left-0 top-0 w-0 h-0 border-t-[96px] md:border-t-[128px] border-r-[144px] md:border-r-[192px] border-t-transparent border-r-envelope-front opacity-80" />
          <div className="absolute right-0 top-0 w-0 h-0 border-t-[96px] md:border-t-[128px] border-l-[144px] md:border-l-[192px] border-t-transparent border-l-envelope-front opacity-80" />
        </div>

        {/* Click instruction */}
        <motion.p
          className="text-center mt-10 text-functional-caps"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Fes clic per obrir
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Envelope;