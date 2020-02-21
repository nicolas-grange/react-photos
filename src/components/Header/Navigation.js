import React from 'react';
import {
  NavLink,
  withRouter
} from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import Newsletter from './Newsletter';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.routesVisible = this.props.routes.filter(route => route.visible === true);
	}
	
	// get the name of the current page
	matchPathNametoRoute() {
		const pathName = this.props.location.pathname;

		return this.routesVisible.find(route => route.path === pathName).name;
	}

	// get the links of the main menu
	getLinksMainMenu() {
		const links = this.routesVisible.map(route => (
  		<li key={route.id}>
		    <NavLink exact activeClassName="selected" to={route.path}>{route.name}</NavLink>
		  </li>
  	));

  	return links;
	}

  render() {

  	const pageName = this.matchPathNametoRoute();
  	const linksMainMenu = this.getLinksMainMenu();

    return (
      <nav className="navigation">
				<h1 className="logo">
					<a href="/">
					  <img src={logo} alt="Daguet Photographie"/>
					</a>
				</h1>
				<div className="main-menu">
					<ul>
						{linksMainMenu}
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
