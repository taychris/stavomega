import Footer from "../../components/Footer";
import AboutSection from "../../components/home/AboutSection";
import ContactSection from "../../components/home/ContactSection";
import HeroSection from "../../components/home/HeroSection";

export const metadata = {
  title: 'Domov - Stavomega',
  description: 'Všetko, pre Vašu stavbu, domácnosť aj záhradu',
  keywords: ["stavomega", "Stavomega domov", "domov stavomega", "stavomega stavebny centrum", "stavebny centrum", "stavebniny moldava", "stavebniny moldava nad bodvou", "stavomega moldava nad bodvou", "stavomega moldava"]
}

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <HeroSection/>
        <AboutSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}
