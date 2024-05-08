import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"


function RootLayout(){
    return(
        <>
        <Nav></Nav>
        <br />
        <Outlet></Outlet>
        
        </>
    )
}
export default RootLayout