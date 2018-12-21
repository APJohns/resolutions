import React from "react";
import { slugify } from "../helpers";

class Picker extends React.Component {
  resInputRef = React.createRef();
  goToRes = e => {
    e.preventDefault();
    this.props.history.push(
      `/resolutions/${slugify(this.resInputRef.current.value)}`
    );
  };

  render() {
    return (
      <form className="picker list" onSubmit={this.goToRes}>
        <label>
          <h1>Pick a list name</h1>
          <p>
            Enter a name for your list below, and if the name isn't taken we can
            get started! Let's make this year even better than the last!
          </p>
          <input type="text" ref={this.resInputRef} autoFocus required />
        </label>
        <button type="submit">Go To List ➡</button>
      </form>
    );
  }
}

export default Picker;
