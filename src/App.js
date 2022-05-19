import './App.css';
import './components/NavBar/NavBar.js'
import NavBar from './components/NavBar/NavBar.js';
import ListContainer from './components/Card/ListContainer';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <h1 className='title'>Nature Store</h1>
        <ListContainer></ListContainer>
      </div>
    </>
    
  );
}

export default App;
