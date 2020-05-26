import React, { Component } from 'react';
import update from 'immutability-helper';
import { createPID } from '../utils/helpers-functions';


import { Layout } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { SystemComponents } from '../components';
import { FolderFilled, CodeFilled, FilePdfOutlined } from '@ant-design/icons';


class System extends Component {
  constructor() {
    super();

    this.state = {
      pids: { }
    }

    this.moveInterface = this.moveInterface.bind(this);
    this.createProcess = this.createProcess.bind(this);
    this.runProcess = this.runProcess.bind(this);
    this.killProccess = this.killProccess.bind(this);
  }

  async componentDidMount() {
    // executable of terminal and folder of files
    const configurations = [
      {
        top: 20,
        left: 20,
        icon: <FolderFilled />,
        name: 'Me - Files',
        open: async () => {
          const pid = await this.createProcess();

          await this.runProcess(pid, {
            top: 20,
            left: 150,
            name: pid,
            open: '',
            icon: <SystemComponents.WindowComponent
              title="Nose"
              close={() => {
                this.killProccess(pid);
              }}
              children={ [null, null].map(file => (
                <FilePdfOutlined
                  key={Math.random() * 100}
                  className="window-files"
                  style={{ fontSize: '500%' }}
                />
              ))}
            />
          });
        }
      },
      { top: 120, left: 20, icon: <CodeFilled />, name: 'terminal', open: '' },
    ];

    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundImage = 'url(darkcoder.jpg)';

    // create process.
    for (let configuration of configurations) {
      const pid = await this.createProcess();

      await this.runProcess(pid, configuration);
    }
  }

  async createProcess() {
    const pid = createPID();

    // registry process
    await this.setState({
      pids: {
        ...this.state.pids,
        [`${pid}`]: {}
      }
    });

    return pid;
  }

  runProcess(pid, configurations) {
    this.setState(({ pids }) => ({
      pids: { ...pids, [`${pid}`]: configurations }
    }));
  }

  killProccess(pid) {
    // remove explicit process
    delete this.state.pids[`${pid}`];

    this.setState({ pids: { ...this.state.pids }});
  }

  moveInterface(id, left, top) {
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
            <SystemComponents.PIDsComponent
              pids={this.state.pids}
              moveInterface={this.moveInterface}
            />
          </DndProvider>
        </Layout.Content>
      </Layout>
    );
  }
}

export default System;