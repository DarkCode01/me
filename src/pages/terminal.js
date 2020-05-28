import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  registerProcess,
  registerConfigurationProcess,
  killAllProcess
} from '../store/actions/system';

import { Layout } from 'antd';
import { SystemComponents } from '../components';


class Terminal extends Component {
  constructor() {
    super();

    this.state = {
      pid: null
    }
  }

  async componentDidMount() {
    // remove all other session
    await this.props.killAllProcess();

    const pid = await this.props.registerProcess();
    await this.props.registerConfigurationProcess({
      pid: pid,
      configuration: {
        top: 0,
        left: 0,
        name: pid,
        open: '',
        widget: <SystemComponents.TerminalComponent pid={pid} />
      }
    });

    this.setState({ pid });
  }

  render() {
    return (
      <Layout className="app">
        { this.state.pid && this.props.memory[this.state.pid].widget }
      </Layout>
    );
  }
}

const mapStateProps = ({ system }) => ({ ...system });
export default connect(
  mapStateProps,
  { registerProcess, registerConfigurationProcess, killAllProcess }
)(Terminal);