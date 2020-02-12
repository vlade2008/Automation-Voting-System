import React from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./style.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { bindActionCreators } from "redux";
import * as loadingActions from "../../actions/loadingActions";
class Home extends React.Component {
  onStartExecute = () => {
    this.props.loadingActions.start(true);
  };
  onStopExecute = () => {
    this.props.loadingActions.stop(false);
  };
  render() {
    let { app } = this.props.state;
    console.log(this.props, "haha");
    return (
      <div className="App">
        <header className="App-header">
          {app.loading ? (
            <CircularProgress />
          ) : (
            <div>
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
            </div>
          )}
          <Button
            onClick={this.onStartExecute}
            variant="contained"
            color="primary"
            style={{ marginTop: 10 }}
          >
            {" "}
            Start Loading
          </Button>
          <Button
            onClick={this.onStopExecute}
            variant="contained"
            color="primary"
            style={{ marginTop: 10 }}
          >
            {" "}
            Stop Loading
          </Button>
        </header>
      </div>
    );
  }
}
const mapStateProps = state => {
  return {
    state
  };
};
const mapDispatch = dispatch => {
  return {
    loadingActions: bindActionCreators(loadingActions, dispatch)
  };
};
const connector = connect(
  mapStateProps,
  mapDispatch
);
export default connector(Home);
