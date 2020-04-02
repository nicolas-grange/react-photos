import React from 'react';
import { isMailValid } from '../../scripts/utils.js';
import FormElement from '../FormElement/FormElement';
import {ArrowRightIcon} from '../Icons';

class Newsletter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      success: false,
      email: '',
      formMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      email: e.target.value.trim(),
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitted: true});
    let success, message;
    [success, message] = this.verifyForm();
    this.setState({
      success: success,
      formMessage: message
    });

    // if we have to send the mail
    if(this.state.sucess) {
      // send mail
    }
  }

  verifyForm() {
    const mail = this.state.email;
    if(!isMailValid(mail)) {
      return [false, 'Error: email format does not match!'];
    }
    return [true, 'Success: subscription for ' + mail + '!'];
  }

  render() {
    const newsletter = {
      required: true,
      name: "email",
      label: "E-mail",
      item: {
        kind: "input",
        type: "email",
        value: this.state.email
      }
    };

    const formMessage = (this.state.submitted ? (<p className={'message ' + (this.state.success ? 'success' : 'error')}>{this.state.formMessage}</p>) : null);

    return (
    	<div className="newsletter">
        <div className="content">
          <p>Get in touch and subscribe to the newsletter!</p>
          <form onSubmit={this.handleSubmit}>
            <FormElement updateValue={this.handleChange} data={newsletter}/>
            <button type="submit">
              <ArrowRightIcon/>
            </button>
          </form>
          {formMessage}
        </div>
    	</div>
    );
  }
}

export default Newsletter;
