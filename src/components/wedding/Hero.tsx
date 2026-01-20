import { motion } from "framer-motion";
import Flourish from "./Flourish";
import Countdown from "./Countdown";
import { OliveBranch, Bird, FloralCluster, Dove, WheatBouquet, FlowerBranch } from "./Illustrations";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 botanical-pattern relative overflow-hidden">
      {/* Decorative illustrations */}
      <motion.div
        className="absolute top-20 left-4 md:left-12 opacity-40"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <FloralCluster className="w-20 md:w-28 h-20 md:h-28" />
      </motion.div>
      
      <motion.div
        className="absolute top-24 right-8 md:right-16 opacity-35"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 0.35, x: 0 }}
        transition={{ duration: 1.5, delay: 2.2 }}
      >
        <Dove className="w-20 md:w-28 h-16 md:h-22" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-8 md:left-20 opacity-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5, delay: 2.5 }}
      >
        <Bird className="w-14 md:w-20 h-10 md:h-14 -scale-x-100" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-4 md:right-10 opacity-30"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ duration: 1.5, delay: 2.3 }}
      >
        <WheatBouquet className="w-16 md:w-24 h-20 md:h-32" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-8 md:right-24 opacity-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5, delay: 2.6 }}
      >
        <FlowerBranch className="w-8 md:w-12 h-24 md:h-32" />
      </motion.div>

      <motion.div
        className="text-center max-w-2xl relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Flourish className="mx-auto mb-10" />
        
        <motion.p
          className="text-script-small mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Us convidem al nostre casament
        </motion.p>

        <motion.h1
          className="text-primary-title mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Paula i Adrià
        </motion.h1>

        <motion.p
          className="text-script mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Ens casem!
        </motion.p>

        <motion.div
          className="inline-block border border-primary/30 px-10 py-5 mb-14"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="text-primary-subtitle tracking-[0.2em]">
            20 · 06 · 2026
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <Countdown />
        </motion.div>

        <OliveBranch className="mx-auto mt-16 w-36 md:w-48 h-auto opacity-40" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 z-10"
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