import Section from "./Section";
import Flourish from "./Flourish";
import { MapPin } from "lucide-react";
import { 
  OliveBranch, 
  LeafSprig, 
  PicnicBasket, 
  Sunset,
  PineTree,
  VintageBicycle 
} from "./Illustrations";

const Celebration = () => {
  const mapsUrl = "https://www.google.com/maps/place/MASIA+BRUGAROLAS/@41.7458801,2.1336651,883m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12a4e7fb5b8a150d:0xa16a9bb867b86f89!8m2!3d41.7458801!4d2.13624!16s%2Fg%2F11b7ln82xl";

  return (
    <Section className="text-center relative overflow-hidden">
      {/* Pine tree - cropped at left edge */}
      <div className="absolute -left-12 md:-left-8 top-8 opacity-15">
        <PineTree className="w-28 md:w-36 h-44 md:h-56" />
      </div>

      {/* Picnic basket - top right area */}
      <div className="absolute top-12 right-4 md:right-16 opacity-25">
        <PicnicBasket className="w-18 md:w-24 h-14 md:h-18" />
      </div>

      {/* Sunset - right side */}
      <div className="absolute top-1/3 right-4 md:right-12 opacity-20">
        <Sunset className="w-14 md:w-20 h-8 md:h-12" />
      </div>

      {/* Bicycle - bottom left */}
      <div className="absolute bottom-16 left-4 md:left-12 opacity-20 hidden md:block">
        <VintageBicycle className="w-28 md:w-36 h-18 md:h-24" />
      </div>

      {/* Leaf sprig - bottom right */}
      <div className="absolute bottom-20 right-8 md:right-20 opacity-20">
        <LeafSprig className="w-10 md:w-14 h-14 md:h-20 rotate-[20deg] -scale-x-100" />
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

      <OliveBranch className="mx-auto mt-12 w-32 md:w-40 h-auto opacity-35" />
    </Section>
  );
};

export default Celebration;
