import './App.css';
import Login from './routes/Login';

import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Admin from './routes/Admin';
import { useLoginStore } from './store/useLoginStore';



function App() {
  const { isLoggedIn} = useLoginStore()

  return (
    <>
    <Container>
  

    
      <h1>ESCUELA DE MUSICA</h1>

    </Container>

<Routes>
{isLoggedIn && (<Route path='/admin' element={<Admin/>}></Route>)}

  <Route path='/' element={<Login/>}>
    
  </Route>   


</Routes>


     
    </>
  )
}

export default App
