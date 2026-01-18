import { motion } from "framer-motion";
import Flourish from "./Flourish";
import Countdown from "./Countdown";
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 botanical-pattern">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Flourish className="mx-auto mb-8" />
        
        <motion.p
          className="text-elegant-small mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Us convidem al nostre casament
        </motion.p>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Ens casem!
        </motion.h1>

        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-light italic text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Paula i Adrià
        </motion.h2>

        <motion.p
          className="text-elegant-body text-muted-foreground mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Ens fa molta il·lusió compartir aquest dia amb vosaltres.
        </motion.p>

        <motion.div
          className="inline-block border border-primary/30 px-8 py-4 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <p className="font-serif text-3xl md:text-4xl text-primary tracking-widest">
            20 · 06 · 2026
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Countdown />
        </motion.div>

        <Flourish className="mx-auto mt-12 rotate-180" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border border-primary/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-primary/50 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;