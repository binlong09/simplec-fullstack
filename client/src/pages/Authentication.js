import React, { Component } from 'react';

export class Authentication extends Component {
  render() {
    return (
      <div className="auth">
        <div className="auth-headerText">
          <strong>S I M PL E</strong><span>&nbsp;&nbsp;</span><strong>C</strong>
        </div>
        <div className="auth-welcomeText">
          Welcome Back! Please login to your account
        </div>
      </div>
    )
  }
}

export default Authentication
