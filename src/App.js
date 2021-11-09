import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
