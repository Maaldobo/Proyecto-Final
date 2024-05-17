import { create } from "zustand";
import { getAlumnos } from "../services/alumnos-service";

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
         getAlumnos().then(
            (response)=>{
              set({
                alumnos: response
              })
            }

         )

         
    },
}))
