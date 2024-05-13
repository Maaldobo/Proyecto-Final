import { create } from "zustand";

interface IAlumnoStore {
  alumnos: alumno[];
  addAlumno: (nuevoAlumno: alumno) => void;
  delAlumno: (alumnoId: string) => void;
  getAlumnos: () => void; 
}

export const useAlumnoStore = create<IAlumnoStore>((set, get) => ({
  alumnos: [],
  addAlumno: (nuevoAlumno: alumno) =>
    set((state) => ({ alumnos: [...state.alumnos, nuevoAlumno] })),
  delAlumno: (alumnoId: string) =>
    set((state) => ({
      alumnos: state.alumnos.filter((alumno) => alumno.id !== alumnoId),
    })),
  getAlumnos: () => {
    fetch('https://backend-subs-control.onrender.com/api/alumnos')
      .then((response) => response.json())
      .then((data) => {

        const nuevosAlumnos = data.map((dato: alumno) => ({
          id: dato.id,
          nombre: dato.nombre,
          apellido: dato.apellido,
          uuid: dato.uuid,
        }));


        set((state) => ({ alumnos: [...state.alumnos, ...nuevosAlumnos] }));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
       
      });
  },
}))
