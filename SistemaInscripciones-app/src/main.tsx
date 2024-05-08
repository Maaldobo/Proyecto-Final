import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout.tsx'
import Alumno from './routes/Alumno.tsx'
import Horario from './components/Horario.tsx'
import Saldo from './components/Saldo.tsx'
import Admin from './routes/Admin.tsx'
import EditarAlumno from './components/EditarAlumno.tsx'
import EditarClase from './components/EditarClase.tsx'
import Pagos from './components/Pagos.tsx'
import Metricas from './components/Metricas.tsx'

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",  element: <App/>
      },
      {
        path: "/alumno", element: <Alumno/>, children: [
          //{ path: "/alumno/:id/", element: <MenuAlumno/> }, 
            { path: "/alumno/horario", element: <Horario/> },
            { path: "/alumno/saldo", element: <Saldo/> },
        ]
      },
       {
         path: "/admin", element: <Admin />, children: [
            { path: "/admin/editarAlumno", element: <EditarAlumno /> },
            { path: "/admin/editarClase", element: <EditarClase /> },
            { path: "/admin/pagos", element: <Pagos /> },
            { path: "/admin//metricas", element: <Metricas /> }

         ]
       },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>
)