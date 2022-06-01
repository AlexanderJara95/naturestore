import './App.css';
import './components/NavBar/NavBar.js'
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <h1 className='title'>Nature Store</h1>
        <ItemDetailContainer></ItemDetailContainer>
      </div>
    </>
    
  );
}

export default App;
