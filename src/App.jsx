import Nav from './components/Nav';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    
    <div className="App bg-dark"> 
      <header className="App-header bg-dark">
        <Nav />
      </header>
      <MainContent />
      <Footer />
    </div>
  
  )
}

export default App;
