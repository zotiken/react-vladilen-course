import React, { Component } from 'react';

import Button from '../../components/Button';
import InputField from '../../components/InputField';

class Auth extends Component {
  render() {
    return (
      <div>
        <h1>Авторизация</h1>
        <form action="">
          <InputField/>
        <Button/>
        <Button/>
        </form>
      </div>
    );
  }
}

export default Auth;
