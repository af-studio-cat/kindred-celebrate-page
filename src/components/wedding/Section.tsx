import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}
const Section = ({
  children,
  className = "",
  id
}: SectionProps) => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  return <motion.section id={id} ref={ref} initial={{
    opacity: 0,
    y: 40
  }} animate={inView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 40
  }} transition={{
    duration: 0.8,
    ease: "easeOut"
  }} className="">
      {children}
    </motion.section>;
};
export default Section;