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
          className="px-4 mb-8 text-4xl font-medium md:text-6xl"
          variants={childrenAnimation}
        >
          Chcete nás kontaktovať?
        </motion.h1>
        <motion.p
          className="px-5 mb-10 text-2xl font-light md:text-3xl md:px-28"
          variants={childrenAnimation}
        >
          Neváhajte a kontaktujte nás na akýkoľvek Vami požadovaný stavebný alebo iný materiál.
        </motion.p>
        <motion.div variants={childrenAnimation}>
          <Link href={"/kontakt"} className="m-auto btn-primary">
            Kontakt
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default ContactSection;
