import React from 'react';

class BurgerMenu extends React.Component {

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <a onClick={this.handleClick} href="#" className="burger-menu">
        <span></span>
        <span></span>
        <span></span>
      </a>
    );
  }
}

export default BurgerMenu;
