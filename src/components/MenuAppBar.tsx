import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import PianoRoundedIcon from '@mui/icons-material/PianoRounded';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useLoginStore } from '../store/useLoginStore';
import { positions } from '@mui/system'

const pages = ['/admin', '/alumno']; // Rutas de páginas

function MenuAppBar() {
  const { isLoggedIn, login, logout } = useLoginStore();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleButtonClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login('ID');
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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



          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page}
                sx={{ my: 2, color: 'white' }}
              >
                {page === '/admin' ? 'Admin' : 'Alumno'}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={page}>
                  <Typography textAlign="center">
                    {page === '/admin' ? 'Admin' : 'Alumno'}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {isLoggedIn && (
            <Button
              component={Link}
              to="/"
              onClick={handleButtonClick}
              sx={{ my: 2, color: 'white', ml: 'auto' }}
            >
              Logout
            </Button>
          )}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              zIndex:'center'
            }}
          >
            Sistema de Inscripcion
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MenuAppBar;
