import { Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import Landing from './pages/Landing';
import Footer from './components/Footer'
import NavBar from './components/NavBar';
import Works from './pages/Works';
import Contact from './pages/Contact';
import '../assets/styles/Custom.scss';

const App = () => {
	return (
		<div>
			<Route path='/works' component={NavBar}></Route>
			<Switch>
				<Route exact path="/" component={Landing}></Route>
				<Route exact path="/contact" component={Contact}></Route>
				<Route exact path="/works" component={Works}></Route>
			</Switch>
			<Route path="/works" component={Footer}/>
		</div>
	);
};

export default App;
