import React from 'react';


class NavLinks extends React.Component {

	listItems(links) {
		return(
			links.map((link) =>
	  		<li key={link.id}>
	  			<a href={link.parameter}>{link.label}</a>
	  		</li>
		  )
		);
	}
  render() {

  	const listItems = this.listItems(this.props.links);

    return (
    	<nav>
    		<ul>
    			{listItems}
    		</ul>
    	</nav>
    );
  }
}

export default NavLinks;
