import React from 'react';
import { CartProvider } from './context/cartContext';
import './App.css';
import './components/NavBar/NavBar.js'
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          </Routes>
        </BrowserRouter>        
      </div>
    </CartProvider>
    </>
    
  );
}

export default App;
