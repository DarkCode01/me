import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { FolderFilled, CodeFilled, FilePdfOutlined } from '@ant-design/icons';


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
        name: 'Me - Files',
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
                title="Nose"
                close={() => this.props.killProcess({ pid })}
                children={ [null, null].map(file => (
                  <FilePdfOutlined
                    key={Math.random() * 100}
                    className="window-files"
                    style={{ fontSize: '500%' }}
                  />
                ))}
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
                    configuration={{
                      prompt: { backgroundColor: 'white', color: 'black' },
                      result: { color: 'black' },
                      promptInput: { backgroundColor: 'white', color: 'black' }
                    }}
                  /> 
                }
              />
            }
          });
        }
      },
    ];

    // create process.
    for (let configuration of configurations) {
      const pid = await this.props.registerProcess();
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