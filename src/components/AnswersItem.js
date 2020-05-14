import React from "react";
import classes from "./AnswersItem.module.scss";
export default function ActiveQuiz({ toChildren }) {
  return <li className={classes.answers_item}>{toChildren}</li>;
}
