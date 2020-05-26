import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages & Components
import {
  Home,
  Terminal,
  System
} from './pages';

// Styles css
import 'antd/dist/antd.css';
import './styles/index.css';
import './styles/App.css';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route excat path="/terminal" component={Terminal} />

          <Route excat path="/system" component={System} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
