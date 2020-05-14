import React, { Component } from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../components/ActiveQuiz";
export default class Quiz extends Component {
  state = {
    quiz: [
      {
        question: { text: "Какое слово всегда звучит неверно?" },
        answers: [
          { text: 'Слово "неверно"', id: 1 },
          { text: "верно", id: 2 },
          { text: "какое", id: 3 },
          { text: "выпить", id: 4 },
        ],
        rightAnswers: 1,
        id: 1,
      },
      {
        question: { text: "Кто сказал мяу?" },
        answers: [
          { text: "вьетнамец", id: 1 },
          { text: "слон", id: 2 },
          { text: "крысса", id: 3 },
          { text: "кот", id: 4 },
        ],
        rightAnswers: 4,
        id: 1,
      },
    ],
    current: 1,
    change:false,
    total: 1,
    highlight: null,
    passed: false,
  };
  onClickHandler = (prop) => {
    if (!this.state.change) {
      if (prop === this.state.quiz[this.state.current - 1].rightAnswers ) {
        this.setState({change: true })
        this.setState({highlight: {id:prop, class:"success"} })
        if (this.state.quiz.length !== this.state.current) {
          setTimeout(() => {
            this.setState({ highlight: null })
            this.setState({ current: this.state.current + 1 })
            this.setState({change: false })
          }, 1000);
        } else {
          this.setState({ passed: true });
        }
      } else {
        this.setState({highlight: {id:prop, class:"error"} })
      }  
    }
  };
  render() {
    return (
      <div className={classes.container_quiz}>
        {!this.state.passed && <h1>Ответьте на вопрос</h1>}
        {this.state.passed ? (
          <div className={classes.modal_win}>
            <p>win</p>
          </div>
        ) : (
          <ActiveQuiz
            question={this.state.quiz[this.state.current - 1].question}
            answers={this.state.quiz[this.state.current - 1].answers}
            current={this.state.current}
            highlight={ this.state.highlight}
            total={this.state.quiz.length}
            onClickHandler={this.onClickHandler}
          />
        )}
      </div>
    );
  }
}
