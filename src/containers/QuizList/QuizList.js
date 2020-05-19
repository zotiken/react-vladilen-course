import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class QuizList extends Component {
  render() {
    return (
      <div>
        <h1>QuizList</h1>

        {[1,2,3].map((item) =>
<NavLink  to={`/quiz/${item}`} children={`test_${item}`}/>
        )}
      </div>
    );
  }
}

export default QuizList;
