import React, {Component} from 'react';
import './App.scss';
import {NavLink, Route, Switch} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import Home from './components/home';
import Settings from './components/settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCog } from '@fortawesome/free-solid-svg-icons'

const hueHub = React.createContext('')

export default class App extends Component {
	render() {
		return (
			<div id="body">
				<header className="App-header">
					<Menu outerContainerId="body" pageWrapId="mainContent">
						<NavLink id="home" exact to="/"><FontAwesomeIcon icon={faHome}/><span>Home</span></NavLink>
						<NavLink id="settings" to="/settings"><FontAwesomeIcon icon={faCog}/><span>Settings</span></NavLink>
					</Menu>
				</header>
				<div id="mainContent">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/settings" component={Settings}/>
					</Switch>
				</div>
			</div>
		);
	}
}