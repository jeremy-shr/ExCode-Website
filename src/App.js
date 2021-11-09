import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" component={Home} />
			</Routes>
			<About />
		</div>
	);
}

export default App;
