import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Nav/Navbar";
import RightNavbar from "./components/Nav/RightNav";

function App() {
	return (
		<div className="App">
			<Navbar/>
			<RightNavbar/>
			<Routes>
				<Route path="/" component={Home} />
			</Routes>
			<About />
		</div>
	);
}

export default App;
