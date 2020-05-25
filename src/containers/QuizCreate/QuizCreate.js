import React, { Component } from "react";
import classes from "./QuizCreate.module.scss";

import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button";

import { validation } from "../../util/validation";
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
        options: [
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
        },
        reisterg: {
          name: "Создать Тест",
          type: "skilet",
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
          options: [...this.state.initQuiz["options"].map((item,i) => item ={...item}
          )],
        },
      });
    }
  }
  onChangeHandler(event, index) {
    const writeValue = (key, index) => {
      console.log(key, index);
      if (index === undefined) {
        this.setState({
          copyinitQuiz: {
            ...this.state.copyinitQuiz,
            [key]: {
              ...this.state.copyinitQuiz[key],
              value: event.target.value,
              toutched: true,
              valid: validation(event.target.value, [
                ...this.copyinitQuiz[key].validation,
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
                ...this.copyinitQuiz[key][index].validation,
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
      this.copyinitQuiz.rightAnswers = event.target.value;
    } else {
      writeValue("options", index);
    }
  }

  renderInput() {
    const options = this.state.copyinitQuiz["options"];
    console.log(options);
    return options.map((control, index) => {
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
  renderButton() {
    const formButtons = Object.keys(this.state.formButtons);
    return formButtons.map((item, index) => {
      const control = this.state.formButtons[item];
      return <Button text={control.name} type={control.type} />;
    });
  }
  renderSelect() {
    const classSelect = [classes.create_inputField, classes.create_select];
    const formControls = this.state.copyinitQuiz["options"];
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
    const {copyinitQuiz, createQuiz, initQuiz} = this.state;
    console.log(this.state);
    const formControls = copyinitQuiz["options"];
    let falseItem = formControls.filter(
      (item, index) => item.valid === false && item.toutched === false
    );
    if (falseItem.length === 0) {
      console.log(initQuiz);
      this.setState({
        createQuiz: [...createQuiz, { ...copyinitQuiz }],
        copyinitQuiz: {
          ...initQuiz,
          question: { ...initQuiz["question"] },
        },
        options: [...initQuiz["options"]],
        formValid: true,
      });

      // alert("Success");
    } else {
      this.setState({
        copyinitQuiz: {
          ...copyinitQuiz,
          question: { ...copyinitQuiz["question"] },
        },
        options: [...copyinitQuiz["options"]],
        formValid: false,
      });
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
