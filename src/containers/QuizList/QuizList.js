import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.scss";
import { connect } from 'react-redux'
import {getQuizList} from '../../redux/ActionCreator'


class QuizList extends Component {
  async componentDidMount(){
    if (this.props.state.listReduser.list.length === 0) {
      this.props.getQuizList()
    }
  }
  render() {
    return (
      <div className={classes.container_quiz}>
        <h1>Список вопросов</h1>
        <hr/>
        {this.props.state.listReduser.loading 
        ?
        <div  className={classes.quiz}>
          {this.props.state.listReduser.list.map((item, i) => (
            <NavLink
              className={classes.quiz_link}
              to={`/quiz/${item}`}
              children={`Тест- ${i}`}
              key={i}
            />
          ))}
        </div> 
        :
        <div>loading...</div>
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps,{getQuizList})(QuizList);
