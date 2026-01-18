interface FlourishProps {
  className?: string;
}

const Flourish = ({ className = "" }: FlourishProps) => {
  return (
    <svg
      className={`w-48 md:w-64 h-8 text-primary opacity-30 ${className}`}
      viewBox="0 0 200 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    >
      {/* Left side flourish */}
      <path d="M0,15 Q20,5 40,15 T80,15" />
      <circle cx="15" cy="10" r="2" fill="currentColor" opacity="0.5" />
      
      {/* Center ornament */}
      <path d="M90,15 L100,8 L110,15 L100,22 Z" fill="currentColor" opacity="0.3" />
      
      {/* Right side flourish (mirrored) */}
      <path d="M120,15 Q140,25 160,15 T200,15" />
      <circle cx="185" cy="20" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
};

export default Flourish;