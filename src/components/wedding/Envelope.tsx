import { motion } from "framer-motion";
import { useState } from "react";
import envelopeFull from "@/assets/envelope-full.png";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // Transition to main content after animation
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={handleClick}
      initial={{ opacity: 1 }}
      animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, delay: isOpening ? 1.2 : 0 }}
    >
      {/* Full frame envelope image */}
      <motion.img
        src={envelopeFull}
        alt="Sobre de invitación"
        className="w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={isOpening ? { scale: 1.5, y: -100 } : { scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Click instruction overlay */}
      <motion.div
        className="absolute bottom-12 left-0 right-0 text-center"
        animate={isOpening ? { opacity: 0 } : { opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: isOpening ? 0 : Infinity }}
      >
        <p 
          className="font-tertiary text-sm tracking-[0.25em] uppercase"
          style={{ color: 'hsl(147 21% 31%)' }}
        >
          Toca per obrir
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Envelope;
