import logo from "./logo.svg";
import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import { Switch, Route } from "react-router";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
			<About />
		</div>
	);
}

export default App;
