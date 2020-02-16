import React from 'react';
import FacebookIcon from '../Icons/Facebook.js';
import InstagramIcon from '../Icons/Instagram.js';
import PinterestIcon from '../Icons/Pinterest.js';
import TwitterIcon from '../Icons/Twitter.js';

class SocialNetworks extends React.Component {
  render() {
    return (
			<ul className="social-networks">
				<li>
					<a href="#">
						<FacebookIcon/>
					</a>
				</li>
				<li>
					<a href="#">
						<InstagramIcon/>
					</a>
				</li>
				<li>
					<a href="#">
						<PinterestIcon/>
					</a>
				</li>
				<li>
					<a href="#">
						<TwitterIcon/>
					</a>
				</li>				
			</ul>
    );
  }
}

export default SocialNetworks;
