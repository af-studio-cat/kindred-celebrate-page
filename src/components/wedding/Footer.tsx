import Flourish from "./Flourish";

const Footer = () => {
  return (
    <footer className="py-16 px-6 text-center">
      <Flourish className="mx-auto mb-8" />
      
      <p className="font-serif text-2xl md:text-3xl text-primary mb-4">
        Paula & Adrià
      </p>
      
      <p className="font-sans text-sm text-muted-foreground tracking-widest">
        20 · 06 · 2026
      </p>

      <p className="font-sans text-xs text-muted-foreground/50 mt-12">
        Fet amb amor
      </p>
    </footer>
  );
};

export default Footer;