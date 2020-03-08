import React from 'react';

import FormElement from '../FormElement/FormElement';
import {ArrowRightIcon} from '../Icons';

class Newsletter extends React.Component {

  render() {
    const newsletter = {
      name: "email",
      label: "E-mail",
      item: {
        kind: "input",
        type: "email"
      }
    };

    return (
    	<div className="newsletter">
        <div className="content">
          <p>Get in touch and subscribe to the newsletter!</p>
          <form>
            <FormElement data={newsletter}/>
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
