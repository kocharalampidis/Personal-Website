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
import Specialization from "./Pages/Specialization";
import AD_Certs from "./components/Specializations_Content/AD_Certs";
import DL_Certs from "./components/Specializations_Content/DL_Certs";

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
						<Route path='/Specialization' component={Specialization} />
						<Route path='/AD_Certs' component={AD_Certs} />
						<Route path='/DL_Certs' component={DL_Certs} />
					</Switch>
				</div>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
