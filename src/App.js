import React from 'react';
import Header from './components/Header/Header';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header id="header-menu" className="modularity-header"></Header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
