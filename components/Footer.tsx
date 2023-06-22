import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col w-full px-10 py-20 text-white bg-gray-900 sm:items-center">
        <div className="grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h1 className="mb-2 text-2xl font-medium tracking-wide">Otváracie hodiny</h1>
            <ul className="font-light">
                <li>Po - Pia: 07:00 - 17:00</li>
                <li>Sobota: 07:00 - 12:00</li>
                <li>Nedeľa: Oddychujeme</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 text-2xl font-medium tracking-wide">Fakturačná adresa</h1>
            <ul className="font-light">
                <li>Stavomega s.r.o</li>
                <li>Magurská 2</li>
                <li>040 01 Košice</li>
                <li>IČO: 36578118</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 text-2xl font-medium tracking-wide">Korešpondenčná adresa</h1>
            <ul className="font-light">
                <li>Stavomega s.r.o</li>
                <li>Košická 482</li>
                <li>045 01 Moldava nad Bodvou</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2 text-2xl font-medium tracking-wide">Kontakt</h1>
            <ul className="font-light">
                <li>
                  <Link href={"tel:+421904169169"}><span className="text-white/70">Technik: </span>+421 904 169 169</Link>
                </li>
                <li>

                  <Link href={"tel:055/4607102"}><span className="text-white/70">Predajňa: </span>055/460 71 02</Link>
                </li>
                <li>
                  <Link href={"mailto:stavomega@gmail.com"}>stavomega@gmail.com</Link>

                </li>
            </ul>
          </div>

        </div>
        <div className="m-auto">
          <Link href="/gdpr" className="text-sm">Ochrana osobných údajov</Link>
          <p className="mt-3 text-xs font-light">© Copyright Stavomega 2023</p>
        </div>
    </footer>
  )
}
export default Footer