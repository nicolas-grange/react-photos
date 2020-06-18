import React from 'react';
import {FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon} from '../Icons';

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
