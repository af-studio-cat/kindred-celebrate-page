import Section from "./Section";
import Flourish from "./Flourish";
import { MapPin } from "lucide-react";

const Celebration = () => {
  const mapsUrl = "https://www.google.com/maps/place/MASIA+BRUGAROLAS/@41.7458801,2.1336651,883m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12a4e7fb5b8a150d:0xa16a9bb867b86f89!8m2!3d41.7458801!4d2.13624!16s%2Fg%2F11b7ln82xl";

  return (
    <Section className="text-center">
      <Flourish className="mx-auto mb-10" />
      
      <h2 className="text-elegant-subtitle mb-8">La celebració</h2>
      
      <p className="text-elegant-body max-w-lg mx-auto mb-8">
        La celebració tindrà lloc a
      </p>
      
      <p className="font-serif text-2xl md:text-3xl text-primary mb-10">
        La Masia Brugarolas
      </p>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-elegant inline-flex items-center gap-2"
      >
        <MapPin className="w-4 h-4" />
        Veure ubicació
      </a>

      <Flourish className="mx-auto mt-12 rotate-180" />
    </Section>
  );
};

export default Celebration;