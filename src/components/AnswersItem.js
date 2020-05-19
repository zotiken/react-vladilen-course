import React from "react";
import classes from "./AnswersItem.module.scss";
export default function ActiveQuiz({ toChildren, onClickHandler,highlight,current }) {
  console.log(current);
  const cls = [classes.answers_item]
  const v = highlight?classes[highlight.class]:null;
  if (highlight !== null && toChildren.id === highlight.id) {
    cls.push(v)
  }
  return (
    <li className={cls.join(' ')} onClick={()=> onClickHandler({id:toChildren.id, quiz:current})}>
      {toChildren.text}
    </li>
  );
}
