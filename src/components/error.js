import { Component } from 'react';
import { connect } from 'react-redux';
import { killAllProcess } from '../store/actions/system';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidCatch() {
    await this.props.killAllProcess();
  }

  render() {
    return this.props.children;
  }
}

const mapStateProps = (store) => ({ ...store });
export default connect(mapStateProps, { killAllProcess })(ErrorBoundary);