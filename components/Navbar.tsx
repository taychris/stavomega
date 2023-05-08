import Image from "next/image"
import Link from "next/link"
import MobileNav from "./navigation/MobileNav"

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 z-10 flex items-center justify-between w-[100dvw] px-8 py-3 overflow-hidden bg-white md:px-20 md:py-5">
        <Link href="/" className="relative z-10 w-24 h-10 duration-500 hover:scale-105">
            <Image src={"/imgs/stavomega.png"} fill style={{objectFit: "contain"}} alt="Stavomega logo."/>
        </Link>
        <ul className={`hidden md:flex gap-5 text-base font-light tracking-wide md:gap-10 md:text-xl`}>
            <li className="duration-500 hover:text-primary">
                <Link href="/">Domov</Link>
            </li>
            <li className="duration-500 hover:text-primary">
                <Link href="/sortiment">Sortiment</Link>
            </li>
            <li className="duration-500 hover:text-primary">
                <Link href="/doprava">Doprava</Link>
            </li>
            <li className="duration-500 hover:text-primary">
                <Link href="/galeria">Galéria</Link>
            </li>
            <li className="duration-500 hover:text-primary">
                <Link href="/kontakt">Kontakt</Link>
            </li>
        </ul>
        <MobileNav/>
    </nav>
  )
}
export default NavigationBar