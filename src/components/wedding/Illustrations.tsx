// Hand-drawn style illustrations in blue pencil/ink style
// Some with fine lines, others with more fill

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
