import React from 'react';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.resizeOverlay = this.resizeOverlay.bind(this);
    this.state = {
      style: null
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeOverlay)
    this.resizeOverlay();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeOverlay);
  }

  // resize overlay if the window is resized
  resizeOverlay() {
    var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
    var diameter = radius * 2;
    // define new style
    const style = {
      width: diameter + 'px',
      height: diameter + 'px',
      marginTop: -radius + 'px',
      marginLeft: -radius + 'px'
    };
    // update state
    this.setState({
      style: style
    });
  }

  render() {
    const style = this.state.style;

    return (
      <div style={style} className="nav-overlay"></div>
    );
  }
}

export default Overlay;
