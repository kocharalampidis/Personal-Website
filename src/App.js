// libraries imports
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// components/css import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/css/font.css";

// pages imports
import Welcome from "./Pages/Welcome";
import Mybio from "./Pages/Mybio";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Specializations from "./Pages/Specializations";
import AD_Certs from "./components/Specializations_Content/AD_Certs";
import DL_Certs from "./components/Specializations_Content/DL_Certs";

function App() {
	return (
		<div class=' relative pb-10 min-h-screen bg-black bg-gradient-to-r from-gray-700 to-gray-900'>
			<BrowserRouter>
				<Navbar />
				<div class='mt-10'>
					<Switch>
						<Redirect from='/' to='/Welcome' exact />
						<Route path='/Welcome' component={Welcome} />
						<Route path='/Projects' component={Projects} />
						<Route path='/Profile' component={Profile} />
						<Route path='/Specializations' component={Specializations} />
						<Route path='/Contact' component={null} />
						<Route path='/Mybio' component={null} />
						<Route path='/AD_Certs' component={null} />
						<Route path='/DL_Certs' component={null} />
					</Switch>
				</div>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
