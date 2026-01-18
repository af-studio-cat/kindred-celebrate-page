import Section from "./Section";
import Flourish from "./Flourish";
import { FloralHeart, CornerFloral, Vegetables, Fish, Wheelbarrow } from "./Illustrations";

const Gifts = () => {
  return (
    <Section className="text-center bg-card/30 relative overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-8 left-4 md:left-12 opacity-30">
        <Wheelbarrow className="w-24 md:w-32 h-16 md:h-20" />
      </div>
      <div className="absolute bottom-12 right-4 md:right-12 opacity-25">
        <Vegetables className="w-18 md:w-24 h-14 md:h-18" />
      </div>
      <div className="absolute top-20 right-8 md:right-20 opacity-25">
        <Fish className="w-16 md:w-24 h-8 md:h-12" />
      </div>

      <Flourish className="mx-auto mb-10" />
      
      <h2 className="text-elegant-subtitle mb-8">Regals</h2>
      
      <div className="max-w-md mx-auto relative z-10">
        <FloralHeart className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 opacity-60" />
        <p className="font-serif text-xl md:text-2xl text-primary leading-relaxed italic">
          "El millor regal és compartir aquest dia amb vosaltres."
        </p>
      </div>

      <Flourish className="mx-auto mt-12 rotate-180" />
    </Section>
  );
};

export default Gifts;