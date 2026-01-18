import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Envelope from "@/components/wedding/Envelope";
import Hero from "@/components/wedding/Hero";
import CouplePhoto from "@/components/wedding/CouplePhoto";
import Celebration from "@/components/wedding/Celebration";
import DressCode from "@/components/wedding/DressCode";
import Playlist from "@/components/wedding/Playlist";
import PhotoAlbum from "@/components/wedding/PhotoAlbum";
import Schedule from "@/components/wedding/Schedule";
import Gifts from "@/components/wedding/Gifts";
import ImportantInfo from "@/components/wedding/ImportantInfo";
import RSVPForm from "@/components/wedding/RSVPForm";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <Envelope onOpen={() => setIsEnvelopeOpen(true)} />
        )}
      </AnimatePresence>

      {isEnvelopeOpen && (
        <main className="min-h-screen bg-background">
          <Hero />
          <CouplePhoto />
          <Celebration />
          <DressCode />
          <Playlist />
          <PhotoAlbum />
          <Schedule />
          <Gifts />
          <ImportantInfo />
          <RSVPForm />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;