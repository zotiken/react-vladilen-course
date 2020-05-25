import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.scss";
class QuizList extends Component {
  render() {
    return (
      <div className={classes.container_quiz}>
        <h1>Список вопросов</h1>
        <hr/>
        <div  className={classes.quiz}>
          {[1, 2, 3].map((item, i) => (
            <NavLink
              className={classes.quiz_link}
              to={`/quiz/${item}`}
              children={`вопрос ${item}`}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default QuizList;
