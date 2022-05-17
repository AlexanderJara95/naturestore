import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './NavBar.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
function NavBar(){
    return (
      <AppBar position="static">
        <Toolbar>
          <div className="container-logo">
            <img src="./naturestore-logo.png"></img>
          </div>  
          <ul className='menupr'>
              <li><a href="">Inicio</a></li>
              <li><a href="">Rejuvenecimiento</a></li>
              <li><a href="">Anti-acné</a></li>
              <li><a href="">Reparación</a></li>
          </ul>
          <div className="container-login">
            <IconButton
                size="large"
                color="inherit"
              >
            <AccountCircle variant="h3"></AccountCircle>
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
}
export default NavBar;