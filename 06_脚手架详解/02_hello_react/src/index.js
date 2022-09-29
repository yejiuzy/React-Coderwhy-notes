import ReactDOM from "react-dom";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
