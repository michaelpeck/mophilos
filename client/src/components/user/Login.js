import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import classnames from 'classnames'

import { Paper, Grid, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core'

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };

  render () {

    const { errors } = this.state;

    return (
      <Paper elevation={5} className='login-paper'>
        <h3>Welcome back!</h3>
        <form noValidate onSubmit={this.onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="username"
                label="Username"
                onChange={this.onChange}
                value={this.state.username}
                error={errors.username}
                className={classnames("", { invalid: errors.username || errors.usernameNotFound })}
                fullWidth/>
              <span className="red-text">
                {errors.username}
                {errors.usernameNotFound}
              </span>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                type="password"
                className={classnames("", { invalid: errors.password || errors.passwordIncorrect })}
                fullWidth/>
              <span className="red-text">
                {errors.password}
                {errors.passwordIncorrect}
              </span>
            </Grid>
          </Grid>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary">
            Sign In
          </Button>
        </form>
      </Paper>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
