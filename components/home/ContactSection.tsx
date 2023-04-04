"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { childrenAnimation, parentAnimation } from "../../lib/animations";

const ContactSection = () => {
  return (
    <section
      id="kontakt"
      className="w-full min-h-[100dvh] flex flex-col items-center justify-center"
    >
      <motion.div
      className="text-center"
      variants={parentAnimation}
      whileInView="visible"
      initial="hidden"
      viewport={{once: true}}>
        <motion.h1
          className="px-4 text-4xl md:text-6xl font-medium mb-8"
          variants={childrenAnimation}
        >
          Chcete nás kontaktovať?
        </motion.h1>
        <motion.p
          className="font-light text-2xl md:text-3xl mb-10 px-5 md:px-28"
          variants={childrenAnimation}
        >
          Môžete nám ihneď poslať správu cez náš kontaktný formulár, alebo rôznými
          inými spôsobmi.
        </motion.p>
        <motion.div variants={childrenAnimation}>
          <Link href={"/kontakt"} className="btn-primary m-auto">
            Kontakt
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default ContactSection;
