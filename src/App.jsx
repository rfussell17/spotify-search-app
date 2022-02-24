import logo from './logo.svg';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    
    <div className="App bg-dark">
      <Nav />
      <header className="App-header bg-dark">
      <h2>
          Spoti<span>FIND</span>
        </h2>
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover New Music Today
        </a>
      </header>
      <Footer />
    </div>
  
  )
}

export default App;
