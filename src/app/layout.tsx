import './globals.css'
import { Poppins } from 'next/font/google'
import NavigationBar from '../../components/Navbar'

const poppins = Poppins({style: "normal", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body className={`${poppins.className}`}>
        <NavigationBar/>
        {children}
      </body>
    </html>
  )
}
