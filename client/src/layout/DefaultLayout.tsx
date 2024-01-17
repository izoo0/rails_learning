import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
const DefaultLayout = () => {
  return (
   <div>
     <NavBar/>
      <Outlet/>
   </div>
  )
}

export default DefaultLayout