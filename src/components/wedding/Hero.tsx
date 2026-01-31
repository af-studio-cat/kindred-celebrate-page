import { motion } from "framer-motion";
import Flourish from "./Flourish";
import Countdown from "./Countdown";
import { OliveBranch, Bird, FloralCluster, Dove, WheatBouquet, FlowerBranch, OliveTree, LavenderBush, Daisy } from "./Illustrations";
import logoImage from "@/assets/logo-paula-adria.png";
const Hero = () => {
  return <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 botanical-pattern relative overflow-hidden">
      {/* Large olive tree - cropped at left edge */}
      <motion.div className="absolute -left-16 md:-left-12 top-1/4 opacity-20" initial={{
      opacity: 0,
      x: -50
    }} animate={{
      opacity: 0.2,
      x: 0
    }} transition={{
      duration: 2,
      delay: 2
    }}>
        <OliveTree className="w-40 md:w-56 h-52 md:h-72" />
      </motion.div>

      {/* Floral cluster - top left */}
      <motion.div className="absolute top-16 left-8 md:left-24 opacity-25" initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 0.25,
      scale: 1
    }} transition={{
      duration: 1.5,
      delay: 2.2
    }}>
        <FloralCluster className="w-16 md:w-24 h-16 md:h-24" />
      </motion.div>
      
      {/* Dove - top right */}
      <motion.div className="absolute top-20 right-4 md:right-16 opacity-30" initial={{
      opacity: 0,
      x: 30
    }} animate={{
      opacity: 0.3,
      x: 0
    }} transition={{
      duration: 1.5,
      delay: 2.3
    }}>
        <Dove className="w-18 md:w-26 h-14 md:h-20" />
      </motion.div>

      {/* Lavender bush - right side, partially cropped */}
      <motion.div className="absolute -right-8 md:-right-4 top-1/3 opacity-20" initial={{
      opacity: 0,
      x: 30
    }} animate={{
      opacity: 0.2,
      x: 0
    }} transition={{
      duration: 1.8,
      delay: 2.4
    }}>
        <LavenderBush className="w-20 md:w-28 h-28 md:h-36" />
      </motion.div>

      {/* Bird in flight - left side */}
      <motion.div className="absolute bottom-40 left-8 md:left-20 opacity-20" initial={{
      opacity: 0
    }} animate={{
      opacity: 0.2
    }} transition={{
      duration: 1.5,
      delay: 2.5
    }}>
        <Bird className="w-12 md:w-18 h-8 md:h-12 -scale-x-100" />
      </motion.div>

      {/* Wheat bouquet - right middle */}
      <motion.div className="absolute top-1/2 right-4 md:right-12 opacity-25" initial={{
      opacity: 0,
      rotate: -10
    }} animate={{
      opacity: 0.25,
      rotate: 0
    }} transition={{
      duration: 1.5,
      delay: 2.3
    }}>
        <WheatBouquet className="w-14 md:w-20 h-18 md:h-28" />
      </motion.div>

      {/* Daisy - bottom left */}
      <motion.div className="absolute bottom-28 left-12 md:left-32 opacity-20" initial={{
      opacity: 0
    }} animate={{
      opacity: 0.2
    }} transition={{
      duration: 1.5,
      delay: 2.6
    }}>
        <Daisy className="w-10 md:w-14 h-14 md:h-20" />
      </motion.div>

      {/* Flower branch - bottom right */}
      <motion.div className="absolute bottom-24 right-8 md:right-24 opacity-20" initial={{
      opacity: 0
    }} animate={{
      opacity: 0.2
    }} transition={{
      duration: 1.5,
      delay: 2.7
    }}>
        <FlowerBranch className="w-8 md:w-10 h-20 md:h-28" />
      </motion.div>

      <motion.div className="text-center max-w-2xl relative z-10" initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 1,
      delay: 0.3
    }}>
        <Flourish className="mx-auto mb-10" />
        
        <motion.p className="text-script md:text-4xl mb-6 text-2xl" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }}>
          Ens fa molta il·usió convidar-te al nostre casament          
        </motion.p>

        <motion.img alt="Paula i Adrià" className="w-[22rem] md:w-[30rem] lg:w-[38rem] h-auto mb-14" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.7
      }} src="/lovable-uploads/400101d0-4829-403b-9916-0fcdfeae24b1.png" />

        <motion.div className="mb-6" initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.9
      }}>
          <p className="text-primary-subtitle tracking-[0.2em]">
            20 · 06 · 2026
          </p>
        </motion.div>

        <motion.p className="text-functional-caps mb-16 tracking-[0.25em]" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1.1
      }}>
          Reserva la data
        </motion.p>

        {/* Countdown Timer */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.3
      }}>
          <Countdown />
        </motion.div>

        <OliveBranch className="mx-auto mt-16 w-36 md:w-48 h-auto opacity-35" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-10 z-10" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity
    }}>
        <div className="w-6 h-10 border border-primary/30 rounded-full flex justify-center pt-2">
          <motion.div className="w-1 h-2 bg-primary/50 rounded-full" animate={{
          y: [0, 12, 0],
          opacity: [1, 0, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} />
        </div>
      </motion.div>
    </section>;
};
export default Hero;