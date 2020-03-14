import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const Collapse = styled.div.attrs({
  className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
  className: 'navbar-nav ml-auto',
})``

const Item = styled.div.attrs({
  className: 'collpase navbar-collapse',
})``

class Links extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    var log = '';
    if (!this.props.auth.isAuthenticated) {
      log = <Link to="/login" className="nav-link">Login</Link>;
    } else {
      log = <Link onClick={this.onLogoutClick}>Logout</Link>
    }
    return (
      <Fragment>
        <Collapse>
          <List>
            <Item>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </Item>
            <Item>
              <Link to="/survey" className="nav-link">Survey</Link>
            </Item>
            <Item>
              <Link to="/create" className="nav-link">Create</Link>
            </Item>
            <Item>
              <Link to="/register" className="nav-link">Register</Link>
            </Item>
            <Item>
              {log}
            </Item>
          </List>
        </Collapse>
      </Fragment>
    )
  }
}

Links.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Links);
