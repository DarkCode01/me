import React, { Component } from 'react';
import { version } from '../../package.json';

import { Layout } from 'antd';
import {
  CommingSoon,
  Terminal as TerminalComponent
} from '../components';


class Terminal extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <Layout className="app">
        { version !== '0.1.0' && <TerminalComponent /> }
        { version === '0.1.0' && <CommingSoon /> }
      </Layout>
    );
  }
}

export default Terminal;