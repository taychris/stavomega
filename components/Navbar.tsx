import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 flex items-center justify-between w-screen px-8 md:px-20 py-3 md:py-5 bg-white">
        <Link href="/" className="relative w-24 h-10 hover:scale-105 duration-500">
            <Image src={"/imgs/stavomega.png"} fill style={{objectFit: "contain"}} alt="Stavomega logo."/>
        </Link>
        <ul className="flex gap-5 md:gap-10 text-base md:text-lg tracking-wide font-medium">
            <li className="hover:text-primary duration-500">
                <Link href="/">Domov</Link>
            </li>
            <li className="hover:text-primary duration-500">
                <Link href="/kontakt">Kontakt</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar