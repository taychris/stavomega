import Footer from "../../components/Footer";
import AboutSection from "../../components/home/AboutSection";
import ContactSection from "../../components/home/ContactSection";
import HeroSection from "../../components/home/HeroSection";

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
