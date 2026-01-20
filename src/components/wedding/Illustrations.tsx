// Hand-drawn style illustrations in forest green style
// Some with fine lines, others with more fill - inspired by rustic countryside motifs

interface IllustrationProps {
  className?: string;
}

// Wine glass and bottle - toasting style
export const WineGlasses = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left hand with glass */}
    <path
      d="M15 70 Q10 65 12 55 Q14 45 18 40 Q22 35 25 38 Q28 41 26 50 Q24 58 28 65 L32 72"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M28 65 L28 55 Q28 45 35 40 Q42 35 42 45 L42 55"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <ellipse cx="35" cy="40" rx="8" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M35 55 L35 65" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="35" cy="67" rx="6" ry="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Wine fill */}
    <path
      d="M29 48 Q35 52 41 48 L41 45 Q35 48 29 45 Z"
      fill="currentColor"
      opacity="0.6"
    />
    
    {/* Right hand with glass */}
    <path
      d="M105 70 Q110 65 108 55 Q106 45 102 40 Q98 35 95 38 Q92 41 94 50 Q96 58 92 65 L88 72"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M92 65 L92 55 Q92 45 85 40 Q78 35 78 45 L78 55"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <ellipse cx="85" cy="40" rx="8" ry="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M85 55 L85 65" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="85" cy="67" rx="6" ry="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Wine fill */}
    <path
      d="M79 48 Q85 52 91 48 L91 45 Q85 48 79 45 Z"
      fill="currentColor"
      opacity="0.6"
    />
  </svg>
);

// Single wine bottle with detailed sketch
export const WineBottle = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 60 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 10 L25 25 Q20 30 18 45 L18 100 Q18 108 30 108 Q42 108 42 100 L42 45 Q40 30 35 25 L35 10"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <ellipse cx="30" cy="10" rx="5" ry="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M22 50 L38 50" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <path d="M20 70 L40 70" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <rect x="23" y="55" width="14" height="20" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.7" />
  </svg>
);

// Olive branch - fine line
export const OliveBranch = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 150 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 30 Q40 25 75 30 Q110 35 140 30"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
    {/* Leaves */}
    <ellipse cx="30" cy="25" rx="8" ry="4" stroke="currentColor" strokeWidth="0.8" fill="none" transform="rotate(-20 30 25)" />
    <ellipse cx="45" cy="32" rx="8" ry="4" stroke="currentColor" strokeWidth="0.8" fill="none" transform="rotate(15 45 32)" />
    <ellipse cx="60" cy="26" rx="8" ry="4" stroke="currentColor" strokeWidth="0.8" fill="none" transform="rotate(-25 60 26)" />
    <ellipse cx="80" cy="33" rx="8" ry="4" stroke="currentColor" strokeWidth="0.8" fill="none" transform="rotate(20 80 33)" />
    <ellipse cx="95" cy="27" rx="8" ry="4" stroke="currentColor" strokeWidth="0.8" fill="none" transform="rotate(-15 95 27)" />
    <ellipse cx="115" cy="32" rx="8" ry="4" stroke="currentColor" strokeWidth="0.8" fill="none" transform="rotate(10 115 32)" />
    {/* Olives */}
    <circle cx="50" cy="28" r="3" fill="currentColor" opacity="0.4" />
    <circle cx="90" cy="30" r="3" fill="currentColor" opacity="0.4" />
  </svg>
);

// Bird in flight - fine sketch
export const Bird = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 80 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 25 Q15 15 30 20 Q40 22 45 25 Q50 22 60 20 Q75 15 75 25"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M30 20 Q35 25 45 25 Q55 25 60 20"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <circle cx="38" cy="24" r="1.5" fill="currentColor" opacity="0.7" />
    <path d="M42 25 L48 24" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

// Floral cluster - more filled style
export const FloralCluster = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Center flower - filled */}
    <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.5" />
    <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.8" />
    
    {/* Petals around */}
    <ellipse cx="50" cy="35" rx="5" ry="10" fill="currentColor" opacity="0.3" />
    <ellipse cx="65" cy="50" rx="10" ry="5" fill="currentColor" opacity="0.3" />
    <ellipse cx="50" cy="65" rx="5" ry="10" fill="currentColor" opacity="0.3" />
    <ellipse cx="35" cy="50" rx="10" ry="5" fill="currentColor" opacity="0.3" />
    
    {/* Small flowers */}
    <circle cx="30" cy="30" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.6" />
    
    <circle cx="70" cy="30" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="70" cy="30" r="2" fill="currentColor" opacity="0.6" />
    
    <circle cx="70" cy="70" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="70" cy="70" r="2" fill="currentColor" opacity="0.6" />
    
    <circle cx="30" cy="70" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="30" cy="70" r="2" fill="currentColor" opacity="0.6" />
    
    {/* Leaves */}
    <path d="M20 50 Q10 45 15 35" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <path d="M80 50 Q90 45 85 35" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <path d="M50 80 Q45 90 35 85" stroke="currentColor" strokeWidth="0.8" fill="none" />
  </svg>
);

// Decorative leaf - fine line
export const LeafSprig = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 60 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 75 Q30 50 30 25 Q30 10 35 5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M30 20 Q20 15 15 20 Q20 25 30 20" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.2" />
    <path d="M30 30 Q40 25 45 30 Q40 35 30 30" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.2" />
    <path d="M30 40 Q20 35 15 40 Q20 45 30 40" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.2" />
    <path d="M30 50 Q40 45 45 50 Q40 55 30 50" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.2" />
    <path d="M30 60 Q20 55 15 60 Q20 65 30 60" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.2" />
  </svg>
);

