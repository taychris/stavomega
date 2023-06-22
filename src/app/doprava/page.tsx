import { CheckIcon } from "@heroicons/react/24/outline"
import Footer from "../../../components/Footer"
import DopravaMain from "../../../components/doprava/DopravaMain"

export const metadata = {
    title: 'Doprava - Stavomega',
    description: 'Všetko, pre Vašu stavbu, domácnosť aj záhradu',
    keywords: ["stavomega doprava", "Stavomega doprava", "doprava stavomega"]
  }

const Doprava = () => {
  return (
    <>
      <DopravaMain/>
      <Footer/>
    </>
  )
}
export default Doprava