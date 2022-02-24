import logo from './logo.svg';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    
    <div className="App bg-dark">
      <Nav />
      <header className="App-header bg-dark">
      <h2 className="hero-title mb-3">
          Spoti<span>FIND</span>
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
          <p></p>Discover New Music Today

      </header>
      <Footer />
    </div>
  
  )
}

export default App;
