import { useEffect } from 'react';
import './App.css'
import Login from './components/Login'
import { useAlumnoStore } from './store/StoreAlumno';


function App() {
  const MostrarAlumnos = () => {
    const { alumnos, getAlumnos } = useAlumnoStore();
  
    useEffect(() => {
      getAlumnos(); // Llama al método para obtener los alumnos tan pronto como el componente se monte
    }, []);
  return (
    <>

    <h1>Sistema de Inscripciones</h1>
      <Login></Login>


      return (
    <div>
      <h1>Lista de Alumnos</h1>
      <ul>
        {alumnos.map(alumno => (
          <li key={alumno.id}>
            {alumno.nombre} {alumno.apellido}
          </li>
        ))}
      </ul>
    </div>
  )
    </>
  )
}

export default App