// Deer/rabbit silhouette - filled
export const AnimalSilhouette = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rabbit shape */}
    <path
      d="M25 45 Q20 40 22 30 Q25 20 35 22 Q40 10 38 5 M42 5 Q40 10 45 22 Q55 20 58 30 Q60 40 55 45 Q50 50 40 50 Q30 50 25 45"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      opacity="0.4"
    />
    <circle cx="32" cy="28" r="1.5" fill="currentColor" opacity="0.8" />
  </svg>
);

// Simple flourish divider
export const FlourishDivider = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 200 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 15 Q25 5 50 15 T100 15 T150 15 T200 15"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
      opacity="0.5"
    />
    <circle cx="100" cy="15" r="3" fill="currentColor" opacity="0.4" />
    <path d="M85 15 L90 12 M85 15 L90 18" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    <path d="M115 15 L110 12 M115 15 L110 18" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
  </svg>
);

// Botanical corner decoration
export const CornerFloral = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main branch */}
    <path
      d="M5 95 Q15 80 25 70 Q40 55 55 45 Q70 35 85 30 Q95 28 100 25"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    {/* Leaves and flowers along the branch */}
    <ellipse cx="20" cy="75" rx="8" ry="4" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.2" transform="rotate(-45 20 75)" />
    <ellipse cx="35" cy="60" rx="8" ry="4" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.2" transform="rotate(-40 35 60)" />
    <circle cx="50" cy="48" r="5" fill="currentColor" opacity="0.3" />
    <circle cx="50" cy="48" r="2" fill="currentColor" opacity="0.6" />
    <ellipse cx="65" cy="38" rx="8" ry="4" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.2" transform="rotate(-30 65 38)" />
    <circle cx="80" cy="32" r="4" fill="currentColor" opacity="0.3" />
    <circle cx="80" cy="32" r="1.5" fill="currentColor" opacity="0.6" />
    
    {/* Small details */}
    <circle cx="28" cy="68" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="42" cy="52" r="2" fill="currentColor" opacity="0.5" />
  </svg>
);

// Dancing figures
export const DancingFigures = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Figure 1 */}
    <circle cx="30" cy="15" r="5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M30 20 L30 45" stroke="currentColor" strokeWidth="1.2" />
    <path d="M30 25 L20 35" stroke="currentColor" strokeWidth="1.2" />
    <path d="M30 25 L40 32" stroke="currentColor" strokeWidth="1.2" />
    <path d="M30 45 L22 60" stroke="currentColor" strokeWidth="1.2" />
    <path d="M30 45 L38 58" stroke="currentColor" strokeWidth="1.2" />
    
    {/* Figure 2 */}
    <circle cx="70" cy="15" r="5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M70 20 L70 45" stroke="currentColor" strokeWidth="1.2" />
    <path d="M70 25 L60 32" stroke="currentColor" strokeWidth="1.2" />
    <path d="M70 25 L80 35" stroke="currentColor" strokeWidth="1.2" />
    <path d="M70 45 L62 58" stroke="currentColor" strokeWidth="1.2" />
    <path d="M70 45 L78 60" stroke="currentColor" strokeWidth="1.2" />
    
    {/* Connecting element - hands holding */}
    <path d="M40 32 Q50 28 60 32" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

// Heart with flowers
export const FloralHeart = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 70 Q10 45 10 25 Q10 10 25 10 Q35 10 40 20 Q45 10 55 10 Q70 10 70 25 Q70 45 40 70"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      opacity="0.15"
    />
    {/* Small flowers on heart */}
    <circle cx="25" cy="25" r="3" fill="currentColor" opacity="0.4" />
    <circle cx="55" cy="25" r="3" fill="currentColor" opacity="0.4" />
    <circle cx="40" cy="35" r="4" fill="currentColor" opacity="0.5" />
  </svg>
);

// NEW ILLUSTRATIONS - Inspired by rustic countryside style

// Picnic basket with wine and bread
export const PicnicBasket = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Basket base */}
    <path
      d="M15 45 L20 75 Q50 80 80 75 L85 45"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.15"
    />
    {/* Basket weave lines */}
    <path d="M20 50 L80 50" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    <path d="M18 55 L82 55" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    <path d="M17 60 L83 60" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    <path d="M18 65 L82 65" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    <path d="M19 70 L81 70" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    {/* Handle */}
    <path
      d="M25 45 Q50 15 75 45"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Wine bottle peeking out */}
    <path
      d="M55 45 L55 30 Q55 25 58 25 L62 25 Q65 25 65 30 L65 45"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      opacity="0.3"
    />
    {/* Bread/baguette */}
    <ellipse cx="40" cy="40" rx="12" ry="5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2" transform="rotate(-15 40 40)" />
    {/* Small flowers */}
    <circle cx="30" cy="38" r="3" fill="currentColor" opacity="0.4" />
    <path d="M28 35 L26 32 M30 35 L30 31 M32 35 L34 32" stroke="currentColor" strokeWidth="0.6" />
  </svg>
);

