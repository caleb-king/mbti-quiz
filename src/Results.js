import React, { Component } from 'react';

class Results extends Component {
  componentDidUpdate() {

  }
  
  render() {
    const {
      mbtiType,
      reset,
    } = this.props;

    // const {
    //   overview,
    //   strengths,
    //   weaknesses
    // } = TYPES[mbtiType];

    //Better name for this variable syncSolution
    let syncSolution;
    !mbtiType 
      ? syncSolution = ''
      : syncSolution = this.props.TYPES[mbtiType]

    console.log([mbtiType]);
    console.log('syncSolution',syncSolution);
    console.log('syncSolution.overview', syncSolution.overview);

    return (
      <div>
        <h1>WHAT'S YOUR TYPE?!</h1>
        <h2>Results: {mbtiType}</h2>
        <p><strong>DISCLAIMER:</strong> Based on your responses to this questionaire, you might be an {mbtiType}. But no online quiz can definitively type you. Only you can determine what type you are. It is recommended you do more research and reflection before settling on a type.</p>
        <h2>Information on {mbtiType}s</h2>
          <h3>Overview</h3>
            <p>{syncSolution.overview}</p>
          <h3>Strengths</h3>
            <p>{syncSolution.strengths}</p>
          <h3>Weaknesses</h3>
            <p>{syncSolution.weaknesses}</p>
          <button onClick={reset}>Retake the questionaire</button>
      </div>
    )
  }
}

export default Results;
