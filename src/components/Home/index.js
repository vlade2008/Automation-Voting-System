import React from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './style.css';

class Home extends React.Component {
  render() {
    console.log(this.props,'unsay props niya ane gd')
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}
const mapStateProps = state => {
  return {
    state
  }
};
const mapDispatch = dispatch => {
  return {};
};
const connector = connect(
  mapStateProps,
  mapDispatch,
);
export default connector(Home);