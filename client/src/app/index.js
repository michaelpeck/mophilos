import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';

import { Provider } from 'react-redux'
import store from '../store'

import { NavBar } from '../components/layout'
import { Register, Login } from '../components/user'
import { Survey } from '../components/pages'
import PrivateRoute from '../components/private-route/PrivateRoute';
import Dashboard from '../components/dashboard/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/Theme.css'
import '../style/App.css'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavBar />
          <div className='main-div'>
            <Route exact path='/register' exact component={Register} />
            <Route exact path='/login' exact component={Login} />
            <Switch>
              <PrivateRoute exact path='/survey' exact component={Survey} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
