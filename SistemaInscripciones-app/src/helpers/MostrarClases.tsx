import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import PaidIcon from '@mui/icons-material/Paid'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { deleteStudent } from '../services/alumnos-service';
import { useAlumnoStore } from "../store/StoreAlumno"
import DataTable from './TablasAlumnos'
import { useClaseStore } from '../store/StoreClase'
import DataTableClases from './TablasClases'
import { deleteClase } from '../services/clases-service'

const MostrarClase = () => {
  const { clases, getClases} = useClaseStore()

  useEffect(() => {
    getClases()
  }, [getClases])
  const navigate = useNavigate()
  const handleAction = async (id, actionName) => {
    switch (actionName) {
      case 'Editar Clase':
        editarClase(id)
        break
      case 'Eliminar Clase':
        await eliminarClase(id)
        break

      default:
        break
    }
  }


  const eliminarClase = async (id) => {
    try {
      await deleteClase(id)
      getClases() 
    } catch (error) {
      console.error('Error eliminando clase:', error)
    }
  }
  const editarClase = (id) => {
    navigate('/admin/editarClase', { state: { id } })
   
  }

  const actions = (id) => [
    { icon: <EditIcon />, name: 'Editar Clase', onClick: () => handleAction(id, 'Editar Clase') },
    { icon: <DeleteIcon />, name: 'Eliminar Clase', onClick: () => handleAction(id, 'Eliminar Clase') },
  ]

  const rows = clases.map((clase) => ({
    id: clase.id,
    nombre: clase.nombre,
    actions: actions(clase.id),
  }))

  return <DataTableClases rows={rows} />
}

export default MostrarClase
