import React, { Component } from 'react';

class Questionaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: '0'
    }
  }
  
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    this.props.updateAnswers(this.state.selectedAnswer);
    this.props.nextPage();
  }
  
  handleAnswerChange = changeEvent => {
    this.setState({
      selectedAnswer: changeEvent.target.value
    })
  }

  componentWillUnmount() {
    this.props.determineType();
  }

  render() {
    const {
      QUESTIONS,
      pageNum
    } = this.props;
    
    return (
      <div>
        <h1>WHAT'S YOUR TYPE?!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <legend>{QUESTIONS[pageNum - 1].question}</legend>
              <input 
                id="option-1" 
                type="radio" 
                className="answer" 
                value="0" 
                checked={this.state.selectedAnswer === '0'}
                onChange={this.handleAnswerChange}
              />
              <label htmlFor="option-1">{QUESTIONS[pageNum - 1].options[0]}</label><br/>
              <input 
                id="option-2" 
                type="radio" 
                name="answer" 
                value="1"
                checked={this.state.selectedAnswer === '1'} 
                onChange={this.handleAnswerChange}
              />
              <label htmlFor="option-2">{QUESTIONS[pageNum - 1].options[1]}</label>
          </fieldset>
          <input type="submit" name="submit" value="Submit Answer"/> 
        </form>
      </div>
      )
  }
}

export default Questionaire;