"use client";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { childrenAnimation, parentAnimation } from "../../lib/animations";
import ContactBtn from "./ContactBtn";
import ContactCallBtn from "./ContactBtn";
import ContactEmailBtn from "./ContactEmailBtn";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const ContactMain = () => {
  return (
    <motion.main
      variants={parentAnimation}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className="px-8 mb-20 mt-36"
    >
      <motion.h1
        variants={childrenAnimation}
        className="mb-10 text-3xl font-medium text-left md:mb-20 md:text-6xl md:text-center text-primary"
      >
        Kontaktujte nás
      </motion.h1>
      {/* <motion.h2 variants={childrenAnimation} className="mb-10 text-2xl font-light text-left md:text-3xl md:mb-20 md:text-center">Radi sa s Vami porozprávame</motion.h2> */}
      <motion.section
        variants={childrenAnimation}
        className="flex flex-col w-full gap-8 md:flex-row md:gap-16 md:px-16"
      >
        <div className="w-full md:w-1/2">
          <p className="mb-4 text-lg font-light md:text-2xl md:mb-6">
            Ak máte akékoľvek otázky týkajúce sa našich produktov alebo si nie
            ste istí dopravou, kontaktujte nás a dohodneme si hovor.
          </p>
          <div className="flex flex-col flex-wrap gap-4 mb-8 md:gap-6 md:mb-16">
            <ContactEmailBtn
              linkProp="mailto:stavomega@gmail.com"
              location="Email"
              email="stavomega@gmail.com"
            >
              <EnvelopeIcon className="w-5 h-5" />
            </ContactEmailBtn>
            <div className="grid gap-4 xl:grid-cols-2 md:gap-6">
              <ContactBtn
                linkProp="tel:055/4607102"
                location="Predajňa"
                phoneNumber="055/460 71 02"
              >
                <PhoneIcon className="w-5 h-5" />
              </ContactBtn>
              <ContactBtn
                linkProp="tel:+421904169169"
                location="Technik"
                phoneNumber="+421 904 169 169"
              >
                <PhoneIcon className="w-5 h-5" />
              </ContactBtn>
            </div>
          </div>
          <h1 className="mb-3 text-2xl font-medium md:text-5xl">
            Adresa prevádzky
          </h1>
          <p className="text-lg font-light md:text-2xl">
            Košická 482, 045 01 Moldava nad Bodvou
          </p>
        </div>
        <motion.div variants={childrenAnimation} className="w-full md:w-1/2">
          <h1 className="mb-3 text-2xl font-medium md:text-5xl">
            Pošlite nám správu.
          </h1>
          <p className="mb-6 text-lg font-light md:text-2xl">
            Neváhajte nás kontaktovať s otázkami, potenciálnymi partnerstvami
            alebo návrhmi.
          </p>
          <ContactForm />
        </motion.div>
      </motion.section>
    </motion.main>
  );
};
export default ContactMain;
