import React, { Component } from "react";
import classes from "./QuizCreate.module.scss";

import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button";

import {initCopyQuiz, inputQuizCreate, onClickButton, submitQiuzThunk} from '../../redux/ActionCreator'
import { connect } from 'react-redux';

class QuizCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createQuiz: [],
      copyinitQuiz: null,
      formValid: true,
      initQuiz: {
        question: {
          label: "Вопрос",
          type: "text",
          name: "text",
          valid: true,
          toutched: false,
          value: "",
          errorMessage: "Некорректный Вопрос",
          validation: ["required"],
        },
        answers: [
          {
            label: "Вариант",
            type: "text",
            name: "text",
            valid: false,
            toutched: false,
            value: "",
            errorMessage: "Некорректный Вариант",
            validation: ["required"],
            id:'1'
          },
          {
            label: "Вариант",
            type: "text",
            name: "text",
            valid: false,
            toutched: false,
            value: "",
            errorMessage: "Некорректный Вариант",
            validation: ["required"],
            id:'2'
          },
          {
            label: "Вариант",
            type: "text",
            name: "text",
            valid: false,
            toutched: false,
            value: "",
            errorMessage: "Некорректный Вариант",
            validation: ["required"],
            id:'3'
          },
          {
            label: "Вариант",
            type: "text",
            name: "text",
            valid: false,
            toutched: false,
            value: "",
            errorMessage: "Некорректный Вариант",
            validation: ["required"],
            id:'4'
          },
        ],
        rightAnswers: null,
      },
      formButtons: {
        login: {
          name: "Добавить",
          type: "skilet",
          button:"button"
        },
        reisterg: {
          name: "Создать Тест",
          type: "skilet",
          button:"submit"
        },
      },
    };
  }

  componentDidMount() {
    console.log(this.props);
    if (!this.props.state.createReducer.copyinitQuiz) {
      this.props.initCopyQuiz()
    }
  }
  onChangeHandler(event, index) {
    this.props.inputQuizCreate({event, index})
  }

  renderInput() {
    const answers = !this.props.state.createReducer.copyinitQuiz ? this.props.state.createReducer.initQuiz["answers"] : this.props.state.createReducer.copyinitQuiz["answers"];
    return answers.map((control, index) => {
      return (
        <InputField
          className={classes.create_inputField}
          label={control.label + " " + (index + 1)}
          type={control.type}
          valid={control.valid}
          name={control.name}
          value={control.value}
          formValid={this.props.state.createReducer.formValid}
          errorMessage={control.errorMessage}
          key={control.name + index}
          id={index}
          toutched={control.toutched}
          onChange={(e) => this.onChangeHandler(e, index)}
          onBlurHAndler={() => this.onBlurHAndler(index)}
          validation={control.validation}
        />
      );
    });
  }
  renderQuestionInput() {
    console.log(this.props.state);
    const question = !this.props.state.createReducer.copyinitQuiz ? this.props.state.createReducer.initQuiz["question"] : this.props.state.createReducer.copyinitQuiz["question"];
    return (
      <InputField
        className={classes.create_inputField}
        label={question.label}
        type={question.type}
        valid={question.valid}
        name={question.name}
        value={question.value}
        formValid={this.props.state.createReducer.formValid}
        errorMessage={question.errorMessage}
        key={question.name + 0}
        id={0}
        toutched={question.toutched}
        onChange={(e) => this.onChangeHandler(e, 7)}
        validation={question.validation}
      />
    );
  }

  onClickHandler = () =>{
    this.props.onClickButton()
  }
  renderButton() {
    const formButtons = Object.keys(this.props.state.createReducer.formButtons);
    return formButtons.map((item, index) => {
      const control = this.props.state.createReducer.formButtons[item];
      return <Button text={control.name} type={control.type} button={control.button} onClickHandler={this.onClickHandler} />;
    });
  }
  renderSelect() {
    const classSelect = [classes.create_inputField, classes.create_select];
    const formControls = this.props.state.createReducer.initQuiz["answers"];
    const renderOptons = () => {
      return formControls.map((item, i) => (
        <option value={i + 1}>{i + 1}</option>
      ));
    };
    return (
      <div>
        <label htmlFor="right">Выберете ответ</label>
        <select
          className={classSelect.join(" ")}
          name="right"
          id="right"
          onChange={(e) => this.onChangeHandler(e, 8)}
          placeholder={"Выберете ответ"}
        >
          {renderOptons()}
        </select>
      </div>
    );
  }

   onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.submitQiuzThunk(this.props.state);
  };

  render() {
    return (
      <div className={classes.create}>
        <form
          className={classes.create_form}
          onSubmit={(e) => this.onSubmitHandler(e)}
        >
          <h1>Создать вопрос</h1>
          <div>
            {this.renderQuestionInput()}
            <hr />
            {this.renderInput()}
            {this.renderSelect()}
            <div className={classes.auth_blockButton}>
              {this.renderButton()}
            </div>
          </div>
        </form>
        {this.props.state.createReducer.createQuiz && (
          <p>
            <span>CREATED QUESTIONS:</span>
            {this.props.state.createReducer.createQuiz.length}
          </p>
        )}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
state
})

export default connect(mapStateToProps, {initCopyQuiz, inputQuizCreate, onClickButton, submitQiuzThunk})(QuizCreate);
