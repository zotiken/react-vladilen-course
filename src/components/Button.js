import  React from 'react';
import classes from './Button.module.scss'
export default ({onClickHandler, text, type,button}) => {
  const cls = [classes.button];
  if (type) {
    cls.push(classes[type])
  }
  return (
  <button className={cls.join(' ')} onClick={button === "button" ?() => onClickHandler(button):null} type={button}>{text} </button>
  );
};
