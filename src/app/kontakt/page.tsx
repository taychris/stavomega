import ContactCallBtn from "../../../components/contact/ContactCallBtn"
import ContactEmailBtn from "../../../components/contact/ContactEmailBtn"
import ContactForm from "../../../components/contact/ContactForm"
import Footer from "../../../components/Footer"

export const metadata = {
  title: 'Kontakt - Stavomega',
  description: 'Všetko, pre Vašu stavbu, domácnosť aj záhradu',
}

const Contact = () => {
  return (
    <>
      <main className="my-20 px-8">
        <h1 className="font-medium text-3xl md:text-6xl mb-3 text-left md:text-center">Kontaktujte nás</h1>
        <h2 className="font-light text-2xl md:text-3xl mb-8 md:mb-14 text-left md:text-center">Radi sa s Vami porozprávame</h2>
        <section className="flex flex-col md:flex-row w-full gap-8 md:gap-16 md:px-16">
          <div className="w-full md:w-1/2">
            <p className="font-light text-lg md:text-2xl mb-4 md:mb-6">Ak máte akékoľvek otázky týkajúce sa našich produktov alebo si nie ste istí dopravou, kontaktujte náš tím a dohodneme si hovor.</p>
            <div className="flex flex-wrap gap-4 md:gap-8 mb-8 md:mb-16">
              <ContactEmailBtn/>
              <ContactCallBtn/>
            </div>
            <h1 className="font-medium text-2xl md:text-5xl mb-3">Naša adresa</h1>
            <p className="font-light text-lg md:text-2xl">Moldavská 78, 045 01 Moldava nad Bodvou</p>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="font-medium text-2xl md:text-5xl mb-3">Pošlite nám správu.</h1>
            <p className="font-light text-lg md:text-2xl mb-6">Neváhajte nás kontaktovať s otázkami, potenciálnymi partnerstvami alebo návrhmi.</p>
            <ContactForm/>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
export default Contact