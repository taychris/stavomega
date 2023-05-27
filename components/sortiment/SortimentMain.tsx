"use client"
import {motion} from "framer-motion"
import { childrenAnimation, parentAnimation } from "../../lib/animations"
import { sortiment } from "../../lib/sortiment"

const SortimentMain = () => {
  return (
    <motion.main className="px-8 mt-32 mb-20" variants={parentAnimation} whileInView="visible" initial="hidden" viewport={{once: true}}>
        <motion.h1 variants={childrenAnimation} className="mb-3 text-4xl font-medium text-center text-primary md:text-6xl">Sortiment</motion.h1>
        <motion.h2 variants={childrenAnimation} className="mb-10 text-xl font-light text-center md:text-3xl md:mb-20">Ponúkame široký sortiment vhodný pre všetky Vaše potreby</motion.h2>
        <section className="gap-10 columns-1 sm:columns-2 md:columns-3">
            {sortiment.map((item, index) => (
                <motion.div variants={parentAnimation} whileInView="visible" initial="hidden" viewport={{once: true}}  key={index} className="mb-10 overflow-hidden bg-white rounded-lg shadow-lg break-inside-avoid-column">
                    <motion.h1 variants={childrenAnimation} className="px-6 py-4 text-lg text-center capitalize bg-gray-50 text-secondary_gray md:text-2xl">{item.title}</motion.h1>
                    {/* <motion.div initial={{width: "0%"}} whileInView={{width: "100%"}} transition={{duration: 1}} viewport={{once: true}} className="h-[2px] mb-3 bg-gray-300 rounded-full"/> */}
                    <div className="flex flex-row flex-wrap justify-center gap-4 p-6">
                        {item.logos.map((logo) => (
                            <motion.img variants={childrenAnimation} key={logo} src={`/sortiment/${logo}`} className="max-w-[120px] object-contain"/>
                        ))}
                    </div>
                </motion.div>
            ))}
        </section>
    </motion.main>
  )
}
export default SortimentMain