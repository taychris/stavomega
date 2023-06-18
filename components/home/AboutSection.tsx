"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import AboutDescription from "./about-section/AboutDescription"

const AboutSection = () => {
  return (
    <section id="sluzby" className="flex flex-col w-full h-full">
        <div className="w-full h-[100dvh] bg-primary flex flex-col md:flex-row">
            <AboutDescription h1="O nás" h2="Stavebné centrum" p="Spoločnost Stavomega je rodinná obchodná firma ktorá pôsobí na trhu už viac ako 20 rokov. V našej ponuke nájdete široký sortiment stavebného, hutnického, železiarenského materiálu a mnoho iných." classNames=""/>
            <motion.div className="relative w-full h-full md:w-1/2" whileInView={{opacity: 1, transition: {duration: 0.7}}} viewport={{once: true}} initial={{opacity: 0}}>
                <Image src="/gallery/2.png" fill style={{objectFit: "cover"}} alt="Stavomega shop."/>
            </motion.div>
        </div>
        <div className="w-full h-[100dvh] bg-[#1E1E1E] flex flex-col md:flex-row">
            <motion.div className="relative order-2 w-full h-full md:w-1/2 md:order-1" whileInView={{opacity: 1, transition: {duration: 0.7}}} viewport={{once: true}} initial={{opacity: 0}}>
                <Image src="/imgs/stavomega_deal.jpg" fill style={{objectFit: "cover"}} alt="Stavomega deal."/>
            </motion.div>
            <AboutDescription h1="O nás" h2="Flexibilita" p="Medzi naše ďalšie služby patrí aj vyhotovovanie cenových ponúk a objednanie materiálu, ktorý bežne nedržíme na sklade. V našej predajni Vám ochotne pomôže aj poradí náš personál." classNames="order-1 md:order-2"/>
        </div>
        <div className="w-full h-[100dvh] bg-primary flex flex-col md:flex-row">
            <AboutDescription h1="O nás" h2="Doprava materiálu" p="Taktiež Vám ponúkame dopravu u nás zakúpeného materiálu s hydraulickou rukou priamo na Vami určené miesto." classNames=""/>
            <motion.div className="relative w-full h-full md:w-1/2" whileInView={{opacity: 1, transition: {duration: 0.7}}} viewport={{once: true}} initial={{opacity: 0}}>
                <Image src="/imgs/delivery.jpg" fill style={{objectFit: "cover"}} alt="Stavomega construction."/>
            </motion.div>
        </div>
    </section>
  )
}
export default AboutSection