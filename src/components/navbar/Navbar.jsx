import { Link } from "react-router-dom"
import { Link as Scroll } from "react-scroll"
import Button from "../button/Button"
import logo from "../../assets/Postit_logo.svg"
import user from "../../assets/user.svg"
import { useGlobalContext } from "../../hooks/useGlobalContext"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const Navbar = () => {
  const {setShowLogin} = useGlobalContext()
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
}, [pathname])
  return (
    <div className=" shadow-xl">
      <header className="flex px-5 h-24 items-center font-heading text-2xl justify-between" style={{maxWidth: "1440px", margin: "auto"}}>
        <div>
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <nav className="lg:block hidden">
          <ul className="flex gap-5">
            <li><Link to="/welcome">Stories</Link></li>
            <li><Scroll to="contact" className="cursor-pointer">Contact</Scroll></li>
            {pathname === "/"  && <li><Link onClick={() => setShowLogin(true)}>Sign In</Link></li>}
          </ul>
          </nav>
          {pathname === "/"  ? <Button /> : <div><img src={user} alt="" className=" w-14 h-14 object-cover"/></div>}
        </div>
      </header>
    </div>
  )
}

export default Navbar