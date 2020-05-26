import React, { Component } from 'react';

import { Layout } from 'antd';
import { SystemComponents } from '../components';


class Terminal extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <Layout className="app">
        <SystemComponents.TerminalComponent />
      </Layout>
    );
  }
}

export default Terminal;