import Section from "./Section";
import Flourish from "./Flourish";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WineBottle, Bird, LeafSprig } from "./Illustrations";

const scheduleItems = [
  { time: "17:45", event: "Citació" },
  { time: "18:00", event: "Inici cerimònia" },
  { time: "19:30", event: "Còctel" },
  { time: "20:30", event: "Sopar" },
  { time: "22:00", event: "Festa" },
];

const Schedule = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Section className="text-center relative overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-20 right-4 md:right-20 opacity-35">
        <WineBottle className="w-10 md:w-14 h-20 md:h-28" />
      </div>
      <div className="absolute top-16 left-4 md:left-16 opacity-25">
        <Bird className="w-14 md:w-20 h-10 md:h-14" />
      </div>
      <div className="absolute bottom-24 left-8 md:left-24 opacity-30">
        <LeafSprig className="w-10 md:w-14 h-14 md:h-20 rotate-12" />
      </div>

      <Flourish className="mx-auto mb-10" />
      
      <h2 className="text-elegant-subtitle mb-12">Programació</h2>
      
      <div ref={ref} className="max-w-xs mx-auto relative z-10">
        {scheduleItems.map((item, index) => (
          <motion.div
            key={item.time}
            className="flex items-center gap-6 mb-8 last:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <span className="font-serif text-xl md:text-2xl text-primary w-20 text-right">
              {item.time}
            </span>
            <div className="timeline-dot flex-shrink-0" />
            <span className="font-sans text-base md:text-lg text-foreground text-left">
              {item.event}
            </span>
          </motion.div>
        ))}
      </div>

      <Flourish className="mx-auto mt-12 rotate-180" />
    </Section>
  );
};

export default Schedule;