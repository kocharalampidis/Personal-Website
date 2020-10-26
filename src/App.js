// libraries imports
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// components/css import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages imports
import welcome from "./Pages/welcome";
import mybio from "./Pages/mybio";
import calendar from "./Pages/calendar";

function App() {
	return (
		<div class='relative pb-10 border min-h-screen bg-red-900'>
			<BrowserRouter>
				<Navbar />
				<div>
					<Switch>
						<Redirect from='/' to='/welcome' exact />
						<Route path='/welcome' component={welcome} />
						<Route path='/mybio' component={mybio} />
						<Route path='/calendar' component={calendar} />
					</Switch>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

//  <div className="relative pb-10 min-h-screen">
