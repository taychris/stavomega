import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full py-20 text-center text-white bg-gray-900">
        <h1 className="mb-2 text-2xl font-medium tracking-wide">Otváracie hodiny</h1>
        <ul className="mb-10 font-light">
            <li>Po - Pia: 07:00 - 17:00</li>
            <li>Sobota: 07:00 - 12:00</li>
            <li>Nedeľa: Oddychujeme</li>
        </ul>
        <Link href="/gdpr" className="text-sm">Ochrana osobných údajov</Link>
        <p className="mt-3 text-xs font-light">© Copyright Stavomega 2023</p>
    </footer>
  )
}
export default Footer