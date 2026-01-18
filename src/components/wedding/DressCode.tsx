import Section from "./Section";
import Flourish from "./Flourish";
import { DancingFigures, FloralCluster } from "./Illustrations";

const DressCode = () => {
  return (
    <Section className="text-center bg-card/30 relative overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-12 right-4 md:right-16 opacity-30">
        <FloralCluster className="w-16 md:w-24 h-16 md:h-24" />
      </div>
      <div className="absolute bottom-16 left-4 md:left-16 opacity-30">
        <FloralCluster className="w-14 md:w-20 h-14 md:h-20" />
      </div>

      <Flourish className="mx-auto mb-10" />
      
      <h2 className="text-elegant-subtitle mb-10">Dress code</h2>
      
      <div className="max-w-md mx-auto relative z-10">
        <p className="font-serif text-xl md:text-2xl text-primary leading-relaxed italic">
          "Ells de traje elegant estaran,
          <br />
          elles de vestit llarg aniran
          <br />
          i junts puntualment arribaran."
        </p>
      </div>

      <DancingFigures className="mx-auto mt-10 w-24 md:w-32 h-20 md:h-24 opacity-50" />

      <Flourish className="mx-auto mt-8 rotate-180" />
    </Section>
  );
};

export default DressCode;