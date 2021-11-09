import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import About from "./components/About";
import Home from "./components/Home";
<<<<<<< HEAD
import Navbar from "./components/Nav/Navbar";
import RightNavbar from "./components/Nav/RightNav";
=======
>>>>>>> 27b11072d5a20ebb9c8e90890e3dbd15c0b99553

function App() {
	return (
		<div className="App">
<<<<<<< HEAD
			<Navbar/>
			<RightNavbar/>
=======
>>>>>>> 27b11072d5a20ebb9c8e90890e3dbd15c0b99553
			<Routes>
				<Route path="/" component={Home} />
			</Routes>
			<About />
		</div>
	);
}

export default App;
