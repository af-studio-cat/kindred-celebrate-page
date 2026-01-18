import Section from "./Section";
import Flourish from "./Flourish";
import { Camera } from "lucide-react";

const PhotoAlbum = () => {
  return (
    <Section className="text-center bg-cream/30">
      <Flourish className="mx-auto mb-10" />
      
      <h2 className="text-elegant-subtitle mb-8">Àlbum de fotos</h2>
      
      <p className="text-elegant-body max-w-lg mx-auto mb-10">
        Puja i comparteix el registre de fotos i vídeos del dia.
      </p>

      <button className="btn-elegant inline-flex items-center gap-2">
        <Camera className="w-4 h-4" />
        Compartir records
      </button>

      <Flourish className="mx-auto mt-12 rotate-180" />
    </Section>
  );
};

export default PhotoAlbum;