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
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  	id: 2,
    path: '/about',
    name: 'About me',
    component: About
  },
  {
  	id: 3,
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
  	id: 4,
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];


class App extends React.Component {

  render() {
		return (
			<Router>
		    <div className="App">
		      <Header routes={routes}/>


		      <main>
		      	{routes.map((route) => (
	            <Route
	              key={route.id} 
	              path={route.path} 
	              component={route.component} 
	            />
	          ))}
		      </main>




		      <footer></footer>
		    </div>
		  </Router>
  	);

  }
}

export default App;
