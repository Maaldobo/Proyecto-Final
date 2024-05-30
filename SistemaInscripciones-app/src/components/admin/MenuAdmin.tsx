import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import Item from '../Item';





export default function MenuAdmin() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={2} sm={4} md={4}>
          <Item>
            <Link to='/admin/mostrarAlumno'><h2>Alumnos</h2></Link>
            
          </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
          <Item>
          <Link to='/admin/mostrarClase'><h2>Clases</h2></Link>
            
            
          </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
          <Item>
            <h2>Suscripciones</h2>
            
          </Item>
        </Grid>
      </Grid>
    </Box>
    
    <br />
    </>
  );
}
