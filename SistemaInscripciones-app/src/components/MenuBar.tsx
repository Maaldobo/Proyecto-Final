import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import PianoRoundedIcon from '@mui/icons-material/PianoRounded';
import Typography from '@mui/material/Typography';

import { useLoginStore } from '../store/useLoginStore';

export default function MenuBar() {
  const { isLoggedIn, logout } = useLoginStore();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {isLoggedIn ? <MenuIcon /> : ''}
          </IconButton>
          <PianoRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={isLoggedIn ? '/admin' : '/'}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sistema de Inscripcion
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          {isLoggedIn && (
            <>
              
              <Button color="inherit" component={Link} to="admin/editarClase">Editar Clases</Button>
              <Button color="inherit" component={Link} to="admin/pagos">Pagos</Button>
              <Button color="inherit" component={Link} to="admin/metricas">Metricas</Button>
              <Button color="inherit" onClick={logout}>Logout</Button>
            </>
          )}


        </Toolbar>
      </AppBar>
    </Box>
  );
}
