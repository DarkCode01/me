import React from 'react';
import shuffle from 'lodash/shuffle'
import { PREFIXES} from '../utils/helpers-functions';

import ReactTypingEffect from 'react-typing-effect';
import { Button } from 'antd';
import { CodeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <header className="app-header">
      <img
        style={{ width: '50%' }}
        src="darkcoder.jpg"
        sizes="true"
        className="App-logo"
        alt="logo"
      />
      <h2 style={{ color: 'white' }}>
        José Miguel Segura Polanco
      </h2>
      <p>
        <a
          className="app-link"
          href="https://github.com/darkcode01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>
            <ReactTypingEffect
              text={shuffle(PREFIXES)}
              speed={100}
            />
          </code>
        </a>
      </p>
      <Button
          type="primary"
          shape="round"
          size="large"
          icon={<CodeOutlined />}
          style={{ background: '#237804', border: 0 }}
        >
          <Link to="/terminal" style={{ marginLeft: 5, color: 'white' }}>
            whoami!
          </Link>
        </Button>
    </header>
  );
}