// Wheat bouquet with flowers
export const WheatBouquet = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 80 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stems */}
    <path d="M40 95 Q35 80 30 60 Q28 40 25 20" stroke="currentColor" strokeWidth="1" />
    <path d="M40 95 Q40 75 40 50 Q40 30 40 15" stroke="currentColor" strokeWidth="1" />
    <path d="M40 95 Q45 80 50 60 Q52 40 55 20" stroke="currentColor" strokeWidth="1" />
    {/* Wheat heads */}
    <ellipse cx="25" cy="18" rx="3" ry="8" fill="currentColor" opacity="0.4" />
    <ellipse cx="40" cy="13" rx="3" ry="8" fill="currentColor" opacity="0.4" />
    <ellipse cx="55" cy="18" rx="3" ry="8" fill="currentColor" opacity="0.4" />
    {/* Wheat details */}
    <path d="M22 15 L20 12 M25 12 L25 8 M28 15 L30 12" stroke="currentColor" strokeWidth="0.6" />
    <path d="M37 10 L35 7 M40 8 L40 4 M43 10 L45 7" stroke="currentColor" strokeWidth="0.6" />
    <path d="M52 15 L50 12 M55 12 L55 8 M58 15 L60 12" stroke="currentColor" strokeWidth="0.6" />
    {/* Small flowers */}
    <circle cx="32" cy="45" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="32" cy="45" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="48" cy="42" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="48" cy="42" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="38" cy="55" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="38" cy="55" r="1" fill="currentColor" opacity="0.6" />
    {/* Ribbon bow */}
    <path
      d="M35 75 Q30 72 28 75 Q30 78 35 75 M45 75 Q50 72 52 75 Q50 78 45 75"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      opacity="0.3"
    />
    <circle cx="40" cy="75" r="2" fill="currentColor" opacity="0.5" />
  </svg>
);

// Straw hat with ribbon
export const StrawHat = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Hat brim */}
    <ellipse cx="50" cy="55" rx="45" ry="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15" />
    {/* Hat crown */}
    <path
      d="M25 55 Q25 35 35 25 Q50 15 65 25 Q75 35 75 55"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.2"
    />
    {/* Hat weave lines */}
    <path d="M30 50 Q50 45 70 50" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <path d="M28 45 Q50 40 72 45" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <path d="M30 40 Q50 35 70 40" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <path d="M35 35 Q50 30 65 35" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    {/* Ribbon */}
    <path
      d="M25 50 Q50 48 75 50"
      stroke="currentColor"
      strokeWidth="3"
      opacity="0.4"
    />
    {/* Ribbon bow */}
    <path
      d="M78 50 Q88 45 90 50 Q88 55 78 50"
      stroke="currentColor"
      strokeWidth="1"
      fill="currentColor"
      opacity="0.3"
    />
    <path d="M90 50 L95 55 M90 50 L95 48" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

// Wheelbarrow with flowers
export const Wheelbarrow = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 120 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Wheelbarrow body */}
    <path
      d="M25 55 L15 45 L15 35 L75 30 L80 55 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.15"
    />
    {/* Wheel */}
    <circle cx="15" cy="60" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="15" cy="60" r="3" fill="currentColor" opacity="0.4" />
    {/* Handles */}
    <path d="M80 45 L110 55" stroke="currentColor" strokeWidth="2" />
    <path d="M80 55 L110 65" stroke="currentColor" strokeWidth="2" />
    {/* Legs */}
    <path d="M50 55 L50 70" stroke="currentColor" strokeWidth="1.5" />
    <path d="M65 55 L68 70" stroke="currentColor" strokeWidth="1.5" />
    {/* Flowers overflowing */}
    <circle cx="30" cy="28" r="6" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    <circle cx="30" cy="28" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="45" cy="25" r="7" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    <circle cx="45" cy="25" r="2.5" fill="currentColor" opacity="0.6" />
    <circle cx="60" cy="26" r="5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    <circle cx="60" cy="26" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="38" cy="22" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="52" cy="20" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
    {/* Leaves */}
    <path d="M25 32 Q20 28 22 22" stroke="currentColor" strokeWidth="0.8" />
    <path d="M68 30 Q75 25 72 20" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

// Wine bottle and glasses
export const WineSet = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Wine bottle */}
    <path
      d="M45 15 L45 25 Q38 32 36 45 L36 90 Q36 95 50 95 Q64 95 64 90 L64 45 Q62 32 55 25 L55 15"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.3"
    />
    <ellipse cx="50" cy="15" rx="5" ry="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.4" />
    {/* Label */}
    <rect x="40" y="55" width="20" height="25" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
    {/* Glass 1 */}
    <path
      d="M15 95 L15 85 L18 70 Q18 60 25 55 Q32 60 32 70 L35 85 L35 95"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <ellipse cx="25" cy="55" rx="8" ry="4" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M20 65 Q25 68 30 65" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.3" />
    {/* Glass 2 */}
    <path
      d="M70 95 L70 85 L73 70 Q73 60 80 55 Q87 60 87 70 L90 85 L90 95"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <ellipse cx="80" cy="55" rx="8" ry="4" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M75 65 Q80 68 85 65" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.3" />
  </svg>
);

// Vegetables - artichoke and carrot
export const Vegetables = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Artichoke */}
    <ellipse cx="30" cy="50" rx="18" ry="22" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.2" />
    {/* Artichoke leaves pattern */}
    <path d="M20 35 Q30 30 40 35" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <path d="M18 42 Q30 38 42 42" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <path d="M15 50 Q30 46 45 50" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <path d="M18 58 Q30 54 42 58" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <path d="M20 65 Q30 62 40 65" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    {/* Artichoke stem */}
    <path d="M30 72 L30 78" stroke="currentColor" strokeWidth="2" />
    
    {/* Carrot */}
    <path
      d="M70 25 Q85 35 80 70 Q78 75 75 70 Q72 60 68 45 Q65 30 70 25"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      opacity="0.25"
    />
    {/* Carrot lines */}
    <path d="M68 35 L78 38" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    <path d="M67 45 L79 48" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    <path d="M68 55 L78 57" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    {/* Carrot leaves */}
    <path d="M72 25 Q68 15 65 10" stroke="currentColor" strokeWidth="1" />
    <path d="M74 25 Q75 12 78 8" stroke="currentColor" strokeWidth="1" />
    <path d="M76 25 Q82 18 88 15" stroke="currentColor" strokeWidth="1" />
    <path d="M65 10 Q62 8 60 10 Q63 12 65 10" stroke="currentColor" strokeWidth="0.6" fill="currentColor" opacity="0.3" />
    <path d="M78 8 Q76 5 74 7 Q76 10 78 8" stroke="currentColor" strokeWidth="0.6" fill="currentColor" opacity="0.3" />
    <path d="M88 15 Q90 12 88 10 Q86 13 88 15" stroke="currentColor" strokeWidth="0.6" fill="currentColor" opacity="0.3" />
  </svg>
);

