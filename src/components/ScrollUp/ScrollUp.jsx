import React from 'react';
import {ChevronIcon} from '../Icons';

class ScrollUp extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.displayScrollUp = this.displayScrollUp.bind(this);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.displayScrollUp)
    this.displayScrollUp();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.displayScrollUp);
  }

  displayScrollUp() {
    let visible = false;
    if(document.documentElement.scrollTop > window.innerHeight/2) {
      visible = true;
    }
    this.setState({visible: visible});
  }

  handleClick(e) {
    e.preventDefault();
    window.top.window.scrollTo({top: 0, behavior: 'smooth'});
  }

  render() {
    return(
      <a onClick={this.handleClick} className={"scroll-up " + (this.state.visible ? 'visible' : '')} href="#">
        <ChevronIcon />
      </a>
    );
  }
}

export default ScrollUp;
