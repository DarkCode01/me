import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storage } from '../services/storage';
import { logger } from '../utils/helpers-functions';
import {
  initBoot,
  stopBoot,
  registerProcess,
  registerConfigurationProcess,
  updatePositionWidget,
  killProcess,
  killAllProcess
} from '../store/actions/system';

import { Layout } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { SystemComponents } from '../components';
import { FolderFilled, CodeFilled } from '@ant-design/icons';


class System extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.afterBoot = this.afterBoot.bind(this);
  }

  async componentDidMount() {
    await this.props.initBoot();

    setTimeout(async () => {
      await this.props.stopBoot();

      logger('Loading fonts and background images...');
      document.body.style.backgroundImage = 'url(darkcoder.jpg)';

      logger('Loaded background image ✅');

      document.body.style.backgroundSize = 'cover';
      logger('Resizing background image ✅');

      document.body.style.backgroundPosition = 'center center';
      logger('Center background image ✅');

      await this.afterBoot();
    }, 3000);
  }

  async afterBoot() {
    // executable of terminal and folder of files
    const configurations = [
      {
        top: 20,
        left: 20,
        widget: <FolderFilled />,
        name: 'folder',
        open: async () => {
          const pid = await this.props.registerProcess();

          await this.props.registerConfigurationProcess({
            pid: pid,
            configuration: {
              top: 20,
              left: 150,
              name: pid,
              open: '',
              widget: <SystemComponents.WindowComponent
                title="Files Manager"
                close={() => this.props.killProcess({ pid })}
                children={ <SystemComponents.ManagerComponent files={storage['/']} /> }
              />
            }
          });
        }
      },
      {
        top: 120,
        left: 20,
        widget: <CodeFilled />,
        name: 'terminal',
        open: async () => {
          const pid = await this.props.registerProcess();

          await this.props.registerConfigurationProcess({
            pid: pid,
            configuration: {
              top: 20,
              left: 150,
              name: pid,
              open: '',
              widget: <SystemComponents.WindowComponent
                title="terminal ~ me"
                close={() => this.props.killProcess({ pid })}
                children={
                  <SystemComponents.TerminalComponent
                    window
                    pid={pid}
                  /> 
                }
              />
            }
          });
        }
      },
      {
        top: window.screen.height / 3,
        left: window.screen.width / 2,
        name: 'welcome',
        open: '',
        widget: <SystemComponents.WindowComponent
          title="Welcome User"
          close={() => this.props.killProcess({ pid: 'welcome' })}
          width="auto"
          height="auto"
          children={ <SystemComponents.WelcomeComponent /> }
        />
      }
    ];

    // create process.
    for (let configuration of configurations) {
      const pid = await this.props.registerProcess(configuration.name);
      await this.props.registerConfigurationProcess({ pid, configuration });
    }
  }

  render() {
    return (
      <Layout style={{ backgroundColor: 'transparent' }}>
        <Layout.Content>
          { !this.props.isBooting
            ? <DndProvider backend={HTML5Backend}>
                <SystemComponents.PIDsComponent
                  pids={this.props.memory}
                  moveInterface={this.props.updatePositionWidget}
                />
              </DndProvider>
            : <SystemComponents.BootComponent />
          }
        </Layout.Content>
      </Layout>
    );
  }
}

const mapStateProps = ({ system }) => ({ ...system });
export default connect(
  mapStateProps,
  {
    initBoot,
    stopBoot,
    registerProcess,
    registerConfigurationProcess,
    updatePositionWidget,
    killProcess,
    killAllProcess
  }
)(System);