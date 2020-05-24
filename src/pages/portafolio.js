import React, { Component } from 'react';

import DragSelect from 'dragselect';
import { Layout } from 'antd';
import { Portafolio as PortafolioComponent } from '../components';
import { FolderFilled, CodeFilled } from '@ant-design/icons';


class Portafolio extends Component {
  constructor() {
    super();

    this.state = { }
  }

  componentDidMount() {
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundImage = 'url(darkcoder.jpg)';

    // effect of select objects
    new DragSelect({
      selectables: document.querySelectorAll('.item'),
      area: document.querySelector('#desktop')
    });
  }

  render() {
    return (
      <Layout id="desktop" style={{ backgroundColor: 'transparent' }}>
        <Layout.Content style={{ padding: '50px' }}>
          <PortafolioComponent.WindowComponent />
        </Layout.Content>
        <Layout.Sider theme="dark" breakpoint="sm" style={{ backgroundColor: 'transparent' }}>
          {/* Folders and executables */}
          <PortafolioComponent.FoldersComponent
            folders={[
              { icon: <FolderFilled />, name: 'Me - Files', open: '' },
              { icon: <CodeFilled />, name: 'terminal', open: '' }
            ]}
          />
        </Layout.Sider>
      </Layout>
    );
  }
}

export default Portafolio;