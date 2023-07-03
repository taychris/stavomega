"use client";
import { AnimatePresence, motion } from "framer-motion";
import { parentAnimation } from "../../lib/animations";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const galleryImgs = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg"
];

const GalleryMain = () => {
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    window.addEventListener("keydown", handleNavigate);

    return () => {
      window.removeEventListener("keydown", handleNavigate);
    };
  }, []);

  const handleNavigate = (e: any) => {
    if(e.key === "ArrowRight") {
      setImgIndex(prev => prev + 1 > galleryImgs.length -1 ? prev : prev + 1)
    }
    if(e.key === "ArrowLeft") {
      setImgIndex(prev => prev - 1 < 0 ? prev : prev - 1)
    }
  }

  return (
    <motion.main
      className="mt-[64px] md:mt-[80px] bg-secondary_gray flex flex-col justify-center calculated-height items-center relative"
      variants={parentAnimation}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <div className="relative w-full overflow-hidden h-min">          
        <img src={`gallery/${galleryImgs[imgIndex]}`} className="object-contain w-full h-full"/>
      </div>
        <AnimatePresence>
            {imgIndex > 0 && (
                <motion.button initial={{opacity: 0}} animate={{opacity: 0.6}} exit={{opacity: 0}} whileHover={{opacity: 1}} className="absolute w-10 h-10 text-white top-1/2 left-3" onClick={() => setImgIndex(imgIndex - 1)}>
                    <ChevronLeftIcon/>
                </motion.button>
            )}
        </AnimatePresence>

        <AnimatePresence>
            {imgIndex + 1 < galleryImgs.length &&
                <motion.button initial={{opacity: 0}} animate={{opacity: 0.6}} exit={{opacity: 0}} whileHover={{opacity: 1}} className="absolute w-10 h-10 text-white top-1/2 right-3" onClick={() => setImgIndex(imgIndex + 1)}>
                    <ChevronRightIcon/>
                </motion.button>
            }
        </AnimatePresence>
    </motion.main>
  );
};
export default GalleryMain;