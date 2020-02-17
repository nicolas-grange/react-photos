import React from 'react';
import {
  Route, 
  NavLink,
  withRouter
} from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import Newsletter from './Newsletter';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

class Navigation extends React.Component {
	
	// get the name of the current page
	matchPathNametoRoute() {
		const routes = this.props.routes;
		const pathName = this.props.location.pathname;

		return routes.find(route => route.path === pathName).name;
	}

  render() {

  	const pageName = this.matchPathNametoRoute();

    return (
      <nav className="navigation">
				<h1 className="logo">
					<a href="/">
					  <img src={logo} alt="Daguet Photographie"/>
					</a>
				</h1>
				<div className="main-menu">
					<ul>
					  <li>
					    <NavLink exact activeClassName="selected" to="/">Home</NavLink>
					  </li>
					  <li>
					    <NavLink exact activeClassName="selected" to="/about">About me</NavLink>
					  </li>
					  <li>
					    <NavLink exact activeClassName="selected" to="/portfolio">Portfolio</NavLink>
					  </li>
					  <li>
					    <NavLink exact activeClassName="selected" to="/contact">Contact</NavLink>
					  </li>
					</ul>
					<Newsletter></Newsletter>
					<span>{pageName}</span>
				</div>
				<div className="social-menu">
					<SocialNetworks></SocialNetworks>
				</div>
			</nav>
    );
  }
}

export default withRouter(Navigation);
