import React, { Component } from 'react';

import { Layout } from 'antd';
import DragSelect from 'dragselect';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
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
      area: document.querySelector('.desktop')
    });
  }

  render() {
    return (
      <Layout style={{ backgroundColor: 'transparent' }}>
        <Layout.Content>
          <DndProvider backend={HTML5Backend}>
            <PortafolioComponent.FoldersComponent
              folders={{
                folder: { top: 20, left: 20, icon: <FolderFilled />, name: 'Me - Files', open: '' },
                exec: { top: 180, left: 20, icon: <CodeFilled />, name: 'terminal', open: '' }
              }}
            />
          </DndProvider>
        </Layout.Content>
      </Layout>
    );
  }
}

export default Portafolio;