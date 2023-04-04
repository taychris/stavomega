import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full py-20 text-center text-white">
        <h1 className="text-2xl tracking-wide font-medium mb-2">Otváracie hodiny</h1>
        <ul className="font-light mb-10">
            <li>Po - Pia: 08:00 - 17:00</li>
            <li>Sobota: 09:00 - 12:30</li>
            <li>Nedeľa: Oddychujeme</li>
        </ul>
        <Link href="/gdpr" className="text-sm">Ochrana osobných údajov</Link>
        <p className="font-light text-xs mt-3">© Copyright Stavomega 2023</p>
    </footer>
  )
}
export default Footer