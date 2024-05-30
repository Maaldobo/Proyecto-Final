import { create } from "zustand";
import { getAlumnos } from "../services/alumnos-service";

interface IAlumnoStore {
  alumnos: alumno[];
  isLoading: boolean;
  addAlumno: (nuevoAlumno: alumno) => void;
  delAlumno: (alumnoId: string) => void;
  getAlumnos: () => void;
}

export const useAlumnoStore = create<IAlumnoStore>((set) => ({
  alumnos: [],
  isLoading: false,
  addAlumno: (nuevoAlumno: alumno) =>
    set((state) => ({ alumnos: [...state.alumnos, nuevoAlumno] })),
  delAlumno: (alumnoId: string) =>
    set((state) => ({
      alumnos: state.alumnos.filter((alumno) => alumno.id !== alumnoId),
    })),
  getAlumnos: () => {
    set({ isLoading: true });
    getAlumnos().then(
      (response) => {
        set({
          alumnos: response,
          isLoading: false,
        });
      }
    ).catch((error) => {
      console.error('Error fetching data:', error);
      set({ isLoading: false });
    });
  },
}));
