import React from 'react';

export class App extends React.Component {
  state = {
    good: 5,
    neutral: 7,
    bad: 7,
  };

  addFeedBack = e => {
    console.log(e);
    console.log(e.target);
    this.setState(prevState => ({
      // switch(e.target):
      // case :

      good: prevState.good + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.addFeedBack}>
            Good
          </button>
          <button type="button" onClick={this.addFeedBack}>
            Neutral
          </button>
          <button type="button" onClick={this.addFeedBack}>
            Bad
          </button>
        </div>

        <h2>Statistics</h2>
        <ul>
          <li>
            Good:<span>{good}</span>
          </li>
          <li>
            Neutral:<span>{neutral}</span>
          </li>
          <li>
            Bad:<span>{bad}</span>
          </li>
        </ul>
      </>
    );
  }
}