// Dove with olive branch - solid style
export const Dove = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Dove body */}
    <path
      d="M30 50 Q20 45 15 35 Q12 25 25 25 Q35 25 40 35 Q45 30 55 30 Q65 30 70 40 Q75 50 65 55 Q55 60 45 55 Q35 55 30 50"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.5"
    />
    {/* Wing */}
    <path
      d="M35 40 Q25 30 15 25 Q10 35 20 42 Q30 48 35 45"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
      opacity="0.3"
    />
    {/* Tail */}
    <path
      d="M65 50 Q75 48 85 42 Q80 50 75 55 Q70 55 65 52"
      fill="currentColor"
      opacity="0.4"
    />
    {/* Eye */}
    <circle cx="28" cy="38" r="2" fill="currentColor" opacity="0.8" />
    {/* Beak */}
    <path d="M18 38 L12 40 L18 42" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.6" />
    {/* Olive branch in beak */}
    <path d="M12 40 Q5 42 0 45" stroke="currentColor" strokeWidth="0.8" />
    <ellipse cx="5" cy="42" rx="4" ry="2" stroke="currentColor" strokeWidth="0.6" fill="currentColor" opacity="0.3" transform="rotate(-20 5 42)" />
    <ellipse cx="2" cy="45" rx="3" ry="1.5" stroke="currentColor" strokeWidth="0.6" fill="currentColor" opacity="0.3" transform="rotate(10 2 45)" />
  </svg>
);

// Fish - solid style
export const Fish = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fish body */}
    <path
      d="M15 25 Q30 10 55 15 Q75 18 85 25 Q75 32 55 35 Q30 40 15 25"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.5"
    />
    {/* Tail */}
    <path
      d="M85 25 Q95 15 100 10 Q95 25 100 40 Q95 35 85 25"
      fill="currentColor"
      opacity="0.4"
    />
    {/* Eye */}
    <circle cx="30" cy="24" r="4" fill="currentColor" opacity="0.2" />
    <circle cx="30" cy="24" r="2" fill="currentColor" opacity="0.8" />
    {/* Gills */}
    <path d="M40 20 Q42 25 40 30" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <path d="M43 21 Q45 25 43 29" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    {/* Fin */}
    <path d="M55 15 Q60 8 65 12 Q62 18 55 18" fill="currentColor" opacity="0.3" />
  </svg>
);

// Sun - solid style
export const Sun = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sun center */}
    <circle cx="40" cy="40" r="15" fill="currentColor" opacity="0.5" />
    <circle cx="40" cy="40" r="10" fill="currentColor" opacity="0.2" />
    {/* Sun rays */}
    <path d="M40 20 L37 8 L40 5 L43 8 L40 20" fill="currentColor" opacity="0.5" />
    <path d="M40 60 L37 72 L40 75 L43 72 L40 60" fill="currentColor" opacity="0.5" />
    <path d="M20 40 L8 37 L5 40 L8 43 L20 40" fill="currentColor" opacity="0.5" />
    <path d="M60 40 L72 37 L75 40 L72 43 L60 40" fill="currentColor" opacity="0.5" />
    {/* Diagonal rays */}
    <path d="M26 26 L16 16 L14 20 L18 22 L26 26" fill="currentColor" opacity="0.4" />
    <path d="M54 26 L64 16 L66 20 L62 22 L54 26" fill="currentColor" opacity="0.4" />
    <path d="M26 54 L16 64 L20 66 L22 62 L26 54" fill="currentColor" opacity="0.4" />
    <path d="M54 54 L64 64 L60 66 L58 62 L54 54" fill="currentColor" opacity="0.4" />
  </svg>
);

// Sunset over water
export const Sunset = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sun */}
    <path
      d="M30 45 Q30 25 50 25 Q70 25 70 45"
      fill="currentColor"
      opacity="0.5"
    />
    {/* Sun rays */}
    <path d="M50 20 L48 10 L50 5 L52 10 L50 20" fill="currentColor" opacity="0.4" />
    <path d="M30 30 L22 22 L20 25 L25 28 L30 30" fill="currentColor" opacity="0.4" />
    <path d="M70 30 L78 22 L80 25 L75 28 L70 30" fill="currentColor" opacity="0.4" />
    {/* Water waves */}
    <path d="M0 50 Q15 45 30 50 T60 50 T90 50 L100 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M5 55 Q20 50 35 55 T65 55 T95 55" stroke="currentColor" strokeWidth="1" opacity="0.6" fill="none" />
    <path d="M10 60 Q25 55 40 60 T70 60 T100 60" stroke="currentColor" strokeWidth="0.8" opacity="0.4" fill="none" />
  </svg>
);

