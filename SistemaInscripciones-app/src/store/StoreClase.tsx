import { create } from "zustand";


// Definimos la interfaz para el estado del almacén
interface IClaseStore {
  clasesMusica: clase[];
  addClaseMusica: (nuevaClase: clase) => void;
  removeClaseMusica: (claseId: string) => void;
  getClasesMusica: () => void;
}

export const useClaseStore = create<IClaseStore>((set, get) => ({
  clasesMusica: [],
  addClaseMusica: (nuevaClase) =>
    set((state) => ({ clasesMusica: [...state.clasesMusica, nuevaClase] })),
  removeClaseMusica: (claseId) =>
    set((state) => ({
      clasesMusica: state.clasesMusica.filter((clase) => clase.id !== claseId),
    })),
  getClasesMusica: () => {
    fetch('https://backend-subs-control.onrender.com/api/clase')
      .then((response) => response.json())
      .then((data) => {
        const nuevasClases = data.map((dato: clase) => ({
          id: dato.id,
          nombre: dato.nombre,
        }));
        set((state) => ({ clasesMusica: [...state.clasesMusica, ...nuevasClases] }));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },
}));
