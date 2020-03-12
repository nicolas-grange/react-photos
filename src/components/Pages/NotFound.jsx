import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  withRouter
} from 'react-router-dom';

import PretitleTitle from '../PretitleTitle/PretitleTitle';
import Button from '../Button/Button';

class NotFound extends React.Component {

	componentDidMount() {
		window.top.window.scrollTo(0,0);
	}

  render() {
    return (
    	<section>
	    	<div className="wrapper-intern">
	    		<PretitleTitle data={{pretitle: '404', title: 'Error'}}/>
	    		<Fade bottom>
		    		<h3>Page not found</h3>
		    		<p>No match for <code>{this.props.location.pathname}</code></p>
		    		<Button data={{label: 'Homepage', path: '/'}}/>
		    	</Fade>
	    	</div>
	    </section>
    );
  }
}

export default withRouter(NotFound);
