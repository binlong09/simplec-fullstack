import React, { Component } from 'react';
import { Modal, Form, Input, Icon } from 'antd';

export class RegisterModal extends Component {

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = e => {
    e.preventDefault();

    // const { name, email, password } = this.state;

    // // Create user object
    // const newUser = {
    //   name,
    //   email,
    //   password
    // }

    // this.props.register(newUser);
  }

  render() {
    return (
      <div>
        <Modal
          title="Register a new account"
          visible={this.props.visible}
          onOk={this.props.onOk}
          onCancel={this.props.onCancel}
        >
          <Form className="login-form">
            <Form.Item label="Name">
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Name"
                id="name"
                onChange={this.onChange}
                onPressEnter={this.props.onOk}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email"
                id="email"
                onChange={this.onChange}
                onPressEnter={this.props.onOk}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"
                id="password"
                onChange={this.onChange}
                onPressEnter={this.props.onOk}
              />
            </Form.Item>
            </Form>
        </Modal>

      </div>
    )
  }
}

export default RegisterModal;