// Vertical flower branch
export const FlowerBranch = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 40 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main stem */}
    <path
      d="M20 115 Q18 90 20 70 Q22 50 20 30 Q18 15 22 5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    {/* Flowers */}
    <circle cx="22" cy="10" r="4" fill="currentColor" opacity="0.4" />
    <circle cx="22" cy="10" r="1.5" fill="currentColor" opacity="0.7" />
    
    <circle cx="18" cy="25" r="3" fill="currentColor" opacity="0.4" />
    <circle cx="18" cy="25" r="1" fill="currentColor" opacity="0.7" />
    
    <circle cx="24" cy="40" r="4" fill="currentColor" opacity="0.4" />
    <circle cx="24" cy="40" r="1.5" fill="currentColor" opacity="0.7" />
    
    <circle cx="16" cy="55" r="3" fill="currentColor" opacity="0.4" />
    <circle cx="16" cy="55" r="1" fill="currentColor" opacity="0.7" />
    
    <circle cx="22" cy="70" r="4" fill="currentColor" opacity="0.4" />
    <circle cx="22" cy="70" r="1.5" fill="currentColor" opacity="0.7" />
    
    {/* Small leaves */}
    <path d="M20 20 Q12 18 10 22 Q14 24 20 20" fill="currentColor" opacity="0.25" />
    <path d="M20 35 Q28 33 30 37 Q26 39 20 35" fill="currentColor" opacity="0.25" />
    <path d="M20 50 Q12 48 10 52 Q14 54 20 50" fill="currentColor" opacity="0.25" />
    <path d="M20 65 Q28 63 30 67 Q26 69 20 65" fill="currentColor" opacity="0.25" />
    <path d="M20 80 Q12 78 10 82 Q14 84 20 80" fill="currentColor" opacity="0.25" />
    <path d="M20 95 Q28 93 30 97 Q26 99 20 95" fill="currentColor" opacity="0.25" />
  </svg>
);

// Olive branch - filled bold style
export const OliveBranchBold = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main branch */}
    <path
      d="M5 30 Q30 25 50 30 Q70 35 95 28"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Leaves - solid */}
    <ellipse cx="20" cy="22" rx="10" ry="5" fill="currentColor" opacity="0.5" transform="rotate(-30 20 22)" />
    <ellipse cx="35" cy="35" rx="12" ry="6" fill="currentColor" opacity="0.5" transform="rotate(20 35 35)" />
    <ellipse cx="50" cy="24" rx="10" ry="5" fill="currentColor" opacity="0.5" transform="rotate(-25 50 24)" />
    <ellipse cx="68" cy="36" rx="11" ry="5" fill="currentColor" opacity="0.5" transform="rotate(15 68 36)" />
    <ellipse cx="82" cy="25" rx="10" ry="5" fill="currentColor" opacity="0.5" transform="rotate(-20 82 25)" />
    {/* Olives */}
    <ellipse cx="28" cy="28" rx="4" ry="5" fill="currentColor" opacity="0.6" />
    <ellipse cx="58" cy="32" rx="4" ry="5" fill="currentColor" opacity="0.6" />
    <ellipse cx="88" cy="30" rx="4" ry="5" fill="currentColor" opacity="0.6" />
  </svg>
);

// NEW ILLUSTRATIONS - Mediterranean botanical and wedding themed

// Large olive tree - for corners and edges
export const OliveTree = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 150 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Trunk - twisted organic shape */}
    <path
      d="M70 200 Q65 180 68 160 Q72 140 65 120 Q58 100 70 85 Q68 75 75 65"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <path
      d="M80 200 Q85 180 82 160 Q78 140 85 120 Q92 100 80 85 Q82 75 75 65"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    {/* Foliage clusters */}
    <ellipse cx="75" cy="50" rx="35" ry="25" fill="currentColor" opacity="0.3" />
    <ellipse cx="45" cy="65" rx="28" ry="20" fill="currentColor" opacity="0.25" />
    <ellipse cx="105" cy="60" rx="30" ry="22" fill="currentColor" opacity="0.25" />
    <ellipse cx="60" cy="35" rx="25" ry="18" fill="currentColor" opacity="0.2" />
    <ellipse cx="95" cy="38" rx="22" ry="16" fill="currentColor" opacity="0.2" />
    <ellipse cx="75" cy="25" rx="20" ry="12" fill="currentColor" opacity="0.15" />
    {/* Olive details */}
    <circle cx="55" cy="55" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="90" cy="48" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="70" cy="40" r="2.5" fill="currentColor" opacity="0.5" />
    <circle cx="42" cy="70" r="2.5" fill="currentColor" opacity="0.5" />
    <circle cx="108" cy="55" r="2.5" fill="currentColor" opacity="0.5" />
  </svg>
);

// Mediterranean pine tree silhouette
export const PineTree = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Trunk */}
    <path
      d="M48 180 L48 120 Q47 100 50 80"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <path
      d="M52 180 L52 120 Q53 100 50 80"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    {/* Crown - umbrella shape typical of Mediterranean pines */}
    <path
      d="M10 75 Q20 60 35 55 Q50 35 65 55 Q80 60 90 75 Q75 78 50 78 Q25 78 10 75"
      fill="currentColor"
      opacity="0.4"
    />
    <path
      d="M15 68 Q30 50 50 45 Q70 50 85 68 Q65 72 50 72 Q35 72 15 68"
      fill="currentColor"
      opacity="0.3"
    />
    <path
      d="M25 58 Q40 40 50 38 Q60 40 75 58 Q60 62 50 62 Q40 62 25 58"
      fill="currentColor"
      opacity="0.25"
    />
  </svg>
);

