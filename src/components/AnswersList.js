import React from "react";
import classes from "../components/AnswersList.module.scss";
import AnswersItem from "../components/AnswersItem";
export default function AnswersList({ answers, onClickHandler }) {
  console.log(answers);
  return (
    <ol className={classes.answers_list}>
      {answers.map((answer, i) => (
        <AnswersItem
          toChildren={answer}
          onClickHandler={onClickHandler}
          key={i}
        />
      ))}
    </ol>
  );
}
