import React, { Component } from "react";

import Button from "../../components/Button";
import InputField from "../../components/InputField/InputField";
import classes from "./Auth.module.scss";

import {validation} from '../../util/validation';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      formControls: {
        email: {
          label: "Email",
          type: "email",
          name: "email",
          valid: false,
          toutched: false,
          value: "",
          errorMessage: "Некорректный email",
          validation: ["email"],
        },
        password: {
          label: "Password",
          type: "password",
          name: "password",
          valid: false,
          toutched: false,
          value: "",
          errorMessage: "Неверный пароль",
          validation: ["password"],
        },
      },
      formButtons: {
        login: {
          name: "Войти",
          type: "primary",
        },
        reisterg: {
          name: "Регистрация",
          type: "success",
        },
      },
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const formControls = Object.keys(this.state.formControls);
    let falseItem = formControls.filter(
      item => item.valid === false && item.toutched === false
    );
    if (falseItem.length === 0) {
      alert("Success");
    }

  };

  onChangeHandler = (event, name) => {
    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value: event.target.value,
          toutched: true,
          valid:validation(event.target.value, [
            ...this.state.formControls[name].validation,
          ]),
        },
      },
    });
  };

  renderInput() {
    const formControls = Object.keys(this.state.formControls);
    return formControls.map((item, index) => {
      const control = this.state.formControls[item];
      return (
        <InputField
          className={classes.auth_inputField}
          label={control.label}
          type={control.type}
          valid={control.valid}
          name={control.name}
          value={control.value}
          formValid={this.state.formValid}
          errorMessage={control.errorMessage}
          key={control.name + index}
          id={index}
          toutched={control.toutched}
          onChange={this.onChangeHandler}
          validation={control.validation}
        />
      );
    });
  }
  renderButton() {
    const formButtons = Object.keys(this.state.formButtons);
    return formButtons.map((item, index) => {
      const control = this.state.formButtons[item];
      return <Button text={control.name} type={control.type} />;
    });
  }

  render() {
    return (
      <div className={classes.auth}>
        <form
          className={classes.auth_form}
          action=""
          onSubmit={(e) => this.onSubmitHandler(e)}
        >
          <h1>Авторизация</h1>
          {this.renderInput()}

          <div className={classes.auth_blockButton}>{this.renderButton()}</div>
        </form>
      </div>
    );
  }
}

export default Auth;
