import React, { Component } from 'react';
import { EnhancedLoginForm } from 'components/forms/LoginForm/EnhancedLoginForm';
import { Title } from 'components/text/Title';

class Login extends Component {
  render() {
    return (
      <div>
        <Title> Login </Title>
        <EnhancedLoginForm />
      </div>
    );
  }
}

export default Login;
