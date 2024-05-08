import MenuAdmin from "../components/MenuAdmin"
import { Outlet } from "react-router-dom"
function Admin(){
    return(

    <>
        <MenuAdmin></MenuAdmin>
        <Outlet></Outlet>
    </>
    )
    }
    export default Admin