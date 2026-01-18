import Flourish from "./Flourish";
import { OliveBranch, FloralCluster, Bird, Dove, WheatBouquet, OliveBranchBold } from "./Illustrations";

const Footer = () => {
  return (
    <footer className="py-16 px-6 text-center relative overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-8 left-8 md:left-20 opacity-30">
        <Dove className="w-16 md:w-22 h-12 md:h-16" />
      </div>
      <div className="absolute top-12 right-8 md:right-20 opacity-25">
        <WheatBouquet className="w-14 md:w-20 h-18 md:h-24" />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-20">
        <FloralCluster className="w-14 md:w-20 h-14 md:h-20" />
      </div>
      <div className="absolute bottom-24 right-1/4 opacity-20">
        <FloralCluster className="w-12 md:w-16 h-12 md:h-16" />
      </div>

      <Flourish className="mx-auto mb-8" />
      
      <p className="font-serif text-2xl md:text-3xl text-primary mb-4">
        Paula & Adrià
      </p>
      
      <p className="font-sans text-sm text-muted-foreground tracking-widest">
        20 · 06 · 2026
      </p>

      <OliveBranchBold className="mx-auto mt-8 w-28 md:w-36 h-auto opacity-40" />

      <p className="font-sans text-xs text-muted-foreground/50 mt-8">
        Fet amb amor
      </p>
    </footer>
  );
};

export default Footer;