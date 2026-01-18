import Section from "./Section";
import { DancingFigures, FloralCluster, StrawHat, WheatBouquet } from "./Illustrations";

const DressCode = () => {
  return (
    <Section className="text-center bg-primary relative overflow-hidden">
      {/* Decorative illustrations - inverted colors */}
      <div className="absolute top-12 right-4 md:right-16 opacity-20">
        <StrawHat className="w-20 md:w-28 h-14 md:h-18 text-primary-foreground" />
      </div>
      <div className="absolute bottom-16 left-4 md:left-16 opacity-20">
        <WheatBouquet className="w-14 md:w-20 h-18 md:h-24 text-primary-foreground" />
      </div>
      <div className="absolute top-1/2 left-4 md:left-12 opacity-15">
        <FloralCluster className="w-14 md:w-20 h-14 md:h-20 text-primary-foreground" />
      </div>

      {/* Inverted flourish */}
      <svg
        className="w-48 md:w-64 h-8 text-primary-foreground opacity-40 mx-auto mb-10"
        viewBox="0 0 200 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <path d="M0,15 Q20,5 40,15 T80,15" />
        <circle cx="15" cy="10" r="2" fill="currentColor" opacity="0.5" />
        <path d="M90,15 L100,8 L110,15 L100,22 Z" fill="currentColor" opacity="0.3" />
        <path d="M120,15 Q140,25 160,15 T200,15" />
        <circle cx="185" cy="20" r="2" fill="currentColor" opacity="0.5" />
      </svg>
      
      <h2 className="font-serif text-2xl md:text-3xl font-light italic text-primary-foreground mb-10">
        Dress code
      </h2>
      
      <div className="max-w-md mx-auto relative z-10">
        <p className="font-serif text-xl md:text-2xl text-primary-foreground leading-relaxed italic">
          "Ells de traje elegant estaran,
          <br />
          elles de vestit llarg aniran
          <br />
          i junts puntualment arribaran."
        </p>
      </div>

      <DancingFigures className="mx-auto mt-10 w-24 md:w-32 h-20 md:h-24 opacity-40 text-primary-foreground" />

      {/* Inverted flourish */}
      <svg
        className="w-48 md:w-64 h-8 text-primary-foreground opacity-40 mx-auto mt-8 rotate-180"
        viewBox="0 0 200 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <path d="M0,15 Q20,5 40,15 T80,15" />
        <circle cx="15" cy="10" r="2" fill="currentColor" opacity="0.5" />
        <path d="M90,15 L100,8 L110,15 L100,22 Z" fill="currentColor" opacity="0.3" />
        <path d="M120,15 Q140,25 160,15 T200,15" />
        <circle cx="185" cy="20" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    </Section>
  );
};

export default DressCode;