import React, { Component } from "react";
import ResItem from "./ResItem";

class App extends Component {
  state = {
    resolutions: {
      res1: "Hello World!",
      res2: "Like my list?"
    }
  };

  deleteRes = key => {
    const resolutions = { ...this.state.resolutions };
    resolutions[key] = null;
    this.setState({ resolutions });
  };

  render() {
    const { params } = this.props.match;
    console.log(params);
    return (
      <main>
        <h1 className="title">{params.resId}</h1>
        {Object.keys(this.state.resolutions).length > 0 ? (
          Object.keys(this.state.resolutions).map((item, i) => {
            if (this.state.resolutions[item])
              return (
                <ResItem
                  key={i}
                  index={item}
                  resolution={this.state.resolutions[item]}
                  deleteRes={this.deleteRes}
                />
              );
          })
        ) : (
          <p>Looks like you haven't made any resolutions yet!</p>
        )}
      </main>
    );
  }
}

export default App;
