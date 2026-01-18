import Section from "./Section";
import Flourish from "./Flourish";
import { Music } from "lucide-react";

const Playlist = () => {
  return (
    <Section className="text-center">
      <Flourish className="mx-auto mb-10" />
      
      <h2 className="text-elegant-subtitle mb-8">Playlist</h2>
      
      <p className="text-elegant-body max-w-lg mx-auto mb-10">
        Afegeix les cançons que no poden faltar a la playlist col·laborativa que rebrà el DJ.
      </p>

      <button className="btn-elegant inline-flex items-center gap-2">
        <Music className="w-4 h-4" />
        Afegir cançons
      </button>

      <Flourish className="mx-auto mt-12 rotate-180" />
    </Section>
  );
};

export default Playlist;