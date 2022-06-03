import './App.css';
import './components/NavBar/NavBar.js'
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          </Routes>
        </BrowserRouter>        
      </div>
    </>
    
  );
}

export default App;
