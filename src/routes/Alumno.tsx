import MenuAlumno from "../components/MenuAlumno"
import { Outlet } from "react-router-dom"
import MostrarAlumnos from "../helpers/MostrarAlumno"
import { useLoginStore } from "../store/useLoginStore"

function Alumno(){
    const { isLoggedIn} = useLoginStore()

    return(
        
        <>
{isLoggedIn && <MenuAlumno />}
        <p>Alumno: </p>
        <Outlet></Outlet>
        <MostrarAlumnos></MostrarAlumnos>
    </>
)
    }
export default Alumno