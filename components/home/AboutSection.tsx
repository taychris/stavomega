"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import AboutDescription from "./about-section/AboutDescription"

const AboutSection = () => {
  return (
    <section id="sluzby" className="flex flex-col w-full h-full">
        <div className="w-full h-[100dvh] bg-primary flex flex-col md:flex-row">
            <AboutDescription h1="Naše služby" h2="Stavebné centrum" p="V predajni Stavebného centra Stavomega Vás s radosťou obslúži odborne zaškolený personál. Vyberte si zo širokej ponuky tovaru. Navštívte nás, tešíme sa na Vás." classNames=""/>
            <motion.div className="w-full md:w-1/2 h-full relative" whileInView={{opacity: 1, transition: {duration: 0.7}}} viewport={{once: true}} initial={{opacity: 0}}>
                <Image src="/imgs/stavomega_shop.jpg" fill style={{objectFit: "cover"}} alt="Stavomega shop."/>
            </motion.div>
        </div>
        <div className="w-full h-[100dvh] bg-[#1E1E1E] flex flex-col md:flex-row">
            <motion.div className="w-full md:w-1/2 h-full relative order-2 md:order-1" whileInView={{opacity: 1, transition: {duration: 0.7}}} viewport={{once: true}} initial={{opacity: 0}}>
                <Image src="/imgs/stavomega_deal.jpg" fill style={{objectFit: "cover"}} alt="Stavomega deal."/>
            </motion.div>
            <AboutDescription h1="Naše služby" h2="Cenová ponuka na mieru" p="Pri výbere stavebného materiálu a ďalšieho tovaru Vám poradíme alebo vypracujeme nezáväznú cenovú ponuku. Našim cieľom je maximálna spokojnosť zákazníka." classNames="order-1 md:order-2"/>
        </div>
        <div className="w-full h-[100dvh] bg-primary flex flex-col md:flex-row">
            <AboutDescription h1="Naše služby" h2="Stavebné práce" p="Vykonávame stavebné práce, vŕtanie betónov a železobetónov. Ponúkame nákladnú doprava aj s mechanickou rukou, zemné práce, prenájom lešenia a iné." classNames=""/>
            <motion.div className="w-full md:w-1/2 h-full relative" whileInView={{opacity: 1, transition: {duration: 0.7}}} viewport={{once: true}} initial={{opacity: 0}}>
                <Image src="/imgs/stavomega_construction.jpg" fill style={{objectFit: "cover"}} alt="Stavomega construction."/>
            </motion.div>
        </div>
    </section>
  )
}
export default AboutSection