import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';
import Privacy from './components/Pages/Privacy';
import NotFound from './components/Pages/NotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './styles/App.scss';

const routes = [
  {
  	id: 1,
  	visible: true,
    path: '/',
    label: 'Home',
    component: Home
  },
  {
  	id: 2,
  	visible: true,
    path: '/about',
    label: 'About me',
    component: About
  },
  {
  	id: 3,
  	visible: true,
    path: '/portfolio',
    label: 'Portfolio',
    component: Portfolio
  },
  {
  	id: 4,
  	visible: true,
    path: '/contact',
    label: 'Contact',
    component: Contact
  },
  {
    id: 5,
    visible: false,
    path: '/privacy',
    label: 'Privacy',
    component: Privacy
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorLogo: 'dark',
      bgLogo: ''
    }
  }

	// get the routes components list
	getRoutesComponents() {
		const routesList = routes.map((route) => (
      <Route
        key={route.id} 
        exact={route.path === "/" ? true : false}
        path={route.path} 
        component={route.component} 
      />
	  ));

		return (
      <Switch>
        {routesList}
        <Route component={NotFound} />
      </Switch>
    );
	}

  render() {
  	const routesComponents = this.getRoutesComponents();
    
		return (
			<Router>
		    <div className="App">
		      <Header routes={routes}/>
		      <main>
		      	{routesComponents}
		      </main>
          <Footer />
		    </div>
		  </Router>
  	);
  }
}

export default App;
