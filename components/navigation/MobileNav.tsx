"use client";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const variants = {
  display: { opacity: 1 },
  hide: { opacity: 0 },
};

const parentAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const childrenAnimation = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.button
        variants={variants}
        animate={isOpen ? "hide" : "display"}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute z-10 right-6"
      >
        <Bars2Icon className="block h-7 md:hidden" />
      </motion.button>
      <motion.button
        variants={variants}
        animate={isOpen ? "display" : "hide"}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute z-10 right-6"
      >
        <XMarkIcon className="block h-7 md:hidden" />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={parentAnimation}
            animate="visible"
            initial="hidden"
            exit="hidden"
            className="fixed inset-0 z-0 flex flex-col items-center justify-center w-screen h-screen gap-6 text-3xl font-light backdrop-blur-lg text-secondary_gray bg-white/70"
          >
            <motion.li
              variants={childrenAnimation}
              className="duration-500 hover:text-primary"
            >
              <Link href="/">Domov</Link>
            </motion.li>
            <motion.li
              variants={childrenAnimation}
              className="duration-500 hover:text-primary"
            >
              <Link href="/sortiment">Sortiment</Link>
            </motion.li>
            <motion.li
              variants={childrenAnimation}
              className="duration-500 hover:text-primary"
            >
              <Link href="/doprava">Doprava</Link>
            </motion.li>
            <motion.li
              variants={childrenAnimation}
              className="duration-500 hover:text-primary"
            >
              <Link href="/galeria">Galéria</Link>
            </motion.li>
            <motion.li
              variants={childrenAnimation}
              className="duration-500 hover:text-primary"
            >
              <Link href="/kontakt">Kontakt</Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
export default MobileNav;
