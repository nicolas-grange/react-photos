import React from 'react';
import {
  withRouter
} from 'react-router-dom';

import Logo from '../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import Newsletter from './Newsletter';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.routesVisible = this.props.routes.filter(route => route.visible === true);
	}
	
	// get the name of the current page
	matchPathNametoRoute() {
		const pathName = this.props.location.pathname.split('/')[1];
		return this.routesVisible.find(route => route.path.split('/')[1] === pathName).label;
	}

  render() {

  	const pageName = this.matchPathNametoRoute();
  	const linksMainMenu = this.routesVisible;

    return (
      <nav className="navigation">
				<Logo color="white"/>
				<div className="main-menu">
					<NavLinks links={linksMainMenu}/>
					<Newsletter/>
					<span>{pageName}</span>
				</div>
				<div className="social-menu">
					<SocialNetworks/>
				</div>
			</nav>
    );
  }
}

export default withRouter(Navigation);
