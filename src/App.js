// libraries imports
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// components/css import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages imports
import Welcome from "./Pages/Welcome";
import Mybio from "./Pages/Mybio";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
	return (
		<div class='relative pb-10 min-h-screen bg-red-400  bg-opacity-75'>
			<BrowserRouter>
				<Navbar />
				<div>
					<Switch>
						<Redirect from='/' to='/Welcome' exact />
						<Route path='/Welcome' component={Welcome} />
						<Route path='/Mybio' component={Mybio} />
						<Route path='/Projects' component={Projects} />
						<Route path='/Contact' component={Contact} />
					</Switch>
				</div>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
