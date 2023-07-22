import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Featured from '@/components/featured/Featured'
import PizzaList from '@/components/pizzaList/PizzaList'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pizza Restaurant',
  description: 'Best pizza in town',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {/* <Featured/> */}
        {/* <PizzaList/> */}
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  )
}
