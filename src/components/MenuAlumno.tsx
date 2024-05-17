import { Link } from "react-router-dom"

function MenuAlumno(){
    return(
    <>
    
    <button><Link to='/alumno/horario'>HORARIO</Link> </button>
    <button><Link to='/alumno/saldo'>SALDOS</Link></button>
    
    </>
    
    )
    }
    export default MenuAlumno