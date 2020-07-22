import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { updateAppVhUnit } from './scripts/utils.js';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Privacy from './pages/Privacy/Privacy';
import NotFound from './pages/NotFound/NotFound';
import ScrollUp from './components/ScrollUp/ScrollUp';
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

  componentDidMount() {
    window.addEventListener('resize', updateAppVhUnit);
    window.addEventListener('orientationchange', updateAppVhUnit);
    updateAppVhUnit(); 
  }

  componentWillUnmount() {
    window.removeEventListener("resize", updateAppVhUnit);
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
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header routes={routes}/>
          <main>
            {routesComponents}
            <ScrollUp />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
