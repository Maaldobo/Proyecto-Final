import MenuAlumno from "../components/MenuAlumno"
import { Outlet } from "react-router-dom"

function Alumno(){
    return(

    <>
        <p>Alumno: </p>
        <MenuAlumno></MenuAlumno>
        <Outlet></Outlet>
    </>
)
    }
export default Alumno