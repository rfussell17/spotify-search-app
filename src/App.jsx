import Nav from './components/Nav';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Discover from './components/Discover';
import Search from './components/Search';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

function App() {

	return (

		

		<Router className="App bg-dark">

			<header className="App-header bg-dark">
				<Nav />
			</header>
			<main>
				<div className="main-content bg-dark ">
					<div className="main-content-title-bg">
						<Route path="/home">
							<MainContent />
						</Route>
						<Route path="/discover">
							<Discover />
						</Route>
						<Route path="/search">
							<Search />
						</Route>
					</div>
				</div>
			</main>

			<footer>
				<Footer />
			</footer>

		</Router>
	)
}

export default App;
