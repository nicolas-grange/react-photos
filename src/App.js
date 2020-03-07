import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';

import Header from './components/Header/Header';

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
  }
];

class App extends React.Component {

	// get the routes components list
	getRoutesComponents() {
		const routesList = routes.map((route) => (
      <Route
        key={route.id} 
        path={route.path} 
        component={route.component} 
      />
	  ));

		return routesList;
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
		      <footer></footer>
		    </div>
		  </Router>
  	);

  }
}

export default App;
