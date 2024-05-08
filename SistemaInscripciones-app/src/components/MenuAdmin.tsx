import { Link } from "react-router-dom"

function MenuAdmin() {
    return (
        <>
            <button><Link to='/admin/editarAlumno'>Edita Alumno</Link></button>
            <button><Link to='/admin/editarClase'> Edita Materia</Link></button>
            <button><Link to='/admin/Pagos'> Pagos</Link></button>
            <button><Link to='/admin/Metricas'> Metricas</Link></button>


        </>

    )
}
export default MenuAdmin