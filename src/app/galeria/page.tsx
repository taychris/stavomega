import Footer from "../../../components/Footer"
import GalleryMain from "../../../components/galeria/GalleryMain"


export const metadata = {
    title: 'Galéria - Stavomega',
    description: 'Všetko, pre Vašu stavbu, domácnosť aj záhradu',
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