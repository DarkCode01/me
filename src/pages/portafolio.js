import React, { Component } from 'react';
import update from 'immutability-helper';

import { Layout } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Portafolio as PortafolioComponent } from '../components';
import { FolderFilled, CodeFilled } from '@ant-design/icons';


class Portafolio extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        terminal: { top: 120, left: 20, icon: <CodeFilled />, name: 'terminal', open: '' },
        folder: {
          top: 20,
          left: 20,
          icon: <FolderFilled />,
          name: 'Me - Files',
          open: this.openNewWindow.bind(this)({ title: 'no', files: [null, null]})
        }
      }
    }

    this.moveBox = this.moveBox.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundImage = 'url(darkcoder.jpg)';
  }

  openNewWindow({ files, title }) {
    return () => {
      this.setState(({ data }) => ({
        data: {
          ...data,
          window: {
            top: 20, left: 150,
            name: 'gfhgfghfhg', open: '',
            icon: <PortafolioComponent.WindowComponent title={title} files={files} />
          }
        }
      }));
    }
  }

  moveBox(id, left, top) {
    this.setState(({ data }) => ({
      data: update(this.state.data, {
        [id]: {
          $merge: { left, top },
        },
      })
    }));
  }

  render() {
    return (
      <Layout style={{ backgroundColor: 'transparent' }}>
        <Layout.Content>
          <DndProvider backend={HTML5Backend}>
            <PortafolioComponent.FoldersComponent
              folders={this.state.data}
              moveBox={this.moveBox}
            />
          </DndProvider>
        </Layout.Content>
      </Layout>
    );
  }
}

export default Portafolio;