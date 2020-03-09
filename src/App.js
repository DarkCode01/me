import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Helmet from 'react-helmet';
import { Home } from './components/Home';
import { Terminal } from './components/Terminal';

// Styles css
import './styles/index.css';
import './styles/App.css';


function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Me - Website!</title>
        <link
          rel="icon"
          type="image/png"
          href="https://avatars0.githubusercontent.com/u/23442814?s=400&u=3f04d79827b9513c03de3288dc7e801df35da55a&v=4"
        />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route excat path="/terminal" component={Terminal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
