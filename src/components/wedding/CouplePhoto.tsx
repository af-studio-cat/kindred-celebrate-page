import Section from "./Section";
import { 
  WineGlasses, 
  LeafSprig, 
  CornerFloral, 
  VintageCamera,
  FloralCluster,
  Daisy 
} from "./Illustrations";

const CouplePhoto = () => {
  return (
    <Section className="flex justify-center items-center py-12 md:py-20 relative overflow-hidden">
      {/* Vintage camera - top left */}
      <div className="absolute top-8 left-4 md:left-12 opacity-20">
        <VintageCamera className="w-18 md:w-24 h-14 md:h-18" />
      </div>

      {/* Wine glasses - top right */}
      <div className="absolute top-10 right-4 md:right-16 opacity-25">
        <WineGlasses className="w-20 md:w-28 h-16 md:h-20" />
      </div>
      
      {/* Leaf sprig - bottom left */}
      <div className="absolute bottom-16 left-4 md:left-12 opacity-25">
        <LeafSprig className="w-12 md:w-16 h-18 md:h-24 -rotate-12" />
      </div>

      {/* Floral cluster - cropped at right edge */}
      <div className="absolute top-1/3 -right-8 md:-right-6 opacity-20">
        <FloralCluster className="w-24 md:w-32 h-24 md:h-32" />
      </div>

      {/* Corner floral - bottom right */}
      <div className="absolute bottom-8 right-4 md:right-20 opacity-20">
        <CornerFloral className="w-16 md:w-22 h-16 md:h-22 rotate-180" />
      </div>

      {/* Daisy - scattered small */}
      <div className="absolute bottom-1/4 left-1/4 opacity-15 hidden md:block">
        <Daisy className="w-10 h-14" />
      </div>

      <div className="max-w-md md:max-w-lg lg:max-w-xl w-full relative z-10">
        <img
          alt="Paula i Adrià"
          className="w-full h-auto object-cover grayscale-[20%] contrast-[0.95]"
          loading="lazy"
          src="/lovable-uploads/8fa6e483-aaad-4f95-a68e-dd822257b124.png"
        />
      </div>
    </Section>
  );
};

export default CouplePhoto;
