import React, { Component } from 'react';
import { EnhancedSignupForm } from 'components/forms/signupForm/EnhancedSignupform';
import { Title } from 'components/text/Title';

class Signup extends Component {
  render() {
    return (
      <div>
        <Title> Signup </Title>
        <EnhancedSignupForm />
      </div>
    );
  }
}

export default Signup;
