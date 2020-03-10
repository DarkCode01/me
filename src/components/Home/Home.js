import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <header className="app-header">
    <img
      style={{ width: '50%' }}
      src="darkcoder.jpg"sizes
      className="App-logo"
      alt="logo"
    />
    <p className="typing-effect">
      José M. Segura Polanco
      <br />
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