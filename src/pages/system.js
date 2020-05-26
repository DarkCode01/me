import React, { Component } from 'react';
import update from 'immutability-helper';
import { createPID, logger } from '../utils/helpers-functions';


import { Layout } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { SystemComponents } from '../components';
import { FolderFilled, CodeFilled, FilePdfOutlined } from '@ant-design/icons';


class System extends Component {
  constructor() {
    super();

    this.state = {
      booting: true,
      pids: { }
    }

    this.moveInterface = this.moveInterface.bind(this);
    this.afterBoot = this.afterBoot.bind(this);
    this.createProcess = this.createProcess.bind(this);
    this.runProcess = this.runProcess.bind(this);
    this.killProccess = this.killProccess.bind(this);
  }

  componentDidMount() {
    logger('Init boot process');
    document.body.style.backgroundColor = 'rgb(14, 14, 14)';

    setTimeout(async () => {
      await this.setState({ booting: false });

      logger('Loading fonts and background images...');
      document.body.style.backgroundImage = 'url(darkcoder.jpg)';

      logger('Loaded background image ✅');

      document.body.style.backgroundSize = 'cover';
      logger('Resizing background image ✅');

      document.body.style.backgroundPosition = 'center center';
      logger('Center background image ✅');

      await this.afterBoot();
      logger('Finished boot system ✅');
    }, 3000);
  }

  async afterBoot() {
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
      pids: { ...this.state.pids, [`${pid}`]: {} }
    });

    logger(`Porcess created - PID: ${pid}`);

    return pid;
  }

  runProcess(pid, configurations) {
    this.setState(({ pids }) => ({
      pids: { ...pids, [`${pid}`]: configurations }
    }));

    logger(`PID: ${pid} is running on background`);
  }

  killProccess(pid) {
    // remove explicit process
    delete this.state.pids[`${pid}`];

    this.setState({ pids: { ...this.state.pids }});

    logger(`Porcess killed - PID: ${pid}`);
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
          { !this.state.booting
            ? <DndProvider backend={HTML5Backend}>
                <SystemComponents.PIDsComponent
                  pids={this.state.pids}
                  moveInterface={this.moveInterface}
                />
              </DndProvider>
            : <SystemComponents.BootComponent />
          }
        </Layout.Content>
      </Layout>
    );
  }
}

export default System;