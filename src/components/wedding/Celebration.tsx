import Section from "./Section";
import Flourish from "./Flourish";
import { MapPin } from "lucide-react";
import { OliveBranch, LeafSprig, PicnicBasket, Sunset } from "./Illustrations";

const Celebration = () => {
  const mapsUrl = "https://www.google.com/maps/place/MASIA+BRUGAROLAS/@41.7458801,2.1336651,883m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12a4e7fb5b8a150d:0xa16a9bb867b86f89!8m2!3d41.7458801!4d2.13624!16s%2Fg%2F11b7ln82xl";

  return (
    <Section className="text-center relative overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-16 left-4 md:left-12 opacity-30">
        <PicnicBasket className="w-20 md:w-28 h-16 md:h-22" />
      </div>
      <div className="absolute bottom-20 right-4 md:right-16 opacity-25">
        <LeafSprig className="w-12 md:w-16 h-16 md:h-24 rotate-[20deg] -scale-x-100" />
      </div>
      <div className="absolute top-24 right-4 md:right-20 opacity-25">
        <Sunset className="w-16 md:w-24 h-10 md:h-14" />
      </div>

      <Flourish className="mx-auto mb-12" />
      
      <p className="text-script-small mb-6">La celebració tindrà lloc a</p>
      
      <h2 className="text-primary-subtitle mb-12">La Masia Brugarolas</h2>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-elegant inline-flex items-center gap-2"
      >
        <MapPin className="w-4 h-4" />
        Veure ubicació
      </a>

      <OliveBranch className="mx-auto mt-12 w-32 md:w-40 h-auto opacity-40" />
    </Section>
  );
};

export default Celebration;