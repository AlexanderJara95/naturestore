import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import './NavBar.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
function NavBar(){
    return (
      <AppBar position="static">
        <Toolbar>
          <div className="container-logo">
            <img src="./naturestore-logo.png"></img>
          </div>  
          <ul className='menupr'>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/category/shampoo">Shampoo{/*Rejuvenecimiento*/}</Link></li>
              <li><Link to="/category/jabon">Jabón{/*Anti-acné*/}</Link></li>
              <li><Link to="">Reparación</Link></li>
          </ul>
          <div className="container-login">
            <IconButton
                size="large"
                color="inherit"
              >
              <AccountCircle fontSize='medium'></AccountCircle>            
            </IconButton>
            <CartWidget></CartWidget>
          </div>
        </Toolbar>
      </AppBar>
    );
}
export default NavBar;