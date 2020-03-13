import React from 'react';
import Logo from '../Logo/Logo';
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
    		<Logo color="dark"/>
	    	<div className="wrapper-intern">
	    		<PretitleTitle data={{pretitle: '404', title: 'Error'}}/>
	    		<h3>Page not found</h3>
	    		<p>No match for <code>{this.props.location.pathname}</code></p>
	    		<Button data={{label: 'Homepage', path: '/'}}/>
	    	</div>
	    </section>
    );
  }
}

export default withRouter(NotFound);
