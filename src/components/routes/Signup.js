import React, { Component } from 'react';
import { EnhancedSignupForm } from 'components/forms/signupForm/EnhancedSignupform';

class Signup extends Component {
  render() {
    return (
      <div>
        <p>Signup Routes</p>
        <EnhancedSignupForm />
      </div>
    );
  }
}

export default Signup;
