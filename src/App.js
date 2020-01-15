import React, { Component } from 'react';
import './App.css';
import Intro from './Intro';
import Questionaire from './Questionaire';
import Results from './Results';
import { QUESTIONS, TYPES, ANSWERKEY} from './STORE';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        pageNum: 0,
        answers: '',
        mbtiType: '',
      }
  }

  nextPage = () => {
    this.setState ({
      pageNum: this.state.pageNum + 1
    });
  }

  updateAnswers = (answer) => {
    this.setState ({
      answers: this.state.answers + answer
    });
  }

  reset = () => {
    this.setState ({
      pageNum: 0,
      answers: '',
      mbtiType: '',
    });
  }

  determineType = () => {
    let resultantType = ANSWERKEY[this.state.answers];
    this.setState ({
      mbtiType: resultantType
    }) 
  }

  render() {
    let page;
    if (this.state.pageNum === 0) {
      page = <Intro nextPage={this.nextPage}></Intro>;
    } else if (this.state.pageNum < 5) {
      page = 
        <Questionaire 
          QUESTIONS = {QUESTIONS}
          pageNum={this.state.pageNum}
          nextPage={this.nextPage}
          updateAnswers={this.updateAnswers}
          determineType={this.determineType}>
        </Questionaire>
    } else {
      page = 
        <Results 
          TYPES={TYPES}  
          mbtiType={this.state.mbtiType}
          reset={this.reset}>
        </Results>;
    }

    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
