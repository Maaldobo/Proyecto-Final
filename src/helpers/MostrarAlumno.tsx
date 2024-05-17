import { useAlumnoStore } from "../store/StoreAlumno";

const MostrarAlumnos = () => {
  const { alumnos} = useAlumnoStore();



  return (
    <div>
      <h1>Lista de Alumnos</h1>
      <ul>
        {alumnos.map((alumno: alumno) => (
          <li key={alumno.id}>
            {alumno.nombre} {alumno.apellido}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MostrarAlumnos;
