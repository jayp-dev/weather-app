import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleIncrement() {
    // console.log(this);
    this.setState((curstate) => {
      return { count: curstate.count + 1 };
    });
  }

  handleDecrement() {
    // console.log(this);
    this.setState((curstate) => {
      return { count: curstate.count - 1 };
    });
  }
  render() {
    const date = new Date();
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} - {this.state.count}
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
