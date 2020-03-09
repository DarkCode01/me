import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <header className="app-header">
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
    > Open terminal</Link>
  </header>
);