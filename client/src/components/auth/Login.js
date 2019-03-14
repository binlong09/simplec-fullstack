import React, { Component } from 'react';
import {
  Form , Icon, Input, Button
} from 'antd';
import { withRouter } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import ForgotModal from './ForgotModal'
import { connect } from 'react-redux';

export class Login extends Component {
  state = {
    registerVisible: false,
    forgotVisible: false,
    email: '',
    password: ''
  }

  handleLogin = e => {
    this.props.history.push('/Home')
  }

  handleRegister = e => {
    this.setState({
      registerVisible: true
    })
  }

  handleRegisterOk = e => {
    // handle Register here - TBI

    this.setState({
      registerVisible: false
    })
  }

  handleRegisterCancel = e  => {
    this.setState({
      registerVisible: false
    })
  }

  handleForgot = e => {
    this.setState({
      forgotVisible: true
    })
  }

  handleForgotOk = e => {
    // handle Forgot Password here - TBI

    this.setState({
      forgotVisible: false
    })
  }

  handleForgotCancel = e => {
    this.setState({
      forgotVisible: false
    })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    // console.log(`checked = ${e.target.checked}`);
  };

  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <div className="container">
        <RegisterModal
          visible={this.state.registerVisible}
          onCancel={this.handleRegisterCancel}
          onOk={this.handleRegisterOk}
        />
        <ForgotModal
          visible={this.state.forgotVisible}
          onCancel={this.handleForgotCancel}
          onOk={this.handleForgotOk}
        />
        <div className="auth-left">

        </div>
        <div className="auth-right" style={{ flex: 1}}>
          <div className="auth-headerText">
            <strong>S I M PL E</strong><span>&nbsp;&nbsp;</span><strong>C</strong>
          </div>
          <div className="auth-welcomeText">
            Welcome Back! Please login to your account
          </div>
          <Form className="login-form">
            <Form.Item label="Email">
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email"
                id="email"
                onChange={this.onChange}
                onPressEnter={this.handleLogin}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"
                id="password"
                onChange={this.onChange}
                onPressEnter={this.handleLogin}
              />
            </Form.Item>
            <Form.Item className="button-row-container">
              <Button
                type="primary"
                style={{ fontSize: 12, backgroundColor: "#3a3b5a", width: "45%", marginRight: "5%" }}
                onClick={this.handleLogin}
              >Login</Button>
              <Button
                type="default"
                style={{ fontSize: 12, color: "#3a3b5a", width: "45%", marginLeft: "5%" }}
                onClick={this.handleRegister}
              >Sign Up</Button>
            </Form.Item>
            <Form.Item>
              <a className="login-form-forgot" onClick={this.handleForgot}>Forgot Your Password?</a>
            </Form.Item>
          </Form>
        </div>

      </div>

    )
  }
}

export default withRouter(connect()(Login));