import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.scss";
import { api } from '../../api/api'
class QuizList extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[],
      loading:false
    }
  }
  async componentDidMount(){
    if (this.state.list.length === 0) {
      const response = await api.quizes.get()
      console.log(Object.keys(response));
      this.setState({list:Object.keys(response), loading:true})
    }
  }
  render() {
    return (
      <div className={classes.container_quiz}>
        <h1>Список вопросов</h1>
        <hr/>
        {this.state.loading 
        ?
        <div  className={classes.quiz}>
          {this.state.list.map((item, i) => (
            <NavLink
              className={classes.quiz_link}
              to={`/quiz/${item}`}
              children={`вопрос ${item}`}
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

export default QuizList;
