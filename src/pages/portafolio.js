import React, { Component } from 'react';

import { Layout } from 'antd';
import { Portafolio as PortafolioComponent } from '../components';


class Portafolio extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <Layout>
        <PortafolioComponent.Navbar />
      </Layout>
    );
  }
}

export default Portafolio;