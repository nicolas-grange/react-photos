import React from 'react';
import BurgerMenu from './BurgerMenu';
import Overlay from './Overlay';
import Navigation from './Navigation';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			open: false
		}
	}

  // open/close menu
  handleClick(e) {
  		// test if it's not an input element
  		if(e.target.tagName != "INPUT") {
  			this.setState((prevState, props) => ({
				open: prevState.open === true ? false : true
			}));
  		}
	}

  render() {
    const open = this.state.open;
    
    return (
      <header className={"header-menu " + (open ? 'open' : '')} onClick={this.handleClick}>
        <BurgerMenu></BurgerMenu>
        <Overlay></Overlay>
        <Navigation></Navigation>
      </header>
    );
  }
}

export default Header;
