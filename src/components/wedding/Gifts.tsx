import Section from "./Section";
import Flourish from "./Flourish";
import { Heart } from "lucide-react";

const Gifts = () => {
  return (
    <Section className="text-center bg-cream/30">
      <Flourish className="mx-auto mb-10" />
      
      <h2 className="text-elegant-subtitle mb-8">Regals</h2>
      
      <div className="max-w-md mx-auto">
        <Heart className="w-8 h-8 text-primary mx-auto mb-6 opacity-60" />
        <p className="font-serif text-xl md:text-2xl text-primary leading-relaxed italic">
          "El millor regal és compartir aquest dia amb vosaltres."
        </p>
      </div>

      <Flourish className="mx-auto mt-12 rotate-180" />
    </Section>
  );
};

export default Gifts;