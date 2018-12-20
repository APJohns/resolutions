import React, { Component } from "react";
import ResItem from "./ResItem";

class App extends Component {
  state = {
    resolutions: {
      res1: "Hello World!",
      res2: "Like my list?"
    }
  };

  render() {
    const { params } = this.props.match;
    console.log(params);
    return (
      <main>
        <h1 className="title">{params.resId}</h1>
        {Object.keys(this.state.resolutions).length > 0 ? (
          Object.keys(this.state.resolutions).map((item, i) => (
            <ResItem key={i} resolution={this.state.resolutions[item]} />
          ))
        ) : (
          <p>Looks like you haven't made any resolutions yet!</p>
        )}
      </main>
    );
  }
}

export default App;
