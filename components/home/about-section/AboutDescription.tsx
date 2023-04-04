import { motion } from "framer-motion";
import { childrenAnimation, parentAnimation } from "../../../lib/animations";

const AboutDescription = ({
  h1,
  h2,
  p,
  classNames
}: {
  h1: string;
  h2: string;
  p: string;
  classNames: string
}) => {
  return (
    <div className={`w-full md:w-1/2 h-full flex flex-col items-center justify-center ${classNames}`}>
      <motion.div
        className="px-8 md:px-16"
        variants={parentAnimation}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-medium text-white md:text-2xl mb-2 tracking-wider"
          variants={childrenAnimation}
        >
          {h1}
        </motion.h1>
        <motion.h2
          className="text-white font-medium text-3xl md:text-6xl mb-5"
          variants={childrenAnimation}
        >
          {h2}
        </motion.h2>
        <motion.p
          className="text-white font-light text-lg md:text-2xl"
          variants={childrenAnimation}
        >
          {p}
        </motion.p>
      </motion.div>
    </div>
  );
};
export default AboutDescription;
