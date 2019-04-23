import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {}

  componentWillMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10;
  }

  componentDidUpdate(prevProps, prevState) {}
  handleClick = () => {
    this.setState(state => ({ counter: this.state.counter + 1 }));
    console.log(this.state.counter);
  };

  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <h1>{this.state.counter}</h1>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
