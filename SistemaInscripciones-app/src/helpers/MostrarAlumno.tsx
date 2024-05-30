import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import PaidIcon from '@mui/icons-material/Paid'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteStudent } from '../services/alumnos-service'
import { useAlumnoStore } from "../store/StoreAlumno"
import DataTable from './TablasAlumnos'
import { Padding } from '@mui/icons-material'


const MostrarAlumnos = () => {
  const { alumnos, getAlumnos} = useAlumnoStore()
  const  [filterAlumnos, setFilterAlumnos] = useState<alumno[]>([])

  useEffect(()=>{
      setFilterAlumnos(alumnos)
  },[alumnos])

  useEffect(() => {
    getAlumnos()
  }, [getAlumnos])
  const navigate = useNavigate()
  const handleAction = async (id, actionName) => {
    switch (actionName) {
      case 'Editar Alumno':
        editarAlumno(id)
        break
      case 'Inscribir Clase':
        inscribirClase(id)
        break
      case 'Registrar Pagos':
        //  registrar pagos
        break
      case 'Eliminar Alumno':
        await eliminarAlumno(id)
        break

      default:
        break
    }
  }

  const inscribirClase = (id) => {
    navigate('/admin/inscribirClase', { state: { id } })
  }

  const eliminarAlumno = async (id) => {
    try {
      await deleteStudent(id)
      getAlumnos() 
    } catch (error) {
      console.error('Error eliminando estudiante:', error)
    }
  }
  const editarAlumno = (id) => {
    navigate('/admin/editarAlumno', { state: { id } })
   
  }

  const actions = (id) => [
    { icon: <EditIcon />, name: 'Editar Alumno', onClick: () => handleAction(id, 'Editar Alumno') },
    { icon: <LibraryAddIcon />, name: 'Inscribir Clase', onClick: () => handleAction(id, 'Inscribir Clase') },
    { icon: <PaidIcon />, name: 'Registrar Pagos', onClick: () => handleAction(id, 'Registrar Pagos') },
    { icon: <DeleteIcon />, name: 'Eliminar Alumno', onClick: () => handleAction(id, 'Eliminar Alumno') },
  ]

  const rows = filterAlumnos.map((alumno) => ({
    id: alumno.id,
    nombre: alumno.nombre,
    apellido: alumno.apellido,
    actions: actions(alumno.id),
  }))

  const handleFilter=(e:any)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const buscar = formData.get("buscar") as string
    const filtered = alumnos.filter((alumno: alumno) =>
      alumno.nombre.includes(buscar) || alumno.apellido.includes(buscar)
    )
    setFilterAlumnos(filtered)
  }
  return <>
  {/* filtro */}
  <section style={{ padding: '10px' }}>
    <form onSubmit={handleFilter} >  
      <label >Buscar</label>
      <input type="text" name="buscar" style={{ margin: '4px' }}/>
      <button type='submit'style={{ margin: '4px' }}>Buscar   </button>

    </form>
  </section>

  {/* tabla */}
  <DataTable rows={rows} />
  
  </>
}

export default MostrarAlumnos
