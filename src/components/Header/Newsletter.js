import React from 'react';
import ArrowRightIcon from '../Icons/ArrowRight.js';

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      focus: false,
      empty: true
    };
  }

  handleChange(e) {
    this.setState({
      empty: e.target.value.trim().length > 0 ? false : true
    });
  }

  handleFocus() {
    this.setState({
      focus: true
    });
  }

  handleBlur() {
    this.setState({
      focus: false
    });
  }

  render() {
    const focus = this.state.focus;
    const empty = this.state.empty;

    return (
    	<div className="newsletter">
        <div className="content">
          <p>Get in touch and subscribe to the newsletter!</p>
          <form>
            <label className={(focus || !empty) ? "focus " : ""}>E-mail</label>
            <input  onChange={this.handleChange} 
                    onFocus={this.handleFocus} 
                    onBlur={this.handleBlur} 
                    type="email" 
            />
            <button type="submit">
              <ArrowRightIcon/>
            </button>
          </form>
        </div>
    	</div>
    );
  }
}

export default Newsletter;
