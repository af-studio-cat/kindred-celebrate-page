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
      <Flourish className="mx-auto mb-10" />
      
      <h2 className="text-elegant-subtitle mb-12">Informació important</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {infoItems.map((item) => (
          <div key={item.title} className="text-center">
            <item.icon className="w-6 h-6 text-primary mx-auto mb-4 opacity-70" />
            <h3 className="font-serif text-lg text-primary mb-2">{item.title}</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
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