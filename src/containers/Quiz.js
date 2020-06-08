import React, { Component } from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../components/ActiveQuiz";
import FinishPage from '../components/FinishPage'
import {withRouter } from 'react-router-dom'
import { api } from '../api/api'

 class Quiz extends Component {
  //  constructor(props){
  //    super(props)
    //  this.state={
      //  quiz:[],
      //  loading:false
    //  }
  //  }
  state = {
    quiz: [],

    // quiz: [
    //   {
    //     question: { text: "Какое слово всегда звучит неверно?" },
    //     answers: [
    //       { text: 'Слово "неверно"', id: 1 },
    //       { text: "верно", id: 2 },
    //       { text: "какое", id: 3 },
    //       { text: "выпить", id: 4 },
    //     ],
    //     rightAnswers: 1,
    //     id: 1,
    //   },
    //   {
    //     question: { text: "Кто сказал мяу?" },
    //     answers: [
    //       { text: "вьетнамец", id: 1 },
    //       { text: "слон", id: 2 },
    //       { text: "крысса", id: 3 },
    //       { text: "кот", id: 4 },
    //     ],
    //     rightAnswers: 4,
    //     id: 2,
    //   },
    //   {
    //     question: { text: "Кто сказал авв?" },
    //     answers: [
    //       { text: "вьетнамец", id: 1 },
    //       { text: "слон", id: 2 },
    //       { text: "крысса", id: 3 },
    //       { text: "кот", id: 4 },
    //     ],
    //     rightAnswers: 3,
    //     id: 3,
    //   },

    // ],
    results:[],
    current: 1,
    change:false,
    total: 1,
    highlight: null,
    passed: false,
    loading: false
  };

  async componentDidMount(){
    if (this.state.quiz.length === 0 ) {
      const response = await api.quizes.quiz.get(this.props.match.params.quiz)
      console.log(response);
      this.setState({quiz:response, loading:true})  
    }
  }

  onClickHandler = (prop) => {
    console.log(prop.quiz);
    if (!this.state.change) {
      if (prop.id === this.state.quiz[this.state.current - 1].rightAnswers ) {
        this.setState({results: [...this.state.results,{id:prop.quiz-1,class:'success'}] })
        this.setState({change: true })
        this.setState({highlight: {id:prop.id, class:"success"} })
        console.log(this.state.highlight)
        // if (this.state.quiz.length !== this.state.current) {
        //   setTimeout(() => {
        //     this.setState({ highlight: null })
        //     this.setState({ current: this.state.current + 1 })
        //     this.setState({change: false })
        //   }, 1000);
        // } else {
        //   this.setState({ passed: true });
        // }
      } else {
          this.setState({results: [...this.state.results,{id:prop.quiz-1,class:'failure'}] })
        this.setState({highlight: {id:prop.id, class:"error"} })
      }  
      if (this.state.quiz.length !== this.state.current) {
        setTimeout(() => {
          this.setState({ highlight: null })
          this.setState({ current: this.state.current + 1 })
          this.setState({change: false })
        }, 1000);
      } else {
        setTimeout(() => {
          this.setState({ passed: true });
        }, 1000);
      }

    }
  };
  isRetryHandler=()=>{
    console.log('!!');
    this.setState({ highlight: null,passed: false, current: 1 ,results:[], change:false})
  }
  render() {
    let quiz = this.state.quiz[this.state.current - 1]
    return (
      <div className={classes.container_quiz}>
        {!this.state.passed && <h1>Ответьте на вопрос</h1>}
        {this.state.passed ? (
          <FinishPage total={this.state.quiz.length} results={this.state.results} isRetryHandler={this.isRetryHandler}/>
        ) : (
          // <div>cw</div>
          this.state.quiz.length > 0 &&
          <ActiveQuiz
            question={quiz.question}
            answers={quiz.answers}
            current={this.state.current}
            highlight={ this.state.highlight}
            total={this.state.quiz.length}
            onClickHandler={this.onClickHandler}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Quiz);
