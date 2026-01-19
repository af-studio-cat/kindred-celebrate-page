import { motion } from "framer-motion";
import { useState } from "react";
import envelopeBg from "@/assets/envelope-bg.png";
import namesText from "@/assets/names-text.png";

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
      }, 1800);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: '#e8e4df' }}
      initial={{ opacity: 1 }}
      animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, delay: isOpening ? 1.4 : 0 }}
    >
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <motion.div
        className="cursor-pointer"
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Main envelope container */}
        <div className="relative" style={{ perspective: "1500px" }}>
          
          {/* Envelope image - the actual visual */}
          <motion.div
            className="relative w-80 h-auto md:w-[500px]"
            animate={isOpening ? { rotateX: -5, y: -30 } : { rotateX: 0, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={envelopeBg} 
              alt="Sobre de invitación" 
              className="w-full h-auto drop-shadow-2xl"
            />
            
            {/* Animated inner card sliding out */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-[70%] bg-ivory rounded-sm shadow-lg overflow-hidden"
              style={{ 
                top: '15%',
                aspectRatio: '3/2',
              }}
              initial={{ y: 0, opacity: 1 }}
              animate={isOpening ? { y: -200, opacity: 1 } : { y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <img 
                src={namesText} 
                alt="Paula & Adrià" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Wax seal overlay */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ bottom: '38%' }}
              animate={isOpening ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ 
                  backgroundColor: 'hsl(147 21% 31%)',
                  boxShadow: '0 4px 20px rgba(63, 95, 78, 0.4)'
                }}
              >
                <span 
                  className="font-primary text-sm md:text-base tracking-wider"
                  style={{ color: 'hsl(45 30% 92%)' }}
                >
                  P&A
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Click instruction */}
        <motion.p
          className="text-center mt-12 font-tertiary text-sm tracking-[0.2em] uppercase"
          style={{ color: 'hsl(147 21% 31%)' }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Toca per obrir
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Envelope;
