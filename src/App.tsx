import { useEffect } from 'react';
import './App.css'
import Login from './routes/Login'

import { useAlumnoStore } from './store/StoreAlumno';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import MenuAppBar from './components/MenuAppBar';



function App() {


  return (
    <>
    <Container>
  

    
      <h1>ESCUELA DE MUSICA</h1>

    </Container>

<Routes>
  <Route path='/' element={<Login/>}>
    
  </Route>   


</Routes>


     
    </>
  )
}

export default App
