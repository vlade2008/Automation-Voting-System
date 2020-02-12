import React from 'react';
import {connect} from 'react-redux';

class Login extends React.Component {
  render() {
    
    return (
      <div>
          <h1>
              LOGIN
          </h1>
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
export default connector(Login);