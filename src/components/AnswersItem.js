import React from "react";
import classes from "./AnswersItem.module.scss";
export default function ActiveQuiz({ toChildren, onClickHandler }) {
  return (
    <li className={classes.answers_item} onClick={()=> onClickHandler(toChildren.id)}>
      {toChildren.text}
    </li>
  );
}
