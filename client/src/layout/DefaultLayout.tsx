import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
const DefaultLayout = () => {
  return (
   <div>
     <NavBar/>
      <Outlet/>
    <div>Footer</div>
   </div>
  )
}

export default DefaultLayout