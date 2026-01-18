import Section from "./Section";
import { Camera, Music } from "lucide-react";
import { DancingFigures, FloralCluster, StrawHat, WheatBouquet, OliveBranch } from "./Illustrations";

const ExtrasSection = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-12 right-4 md:right-16 opacity-20">
        <StrawHat className="w-20 md:w-28 h-14 md:h-18" />
      </div>
      <div className="absolute bottom-16 left-4 md:left-16 opacity-20">
        <WheatBouquet className="w-14 md:w-20 h-18 md:h-24" />
      </div>
      <div className="absolute top-1/2 left-4 md:left-12 opacity-15">
        <FloralCluster className="w-14 md:w-20 h-14 md:h-20" />
      </div>

      {/* Three columns grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        
        {/* Dress Code */}
        <div className="text-center">
          <h3 className="text-primary-section mb-8">Dress Code</h3>
          
          <p className="text-script leading-loose mb-6">
            "Ells de traje elegant estaran,
            <br />
            elles de vestit llarg aniran
            <br />
            i junts puntualment arribaran."
          </p>

          <DancingFigures className="mx-auto w-20 h-16 opacity-40" />
        </div>

        {/* Photo Album */}
        <div className="text-center">
          <h3 className="text-primary-section mb-8">Àlbum de Fotos</h3>
          
          <p className="text-script-small mb-8">
            Puja i comparteix el registre de fotos i vídeos del dia
          </p>

          <button className="btn-elegant inline-flex items-center gap-2">
            <Camera className="w-4 h-4" />
            Compartir
          </button>
        </div>

        {/* Playlist */}
        <div className="text-center">
          <h3 className="text-primary-section mb-8">Playlist</h3>
          
          <p className="text-script-small mb-8">
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
