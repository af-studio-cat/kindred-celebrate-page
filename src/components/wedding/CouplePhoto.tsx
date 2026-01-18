import Section from "./Section";
import couplePhoto from "@/assets/couple-photo.jpg";
import { WineGlasses, LeafSprig, CornerFloral } from "./Illustrations";

const CouplePhoto = () => {
  return (
    <Section className="flex justify-center items-center py-12 md:py-20 relative overflow-hidden">
      {/* Decorative illustrations around photo */}
      <div className="absolute top-8 right-8 md:right-20 opacity-40">
        <WineGlasses className="w-24 md:w-32 h-20 md:h-24" />
      </div>
      
      <div className="absolute bottom-12 left-4 md:left-16 opacity-35">
        <LeafSprig className="w-14 md:w-20 h-20 md:h-28 -rotate-12" />
      </div>

      <div className="absolute bottom-8 right-8 md:right-24 opacity-30">
        <CornerFloral className="w-20 md:w-28 h-20 md:h-28 rotate-180" />
      </div>

      <div className="max-w-md md:max-w-lg lg:max-w-xl w-full relative z-10">
        <img
          src={couplePhoto}
          alt="Paula i Adrià"
          className="w-full h-auto object-cover grayscale-[20%] contrast-[0.95]"
          loading="lazy"
        />
      </div>
    </Section>
  );
};

export default CouplePhoto;