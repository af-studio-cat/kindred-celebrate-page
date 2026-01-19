import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import envelopeBg from "@/assets/envelope-bg.png";
import namesText from "@/assets/names-text.png";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [phase, setPhase] = useState<'closed' | 'opening' | 'revealing' | 'zooming'>('closed');
  const controls = useAnimation();

  const handleClick = async () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // Phase 1: Open flap
    setPhase('opening');
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Phase 2: Reveal card
    setPhase('revealing');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Phase 3: Zoom in
    setPhase('zooming');
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    onOpen();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={phase === 'zooming' ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {/* Stone/paper texture background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(145deg, #e8e4df 0%, #d9d5d0 50%, #e2deda 100%)',
        }}
      />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Soft vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.08) 100%)',
        }}
      />

      <motion.div
        className="cursor-pointer relative"
        onClick={handleClick}
        whileHover={phase === 'closed' ? { scale: 1.015 } : {}}
        animate={phase === 'zooming' ? { scale: 2.5, y: -100 } : { scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* 3D Envelope container */}
        <div 
          className="relative"
          style={{ 
            perspective: '1200px',
            perspectiveOrigin: '50% 30%',
          }}
        >
          {/* Envelope wrapper with tilt */}
          <motion.div
            className="relative"
            style={{ transformStyle: 'preserve-3d' }}
            animate={
              phase === 'opening' || phase === 'revealing' || phase === 'zooming'
                ? { rotateX: 5, rotateZ: 0 }
                : { rotateX: 0, rotateZ: -3 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Envelope dimensions */}
            <div className="relative w-72 h-52 md:w-[420px] md:h-[300px]">
              
              {/* Back of envelope (visible when flap opens) */}
              <div 
                className="absolute inset-0 rounded-sm"
                style={{ 
                  background: 'linear-gradient(180deg, #f5f2ed 0%, #ebe7e2 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1)',
                }}
              />

              {/* Interior with botanical illustrations */}
              <motion.div
                className="absolute inset-x-0 top-0 overflow-hidden rounded-t-sm"
                style={{ 
                  height: '55%',
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 60%, 0 100%)',
                }}
                animate={
                  phase === 'opening' || phase === 'revealing' || phase === 'zooming'
                    ? { opacity: 1 }
                    : { opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div 
                  className="w-full h-full"
                  style={{
                    background: '#f5f2ed',
                  }}
                >
                  {/* Botanical SVG illustrations */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 165" fill="none">
                    {/* Flower vase - left */}
                    <g stroke="hsl(147 21% 31%)" strokeWidth="1.2" fill="none">
                      <path d="M60,120 L70,120 L68,140 L62,140 Z" />
                      <path d="M55,100 Q65,80 75,100" />
                      <path d="M50,95 Q65,70 80,95" />
                      <circle cx="65" cy="75" r="8" />
                      <path d="M65,83 L65,100" />
                      <path d="M55,85 Q60,75 70,80" />
                      <path d="M75,90 Q68,78 60,85" />
                    </g>
                    
                    {/* Hanging vine - top right */}
                    <g stroke="hsl(147 21% 31%)" strokeWidth="1" fill="none">
                      <path d="M350,10 Q340,30 355,45 Q370,55 360,75" />
                      <path d="M355,20 L365,25" />
                      <path d="M350,35 L340,40" />
                      <path d="M360,50 L370,48" />
                      <circle cx="358" cy="65" r="4" />
                      <circle cx="365" cy="30" r="3" />
                    </g>

                    {/* Wedding cake - center */}
                    <g stroke="hsl(147 21% 31%)" strokeWidth="1.2" fill="none">
                      <rect x="185" y="100" width="50" height="25" rx="2" />
                      <rect x="195" y="80" width="30" height="20" rx="2" />
                      <rect x="203" y="65" width="14" height="15" rx="1" />
                      <path d="M185,108 Q210,115 235,108" />
                      <path d="M195,88 Q210,93 225,88" />
                      <circle cx="188" cy="118" r="2" fill="hsl(147 21% 31%)" />
                      <circle cx="198" cy="122" r="1.5" fill="hsl(147 21% 31%)" />
                      <circle cx="222" cy="120" r="2" fill="hsl(147 21% 31%)" />
                    </g>

                    {/* Bird on branch - right */}
                    <g stroke="hsl(147 21% 31%)" strokeWidth="1.2" fill="hsl(147 21% 31%)">
                      <ellipse cx="320" cy="95" rx="12" ry="8" />
                      <circle cx="328" cy="90" r="6" />
                      <path d="M333,89 L340,88 L333,91" fill="none" />
                      <path d="M310,100 L305,110" strokeWidth="1" fill="none" />
                      <path d="M315,100 L313,112" strokeWidth="1" fill="none" />
                    </g>

                    {/* Branch for bird */}
                    <g stroke="hsl(147 21% 31%)" strokeWidth="1" fill="none">
                      <path d="M280,105 Q300,100 340,95 Q360,92 380,100" />
                      <path d="M350,94 Q355,85 360,90" />
                      <path d="M365,96 L375,90" />
                    </g>

                    {/* Scattered flowers */}
                    <g stroke="hsl(147 21% 31%)" strokeWidth="0.8" fill="none">
                      <circle cx="100" cy="60" r="4" />
                      <circle cx="100" cy="60" r="2" fill="hsl(147 21% 31%)" />
                      <path d="M100,64 L100,80" />
                      
                      <circle cx="130" cy="90" r="3" />
                      <path d="M127,93 L123,105" />
                      
                      <circle cx="380" cy="120" r="4" />
                      <path d="M376,118 L370,115" />
                      <path d="M384,118 L390,115" />
                      
                      <path d="M40,80 Q45,70 50,80 Q55,90 60,80" />
                      <path d="M50,80 L50,95" />
                    </g>

                    {/* P&A monogram */}
                    <text 
                      x="210" 
                      y="55" 
                      textAnchor="middle" 
                      fontFamily="'Playfair Display', serif"
                      fontSize="16"
                      fill="hsl(147 21% 31%)"
                      fontWeight="500"
                    >
                      P&A
                    </text>

                    {/* Bottom florals */}
                    <g stroke="hsl(147 21% 31%)" strokeWidth="1" fill="none">
                      <path d="M150,150 Q160,130 175,140 Q180,145 170,155" />
                      <path d="M160,140 L155,155" />
                      <path d="M250,145 Q265,130 280,145" />
                      <path d="M265,135 L265,155" />
                      <circle cx="265" cy="130" r="5" />
                    </g>
                  </svg>
                </div>
              </motion.div>

              {/* Card sliding up */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 overflow-hidden"
                style={{ 
                  width: '75%',
                  aspectRatio: '1.5',
                  top: '20%',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderRadius: '2px',
                }}
                initial={{ y: 0 }}
                animate={
                  phase === 'revealing' || phase === 'zooming'
                    ? { y: -120 }
                    : phase === 'opening'
                    ? { y: -20 }
                    : { y: 0 }
                }
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <img 
                  src={namesText} 
                  alt="Paula & Adrià" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Front flap (triangular) - opens upward */}
              <motion.div
                className="absolute inset-x-0 top-0 origin-top"
                style={{ 
                  transformStyle: 'preserve-3d',
                  height: '55%',
                }}
                initial={{ rotateX: 0 }}
                animate={
                  phase === 'opening' || phase === 'revealing' || phase === 'zooming'
                    ? { rotateX: -175 }
                    : { rotateX: 0 }
                }
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <svg 
                  viewBox="0 0 420 165" 
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                >
                  <defs>
                    <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f5f2ed" />
                      <stop offset="100%" stopColor="#ebe7e2" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="0,0 420,0 210,165"
                    fill="url(#flapGradient)"
                    stroke="#e0dcd7"
                    strokeWidth="0.5"
                  />
                </svg>
                
                {/* Wax seal on flap */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{ bottom: '15%' }}
                  animate={
                    phase === 'opening' || phase === 'revealing' || phase === 'zooming'
                      ? { opacity: 0, scale: 0.5 }
                      : { opacity: 1, scale: 1 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                    style={{ 
                      background: 'linear-gradient(135deg, hsl(147 21% 35%) 0%, hsl(147 21% 28%) 100%)',
                      boxShadow: '0 4px 12px rgba(63, 95, 78, 0.4), inset 0 1px 2px rgba(255,255,255,0.1)',
                    }}
                  >
                    <span 
                      className="font-primary text-xs md:text-sm tracking-wider"
                      style={{ color: 'hsl(45 30% 92%)' }}
                    >
                      P&A
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Front bottom part of envelope */}
              <div 
                className="absolute inset-x-0 bottom-0 rounded-b-sm"
                style={{ 
                  height: '50%',
                  background: 'linear-gradient(180deg, #ebe7e2 0%, #e5e1dc 100%)',
                }}
              />

              {/* Left side flap */}
              <div 
                className="absolute left-0 top-0 h-full"
                style={{ 
                  width: '50%',
                  clipPath: 'polygon(0 0, 0 100%, 100% 50%)',
                  background: 'linear-gradient(90deg, #f0ece7 0%, #ebe7e2 100%)',
                }}
              />

              {/* Right side flap */}
              <div 
                className="absolute right-0 top-0 h-full"
                style={{ 
                  width: '50%',
                  clipPath: 'polygon(100% 0, 100% 100%, 0 50%)',
                  background: 'linear-gradient(-90deg, #f0ece7 0%, #ebe7e2 100%)',
                }}
              />

              {/* Subtle paper edge highlights */}
              <div 
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Click instruction */}
        <motion.p
          className="text-center mt-10 font-tertiary text-xs md:text-sm tracking-[0.25em] uppercase"
          style={{ color: 'hsl(147 21% 31%)' }}
          animate={
            phase === 'closed' 
              ? { opacity: [0.3, 0.6, 0.3] }
              : { opacity: 0 }
          }
          transition={{ duration: 2.5, repeat: phase === 'closed' ? Infinity : 0 }}
        >
          Toca per obrir
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Envelope;
