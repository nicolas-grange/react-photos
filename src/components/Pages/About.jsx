import React from 'react';

import PretitleTitle from '../PretitleTitle/PretitleTitle';
import PhotoSection from '../PhotoSection/PhotoSection';

import photoAbout from '../../assets/images/about/about.jpg';


const data = {
	pretitleTitle: {
		pretitle: "More",
		title: "About me"
	}

}


class About extends React.Component {
  render() {
    return (
    	<div className="about-container">

    		<section>
    			<PhotoSection photo={photoAbout}/>
	    	</section>
	    	<section>
	    		<PretitleTitle data={data.pretitleTitle}/>
	    		<h3>My story</h3>
	    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat:</p>
	    		<ul>
	    			<li>Lorem ipsum dolor</li>
	    			<li>Lorem ipsum dolor</li>
	    			<li>Lorem ipsum dolor</li>
	    		</ul>
	    		 <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	    		<h3>My inspirations</h3>
	    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	    	</section>	
    	</div>
    );
  }
}

export default About;
