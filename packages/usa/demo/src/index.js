import React, { Component } from "react";
import { render } from "react-dom";
import { USA } from "../../src";

export default class Demo extends Component {
  render() {
    const values = {
      size: "50%",
      ma: {
        color: "red",
      },
      mn: {
        color: "blue",
      },
      mt: {
        color: "green",
      },
    };
    return (
      <div>
        <h1>Map Demo</h1>
        <USA values={values} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
