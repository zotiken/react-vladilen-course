import  React from 'react';
import classes from "./Button.module.scss"
export default ({onClickHandler, text}) => {
  return (
  <button className={classes.button} onClick={onClickHandler}>{text}</button>
  );
};
