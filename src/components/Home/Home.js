import React, { useState, useEffect } from 'react';
import { prefixRandom } from '../../utils/helpers-functions';

import { Button, Col, Row } from 'antd';
import { CodeOutlined, IdcardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export const Home = () => {
  const [prefix, setPrefix] = useState(prefixRandom());

  // useEffect(() => {
    // setInterval(() => setPrefix(prefixRandom()), 3000);
  // });

  return (
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
          <code>{ prefix }</code>
        </a>
      </p>
      
      <Row>
        <Col className="gutter-row" span={11}>
          <Button
            type="primary"
            shape="round"
            size="large"
            icon={<IdcardOutlined />}
          >
            <Link to="/terminal" style={{ marginLeft: 5, color: 'white' }}>
              Open Portafolio
            </Link>
          </Button>
        </Col>
        <Col className="gutter-now" span={2}></Col>
        <Col className="gutter-row" span={11}>
          <Button
            type="primary"
            shape="round"
            size="large"
            icon={<CodeOutlined />}
            style={{ background: '#237804', border: 0 }}
          >
            <Link to="/terminal" style={{ marginLeft: 5, color: 'white' }}>
              Open Terminal
            </Link>
          </Button>
        </Col>
      </Row>
    </header>
  );
}