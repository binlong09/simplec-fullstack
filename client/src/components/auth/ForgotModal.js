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
          title="Forgot Your Password?"
          visible={this.props.visible}
          onOk={this.props.onOk}
          onCancel={this.props.onCancel}
        >
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"
              onChange={this.onChange}
            />
          </Form.Item>
        </Modal>

      </div>
    )
  }
}

export default RegisterModal;