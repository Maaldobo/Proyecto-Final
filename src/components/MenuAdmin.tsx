import { NavLink } from "react-router-dom"

function MenuAdmin() {
    return (
        <>
          <button><NavLink to='/admin/editarAlumno'>Edita Alumno</NavLink></button>
          <button><NavLink to='/admin/editarClase'>Edita Materia</NavLink></button>
          <button><NavLink to='/admin/pagos'>Pagos</NavLink></button>
          <button><NavLink to='/admin/metricas'>Metricas</NavLink></button>
        </>
      )
}
export default MenuAdmin