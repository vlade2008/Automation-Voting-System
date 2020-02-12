import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";

class Login extends React.Component {

  goToHome = () => {
    console.log('haha')
    this.props.history.push('/home')
    
  }
  render() {
    console.log(this.props,'unsa naa ane');
    
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              Fujitsu Automation Voting System
            </Typography>
            <IconButton
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              English
              <ArrowDropDown />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={3} sm={3}>
            <Paper style={{ marginTop: 50 }}>
              <Card>
                <CardContent>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <AccountCircle color="disabled" style={{ fontSize: 120 }} />
                  </Grid>
                  <TextField label="Username" fullWidth />
                  <br />
                  <TextField label="Password" fullWidth />
                  <br />
                  <br />
                  <Button onClick={this.goToHome} variant="contained" color="primary">
                    Login
                  </Button>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
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
  return {};
};
const connector = connect(
  mapStateProps,
  mapDispatch
);
export default connector(Login);
