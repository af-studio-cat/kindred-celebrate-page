import Section from "./Section";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LeafSprig, OliveBranch } from "./Illustrations";

const scheduleItems = [
  { time: "17:45", event: "Citació" },
  { time: "18:00", event: "Cerimònia" },
  { time: "19:30", event: "Còctel" },
  { time: "20:30", event: "Sopar" },
  { time: "22:00", event: "Festa" },
];

const Schedule = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Section className="text-center relative overflow-hidden py-16 md:py-24">
      {/* Subtle decorative elements */}
      <div className="absolute top-8 left-4 md:left-16 opacity-20">
        <LeafSprig className="w-10 md:w-14 h-14 md:h-20 -rotate-12" />
      </div>
      <div className="absolute bottom-8 right-4 md:right-16 opacity-20">
        <LeafSprig className="w-10 md:w-14 h-14 md:h-20 rotate-12 -scale-x-100" />
      </div>

      <h2 className="text-primary-section mb-16">Programació</h2>
      
      {/* Minimalist horizontal path diagram */}
      <div ref={ref} className="max-w-4xl mx-auto px-4 relative">
        {/* The continuous path line */}
        <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-primary/30" />
        
        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex justify-between items-start relative">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={item.time}
              className="flex flex-col items-center relative"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              {/* Time - script style */}
              <span className="text-script-small mb-4">
                {item.time}
              </span>
              
              {/* Node point */}
              <div className="w-3 h-3 rounded-full bg-primary/60 relative z-10 mb-4" />
              
              {/* Event name - functional style */}
              <span className="text-functional-small text-center max-w-[80px]">
                {item.event}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Gentle vertical flow */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/25 -translate-x-1/2" />
          
          <div className="space-y-8">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={item.time}
                className="flex items-center justify-center gap-6 relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Left side - time or event depending on index */}
                <span className={`w-20 text-right ${index % 2 === 0 ? 'text-script-small' : 'text-functional-small'}`}>
                  {index % 2 === 0 ? item.time : item.event}
                </span>
                
                {/* Center node */}
                <div className="w-2.5 h-2.5 rounded-full bg-primary/50 flex-shrink-0 relative z-10" />
                
                {/* Right side - event or time depending on index */}
                <span className={`w-20 text-left ${index % 2 === 0 ? 'text-functional-small' : 'text-script-small'}`}>
                  {index % 2 === 0 ? item.event : item.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <OliveBranch className="mx-auto mt-16 w-28 md:w-36 h-auto opacity-30" />
    </Section>
  );
};

export default Schedule;
