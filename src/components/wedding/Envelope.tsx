import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import envelopeFull from "@/assets/envelope-full.png";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [phase, setPhase] = useState<'closed' | 'flap-opening' | 'card-rising' | 'transitioning'>('closed');

  const handleClick = () => {
    if (phase !== 'closed') return;
    
    // Phase 1: Flap opens
    setPhase('flap-opening');
    
    // Phase 2: Card rises
    setTimeout(() => {
      setPhase('card-rising');
    }, 800);
    
    // Phase 3: Transition to content
    setTimeout(() => {
      setPhase('transitioning');
    }, 1800);
    
    // Complete transition
    setTimeout(() => {
      onOpen();
    }, 2800);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={handleClick}
      style={{ 
        background: 'linear-gradient(180deg, hsl(43 30% 92%) 0%, hsl(43 25% 88%) 100%)',
        perspective: '1200px'
      }}
      initial={{ opacity: 1 }}
      animate={phase === 'transitioning' ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Envelope Container */}
      <motion.div
        className="relative"
        style={{ 
          width: 'min(90vw, 500px)', 
          height: 'min(70vh, 380px)',
          transformStyle: 'preserve-3d'
        }}
        initial={{ scale: 1, y: 0, rotateX: 0 }}
        animate={
          phase === 'card-rising' 
            ? { scale: 1.05, y: -20, rotateX: 5 }
            : phase === 'transitioning'
            ? { scale: 1.8, y: -150, rotateX: 0 }
            : { scale: 1, y: 0, rotateX: 0 }
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Envelope Back/Body */}
        <div 
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, hsl(43 35% 85%) 0%, hsl(43 30% 80%) 100%)',
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.25), 0 10px 30px -10px rgba(0,0,0,0.15)'
          }}
        >
          {/* Envelope texture */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Card inside envelope */}
        <motion.div
          className="absolute left-1/2 bottom-0 w-[85%] h-[90%] rounded-t-lg overflow-hidden"
          style={{
            transform: 'translateX(-50%)',
            background: 'linear-gradient(180deg, hsl(147 21% 35%) 0%, hsl(147 21% 28%) 100%)',
            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)'
          }}
          initial={{ y: '85%' }}
          animate={
            phase === 'card-rising' || phase === 'transitioning'
              ? { y: '5%' }
              : { y: '85%' }
          }
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          {/* Botanical illustrations on card */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <svg viewBox="0 0 200 150" className="w-full h-full opacity-40">
              {/* Olive branch left */}
              <g stroke="hsl(43 30% 80%)" fill="none" strokeWidth="1.5">
                <path d="M20 75 Q60 60, 100 75" />
                <ellipse cx="35" cy="68" rx="8" ry="4" transform="rotate(-20 35 68)" />
                <ellipse cx="50" cy="64" rx="8" ry="4" transform="rotate(-15 50 64)" />
                <ellipse cx="65" cy="62" rx="8" ry="4" transform="rotate(-10 65 62)" />
                <ellipse cx="80" cy="65" rx="8" ry="4" transform="rotate(-5 80 65)" />
              </g>
              {/* Olive branch right */}
              <g stroke="hsl(43 30% 80%)" fill="none" strokeWidth="1.5">
                <path d="M180 75 Q140 60, 100 75" />
                <ellipse cx="165" cy="68" rx="8" ry="4" transform="rotate(20 165 68)" />
                <ellipse cx="150" cy="64" rx="8" ry="4" transform="rotate(15 150 64)" />
                <ellipse cx="135" cy="62" rx="8" ry="4" transform="rotate(10 135 62)" />
                <ellipse cx="120" cy="65" rx="8" ry="4" transform="rotate(5 120 65)" />
              </g>
              {/* Center text area */}
              <text 
                x="100" 
                y="80" 
                textAnchor="middle" 
                fill="hsl(43 30% 90%)" 
                fontSize="12"
                fontFamily="serif"
                letterSpacing="4"
              >
                P & A
              </text>
            </svg>
          </div>
        </motion.div>

        {/* Envelope flap (triangular top) */}
        <motion.div
          className="absolute top-0 left-0 right-0 origin-top"
          style={{
            height: '55%',
            transformStyle: 'preserve-3d',
            zIndex: 10
          }}
          initial={{ rotateX: 0 }}
          animate={
            phase === 'flap-opening' || phase === 'card-rising' || phase === 'transitioning'
              ? { rotateX: -180 }
              : { rotateX: 0 }
          }
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Flap front (visible when closed) */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              background: 'linear-gradient(180deg, hsl(43 35% 88%) 0%, hsl(43 30% 82%) 100%)',
              backfaceVisibility: 'hidden',
              boxShadow: '0 5px 20px -5px rgba(0,0,0,0.15)'
            }}
          >
            {/* Texture overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
              }}
            />
            
            {/* Wax seal */}
            <motion.div
              className="absolute left-1/2 top-[65%] -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle at 30% 30%, hsl(147 21% 40%) 0%, hsl(147 21% 28%) 70%, hsl(147 21% 22%) 100%)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.1)'
              }}
              animate={phase === 'closed' ? { scale: [1, 1.02, 1] } : { scale: 1 }}
              transition={{ duration: 2, repeat: phase === 'closed' ? Infinity : 0, ease: 'easeInOut' }}
            >
              <span 
                className="font-script text-lg"
                style={{ color: 'hsl(43 30% 90%)' }}
              >
                P&A
              </span>
            </motion.div>
          </div>

          {/* Flap back (visible when open) */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              background: 'linear-gradient(180deg, hsl(43 25% 75%) 0%, hsl(43 30% 78%) 100%)',
              backfaceVisibility: 'hidden',
              transform: 'rotateX(180deg)'
            }}
          />
        </motion.div>

        {/* Envelope front lip (bottom triangle overlay) */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '45%',
            clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
            background: 'linear-gradient(0deg, hsl(43 35% 87%) 0%, hsl(43 30% 83%) 100%)',
            zIndex: 5
          }}
        >
          {/* Texture */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
          />
        </div>
      </motion.div>

      {/* Click instruction */}
      <motion.div
        className="absolute bottom-16 left-0 right-0 text-center"
        animate={phase === 'closed' ? { opacity: [0.4, 0.8, 0.4] } : { opacity: 0 }}
        transition={{ duration: 2, repeat: phase === 'closed' ? Infinity : 0 }}
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
