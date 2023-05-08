"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { childrenAnimation, parentAnimation } from "../../lib/animations";

const HeroSection = () => {
  return (
    <motion.section
      id="domov"
      className="w-[100dvw] h-[100dvh] flex items-center justify-center flex-col relative"
      variants={parentAnimation}
      whileInView="visible"
      initial="hidden"
      viewport={{once: true}}
    >
      <motion.div
        className="relative w-[260px] h-[100px] md:w-[500px] md:h-[140px] mb-6"
        variants={childrenAnimation}
      >
        <Image
          src={"/imgs/stavomega.png"}
          fill
          style={{ objectFit: "contain" }}
          alt="Stavomega logo."
        />
      </motion.div>
      <motion.h2
        className="px-4 text-2xl font-light text-center md:text-3xl mb-14"
        variants={childrenAnimation}
      >
        Všetko, pre Vašu stavbu, domácnosť aj záhradu
      </motion.h2>
      <motion.div variants={childrenAnimation}>
        <Link href={"/kontakt"} className="btn-primary">Kontakt</Link>
      </motion.div>
      <motion.div className="absolute top-32 left-10 md:left-32 -z-10" variants={childrenAnimation}>
        <div className="relative w-20 h-20 md:w-40 md:h-40">
          <Image src={"/imgs/circles.png"} fill alt="square circle decoration"/>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-32 right-10 md:right-32 -z-10" variants={childrenAnimation}>
        <div className="relative w-20 h-20 md:w-40 md:h-40">
          <Image src={"/imgs/circles.png"} fill alt="second square circle decoration"/>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default HeroSection;
