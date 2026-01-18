import Section from "./Section";
import Flourish from "./Flourish";
import { Info, Car, Bed, Utensils } from "lucide-react";

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
    <Section className="text-center">
      <Flourish className="mx-auto mb-12" />
      
      <h2 className="text-primary-section mb-14">Informació Important</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
        {infoItems.map((item) => (
          <div key={item.title} className="text-center">
            <item.icon className="w-5 h-5 mx-auto mb-5 opacity-60" style={{ color: 'hsl(147 21% 31%)' }} />
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