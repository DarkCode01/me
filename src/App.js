import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages & Components
import {
  Home,
  Terminal,
  Portafolio
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

          <Route excat path="/gui" component={Portafolio} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
