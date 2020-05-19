import React from "react";
import classes from "./FinishPage.module.scss";
import Button from './Button';
export default ({ total, results, isRetryHandler }) => {
  console.log(results);
  let count=0;
  results.map(result =>result.class === "success"?count++:count);
  console.log(count)
  return (
    <div className={classes.modal_win}>
      <h2>Поздравляю Вы закончили!</h2>
      <div className={classes.modal_win__result}>
        <ul>
  {results.map((result,i) => <li key={i}><strong>Вопрос_{i+1}.</strong>{result.class === "success" ? <i className="far fa-check-circle"></i>:<i class="far fa-times-circle"></i>}</li>)}
          {/* <li><p>Lorem, ipsum dolor.</p><i class="far fa-times-circle"></i></li>
          <li>Lorem ipsum dolor sit amet.</li> */}
        </ul>
        <div className={classes.modal_win__advance }>
          <p>
            Правильних ответов: <span>{count}</span>из<span>{total}</span>
          </p>
          <Button onClickHandler={isRetryHandler} text={"Повторить"}/>
          {/* <button onClick={()=>isRetryHandler()}>Повторить</button> */}
        </div>
      </div>
    </div>
  );
};