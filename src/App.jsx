import Nav from './components/Nav';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Discover from './components/Discover';
import Search from './components/Search';
import './App.css';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    
    <Router className="App bg-dark"> 
      <header className="App-header bg-dark">
        <Nav />
      </header>
      <Route path="/home">
        <MainContent />
      </Route>
      <Route path="/discover">
        <Discover />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      
      <Footer />
    </Router>
  
  )
}

export default App;