// Lavender bush
export const LavenderBush = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 80 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stems */}
    <path d="M20 95 Q22 70 18 45" stroke="currentColor" strokeWidth="1" />
    <path d="M30 95 Q28 65 32 35" stroke="currentColor" strokeWidth="1" />
    <path d="M40 95 Q40 60 40 30" stroke="currentColor" strokeWidth="1" />
    <path d="M50 95 Q52 65 48 35" stroke="currentColor" strokeWidth="1" />
    <path d="M60 95 Q58 70 62 45" stroke="currentColor" strokeWidth="1" />
    {/* Flower heads */}
    <ellipse cx="18" cy="35" rx="4" ry="12" fill="currentColor" opacity="0.4" />
    <ellipse cx="32" cy="25" rx="4" ry="14" fill="currentColor" opacity="0.4" />
    <ellipse cx="40" cy="20" rx="5" ry="15" fill="currentColor" opacity="0.5" />
    <ellipse cx="48" cy="25" rx="4" ry="14" fill="currentColor" opacity="0.4" />
    <ellipse cx="62" cy="35" rx="4" ry="12" fill="currentColor" opacity="0.4" />
    {/* Flower details */}
    <circle cx="18" cy="28" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="32" cy="18" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="40" cy="12" r="2" fill="currentColor" opacity="0.7" />
    <circle cx="48" cy="18" r="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="62" cy="28" r="1.5" fill="currentColor" opacity="0.6" />
  </svg>
);

// Single daisy flower
export const Daisy = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 60 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stem */}
    <path d="M30 80 Q28 60 30 40" stroke="currentColor" strokeWidth="1.2" />
    {/* Leaves */}
    <path d="M30 65 Q20 62 18 55 Q22 58 30 60" fill="currentColor" opacity="0.25" />
    <path d="M30 55 Q40 52 42 45 Q38 48 30 50" fill="currentColor" opacity="0.25" />
    {/* Petals */}
    <ellipse cx="30" cy="25" rx="4" ry="12" fill="currentColor" opacity="0.3" />
    <ellipse cx="30" cy="35" rx="4" ry="12" fill="currentColor" opacity="0.3" transform="rotate(180 30 30)" />
    <ellipse cx="18" cy="30" rx="4" ry="12" fill="currentColor" opacity="0.3" transform="rotate(90 30 30)" />
    <ellipse cx="42" cy="30" rx="4" ry="12" fill="currentColor" opacity="0.3" transform="rotate(-90 30 30)" />
    <ellipse cx="22" cy="22" rx="3" ry="10" fill="currentColor" opacity="0.25" transform="rotate(45 30 30)" />
    <ellipse cx="38" cy="22" rx="3" ry="10" fill="currentColor" opacity="0.25" transform="rotate(-45 30 30)" />
    <ellipse cx="22" cy="38" rx="3" ry="10" fill="currentColor" opacity="0.25" transform="rotate(-45 30 30)" />
    <ellipse cx="38" cy="38" rx="3" ry="10" fill="currentColor" opacity="0.25" transform="rotate(45 30 30)" />
    {/* Center */}
    <circle cx="30" cy="30" r="6" fill="currentColor" opacity="0.5" />
  </svg>
);

// Rose stem with detailed flower
export const RoseStem = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 50 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stem with thorns */}
    <path d="M25 100 Q23 80 25 60 Q27 40 25 25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M25 85 L22 82" stroke="currentColor" strokeWidth="1" />
    <path d="M25 70 L28 67" stroke="currentColor" strokeWidth="1" />
    <path d="M25 55 L22 52" stroke="currentColor" strokeWidth="1" />
    {/* Leaves */}
    <path d="M25 75 Q15 72 12 65 Q18 68 25 72" fill="currentColor" opacity="0.3" />
    <path d="M25 60 Q35 57 38 50 Q32 53 25 57" fill="currentColor" opacity="0.3" />
    {/* Rose petals - layered */}
    <path d="M25 25 Q15 22 12 15 Q18 20 25 22" fill="currentColor" opacity="0.35" />
    <path d="M25 25 Q35 22 38 15 Q32 20 25 22" fill="currentColor" opacity="0.35" />
    <path d="M25 20 Q20 10 25 5 Q30 10 25 20" fill="currentColor" opacity="0.4" />
    <ellipse cx="25" cy="18" rx="8" ry="10" fill="currentColor" opacity="0.3" />
    <ellipse cx="25" cy="15" rx="5" ry="7" fill="currentColor" opacity="0.4" />
    <circle cx="25" cy="13" r="3" fill="currentColor" opacity="0.5" />
  </svg>
);

// Wildflower bouquet
export const WildflowerBouquet = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Multiple stems */}
    <path d="M50 120 Q45 100 35 70 Q30 50 25 30" stroke="currentColor" strokeWidth="1" />
    <path d="M50 120 Q50 95 50 65 Q50 40 50 20" stroke="currentColor" strokeWidth="1" />
    <path d="M50 120 Q55 100 65 70 Q70 50 75 30" stroke="currentColor" strokeWidth="1" />
    <path d="M50 120 Q40 105 30 85 Q25 70 15 50" stroke="currentColor" strokeWidth="0.8" />
    <path d="M50 120 Q60 105 70 85 Q75 70 85 50" stroke="currentColor" strokeWidth="0.8" />
    {/* Various flower heads */}
    <circle cx="25" cy="25" r="6" fill="currentColor" opacity="0.35" />
    <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="50" cy="15" r="7" fill="currentColor" opacity="0.4" />
    <circle cx="50" cy="15" r="2.5" fill="currentColor" opacity="0.6" />
    <circle cx="75" cy="25" r="6" fill="currentColor" opacity="0.35" />
    <circle cx="75" cy="25" r="2" fill="currentColor" opacity="0.6" />
    <circle cx="15" cy="45" r="5" fill="currentColor" opacity="0.3" />
    <circle cx="15" cy="45" r="1.5" fill="currentColor" opacity="0.5" />
    <circle cx="85" cy="45" r="5" fill="currentColor" opacity="0.3" />
    <circle cx="85" cy="45" r="1.5" fill="currentColor" opacity="0.5" />
    {/* Small filler flowers */}
    <circle cx="35" cy="40" r="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <circle cx="65" cy="38" r="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <circle cx="45" cy="30" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <circle cx="55" cy="32" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
    {/* Ribbon */}
    <path d="M42 95 Q35 92 32 95 Q35 98 42 95" fill="currentColor" opacity="0.4" />
    <path d="M58 95 Q65 92 68 95 Q65 98 58 95" fill="currentColor" opacity="0.4" />
    <ellipse cx="50" cy="95" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2" />
  </svg>
);

