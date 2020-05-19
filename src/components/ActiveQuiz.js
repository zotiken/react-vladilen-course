import React from "react";
import classes from "./ActiveQuiz.module.scss";
import AnswersList from "../components/AnswersList";
export default function ActiveQuiz({ question, answers, current = 1,
    total, onClickHandler, highlight}) {
      console.log(current);
  return (
    <div className={classes.question}>
      <div className={classes.question_wrapper}>
        <p className={classes.question_header}>
          <span>2.</span>
          {question.text}
        </p>
        <p>
          <span>{current}</span>
          из
          <span>{total}</span>
        </p>
      </div>
      <AnswersList className={classes.answers_list} answers={answers} onClickHandler={onClickHandler} highlight={highlight} current={current} />
    </div>
  );
}
