import Section from "./Section";
import Flourish from "./Flourish";
import { Car, Bed, Utensils } from "lucide-react";
import { 
  PottedTree, 
  LeafSprig, 
  Daisy, 
  OliveBranchBold 
} from "./Illustrations";

const infoItems = [
  {
    icon: Car,
    title: "Aparcament",
    description: "Hi ha espai per aparcar a la mateixa Masia.",
  },
  {
    icon: Bed,
    title: "Allotjament",
    description: "Recomanem reservar amb antelació als hotels de la zona.",
  },
  {
    icon: Utensils,
    title: "Menú",
    description: "Si tens alguna al·lèrgia o restricció alimentària, informa'ns.",
  },
];

const ImportantInfo = () => {
  return (
    <Section className="text-center relative overflow-hidden">
      {/* Potted tree - left side */}
      <div className="absolute top-12 left-4 md:left-16 opacity-20">
        <PottedTree className="w-14 md:w-20 h-18 md:h-24" />
      </div>

      {/* Leaf sprig - right side */}
      <div className="absolute top-16 right-4 md:right-12 opacity-20">
        <LeafSprig className="w-10 md:w-14 h-14 md:h-20 rotate-12" />
      </div>

      {/* Daisy - bottom left */}
      <div className="absolute bottom-16 left-8 md:left-24 opacity-15 hidden md:block">
        <Daisy className="w-10 h-14" />
      </div>

      {/* Olive branch bold - bottom right */}
      <div className="absolute bottom-12 right-4 md:right-16 opacity-20">
        <OliveBranchBold className="w-20 md:w-28 h-10 md:h-14" />
      </div>

      <Flourish className="mx-auto mb-12" />
      
      <h2 className="text-primary-section mb-14">Informació Important</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto relative z-10">
        {infoItems.map((item) => (
          <div key={item.title} className="text-center">
            <item.icon className="w-5 h-5 mx-auto mb-5 text-primary/60" />
            <h3 className="text-primary-section text-base mb-3">{item.title}</h3>
            <p className="text-functional-small leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <Flourish className="mx-auto mt-12 rotate-180" />
    </Section>
  );
};

export default ImportantInfo;
