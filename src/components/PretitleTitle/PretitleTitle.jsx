import React from 'react';

class PretitleTitle extends React.Component {

  render() {

    const data= this.props.data;

    return (
      <div className="pretitle-title">
        <p className="pretitle">{data.pretitle}</p>
        <h2 className="title">{data.title}</h2>
      </div>
    );
  }
}

export default PretitleTitle;
