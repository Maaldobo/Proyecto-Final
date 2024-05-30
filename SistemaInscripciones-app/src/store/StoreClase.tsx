// store/useClaseStore.ts
import { create } from "zustand";
import { getClases } from "../services/clases-service";

interface IClaseStore {
  clases: clase[];
  addClase: (nuevaClase: clase) => void;
  delClase: (claseId: string) => void;
  getClases: () => void; 
}

export const useClaseStore = create<IClaseStore>((set) => ({
  clases: [],
  addClase: (nuevaClase: clase) =>
    set((state) => ({ clases: [...state.clases, nuevaClase] })),
  delClase: (claseId: string) =>
    set((state) => ({
      clases: state.clases.filter((clase) => clase.id !== claseId),
    })),
  getClases: () => {
    getClases().then(
      (response) => {
        set({
          clases: response
        });
      }
    ).catch((error) => {
      console.error('Error fetching data:', error);
    });
  },
}));
