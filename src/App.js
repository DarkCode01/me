import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { Home } from './components/Home';
import { Terminal } from './components/Terminal';

// Styles css
import './styles/index.css';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route excat path="/terminal" component={Terminal} />
        </Switch>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </Router>
    </div>
  );
}

export default App;
