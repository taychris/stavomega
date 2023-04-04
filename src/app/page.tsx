import Footer from "../../components/Footer";
import AboutSection from "../../components/home/AboutSection";
import ContactSection from "../../components/home/ContactSection";
import HeroSection from "../../components/home/HeroSection";

export const metadata = {
  title: 'Domov - Stavomega',
  description: 'Všetko, pre Vašu stavbu, domácnosť aj záhradu',
}

export default function Home() {
  return (
    <>
      <main>
        <HeroSection/>
        <AboutSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}
