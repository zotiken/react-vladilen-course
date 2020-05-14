import React, { Component } from 'react'
import classes from './Quiz.module.scss'

export default class Quiz extends Component {
  state = {
    quiz:[]
  }
  render() {
    return (
      <div className={classes.container_quiz}>
        <h1>Layout React</h1>
      </div>
    );
  }
}

