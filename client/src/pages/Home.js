import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

export class Home extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth;

    return (
      <div>
        { !isAuthenticated ? <Redirect to='/' />
        :
        <strong>{ user ? `Welcome ${user.name}` : ''}</strong>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Home);
