import logo from './logo.svg';
import './App.css';
import './components/navbar/NavBar.js'
import NavBar from './components/navbar/NavBar.js';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <h1 className='title'>Nature Store</h1>
      </div>
    </>
    
  );
}

export default App;
