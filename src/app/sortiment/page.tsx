import Footer from "../../../components/Footer"
import SortimentMain from "../../../components/sortiment/SortimentMain"

export const metadata = {
  title: 'Sortiment - Stavomega',
  description: 'Všetko, pre Vašu stavbu, domácnosť aj záhradu',
  keywords: ["stavomega sortiment", "Stavomega Sortiment", "sortiment stavomega"]
}

const Sortiment = () => {
  return (
    <>
        <SortimentMain/>
        <Footer/>
    </>
  )
}
export default Sortiment