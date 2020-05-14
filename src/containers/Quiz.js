import React, { Component } from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../components/ActiveQuiz'
export default class Quiz extends Component {
  state = {
    quiz:[]
  }
  render() {
    return (
      <div className={classes.container_quiz}>
        <h1>Quiz</h1>
        <ActiveQuiz/>
      </div>
    );
  }
}

