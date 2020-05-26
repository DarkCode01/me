import React, { Component } from 'react';
import update from 'immutability-helper';
import { createPID } from '../utils/helpers-functions';


import { Layout } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Portafolio as PortafolioComponent } from '../components';
import { FolderFilled, CodeFilled, FilePdfOutlined } from '@ant-design/icons';


class Portafolio extends Component {
  constructor() {
    super();

    this.state = {
      pids: {
        terminal: { top: 120, left: 20, icon: <CodeFilled />, name: 'terminal', open: '' },
        folder: {
          top: 20,
          left: 20,
          icon: <FolderFilled />,
          name: 'Me - Files',
          open: this.openWindowManageFiles.bind(this)({ title: 'no', files: [null, null]})
        }
      }
    }

    this.moveBox = this.moveBox.bind(this);
    this.createPID = this.createPID.bind(this);
    this.killProccess = this.killProccess.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundImage = 'url(darkcoder.jpg)';
  }

  createPID() {
    const pid = createPID();

    // registry process
    this.setState({ pids: { ...this.state.pids, [`${pid}`]: {} } });

    return pid;
  }

  openWindowManageFiles({ files, title }) {
    return () => {
      const pid = this.createPID();

      this.setState(({ pids }) => ({
        pids: {
          ...pids,
          [`${pid}`]: {
            top: 20,
            left: 150,
            name: pid,
            open: '',
            icon: <PortafolioComponent.WindowComponent
              title={title}
              close={() => {
                this.killProccess(pid);
              }}
              children={ files.map(file => (
                <FilePdfOutlined
                  key={Math.random() * 100}
                  className="window-files"
                  style={{ fontSize: '500%' }}
                />
              ))}
            />
          }
        }
      }));
    }
  }

  killProccess(pid) {
    // remove explicit process
    delete this.state.pids[`${pid}`];

    this.setState({ pids: { ...this.state.pids }});
  }

  moveBox(id, left, top) {
    this.setState(({ pids }) => ({
      pids: update(this.state.pids, {
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
              folders={this.state.pids}
              moveBox={this.moveBox}
            />
          </DndProvider>
        </Layout.Content>
      </Layout>
    );
  }
}

export default Portafolio;