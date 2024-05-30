import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

import EditarAlumno from './components/admin/EditarAlumno.tsx';
import EditarClase from './components/clases/EditarClase.tsx';
import Metricas from './components/admin/Metricas.tsx';
import Pagos from './components/admin/Pagos.tsx';
import Horario from './components/alumno/Horario.tsx';
import Saldo from './components/alumno/Saldo.tsx';
import Admin from './routes/Admin.tsx';
import Alumno from './routes/Alumno.tsx';
import RootLayout from './routes/RootLayout.tsx';
import { AgregarEstudiante } from './components/admin/AgregarAlumno.tsx';
import MostrarAlumnos from './helpers/MostrarAlumno.tsx';
import InscribirClase from './components/clases/InscribirClases.tsx';
import MostrarClase from './helpers/MostrarClases.tsx';
import { AgregarClase } from './components/admin/AgregarClase.tsx';

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",  element: <App/>
      },
      {
        path: "/alumno/:uuid", element: <Alumno/>, children: [
         
            { path: "/alumno/:uuid/horario", element: <Horario/> },
            { path: "/alumno/:uuid/saldo", element: <Saldo/> },
        ]
      },
       {
         path: "/admin", element: <Admin />, children: [
           { path: "/admin/mostrarAlumno", element: <MostrarAlumnos /> },
           { path: "/admin/mostrarClase", element: <MostrarClase /> },
           { path: "/admin/editarAlumno", element: <EditarAlumno /> },
           { path: "/admin/agregarAlumno", element: <AgregarEstudiante /> },
           { path: "/admin/agregarClase", element: <AgregarClase /> },
           { path: "/admin/editarClase", element: <EditarClase /> },
           { path: "/admin/inscribirClase", element: <InscribirClase /> },
            { path: "/admin/pagos", element: <Pagos /> },
            { path: "/admin/metricas", element: <Metricas /> }

         ]
       }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routerConfig} />
  
);
