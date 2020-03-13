import React, { Component } from 'react';

import { Layout } from 'antd';
import { Terminal as TerminalComponent } from '../components';


class Terminal extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <Layout className="app">
        <TerminalComponent />
      </Layout>
    );
  }
}

export default Terminal;