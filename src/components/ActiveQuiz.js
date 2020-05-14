import React from 'react';
import classes from './ActiveQuiz.module.scss'
export default function ActiveQuiz(props) {
  return (
    <div className={classes.question}>
      <div className={classes.question_wrapper}>
        <p>
          <span>2.</span>
          Как оно?
        </p>
        <p>
          <span>4</span>
          из
          <span>4</span>
        </p>
      </div>
      <ul className={classes.answers_list}>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem ipsum dolor sit.</li>
      </ul>
    </div>
  );
};
