import React, { Component } from 'react';

import { Layout } from 'antd';
import { Home as HomeComponent } from '../components';

class Home extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <Layout className="app">
        <HomeComponent />
      </Layout>
    );
  }
}

export default Home;