import React, { Component } from "react";
import Resolution from "./Resolution";
import AddResolution from "./AddResolution";
import base from "../base";

class App extends Component {
  state = {
    resolutions: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.resId}/resolutions`, {
      context: this,
      state: "resolutions"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addResolution = resolution => {
    const resolutions = { ...this.state.resolutions };
    resolutions[`res${Date.now()}`] = resolution;
    this.setState({ resolutions });
  };

  deleteRes = key => {
    const resolutions = { ...this.state.resolutions };
    resolutions[key] = null;
    this.setState({ resolutions });
  };

  render() {
    const { params } = this.props.match;
    return (
      <main>
        <h1 className="title">{params.resId}</h1>
        {Object.keys(this.state.resolutions).length > 0 ? (
          Object.keys(this.state.resolutions).map((item, i) => {
            if (this.state.resolutions[item])
              return (
                <Resolution
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
        <AddResolution addResolution={this.addResolution} />
      </main>
    );
  }
}

export default App;