// Potted tree
export const PottedTree = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 80 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Pot */}
    <path
      d="M25 100 L20 75 L60 75 L55 100 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.2"
    />
    <path d="M18 75 L62 75" stroke="currentColor" strokeWidth="2" />
    {/* Trunk */}
    <path d="M40 75 Q38 65 40 55 Q42 45 40 35" stroke="currentColor" strokeWidth="2" />
    {/* Foliage - round topiary shape */}
    <circle cx="40" cy="25" r="20" fill="currentColor" opacity="0.35" />
    <circle cx="40" cy="22" r="15" fill="currentColor" opacity="0.25" />
    <circle cx="40" cy="20" r="10" fill="currentColor" opacity="0.15" />
    {/* Small details */}
    <circle cx="32" cy="28" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="48" cy="25" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="40" cy="18" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>
);

// Vintage camera
export const VintageCamera = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Camera body */}
    <rect x="15" y="25" width="70" height="45" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15" />
    {/* Viewfinder */}
    <rect x="40" y="15" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.2" />
    {/* Lens */}
    <circle cx="50" cy="48" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="50" cy="48" r="12" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2" />
    <circle cx="50" cy="48" r="6" fill="currentColor" opacity="0.4" />
    {/* Flash */}
    <rect x="70" y="28" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    {/* Button */}
    <circle cx="78" cy="20" r="4" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    {/* Strap holes */}
    <circle cx="20" cy="35" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="80" cy="35" r="2" fill="currentColor" opacity="0.5" />
  </svg>
);

// Wedding cake
export const WeddingCake = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 80 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base plate */}
    <ellipse cx="40" cy="95" rx="38" ry="4" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.15" />
    {/* Bottom tier */}
    <rect x="10" y="70" width="60" height="25" rx="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.2" />
    <path d="M10 80 Q40 75 70 80" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    {/* Middle tier */}
    <rect x="18" y="45" width="44" height="25" rx="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.2" />
    <path d="M18 55 Q40 50 62 55" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    {/* Top tier */}
    <rect x="26" y="25" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.2" />
    <path d="M26 33 Q40 28 54 33" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    {/* Topper - flowers */}
    <circle cx="40" cy="18" r="5" fill="currentColor" opacity="0.35" />
    <circle cx="35" cy="22" r="3" fill="currentColor" opacity="0.3" />
    <circle cx="45" cy="22" r="3" fill="currentColor" opacity="0.3" />
    {/* Decorative flowers on tiers */}
    <circle cx="25" cy="78" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="55" cy="78" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="30" cy="53" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="50" cy="53" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>
);

// Wedding rings
export const WeddingRings = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left ring */}
    <ellipse cx="28" cy="30" rx="18" ry="20" stroke="currentColor" strokeWidth="3" fill="none" />
    <ellipse cx="28" cy="30" rx="14" ry="16" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    {/* Right ring */}
    <ellipse cx="52" cy="30" rx="18" ry="20" stroke="currentColor" strokeWidth="3" fill="none" />
    <ellipse cx="52" cy="30" rx="14" ry="16" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    {/* Diamond on right ring */}
    <path d="M52 15 L48 20 L52 12 L56 20 L52 15" fill="currentColor" opacity="0.5" />
    <circle cx="52" cy="16" r="2" fill="currentColor" opacity="0.4" />
  </svg>
);

// Vintage bicycle with flower basket
export const VintageBicycle = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 120 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Back wheel */}
    <circle cx="25" cy="55" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="25" cy="55" r="3" fill="currentColor" opacity="0.4" />
    {/* Front wheel */}
    <circle cx="95" cy="55" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="95" cy="55" r="3" fill="currentColor" opacity="0.4" />
    {/* Frame */}
    <path d="M25 55 L55 30 L85 35 L95 55" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M55 30 L55 55 L25 55" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M85 35 L95 55" stroke="currentColor" strokeWidth="1.5" fill="none" />
    {/* Handlebars */}
    <path d="M85 35 L88 25 Q90 22 95 25 Q100 28 98 32" stroke="currentColor" strokeWidth="1.2" fill="none" />
    {/* Seat */}
    <ellipse cx="55" cy="27" rx="6" ry="3" fill="currentColor" opacity="0.3" />
    {/* Basket */}
    <path d="M100 30 L105 25 L115 25 L118 35 L100 35 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.15" />
    {/* Flowers in basket */}
    <circle cx="108" cy="22" r="4" fill="currentColor" opacity="0.35" />
    <circle cx="113" cy="23" r="3" fill="currentColor" opacity="0.3" />
    <circle cx="105" cy="24" r="3" fill="currentColor" opacity="0.3" />
  </svg>
);

