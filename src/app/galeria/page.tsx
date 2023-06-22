import Footer from "../../../components/Footer"
import GalleryMain from "../../../components/galeria/GalleryMain"


export const metadata = {
    title: 'Galéria - Stavomega',
    description: 'Všetko, pre Vašu stavbu, domácnosť aj záhradu',
    keywords: ["stavomega galeria", "Stavomega galéria", "galeria stavomega"]
  }

const Galeria = () => {
  return (
    <>
      <GalleryMain/>
      <Footer/>
    </>
  )
}
export default Galeria