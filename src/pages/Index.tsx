import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Envelope from "@/components/wedding/Envelope";
import Hero from "@/components/wedding/Hero";
import CouplePhoto from "@/components/wedding/CouplePhoto";
import Celebration from "@/components/wedding/Celebration";
import ExtrasSection from "@/components/wedding/ExtrasSection";
import Schedule from "@/components/wedding/Schedule";
import ImportantInfo from "@/components/wedding/ImportantInfo";
import RSVPForm from "@/components/wedding/RSVPForm";
import Footer from "@/components/wedding/Footer";
import PaperTexture from "@/components/wedding/PaperTexture";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <>
      {/* Subtle paper grain texture overlay */}
      <PaperTexture />

      <AnimatePresence>
        {!isEnvelopeOpen && (
          <Envelope onOpen={() => setIsEnvelopeOpen(true)} />
        )}
      </AnimatePresence>

      {isEnvelopeOpen && (
        <main className="min-h-screen bg-background relative z-10">
          <Hero />
          <CouplePhoto />
          <Celebration />
          <ExtrasSection />
          <Schedule />
          <ImportantInfo />
          <RSVPForm />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;