// Two birds on a branch
export const BirdsOnBranch = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 100 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Branch */}
    <path
      d="M5 55 Q30 50 50 52 Q70 54 95 48"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Small twigs */}
    <path d="M20 52 Q15 45 10 42" stroke="currentColor" strokeWidth="1" />
    <path d="M75 50 Q80 42 85 40" stroke="currentColor" strokeWidth="1" />
    {/* Left bird */}
    <path
      d="M30 50 Q25 48 22 42 Q20 35 28 35 Q35 35 38 42 Q40 48 35 50 Q32 52 30 50"
      fill="currentColor"
      opacity="0.5"
    />
    <circle cx="27" cy="40" r="1.5" fill="currentColor" opacity="0.8" />
    <path d="M22 40 L18 38" stroke="currentColor" strokeWidth="1" />
    <path d="M38 42 Q45 38 48 35" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    {/* Right bird - facing left */}
    <path
      d="M70 48 Q75 46 78 40 Q80 33 72 33 Q65 33 62 40 Q60 46 65 48 Q68 50 70 48"
      fill="currentColor"
      opacity="0.5"
    />
    <circle cx="73" cy="38" r="1.5" fill="currentColor" opacity="0.8" />
    <path d="M78 38 L82 36" stroke="currentColor" strokeWidth="1" />
    <path d="M62 40 Q55 36 52 33" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    {/* Leaves on branch */}
    <ellipse cx="45" cy="48" rx="6" ry="3" fill="currentColor" opacity="0.25" transform="rotate(-10 45 48)" />
    <ellipse cx="60" cy="50" rx="5" ry="2.5" fill="currentColor" opacity="0.25" transform="rotate(15 60 50)" />
  </svg>
);

// Music notes - decorative
export const MusicNotes = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* First note */}
    <ellipse cx="20" cy="60" rx="8" ry="6" fill="currentColor" opacity="0.5" transform="rotate(-20 20 60)" />
    <path d="M27 57 L27 20" stroke="currentColor" strokeWidth="1.5" />
    <path d="M27 20 Q35 22 35 30 Q35 38 27 35" fill="currentColor" opacity="0.3" />
    {/* Second note */}
    <ellipse cx="55" cy="55" rx="8" ry="6" fill="currentColor" opacity="0.5" transform="rotate(-20 55 55)" />
    <path d="M62 52 L62 15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M62 15 Q70 17 70 25 Q70 33 62 30" fill="currentColor" opacity="0.3" />
    {/* Connecting beam */}
    <path d="M27 22 Q45 18 62 17" stroke="currentColor" strokeWidth="2.5" />
    {/* Small decorative notes */}
    <circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.3" />
    <path d="M43 38 L43 28" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Large olive branch for edges
export const OliveBranchLarge = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 200 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main branch */}
    <path
      d="M0 50 Q40 40 80 45 Q120 50 160 42 Q180 38 200 40"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Leaves - alternating sides */}
    <ellipse cx="25" cy="38" rx="12" ry="6" fill="currentColor" opacity="0.35" transform="rotate(-25 25 38)" />
    <ellipse cx="45" cy="52" rx="14" ry="7" fill="currentColor" opacity="0.35" transform="rotate(20 45 52)" />
    <ellipse cx="70" cy="38" rx="12" ry="6" fill="currentColor" opacity="0.35" transform="rotate(-30 70 38)" />
    <ellipse cx="95" cy="55" rx="14" ry="7" fill="currentColor" opacity="0.35" transform="rotate(25 95 55)" />
    <ellipse cx="120" cy="40" rx="12" ry="6" fill="currentColor" opacity="0.35" transform="rotate(-20 120 40)" />
    <ellipse cx="145" cy="50" rx="13" ry="6" fill="currentColor" opacity="0.35" transform="rotate(18 145 50)" />
    <ellipse cx="170" cy="35" rx="11" ry="5" fill="currentColor" opacity="0.35" transform="rotate(-22 170 35)" />
    <ellipse cx="190" cy="45" rx="10" ry="5" fill="currentColor" opacity="0.35" transform="rotate(15 190 45)" />
    {/* Olives */}
    <ellipse cx="35" cy="45" rx="5" ry="6" fill="currentColor" opacity="0.5" />
    <ellipse cx="82" cy="48" rx="5" ry="6" fill="currentColor" opacity="0.5" />
    <ellipse cx="130" cy="47" rx="5" ry="6" fill="currentColor" opacity="0.5" />
    <ellipse cx="175" cy="42" rx="4" ry="5" fill="currentColor" opacity="0.5" />
  </svg>
);

// Grape vine
export const GrapeVine = ({ className = "" }: IllustrationProps) => (
  <svg
    className={`text-primary ${className}`}
    viewBox="0 0 80 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Vine */}
    <path
      d="M40 5 Q35 20 40 35 Q45 50 38 65 Q32 80 40 95"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Tendrils */}
    <path d="M40 15 Q50 12 55 18 Q52 22 45 20" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <path d="M38 45 Q28 42 23 48 Q26 52 33 50" stroke="currentColor" strokeWidth="0.8" fill="none" />
    {/* Leaves */}
    <path
      d="M55 25 Q60 20 65 25 Q70 30 65 38 Q58 42 52 38 Q48 32 55 25"
      stroke="currentColor"
      strokeWidth="1"
      fill="currentColor"
      opacity="0.25"
    />
    <path
      d="M22 55 Q17 50 12 55 Q7 60 12 68 Q18 72 25 68 Q30 62 22 55"
      stroke="currentColor"
      strokeWidth="1"
      fill="currentColor"
      opacity="0.25"
    />
    {/* Grape cluster */}
    <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.4" />
    <circle cx="58" cy="55" r="5" fill="currentColor" opacity="0.4" />
    <circle cx="54" cy="62" r="5" fill="currentColor" opacity="0.4" />
    <circle cx="46" cy="58" r="4" fill="currentColor" opacity="0.35" />
    <circle cx="60" cy="64" r="4" fill="currentColor" opacity="0.35" />
    <circle cx="52" cy="70" r="4" fill="currentColor" opacity="0.35" />
  </svg>
);
