import { Navigate, Outlet } from "react-router-dom";
import MenuAdmin from "../components/admin/MenuAdmin";
import { useLoginStore } from "../store/useLoginStore";

function Admin() {
  const { isLoggedIn } = useLoginStore()

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (

    <>

      <MenuAdmin></MenuAdmin>
      <Outlet></Outlet>

    </>
  )
}
export default Admin