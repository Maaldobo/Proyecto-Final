import { useAlumnoStore } from "../store/StoreAlumno";

const urlAlumno = 'https://backend-subs-control.onrender.com/api/alumno';

fetch(urlAlumno)
      .then((response) => response.json())
      .then((data) => {
        // Verificar si se recibieron datos
        if (data && data.results && data.results.length > 0) {
          procesarAlumnos(data.results);
        } else {
          console.log("No se recibieron datos o la lista está vacía.");
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        throw error;
      });
  

function procesarAlumnos(datos: alumno) {
  const alumnoStore = useAlumnoStore();

  // Iterar sobre cada objeto en los datos
  datos.forEach((dato) => {
    // Agregar cada objeto al store de alumnos
    alumnoStore.addAlumno({
      id: dato.id,
      nombre: dato.nombre,
      apellido: dato.apellido,
      uuid: dato.uuid
    });
  });
}
