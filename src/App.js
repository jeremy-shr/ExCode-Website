import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Nav/Navbar";
import RightNavbar from "./components/Nav/RightNav";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Program from "./components/Program";

function App() {
	return (
		<>
			<div className="App" />

			<Navbar />
			<RightNavbar />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/program" element={<Program />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/faq" element={<Faq />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;