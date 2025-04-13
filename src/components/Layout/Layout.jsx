
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbarr/Navbarr'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className="pt-20">
    <Outlet></Outlet>
    </div>
    <Footer/>
    </>
  )
}
