import { Outlet } from "react-router-dom"
import Footer from "../components/shared/Footer/Footer"
import NavBar from "../components/shared/NavBar/NavBar"

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="pt-28 pb-20">
        <Outlet />  
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Main
