import React, { Component } from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../components/ActiveQuiz";
import FinishPage from '../components/FinishPage'

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
        id: 2,
      },
      {
        question: { text: "Кто сказал авв?" },
        answers: [
          { text: "вьетнамец", id: 1 },
          { text: "слон", id: 2 },
          { text: "крысса", id: 3 },
          { text: "кот", id: 4 },
        ],
        rightAnswers: 3,
        id: 3,
      },

    ],
    results:[],
    current: 1,
    change:false,
    total: 1,
    highlight: null,
    passed: false,
  };
  onClickHandler = (prop) => {
    console.log(prop.quiz);
    if (!this.state.change) {
      if (prop.id === this.state.quiz[this.state.current - 1].rightAnswers ) {
        this.setState({results: [...this.state.results,{id:prop.quiz-1,class:'success'}] })
        this.setState({change: true })
        this.setState({highlight: {id:prop.id, class:"success"} })
        console.log(this.state.highlight)
        // if (this.state.quiz.length !== this.state.current) {
        //   setTimeout(() => {
        //     this.setState({ highlight: null })
        //     this.setState({ current: this.state.current + 1 })
        //     this.setState({change: false })
        //   }, 1000);
        // } else {
        //   this.setState({ passed: true });
        // }
      } else {
          this.setState({results: [...this.state.results,{id:prop.quiz-1,class:'failure'}] })
        this.setState({highlight: {id:prop.id, class:"error"} })
      }  
      if (this.state.quiz.length !== this.state.current) {
        setTimeout(() => {
          this.setState({ highlight: null })
          this.setState({ current: this.state.current + 1 })
          this.setState({change: false })
        }, 1000);
      } else {
        setTimeout(() => {
          this.setState({ passed: true });
        }, 1000);
      }

    }
  };
  isRetryHandler=()=>{
    this.setState({ highlight: null,passed: false, current: 1 ,results:[], change:false})
    // results:[],
    // current: 1,
    // change:false,
    // total: 1,
    // highlight: null,
    // passed: false,

  }
  render() {
    return (
      <div className={classes.container_quiz}>
        {!this.state.passed && <h1>Ответьте на вопрос</h1>}
        {this.state.passed ? (
          // <div >
          //   <p>win</p>
          // </div>
          <FinishPage total={this.state.quiz.length} results={this.state.results} isRetryHandler={this.isRetryHandler}/>
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
