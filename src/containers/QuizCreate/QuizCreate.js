import React, { Component } from "react";
import classes from "./QuizCreate.module.scss";

import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button";

import { validation } from "../../util/validation";

import {api} from '../../api/api';

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

  componentWillMount() {
    if (!this.state.copyinitQuiz) {
      this.setState({
        copyinitQuiz: {
          ...this.state.initQuiz,
          question: { ...this.state.initQuiz["question"] },
          answers: [...this.state.initQuiz["answers"].map((item,i) => item ={...item}
          )],
        },
      });
    }
  }
  onChangeHandler(event, index) {
    const writeValue = (key, index) => {
      if (index === undefined) {
        this.setState({
          copyinitQuiz: {
            ...this.state.copyinitQuiz,
            [key]: {
              ...this.state.copyinitQuiz[key],
              value: event.target.value,
              toutched: true,
              valid: validation(event.target.value, [
                ...this.state.copyinitQuiz[key].validation,
              ]),
            },
          },
        });

      } else {
        this.setState({
          copyinitQuiz: {
            ...this.state.copyinitQuiz,
            [key]:[...this.state.copyinitQuiz[key],
            ...this.state.copyinitQuiz[key].filter((item,i) => {
              if(i === index)  {item.value = event.target.value
              item.toutched = true
              item.valid = validation(event.target.value, [
                ...this.state.copyinitQuiz[key][index].validation,
              ])}
            })
          ]
          },
        });
      }
    };

    if (index === 7) {
      writeValue("question");
    } else if (index === 8) {
      this.setState({
        copyinitQuiz: {...this.state.copyinitQuiz,
      rightAnswers:event.target.value}})
    } else {
      writeValue("answers", index);
    }
  }

  renderInput() {
    const answers = this.state.copyinitQuiz["answers"];
    return answers.map((control, index) => {
      return (
        <InputField
          className={classes.create_inputField}
          label={control.label + " " + (index + 1)}
          type={control.type}
          valid={control.valid}
          name={control.name}
          value={control.value}
          formValid={this.state.formValid}
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
    const question = this.state.copyinitQuiz["question"];
    return (
      <InputField
        className={classes.create_inputField}
        label={question.label}
        type={question.type}
        valid={question.valid}
        name={question.name}
        value={question.value}
        formValid={this.state.formValid}
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
    const {copyinitQuiz, createQuiz, initQuiz} = this.state;
    const formControls = copyinitQuiz["answers"];
    let falseItem = formControls.filter(
      (item, index) => item.valid === false && item.toutched === false
    );
    if (falseItem.length === 0) {
      this.setState({
        createQuiz: [...createQuiz, { ...copyinitQuiz }],
        copyinitQuiz: {
          ...initQuiz,
          question: { ...initQuiz["question"] },
        answers: [...initQuiz["answers"].map((item,i) => item ={...item}
        )],
        },
        formValid: true
      });

      // alert("Success");
    } else {
      this.setState({
        copyinitQuiz: {
          ...copyinitQuiz,
          question: { ...copyinitQuiz["question"] },
        },
        answers: [...initQuiz["answers"].map((item,i) => item ={...item}
        )],
        formValid: false,
      });
    }

  }
  renderButton() {
    const formButtons = Object.keys(this.state.formButtons);
    return formButtons.map((item, index) => {
      const control = this.state.formButtons[item];
      return <Button text={control.name} type={control.type} button={control.button} onClickHandler={this.onClickHandler} />;
    });
  }
  renderSelect() {
    const classSelect = [classes.create_inputField, classes.create_select];
    const formControls = this.state.copyinitQuiz["answers"];
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

  onSubmitHandler = async (e) => {
    e.preventDefault();
    const {copyinitQuiz, createQuiz, initQuiz} = this.state;
    // console.log(this.state);
    // const formControls = copyinitQuiz["answers"];
    // let falseItem = formControls.filter(
    //   (item, index) => item.valid === false && item.toutched === false
    // );
    if (createQuiz.length !== 0) {
    await api.quizes.quiz.post(createQuiz)
      this.setState({
        createQuiz: [],
        formValid:true
      });

      // alert("Success");
    } else {
      // this.setState({
      //   copyinitQuiz: {
      //     ...copyinitQuiz,
      //     question: { ...copyinitQuiz["question"] },
      //   },
      //   answers: [...copyinitQuiz["answers"]],
      //   formValid: false,
      // });
    }
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
        {this.state.createQuiz && (
          <p>
            <span>CREATED QUESTIONS:</span>
            {this.state.createQuiz.length}
          </p>
        )}
      </div>
    );
  }
}

export default QuizCreate;
