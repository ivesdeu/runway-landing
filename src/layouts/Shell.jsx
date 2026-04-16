import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function Shell() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(160deg,#b8d4ea_0%,#cce0ed_35%,#e8dcc0_100%)] font-sans text-[#111] antialiased">
      <div className="page-grain" aria-hidden />
      <div className="relative z-[2] flex min-h-screen flex-col">
        <Nav />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}
