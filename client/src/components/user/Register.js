import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import classnames from 'classnames'

import { Paper, Grid, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core'

class Register extends Component {

  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
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
  }

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    console.log(newUser);

    this.props.registerUser(newUser, this.props.history);
  }

  render () {
    const { errors } = this.state;

    return (
      <Paper elevation={5} className='login-paper'>
        <h3>Welcome back!</h3>
        <form noValidate onSubmit={this.onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField required
                id="firstName"
                label="First Name"
                onChange={this.onChange}
                value={this.state.firstName}
                error={errors.firstName}
                type="text"
                className={classnames("", { invalid: errors.firstName })}
                fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField required
                id="lastName"
                label="Last Name"
                onChange={this.onChange}
                value={this.state.lastName}
                error={errors.lastName}
                type="text"
                className={classnames("", { invalid: errors.lastName })}
                fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField required
                id="username"
                label="Username"
                onChange={this.onChange}
                value={this.state.username}
                error={errors.username}
                className={classnames("", { invalid: errors.username })}
                fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField required
                id="email"
                label="Email"
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                type="email"
                className={classnames("", { invalid: errors.email })}
                fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField required
                id="password"
                label="Password"
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                type="password"
                className={classnames("", { invalid: errors.password })}
                fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField required
                id="password2"
                label="Retype Password"
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                type="password"
                className={classnames("", { invalid: errors.password2 })}
                fullWidth/>
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
            color="primary"
          >
            Register
          </Button>
        </form>
      </Paper>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect( mapStateToProps, { registerUser } )(withRouter(Register));
