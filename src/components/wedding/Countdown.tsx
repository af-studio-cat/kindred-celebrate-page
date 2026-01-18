import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const weddingDate = new Date("2026-06-20T17:45:00");

  const calculateTimeLeft = (): TimeLeft => {
    const difference = weddingDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "dies" },
    { value: timeLeft.hours, label: "hores" },
    { value: timeLeft.minutes, label: "minuts" },
    { value: timeLeft.seconds, label: "segons" },
  ];

  return (
    <div className="flex justify-center items-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="relative">
            <motion.span
              key={unit.value}
              className="block font-serif text-3xl md:text-5xl lg:text-6xl text-primary tabular-nums"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {String(unit.value).padStart(2, "0")}
            </motion.span>
          </div>
          <span className="block font-sans text-xs md:text-sm text-muted-foreground tracking-widest uppercase mt-2">
            {unit.label}
          </span>
          
          {/* Separator dot */}
          {index < timeUnits.length - 1 && (
            <span className="absolute hidden" aria-hidden="true">:</span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;