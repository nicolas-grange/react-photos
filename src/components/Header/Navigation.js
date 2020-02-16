import React from 'react';
import logo from '../../assets/images/logo3.png';
import Newsletter from './Newsletter';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

class Navigation extends React.Component {
  render() {
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
					    <a href="./index.html" className="selected">Home</a>
					  </li>
					  <li>
					    <a href="./pages/about.html">About me</a>
					  </li>
					  <li>
					    <a href="./pages/portfolio.html">Portfolio</a>
					  </li>
					  <li>
					    <a href="./pages/contact.html">Contact</a>
					  </li>
					</ul>
					<Newsletter></Newsletter>
					<span>Home</span>
				</div>
				<div className="social-menu">
					<SocialNetworks></SocialNetworks>
				</div>
			</nav>
    );
  }
}

export default Navigation;
