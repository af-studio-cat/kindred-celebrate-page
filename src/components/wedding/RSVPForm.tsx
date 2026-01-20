import { useState } from "react";
import Section from "./Section";
import Flourish from "./Flourish";
import { motion } from "framer-motion";
import { z } from "zod";
import { 
  FloralHeart, 
  LeafSprig, 
  OliveBranchBold, 
  FlowerBranch,
  BirdsOnBranch,
  WeddingRings,
  RoseStem
} from "./Illustrations";

const rsvpSchema = z.object({
  guestName: z.string().trim().min(1, "El nom és obligatori").max(100, "Màxim 100 caràcters"),
  companions: z.string().trim().max(200, "Màxim 200 caràcters").optional(),
  attending: z.enum(["yes", "no"], { required_error: "Selecciona una opció" }),
  allergies: z.string().trim().max(500, "Màxim 500 caràcters").optional(),
  message: z.string().trim().max(1000, "Màxim 1000 caràcters").optional(),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    guestName: "",
    companions: "",
    attending: "" as "" | "yes" | "no",
    allergies: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof RSVPFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateAndSubmit = (attending: "yes" | "no") => {
    const dataToValidate = { ...formData, attending };
    
    const result = rsvpSchema.safeParse(dataToValidate);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof RSVPFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof RSVPFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    // Here you would typically send the data to a backend
    setSubmitted(true);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field as keyof RSVPFormData]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  if (submitted) {
    return (
      <Section className="text-center bg-card/30 relative overflow-hidden">
        {/* Birds on branch - celebration */}
        <div className="absolute top-12 left-1/4 opacity-25 hidden md:block">
          <BirdsOnBranch className="w-24 h-18" />
        </div>

        <div className="absolute top-8 right-8 md:right-16 opacity-20">
          <LeafSprig className="w-10 md:w-14 h-14 md:h-20" />
        </div>
        
        <Flourish className="mx-auto mb-10" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FloralHeart className="w-16 h-16 mx-auto mb-8 opacity-50" />
          <h2 className="text-primary-section mb-6">Gràcies!</h2>
          <p className="text-functional">
            Hem rebut la teva confirmació.
          </p>
        </motion.div>

        <Flourish className="mx-auto mt-12 rotate-180" />
      </Section>
    );
  }

  return (
    <Section className="text-center bg-card/30 relative overflow-hidden">
      {/* Olive branch - top left */}
      <div className="absolute top-12 left-4 md:left-12 opacity-25">
        <OliveBranchBold className="w-18 md:w-24 h-10 md:h-14" />
      </div>

      {/* Wedding rings - top right, symbolic */}
      <div className="absolute top-16 right-4 md:right-16 opacity-20">
        <WeddingRings className="w-14 md:w-18 h-10 md:h-14" />
      </div>

      {/* Rose stem - left middle */}
      <div className="absolute top-1/3 left-4 md:left-8 opacity-20 hidden md:block">
        <RoseStem className="w-10 h-20" />
      </div>

      {/* Flower branch - right side */}
      <div className="absolute bottom-24 right-4 md:right-12 opacity-20">
        <FlowerBranch className="w-8 md:w-10 h-20 md:h-28" />
      </div>

      {/* Leaf sprig - bottom left */}
      <div className="absolute bottom-16 left-8 md:left-16 opacity-20">
        <LeafSprig className="w-10 md:w-12 h-14 md:h-18 -rotate-12 -scale-x-100" />
      </div>

      <Flourish className="mx-auto mb-12" />
      
      <h2 className="text-primary-section mb-6">Confirmació d'Assistència</h2>
      
      <p className="text-script-small mb-12 max-w-md mx-auto">
        Ens farà molt feliços saber si ens acompanyes
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto space-y-8 relative z-10">
        {/* Guest name field */}
        <div className="text-left">
          <label 
            htmlFor="guestName" 
            className="block text-functional-caps mb-3"
          >
            Nom de l'invitat *
          </label>
          <input
            type="text"
            id="guestName"
            value={formData.guestName}
            onChange={(e) => handleInputChange("guestName", e.target.value)}
            className={`w-full px-4 py-3 bg-background border font-sans text-foreground focus:outline-none focus:border-primary transition-colors ${
              errors.guestName ? "border-destructive" : "border-border"
            }`}
            placeholder="El teu nom complet"
            maxLength={100}
          />
          {errors.guestName && (
            <p className="text-destructive text-sm mt-1 text-left">{errors.guestName}</p>
          )}
        </div>

        {/* Companions field */}
        <div className="text-left">
          <label 
            htmlFor="companions" 
            className="block text-functional-caps mb-3"
          >
            Nom acompanyant/s
          </label>
          <input
            type="text"
            id="companions"
            value={formData.companions}
            onChange={(e) => handleInputChange("companions", e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border font-sans text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="Només si vas ser invitat amb acompanyant"
            maxLength={200}
          />
          <p className="text-muted-foreground/60 text-xs mt-1 text-left italic">
            Només completar si vas ser invitat amb acompanyant
          </p>
        </div>

        {/* Allergies field */}
        <div className="text-left">
          <label 
            htmlFor="allergies" 
            className="block text-functional-caps mb-3"
          >
            Al·lèrgies o restriccions
          </label>
          <textarea
            id="allergies"
            value={formData.allergies}
            onChange={(e) => handleInputChange("allergies", e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border font-sans text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Indica qualsevol al·lèrgia o restricció"
            rows={2}
            maxLength={500}
          />
        </div>

        {/* Message for the couple */}
        <div className="text-left">
          <label 
            htmlFor="message" 
            className="block text-functional-caps mb-3"
          >
            Missatge per als nuvis
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border font-sans text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Escriu un missatge per a Paula i Adrià"
            rows={3}
            maxLength={1000}
          />
        </div>

        {/* Attendance buttons */}
        <div className="pt-4 space-y-3">
          <button
            type="button"
            onClick={() => validateAndSubmit("yes")}
            className="w-full btn-elegant"
          >
            Confirmar assistència
          </button>
          
          <button
            type="button"
            onClick={() => validateAndSubmit("no")}
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
