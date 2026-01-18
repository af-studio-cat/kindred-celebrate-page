import Section from "./Section";
import Flourish from "./Flourish";

const DressCode = () => {
  return (
    <Section className="text-center bg-cream/30">
      <Flourish className="mx-auto mb-10" />
      
      <h2 className="text-elegant-subtitle mb-10">Dress code</h2>
      
      <div className="max-w-md mx-auto">
        <p className="font-serif text-xl md:text-2xl text-primary leading-relaxed italic">
          "Ells de traje elegant estaran,
          <br />
          elles de vestit llarg aniran
          <br />
          i junts puntualment arribaran."
        </p>
      </div>

      <Flourish className="mx-auto mt-12 rotate-180" />
    </Section>
  );
};

export default DressCode;