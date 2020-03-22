import React from 'react';
import Fade from 'react-reveal/Fade';

class PretitleTitle extends React.Component {

  render() {

    const data= this.props.data;
    const customStyle= this.props.customStyle;
    return (
      <div style={customStyle} className="pretitle-title">
      	<Fade bottom>
	        <p className="pretitle">{data.pretitle}</p>
	        <h2 className="title">{data.title}</h2>
	      </Fade>
      </div>
    );
  }
}

export default PretitleTitle;
