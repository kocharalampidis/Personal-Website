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
import Profile from "./Pages/Profile";

function App() {
	return (
		<div class=' relative pb-10 min-h-screen bg-black  bg-opacity-50'>
			<BrowserRouter>
				<Navbar />
				<div class='mt-10'>
					<Switch>
						<Redirect from='/' to='/Welcome' exact />
						<Route path='/Welcome' component={Welcome} />
						<Route path='/Mybio' component={Mybio} />
						<Route path='/Projects' component={Projects} />
						<Route path='/Contact' component={Contact} />
						<Route path='/Profile' component={Profile} />
					</Switch>
				</div>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
