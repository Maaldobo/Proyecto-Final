import MenuAdmin from "../components/MenuAdmin"
import { Navigate, Outlet, Route } from "react-router-dom"
import { useLoginStore } from "../store/useLoginStore";
function Admin(){
    const { isLoggedIn} = useLoginStore()
    
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

    return(

    <>
    
        <MenuAdmin></MenuAdmin>
        <Outlet></Outlet>
    </>
    )
    }
    export default Admin