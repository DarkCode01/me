import React, { Component } from 'react';

import { Layout } from 'antd';
import { Portafolio as PortafolioComponent } from '../components';


class Portafolio extends Component {
  constructor() {
    super();

    this.state = {}
  }

  componentDidMount() {
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundImage = 'url(darkcoder.jpg)';
  }

  render() {
    return (
      <Layout>
      </Layout>
    );
  }
}

export default Portafolio;