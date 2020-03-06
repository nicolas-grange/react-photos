import React from 'react';
import {
  NavLink
} from 'react-router-dom';

class NavLinks extends React.Component {

	listItems(links) {
		return(
			links.map((link) =>
        <li key={link.id}>
          <NavLink exact={link.path === "/" ? true : false} activeClassName="selected" to={link.path}>{link.label}</NavLink>
        </li>
		  )
		);
	}
  render() {

  	const listItems = this.listItems(this.props.links);

    return (
  		<ul>
  			{listItems}
  		</ul>
    );
  }
}

export default NavLinks;
