import Flourish from "./Flourish";
import { 
  OliveBranch, 
  FloralCluster, 
  Dove, 
  WheatBouquet, 
  OliveBranchBold,
  OliveTree,
  Bird,
  LavenderBush
} from "./Illustrations";

const Footer = () => {
  return (
    <footer className="py-16 px-6 text-center relative overflow-hidden">
      {/* Large olive tree - cropped at bottom left edge (garden floor effect) */}
      <div className="absolute -bottom-12 -left-20 md:-left-16 opacity-15">
        <OliveTree className="w-48 md:w-64 h-64 md:h-80" />
      </div>

      {/* Dove - top left */}
      <div className="absolute top-8 left-8 md:left-20 opacity-25">
        <Dove className="w-14 md:w-20 h-10 md:h-14" />
      </div>

      {/* Wheat bouquet - top right */}
      <div className="absolute top-10 right-8 md:right-20 opacity-20">
        <WheatBouquet className="w-12 md:w-16 h-16 md:h-22" />
      </div>

      {/* Small floral clusters scattered - garden floor effect */}
      <div className="absolute bottom-24 left-1/4 opacity-15 hidden md:block">
        <FloralCluster className="w-12 h-12" />
      </div>

      <div className="absolute bottom-20 right-1/4 opacity-15 hidden md:block">
        <FloralCluster className="w-10 h-10" />
      </div>

      {/* Lavender - right side */}
      <div className="absolute bottom-16 right-8 md:right-16 opacity-15">
        <LavenderBush className="w-12 md:w-16 h-16 md:h-22" />
      </div>

      {/* Bird in flight */}
      <div className="absolute top-16 left-1/3 opacity-15 hidden md:block">
        <Bird className="w-10 h-6" />
      </div>

      <div className="relative z-10">
        <Flourish className="mx-auto mb-10" />
        
        <p className="text-primary-subtitle mb-4">
          Paula & Adrià
        </p>
        
        <p className="text-functional-caps">
          20 · 06 · 2026
        </p>

        <OliveBranchBold className="mx-auto mt-8 w-28 md:w-36 h-auto opacity-40" />

        <p className="font-sans text-xs text-muted-foreground/50 mt-8">
          Fet amb amor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
