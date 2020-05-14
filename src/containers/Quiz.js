import React, { Component } from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../components/ActiveQuiz";
export default class Quiz extends Component {
  state = {
    quiz: [
      {
        question: { text: "Какое слово всегда звучит неверно?" },
        answers: ['Слово "неверно"', "верно", "какре", "выпить"],
      },
    ],
    current: 1,
    total:  1
  };
  render() {
    return (
      <div className={classes.container_quiz}>
        <h1>Ответьте на вопрос</h1>
        <ActiveQuiz
          question={this.state.quiz[this.state.current - 1].question}
          answers={this.state.quiz[this.state.current - 1].answers}
          current={this.state.current}
          total={this.state.quiz.length}
        />
      </div>
    );
  }
}
