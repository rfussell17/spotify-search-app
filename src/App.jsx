import logo from './logo.svg';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Spoti<span>FIND</span>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover New Music Today
        </a>
      </header>
    </div>
  
  )
}

export default App;
