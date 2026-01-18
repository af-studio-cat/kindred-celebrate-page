import { useState } from "react";
import Section from "./Section";
import Flourish from "./Flourish";
import { motion } from "framer-motion";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attending: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Section className="text-center bg-cream/30">
        <Flourish className="mx-auto mb-10" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-elegant-subtitle mb-6">Gràcies!</h2>
          <p className="text-elegant-body text-muted-foreground">
            Hem rebut la teva confirmació.
          </p>
        </motion.div>

        <Flourish className="mx-auto mt-12 rotate-180" />
      </Section>
    );
  }

  return (
    <Section className="text-center bg-cream/30">
      <Flourish className="mx-auto mb-10" />
      
      <h2 className="text-elegant-subtitle mb-6">Confirmació d'assistència</h2>
      
      <p className="text-elegant-body text-muted-foreground mb-10 max-w-md mx-auto">
        Ens farà molt feliços saber si ens acompanyes.
      </p>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-6">
        {/* Name field */}
        <div className="text-left">
          <label 
            htmlFor="name" 
            className="block font-sans text-sm text-muted-foreground mb-2 tracking-wide"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border font-sans text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="El teu nom complet"
          />
        </div>

        {/* Number of guests */}
        <div className="text-left">
          <label 
            htmlFor="guests" 
            className="block font-sans text-sm text-muted-foreground mb-2 tracking-wide"
          >
            Nombre d'assistents
          </label>
          <select
            id="guests"
            required
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-border font-sans text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
          >
            <option value="1">1 persona</option>
            <option value="2">2 persones</option>
            <option value="3">3 persones</option>
            <option value="4">4 persones</option>
            <option value="5">5 persones</option>
          </select>
        </div>

        {/* Attendance buttons */}
        <div className="pt-4 space-y-3">
          <button
            type="submit"
            onClick={() => setFormData({ ...formData, attending: "yes" })}
            className="w-full btn-elegant"
          >
            Confirmar assistència
          </button>
          
          <button
            type="submit"
            onClick={() => setFormData({ ...formData, attending: "no" })}
            className="w-full font-sans text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors py-3"
          >
            No podré assistir
          </button>
        </div>
      </form>

      <Flourish className="mx-auto mt-12 rotate-180" />
    </Section>
  );
};

export default RSVPForm;