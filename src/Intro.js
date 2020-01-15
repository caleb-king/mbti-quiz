import React, { Component } from 'react';

class Intro extends Component {
  
  render() {
    return (
      <div>
        <h1>WHAT'S YOUR TYPE?!</h1>
        <p>If you'd like to figure out your Myers Briggs type, hit the button below and provide honest answers to the following questions</p>
        <button onClick={this.props.nextPage}>Begin the Questionaire</button>
      </div>
    )  
  }
}

export default Intro;