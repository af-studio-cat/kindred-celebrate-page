import Section from "./Section";
import { Camera, Music } from "lucide-react";
import { 
  DancingFigures, 
  FloralCluster, 
  StrawHat, 
  WheatBouquet, 
  OliveBranch,
  WeddingCake,
  MusicNotes,
  VintageCamera
} from "./Illustrations";

const ExtrasSection = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Straw hat - top right */}
      <div className="absolute top-8 right-4 md:right-12 opacity-20">
        <StrawHat className="w-18 md:w-24 h-12 md:h-16" />
      </div>

      {/* Wheat bouquet - bottom left, partially cropped */}
      <div className="absolute bottom-12 -left-4 md:left-8 opacity-20">
        <WheatBouquet className="w-14 md:w-18 h-18 md:h-24" />
      </div>

      {/* Floral cluster - left middle */}
      <div className="absolute top-1/3 left-4 md:left-12 opacity-15">
        <FloralCluster className="w-14 md:w-18 h-14 md:h-18" />
      </div>

      {/* Wedding cake - near photo album, subtle */}
      <div className="absolute top-1/4 right-1/3 opacity-15 hidden md:block">
        <WeddingCake className="w-12 h-16" />
      </div>

      {/* Music notes - near playlist, subtle */}
      <div className="absolute bottom-1/4 right-8 md:right-24 opacity-15 hidden md:block">
        <MusicNotes className="w-10 h-10" />
      </div>

      {/* Three columns grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative z-10">
        
        {/* Dress Code */}
        <div className="text-center flex flex-col items-center">
          <h3 className="text-primary-section mb-6">Dress Code</h3>
          
          <p className="text-script leading-loose mb-8 text-lg md:text-xl max-w-xs">
            "Ells de traje elegant estaran,
            <br />
            elles de vestit llarg aniran
            <br />
            i junts puntualment arribaran."
          </p>

          <a 
            href="https://pin.it/example" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-elegant inline-flex items-center gap-2 mb-6"
          >
            Inspiració
          </a>

          <DancingFigures className="mx-auto w-16 h-12 opacity-30" />
        </div>

        {/* Photo Album */}
        <div className="text-center flex flex-col items-center">
          <h3 className="text-primary-section mb-6">Àlbum de Fotos</h3>
          
          <p className="text-script-small mb-8 text-lg md:text-xl max-w-xs">
            Puja i comparteix el registre de fotos i vídeos del dia
          </p>

          <button className="btn-elegant inline-flex items-center gap-2">
            <Camera className="w-4 h-4" />
            Compartir
          </button>

          <VintageCamera className="mx-auto mt-6 w-12 h-8 opacity-20 hidden md:block" />
        </div>

        {/* Playlist */}
        <div className="text-center flex flex-col items-center">
          <h3 className="text-primary-section mb-6">Playlist</h3>
          
          <p className="text-script-small mb-8 text-lg md:text-xl max-w-xs">
            Afegeix les cançons que no poden faltar a la festa
          </p>

          <button className="btn-elegant inline-flex items-center gap-2">
            <Music className="w-4 h-4" />
            Afegir
          </button>
        </div>
      </div>

      <OliveBranch className="mx-auto mt-16 w-32 md:w-40 h-auto opacity-30" />
    </Section>
  );
};

export default ExtrasSection;
