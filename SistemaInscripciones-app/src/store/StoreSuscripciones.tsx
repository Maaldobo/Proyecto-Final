// store/useSuscripcionStore.ts
import { create } from "zustand";
import { getSuscripciones } from "../services/suscripciones-service";

interface ISuscripcionStore {
  suscripciones: suscripcion[];
  addSuscripcion: (nuevaSuscripcion: suscripcion) => void;
  delSuscripcion: (suscripcionId: string) => void;
  getSuscripciones: () => void; 
}

export const useSuscripcionStore = create<ISuscripcionStore>((set) => ({
  suscripciones: [],
  addSuscripcion: (nuevaSuscripcion: suscripcion) =>
    set((state) => ({ suscripciones: [...state.suscripciones, nuevaSuscripcion] })),
  delSuscripcion: (suscripcionId: string) =>
    set((state) => ({
      suscripciones: state.suscripciones.filter((suscripcion) => suscripcion.alumnoId !== suscripcionId),
    })),
  getSuscripciones: () => {
    getSuscripciones().then(
      (response) => {
        set({
          suscripciones: response
        });
      }
    ).catch((error) => {
      console.error('Error fetching data:', error);
    });
  },
}));
