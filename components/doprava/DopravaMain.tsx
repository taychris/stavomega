"use client"
import { CheckIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { childrenAnimation, parentAnimation } from "../../lib/animations"

const truckList = [
    {
      imgPath: "/imgs/iveco_stavomega.png",
      title: "iveco eurocargo",
      truckFeatuers: ["8500kg nosnosť", "6000x2475mm rozmer ložnej plochy", "FASSI F135 typ hydraulickej ruky", "8,3m/1450kg max. vyloženie"]
    },
    {
      imgPath: "/imgs/mitsubishi_stavomega.png",
      title: "Mitsubishi Canter FE84",
      truckFeatuers: ["2500kg nosnosť", "4400x2200mm rozmer ložnej plochy", "hydraulická ruka","FASSI F50 typ hydraulickej ruky", "6,3m/680kg max. vyloženie"]
    },
    {
      imgPath: "/imgs/peugeot_stavomega.png",
      title: "Peugoet Boxer",
      truckFeatuers: ["1300kg nosnosť", "3800x2000mm rozmer ložnej plochy"]
    },
  ]

const DopravaMain = () => {
  return (
    <motion.main variants={parentAnimation} whileInView="visible" initial="hidden" viewport={{once: true}} className="px-8 mb-20 mt-36">
        <motion.h1 variants={childrenAnimation} className="mb-3 text-3xl font-medium text-center md:text-6xl text-primary">Doprava</motion.h1>
        <motion.p variants={childrenAnimation} className="max-w-4xl mx-auto mb-24 text-2xl font-light text-center md:text-3xl md:mb-24">Váš stavebný materiál Vám radi dopravíme a aj vyložíme našími nákladnými autami na Vami požadované miesto a termínom dodania.</motion.p>
        <motion.main variants={parentAnimation} whileInView="visible" initial="hidden" viewport={{once: true}} className="grid w-full grid-cols-1 gap-24 md:gap-16 md:grid-cols-2 xl:grid-cols-3">
          {truckList.map((truck) => (
            <motion.div variants={childrenAnimation} key={truck.title} className="relative gap-10 px-5 bg-gray-100 rounded-lg md:flex-row">
              <div className="relative w-full">
                <div className="aspect-video"></div>
                <img src={truck.imgPath} className="absolute object-contain -top-28 aspect-square"/>
              </div>
              <div className="w-full py-5 space-y-7">
                <h2 className="text-4xl font-medium text-center capitalize">{truck.title}</h2>
                <ul className="mx-auto space-y-2 text-lg font-light md:w-max">
                  {truck.truckFeatuers.map((feature, index) => (                    
                    <li key={index} className="flex items-center gap-3 break-words"><CheckIcon className="w-5 h-5"/>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.main>
      </motion.main>
  )
}
export default DopravaMain