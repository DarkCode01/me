import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <header className="app-header">
    <img
      src="https://avatars0.githubusercontent.com/u/23442814?s=400&u=3f04d79827b9513c03de3288dc7e801df35da55a&v=4"
      className="App-logo"
      alt="logo"
    />
    <p className="typing-effect">
      José Miguel Segura Polanco &#8287;
      <a
        className="app-link"
        href="https://github.com/darkcode01"
        target="_blank"
        rel="noopener noreferrer"
      >
        (<code>Darkcoder</code>)
      </a>
    </p>
    <Link
      className="open-terminal"
      to="/terminal"
    > Open Terminal</Link>
  </header>
);