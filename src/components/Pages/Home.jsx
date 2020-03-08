import React from 'react';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

const data = {
	label: 'Discover',
	path: '#'
}

class Home extends React.Component {
  render() {
    return (
    	<div className="home-container">
	    	<section className="introduction-section">

	    		<Logo color="white"/>
          <div className="infos">
            <p>Photograph</p>
            <h2>Margaux Daguet</h2>
            <Button data={data}/>
          </div>
          <SocialNetworks/>

	    	</section>
	    	<section className="about-section"></section>
	    	<section className="portfolio-section"></section>
	    	<section className="contact-section"></section>
    	</div>
    );
  }
}

export default Home;
